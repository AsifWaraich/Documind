import { NextRequest } from "next/server";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";
import { Readable } from "node:stream";

function pickVoice(category: string) {
  switch (category) {
	case "Medical & Healthcare":
	  return "en-US-GuyNeural";
	case "Academic & Study Notes":
	  return "en-US-JennyNeural";
	case "Technical & Code Docs":
	  return "en-US-AndrewNeural";
	default:
	  return "en-US-AriaNeural";
  }
}

async function synthesize(text: string, category: string) {
  const tts = new MsEdgeTTS();
  await tts.setMetadata(
	pickVoice(category),
	OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3,
  );
  const { audioStream } = tts.toStream(text);
  const webStream = Readable.toWeb(audioStream) as unknown as BodyInit;
  return new Response(webStream, {
	headers: {
	  "Content-Type": "audio/mpeg",
	  "Transfer-Encoding": "chunked",
	  "Cache-Control": "no-cache, no-store, must-revalidate",
	  "Accept-Ranges": "none",
	},
  });
}

export async function GET(req: NextRequest) {
  try {
	const { searchParams } = new URL(req.url);
	const text = searchParams.get("text");
	const category = searchParams.get("category") || "General Purpose";
	if (!text) return new Response("Text required", { status: 400 });
	return await synthesize(text, category);
  } catch {
	return new Response("Error", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
	const body = await req.json();
	const text = body.text as string | undefined;
	const category = (body.category as string) || "General Purpose";
	if (!text) return new Response("Text required", { status: 400 });
	return await synthesize(text, category);
  } catch {
	return new Response("Error", { status: 500 });
  }
}
