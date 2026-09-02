'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Menu, X, Briefcase } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

interface NavbarProps {
  onOpenJobModal: () => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJobModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Business Solutions", href: "#solutions" },
    { name: "Teaching & Academy", href: "#teaching" },
    { name: "Founder Profile", href: "#founder" },
    { name: "P.A. Laila Desk", href: "#pa-desk" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#040914]/95 backdrop-blur-md border-b border-amber-500/20 shadow-xl shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="TIA - Tirupati Intellect Authority Home">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-amber-400/70 shadow-lg shadow-amber-500/20 group-hover:border-amber-300 transition-colors bg-slate-900 flex-shrink-0">
              <Image
                src="/images/tia-circle-logo.png"
                alt="TIA Circular Crest Logo"
                fill
                sizes="48px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-wider text-white flex items-center gap-1.5 font-mono">
                TIA
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-sans font-medium">
                  Tirupati
                </span>
              </span>
              <span className="text-[11px] text-slate-300 tracking-tight font-medium">
                Tirupati Intellect Authority
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-amber-300 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenJobModal}
              aria-label="Apply for Job at TIA"
              className="relative inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-100 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 hover:border-amber-500/50 transition-all duration-200 group shadow-md"
            >
              <Briefcase className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Apply for Job</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => openWhatsApp("Hello TIA Desk (P.A. Laila / Founder M Bhargav Rayudu), I would like to make an inquiry regarding your services and programs.")}
              aria-label="Chat with P.A. Laila on WhatsApp"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:brightness-110 transition-all duration-200 shadow-lg shadow-amber-500/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>P.A. Laila Desk</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenJobModal}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40"
            >
              Apply
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#040914]/98 backdrop-blur-xl border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:text-amber-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJobModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 border border-amber-500/40 text-amber-300 font-semibold text-sm"
            >
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>Apply for Job (Attach Files)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openWhatsApp("Hello P.A. Laila, I am contacting TIA regarding services / courses.");
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with P.A. Laila (+91 7386157041)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
