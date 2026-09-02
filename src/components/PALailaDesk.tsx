'use client';

import React from 'react';
import { MessageSquare, Phone, MapPin, Clock, ShieldCheck, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { openWhatsApp, WHATSAPP_NUMBER, PA_NAME, FOUNDER_NAME, LOCATION } from '@/lib/whatsapp';

export const PALailaDesk: React.FC<{ onOpenJobModal: () => void; onOpenQuoteModal: () => void }> = ({
  onOpenJobModal,
  onOpenQuoteModal,
}) => {
  const quickMessages = [
    { label: "Job Application Query", msg: "Hello P.A. Laila, I have a question regarding applying for a job/internship at TIA." },
    { label: "Course Admissions", msg: "Hello P.A. Laila, I would like to get admission details for TIA AI & CAD courses." },
    { label: "Business Solution Quote", msg: "Hello P.A. Laila, our company requires a business solution consultation with TIA." },
    { label: "Founder Appointment", msg: "Hello P.A. Laila, I would like to request an appointment/discussion with Founder M Bhargav Rayudu." },
  ];

  return (
    <section id="pa-desk" className="py-24 relative overflow-hidden bg-[#030712]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border-amber-500/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 radial-glow-gold pointer-events-none blur-3xl opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Dedicated Official Gateway
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                TIA Executive Communications Desk
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                All institutional communications, job applications, student admissions, and enterprise consultations are directly coordinated by <strong className="text-amber-300 font-semibold">Laila</strong>, Personal Assistant to Founder <strong className="text-white">M Bhargav Rayudu</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs">WhatsApp Only</div>
                    <div className="font-bold text-white text-base font-mono">+91 7386157041</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs">Official Headquarters</div>
                    <div className="font-bold text-white">Tirupati, Andhra Pradesh</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="text-xs text-slate-400 font-semibold mb-3 uppercase tracking-wider">
                  Fast 1-Click WhatsApp Inquiries:
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickMessages.map((qm, idx) => (
                    <button
                      key={idx}
                      onClick={() => openWhatsApp(qm.msg)}
                      className="px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-amber-500/30 text-slate-200 text-xs font-medium transition-colors flex items-center gap-1.5 hover:border-amber-400"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{qm.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-amber-500/30 text-center space-y-4 shadow-xl">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Live WhatsApp Assistance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Have a question? P.A. Laila handles instant replies for course inquiries, company quotes, and resume submissions.
              </p>
              <button
                onClick={() => openWhatsApp("Hello P.A. Laila, I am reaching out to TIA regarding your services and programs.")}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 text-slate-950 font-extrabold text-sm hover:brightness-110 shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp (+91 7386157041)</span>
              </button>
              <div className="text-[11px] text-slate-500 font-mono">
                Official TIA Desk • Mon - Sat (9:00 AM - 7:00 PM IST)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};