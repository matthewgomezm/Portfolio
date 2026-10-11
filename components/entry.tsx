import Image from "next/image";
import { entryId, type Entry, type Media, type TextPart } from "@/lib/content";
import { asset } from "@/lib/site";
import { cn } from "@/lib/utils";
import { AutoplayVideo } from "@/components/autoplay-video";
import { GitHubIcon, OllamaLogo } from "@/components/icons";

const graphics = { ollama: OllamaLogo };

export function EntryMedia({
  media,
  sizes,
  className,
}: {
  media: Media;
  sizes: string;
  className?: string;
}) {
  const shared = cn("h-auto w-full rounded-sm bg-muted object-cover", className);

  if (media.kind === "graphic") {
    const Graphic = graphics[media.graphic];
    return (
      <div
        role="img"
        aria-label={media.label}
        className={cn("grid aspect-[16/9] w-full place-items-center rounded-sm bg-card text-heading", className)}
      >
        <Graphic className="w-1/2 max-w-80" />
      </div>
    );
  }

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

  const image = (
    <Image
      src={asset(media.src)}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes={sizes}
      loading="lazy"
      className={media.credit ? "h-auto w-full rounded-sm bg-muted object-cover" : shared}
    />
  );

  if (!media.credit) return image;

  return (
    <figure className={className}>
      {image}
      <figcaption className="mt-2 text-sm text-muted-foreground">{media.credit}</figcaption>
    </figure>
  );
}

export function Paragraph({ parts }: { parts: TextPart[] }) {
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
            className="font-medium text-heading underline decoration-signal decoration-2 underline-offset-4 transition-colors hover:text-signal"
          >
            {part.text}
          </a>
        )
      )}
    </p>
  );
}

// One row of the work scroll: identity on the left, media and story on the right.
export function EntryArticle({ entry }: { entry: Entry }) {
  return (
    <article
      id={entryId(entry)}
      className="grid scroll-mt-24 gap-6 border-t border-border py-12 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:gap-10 md:py-16"
    >
      <header className="md:sticky md:top-24 md:self-start">
        <h3 className="font-semiwide text-2xl leading-tight font-bold text-heading text-balance md:text-[1.75rem]">
          {entry.title}
        </h3>
        <p className="mt-2 text-muted-foreground">{entry.org}</p>

        {entry.tags && (
          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tools used">
            {entry.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-sm border border-input px-2 py-0.5 text-[0.8125rem] text-foreground"
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
            className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-heading underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <GitHubIcon className="size-4" />
            View code on GitHub
          </a>
        )}
      </header>

      <div>
        {entry.media && (
          <EntryMedia
            media={entry.media}
            sizes="(min-width: 1280px) 720px, (min-width: 768px) 60vw, 100vw"
            className="mb-8"
          />
        )}
        <div className="max-w-prose space-y-4 text-[1.0625rem] leading-relaxed">
          {entry.body.map((parts, i) => (
            <Paragraph key={i} parts={parts} />
          ))}
        </div>
      </div>
    </article>
  );
}
