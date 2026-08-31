import type { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return     <div className="h-[calc(100dvh-4rem)] overflow-hidden">{children}</div>;
}
