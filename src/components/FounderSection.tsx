'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Cog, Layers, Award, CheckCircle2, MessageSquare, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { founderData } from "@/data/founder";
import { openWhatsApp } from "@/lib/whatsapp";

interface FounderSectionProps {
  onOpenQuoteModal: () => void;
  onOpenJobModal: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  onOpenQuoteModal,
  onOpenJobModal,
}) => {
  return (
    <section id="founder" className="py-24 relative overflow-hidden bg-[#030712]/80">
      <div className="absolute top-1/2 left-0 w-96 h-96 radial-glow-gold pointer-events-none blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-0 w-96 h-96 radial-glow-cyan pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            Leadership & Vision
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Meet the Founder: <span className="gold-gradient-text">{founderData.name}</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Engineering intellect driving innovation across Artificial Intelligence, Mechatronics, and Industrial CAD Design.
          </p>
        </div>

        {/* Founder Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Founder Photo & Bio Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden glass-panel border-amber-500/30 p-4 shadow-2xl group">
              {/* Photo Container */}
              <div className="relative w-full h-[460px] sm:h-[500px] rounded-2xl overflow-hidden bg-slate-900 border border-amber-500/20">
                <Image
                  src="/images/founder-bhargav.jpg"
                  alt="M Bhargav Rayudu - Founder & CEO of TIA"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#040914]/20 to-transparent" />
                
                {/* Overlay Badge on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-amber-500/40">
                  <div className="text-white font-bold text-lg flex items-center justify-between">
                    <span>{founderData.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
                      Founder & CEO
                    </span>
                  </div>
                  <div className="text-xs text-amber-300 font-medium mt-0.5">
                    Tirupati Intellect Authority (TIA)
                  </div>
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Tirupati, Andhra Pradesh, India</span>
                  </div>
                </div>
              </div>

              {/* P.A. Laila Direct WhatsApp Contact Box */}
              <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Official Communication Desk</div>
                  <div className="text-sm font-semibold text-white">Handled by P.A. Laila</div>
                </div>
                <button
                  onClick={() => openWhatsApp("Hello P.A. Laila, I would like to schedule a discussion / meeting with Founder M Bhargav Rayudu.")}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400 text-black font-bold text-xs hover:bg-amber-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Qualifications, Vision & Dual Mastery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Triple-Engine Engineering & AI Mastery
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {founderData.bio}
              </p>
            </div>

            {/* Qualifications Cards */}
            <div className="grid grid-cols-1 gap-4">
              {founderData.credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl border-amber-500/20 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-400 flex-shrink-0 mt-0.5">
                    {cred.iconName === "Cpu" && <Cpu className="w-6 h-6 text-cyan-400" />}
                    {cred.iconName === "Cog" && <Cog className="w-6 h-6 text-amber-400" />}
                    {cred.iconName === "Layers" && <Layers className="w-6 h-6 text-emerald-400" />}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h4 className="text-lg font-bold text-white">{cred.title}</h4>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700 font-mono">
                        {cred.badge}
                      </span>
                    </div>
                    <div className="text-xs text-amber-300/90 font-medium">{cred.category}</div>
                    <p className="text-xs sm:text-sm text-slate-300 pt-1 leading-relaxed">
                      {cred.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-amber-950/30 border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
                <Sparkles className="w-4 h-4" />
                <span>The TIA Mission & Vision</span>
              </div>
              <p className="text-slate-200 text-sm italic leading-relaxed">
                "{founderData.mission}"
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Ready to collaborate with TIA?
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenQuoteModal}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-400/20 text-amber-300 border border-amber-500/40 hover:bg-amber-400/30"
                  >
                    Request Business Solution
                  </button>
                  <button
                    onClick={onOpenJobModal}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 hover:text-white"
                  >
                    Apply for Position
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
