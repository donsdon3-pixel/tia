'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  TrendingUp,
  Eye,
  Layers,
  Cpu,
  Globe,
  Briefcase,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Zap,
  Settings2
} from 'lucide-react';
import { solutionsData, SolutionItem } from '@/data/solutions';
import { openWhatsApp } from '@/lib/whatsapp';

interface SolutionsSectionProps {
  onOpenQuoteModal: (preselectedService?: string, category?: 'with_ai' | 'without_ai') => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'with_ai' | 'without_ai'>('with_ai');

  const filteredSolutions = solutionsData.filter((item) => item.category === activeTab);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Bot': return <Bot className="w-6 h-6 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case 'Eye': return <Eye className="w-6 h-6 text-purple-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="solutions" className="py-24 relative overflow-hidden bg-[#040914]">
      <div className="absolute top-0 right-1/4 w-96 h-96 radial-glow-cyan pointer-events-none blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 radial-glow-gold pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5" />
            Enterprise & Commercial Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            All Types of <span className="gold-gradient-text">Business Solutions</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Whether your enterprise requires next-generation Autonomous AI workflows or robust classic CAD & software engineering, TIA architects the exact solution for your growth.
          </p>

          <div className="mt-10 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-amber-500/30 shadow-2xl">
            <button
              onClick={() => setActiveTab('with_ai')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'with_ai'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-100'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>With AI Solutions</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-300/30 font-mono">
                Next-Gen
              </span>
            </button>

            <button
              onClick={() => setActiveTab('without_ai')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeTab === 'without_ai'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-950 shadow-lg shadow-amber-500/30 scale-100'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Settings2 className="w-4 h-4" />
              <span>Without AI Solutions</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-950 border border-amber-600/30 font-mono">
                Core Engineering
              </span>
            </button>
          </div>
        </div>

        <div className="mb-10 text-center">
          {activeTab === 'with_ai' ? (
            <p className="text-sm text-cyan-300/90 font-mono">
              ⚡ Powered by Autonomous LLM Agents, Multi-Agent Systems, Neural Nets & Vector Intelligence
            </p>
          ) : (
            <p className="text-sm text-amber-300/90 font-mono">
              ⚙️ Powered by High-Precision CAD 3D Design, Mechatronics Hardware, Custom Web & Process Engineering
            </p>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSolutions.map((sol) => (
              <div
                key={sol.id}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border-amber-500/20 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-amber-500/30 group-hover:border-amber-400 transition-colors">
                      {getIcon(sol.iconName)}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700">
                      {sol.idealFor}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sol.shortDesc}
                  </p>

                  <div className="mt-5 space-y-2">
                    {sol.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {sol.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="text-[11px] text-slate-400">
                    <strong className="text-slate-300">Deliverable:</strong> {sol.deliverables}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenQuoteModal(sol.title, sol.category)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 border border-amber-500/40 font-semibold text-xs transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Get Quote</span>
                    </button>

                    <button
                      onClick={() =>
                        openWhatsApp(
                          `Hello P.A. Laila, I am interested in TIA Business Solution: *${sol.title}* (${sol.category === 'with_ai' ? 'With AI' : 'Without AI'}). Please share details.`
                        )
                      }
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-16 p-8 rounded-3xl glass-panel border-amber-500/30 text-center max-w-4xl mx-auto">
          <h4 className="text-xl sm:text-2xl font-bold text-white">
            Need a Bespoke Solution Tailored to Your Business?
          </h4>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl mx-auto">
            From complete enterprise AI transformation to complex mechanical CAD prototyping, our engineering team led by M Bhargav Rayudu builds tailored roadmaps.
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-amber-500/20"
            >
              <Zap className="w-4 h-4" />
              <span>Configure Custom Solution</span>
            </button>
            <button
              onClick={() => openWhatsApp("Hello P.A. Laila, I have a custom enterprise project inquiry for Founder M Bhargav Rayudu.")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-semibold text-sm hover:bg-slate-800 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp with P.A. Laila</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};