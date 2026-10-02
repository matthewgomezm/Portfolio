import type { Metadata, Viewport } from "next";
import { Figtree, Lusitana } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/ui/footer";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Matthew Gomez-Morales",
    template: "%s | Matthew Gomez-Morales",
  },
  description:
    "Computer Engineering student at Florida State University working on robotics, embedded systems, and the web.",
  appleWebApp: {
    title: "Matt's Portfolio",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfbf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", figtree.variable, lusitana.variable)}>
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
