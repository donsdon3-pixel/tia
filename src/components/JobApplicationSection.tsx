'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageSquare,
  Send,
  Trash2,
  UserCheck,
  ShieldCheck
} from 'lucide-react';
import { uploadResumeFile, submitJobApplication, JobApplicationData } from '@/lib/supabaseClient';
import { generateJobApplicationWhatsAppMessage, openWhatsApp, WHATSAPP_NUMBER, PA_NAME, FOUNDER_NAME } from '@/lib/whatsapp';
import confetti from 'canvas-confetti';

export const JobApplicationSection: React.FC = () => {
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

  const experienceLevels = [
    'Student / Fresher',
    '1 - 3 Years',
    '3 - 5 Years',
    '5+ Years Senior',
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 15 * 1024 * 1024) {
        setErrorMsg('File size exceeds 15MB limit. Please upload a smaller document.');
        return;
      }
      setFile(selectedFile);
      setErrorMsg(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.size > 15 * 1024 * 1024) {
        setErrorMsg('File size exceeds 15MB limit.');
        return;
      }
      setFile(droppedFile);
      setErrorMsg(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMsg('Please fill in your Name, Email, and Phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);
    setUploadProgress(20);

    try {
      let resumeUrl: string | null = null;

      if (file) {
        setUploadProgress(50);
        const uploadRes = await uploadResumeFile(file);
        resumeUrl = uploadRes.url;
      }

      setUploadProgress(75);
      const submissionPayload = {
        ...formData,
        resumeFileName: file ? file.name : undefined,
      };

      await submitJobApplication(submissionPayload, resumeUrl);

      setUploadProgress(100);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D4AF37', '#00F0FF', '#F59E0B', '#10B981'],
        });
      } catch (cErr) {
        // Ignore confetti fallback
      }

      const whatsappMsg = generateJobApplicationWhatsAppMessage({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experienceLevel: formData.experienceLevel,
        portfolioUrl: formData.portfolioUrl,
        resumeFileName: file ? file.name : 'Document attached by candidate',
        resumeUrl: resumeUrl,
        coverNote: formData.coverNote,
      });

      setTimeout(() => {
        openWhatsApp(whatsappMsg);
      }, 800);

    } catch (err: any) {
      console.error('Error in application submission:', err);
      setErrorMsg(err.message || 'Submission encountered an issue. Please try again or WhatsApp directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-24 relative overflow-hidden bg-[#040914]">
      <div className="absolute top-1/2 right-0 w-96 h-96 radial-glow-gold pointer-events-none blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 radial-glow-cyan pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Join Our Innovation Team
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Apply for <span className="gold-gradient-text">Career & Positions</span> at TIA
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Fill out your details below and attach your resume/portfolio. Your application is recorded and instantly dispatched to <strong className="text-amber-300">P.A. Laila (+91 7386157041)</strong> on WhatsApp for priority evaluation.
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-amber-500/30 shadow-2xl relative">
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Application Submitted Successfully!
              </h3>
              <p className="text-slate-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
                Thank you, <strong className="text-amber-300">{formData.fullName}</strong>. Your profile for <strong className="text-white">{formData.position}</strong> has been logged in our Supabase system and connected to WhatsApp.
              </p>
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 max-w-md mx-auto text-left space-y-2">
                <div className="text-xs text-slate-400">Application Details:</div>
                <div className="text-sm text-white font-medium flex items-center justify-between">
                  <span>Direct WhatsApp Channel:</span>
                  <span className="text-emerald-400 font-mono">+91 7386157041</span>
                </div>
                <div className="text-xs text-slate-400">Handled By: <strong>P.A. Laila (Founder Desk)</strong></div>
                {file && (
                  <div className="text-xs text-amber-300 flex items-center gap-1.5 pt-1">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Attached: {file.name}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => {
                    const msg = generateJobApplicationWhatsAppMessage({
                      fullName: formData.fullName,
                      email: formData.email,
                      phone: formData.phone,
                      position: formData.position,
                      experienceLevel: formData.experienceLevel,
                      portfolioUrl: formData.portfolioUrl,
                      resumeFileName: file ? file.name : undefined,
                      coverNote: formData.coverNote,
                    });
                    openWhatsApp(msg);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold text-sm hover:brightness-110 shadow-lg shadow-amber-500/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Re-open WhatsApp Chat with P.A. Laila</span>
                </button>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      position: 'AI Engineer & LLM Developer',
                      experienceLevel: '1 - 3 Years',
                      portfolioUrl: '',
                      coverNote: '',
                    });
                    setFile(null);
                  }}
                  className="px-6 py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-sm hover:bg-slate-700 border border-slate-700"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-300 text-sm flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Position Applying For *
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white text-sm outline-none transition-colors cursor-pointer"
                  >
                    {positions.map((pos, idx) => (
                      <option key={idx} value={pos} className="bg-slate-900 text-white">
                        {pos}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Experience Level *
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white text-sm outline-none transition-colors cursor-pointer"
                  >
                    {experienceLevels.map((exp, idx) => (
                      <option key={idx} value={exp} className="bg-slate-900 text-white">
                        {exp}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Portfolio / GitHub / LinkedIn URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://github.com/username"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Attach Resume / Project Files (PDF, DOCX, ZIP, Max 15MB)
                </label>
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-700 hover:border-amber-500/60 rounded-2xl p-6 text-center cursor-pointer bg-slate-900/50 hover:bg-slate-900 transition-colors group"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.zip,.rar,.txt"
                    className="hidden"
                  />

                  {file ? (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800 border border-amber-500/40 text-left">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white truncate max-w-xs sm:max-w-md">
                            {file.name}
                          </div>
                          <div className="text-xs text-slate-400">
                            {(file.size / (1024 * 1024)).toFixed(2)} MB • Ready to dispatch
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                        }}
                        className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-700/50 rounded-lg transition-colors"
                        title="Remove file"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="w-12 h-12 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                        <UploadCloud className="w-6 h-6" />
                      </div>
                      <div className="text-sm text-slate-200 font-medium">
                        Drag & drop your resume or <span className="text-amber-400 underline">Browse files</span>
                      </div>
                      <div className="text-xs text-slate-500">
                        Supports PDF, Word Documents (.docx) & CAD/Project Zips up to 15MB
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Cover Note / Key Strengths
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly tell us about your experience in AI, CAD, Mechatronics, or why you want to join TIA..."
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-white placeholder-slate-500 text-sm outline-none transition-colors"
                />
              </div>

              {isSubmitting && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>Uploading to Supabase & Preparing WhatsApp dispatch...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-cyan-400 transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 text-black font-extrabold text-base hover:brightness-110 active:scale-[0.99] disabled:opacity-50 transition-all duration-200 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Processing Application...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-black" />
                      <span>Submit Application & Connect to WhatsApp Desk</span>
                    </>
                  )}
                </button>

                <p className="mt-3 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                  <span>Direct connection to Official Desk (+91 7386157041) handled by P.A. Laila</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};