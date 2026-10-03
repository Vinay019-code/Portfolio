"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { skillCategories } from "@/data/skills";
import { Layers, Cpu, Database, Wrench, Shield, Binary, Sparkles, Network } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function SkillsEcosystem() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredSkill, setHoveredSkill] = useState<{
    name: string;
    category: string;
    description: string;
  } | null>(null);

  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory, prefersReduced]);

  const categoryIcons: Record<string, React.ReactNode> = {
    languages: <Binary className="w-4 h-4 text-emerald-400" />,
    frontend: <Layers className="w-4 h-4 text-[#8B5CF6]" />,
    backend: <Cpu className="w-4 h-4 text-cyan-400" />,
    database: <Database className="w-4 h-4 text-amber-400" />,
    core: <Shield className="w-4 h-4 text-rose-400" />,
    tools: <Wrench className="w-4 h-4 text-blue-400" />,
    "data-science": <Network className="w-4 h-4 text-violet-400" />,
  };

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative"
    >
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#8B5CF6] tracking-widest uppercase">
        <span>02</span>
        <span>/</span>
        <span>TECHNICAL ECOSYSTEM</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Ecosystem & Stack
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            A comprehensive mapping of technologies, languages, and computer science
            disciplines applied across full-stack engineering and data pipelines.
          </p>
        </div>

        {/* Central Hub Badge */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/80 border border-[#8B5CF6]/30 self-start md:self-auto shadow-lg shadow-[#8B5CF6]/5">
          <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-ping" />
          <span className="font-mono text-xs font-semibold text-zinc-200">
            FULL-STACK ARCHITECTURE HUB
          </span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-white/5">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-lg text-xs font-mono transition-all ${
            activeCategory === "all"
              ? "bg-white text-black font-semibold shadow-md"
              : "bg-zinc-900/70 text-zinc-400 hover:text-white hover:bg-zinc-800"
          }`}
        >
          All Domains
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-lg text-xs font-mono flex items-center gap-2 transition-all ${
              activeCategory === cat.id
                ? "bg-[#8B5CF6] text-white font-semibold shadow-md shadow-[#8B5CF6]/20"
                : "bg-zinc-900/70 text-zinc-400 hover:text-white hover:bg-zinc-800"
            }`}
          >
            {categoryIcons[cat.id]}
            <span>{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCategories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-xl border border-white/10 bg-zinc-950/50 p-6 backdrop-blur-sm hover:border-white/20 transition-all group"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-900 border border-white/10">
                  {categoryIcons[cat.id]}
                </div>
                <h3 className="font-mono text-sm font-bold text-white tracking-wider uppercase">
                  {cat.name}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">
                {cat.skills.length} skills
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  onMouseEnter={() =>
                    setHoveredSkill({
                      name: skill.name,
                      category: cat.name,
                      description: skill.description,
                    })
                  }
                  onMouseLeave={() => setHoveredSkill(null)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono cursor-pointer transition-all border ${
                    skill.highlight
                      ? "bg-zinc-900 text-zinc-100 border-white/15 hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 hover:text-white"
                      : "bg-zinc-900/50 text-zinc-400 border-white/5 hover:border-white/20 hover:text-zinc-200"
                  }`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Skill Inspector Footer */}
      <div className="mt-8 p-4 rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-zinc-400">
          <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
          <span>
            {hoveredSkill ? (
              <>
                <strong className="text-white">{hoveredSkill.name}</strong>{" "}
                <span className="text-[#8B5CF6]">({hoveredSkill.category})</span>:{" "}
                {hoveredSkill.description}
              </>
            ) : (
              "Hover any technology badge to inspect engineering role and contextual usage."
            )}
          </span>
        </div>
        <div className="text-zinc-500 text-[11px] shrink-0">
          STRICTLY GROUNDED IN RESUME FACTS
        </div>
      </div>
    </section>
  );
}
