"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { profileData } from "@/data/profile";
import { ArrowDown, Cpu, Terminal, GitCommit, CheckCircle2, Search, Sliders } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function HowIThink() {
  const containerRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      const stepItems = stepsRef.current?.children;
      if (!stepItems) return;

      gsap.fromTo(
        stepItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const lifecycle = [
    {
      stage: "01",
      name: "Problem",
      desc: "Deconstruct constraints, input/output contracts, edge cases, and runtime/memory bounds.",
    },
    {
      stage: "02",
      name: "Break Down",
      desc: "Identify algorithmic patterns—two-pointers, sliding windows, hashing lookup, or recursion trees.",
    },
    {
      stage: "03",
      name: "Design",
      desc: "Select optimal data structures (Arrays, Hash Maps, Stacks, Queues) and establish Big-O targets.",
    },
    {
      stage: "04",
      name: "Build",
      desc: "Write clean, idiomatic Java or TypeScript code emphasizing modularity and readable logic.",
    },
    {
      stage: "05",
      name: "Test",
      desc: "Trace edge cases: boundary indices, nulls, duplicates, and asymptotic capacity ceilings.",
    },
    {
      stage: "06",
      name: "Improve",
      desc: "Optimize auxiliary space, eliminate redundant computations, and refine maintainability.",
    },
  ];

  return (
    <section
      id="problem-solving"
      ref={containerRef}
      className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative"
    >
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#8B5CF6] tracking-widest uppercase">
        <span>04</span>
        <span>/</span>
        <span>METHODOLOGY & DSA</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            How I Think
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            A systematic engineering lifecycle applied to data structures, algorithm design,
            and production software development.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300">
          <span>Primary Language:</span>
          <span className="text-emerald-400 font-bold">{profileData.primaryDsaLanguage}</span>
        </div>
      </div>

      {/* Engineering Lifecycle Flow */}
      <div
        ref={stepsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-16"
      >
        {lifecycle.map((step, idx) => (
          <div
            key={step.name}
            className="p-5 rounded-xl border border-white/10 bg-zinc-950/60 backdrop-blur-sm relative group hover:border-[#8B5CF6]/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#8B5CF6] font-bold">
                  {step.stage}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">
                  PHASE
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{step.name}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>

            {idx < lifecycle.length - 1 && (
              <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-zinc-600">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      {/* DSA Pattern Topics from Resume */}
      <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur-sm">
        <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
          <div>
            <span className="text-[11px] font-mono text-[#8B5CF6] uppercase tracking-wider block">
              PATTERN-BASED PROBLEM SOLVING
            </span>
            <h3 className="text-lg font-bold text-white mt-1">Core Algorithm & Data Structure Disciplines</h3>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            {profileData.dsaTopics.length} Focus Areas
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {profileData.dsaTopics.map((topic) => (
            <span
              key={topic}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-[#8B5CF6] transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
