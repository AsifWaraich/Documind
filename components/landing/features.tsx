import {
  FileUp,
  Globe,
  Highlighter,
  MessageSquareText,
  Mic,
  Search,
} from "lucide-react";

const FEATURES = [
  {
	icon: FileUp,
	title: "Tables stay intact",
	description:
	  "Spots tables before splitting text, keeping every row together so data never gets scrambled mid-answer.",
  },
  {
	icon: Search,
	title: "Searches meaning and wording",
	description:
	  "Looks through your documents two ways at once — exact words and overall meaning — then brings the strongest matches to the top.",
  },
  {
	icon: MessageSquareText,
	title: "Answers that check themselves",
	description:
	  "Every piece of context is double-checked against your question before answering. If something looks off, DocuMind searches again automatically.",
  },
  {
	icon: Globe,
	title: "Web fallback, your call",
	description:
	  "When the answer isn't in your files, DocuMind can look online and mark it clearly — or stay locked to your documents. You decide, per project.",
  },
  {
	icon: Highlighter,
	title: "Annotate & highlight",
	description:
	  "Highlight passages, jot notes, and draw shapes right on the page. Everything saves automatically and is waiting when you return.",
  },
  {
	icon: Mic,
	title: "Voice enabled",
	description:
	  "Dictate questions out loud, or have answers — and the document itself — read back to you.",
  },
];

export function Features() {
  return (
	<section id="features" className="scroll-mt-20">
	  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div className="mx-auto max-w-2xl text-center">
		  <span className="text-sm font-semibold uppercase tracking-widest text-primary">
			Features
		  </span>
		  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
			A research pipeline disguised as a chat box
		  </h2>
		  <p className="mt-4 text-muted-foreground">
			From protecting tables to checking its own sources,
			DocuMind handles the hard parts of reading — so you
			can just ask.
		  </p>
		</div>

		<div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
		  {FEATURES.map((feature) => (
			<div
			  key={feature.title}
			  className="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
			>
			  <div className="flex size-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 transition-colors group-hover:bg-primary/15">
				<feature.icon className="size-5 text-primary" />
			  </div>
			  <h3 className="mt-4 font-semibold">
				{feature.title}
			  </h3>
			  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
				{feature.description}
			  </p>
			</div>
		  ))}
		</div>
	  </div>
	</section>
  );
}
