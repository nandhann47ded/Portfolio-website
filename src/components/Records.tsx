"use client";

import React from "react";
import { portfolioData, RecordItem } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Records() {
  const { records } = portfolioData;

  return (
    <section id="records" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto hairline-t">
      {/* Section Subhead */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 hairline-b pb-6 mb-12 text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-neutral-400">
        <div>
          <span className="text-white font-bold">[03]</span>
          <span className="ml-2">RECORD ARCHIVE // CHRONOLOGY</span>
        </div>
        <div>
          <span>HISTORY // 2019 — PRESENT</span>
        </div>
      </div>

      {/* Record Rows */}
      <div className="divide-y divide-white/10">
        {records.map((rec: RecordItem, idx: number) => (
          <motion.div
            key={rec.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline group"
          >
            {/* Period / Timeline */}
            <div className="md:col-span-3">
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
                {rec.period}
              </span>
            </div>

            {/* Role & Entity */}
            <div className="md:col-span-4">
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white uppercase group-hover:translate-x-1 transition-transform">
                {rec.role}
              </h4>
              <p className="font-mono text-xs tracking-wider text-neutral-400 mt-1 uppercase">
                {rec.entity} • {rec.location}
              </p>
            </div>

            {/* Description */}
            <div className="md:col-span-5">
              <p className="font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {rec.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
