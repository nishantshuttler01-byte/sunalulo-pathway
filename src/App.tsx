/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DestinationExplorer } from './components/DestinationExplorer';
import { CourseFinder } from './components/CourseFinder';
import { AIPathwayAdvisor } from './components/AIPathwayAdvisor';
import { SOPReviewerModal } from './components/SOPReviewerModal';
import { VisaRoadmap } from './components/VisaRoadmap';
import { CounselorShowcase } from './components/CounselorShowcase';
import { Footer } from './components/Footer';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { MobilePWAInstallBanner } from './components/MobilePWAInstallBanner';
import { CurrencyCode, Counselor } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  // Consultation booking modal state
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [modalInitialCountry, setModalInitialCountry] = useState<string>('Australia');
  const [modalInitialDegree, setModalInitialDegree] = useState<string>('Master');
  const [modalInitialCourse, setModalInitialCourse] = useState<string>('');
  const [selectedCounselor, setSelectedCounselor] = useState<Counselor | null>(null);

  // Quick search state for courses tab
  const [courseFilterCountry, setCourseFilterCountry] = useState<string>('');
  const [courseFilterLevel, setCourseFilterLevel] = useState<string>('');
  const [courseFilterMajor, setCourseFilterMajor] = useState<string>('');

  const openConsultationModal = (
    country = 'Australia',
    degree = 'Master',
    courseTitle = '',
    counselor: Counselor | null = null
  ) => {
    setModalInitialCountry(country);
    setModalInitialDegree(degree);
    setModalInitialCourse(courseTitle);
    setSelectedCounselor(counselor);
    setIsConsultationModalOpen(true);
  };

  const handleQuickSearchFromHero = (country: string, level: string, major: string) => {
    setCourseFilterCountry(country);
    setCourseFilterLevel(level);
    setCourseFilterMajor(major);
    setActiveTab('courses');
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 pb-16 md:pb-0">
      {/* Mobile App Install Banner for iOS / Android */}
      <MobilePWAInstallBanner />

      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currency={currency}
        setCurrency={setCurrency}
        onOpenConsultationModal={() => openConsultationModal()}
      />

      {/* Main Container Switching */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection
              setActiveTab={setActiveTab}
              onOpenConsultationModal={() => openConsultationModal()}
              onQuickSearch={handleQuickSearchFromHero}
              currency={currency}
            />

            {/* AI Advisor Preview Section on Overview */}
            <section className="bg-white border-y border-slate-200">
              <AIPathwayAdvisor
                currency={currency}
                onOpenConsultationModal={(c, d) => openConsultationModal(c, d)}
              />
            </section>

            {/* Destination Explorer Preview on Overview */}
            <section className="bg-slate-50">
              <DestinationExplorer
                currency={currency}
                onSelectCountry={(country) => {
                  setCourseFilterCountry(country);
                  setActiveTab('courses');
                }}
                onOpenConsultationModal={(c) => openConsultationModal(c)}
              />
            </section>

            {/* Counselor Showcase Preview */}
            <section className="bg-white border-t border-slate-200">
              <CounselorShowcase
                onSelectCounselor={(counselor) => openConsultationModal('Australia', 'Master', '', counselor)}
              />
            </section>
          </>
        )}

        {activeTab === 'destinations' && (
          <DestinationExplorer
            currency={currency}
            onSelectCountry={(country) => {
              setCourseFilterCountry(country);
              setActiveTab('courses');
            }}
            onOpenConsultationModal={(c) => openConsultationModal(c)}
          />
        )}

        {activeTab === 'courses' && (
          <CourseFinder
            currency={currency}
            initialCountry={courseFilterCountry}
            initialLevel={courseFilterLevel}
            initialMajor={courseFilterMajor}
            onOpenConsultationModal={(c, d, title) => openConsultationModal(c, d, title)}
          />
        )}

        {activeTab === 'ai-advisor' && (
          <AIPathwayAdvisor
            currency={currency}
            onOpenConsultationModal={(c, d) => openConsultationModal(c, d)}
          />
        )}

        {activeTab === 'sop-reviewer' && (
          <SOPReviewerModal
            onOpenConsultationModal={() => openConsultationModal()}
          />
        )}

        {activeTab === 'visa-roadmap' && (
          <VisaRoadmap
            onOpenConsultationModal={() => openConsultationModal()}
          />
        )}

        {activeTab === 'counselors' && (
          <CounselorShowcase
            onSelectCounselor={(counselor) => openConsultationModal('Australia', 'Master', '', counselor)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenConsultationModal={() => openConsultationModal()}
      />

      {/* iOS & Android Native Mobile Bottom Bar */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConsultationModal={() => openConsultationModal()}
      />

      {/* Universal Consultation Booking Popover Modal */}
      <ConsultationBookingModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        initialCountry={modalInitialCountry}
        initialDegree={modalInitialDegree}
        initialCourse={modalInitialCourse}
        selectedCounselor={selectedCounselor}
      />
    </div>
  );
}

