"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Manifesto() {
  const { capabilities } = portfolioData;

  return (
    <section id="about" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto hairline-t">
      {/* Section Subhead */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 hairline-b pb-6 mb-16 text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-neutral-400">
        <div>
          <span className="text-white font-bold">[02]</span>
          <span className="ml-2">SYSTEM PHILOSOPHY & CORE DOCTRINE</span>
        </div>
        <div>
          <span>DISCIPLINE // ZERO OVERHEAD</span>
        </div>
      </div>

      {/* Massive Editorial Statement */}
      <div className="max-w-5xl mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]"
        >
          RIGOR OVER TRENDS. ARCHITECT FOR EXTENSIBILITY, SPEED, AND INTENTIONAL BEAUTY.
        </motion.p>

        <p className="mt-8 text-sm sm:text-base text-neutral-400 font-mono tracking-wide leading-relaxed max-w-3xl">
          {portfolioData.manifesto.body} Every line of code exists to serve user experience, uptime stability, and clean system boundaries.
        </p>
      </div>

      {/* 4-Column Minimalist Capability Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 hairline-all">
        {capabilities.map((cap, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 bg-neutral-950/40 border-b sm:border-b-0 sm:border-r last:border-r-0 border-white/10 hover:bg-neutral-900/30 transition-colors"
          >
            <span className="block font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase mb-6">
              {cap.category}
            </span>
            <ul className="space-y-3 font-mono text-xs text-neutral-300">
              {cap.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2">
                  <span className="text-neutral-600">/</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
