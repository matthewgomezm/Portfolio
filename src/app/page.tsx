import Link from "next/link";
import Image from "next/image";
import { experience, projects, field, entryId, type Entry } from "@/lib/content";
import { asset } from "@/lib/site";
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
                  className="rise-on-view font-wide text-[2rem] leading-none font-extrabold tracking-tight text-heading sm:text-5xl md:text-7xl"
                >
                  <Rise>{group.label}</Rise>
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
      <div className="mx-auto w-full max-w-7xl px-4 pt-10 pb-14 sm:px-8 md:pt-16 md:pb-24">
        {/* Phones get Archivo's normal width so the name can be set larger. */}
        <h1
          id="hero-name"
          className="rise font-wide text-[calc((100vw-2rem)/9.4)] leading-[0.88] font-extrabold tracking-[-0.02em] whitespace-nowrap uppercase max-sm:[font-variation-settings:'wdth'_100] sm:text-[min(calc((100vw-2.5rem)/12.3),6.5rem)] sm:leading-[0.86]"
        >
          <span className="block overflow-hidden">
            <span className="block">Matthew</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block">Gomez-Morales</span>
          </span>
        </h1>

        <div className="mt-6 flex flex-col gap-6 md:mt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg leading-relaxed text-pretty text-neutral-300">
            Computer engineering senior at Florida State University.
          </p>
          <div className="flex shrink-0 gap-3">
            <Link href="/#work" className={`${buttonOnBlack} bg-white text-black hover:bg-neutral-200`}>
              See my work
            </Link>
            <Link href="/contact" className={`${buttonOnBlack} border border-neutral-600 text-white hover:border-white`}>
              Get in touch
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

// Shared by the hero and the closing call to action, both on black.
const buttonOnBlack =
  "inline-flex h-12 items-center rounded-sm px-6 text-sm font-semibold transition-[background-color,border-color,transform] duration-150 focus-visible:ring-2 focus-visible:ring-[#ceb888] focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none active:translate-y-px";

function InTheField() {
  return (
    <section id="field" aria-labelledby="field-heading" className="scroll-mt-16 bg-card">
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 md:py-28 lg:pl-[calc(13rem+4rem+2rem)]">
        <h2
          id="field-heading"
          className="rise-on-view font-wide text-[2rem] leading-none font-extrabold tracking-tight text-heading sm:text-5xl md:text-7xl"
        >
          <Rise>In the field</Rise>
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
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-8 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] md:gap-10 md:py-28 lg:pl-[calc(13rem+4rem+2rem)]">
        <Image
          src={asset("/portrait.webp")}
          alt="Portrait of Matthew Gomez-Morales"
          width={720}
          height={720}
          sizes="(min-width: 768px) 320px, 100vw"
          loading="lazy"
          className="aspect-square w-full rounded-sm bg-muted object-cover md:max-w-xs"
        />
        <div>
          <h2
            id="about-heading"
            className="rise-on-view font-wide text-[2rem] leading-none font-extrabold tracking-tight text-heading sm:text-5xl md:text-7xl"
          >
            <Rise>About</Rise>
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
          className="rise-on-view max-w-3xl font-wide text-4xl leading-[0.95] font-extrabold tracking-tight text-balance md:text-6xl"
        >
          <Rise>Get in touch with me</Rise>
        </h2>
        <Link
          href="/contact"
          className={`${buttonOnBlack} w-fit shrink-0 bg-white text-black hover:bg-neutral-200`}
        >
          Send me a message
        </Link>
      </div>
    </section>
  );
}

// Lets a heading rise from behind its own baseline as it scrolls into view
function Rise({ children }: { children: React.ReactNode }) {
  return (
    <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
      <span className="block">{children}</span>
    </span>
  );
}
