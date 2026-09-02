'use client';

import React, { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="mb-3 w-80 bg-[#070D1A] border border-amber-500/40 rounded-2xl p-4 shadow-2xl space-y-3 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white">P.A. Laila (Official Desk)</span>
            </div>
            <button type="button" aria-label="Close WhatsApp fast menu" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white p-1">
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Welcome to TIA! How can we assist you today regarding our AI & Tech Courses, Business Solutions, or Job Applications?
          </p>

          <div className="space-y-1.5">
            <button
              type="button"
              onClick={() => {
                openWhatsApp("Hello P.A. Laila, I am interested in applying for a job / internship at TIA.");
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] text-amber-300 border border-slate-800 transition-colors font-medium"
            >
              💼 Apply for Job / Internship
            </button>

            <button
              type="button"
              onClick={() => {
                openWhatsApp("Hello P.A. Laila, please share course syllabus and admission details for AI, Cyber & Cloud courses.");
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] text-cyan-300 border border-slate-800 transition-colors font-medium"
            >
              🎓 Inquire about AI, Cyber & Cloud Courses
            </button>

            <button
              type="button"
              onClick={() => {
                openWhatsApp("Hello P.A. Laila, I would like to get a quote for a Business Solution (With / Without AI).");
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] text-emerald-300 border border-slate-800 transition-colors font-medium"
            >
              ⚡ Request Business Solution Quote
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              openWhatsApp("Hello P.A. Laila, I would like to chat with TIA.");
              setIsOpen(false);
            }}
            aria-label="Open full WhatsApp chat with P.A. Laila"
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs hover:brightness-110 flex items-center justify-center gap-1.5 shadow-md"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open WhatsApp Chat (+91 7386157041)</span>
          </button>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle WhatsApp chat with P.A. Laila"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 border-2 border-[#040914]"></span>
        </span>
      </button>
    </div>
  );
};
