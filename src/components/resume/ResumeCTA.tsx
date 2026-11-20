"use client";

import React from "react";
import { Download, FileText, ExternalLink, Sparkles } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import { profileData } from "@/data/profile";

export default function ResumeCTA() {
  return (
    <section className="py-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#071B2B]/90 via-[#0a253a]/50 to-[#071B2B]/95 p-8 sm:p-14 text-center relative overflow-hidden backdrop-blur-md">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#167D8D]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#B9E4E8] bg-[#167D8D]/20 border border-[#167D8D]/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#EEEEEE]">
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
              <MagneticButton className="px-8 py-4 rounded-xl font-semibold text-sm text-[#071B2B] bg-[#EEEEEE] hover:bg-[#B9E4E8] transition-colors shadow-xl flex items-center gap-2.5">
                <Download className="w-4 h-4 text-[#071B2B]" />
                <span>Download Resume</span>
              </MagneticButton>
            </a>

            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-medium text-sm text-zinc-300 bg-zinc-900/80 border border-white/10 hover:border-[#167D8D] hover:text-[#EEEEEE] transition-all font-mono"
            >
              <FileText className="w-4 h-4 text-[#B9E4E8]" />
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
