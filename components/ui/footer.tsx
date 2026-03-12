import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Year } from "@/lib/utils";

export function Footer() {

  return (
    <footer className="w-full px-6 py-8 flex justify-center">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-4 md:flex-row md:gap-16">
        
        <div className="flex flex-col items-center text-sm md:flex-row md:items-baseline text-zinc-500 dark:text-zinc-400">
          <span>© {Year}</span>
          <span className="px-2 font-medium text-zinc-900 dark:text-zinc-100">
            MGM
          </span>
          <span className="px-2">
          </span>
        </div>

        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <Link href="https://github.com/matthewgomezm" target="_blank" aria-label="GitHub">
              <Image src="/Portfolio/ghlogo.svg" alt="GitHub" width={20} height={20} className="dark:invert" />
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <Link href="https://www.linkedin.com/in/mgomezmorales" target="_blank" aria-label="LinkedIn">
               <Image src="/Portfolio/linkedin.png" alt="LinkedIn" width={20} height={20} className="dark:invert" />
            </Link>
          </Button> 
        
        </div>
      </div>
    </footer>
  );
}