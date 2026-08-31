import Link from "next/link";
import { Logo } from "@/components/logo";

const FOOTER_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
	<footer className="border-t bg-card">
	  <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
		<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
		  <Link
			href="/"
			className="inline-flex items-center gap-1.5"
			aria-label="Documind Home"
		  >
			<span className="flex size-8 items-center justify-center">
			  <Logo className="size-16 fill-primary" />
			</span>
			<span className="text-lg font-bold tracking-wide text-primary">
			  DocuMind
			</span>
		  </Link>

		  <nav
			aria-label="Footer"
			className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
		  >
			{FOOTER_LINKS.map((link) => (
			  <Link
				key={link.href}
				href={link.href}
				className="text-sm text-muted-foreground transition-colors hover:text-primary"
			  >
				{link.label}
			  </Link>
			))}
		  </nav>
		</div>

		<div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
		  © {new Date().getFullYear()} Ali Asghar. All rights reserved.
		</div>
	  </div>
	</footer>
  );
}
