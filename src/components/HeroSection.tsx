import React, { useState } from 'react';
import { Sparkles, Globe, Award, ShieldCheck, ArrowRight, BookOpen, Search, GraduationCap, Users, DollarSign, CheckCircle2 } from 'lucide-react';
import { CurrencyCode } from '../types';

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
  onOpenConsultationModal: () => void;
  onQuickSearch: (country: string, level: string, major: string) => void;
  currency: CurrencyCode;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  setActiveTab,
  onOpenConsultationModal,
  onQuickSearch,
  currency
}) => {
  const [selectedCountry, setSelectedCountry] = useState('australia');
  const [selectedLevel, setSelectedLevel] = useState('Master');
  const [selectedMajor, setSelectedMajor] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickSearch(selectedCountry, selectedLevel, selectedMajor);
  };

  return (
    <div className="relative bg-gradient-to-b from-blue-50/60 via-white to-slate-50 overflow-hidden border-b border-slate-200">
      {/* Decorative Royal Blue Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -ml-32 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-300 text-blue-900 text-xs sm:text-sm font-semibold shadow-2xs">
              <Sparkles className="w-4 h-4 text-blue-700" />
              <span>Nepal’s #1 Study Abroad & Scholarship Advisor</span>
              <span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold">
                2026 INTAKE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-serif leading-[1.12]">
              Your <span className="text-blue-700 underline decoration-blue-300 decoration-wavy">Royal Pathway</span> to Global Universities & Scholarships
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform your aspirations into reality with Sunaulo Pathways. Get AI-driven university matching, high-value merit bursaries up to 50%, and QEAC/USATC-certified counselor guidance for Australia, USA, UK, Canada, Japan, Germany & New Zealand.
            </p>

            {/* Quick Benefits Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                98.4% Visa Success Rate
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Up to 50% Merit Scholarships
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                No-Fee Initial Application
              </span>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenConsultationModal}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>Book Free Counselor Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('ai-advisor')}
                className="w-full sm:w-auto bg-white hover:bg-blue-50 text-slate-800 hover:text-blue-900 border-2 border-blue-300 font-bold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Launch AI Pathway Advisor</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Course & Scholarship Quick Search Box */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-blue-700 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                Instant Course & Fee Matcher
              </div>

              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-bold text-slate-900 font-serif flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  Find Your Ideal University Program
                </h3>
                <p className="text-xs text-slate-500">
                  Search 350+ ranked universities with tuition displayed in your preferred currency
                </p>
              </div>

              <form onSubmit={handleSearchSubmit} className="space-y-4">
                {/* Destination Selector */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Target Study Destination
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  >
                    <option value="australia">🇦🇺 Australia (Go8 & 2-4 Yr PSWV)</option>
                    <option value="usa">🇺🇸 United States (STEM OPT & GA)</option>
                    <option value="uk">🇬🇧 United Kingdom (Russell Group & 1-Yr MSc)</option>
                    <option value="canada">🇨🇦 Canada (PGWP & PR Pathways)</option>
                    <option value="japan">🇯🇵 Japan (99.1% Visa Rate & MEXT)</option>
                    <option value="germany">🇩🇪 Germany (Zero Public Tuition)</option>
                    <option value="newzealand">🇳🇿 New Zealand (Green List PR)</option>
                  </select>
                </div>

                {/* Academic Level */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Study Degree Level
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedLevel('Master')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        selectedLevel === 'Master'
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Master’s / PG Degree
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedLevel('Bachelor')}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                        selectedLevel === 'Bachelor'
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Bachelor’s / UG Degree
                    </button>
                  </div>
                </div>

                {/* Major / Course Keyword */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Intended Major or Keyword
                  </label>
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Data Science, Nursing, IT, MBA, Cyber..."
                      value={selectedMajor}
                      onChange={(e) => setSelectedMajor(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3.5 py-2.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 text-sm"
                >
                  <Search className="w-4 h-4 text-blue-300" />
                  <span>Search Courses & Check Scholarships</span>
                </button>
              </form>

              {/* Quick Suggestion Tags */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                <span className="font-semibold text-slate-600">Popular:</span>
                <button
                  onClick={() => {
                    setSelectedCountry('australia');
                    setSelectedLevel('Master');
                    setSelectedMajor('Data Science');
                  }}
                  className="bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-800 px-2 py-1 rounded-md transition-colors font-medium"
                >
                  Data Science (AU)
                </button>
                <button
                  onClick={() => {
                    setSelectedCountry('usa');
                    setSelectedLevel('Master');
                    setSelectedMajor('Computer Science');
                  }}
                  className="bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-800 px-2 py-1 rounded-md transition-colors font-medium"
                >
                  STEM CS (USA)
                </button>
                <button
                  onClick={() => {
                    setSelectedCountry('uk');
                    setSelectedLevel('Master');
                    setSelectedMajor('Management');
                  }}
                  className="bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-800 px-2 py-1 rounded-md transition-colors font-medium"
                >
                  1-Year MSc (UK)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Achievement Statistics Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white/80 backdrop-blur-xs border border-slate-200 rounded-2xl p-5 text-center shadow-xs">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-700 mx-auto mb-3">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              15,000+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              Nepali Students Guided
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              To Australia, USA, UK, Canada & more
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs border border-slate-200 rounded-2xl p-5 text-center shadow-xs">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 mx-auto mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              98.4%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              Visa Success Ratio
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              With Genuine Student (GS) preparation
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs border border-slate-200 rounded-2xl p-5 text-center shadow-xs">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-700 mx-auto mb-3">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              $4.5M+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              Scholarships Awarded
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Merit bursaries up to 50% tuition off
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs border border-slate-200 rounded-2xl p-5 text-center shadow-xs">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-700 mx-auto mb-3">
              <Globe className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              350+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              Partner Universities
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Direct offer & application processing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
