"use client";

import { useCallback, useRef, useState } from "react";
import type { PDFViewerRef } from "@embedpdf/react-pdf-viewer";
import { toast } from "sonner";

const MAX_WORDS = 2000;

export function useDocumentTTS(
  viewerRef: React.RefObject<PDFViewerRef | null>,
) {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stop = useCallback(() => {
	audioRef.current?.pause();
	audioRef.current = null;
	setPlaying(false);
  }, []);

  const speak = useCallback(
	async (category?: string) => {
	  if (playing) {
		stop();
		return;
	  }

	  setLoading(true);

	  try {
		const registry = await viewerRef.current?.registry;
		if (!registry) {
		  setLoading(false);
		  return;
		}

		const selection = registry.getPlugin("selection")?.provides?.();
		const scroll = registry.getPlugin("scroll")?.provides?.();
		const docMan = registry.getPlugin("document-manager")?.provides?.();
		const engine = registry.getEngine();

		if (!scroll || !docMan || !engine) {
		  setLoading(false);
		  return;
		}

		let text = "";

		if (selection) {
		  try {
			const result = await selection.getSelectedText().toPromise();
			if (result) {
			  text = (Array.isArray(result) ? result : [result])
				.filter(Boolean)
				.join("\n");
			}
		  } catch {
			// no selection
		  }
		}

		if (!text.trim()) {
		  const doc = docMan.getActiveDocument();
		  if (!doc) {
			setLoading(false);
			return;
		  }
		  const pageNumber = scroll.getCurrentPage();
		  const pageIndex = pageNumber - 1;
		  try {
			text = await engine.extractText(doc, [pageIndex]).toPromise();
		  } catch {
			// extraction failed
		  }
		}

		if (!text.trim()) {
		  setLoading(false);
		  toast.error("No text to read");
		  return;
		}

		const words = text.trim().split(/\s+/).length;
		if (words > MAX_WORDS) {
		  setLoading(false);
		  toast.error(
			`Text is too long (${words} words). Maximum is ${MAX_WORDS} words.`,
		  );
		  return;
		}

		const res = await fetch("/api/tts", {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify({ text: text.trim(), category }),
		});
		if (!res.ok) throw new Error("TTS request failed");

		const blob = await res.blob();
		const url = URL.createObjectURL(blob);
		const audio = new Audio(url);
		audioRef.current = audio;

		setLoading(false);
		setPlaying(true);
		audio.play().catch(() => setPlaying(false));

		audio.onended = () => {
		  URL.revokeObjectURL(url);
		  audioRef.current = null;
		  setPlaying(false);
		};

		audio.onerror = () => {
		  URL.revokeObjectURL(url);
		  audioRef.current = null;
		  setPlaying(false);
		  toast.error("Playback failed");
		};
	  } catch {
		setLoading(false);
		toast.error("Failed to generate audio");
	  }
	},
	[playing, stop, viewerRef],
  );

  return { playing, loading, speak, stop };
}
