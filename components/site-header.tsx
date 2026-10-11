"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#field", label: "Field" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-black text-white">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link
          href="/"
          className="rounded-sm font-wide text-base font-extrabold tracking-tight uppercase focus-visible:ring-2 focus-visible:ring-[#ceb888] focus-visible:outline-none"
          aria-label="Matthew Gomez-Morales, home"
        >
          <span className="sm:hidden">MGM</span>
          <span className="hidden sm:inline">Gomez-Morales</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-0.5 text-sm font-medium sm:gap-1">
            {nav.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-sm px-2 py-2 text-neutral-400 sm:px-3 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#ceb888] focus-visible:outline-none",
                      active && "text-white underline decoration-[#ceb888] decoration-2 underline-offset-[6px]"
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
