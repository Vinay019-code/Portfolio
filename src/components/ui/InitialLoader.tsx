"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

interface InitialLoaderProps {
  onComplete: () => void;
}

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Check if user already saw the loader in this session to not annoy on reload
    const hasLoaded = sessionStorage.getItem("portfolio_loaded");
    if (hasLoaded) {
      onComplete();
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("portfolio_loaded", "true");
          onComplete();
        },
      });

      // Quick smooth counter from 0 to 100
      const counterObj = { val: 0 };
      tl.to(counterObj, {
        val: 100,
        duration: 0.8,
        ease: "power2.inOut",
        onUpdate: () => {
          setPercent(Math.floor(counterObj.val));
        },
      });

      // Slide away animation
      tl.to(
        [textRef.current, subtextRef.current, barRef.current?.parentElement],
        {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.in",
        },
        "-=0.1"
      );

      tl.to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.7,
          ease: "power4.inOut",
        },
        "-=0.05"
      );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-[#F5F5F5]"
    >
      <div className="relative flex flex-col items-center text-center">
        {/* Editorial Subtitle */}
        <p
          ref={subtextRef}
          className="mb-3 text-[11px] font-mono tracking-[0.28em] text-[#8B5CF6] uppercase"
        >
          ENGINEERING ARCHITECTURE
        </p>

        {/* Large Name Header */}
        <h1
          ref={textRef}
          className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 uppercase"
        >
          VINAY YADAV
        </h1>

        {/* Progress Bar Container */}
        <div className="w-64 sm:w-80 h-1 bg-white/10 rounded-full overflow-hidden mb-3 relative">
          <div
            ref={barRef}
            className="h-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] transition-all duration-75"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Numeric Counter */}
        <div className="flex justify-between w-64 sm:w-80 text-[11px] font-mono text-[#A1A1AA]">
          <span>SYSTEM_INITIALIZE</span>
          <span ref={counterRef}>{percent}%</span>
        </div>
      </div>
    </div>
  );
}
