"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, Project } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export function Works() {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState<Project | null>(projects[0]);

  return (
    <section id="works" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Section Subhead */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 hairline-b pb-6 mb-12 text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-neutral-400">
        <div>
          <span className="text-white font-bold">[01]</span>
          <span className="ml-2">SELECTED WORKS & ARCHITECTURE</span>
        </div>
        <div>
          <span>({projects.length.toString().padStart(2, "0")}) INDEXED SYSTEMS</span>
        </div>
      </div>

      {/* Main Works Interactive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Project List */}
        <div className="lg:col-span-7 space-y-0">
          {projects.map((project: Project) => {
            const isSelected = activeProject?.id === project.id;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveProject(project)}
                className={`hairline-b py-7 cursor-pointer transition-all duration-300 group ${
                  isSelected ? "opacity-100" : "opacity-40 hover:opacity-80"
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-neutral-500 font-medium">
                      {project.num}
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs tracking-widest text-neutral-500 uppercase shrink-0">
                    {project.year}
                  </span>
                </div>

                <div className="mt-3 pl-8 sm:pl-10 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-400">
                  <span className="text-neutral-300 font-medium">{project.subtitle}</span>
                  <span className="text-neutral-700">•</span>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-neutral-500">{project.category}</span>
                </div>

                {/* Expanded details for mobile */}
                <div className="mt-4 pl-8 sm:pl-10 lg:hidden space-y-3">
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono uppercase bg-neutral-900 text-neutral-300 border border-neutral-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono tracking-wider text-white hover:underline"
                      >
                        <span>[LAUNCH]</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono tracking-wider text-neutral-400 hover:text-white"
                      >
                        <span>[SOURCE]</span>
                        <Github className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Desktop Preview Sticky Box */}
        <div className="hidden lg:block lg:col-span-5 sticky top-28">
          <AnimatePresence mode="wait">
            {activeProject && (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="hairline-all bg-neutral-950 p-6 space-y-6"
              >
                {/* Image Frame */}
                <div className="relative h-64 w-full overflow-hidden bg-black hairline-all grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-black text-[9px] font-mono tracking-widest uppercase text-white border border-white/20">
                    {activeProject.num} // {activeProject.category}
                  </div>
                </div>

                {/* Metadata */}
                <div>
                  <h4 className="font-display text-xl font-bold text-white uppercase tracking-tight">
                    {activeProject.title}
                  </h4>
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {activeProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase bg-black text-neutral-300 border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action trigger links */}
                <div className="flex items-center justify-between pt-4 hairline-t text-xs font-mono tracking-widest uppercase">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-white hover:bg-white hover:text-black px-3 py-1.5 border border-white/30 transition-all"
                    >
                      <span>LIVE SYSTEM</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>REPOSITORY</span>
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
