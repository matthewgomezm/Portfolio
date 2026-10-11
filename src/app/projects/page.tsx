import type { Metadata } from "next";
import Link from "next/link";
import { BASE_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  robots: { index: false },
};

// Work now lives on the home page. Static export has no server redirects, so
// old /projects links bounce with a meta refresh (and a link as a fallback).
export default function ProjectsRedirect() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-8">
      <meta httpEquiv="refresh" content={`0; url=${BASE_PATH}/#work`} />
      <p>
        My work has moved to the{" "}
        <Link href="/#work" className="font-medium text-heading underline underline-offset-4">
          home page
        </Link>
        .
      </p>
    </div>
  );
}
