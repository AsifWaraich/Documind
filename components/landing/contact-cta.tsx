import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
	<section id="contact" className="scroll-mt-20">
	  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12">
		  <div
			aria-hidden="true"
			className="absolute inset-0 opacity-[0.07]"
			style={{
			  backgroundImage:
				"linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
			  backgroundSize: "32px 32px",
			}}
		  />
		  <div
			aria-hidden="true"
			className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
		  />
		  <div className="relative">
			<h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">
			  Ready to think faster than you read?
			</h2>
			<p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed opacity-80 sm:text-base">
			  Create your first project in under a minute. Upload
			  a PDF, ask a question, and see every answer traced
			  back to its source.
			</p>
			<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
			  <Button
				asChild
				size="lg"
				variant="secondary"
				className="h-11 px-7 text-base"
			  >
				<Link href="/dashboard">
				  Create your first project
				  <ArrowRight data-icon="inline-end" />
				</Link>
			  </Button>
			  <Button
				asChild
				size="lg"
				variant="ghost"
				className="h-11 gap-2 border border-primary-foreground/25 px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
			  >
				<a href="mailto:iamaliasghar37@gmail.com">
				  <Mail data-icon="inline-start" />
				  iamaliasghar37@gmail.com
				</a>
			  </Button>
			</div>
		  </div>
		</div>
	  </div>
	</section>
  );
}
