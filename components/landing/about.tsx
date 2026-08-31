import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const HIGHLIGHTS = [
  "Answers drawn strictly from your uploaded files",
  "Weak sources trigger an automatic re-search — no guessing",
  "Private project workspaces that never mix your documents",
  "A tone that adapts to academic, professional, or medical reading",
];

const BENEFITS = [
  {
	title: "Plain-language answers",
	description: "Complex reports explained simply, jargon included.",
  },
  {
	title: "Citations on every claim",
	description: "Jump straight to the source page in one click.",
  },
  {
	title: "Your files stay yours",
	description: "Private, isolated workspaces per project.",
  },
  {
	title: "Works around the clock",
	description: "Clear answers whenever you need them.",
  },
];

export function About() {
  return (
	<section id="about" className="scroll-mt-20">
	  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
		  <div>
			<span className="text-sm font-semibold uppercase tracking-widest text-primary">
			  About DocuMind
			</span>
			<h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
			  Built for people who need to verify, not just
			  believe
			</h2>
			<p className="mt-4 leading-relaxed text-muted-foreground">
			  Most AI tools answer confidently and cite nothing.
			  DocuMind works like a careful researcher: it finds
			  the relevant pages, double-checks them against
			  your question, and shows you exactly where every
			  answer came from — before you have to ask.
			</p>
			<ul className="mt-6 space-y-3">
			  {HIGHLIGHTS.map((item) => (
				<li
				  key={item}
				  className="flex items-start gap-3"
				>
				  <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" />
				  <span className="text-sm leading-relaxed">
					{item}
				  </span>
				</li>
			  ))}
			</ul>
			<Button asChild size="lg" className="mt-8 h-10 px-6">
			  <Link href="/dashboard">Open dashboard</Link>
			</Button>
		  </div>

		  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{BENEFITS.map((benefit) => (
			  <div
				key={benefit.title}
				className="rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
			  >
				<h3 className="font-semibold text-primary">
				  {benefit.title}
				</h3>
				<p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
				  {benefit.description}
				</p>
			  </div>
			))}
		  </div>
		</div>
	  </div>
	</section>
  );
}
