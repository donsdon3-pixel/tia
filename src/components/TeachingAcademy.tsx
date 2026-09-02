'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  CheckCircle,
  Clock,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles,
  MessageSquare,
  Download,
  Users
} from 'lucide-react';
import { coursesData, CourseItem } from '@/data/courses';
import { openWhatsApp } from '@/lib/whatsapp';

export const TeachingAcademy: React.FC = () => {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(coursesData[0].id);

  const toggleCourse = (id: string) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  return (
    <section id="teaching" className="py-24 relative overflow-hidden bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Teaching & Training Wing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            TIA <span className="gold-gradient-text">Intellect Academy</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Industry-grade training in Artificial Intelligence, Industrial CAD 3D Design, Mechatronics, and Executive Automation. Taught with hands-on lab rigor.
          </p>
        </div>

        <div className="space-y-6">
          {coursesData.map((course) => {
            const isExpanded = expandedCourse === course.id;

            return (
              <div
                key={course.id}
                className={`glass-panel rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded ? "border-amber-500/50 shadow-2xl shadow-amber-500/10" : "border-amber-500/20"
                }`}
              >
                <div
                  onClick={() => toggleCourse(course.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-slate-800/40 transition-colors"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold font-mono">
                        {course.badge}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {course.level}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        {course.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white hover:text-amber-300 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {course.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-end lg:self-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openWhatsApp(
                          `Hello P.A. Laila, I would like to enroll / inquire about the course: *${course.title}*. Please share admission details and schedule.`
                        );
                      }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold text-xs hover:brightness-110 transition-all flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Enroll via WhatsApp</span>
                    </button>

                    <div className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-8 sm:px-8 border-t border-slate-800/80 bg-slate-950/50"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                      <div className="lg:col-span-4 space-y-4">
                        <div className="p-4 rounded-2xl bg-slate-900 border border-amber-500/20">
                          <h4 className="text-sm font-bold text-amber-300 mb-2 flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            Program Highlights
                          </h4>
                          <div className="space-y-2">
                            {course.highlights.map((high, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                                <CheckCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{high}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                          <div className="text-xs text-slate-400 mb-1 flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-cyan-400" />
                            Target Audience
                          </div>
                          <div className="text-xs font-medium text-slate-200">{course.targetAudience}</div>
                        </div>
                      </div>

                      <div className="lg:col-span-8">
                        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-amber-400" />
                          Detailed Syllabus & Modules
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {course.curriculum.map((mod, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/30 transition-colors"
                            >
                              <div className="text-xs font-bold text-amber-400 mb-2 font-mono">
                                {mod.module}
                              </div>
                              <ul className="space-y-1">
                                {mod.topics.map((top, tIdx) => (
                                  <li key={tIdx} className="text-xs text-slate-300 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                    <span>{top}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                          <span className="text-xs text-slate-400">
                            Batch starting soon in Tirupati (In-Person & Hybrid options available)
                          </span>
                          <button
                            onClick={() =>
                              openWhatsApp(
                                `Hello P.A. Laila, please send me the complete PDF syllabus brochure and fee structure for: *${course.title}*.`
                              )
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Request Syllabus Brochure via WhatsApp</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};