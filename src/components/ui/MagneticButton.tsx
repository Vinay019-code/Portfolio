"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  asChild?: boolean;
}

export default function MagneticButton({
  children,
  strength = 18,
  className = "",
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;
    const btn = buttonRef.current;
    if (!btn) return;

    const ctx = gsap.context(() => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * (strength / 100),
          y: y * (strength / 100),
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.4)",
        });
      };

      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, buttonRef);

    return () => ctx.revert();
  }, [strength, prefersReduced]);

  return (
    <button ref={buttonRef} className={`relative inline-block ${className}`} {...props}>
      {children}
    </button>
  );
}
