"use client";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export function ChatFab({ onClick }: { onClick: () => void }) {
  return (
	<button
	  type="button"
	  onClick={onClick}
	  aria-label="Open chat"
	  className={cn(
		"fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full border border-border bg-primary shadow-lg shadow-black/25 transition-transform duration-200 hover:scale-105 active:scale-95 lg:hidden",
	  )}
	  style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
	>
	  <Logo className="size-10  fill-primary-foreground" />
	</button>
  );
}
