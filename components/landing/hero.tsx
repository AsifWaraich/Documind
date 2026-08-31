import Link from "next/link";
import { ArrowRight, FileText, Quote, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

function FloatingChip({
  className,
  children,
  delay = "0s",
}: {
  className?: string;
  children: React.ReactNode;
  delay?: string;
}) {
  return (
	<div
	  style={{ animationDelay: delay }}
	  className={`animate-float absolute z-10 hidden items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 text-xs font-medium text-foreground shadow-md lg:flex ${className}`}
	>
	  {children}
	</div>
  );
}

function SkeletonLine({ className }: { className?: string }) {
  return <div className={`h-2 rounded-full bg-muted ${className ?? ""}`} />;
}

function ProductMockup() {
  return (
	<div className="relative mx-auto mt-14 w-full max-w-4xl">
	  <FloatingChip className="-left-10 top-16" delay="0.3s">
		<ShieldCheck className="size-3.5 text-primary" />
		Checked against your files
	  </FloatingChip>
	  <FloatingChip className="-right-8 top-8" delay="1.2s">
		<FileText className="size-3.5 text-primary" />
		report-q3.pdf
	  </FloatingChip>
	  <FloatingChip className="-bottom-5 left-16" delay="2s">
		<Quote className="size-3.5 text-primary" />
		Jump to source · Page 4
	  </FloatingChip>

	  <div className="overflow-hidden rounded-xl border bg-card shadow-xl">
		<div className="flex items-center gap-2 border-b px-4 py-2.5">
		  <span className="size-2.5 rounded-full bg-red-400" />
		  <span className="size-2.5 rounded-full bg-yellow-400" />
		  <span className="size-2.5 rounded-full bg-green-400" />
		  <div className="ml-3 flex-1 rounded-md bg-muted px-3 py-1 text-[11px] text-muted-foreground">
			documind · project: Q3 Research
		  </div>
		</div>

		<div className="grid grid-cols-1 sm:min-h-[27rem] sm:grid-cols-5">
		  <div className="space-y-3 p-5 sm:col-span-3 sm:p-6">
			<div className="mb-4 flex items-center gap-2">
			  <FileText className="size-4 text-primary" />
			  <span className="text-xs font-semibold text-muted-foreground">
				REPORT-Q3.PDF
			  </span>
			</div>
			<SkeletonLine className="w-full" />
			<SkeletonLine className="w-11/12" />
			<SkeletonLine className="w-full" />
			<SkeletonLine className="w-5/6" />
			<SkeletonLine className="w-full" />
			<div className="rounded-r-md border-l-[3px] border-primary bg-primary/15 py-2 pl-3 pr-2">
			  <SkeletonLine className="w-full bg-primary/25" />
			  <SkeletonLine className="mt-2 w-2/3 bg-primary/25" />
			</div>
			<SkeletonLine className="w-full" />
			<SkeletonLine className="w-10/12" />
			<SkeletonLine className="w-full" />
			<SkeletonLine className="w-8/9" />
			<SkeletonLine className="w-11/12" />
			<SkeletonLine className="w-3/5" />
			<div className="flex items-center justify-between pt-2 text-[10px] text-muted-foreground">
			  <span>Page 4</span>
			  <span>42 pages · fully indexed</span>
			</div>
		  </div>

		  <div className="flex flex-col gap-4 border-t p-5 sm:col-span-2 sm:border-l sm:border-t-0 sm:p-6">
			<div className="flex justify-end">
			  <div className="max-w-[85%] rounded-2xl bg-primary px-3.5 py-2 text-xs leading-relaxed text-primary-foreground shadow-sm sm:text-[13px]">
				What drove the revenue jump in Q3?
			  </div>
			</div>
			<div className="max-w-[92%] px-1 text-xs leading-relaxed sm:text-[13px]">
			  Revenue grew 34% quarter-over-quarter, led mainly
			  by the EMEA market expansion and stronger
			  subscription renewals in existing accounts.
			</div>
			<div>
			  <button
				type="button"
				className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-secondary/50 px-2.5 py-1 text-[11px] font-medium text-secondary-foreground transition-colors hover:bg-secondary hover:text-foreground"
			  >
				<FileText className="size-3.5 shrink-0" />
				report-q3.pdf (p. 4)
			  </button>
			</div>
			<div className="mt-auto flex items-center gap-2 rounded-full border bg-background px-3.5 py-2 shadow-sm">
			  <span className="flex-1 truncate text-xs text-muted-foreground">
				Ask anything about your documents…
			  </span>
			  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary">
				<Send className="size-3.5 text-primary-foreground" />
			  </span>
			</div>
		  </div>
		</div>
	  </div>

	  <div
		aria-hidden="true"
		className="absolute inset-x-8 -bottom-6 -z-10 h-16 rounded-[100%] bg-primary/20 blur-2xl"
	  />
	</div>
  );
}

export function Hero() {
  return (
	<section className="relative overflow-hidden">
	  <div
		aria-hidden="true"
		className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
	  >
		<div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_15%,transparent_70%)]" />
		<div className="animate-drift absolute -top-32 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
		<div className="animate-drift-alt absolute -right-40 top-48 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />
		<div className="animate-pulse-glow absolute -left-44 bottom-[-6rem] h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" />
	  </div>

	  <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
		<div className="animate-fade-up flex justify-center">
		  <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm sm:text-sm">
			<span className="size-2 animate-blink-dot rounded-full bg-primary" />
			Every answer checked against your documents
		  </span>
		</div>

		<h1
		  className="animate-fade-up mx-auto mt-6 max-w-3xl text-balance text-center text-4xl font-extrabold leading-[1.1] tracking-tight sm:mt-8 sm:text-5xl lg:text-6xl"
		  style={{ animationDelay: "0.1s" }}
		>
		  Chat with your documents.{" "}
		  <span className="text-primary">Trust every answer.</span>
		</h1>

		<p
		  className="animate-fade-up mx-auto mt-5 max-w-2xl text-pretty text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
		  style={{ animationDelay: "0.2s" }}
		>
		  Upload your PDFs, ask anything, and get clear answers
		  traced back to the exact page — tables, clauses, and
		  footnotes included.
		</p>

		<div
		  className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
		  style={{ animationDelay: "0.3s" }}
		>
		  <Button
			asChild
			size="lg"
			className="h-11 px-7 text-base shadow-lg shadow-primary/25"
		  >
			<Link href="/dashboard">
			  Start for free
			  <ArrowRight data-icon="inline-end" />
			</Link>
		  </Button>
		  <Button
			asChild
			variant="outline"
			size="lg"
			className="h-11 px-7 text-base"
		  >
			<Link href="#how-it-works">See how it works</Link>
		  </Button>
		</div>

		<p
		  className="animate-fade-up mt-4 text-center text-xs text-muted-foreground"
		  style={{ animationDelay: "0.35s" }}
		>
		  No credit card required · Free tier included
		</p>

		<div
		  className="animate-fade-up"
		  style={{ animationDelay: "0.45s" }}
		>
		  <ProductMockup />
		</div>

		<figure className="mx-auto mt-14 max-w-2xl text-center">
		  <div
			aria-hidden="true"
			className="text-5xl leading-none text-primary/30"
		  >
			&ldquo;
		  </div>
		  <blockquote className="-mt-3 text-lg font-medium italic tracking-tight text-foreground/85 sm:text-xl">
			Don&rsquo;t read harder. Read smarter.
		  </blockquote>
		</figure>
	  </div>
	</section>
  );
}
