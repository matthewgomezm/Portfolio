import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#fdfbf7] px-6 py-24 dark:bg-[#0f0a0a]">
      <Card className="mb-8 w-full max-w-sm">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>
            Feel free to reach out. I'll get back to you as soon as I can. My LinkedIn profile is also open to
            communication.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="contact-form" action="https://formspree.io/f/mnjgbepe" method="POST">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Your message..." required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" form="contact-form" className="w-full bg-[#782f40] text-white hover:bg-[#5c2331]">
            Send Message
          </Button>
        </CardFooter>
      </Card>
      <Button asChild className="bg-[#782f40] text-white hover:bg-[#5c2331]">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}