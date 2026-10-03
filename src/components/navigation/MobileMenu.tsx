"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { X, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const links = linksRef.current;
    if (!overlay || !links) return;

    const ctx = gsap.context(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        gsap.to(overlay, {
          yPercent: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
        gsap.fromTo(
          links.querySelectorAll(".mobile-nav-item"),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.2,
          }
        );
      } else {
        document.body.style.overflow = "";
        gsap.to(overlay, {
          yPercent: -100,
          duration: 0.4,
          ease: "power3.inOut",
        });
      }
    });

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#050505] p-6 sm:p-10 -translate-y-full md:hidden border-b border-white/10"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm tracking-widest text-[#8B5CF6] uppercase">
          VINAY YADAV
        </span>
        <button
          onClick={onClose}
          className="p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav items */}
      <div ref={linksRef} className="flex flex-col gap-6 my-auto">
        {navLinks.map((item, index) => (
          <div key={item.name} className="mobile-nav-item">
            <Link
              href={item.href}
              onClick={onClose}
              className="group flex items-center justify-between text-2xl font-bold tracking-tight text-white/90 hover:text-[#8B5CF6] transition-colors"
            >
              <span>{item.name}</span>
              <span className="text-xs font-mono text-[#A1A1AA] group-hover:text-[#8B5CF6]">
                0{index + 1}
              </span>
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom Footer Info */}
      <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
        <div className="flex gap-4">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors font-mono"
          >
            <GitHubIcon className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors font-mono"
          >
            <LinkedInIcon className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
        <p className="text-[11px] font-mono text-zinc-500">
          © 2026 Vinay Yadav • Full-Stack Engineer
        </p>
      </div>
    </div>
  );
}
