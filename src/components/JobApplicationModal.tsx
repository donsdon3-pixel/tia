'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase, UploadCloud, FileText, CheckCircle2, AlertCircle, Send, Trash2, ShieldCheck, MessageSquare } from 'lucide-react';
import { uploadResumeFile, submitJobApplication, JobApplicationData } from '@/lib/supabaseClient';
import { generateJobApplicationWhatsAppMessage, openWhatsApp, WHATSAPP_NUMBER } from '@/lib/whatsapp';
import confetti from 'canvas-confetti';

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<JobApplicationData>({
    fullName: '',
    email: '',
    phone: '',
    position: 'AI Engineer & LLM Developer',
    experienceLevel: '1 - 3 Years',
    portfolioUrl: '',
    coverNote: '',
  });

  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const positions = [
    'AI Engineer & LLM Developer',
    'Industrial CAD 3D Design Engineer',
    'Mechatronics & Robotics Specialist',
    'Business Solutions Consultant',
    'Teaching Faculty / Instructor (AI & CAD)',
    'Full Stack Web & Database Engineer',
    'Graduate Trainee / Intern',
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 15 * 1024 * 1024) {
        setErrorMsg('File exceeds 15MB limit.');
        return;
      }
      setFile(selectedFile);
      setErrorMsg(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMsg('Please complete the required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);
    setUploadProgress(25);

    try {
      let resumeUrl: string | null = null;
      if (file) {
        setUploadProgress(50);
        const uploadRes = await uploadResumeFile(file);
        resumeUrl = uploadRes.url;
      }

      setUploadProgress(75);
      await submitJobApplication({
        ...formData,
        resumeFileName: file ? file.name : undefined,
      }, resumeUrl);

      setUploadProgress(100);
      setSubmitted(true);

      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch (c) {}

      const msg = generateJobApplicationWhatsAppMessage({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experienceLevel: formData.experienceLevel,
        portfolioUrl: formData.portfolioUrl,
        resumeFileName: file ? file.name : 'Document attached',
        resumeUrl: resumeUrl,
        coverNote: formData.coverNote,
      });

      setTimeout(() => {
        openWhatsApp(msg);
      }, 800);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to submit.');
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
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-[#070D1A] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300">
            <Briefcase className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Apply for Position at TIA</h3>
            <p className="text-xs text-slate-400">Direct dispatch to P.A. Laila (+91 7386157041)</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Application Forwarded!</h4>
            <p className="text-sm text-slate-300">
              Opening WhatsApp to connect with P.A. Laila. Your resume and credentials have been logged in TIA's system.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-amber-400 text-black font-bold text-xs"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/40 text-red-300 text-xs">
                {errorMsg}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
                  placeholder="Your name"
                />
              </div>
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Position *</label>
                <select
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
                >
                  {positions.map((p, i) => (
                    <option key={i} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Attach Resume / Portfolio (PDF/DOC/ZIP)</label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="p-4 rounded-xl border border-dashed border-slate-700 hover:border-amber-500 text-center cursor-pointer bg-slate-900/60 transition-colors"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.zip,.rar"
                  className="hidden"
                />
                {file ? (
                  <div className="flex items-center justify-between text-xs text-amber-300">
                    <span className="truncate max-w-xs">{file.name} ({(file.size/(1024*1024)).toFixed(1)}MB)</span>
                    <Trash2 className="w-4 h-4 text-red-400 hover:scale-110" onClick={(e) => { e.stopPropagation(); setFile(null); }} />
                  </div>
                ) : (
                  <div className="text-xs text-slate-400 flex items-center justify-center gap-2">
                    <UploadCloud className="w-4 h-4 text-amber-400" />
                    <span>Click to browse and attach file</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Cover Note</label>
              <textarea
                rows={2}
                value={formData.coverNote}
                onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                placeholder="Briefly state your core skills..."
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold text-sm hover:brightness-110 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Submit Application & Open WhatsApp"}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};