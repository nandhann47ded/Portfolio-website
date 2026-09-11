"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy } from "lucide-react";

export function Contact() {
  const { personal, socials } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("idle");
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto hairline-t">
      {/* Section Subhead */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 hairline-b pb-6 mb-16 text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-neutral-400">
        <div>
          <span className="text-white font-bold">[03]</span>
          <span className="ml-2">COMMUNICATION // DISPATCH</span>
        </div>
        <div>
          <span>INITIATE CONTACT</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Massive Direct Contact Action */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500 block mb-4">
              DIRECT INBOX
            </span>
            <button
              onClick={handleCopy}
              className="text-left group w-full"
              title="Click to copy email address"
            >
              <span className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-white hover:text-neutral-300 transition-colors block break-all">
                {personal.email}
              </span>
              <span className="inline-flex items-center gap-2 mt-4 font-mono text-xs tracking-widest uppercase text-neutral-400 group-hover:text-white transition-colors">
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span className="text-white">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>CLICK TO COPY EMAIL</span>
                  </>
                )}
              </span>
            </button>
          </div>

          {/* Social Links Network */}
          <div className="pt-8 hairline-t">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500 block mb-6">
              NETWORK COORDINATES
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs tracking-wider uppercase">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hairline-all p-4 bg-neutral-950/60 hover:bg-white hover:text-black hover:border-white transition-all flex items-center justify-between group"
                >
                  <span>{s.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal Monochrome Form */}
        <div className="lg:col-span-5">
          <div className="hairline-all bg-neutral-950 p-6 sm:p-8">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-400 block mb-6">
              TRANSMIT MESSAGE
            </span>

            {status === "sent" ? (
              <div className="py-12 text-center space-y-3 font-mono">
                <p className="text-sm font-bold text-white tracking-widest uppercase">
                  TRANSMISSION RECEIVED
                </p>
                <p className="text-xs text-neutral-400">
                  I will respond via return dispatch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                <div>
                  <label className="block text-neutral-500 uppercase tracking-widest text-[10px] mb-2">
                    [01] SENDER NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="NAME / ALIAS"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-black hairline-all px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-neutral-500 uppercase tracking-widest text-[10px] mb-2">
                    [02] RETURN ADDRESS (EMAIL)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="EMAIL@DOMAIN.COM"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-black hairline-all px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-neutral-500 uppercase tracking-widest text-[10px] mb-2">
                    [03] INQUIRY OR DISPATCH
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="SYSTEM REQUIREMENTS / INQUIRY DETAILS"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-black hairline-all px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black font-bold py-3.5 tracking-widest uppercase hover:bg-neutral-200 transition-colors"
                >
                  SEND DISPATCH
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
