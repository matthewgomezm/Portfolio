"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { links } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

// Square corners like the rest of the site, and a filled field so the inputs
// don't read as disabled on the card.
const field = "rounded-sm bg-background md:text-base";

// Posts to Formspree in the background so visitors stay on the page. Without
// JavaScript the form still submits normally via action/method.
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(links.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-sm bg-card p-8">
        <p className="font-semiwide text-2xl font-bold text-heading">Message sent</p>
        <p className="mt-2 text-muted-foreground">
          Thanks for reaching out. I&apos;ll reply to the email you gave.
        </p>
        <Button variant="link" className="mt-4 h-auto px-0 text-heading" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      action={links.formspree}
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-sm bg-card p-6 sm:p-8"
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" autoComplete="name" required className={`${field} h-11`} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required className={`${field} h-11`} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required className={`${field} min-h-36`} />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          The message didn&apos;t go through. Check your connection and try again, or message me on
          LinkedIn.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "sending"}
        className="h-12 rounded-sm font-semibold hover:bg-primary/85"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
