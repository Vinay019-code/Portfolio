"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { gsap } from "@/lib/gsap";
import { profileData } from "@/data/profile";
import SystemTerminal from "./SystemTerminal";
import MagneticButton from "../ui/MagneticButton";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 });

      tl.fromTo(
        headlineRef.current?.querySelectorAll(".hero-line") || [],
        { y: 80, opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        }
      )
        .fromTo(
          roleRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current?.children || [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          visualRef.current,
          { y: 40, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(
          socialsRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & Intent */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow / Tag */}
          <div ref={roleRef} className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
              <Sparkles className="w-3 h-3" />
              SOFTWARE ENGINEER • FULL-STACK
            </span>
          </div>

          {/* Main Huge Typography Headline */}
          <h1
            ref={headlineRef}
            className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] mb-6"
          >
            <div className="overflow-hidden">
              <span className="hero-line block text-zinc-100">VINAY</span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-line block text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500">
                YADAV
              </span>
            </div>
          </h1>

          {/* Role & Intent statement */}
          <p
            ref={descRef}
            className="text-lg sm:text-xl text-zinc-400 font-normal max-w-xl leading-relaxed mb-8"
          >
            Building scalable web applications with{" "}
            <span className="text-zinc-200 font-medium">MERN</span>,{" "}
            <span className="text-zinc-200 font-medium">Java</span>, and{" "}
            <span className="text-zinc-200 font-medium">Python</span>. Focused on clean
            architecture, resilient APIs, and production-oriented software.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mb-8">
            <a href="#projects">
              <MagneticButton className="px-7 py-3.5 rounded-xl font-medium text-sm text-black bg-white hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 flex items-center gap-2">
                <span>View Work</span>
                <ArrowDown className="w-4 h-4 text-black" />
              </MagneticButton>
            </a>

            <a
              href={profileData.resumeUrl}
              download="Vinay_Yadav_Resume.pdf"
            >
              <MagneticButton className="px-6 py-3.5 rounded-xl font-medium text-sm text-zinc-200 bg-zinc-900 border border-white/10 hover:border-[#8B5CF6] hover:text-white transition-all flex items-center gap-2">
                <Download className="w-4 h-4 text-[#8B5CF6]" />
                <span>Download Resume</span>
              </MagneticButton>
            </a>
          </div>

          {/* Social Links & Quick Reference */}
          <div
            ref={socialsRef}
            className="flex items-center gap-6 pt-4 border-t border-white/5"
          >
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <div className="hidden sm:block text-xs font-mono text-zinc-500">
              Bareilly / AKTU • 2023 - 2027
            </div>
          </div>
        </div>

        {/* Right Column: Engineering System Visualization */}
        <div ref={visualRef} className="lg:col-span-5 flex justify-center lg:justify-end">
          <SystemTerminal />
        </div>
      </div>
    </section>
  );
}
