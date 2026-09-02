'use client';

import React from "react";
import Image from "next/image";
import { MessageSquare, MapPin } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export const Footer: React.FC<{ onOpenJobModal: () => void; onOpenQuoteModal: () => void }> = ({
  onOpenJobModal,
  onOpenQuoteModal,
}) => {
  return (
    <footer className="bg-[#02050B] border-t border-amber-500/20 pt-16 pb-12 text-slate-300 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-400/60 bg-slate-900 flex-shrink-0">
                <Image
                  src="/images/tia-circle-logo.png"
                  alt="TIA Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-mono tracking-wider">TIA</div>
                <div className="text-xs text-amber-300 font-medium">Tirupati Intellect Authority</div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-md">
              Pioneering high-intellect technological education and enterprise-grade business solutions (With AI & Without AI). Founded by M Bhargav Rayudu (AI Specialist, B.Tech Mechatronics, CAD Diploma).
            </p>
            <div className="flex items-center gap-2 text-slate-200 pt-2 font-medium">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Headquarters: Tirupati, Andhra Pradesh, India</span>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">Wings & Courses</div>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#solutions" className="hover:text-amber-300 transition-colors">With AI Solutions</a></li>
              <li><a href="#solutions" className="hover:text-amber-300 transition-colors">Without AI Solutions</a></li>
              <li><a href="#teaching" className="hover:text-amber-300 transition-colors">AI Masterclass</a></li>
              <li><a href="#teaching" className="hover:text-amber-300 transition-colors">Cybersecurity Course</a></li>
              <li><a href="#teaching" className="hover:text-amber-300 transition-colors">Cloud & DevOps</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">Quick Actions</div>
            <ul className="space-y-2 text-slate-300">
              <li><button type="button" onClick={onOpenJobModal} className="hover:text-amber-300 text-left transition-colors">Apply for Job / Careers</button></li>
              <li><button type="button" onClick={onOpenQuoteModal} className="hover:text-amber-300 text-left transition-colors">Request Solution Quote</button></li>
              <li><a href="#founder" className="hover:text-amber-300 transition-colors">Founder Credentials</a></li>
              <li><a href="#pa-desk" className="hover:text-amber-300 transition-colors">P.A. Laila WhatsApp</a></li>
              <li><a href="#faq" className="hover:text-amber-300 transition-colors">Platform FAQ</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">Official Contact</div>
            <p className="text-xs text-slate-300">
              Inquiries are handled exclusively via WhatsApp by Founder P.A. Laila.
            </p>
            <button
              type="button"
              onClick={() => openWhatsApp("Hello P.A. Laila, I am contacting TIA.")}
              aria-label="Contact WhatsApp Desk +91 7386157041"
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 font-semibold text-xs hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>+91 7386157041 (WhatsApp Only)</span>
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-300 text-xs">
          <div>
            © {new Date().getFullYear()} TIA (Tirupati Intellect Authority). All Rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-200">
            <span>Founder & CEO: <strong className="text-white">M Bhargav Rayudu</strong></span>
            <span>•</span>
            <span>Executive Desk: <strong className="text-white">P.A. Laila</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
