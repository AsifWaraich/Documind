"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useProjectHeader } from "@/components/project-header-context";
import { Logo } from "@/components/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#features" },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/#contact" },
];

export function TopNavbar() {
  const pathname = usePathname();
  const isChatPage = pathname.startsWith("/chat");
  const isDashboard = pathname.startsWith("/dashboard");
  const { isSignedIn } = useUser();
  const { projectTitle } = useProjectHeader();

  return (
	<header className="sticky top-0 z-40 w-full self-center border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
	  <div className="relative mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
		<Link
		  href="/"
		  className="inline-flex items-center gap-1"
		  aria-label="Documind Home"
		>
		  <span className="flex size-10 items-center justify-center text-2xl">
			<Logo className="fill-primary" />
		  </span>
		  <span className="text-xl font-bold text-primary tracking-wide">
			DocuMind
		  </span>
		</Link>

		{isChatPage && projectTitle ? (
		  <div className="pointer-events-none absolute inset-x-0 hidden justify-center px-20 lg:flex">
			<span className="max-w-[min(70vw,42rem)] truncate text-base font-semibold text-foreground sm:text-lg">
			  Project: {projectTitle}
			</span>
		  </div>
		) : (
		  <div>
			{!isDashboard && (
			  <NavigationMenu className="hidden md:flex">
				<NavigationMenuList>
				  {navLinks.map((link) => (
					<NavigationMenuItem key={link.href}>
					  <NavigationMenuLink
						asChild
						className={cn(
						  navigationMenuTriggerStyle(),
						  "text-base",
						  pathname === link.href && "bg-muted text-foreground",
						)}
					  >
						<Link href={link.href}>{link.label}</Link>
					  </NavigationMenuLink>
					</NavigationMenuItem>
				  ))}
				</NavigationMenuList>
			  </NavigationMenu>
			)}
		  </div>
		)}

		{!isDashboard && (
		  <div className="flex items-center gap-2">
			{!isSignedIn ? (
			  <>
				<SignInButton mode="modal">
				  <Button variant="ghost" className="text-base">
					Sign In
				  </Button>
				</SignInButton>
				<SignUpButton mode="modal">
				  <Button className="text-base">Sign Up</Button>
				</SignUpButton>
			  </>
			) : (
			  <>
				<Button asChild className="bg-primary">
				  <Link href="/dashboard">Dashboard</Link>
				</Button>
				<UserButton />
			  </>
			)}
		  </div>
		)}
		{isDashboard && <UserButton />}
	  </div>
	</header>
  );
}
