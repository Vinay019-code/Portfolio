"use client";

import React, { useState } from "react";
import InitialLoader from "@/components/ui/InitialLoader";
import CustomCursor from "@/components/ui/CustomCursor";
import InteractiveBackground from "@/components/background/InteractiveBackground";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import SkillsEcosystem from "@/components/skills/SkillsEcosystem";
import ProjectsSection from "@/components/projects/ProjectsSection";
import HowIThink from "@/components/problem-solving/HowIThink";
import EngineeringPrinciples from "@/components/principles/EngineeringPrinciples";
import EducationTimeline from "@/components/education/EducationTimeline";
import ResumeCTA from "@/components/resume/ResumeCTA";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import PortfolioAssistant from "@/components/assistant/PortfolioAssistant";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#8B5CF6]/30">
      {/* Cinematic Initial Loader */}
      {!loadingComplete && (
        <InitialLoader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Interactive Cursor for Desktop */}
      <CustomCursor />

      {/* Atmospheric Interactive Particle Grid Background */}
      <InteractiveBackground />

      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <SkillsEcosystem />
        <ProjectsSection />
        <HowIThink />
        <EngineeringPrinciples />
        <EducationTimeline />
        <ResumeCTA />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Portfolio Assistant */}
      <PortfolioAssistant />
    </div>
  );
}
