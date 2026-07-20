import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono, Manrope, Open_Sans } from "next/font/google";
import "./globals.css";

// Force all pages to render at request time, not at build time.
// This prevents Prisma/MariaDB from being invoked during static generation.
export const dynamic = 'force-dynamic';


// Body font — clean, legible, industry-standard for dashboards
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Heading font — modern, slightly geometric, distinctive
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Code / mono font — sharp, readable for slugs, code blocks, API URLs
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

// Primary Sans font - Cybertronium original
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

// Secondary Sans font
const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  display: "swap",
});

import { getProjectName } from "@/app/actions/setting-actions";
import { ThemeProvider } from "next-themes";

export async function generateMetadata(): Promise<Metadata> {
  const projectName = await getProjectName();
  return {
    title: `${projectName} | Content Management System`,
    description: "Manage blog content from a single unified dashboard.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} ${manrope.variable} ${openSans.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
