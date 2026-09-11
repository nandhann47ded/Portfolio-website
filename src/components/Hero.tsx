"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-12 px-4 sm:px-8 max-w-7xl mx-auto noise-bg">
      {/* Top micro metadata */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 hairline-b pb-6 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">[00]</span>
          <span>DISCIPLINE / SOFTWARE ARCHITECTURE</span>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-white font-bold">[01]</span>
          <span>LOCATION / {portfolioData.personal.location}</span>
        </div>
        <div className="flex items-center md:justify-end gap-2 text-neutral-300">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span>{portfolioData.personal.statusText}</span>
        </div>
      </div>

      {/* Massive Iconic Typography */}
      <div className="py-12 sm:py-20 select-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative cursor-default"
        >
          <h1 className="font-display font-extrabold text-[15vw] sm:text-[14vw] leading-[0.85] tracking-tighter text-white uppercase text-left transition-all duration-500">
            {portfolioData.personal.name}
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-neutral-400 max-w-xl">
              {portfolioData.personal.statement}
            </p>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-500">
              SYS.VER.2026 // BUILD.RELEASE
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar: Abstract Index Statement & Scroll Prompt */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 hairline-t pt-8 items-end">
        <div className="md:col-span-8">
          <p className="font-display text-xl sm:text-3xl text-neutral-200 tracking-tight leading-snug">
            {portfolioData.manifesto.lead}
          </p>
        </div>

        <div className="md:col-span-4 flex items-center md:justify-end gap-4">
          <a
            href="#works"
            className="group inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-neutral-400 hover:text-white transition-colors"
          >
            <span>EXPLORE WORKS</span>
            <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
