'use client';

import React from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Cpu, 
  Cog, 
  Layers, 
  ArrowRight, 
  Briefcase, 
  MessageSquare,
  Building2
} from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

interface HeroSectionProps {
  onOpenJobModal: () => void;
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenJobModal,
  onOpenQuoteModal,
}) => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center justify-center">
      {/* Background radial glows & grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b1528_1px,transparent_1px),linear-gradient(to_bottom,#0b1528_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow-gold pointer-events-none blur-3xl opacity-40" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] radial-glow-cyan pointer-events-none blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Top Badges */}
        <div
          className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs sm:text-sm text-slate-200 mb-8 backdrop-blur-md shadow-lg shadow-amber-500/10"
        >
          <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Tirupati Intellect Authority
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-slate-200 font-medium">Teaching & All Business Solutions</span>
          <span className="text-slate-400">•</span>
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[11px] font-mono font-medium">
            With AI / Without AI
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.15]"
        >
          Empowering Tirupati with{" "}
          <span className="gold-gradient-text">World-Class AI</span> &{" "}
          <span className="cyan-gradient-text">Scalable Solutions</span>
        </h1>

        {/* Subtitle with Founder & Scope Info */}
        <p
          className="mt-6 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed"
        >
          Founded by <strong className="text-amber-300 font-semibold">M Bhargav Rayudu</strong>{" "}
          <span className="text-slate-300 text-sm">
            (Professional AI Certificate, B.Tech Mechatronics Engineering, CAD Diploma)
          </span>.
          We deliver transformative <span className="text-white font-medium">Teaching & Industry Training</span> alongside bespoke <span className="text-white font-medium">Business Solutions</span> for high-growth enterprises.
        </p>

        {/* Credentials Pill Bar */}
        <div
          className="mt-8 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm text-slate-200"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-amber-500/30 backdrop-blur-sm">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Professional AI Certified</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-amber-500/30 backdrop-blur-sm">
            <Cog className="w-4 h-4 text-amber-400" />
            <span>B.Tech Mechatronics Engineering</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-amber-500/30 backdrop-blur-sm">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>CAD Diploma Specialist</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto"
        >
          {/* Apply for Job Button */}
          <button
            type="button"
            onClick={onOpenJobModal}
            aria-label="Apply for Job at TIA"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-black font-extrabold text-base hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
          >
            <Briefcase className="w-5 h-5 text-black" />
            <span>Apply for Job (Attach Files)</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Request Business Solution */}
          <button
            type="button"
            onClick={onOpenQuoteModal}
            aria-label="Request Business Solution"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-slate-900/90 text-slate-100 font-bold text-base border border-amber-500/40 hover:bg-slate-800 hover:border-amber-400 transition-all duration-200 shadow-xl"
          >
            <Building2 className="w-5 h-5 text-cyan-400" />
            <span>Request Business Solution</span>
          </button>

          {/* WhatsApp Direct P.A. Desk */}
          <button
            type="button"
            onClick={() => openWhatsApp("Hello P.A. Laila, I would like to connect regarding TIA solutions and training.")}
            aria-label="WhatsApp P.A. Laila Desk"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-emerald-950/70 text-emerald-300 font-bold text-base border border-emerald-500/50 hover:bg-emerald-900/70 hover:text-emerald-200 transition-all duration-200 shadow-lg"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <span>WhatsApp P.A. Laila (+91 7386157041)</span>
          </button>
        </div>

        {/* Live Metrics Showcase */}
        <div
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="glass-panel p-4 rounded-2xl border-amber-500/30 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">100%</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Multi-Domain AI & CAD</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl border-amber-500/30 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono">Dual Wing</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Teaching & Enterprise</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl border-amber-500/30 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300 font-mono">Tirupati</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Headquarters (A.P.)</div>
          </div>
          <div className="glass-panel p-4 rounded-2xl border-amber-500/30 text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-mono">P.A. Laila</div>
            <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">WhatsApp Dedicated Desk</div>
          </div>
        </div>
      </div>
    </section>
  );
};
