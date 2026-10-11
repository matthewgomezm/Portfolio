import Link from "next/link";
import Image from "next/image";
import { experience, projects, field, heroMedia, entryId, type Entry } from "@/lib/content";
import { asset } from "@/lib/site";
import { AutoplayVideo } from "@/components/autoplay-video";
import { EntryArticle } from "@/components/entry";
import { WorkRail } from "@/components/work-rail";
import { FieldLog } from "@/components/field-log";

const groups = [
  { id: "experience", label: "Experience", entries: experience },
  { id: "projects", label: "Projects", entries: projects },
];

const index = (entries: Entry[]) =>
  entries.map((entry) => ({ id: entryId(entry), title: entry.title }));

export default function Home() {
  return (
    <>
      <Hero />

      <section id="work" aria-label="Work" className="scroll-mt-16">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 sm:px-8 md:py-28 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16">
          <WorkRail groups={groups.map((g) => ({ label: g.label, items: index(g.entries) }))} />

          <div className="space-y-24">
            {groups.map((group) => (
              <section key={group.id} id={group.id} aria-labelledby={`${group.id}-heading`} className="scroll-mt-20">
                <h2
                  id={`${group.id}-heading`}
                  className="font-wide text-5xl leading-none font-extrabold tracking-tight text-heading md:text-7xl"
                >
                  {group.label}
                </h2>
                <div className="mt-10">
                  {group.entries.map((entry) => (
                    <EntryArticle key={entry.title} entry={entry} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <InTheField />
      <About />
      <ContactCta />
    </>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-name" className="bg-black text-white">
      <div className="mx-auto flex w-full md:min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-between gap-10 px-4 pt-8 pb-10 sm:px-8 md:pt-12 md:pb-14">
        <figure className="w-full md:ml-auto md:w-[56%]">
          <AutoplayVideo
            src={asset(heroMedia.src)}
            poster={asset(heroMedia.poster)}
            label={heroMedia.label}
            width={heroMedia.width}
            height={heroMedia.height}
            className="h-auto w-full rounded-sm bg-neutral-900"
          />
          <figcaption className="mt-3 text-sm text-neutral-400">{heroMedia.caption}</figcaption>
        </figure>

        <div>
          <h1
            id="hero-name"
            className="rise font-wide text-[min(calc((100vw-2.5rem)/12.3),6.5rem)] leading-[0.86] font-extrabold tracking-[-0.02em] whitespace-nowrap uppercase"
          >
            <span className="block overflow-hidden">
              <span className="block">Matthew</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block">Gomez-Morales</span>
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-8 border-t border-neutral-800 pt-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-neutral-300">
              Computer engineering student at Florida State University.
            </p>
            <div className="flex shrink-0 gap-3">
              <Link
                href="/#work"
                className="inline-flex h-12 items-center rounded-sm bg-white px-6 text-sm font-semibold text-black transition-colors hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-[#ceb888] focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
              >
                See my work
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-sm border border-neutral-600 px-6 text-sm font-semibold text-white transition-colors hover:border-white focus-visible:ring-2 focus-visible:ring-[#ceb888] focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InTheField() {
  return (
    <section id="field" aria-labelledby="field-heading" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 md:py-28 lg:pl-[calc(13rem+4rem+2rem)]">
        <h2
          id="field-heading"
          className="font-wide text-5xl leading-none font-extrabold tracking-tight text-heading md:text-7xl"
        >
          In the field
        </h2>
        <p className="mt-6 max-w-prose text-lg text-muted-foreground">
          Conferences, competitions, and other places the work has taken me.
        </p>
        <FieldLog entries={field} />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-8 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:gap-10 md:py-28 lg:pl-[calc(13rem+4rem+2rem)]">
        <Image
          src={asset("/portrait.webp")}
          alt="Portrait of Matthew Gomez-Morales"
          width={720}
          height={720}
          sizes="(min-width: 768px) 320px, 100vw"
          loading="lazy"
          className="aspect-square w-full max-w-xs rounded-sm object-cover"
        />
        <div>
          <h2
            id="about-heading"
            className="font-wide text-5xl leading-none font-extrabold tracking-tight text-heading md:text-7xl"
          >
            About
          </h2>
          <div className="mt-8 max-w-prose space-y-4 text-[1.0625rem] leading-relaxed">
            <p>
              I&apos;m a senior studying computer engineering at Florida State University. I plan on pursuing a 
              Master&apos;s degree in electrical engineering after graduation. Most of
              my time goes to robotics research, but I also enjoy lifting, running, and a variety of sports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section aria-labelledby="cta-heading" className="bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-20 sm:px-8 md:flex-row md:items-end md:justify-between md:py-24">
        <h2
          id="cta-heading"
          className="max-w-3xl font-wide text-4xl leading-[0.95] font-extrabold tracking-tight text-balance md:text-6xl"
        >
          Get in touch with me
        </h2>
        <Link
          href="/contact"
          className="inline-flex h-12 w-fit shrink-0 items-center rounded-sm bg-white px-6 text-sm font-semibold text-black transition-colors hover:bg-neutral-200 focus-visible:ring-2 focus-visible:ring-[#ceb888] focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
        >
          Send me a message
        </Link>
      </div>
    </section>
  );
}
