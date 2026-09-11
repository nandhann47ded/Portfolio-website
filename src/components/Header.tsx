"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

export function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " UTC"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md hairline-b py-3.5 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase text-neutral-400">
        {/* Identity & Status */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-display font-bold text-sm tracking-widest text-white hover:opacity-70 transition-opacity"
          >
            {portfolioData.personal.name.toUpperCase()}
          </a>
          <span className="hidden md:inline-block text-neutral-700">/</span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-[10px] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            {portfolioData.personal.statusText}
          </span>
        </div>

        {/* Live Clock / Location */}
        <div className="hidden lg:flex items-center gap-6 text-[10px] text-neutral-500">
          <span>{portfolioData.personal.coordinates}</span>
          <span className="text-neutral-700">•</span>
          <span>{time || "00:00:00 UTC"}</span>
        </div>

        {/* Navigation anchors */}
        <nav className="flex items-center gap-5 sm:gap-8 text-[11px]">
          <a href="#works" className="hover:text-white transition-colors">
            [WORKS]
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            [INDEX]
          </a>
          <a href="#records" className="hidden sm:inline-block hover:text-white transition-colors">
            [ARCHIVE]
          </a>
          <a
            href="#contact"
            className="text-black bg-white px-2.5 py-1 font-medium hover:bg-neutral-200 transition-colors"
          >
            DISPATCH
          </a>
        </nav>
      </div>
    </header>
  );
}
