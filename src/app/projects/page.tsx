import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Ollama } from '@lobehub/icons';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#fdfbf7] px-6 py-24 dark:bg-[#0f0a0a]">
      
      <div className="mb-12 grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
        
        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-5xl font-bold text-[#782f40] dark:text-[#f4e8ea]
          text-center">
            Experience
          </h2>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Research Intern</CardTitle>
              <CardDescription>Aeropropulsion, Mechatronics & Energy Center</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/Portfolio/zedmini.jpg"
                alt="Zed Mini Project"
                width={500}
                height={300}
                className="mb-4 rounded-lg object-cover"
              />
              <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                My current research internship at the Aeropropulsion, Mechatronics & Energy Center in the Optimal Robotics Lab involves implementing computer vision solutions on a rover. My tech stack includes MuJoCo, ROS2, C++, and Python.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                The GitHub link will take you to the MuJoCo repo, but the other repo holds the ROS2 node source code as well.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/matthewgomezm/zedm_mujoco" target="_blank">
                  <Image src="/Portfolio/ghlogo.svg" alt="GitHub" width={20} height={20} className="dark:invert" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>Freelance</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/Portfolio/webdesign.png"
                alt="Web Design"
                width={500}
                height={300}
                className="mb-4 rounded-lg object-cover"
              />
              <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                Turning a passion for code into creative digital solutions. I combine an engineering mindset with a love for emerging web design to build fast, beautiful, and functional websites for clients and friends alike.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Check out my latest design for <Link href="https://persse-media.vercel.app/" target="_blank" className="font-medium underline underline-offset-4">Persse Media</Link>.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Other designs I have done: <Link href="https://janetzhangmedia.com" target="_blank" className="font-medium underline underline-offset-4">Janet Zhang Media</Link>.
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Work in progress design: <Link href="https://lvm-co.myshopify.com" target="_blank" className="font-medium underline underline-offset-4">LVM Co.</Link>
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/matthewgomezm/PersseMedia" target="_blank">
                  <Image src="/Portfolio/ghlogo.svg" alt="GitHub" width={20} height={20} className="dark:invert" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-5xl font-bold text-[#782f40] dark:text-[#f4e8ea] text-center">
            Projects
          </h2>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>Document Generation with local Large-Language Models (LLMs)</CardTitle>
              <CardDescription>Python, Ollama, Shell Scripting</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-cente ">
            <div className="mb-6 flex w-full justify-center py-4 text-zinc-800 dark:text-zinc-200">
                  <Ollama.Combine size={64} /> 
            </div>
              <p className="text-zinc-700 dark:text-zinc-300">
                I am bad at writing documentation. So I wrote a program to do it for me 😃
              </p>
              <p>
                I have been interested in how local models can streamline development.
                This tool uses Ollama to analyze my codebase and generate a high-quality README.md file instantly, 
                allowing me to focus on building features rather than writing manuals, all while maintaining complete data privacy.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/matthewgomezm/ReadMeGen" target="_blank">
                  <Image src="/Portfolio/ghlogo.svg" alt="GitHub" width={20} height={20} className="dark:invert" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle>TI RSLK MAX Robot</CardTitle>
              <CardDescription>Embedded C/C++</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-cente ">
            <Image
                src="/Portfolio/RSLK.jpg"
                alt="Web Design"
                width={500}
                height={300}
                className="mb-4 rounded-lg object-cover"
              />
              <p className="text-zinc-700 dark:text-zinc-300">
                As part of my Advanced Microprocessor System Design course, we are developing an autonomous line-following robot using the TI-RSLK platform.
                My work focuses on real-time sensor processing, PID-based motor speed regulation, and implementing fail-safes for collision detection to ensure reliable navigation through complex tracks.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/matthewgomezm/TI-RSLK-Max" target="_blank">
                  <Image src="/Portfolio/ghlogo.svg" alt="GitHub" width={20} height={20} className="dark:invert" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
        </div>
      </div>

      <Button asChild className="bg-[#782f40] px-8 text-white hover:bg-[#5c2331]">
        <Link href="/">Back to Home</Link>
      </Button>

    </div>
  );
}