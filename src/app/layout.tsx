import type { Metadata } from "next";
import { lusitana } from "@/components/ui/fonts";
import { cn } from "@/lib/utils";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/footer";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Matt's Portfolio",
  description: "Learn a bit about me!",
  manifest: "/metadata.json", 
  appleWebApp: {
    title: "Matt's Portfolio",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans scroll-smooth", figtree.variable)}>
      <body className={`${lusitana.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
