"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="hairline-t bg-black py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-neutral-500">
        <div>
          <span className="text-white font-bold">{portfolioData.personal.name}</span>
          <span className="mx-2">•</span>
          <span>© {currentYear} ALL RIGHTS RESERVED</span>
        </div>

        <div>
          <span>BUILT ON NEXT.JS // DEPLOYED ON VERCEL</span>
        </div>

        <button
          onClick={scrollToTop}
          className="text-neutral-400 hover:text-white transition-colors tracking-widest cursor-pointer"
        >
          [↑ TOP OF INDEX]
        </button>
      </div>
    </footer>
  );
}
