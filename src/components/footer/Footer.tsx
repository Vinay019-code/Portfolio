"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowUp, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#071B2B]/90 py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="font-bold tracking-tight text-[#EEEEEE] text-base">
            VINAY YADAV
          </span>
          <p className="text-xs text-zinc-400 mt-1 font-mono">
            Software Engineer | Full-Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-zinc-400">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B9E4E8] transition-colors flex items-center gap-1.5"
          >
            <GitHubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#B9E4E8] transition-colors flex items-center gap-1.5"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${profileData.email}`}
            className="hover:text-[#B9E4E8] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500">
          <span>&copy; 2026 Vinay Yadav</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-[#167D8D] transition-colors"
            title="Scroll to top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
