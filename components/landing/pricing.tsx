import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLANS = [
  {
	name: "Free",
	price: "$0",
	tagline: "Everything you need to start",
	features: [
	  "7 projects max",
	  "Up to 3 PDFs per project (5 MB each)",
	  "1.5 million token quota for a month",
	  "Citations, highlights & voice",
	],
	cta: "Start for free",
	href: "/dashboard",
	variant: "outline" as const,
	featured: false,
  },
  {
	name: "Pro",
	price: "$5",
	tagline: "For heavy readers and professionals",
	features: [
	  "20 projects max",
	  "Up to 3 PDFs per project (5 MB each)",
	  "5 million token quota for a month",
	  "Priority processing on Groq",
	  "Early access to new agentic features",
	  "24/7 customer support",
	],
	cta: "Go Pro",
	href: "/dashboard",
	variant: "default" as const,
	featured: true,
  },
];

export function Pricing() {
  return (
	<section id="pricing" className="scroll-mt-20">
	  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div className="mx-auto max-w-2xl text-center">
		  <span className="text-sm font-semibold uppercase tracking-widest text-primary">
			Pricing
		  </span>
		  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
			Start free, upgrade when your reading list grows
		  </h2>
		</div>

		<div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
		  {PLANS.map((plan) => (
			<div
			  key={plan.name}
			  className={`relative flex flex-col rounded-xl border bg-card p-7 ${
				plan.featured
				  ? "border-primary shadow-lg shadow-primary/10"
				  : "shadow-sm"
			  }`}
			>
			  {plan.featured && (
				<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
				  Most popular
				</span>
			  )}
			  <h3 className="font-semibold">{plan.name}</h3>
			  <div className="mt-2 flex items-baseline gap-1">
				<span className="text-4xl font-extrabold tracking-tight">
				  {plan.price}
				</span>
				<span className="text-sm text-muted-foreground">/month</span>
			  </div>
			  <p className="mt-2 text-sm text-muted-foreground">
				{plan.tagline}
			  </p>
			  <ul className="mt-6 flex-1 space-y-2.5">
				{plan.features.map((feature) => (
				  <li key={feature} className="flex items-start gap-2.5">
					<Check className="mt-0.5 size-4 shrink-0 text-primary" />
					<span className="text-sm">{feature}</span>
				  </li>
				))}
			  </ul>
			  <Button
				asChild
				variant={plan.variant}
				size="lg"
				className="mt-7 h-10 w-full"
			  >
				<Link href={plan.href}>{plan.cta}</Link>
			  </Button>
			</div>
		  ))}
		</div>
	  </div>
	</section>
  );
}
