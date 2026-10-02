"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/projects", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="rounded-sm font-serif text-xl font-bold text-heading focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          aria-label="Matthew Gomez-Morales, home"
        >
          <span className="sm:hidden">MGM</span>
          <span className="hidden sm:inline">Matthew Gomez-Morales</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-1 text-sm font-medium">
            {nav.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(`${href}/`);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-full px-4 py-2 text-muted-foreground transition-colors hover:text-heading focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                      active && "bg-secondary text-heading"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
