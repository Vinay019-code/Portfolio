"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices and when reduced motion is not preferred
    if (prefersReduced || typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], input, textarea, select");
      const projectCard = target.closest("[data-cursor='view']");

      if (projectCard) {
        setIsHovered(true);
        setCursorText("VIEW");
      } else if (interactive) {
        setIsPointer(true);
        setIsHovered(false);
        setCursorText("");
      } else {
        setIsPointer(false);
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      } hidden md:block`}
      aria-hidden="true"
    >
      {/* Center dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#8B5CF6] transition-transform duration-150 ${
          isHovered ? "scale-0" : isPointer ? "scale-150 bg-white" : "scale-100"
        }`}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border transition-all duration-200 ${
          isHovered
            ? "-ml-9 -mt-9 h-18 w-18 border-[#8B5CF6] bg-[#8B5CF6]/20 backdrop-blur-[2px]"
            : isPointer
            ? "-ml-5 -mt-5 h-10 w-10 border-white/50 bg-white/5"
            : "-ml-3 -mt-3 h-6 w-6 border-white/20 bg-transparent"
        }`}
      >
        {isHovered && (
          <span
            ref={textRef}
            className="text-[10px] font-semibold tracking-widest text-white uppercase"
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
