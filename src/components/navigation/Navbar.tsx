"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Download } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import MobileMenu from "./MobileMenu";
import { profileData } from "@/data/profile";

const NAV_LINKS = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Methodology", href: "#problem-solving" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isScrolled } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#050505]/80 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-white focus:outline-none"
            aria-label="Vinay Yadav - Home"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-mono text-sm font-bold text-white group-hover:border-[#8B5CF6] transition-colors">
              VY
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-sm text-zinc-100 group-hover:text-white transition-colors">
                VINAY YADAV
              </span>
              <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                AVAILABLE FOR ROLES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950/60 p-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-white bg-white/10 font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#8B5CF6]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={profileData.resumeUrl}
              download="Vinay_Yadav_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-zinc-200 bg-zinc-900/90 border border-white/15 hover:border-[#8B5CF6] hover:text-white transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Open mobile navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
