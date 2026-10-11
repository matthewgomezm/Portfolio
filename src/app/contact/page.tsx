import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send Matthew Gomez-Morales a message.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 pt-16 pb-24 sm:px-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16 md:pt-24">
      <div>
        <h1 className="font-wide text-5xl leading-none font-extrabold tracking-tight text-heading md:text-7xl">
          Contact
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
          To get in touch with me, send a message or follow on any of the platforms!
        </p>
        <ul className="mt-10 space-y-4 border-t border-border pt-6">
          <li>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-medium text-heading underline-offset-4 hover:underline"
            >
              <LinkedInIcon className="size-5" />
              Message me on LinkedIn
            </a>
          </li>
          <li>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-medium text-heading underline-offset-4 hover:underline"
            >
              <GitHubIcon className="size-5" />
              See my code on GitHub
            </a>
          </li>
        </ul>
      </div>

      <ContactForm />
    </div>
  );
}
