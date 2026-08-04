import React, { useState } from 'react';
import { Globe, Award, Briefcase, DollarSign, Clock, CheckCircle2, ArrowRight, ShieldCheck, TrendingUp } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { CurrencyCode } from '../types';
import { formatCurrency } from '../utils/currency';

interface DestinationExplorerProps {
  currency: CurrencyCode;
  onSelectCountry: (countryName: string) => void;
  onOpenConsultationModal: (countryName?: string) => void;
}

export const DestinationExplorer: React.FC<DestinationExplorerProps> = ({
  currency,
  onSelectCountry,
  onOpenConsultationModal
}) => {
  const [selectedDestId, setSelectedDestId] = useState('australia');

  const currentDest = DESTINATIONS.find((d) => d.id === selectedDestId) || DESTINATIONS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold border border-blue-300">
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          <span>7 Global Study Abroad Destinations</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
          Compare Study Costs, PSWV & PR Pathways
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Select a destination to inspect living costs, Post-Study Work Visa duration, visa success rates, and top scholarship majors for Nepali students.
        </p>
      </div>

      {/* Country Selection Pill Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {DESTINATIONS.map((dest) => {
          const isSelected = dest.id === selectedDestId;
          return (
            <button
              key={dest.id}
              onClick={() => setSelectedDestId(dest.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-2xs'
              }`}
            >
              <span className="text-lg">{dest.flag}</span>
              <span>{dest.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Destination Spotlight Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column: Banner Image & Overview */}
        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-900 overflow-hidden">
          <img
            src={currentDest.bannerImage}
            alt={`${currentDest.name} study destination`}
            className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

          <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full text-white">
            <div>
              <span className="inline-block bg-blue-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                Featured Country Pathway
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold font-serif flex items-center gap-3">
                <span>{currentDest.flag}</span>
                <span>{currentDest.name}</span>
              </h3>
              <p className="text-sm text-slate-300 mt-2 font-medium">
                {currentDest.topUniversitiesCount}+ Top Ranked Partner Universities & Direct Admission Processing
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/20">
                <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider block">
                  VISA SUCCESS RATE (2025/2026)
                </span>
                <div className="text-2xl font-black text-white mt-0.5">
                  {currentDest.visaSuccessRate}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3.5 border border-white/20">
                <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider block">
                  POST-STUDY WORK VISA (PSWV)
                </span>
                <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                  {currentDest.pswvDuration}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Financial & Legal Information */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-8">
          {/* Key Metric Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                ANNUAL LIVING COST
              </span>
              <div className="text-lg font-extrabold text-slate-900 mt-1">
                {formatCurrency(currentDest.livingCostUSDYear, currency)}
              </div>
              <span className="text-[11px] text-slate-500">
                Average student rent & food
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                MIN BANK BALANCE
              </span>
              <div className="text-lg font-extrabold text-blue-700 mt-1">
                {formatCurrency(currentDest.minBankBalanceUSD, currency)}
              </div>
              <span className="text-[11px] text-slate-500">
                Required for visa lodge
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                PART-TIME WORK
              </span>
              <div className="text-xs font-bold text-slate-800 mt-1.5">
                {currentDest.partTimeWorkHours}
              </div>
            </div>
          </div>

          {/* Highlights & Why Choose This Country */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 font-serif flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              Why Nepali Students Choose {currentDest.name}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentDest.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top In-Demand Majors */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 font-serif flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Most Popular Majors & High-Scholarship Fields
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentDest.popularMajors.map((major, idx) => (
                <span
                  key={idx}
                  className="bg-blue-50 text-blue-900 border border-blue-200/80 px-3 py-1.5 rounded-xl text-xs font-semibold"
                >
                  {major}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => onSelectCountry(currentDest.name)}
              className="text-blue-700 hover:text-blue-900 font-bold text-xs sm:text-sm underline flex items-center gap-1"
            >
              <span>Explore Courses & Scholarships in {currentDest.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenConsultationModal(currentDest.name)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Book {currentDest.name} Admission Guidance</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
