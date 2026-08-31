"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Mic } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type RecorderState = "idle" | "recording" | "transcribing";

export default function SpeechToText({
  onStart,
  onTranscript,
  disabled = false,
}: {
  onStart?: () => void;
  onTranscript: (text: string) => void;
  disabled?: boolean;
}) {
  const [state, setState] = useState<RecorderState>("idle");
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const vadTimerRef = useRef<number | null>(null);

  function stopTracks() {
	streamRef.current?.getTracks().forEach((track) => track.stop());
	streamRef.current = null;
  }

  function stopVad() {
	if (vadTimerRef.current !== null) {
	  clearTimeout(vadTimerRef.current);
	  vadTimerRef.current = null;
	}
	void audioCtxRef.current?.close().catch(() => {});
	audioCtxRef.current = null;
  }

  useEffect(
	() => () => {
	  try {
		recorderRef.current?.stop();
	  } catch {}
	  stopTracks();
	  stopVad();
	},
	[],
  );

  function startVad(stream: MediaStream, recorder: MediaRecorder) {
	const Ctx =
	  window.AudioContext ??
	  (window as unknown as { webkitAudioContext?: typeof AudioContext })
		.webkitAudioContext;
	if (!Ctx) return;

	const ctx = new Ctx();
	audioCtxRef.current = ctx;
	const analyser = ctx.createAnalyser();
	analyser.fftSize = 512;
	ctx.createMediaStreamSource(stream).connect(analyser);

	const buf = new Float32Array(analyser.fftSize);
	const startedAt = Date.now();
	let lastSoundAt = startedAt;

	const tick = () => {
	  if (recorder.state !== "recording") return;
	  analyser.getFloatTimeDomainData(buf);
	  let sum = 0;
	  for (let i = 0; i < buf.length; i++) sum += buf[i] * buf[i];
	  if (Math.sqrt(sum / buf.length) > 0.015) lastSoundAt = Date.now();

	  const now = Date.now();
	  const spokeAndWentQuiet =
		lastSoundAt > startedAt && now - lastSoundAt >= 2500;
	  const neverSpoke = lastSoundAt === startedAt && now - startedAt >= 8000;
	  if (spokeAndWentQuiet || neverSpoke) {
		try {
		  recorder.stop();
		} catch {}
		return;
	  }
	  vadTimerRef.current = window.setTimeout(tick, 200);
	};
	tick();
  }

  async function start() {
	if (
	  !navigator.mediaDevices?.getUserMedia ||
	  typeof MediaRecorder === "undefined"
	) {
	  toast.error("Audio recording isn't supported in this browser.");
	  return;
	}
	if (!window.isSecureContext) {
	  toast.error(
		"Microphones only work on localhost or HTTPS. Open the app via http://localhost:3000.",
	  );
	  return;
	}

	let stream: MediaStream;
	try {
	  stream = await navigator.mediaDevices.getUserMedia({ audio: true });
	} catch (err) {
	  const name = err instanceof DOMException ? err.name : "";
	  if (name === "NotAllowedError" || name === "SecurityError") {
		toast.error(
		  "Microphone blocked. Allow it via the address-bar site settings, then reload.",
		  { duration: 10000 },
		);
	  } else if (name === "NotFoundError") {
		toast.error("No microphone was detected on this device.");
	  } else {
		toast.error("Couldn't access your microphone.");
	  }
	  return;
	}

	streamRef.current = stream;
	chunksRef.current = [];
	const mime = MediaRecorder.isTypeSupported("audio/webm")
	  ? "audio/webm"
	  : undefined;
	const recorder = mime
	  ? new MediaRecorder(stream, { mimeType: mime })
	  : new MediaRecorder(stream);

	recorder.ondataavailable = (e) => {
	  if (e.data.size > 0) chunksRef.current.push(e.data);
	};
	recorder.onstop = () => {
	  stopVad();
	  stopTracks();
	  const blob = new Blob(chunksRef.current, {
		type: recorder.mimeType || "audio/webm",
	  });
	  chunksRef.current = [];
	  recorderRef.current = null;
	  if (blob.size === 0) {
		setState("idle");
		return;
	  }
	  void transcribe(blob);
	};

	recorder.start();
	recorderRef.current = recorder;
	onStart?.();
	setState("recording");
	startVad(stream, recorder);
  }

  async function transcribe(blob: Blob) {
	setState("transcribing");
	try {
	  const fd = new FormData();
	  fd.append("audio", blob, "speech.webm");
	  const res = await fetch("/api/stt", { method: "POST", body: fd });
	  const data = (await res.json().catch(() => null)) as {
		text?: string;
		error?: string;
	  } | null;
	  if (!res.ok) {
		throw new Error(data?.error ?? "Transcription failed.");
	  }
	  const text = data?.text?.trim();
	  if (text) onTranscript(text);
	} catch (err) {
	  toast.error(
		err instanceof Error ? err.message : "Transcription failed.",
	  );
	} finally {
	  setState("idle");
	}
  }

  function toggle() {
	if (state === "recording") {
	  try {
		recorderRef.current?.stop();
	  } catch {}
	  stopVad();
	} else if (state === "idle") {
	  void start();
	}
  }

  const busy = state !== "idle";

  return (
	<Button
	  type="button"
	  variant={state === "recording" ? "secondary" : "ghost"}
	  size="icon-sm"
	  onClick={toggle}
	  disabled={disabled || state === "transcribing"}
	  className={cn(
		"rounded-full text-muted-foreground hover:bg-muted hover:text-foreground",
		state === "recording" && "animate-pulse bg-primary/15 text-primary",
	  )}
	  title={
		state === "idle"
		  ? "Record a voice message"
		  : state === "recording"
			? "Recording — stops automatically after you pause"
			: "Transcribing…"
	  }
	  aria-label={busy ? "Stop recording" : "Start voice input"}
	  aria-pressed={state === "recording"}
	>
	  {state === "transcribing" ? (
		<Loader2 className="size-4 animate-spin" />
	  ) : (
		<Mic className="size-4" />
	  )}
	</Button>
  );
}
