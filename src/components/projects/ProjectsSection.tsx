"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Sparkles, Terminal } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (!cards) return;

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative"
    >
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#8B5CF6] tracking-widest uppercase">
        <span>03</span>
        <span>/</span>
        <span>PRODUCTION WORK</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Featured Systems & Applications
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Selected projects demonstrating end-to-end full-stack engineering,
            real-time WebSockets, computer-vision signal processing, and authenticated API services.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 self-start md:self-auto">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>PRODUCTION-MINDED ARCHITECTURES</span>
        </div>
      </div>

      {/* Grid of Projects */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
