import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} — ${portfolioData.personal.statement}`,
  description: portfolioData.manifesto.body,
  keywords: [
    "Nandhan",
    "Software Architect",
    "Full Stack Engineer",
    "Systems Engineering",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.vercel.app",
    title: `${portfolioData.personal.name} — ${portfolioData.personal.statement}`,
    description: portfolioData.manifesto.body,
    siteName: `${portfolioData.personal.name} Index`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} — ${portfolioData.personal.statement}`,
    description: portfolioData.manifesto.body,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black text-white">
      <body className="bg-black text-white antialiased min-h-screen selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
