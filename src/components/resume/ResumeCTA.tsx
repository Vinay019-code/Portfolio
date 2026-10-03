"use client";

import React from "react";
import { Download, FileText, ExternalLink, Sparkles } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { profileData } from "@/data/profile";

export default function ResumeCTA() {
  return (
    <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-950/80 via-zinc-900/40 to-zinc-950/90 p-8 sm:p-14 text-center relative overflow-hidden backdrop-blur-md">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Want the complete picture?
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            Download the verified PDF resume detailing technical skills, full-stack projects,
            academic coursework, and engineering competencies.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={profileData.resumeUrl}
              download="Vinay_Yadav_Resume.pdf"
            >
              <MagneticButton className="px-8 py-4 rounded-xl font-semibold text-sm text-black bg-white hover:bg-zinc-200 transition-colors shadow-xl flex items-center gap-2.5">
                <Download className="w-4 h-4 text-black" />
                <span>Download Resume</span>
              </MagneticButton>
            </a>

            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-sm text-zinc-300 bg-zinc-900/80 border border-white/10 hover:border-white/20 hover:text-white transition-all font-mono"
            >
              <FileText className="w-4 h-4 text-[#8B5CF6]" />
              <span>Preview in Browser</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-50" />
            </a>
          </div>

          <div className="pt-4 text-xs font-mono text-zinc-500">
            Updated for 2026 Opportunities • Software Engineer / Full-Stack Developer
          </div>
        </div>
      </div>
    </section>
  );
}
