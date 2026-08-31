const TESTIMONIALS = [
  {
	initials: "SK",
	name: "Sarah Kim",
	role: "PhD Candidate",
	quote:
	  "The citation chips sold me. I click a reference and the reader scrolls straight to the highlighted paragraph — verification takes seconds instead of minutes.",
  },
  {
	initials: "MR",
	name: "Marcus Reed",
	role: "Legal Analyst",
	quote:
	  "I've thrown 90-page contracts at it. Tables, clauses, appendices — it finds the exact clause and tells me which page it's on. Nothing else handled our documents this cleanly.",
  },
  {
	initials: "AP",
	name: "Anita Patel",
	role: "Product Manager",
	quote:
	  "Split-screen reading while chatting changed how my team works with specs. Ask a question, check the source, keep moving. No tab-switching chaos.",
  },
];

export function Testimonials() {
  return (
	<section>
	  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div className="mx-auto max-w-2xl text-center">
		  <span className="text-sm font-semibold uppercase tracking-widest text-primary">
			Testimonials
		  </span>
		  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
			Readers who stopped skimming
		  </h2>
		</div>

		<div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
		  {TESTIMONIALS.map((t) => (
			<figure
			  key={t.name}
			  className="flex flex-col rounded-xl border bg-card p-6 shadow-sm"
			>
			  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
				“{t.quote}”
			  </blockquote>
			  <figcaption className="mt-5 flex items-center gap-3 border-t pt-4">
				<div className="flex size-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
				  {t.initials}
				</div>
				<div>
				  <div className="text-sm font-semibold">
					{t.name}
				  </div>
				  <div className="text-xs text-muted-foreground">
					{t.role}
				  </div>
				</div>
			  </figcaption>
			</figure>
		  ))}
		</div>
	  </div>
	</section>
  );
}
