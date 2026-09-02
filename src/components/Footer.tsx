'use client';

import React from 'react';
import Image from 'next';
import { MessageSquare, MapPin, ShieldCheck, Mail, Phone, Cpu, Cog, Layers, Sparkles } from 'lucide-react';
import { openWhatsApp, WHATSAPP_NUMBER, PA_NAME, FOUNDER_NAME, LOCATION } from '@/lib/whatsapp';

export const Footer: React.FC<{ onOpenJobModal: () => void; onOpenQuoteModal: () => void }> = ({
  onOpenJobModal,
  onOpenQuoteModal,
}) => {
  return (
    <footer className="bg-[#02050B] border-t border-amber-500/20 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-400/50 bg-slate-900">
                <img src="/images/tia-logo.jpg" alt="TIA Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-mono tracking-wider">TIA</div>
                <div className="text-xs text-amber-300 font-medium">Tirupati Intellect Authority</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Pioneering high-intellect technological education and enterprise-grade business solutions (With AI & Without AI). Founded by M Bhargav Rayudu (AI Specialist, B.Tech Mechatronics, CAD Diploma).
            </p>
            <div className="flex items-center gap-2 text-slate-300 pt-2">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Headquarters: Tirupati, Andhra Pradesh, India</span>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">Wings & Services</div>
            <ul className="space-y-2">
              <li><a href="#solutions" className="hover:text-amber-300 transition-colors">With AI Solutions</a></li>
              <li><a href="#solutions" className="hover:text-amber-300 transition-colors">Without AI Engineering</a></li>
              <li><a href="#teaching" className="hover:text-amber-300 transition-colors">AI Masterclass</a></li>
              <li><a href="#teaching" className="hover:text-amber-300 transition-colors">CAD 3D Diploma</a></li>
              <li><a href="#teaching" className="hover:text-amber-300 transition-colors">Mechatronics Robotics</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">Quick Actions</div>
            <ul className="space-y-2">
              <li><button onClick={onOpenJobModal} className="hover:text-amber-300 text-left transition-colors">Apply for Job / Careers</button></li>
              <li><button onClick={onOpenQuoteModal} className="hover:text-amber-300 text-left transition-colors">Request Solution Quote</button></li>
              <li><a href="#founder" className="hover:text-amber-300 transition-colors">Founder Credentials</a></li>
              <li><a href="#pa-desk" className="hover:text-amber-300 transition-colors">P.A. Laila WhatsApp</a></li>
              <li><a href="#faq" className="hover:text-amber-300 transition-colors">Platform FAQ</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">Official Contact</div>
            <p className="text-xs text-slate-400">
              Inquiries are handled exclusively via WhatsApp by Founder P.A. Laila.
            </p>
            <button
              onClick={() => openWhatsApp("Hello P.A. Laila, I am contacting TIA.")}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-semibold text-xs hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>+91 7386157041 (WhatsApp Only)</span>
            </button>
            <div className="text-[11px] text-slate-500 pt-1 font-mono">
              Architecture: GitHub + Supabase + Vercel
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div>
            © {new Date().getFullYear()} TIA (Tirupati Intellect Authority). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Founder & CEO: <strong>M Bhargav Rayudu</strong></span>
            <span>•</span>
            <span>Executive Desk: <strong>P.A. Laila</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};