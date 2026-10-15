import { Year } from "@/lib/utils";
import { links } from "@/lib/site";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const iconLink =
  "grid size-10 place-items-center rounded-sm text-neutral-400 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#ceb888] focus-visible:outline-none";

export function Footer() {
  return (
    <footer className="bg-black text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 text-sm sm:flex-row sm:px-8">
        <p>© {Year} Matthew Gomez-Morales</p>
        <div className="flex gap-1">
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}>
            <GitHubIcon className="size-5" />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}>
            <LinkedInIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
