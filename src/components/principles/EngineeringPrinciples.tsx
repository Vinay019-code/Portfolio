"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { profileData } from "@/data/profile";
import { Check, ShieldCheck } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function EngineeringPrinciples() {
  const containerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      const items = listRef.current?.children;
      if (!items) return;

      gsap.fromTo(
        items,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      id="principles"
      ref={containerRef}
      className="py-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative"
    >
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#B9E4E8] tracking-widest uppercase">
        <span>05</span>
        <span>/</span>
        <span>STANDARDS</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#EEEEEE] mb-3">
            I care about:
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed font-normal">
            Every application, endpoint, or algorithmic module is guided by
            principles that prioritize maintainability, security, and developer clarity.
          </p>
        </div>

        <div
          ref={listRef}
          className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {profileData.principles.map((principle) => (
            <div
              key={principle}
              className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-[#071B2B]/60 backdrop-blur-sm hover:border-[#167D8D]/60 transition-colors group"
            >
              <div className="w-6 h-6 rounded-full bg-[#167D8D]/20 border border-[#167D8D]/40 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-[#B9E4E8]" />
              </div>
              <span className="text-sm font-semibold text-zinc-200 group-hover:text-[#B9E4E8] transition-colors">
                {principle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
