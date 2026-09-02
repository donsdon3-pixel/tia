'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Sparkles, Building2, Bot, Settings2, Send, CheckCircle2 } from 'lucide-react';
import { submitBusinessInquiry, BusinessInquiryData } from '@/lib/supabaseClient';
import { generateBusinessInquiryWhatsAppMessage, openWhatsApp } from '@/lib/whatsapp';

interface InstantQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  initialCategory?: 'with_ai' | 'without_ai';
}

export const InstantQuoteModal: React.FC<InstantQuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Autonomous AI Agents & Workflow Automation',
  initialCategory = 'with_ai',
}) => {
  const [formData, setFormData] = useState<BusinessInquiryData>({
    clientName: '',
    companyName: '',
    phone: '',
    email: '',
    solutionCategory: initialCategory,
    serviceType: preselectedService,
    projectScope: '',
    estimatedTimeline: '2 - 4 Weeks',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const aiServices = [
    'Autonomous AI Agents & Workflow Automation',
    'Custom Enterprise LLM & GPT Solutions',
    'Predictive Analytics & AI Decision Systems',
    'Computer Vision & Conversational Voice AI',
    'Enterprise AI Strategy & Staff Training',
  ];

  const nonAiServices = [
    'Industrial CAD 3D Design & Mechanical Modeling',
    'Mechatronics & Embedded Automation Systems',
    'Enterprise Web, Cloud & Database Architectures',
    'Process Optimization & Digital Transformation',
    'Legacy Systems Modernization',
  ];

  const currentServices = formData.solutionCategory === 'with_ai' ? aiServices : nonAiServices;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitBusinessInquiry(formData);
      setSubmitted(true);

      const msg = generateBusinessInquiryWhatsAppMessage({
        clientName: formData.clientName,
        companyName: formData.companyName,
        phone: formData.phone,
        email: formData.email,
        solutionCategory: formData.solutionCategory,
        serviceType: formData.serviceType,
        projectScope: formData.projectScope,
        budgetOrTimeline: formData.estimatedTimeline,
      });

      setTimeout(() => {
        openWhatsApp(msg);
      }, 800);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-2xl bg-[#070D1A] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Request Business Solution Quote</h3>
            <p className="text-xs text-slate-400">With AI or Without AI • Custom Engineered by TIA</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Inquiry Dispatched!</h4>
            <p className="text-sm text-slate-300">
              Your requirement has been transmitted to P.A. Laila (+91 7386157041) on WhatsApp. Our engineering team will review and reply promptly.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-amber-400 text-black font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            {/* Category Toggle */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Solution Category</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, solutionCategory: 'with_ai', serviceType: aiServices[0] })}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                    formData.solutionCategory === 'with_ai'
                      ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <Bot className="w-4 h-4" />
                  <span>With AI (Autonomous)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, solutionCategory: 'without_ai', serviceType: nonAiServices[0] })}
                  className={`py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border transition-all ${
                    formData.solutionCategory === 'without_ai'
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-md shadow-amber-500/20'
                      : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                  }`}
                >
                  <Settings2 className="w-4 h-4" />
                  <span>Without AI (Engineering)</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Contact Person Name *</label>
                <input
                  type="text"
                  required
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Company / Business Name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
                  placeholder="Company (optional)"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Specific Service *</label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
                >
                  {currentServices.map((srv, idx) => (
                    <option key={idx} value={srv}>{srv}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Project Scope / Core Problem *</label>
              <textarea
                rows={3}
                required
                value={formData.projectScope}
                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                placeholder="Describe your business workflow, requirements, target deliverables..."
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold text-sm hover:brightness-110 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>Send Quote Request & Open WhatsApp (+91 7386157041)</span>
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};