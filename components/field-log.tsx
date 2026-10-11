import type { FieldEntry } from "@/lib/content";
import { asset } from "@/lib/site";
import { Paragraph } from "@/components/entry";

// A dated log of things done in person, newest first.
export function FieldLog({ entries }: { entries: FieldEntry[] }) {
  return (
    <ol className="mt-10">
      {entries.map((entry) => (
        <li
          key={`${entry.title}-${entry.date}`}
          className="grid gap-4 border-t border-border py-10 sm:grid-cols-[6.5rem_minmax(0,1fr)] md:grid-cols-[6.5rem_minmax(0,1fr)_minmax(0,18rem)] md:gap-10"
        >
          <p className="text-sm text-muted-foreground tabular-nums">{entry.date}</p>

          <div>
            <h3 className="font-semiwide text-2xl leading-tight font-bold text-heading md:text-[1.75rem]">
              {entry.href ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm underline decoration-signal decoration-2 underline-offset-[6px] transition-colors hover:text-signal focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {entry.title}
                </a>
              ) : (
                entry.title
              )}
            </h3>
            <p className="mt-2 text-muted-foreground">{entry.place}</p>
            <div className="mt-4 max-w-prose text-[1.0625rem] leading-relaxed">
              <Paragraph parts={entry.body} />
            </div>
          </div>

          {entry.photo && (
            // Static export can't resize images at request time, so the
            // widths are pre-built and offered through srcSet instead.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset(entry.photo.src)}
              srcSet={[...(entry.photo.smaller ?? []), entry.photo]
                .map((file) => `${asset(file.src)} ${file.width}w`)
                .join(", ")}
              sizes="(min-width: 768px) 288px, (min-width: 640px) calc(100vw - 13rem), calc(100vw - 2rem)"
              alt={entry.photo.alt}
              width={entry.photo.width}
              height={entry.photo.height}
              loading="lazy"
              decoding="async"
              className="h-auto w-full max-w-sm rounded-sm bg-muted object-cover sm:col-start-2 md:col-start-auto"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
