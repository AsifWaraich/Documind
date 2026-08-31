import { ChevronDown } from "lucide-react";

const FAQS = [
  {
	question: "What are the document limits?",
	answer:
	  "Each project accepts 1 to 3 PDFs with a maximum size of 5 MB per file. This keeps ingestion fast and your workspace lean. You can create multiple projects to organize different bodies of work.",
  },
  {
	question: "How does DocuMind handle tables in PDFs?",
	answer:
	  "Tables are detected before the text is split, so rows stay grouped together instead of getting scattered. Each table is also summarized in plain language, which means you can ask about it naturally and still find it.",
  },
  {
	question: "What happens when my question isn't in my documents?",
	answer:
	  "DocuMind can look online for the answer and clearly marks it as coming from the web with source links. Prefer a closed book? Disable web search per project and every answer stays strictly grounded in your files.",
  },
  {
	question: "Can I trust the answers?",
	answer:
	  "Every answer includes reference chips that jump to the exact page and highlighted passage in the original PDF. Before anything reaches you, the supporting material is double-checked against your question — if it looks weak, DocuMind searches again rather than guessing.",
  },
  {
	question: "Is my data isolated from other users?",
	answer:
	  "Yes. Your documents, chat history, highlights, and notes live in private workspaces scoped to your account. Nothing is ever mixed or shared between users.",
  },
  {
	question: "Which fields is DocuMind built for?",
	answer:
	  "Four domains at launch: General Purpose, Academic & Education, Professional & Office, and Medical & Healthcare. Pick one when creating a project and DocuMind adapts its tone and focus to match how that field reads.",
  },
  {
	question: "Can I talk instead of typing?",
	answer:
	  "Yes. Dictate your questions with speech-to-text, and have any answer — or the raw text of your documents — read back aloud with natural voices. Handy for reviewing on the move.",
  },
  {
	question: "Do my highlights and notes survive a refresh?",
	answer:
	  "Everything you highlight, note, or draw on a page is saved to your account and restored automatically the next time you open the document — same place, same page.",
  },
];

export function Faq() {
  return (
	<section>
	  <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div className="text-center">
		  <span className="text-sm font-semibold uppercase tracking-widest text-primary">
			FAQ
		  </span>
		  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
			Questions, answered
		  </h2>
		</div>

		<div className="mt-10 space-y-3">
		  {FAQS.map((faq) => (
			<details
			  key={faq.question}
			  className="group rounded-xl border bg-card px-6 py-5 shadow-sm transition-colors open:border-primary/40"
			>
			  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold [&::-webkit-details-marker]:hidden">
				{faq.question}
				<ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
			  </summary>
			  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
				{faq.answer}
			  </p>
			</details>
		  ))}
		</div>
	  </div>
	</section>
  );
}
