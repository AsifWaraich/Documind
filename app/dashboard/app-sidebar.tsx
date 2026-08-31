"use client";
import { type ComponentProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = [
  {
	title: "Overview",
	url: "/dashboard",
	isActive: true,
	svg: (
	  <svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	  >
		<path d="M3 10C3 10.5523 3.44772 11 4 11L12 11C12.5523 11 13 10.5523 13 10V4C13 3.44772 12.5523 3 12 3H4C3.44772 3 3 3.44772 3 4V10ZM11 20C11 20.5523 11.4477 21 12 21H20C20.5523 21 21 20.5523 21 20V14C21 13.4477 20.5523 13 20 13H12C11.4477 13 11 13.4477 11 14V20ZM13 15H19V19H13V15ZM3 20C3 20.5523 3.44772 21 4 21H8C8.55229 21 9 20.5523 9 20V14C9 13.4477 8.55229 13 8 13H4C3.44772 13 3 13.4477 3 14V20ZM5 19V15H7V19H5ZM5 9V5L11 5L11 9L5 9ZM20 11C20.5523 11 21 10.5523 21 10V4C21 3.44772 20.5523 3 20 3H16C15.4477 3 15 3.44772 15 4V10C15 10.5523 15.4477 11 16 11H20ZM19 9H17V5H19V9Z"></path>
	  </svg>
	),
  },
  {
	title: "Projects",
	url: "/dashboard/projects",
	isActive: false,
	svg: (
	  <svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	  >
		<path d="M5.00098 5V19H19.001V5H5.00098ZM5.00098 3H19.001C20.1055 3 21.001 3.89543 21.001 5V19C21.001 20.1046 20.1055 21 19.001 21H5.00098C3.89641 21 3.00098 20.1046 3.00098 19V5C3.00098 3.89543 3.89641 3 5.00098 3ZM8.00098 7H10.001C10.5533 7 11.001 7.44772 11.001 8V16C11.001 16.5523 10.5533 17 10.001 17H8.00098C7.44869 17 7.00098 16.5523 7.00098 16V8C7.00098 7.44772 7.44869 7 8.00098 7ZM14.001 7H16.001C16.5533 7 17.001 7.44772 17.001 8V12C17.001 12.5523 16.5533 13 16.001 13H14.001C13.4487 13 13.001 12.5523 13.001 12V8C13.001 7.44772 13.4487 7 14.001 7Z"></path>
	  </svg>
	),
  },
  {
	title: "Documents",
	url: "/dashboard/documents",
	isActive: false,
	svg: (
	  <svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
	  >
		<path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
	  </svg>
	),
  },
  {
	title: "Comments",
	url: "/dashboard/comments",
	isActive: false,
	svg: (
	  <svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="lucide lucide-message-square-text-icon lucide-message-square-text"
	  >
		<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
		<path d="M7 11h10" />
		<path d="M7 15h6" />
		<path d="M7 7h8" />
	  </svg>
	),
  },
];

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
	<Sidebar collapsible="icon" {...props}>
	  <SidebarContent className="mt-32">
		{data.map((item) => (
		  <SidebarMenu key={item.url}>
			<SidebarMenuItem className="mt-2">
			  <SidebarMenuButton
				className="text-base"
				asChild
				isActive={
				  item.url === "/dashboard"
					? pathname === item.url
					: pathname.startsWith(item.url)
				}
			  >
				<Link href={item.url}>
				  {" "}
				  {item.svg} {item.title}
				</Link>
			  </SidebarMenuButton>
			</SidebarMenuItem>
		  </SidebarMenu>
		))}
	  </SidebarContent>
	  <SidebarRail />
	</Sidebar>
  );
}
