"use client";

import React from "react";
import { ArchitectureStep } from "@/data/projects";
import { ArrowDown, Database, Cpu, Globe, Activity, Layers } from "lucide-react";

interface ArchitectureVisualizerProps {
  steps: ArchitectureStep[];
  title?: string;
}

export default function ArchitectureVisualizer({
  steps,
  title = "System Architecture Flow",
}: ArchitectureVisualizerProps) {
  const getStepIcon = (type: ArchitectureStep["type"]) => {
    switch (type) {
      case "client":
        return <Layers className="w-4 h-4 text-[#8B5CF6]" />;
      case "network":
        return <Globe className="w-4 h-4 text-cyan-400" />;
      case "server":
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case "database":
        return <Database className="w-4 h-4 text-amber-400" />;
      case "processing":
        return <Activity className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-md">
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
        <div>
          <span className="text-[11px] font-mono text-[#8B5CF6] tracking-widest uppercase block">
            DATA PIPELINE
          </span>
          <h4 className="text-sm font-bold text-white mt-0.5">{title}</h4>
        </div>
        <span className="text-[10px] font-mono text-zinc-500 uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10">
          END-TO-END
        </span>
      </div>

      <div className="space-y-3">
        {steps.map((step, idx) => (
          <React.Fragment key={step.title}>
            <div className="group p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-white/15 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-zinc-950 border border-white/10 shrink-0 mt-0.5">
                    {getStepIcon(step.type)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{step.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{step.details}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-600">0{idx + 1}</span>
              </div>
            </div>

            {idx < steps.length - 1 && (
              <div className="flex justify-center -my-1 text-zinc-600">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
