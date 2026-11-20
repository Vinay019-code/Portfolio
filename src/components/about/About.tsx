"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { profileData } from "@/data/profile";
import {
  Code2,
  Server,
  Database,
  Shield,
  Terminal,
  Sparkles,
  Camera,
  User,
  CheckCircle2,
} from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
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
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.15,
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
          delay: 0.25,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  const foundations = [
    {
      icon: <Terminal className="w-4 h-4 text-[#B9E4E8]" />,
      title: "Data Structures & Algorithms",
      desc: "Pattern-oriented problem solving using Java (two pointers, sliding window, hashing, trees & graphs).",
    },
    {
      icon: <Code2 className="w-4 h-4 text-[#167D8D]" />,
      title: "Object-Oriented Programming",
      desc: "Clean modular principles, encapsulation, polymorphism, and maintainable domain modeling.",
    },
    {
      icon: <Server className="w-4 h-4 text-[#B9E4E8]" />,
      title: "REST APIs & Backend Services",
      desc: "Express.js route controllers, HTTP status semantics, robust input handling, and error pipelines.",
    },
    {
      icon: <Database className="w-4 h-4 text-[#167D8D]" />,
      title: "Database Modeling",
      desc: "MongoDB document structures, MongoDB Atlas indexing, relational queries in SQL & SQLite.",
    },
    {
      icon: <Shield className="w-4 h-4 text-[#B9E4E8]" />,
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
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#B9E4E8] tracking-widest uppercase">
        <span>01</span>
        <span>/</span>
        <span>BACKGROUND & PERSPECTIVE</span>
      </div>

      {/* Main Top Grid: Profile Image (Left) + Editorial Bio (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
        {/* Left Column: Profile Image Card */}
        <div ref={imageRef} className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[380px] rounded-2xl border border-white/10 bg-[#071B2B]/80 p-3 backdrop-blur-md shadow-2xl group hover:border-[#167D8D]/60 transition-all duration-300">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#167D8D]/25 via-transparent to-[#B9E4E8]/10 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Corner Tech Accents */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#B9E4E8] pointer-events-none" />
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#B9E4E8] pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#B9E4E8] pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#B9E4E8] pointer-events-none" />

            {/* Top Status Pill */}
            <div className="flex items-center justify-between px-3 py-2 mb-2 text-[11px] font-mono border-b border-white/10">
              <span className="flex items-center gap-1.5 text-[#B9E4E8]">
                <Sparkles className="w-3.5 h-3.5 text-[#B9E4E8]" />
                <span>PROFILE / ARCHITECTURE</span>
              </span>
              <span className="flex items-center gap-1.5 text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B9E4E8] animate-pulse" />
                ONLINE
              </span>
            </div>

            {/* Image Container with Fallback */}
            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#0a253a] via-[#071B2B] to-[#04111d] flex flex-col items-center justify-center border border-white/5">
              {imageLoaded ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={profileData.avatarUrl || "/profile.jpg"}
                  alt={profileData.name}
                  onError={() => setImageLoaded(false)}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                /* Elegant Interactive Fallback if photo not yet placed */
                <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-[#167D8D] to-[#B9E4E8]/40 p-[2px] shadow-lg shadow-[#167D8D]/30">
                    <div className="w-full h-full rounded-full bg-[#071B2B] flex items-center justify-center">
                      <User className="w-10 h-10 text-[#B9E4E8]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#EEEEEE] tracking-tight">
                      {profileData.name}
                    </h4>
                    <p className="text-xs font-mono text-[#B9E4E8] mt-1">
                      {profileData.role}
                    </p>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-[#071B2B]/90 border border-white/10 text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-[#B9E4E8]" />
                    <span>Drop photo at /public/profile.jpg</span>
                  </div>
                </div>
              )}

              {/* Bottom Gradient Overlay on Image */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071B2B] via-[#071B2B]/70 to-transparent pointer-events-none" />

              {/* Overlay Identity Strip */}
              <div className="absolute bottom-3 inset-x-3 p-3 rounded-lg bg-[#071B2B]/85 border border-white/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#EEEEEE] leading-tight">
                    {profileData.name}
                  </h4>
                  <p className="text-[11px] font-mono text-[#B9E4E8]">
                    Full-Stack Engineer
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#167D8D]/25 text-[#B9E4E8] border border-[#167D8D]/40">
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Bottom Card Footer Details */}
            <div className="pt-3 px-2 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>{profileData.location}</span>
              <span className="text-zinc-500">MERN • Java • Python</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Text & Career Focus */}
        <div ref={textRef} className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#EEEEEE] leading-tight">
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
            <p className="text-sm font-mono text-zinc-400 border-l-2 border-[#167D8D] pl-4 py-1">
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
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 border border-white/10 text-zinc-300 hover:border-[#167D8D]/60 hover:text-[#B9E4E8] transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Engineering Profile Card: Technical Disciplines */}
      <div ref={cardRef}>
        <div className="rounded-2xl border border-white/10 bg-[#071B2B]/60 p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#167D8D]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div>
              <span className="text-xs font-mono text-[#B9E4E8] uppercase tracking-wider block">
                SYSTEM FOUNDATIONS
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#EEEEEE] mt-1">Technical Disciplines</h3>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#167D8D]/20 text-[#B9E4E8] border border-[#167D8D]/40">
              ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {foundations.map((item) => (
              <div
                key={item.title}
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#167D8D]/40 hover:bg-[#167D8D]/10 transition-all flex flex-col justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-white/10 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-[#B9E4E8] transition-colors">
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
    </section>
  );
}
