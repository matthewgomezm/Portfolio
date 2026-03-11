import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#fdfbf7] dark:bg-[#0f0a0a]">
      <h1 className="mb-4 font-serif text-5xl font-bold text-[#782f40] dark:text-[#f4e8ea]">
        Projects
      </h1>
      <p className="mb-8 text-zinc-600 dark:text-zinc-400">
        This page is under construction.
      </p>
      <Button asChild className="bg-[#782f40] text-white hover:bg-[#5c2331]">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}