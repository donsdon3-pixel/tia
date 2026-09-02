'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FounderSection } from '@/components/FounderSection';
import { SolutionsSection } from '@/components/SolutionsSection';
import { TeachingAcademy } from '@/components/TeachingAcademy';
import { JobApplicationSection } from '@/components/JobApplicationSection';
import { JobApplicationModal } from '@/components/JobApplicationModal';
import { InstantQuoteModal } from '@/components/InstantQuoteModal';
import { PALailaDesk } from '@/components/PALailaDesk';
import { TestimonialsFAQ } from '@/components/TestimonialsFAQ';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<'with_ai' | 'without_ai' | undefined>(undefined);

  const handleOpenQuoteModal = (service?: string, category?: 'with_ai' | 'without_ai') => {
    setSelectedService(service);
    setSelectedCategory(category);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200 relative">
      {/* Navigation Header */}
      <Navbar
        onOpenJobModal={() => setIsJobModalOpen(true)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onOpenJobModal={() => setIsJobModalOpen(true)}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 2. Solutions Section (With AI vs Without AI) */}
        <SolutionsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 3. Teaching & Intellect Academy */}
        <TeachingAcademy />

        {/* 4. Founder Profile & Credentials (M Bhargav Rayudu) */}
        <FounderSection
          onOpenJobModal={() => setIsJobModalOpen(true)}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 5. Job Application & Resume Attachment Portal */}
        <JobApplicationSection />

        {/* 6. P.A. Laila Executive Communications Desk */}
        <PALailaDesk
          onOpenJobModal={() => setIsJobModalOpen(true)}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 7. FAQ & Trust Section */}
        <TestimonialsFAQ />
      </main>

      {/* Footer */}
      <Footer
        onOpenJobModal={() => setIsJobModalOpen(true)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Floating WhatsApp Fast-Action Menu */}
      <FloatingWhatsApp />

      {/* Global Interactive Modals */}
      <JobApplicationModal
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
      />

      <InstantQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={selectedService}
        initialCategory={selectedCategory}
      />
    </div>
  );
}