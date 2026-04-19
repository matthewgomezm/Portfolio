import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fdfbf7] font-sans dark:bg-[#0f0a0a]">
      <main className="w-full max-w-6xl px-6 py-24 md:py-32 sm:px-12">
        <section id="hero" className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
            <h1 className="mb-1.5 font-serif text-7xl font-bold tracking-tighter text-[#782f40] dark:text-[#f4e8ea] sm:text-8xl md:mb-0 md:text-9xl">
              Matthew Gomez-Morales
            </h1>
            
            <p className="mb-9 font-serif text-4xl leading-[46px] font-bold tracking-tight text-[#ceb888] dark:text-[#ceb888] sm:text-5xl md:text-6xl">
              Computer <br className="hidden md:block" /> Engineering Student
            </p>
            
            <p className="mb-12 max-w-2xl text-base font-normal leading-relaxed text-zinc-700 dark:text-zinc-400 md:text-lg">
              Junior at Florida State University in Computer Engineering. Check out my projects and experience, or contact me!
            </p>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row justify-center md:justify-start">
              <Button 
                asChild 
                className="h-14 rounded-full bg-[#782f40] px-8 py-5 text-sm font-medium text-white hover:bg-[#5c2331] dark:bg-[#782f40] dark:hover:bg-[#5c2331]">
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                className="h-14 rounded-full border-[#ceb888] px-8 py-5 text-sm font-medium text-[#782f40] hover:bg-[#ceb888]/10 dark:border-[#ceb888] dark:text-[#ceb888] dark:hover:bg-[#ceb888]/10">
                <Link href="/projects">
                  View What I've Been Up To
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/Portfolio/portrait.jpg"
              alt="Matthew Gomez-Morales"
              width={320} 
              height={320}
              className="rounded-full object-cover shadow-2xl border-4 border-[#ceb888] dark:border-[#782f40]"
              priority
            />
          </div>
        </section>
      </main>
    </div>
  );
}