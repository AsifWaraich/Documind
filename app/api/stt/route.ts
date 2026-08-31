import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const MAX_AUDIO_BYTES = 20 * 1024 * 1024;

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
	return NextResponse.json({ error: "Unauthenticated User" }, { status: 401 });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
	return NextResponse.json(
	  { error: "Speech service is not configured." },
	  { status: 500 },
	);
  }

  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("multipart/form-data")) {
	return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const audio = (await req.formData()).get("audio");
  if (!(audio instanceof File)) {
	return NextResponse.json({ error: "No audio received." }, { status: 400 });
  }
  if (audio.size === 0 || audio.size > MAX_AUDIO_BYTES) {
	return NextResponse.json(
	  { error: "Recording is empty or too large." },
	  { status: 400 },
	);
  }

  const upstream = new FormData();
  upstream.append("file", audio, "speech.webm");
  upstream.append("model", "whisper-large-v3-turbo");
  upstream.append("temperature", "0");

  try {
	const res = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
	  method: "POST",
	  headers: { Authorization: `Bearer ${apiKey}` },
	  body: upstream,
	});
	if (!res.ok) {
	  const detail = await res.text().catch(() => "");
	  console.error("Groq STT error:", res.status, detail);
	  return NextResponse.json(
		{ error: "Transcription failed. Please try again." },
		{ status: 502 },
	  );
	}
	const data = (await res.json()) as { text?: string };
	return NextResponse.json({ text: data.text ?? "" });
  } catch (err) {
	console.error("STT request failed:", err);
	return NextResponse.json(
	  { error: "Could not reach the speech service." },
	  { status: 502 },
	);
  }
}
