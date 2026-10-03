"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import MagneticButton from "../ui/MagneticButton";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isCopied, setIsCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Launch mailto client with pre-filled subject and body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5 relative"
    >
      <div className="flex items-center gap-2 mb-4 font-mono text-xs text-[#8B5CF6] tracking-widest uppercase">
        <span>07</span>
        <span>/</span>
        <span>INITIATE CONTACT</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Credentials & Links */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Let&apos;s build something useful.
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg font-normal">
            Whether you have an engineering opening, a software project, or want to
            discuss full-stack web architectures, feel free to reach out directly.
          </p>

          <div className="space-y-4 pt-4">
            {/* Email Card with click-to-copy */}
            <div className="p-4 rounded-xl border border-white/10 bg-zinc-950/60 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 text-[#8B5CF6]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="text-sm font-semibold text-white hover:text-[#8B5CF6] transition-colors"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                title="Copy Email"
                aria-label="Copy Email address"
              >
                {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl border border-white/10 bg-zinc-950/60 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 text-emerald-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase block">
                  Direct Phone
                </span>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  {profileData.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl border border-white/10 bg-zinc-950/60 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 text-cyan-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase block">
                  Location
                </span>
                <span className="text-sm font-semibold text-white">
                  {profileData.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex gap-4 pt-2">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-[#8B5CF6] transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-[#8B5CF6] transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-zinc-950/60 backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-xs text-zinc-400 mb-6 font-mono">
              Generates an email draft directly addressing Vinay Yadav.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Email Draft Dispatched</h4>
                <p className="text-xs text-zinc-300">
                  Your email client has been prepared with your message to{" "}
                  <strong className="text-white">{profileData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-300 hover:text-white border border-white/10"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Vinay, I'd like to talk about an engineering role..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-black bg-white hover:bg-zinc-200 transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Send Message</span>
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
