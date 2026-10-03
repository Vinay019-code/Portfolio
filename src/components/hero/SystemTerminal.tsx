"use client";

import React, { useState } from "react";
import { Terminal, Cpu, Database, Layers, CheckCircle2, ShieldCheck } from "lucide-react";

export default function SystemTerminal() {
  const [activeTab, setActiveTab] = useState<"code" | "pipeline" | "status">("code");

  return (
    <div className="w-full max-w-lg rounded-xl border border-white/10 bg-zinc-950/80 shadow-2xl backdrop-blur-md overflow-hidden">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-zinc-900/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-zinc-400">system.spec.ts</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("code")}
            className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
              activeTab === "code"
                ? "bg-white/10 text-white"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Object
          </button>
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
              activeTab === "pipeline"
                ? "bg-white/10 text-white"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Pipeline
          </button>
          <button
            onClick={() => setActiveTab("status")}
            className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
              activeTab === "status"
                ? "bg-white/10 text-white"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Status
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[220px]">
        {activeTab === "code" && (
          <div className="space-y-1.5 text-zinc-300">
            <div>
              <span className="text-[#8B5CF6]">const</span>{" "}
              <span className="text-emerald-400">engineer</span> = &#123;
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">name:</span>{" "}
              <span className="text-amber-300">&quot;Vinay Yadav&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">role:</span>{" "}
              <span className="text-amber-300">&quot;Software Engineer&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">frontend:</span>{" "}
              <span className="text-amber-300">&quot;React / Next.js / Tailwind&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">backend:</span>{" "}
              <span className="text-amber-300">&quot;Node / Express / Java / REST&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">database:</span>{" "}
              <span className="text-amber-300">&quot;MongoDB / SQLite / SQL&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">languages:</span> [
              <span className="text-amber-300">&quot;Java&quot;</span>,{" "}
              <span className="text-amber-300">&quot;JavaScript&quot;</span>,{" "}
              <span className="text-amber-300">&quot;Python&quot;</span>],
            </div>
            <div className="pl-4">
              <span className="text-zinc-400">focus:</span>{" "}
              <span className="text-amber-300">&quot;Clean Architecture & Scalability&quot;</span>
            </div>
            <div>&#125;;</div>
          </div>
        )}

        {activeTab === "pipeline" && (
          <div className="space-y-3 py-1">
            <div className="flex items-center gap-3 p-2 rounded bg-white/[0.03] border border-white/5">
              <Layers className="w-4 h-4 text-[#8B5CF6]" />
              <div>
                <div className="text-white font-semibold">Presentation Tier</div>
                <div className="text-[11px] text-zinc-400">Next.js App Router • Reusable Components • Responsive CSS</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded bg-white/[0.03] border border-white/5">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-white font-semibold">Services & APIs</div>
                <div className="text-[11px] text-zinc-400">Express REST APIs • Java OOP • JWT Authentication</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded bg-white/[0.03] border border-white/5">
              <Database className="w-4 h-4 text-cyan-400" />
              <div>
                <div className="text-white font-semibold">Data & Telemetry</div>
                <div className="text-[11px] text-zinc-400">MongoDB Documents • NumPy Signal Processing • Python</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "status" && (
          <div className="space-y-3 py-1 text-xs">
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-zinc-400">Education</span>
              <span className="text-zinc-200">B.Tech (2023 - 2027)</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-zinc-400">Primary DSA Language</span>
              <span className="text-emerald-400 font-semibold">Java</span>
            </div>
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <span className="text-zinc-400">Authentication</span>
              <span className="text-zinc-200">JWT + HttpOnly Cookies</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Engineering Approach</span>
              <span className="text-zinc-200">Production-Oriented Code</span>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/70 border-t border-white/5 text-[11px] font-mono text-zinc-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified Engineering Profile
        </span>
        <span className="text-zinc-500">v2.6.0</span>
      </div>
    </div>
  );
}
