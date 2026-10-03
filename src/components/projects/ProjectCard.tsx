"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Code2, Layers, Cpu } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const getCategoryTheme = (category: string) => {
    if (category.includes("MERN")) {
      return {
        badge: "text-[#8B5CF6] border-[#8B5CF6]/30 bg-[#8B5CF6]/10",
        icon: <Layers className="w-4 h-4 text-[#8B5CF6]" />,
      };
    }
    if (category.includes("Vision") || category.includes("Python")) {
      return {
        badge: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
        icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      };
    }
    return {
      badge: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
      icon: <Code2 className="w-4 h-4 text-cyan-400" />,
    };
  };

  const theme = getCategoryTheme(project.category);

  return (
    <div
      ref={cardRef}
      data-cursor="view"
      className="group relative rounded-2xl border border-white/10 bg-zinc-950/70 p-7 sm:p-9 backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-zinc-900/60 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
    >
      {/* Background ambient hover spotlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div>
        {/* Top bar: Index number, Category tag, Links */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-black text-zinc-600 group-hover:text-white transition-colors">
              {project.number}
            </span>
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-mono border flex items-center gap-1.5 ${theme.badge}`}
            >
              {theme.icon}
              <span>{project.category}</span>
            </span>
          </div>

          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3 group-hover:text-zinc-100 transition-colors">
          <Link href={`/work/${project.slug}`} className="focus:outline-none">
            {project.title}
          </Link>
        </h3>

        {/* Tagline */}
        <p className="text-xs font-mono text-[#8B5CF6] mb-4 uppercase tracking-wider">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-6 font-normal">
          {project.shortDescription}
        </p>

        {/* Key Features from Resume */}
        <div className="space-y-2 mb-6">
          {project.features.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
              <span className="text-[#8B5CF6] mt-0.5">•</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-900 border border-white/5 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Case Study Link */}
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-white group-hover:text-[#8B5CF6] transition-colors"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
