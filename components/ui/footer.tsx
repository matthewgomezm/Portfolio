import { Year } from "@/lib/utils";
import { links } from "@/lib/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:px-10">
        <p>© {Year} Matthew Gomez-Morales</p>
        <div className="flex gap-2">
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full transition-colors hover:bg-secondary hover:text-heading focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <GitHubIcon className="size-5" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-full transition-colors hover:bg-secondary hover:text-heading focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <LinkedInIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
