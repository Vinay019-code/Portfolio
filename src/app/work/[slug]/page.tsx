import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ArchitectureVisualizer from "@/components/projects/ArchitectureVisualizer";
import { ArrowLeft, ArrowUpRight, CheckCircle2, AlertCircle, Cpu, Layers } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Vinay Yadav`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#8B5CF6]/30">
      {/* Top Breadcrumb Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO OVERVIEW</span>
          </Link>

          <span className="font-mono text-xs text-[#8B5CF6]">
            PROJECT {project.number}
          </span>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="pt-28 pb-24 px-6 sm:px-8 max-w-5xl mx-auto">
        {/* Title & Metadata */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-500">
              STATUS: {project.currentStatus}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-normal leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/10">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-white/15 text-white font-mono text-xs hover:border-[#8B5CF6] transition-all"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>Inspect Source on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>

            <div className="inline-flex items-center px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/5 text-zinc-400 font-mono text-xs">
              Live Demo: Project information available on request.
            </div>
          </div>
        </div>

        {/* Technologies Grid */}
        <section className="mb-16">
          <h2 className="text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-4">
            TECHNOLOGY STACK
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-zinc-900 border border-white/10 text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Problem & Solution Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10">
            <div className="flex items-center gap-2 mb-3 text-amber-400 font-mono text-xs uppercase tracking-wider">
              <AlertCircle className="w-4 h-4" />
              <span>The Problem</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10">
            <div className="flex items-center gap-2 mb-3 text-emerald-400 font-mono text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Solution</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>
        </section>

        {/* System Architecture Visualization */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-2">
              SYSTEM ARCHITECTURE
            </h2>
            <p className="text-sm text-zinc-400">
              {project.architecture.overview}
            </p>
          </div>

          <ArchitectureVisualizer
            steps={project.architecture.flow}
            title={`${project.title} — End-to-End Pipeline`}
          />
        </section>

        {/* Key Features from Resume */}
        <section className="mb-16">
          <h2 className="text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-6">
            IMPLEMENTED CAPABILITIES & FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 flex items-start gap-3"
              >
                <span className="font-mono text-xs text-[#8B5CF6] mt-0.5">0{idx + 1}</span>
                <span className="text-sm text-zinc-300 leading-snug">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Decisions */}
        <section className="mb-16">
          <h2 className="text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-6">
            ENGINEERING DECISIONS & TRADE-OFFS
          </h2>
          <div className="space-y-4">
            {project.engineeringDecisions.map((decision, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-950 border border-white/10"
              >
                <h3 className="text-sm font-bold text-white mb-2">{decision.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {decision.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Edge Cases */}
        <section className="mb-16">
          <h2 className="text-xs font-mono text-[#8B5CF6] tracking-widest uppercase mb-6">
            TECHNICAL CHALLENGES & MITIGATIONS
          </h2>
          <div className="space-y-3">
            {project.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 text-xs sm:text-sm text-zinc-300 leading-relaxed flex items-start gap-3"
              >
                <span className="text-amber-400 font-mono text-xs mt-0.5">•</span>
                <span>{challenge}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#8B5CF6] hover:text-[#A78BFA] transition-colors"
          >
            GitHub Repository →
          </a>
        </div>
      </main>
    </div>
  );
}
