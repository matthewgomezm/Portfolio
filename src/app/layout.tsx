import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/ui/footer";

// One variable family; the width axis gives the wide display cut (see font-wide).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Matthew Gomez-Morales",
    template: "%s | Matthew Gomez-Morales",
  },
  description:
    "Computer Engineering student at Florida State University.",
  appleWebApp: {
    title: "Matt's Portfolio",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", archivo.variable)}>
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
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
