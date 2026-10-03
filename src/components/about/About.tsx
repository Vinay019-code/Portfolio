"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { profileData } from "@/data/profile";
import { Check, Code2, Server, Database, Shield, Terminal } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const foundations = [
    {
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      title: "Data Structures & Algorithms",
      desc: "Pattern-oriented problem solving using Java (two pointers, sliding window, hashing, trees & graphs).",
    },
    {
      icon: <Code2 className="w-4 h-4 text-[#8B5CF6]" />,
      title: "Object-Oriented Programming",
      desc: "Clean modular principles, encapsulation, polymorphism, and maintainable domain modeling.",
    },
    {
      icon: <Server className="w-4 h-4 text-cyan-400" />,
      title: "REST APIs & Backend Services",
      desc: "Express.js route controllers, HTTP status semantics, robust input handling, and error pipelines.",
    },
    {
      icon: <Database className="w-4 h-4 text-amber-400" />,
      title: "Database Modeling",
      desc: "MongoDB document structures, MongoDB Atlas indexing, relational queries in SQL & SQLite.",
    },
    {
      icon: <Shield className="w-4 h-4 text-rose-400" />,
      title: "Authentication & Security",
      desc: "Stateless JSON Web Tokens (JWT), middleware-based route protection, and HttpOnly cookies.",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative"
    >
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#8B5CF6] tracking-widest uppercase">
        <span>01</span>
        <span>/</span>
        <span>BACKGROUND & PERSPECTIVE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Editorial Text */}
        <div ref={textRef} className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Engineer focused on building useful software.
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            <p>
              I am a software developer dedicated to crafting scalable, resilient, and
              user-centric web applications using the{" "}
              <strong className="text-zinc-200 font-semibold">MERN stack</strong>,{" "}
              <strong className="text-zinc-200 font-semibold">Java</strong>, and{" "}
              <strong className="text-zinc-200 font-semibold">Python</strong>.
            </p>
            <p>
              My approach bridges strong computer science fundamentals with modern
              full-stack production practices. From structuring low-latency real-time
              chat systems with WebSockets to developing computer-vision signal
              analytics prototypes, I emphasize code clarity, testability, and architectural discipline.
            </p>
            <p className="text-sm font-mono text-zinc-400 border-l-2 border-[#8B5CF6] pl-4 py-1">
              &ldquo;Solving real-world problems through clean, maintainable, and
              production-oriented software.&rdquo;
            </p>
          </div>

          <div className="pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Core Career Focus
            </h4>
            <div className="flex flex-wrap gap-2">
              {profileData.focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 border border-white/10 text-zinc-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Engineering Profile Card */}
        <div ref={cardRef} className="lg:col-span-6">
          <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono text-[#8B5CF6] uppercase tracking-wider block">
                  SYSTEM FOUNDATIONS
                </span>
                <h3 className="text-lg font-bold text-white mt-1">Technical Disciplines</h3>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ACTIVE
              </span>
            </div>

            <div className="space-y-4">
              {foundations.map((item) => (
                <div
                  key={item.title}
                  className="group p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>B.Tech Student (2023 - 2027)</span>
              <span>SRMCEM / AKTU</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
