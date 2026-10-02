import type { Metadata } from "next";
import { experience, projects } from "@/lib/content";
import { EntryMedia, EntryText } from "@/components/entry";

export const metadata: Metadata = {
  title: "Work",
  description: "Research, freelance web development, and engineering projects.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pt-16 pb-24 sm:px-10 md:pt-24">
      <h1 className="font-serif text-5xl font-bold tracking-tight text-heading md:text-6xl">
        Work
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Research, freelance builds, and the projects I pick up between classes.
      </p>

      <section aria-labelledby="experience" className="mt-16 md:mt-20">
        <h2 id="experience" className="font-serif text-3xl font-bold text-heading">
          Experience
        </h2>
        <div className="mt-6 border-t-2 border-gold">
          {experience.map((entry) => (
            <article
              key={entry.title}
              className="grid gap-8 border-b border-border py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-12"
            >
              {entry.media && (
                <EntryMedia media={entry.media} sizes="(min-width: 768px) 500px, 100vw" />
              )}
              <div className={entry.media ? undefined : "md:col-span-2"}>
                <EntryText entry={entry} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="projects" className="mt-20">
        <h2 id="projects" className="font-serif text-3xl font-bold text-heading">
          Projects
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((entry) => (
            <article
              key={entry.title}
              className="flex flex-col gap-6 rounded-2xl bg-card p-6 ring-1 ring-border"
            >
              {entry.media && (
                <EntryMedia
                  media={entry.media}
                  sizes="(min-width: 768px) 520px, 100vw"
                  className="aspect-[16/10]"
                />
              )}
              <EntryText entry={entry} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
