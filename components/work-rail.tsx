"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Group = { label: string; items: { id: string; title: string }[] };

// Sticky index beside the work scroll. Highlights whichever entry is crossing
// the middle band of the viewport.
export function WorkRail({ groups }: { groups: Group[] }) {
  const [active, setActive] = useState<string | null>(null);
  const ids = groups.flatMap((g) => g.items.map((item) => item.id)).join(" ");

  useEffect(() => {
    const els = ids
      .split(" ")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return (
    <nav aria-label="Work index" className="sticky top-24 hidden self-start lg:block">
      {groups.map((group) => (
        <div key={group.label} className="mb-8">
          <p className="text-sm text-muted-foreground">{group.label}</p>
          <ul className="mt-3 space-y-2 border-l border-border">
            {group.items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  className={cn(
                    "-ml-px block border-l-2 border-transparent py-0.5 pl-3 text-sm leading-snug text-muted-foreground transition-colors hover:text-heading focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    active === item.id && "border-signal font-medium text-heading"
                  )}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
