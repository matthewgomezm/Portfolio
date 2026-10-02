import Image from "next/image";
import type { Entry, Media, TextPart } from "@/lib/content";
import { asset } from "@/lib/site";
import { cn } from "@/lib/utils";
import { AutoplayVideo } from "@/components/autoplay-video";
import { GitHubIcon } from "@/components/icons";

export function EntryMedia({
  media,
  sizes,
  className,
}: {
  media: Media;
  sizes: string;
  className?: string;
}) {
  const shared = cn("h-auto w-full rounded-lg bg-muted object-cover", className);

  if (media.kind === "video") {
    return (
      <AutoplayVideo
        src={asset(media.src)}
        poster={asset(media.poster)}
        label={media.label}
        width={media.width}
        height={media.height}
        className={shared}
      />
    );
  }

  return (
    <Image
      src={asset(media.src)}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes={sizes}
      loading="lazy"
      className={shared}
    />
  );
}

function Paragraph({ parts }: { parts: TextPart[] }) {
  return (
    <p>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          part
        ) : (
          <a
            key={i}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-heading underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:decoration-garnet dark:hover:decoration-blush"
          >
            {part.text}
          </a>
        )
      )}
    </p>
  );
}

export function EntryText({ entry }: { entry: Entry }) {
  return (
    <div className="flex flex-1 flex-col">
      <h3 className="font-serif text-2xl leading-tight font-bold text-heading">
        {entry.title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{entry.org}</p>

      <div className="mt-4 max-w-prose space-y-3 leading-relaxed">
        {entry.body.map((parts, i) => (
          <Paragraph key={i} parts={parts} />
        ))}
      </div>

      {entry.tags && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
          {entry.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-gold/60 px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}

      {entry.repo && (
        <a
          href={entry.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center pt-6 gap-2 rounded-full text-sm font-medium text-heading underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <GitHubIcon className="size-4" />
          View code on GitHub
        </a>
      )}
    </div>
  );
}
