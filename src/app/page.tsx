import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-6xl items-center px-6 py-16 sm:px-10 md:py-24">
      <section
        aria-labelledby="hero-name"
        className="grid w-full items-center gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-700"
      >
        <div className="order-2 text-center md:order-1 md:text-left">
          <h1
            id="hero-name"
            className="font-serif text-[2.75rem] leading-[0.95] font-bold tracking-tight text-heading min-[400px]:text-5xl sm:text-7xl lg:text-[5.5rem]"
          >
            Matthew
            <br />
            <span className="whitespace-nowrap">Gomez-Morales</span>
          </h1>

          <p className="mt-6 font-serif text-3xl font-bold text-gold sm:text-4xl">
            Computer Engineering student
          </p>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:mx-0">
            I&apos;m a junior at Florida State University. Right now I&apos;m a research intern in
            the Optimal Robotics Lab, training legged robots to see with reinforcement learning.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <Button asChild className="h-12 px-7 text-sm hover:bg-garnet-deep">
              <Link href="/projects">See my work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 border-gold bg-transparent px-7 text-sm text-heading hover:bg-gold/15 hover:text-heading"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>

        <div className="order-1 mx-auto md:order-2">
          <Image
            src={asset("/portrait.webp")}
            alt="Portrait of Matthew Gomez-Morales"
            width={720}
            height={720}
            sizes="(min-width: 768px) 320px, 192px"
            priority
            className="size-48 rounded-full object-cover ring-4 ring-gold ring-offset-8 ring-offset-background md:size-80 dark:ring-garnet"
          />
        </div>
      </section>
    </div>
  );
}
