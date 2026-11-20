"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { profileData } from "@/data/profile";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function EducationTimeline() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
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

  const { education } = profileData;

  return (
    <section
      id="education"
      ref={containerRef}
      className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative"
    >
      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#B9E4E8] tracking-widest uppercase">
        <span>06</span>
        <span>/</span>
        <span>ACADEMIC FOUNDATION</span>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#EEEEEE] leading-tight">
          Education
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
          Formal academic training in computer science, software engineering principles,
          and theoretical computing foundations.
        </p>
      </div>

      <div ref={cardRef} className="max-w-4xl">
        <div className="relative pl-6 sm:pl-8 border-l border-[#167D8D]/40 space-y-8">
          {/* Timeline Node Badge */}
          <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#071B2B] border-2 border-[#167D8D] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#B9E4E8]" />
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#071B2B]/70 backdrop-blur-sm shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-[#B9E4E8] font-mono text-xs mb-1">
                  <GraduationCap className="w-4 h-4 text-[#B9E4E8]" />
                  <span>UNDERGRADUATE DEGREE</span>
                </div>
                <h3 className="text-2xl font-bold text-[#EEEEEE]">
                  {education.degree}
                </h3>
                <p className="text-sm text-zinc-300 mt-1">
                  {education.institution}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Calendar className="w-3.5 h-3.5 text-[#B9E4E8]" />
                  {education.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#167D8D]" />
                  {education.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
