import { FileUp, MessagesSquare, Quote } from "lucide-react";

const STEPS = [
  {
	number: "01",
	icon: FileUp,
	title: "Upload your PDFs",
	description:
	  "Create a project and drop in up to 3 documents. Layout-aware parsing keeps tables intact, and smart chunking preserves context.",
  },
  {
	number: "02",
	icon: MessagesSquare,
	title: "Ask anything",
	description:
	  "The agent analyzes your intent, expands your question into multiple search queries, and grades every retrieved chunk for relevance.",
  },
  {
	number: "03",
	icon: Quote,
	title: "Get cited answers",
	description:
	  "Every response ships with reference chips. Click one and the reader jumps straight to the highlighted source in your document.",
  },
];

export function HowItWorks() {
  return (
	<section id="how-it-works" className="scroll-mt-20">
	  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div className="mx-auto max-w-2xl text-center">
		  <span className="text-sm font-semibold uppercase tracking-widest text-primary">
			How it works
		  </span>
		  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
			From upload to verified answer in three steps
		  </h2>
		</div>

		<div className="relative mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
		  <div
			aria-hidden="true"
			className="absolute left-[16.66%] right-[16.66%] top-8 hidden border-t-2 border-dashed md:block"
		  />
		  {STEPS.map((step) => (
			<div key={step.number} className="relative text-center">
			  <div className="relative z-10 mx-auto flex size-16 items-center justify-center rounded-2xl border bg-card shadow-sm">
				<step.icon className="size-7 text-primary" />
				<span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-primary font-mono text-[10px] font-bold text-primary-foreground">
				  {step.number}
				</span>
			  </div>
			  <h3 className="mt-5 text-lg font-semibold">
				{step.title}
			  </h3>
			  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
				{step.description}
			  </p>
			</div>
		  ))}
		</div>
	  </div>
	</section>
  );
}
