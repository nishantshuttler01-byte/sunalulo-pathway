import React from 'react';
import { Compass, Globe, Sparkles, BookOpen, FileCheck, ShieldCheck, Calendar, DollarSign, ChevronDown } from 'lucide-react';
import { CurrencyCode } from '../types';
import { CURRENCIES } from '../utils/currency';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currency,
  setCurrency,
  onOpenConsultationModal
}) => {
  const [showCurrencyDropdown, setShowCurrencyDropdown] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Overview', icon: Compass },
    { id: 'destinations', label: 'Study Destinations', icon: Globe },
    { id: 'courses', label: 'Courses & Scholarships', icon: BookOpen },
    { id: 'ai-advisor', label: 'AI Pathway Advisor', icon: Sparkles, badge: 'AI Powered' },
    { id: 'sop-reviewer', label: 'AI SOP & Essay Review', icon: FileCheck, badge: 'Visa Ready' },
    { id: 'visa-roadmap', label: 'Visa & Document Roadmap', icon: ShieldCheck },
    { id: 'counselors', label: 'Our Counselors', icon: Calendar }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-xs">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 text-blue-50 px-4 py-1.5 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-blue-400 text-blue-950 px-1.5 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider">
              New Intake 2026/2027
            </span>
            <span>
              🌟 Australia, USA, UK, Canada & Japan applications now open! Free QEAC & USATC Counselor Consultation.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Kathmandu • Pokhara • Chitwan • Sydney</span>
            <button
              onClick={onOpenConsultationModal}
              className="text-blue-200 hover:text-white underline font-semibold transition-colors"
            >
              Book Instant Appointment →
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 text-left focus:outline-hidden group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 font-serif">
                  Sunaulo
                </span>
                <span className="text-xl font-extrabold tracking-tight text-blue-700">
                  Pathways
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Nepal’s Premier Study Abroad Gateway
              </p>
            </div>
          </button>

          {/* Navigation Links - Desktop */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-blue-50 text-blue-800 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        item.badge === 'AI Powered'
                          ? 'bg-blue-600 text-white shadow-xs animate-pulse'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar: Currency Switcher + Book Consultation */}
          <div className="flex items-center gap-3">
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
                title="Switch displayed currency for tuition & living expenses"
              >
                <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                <span>{CURRENCIES[currency].code}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {showCurrencyDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-1 z-50">
                  <div className="px-3 py-1.5 border-b border-slate-100 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    Display Amounts In:
                  </div>
                  {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
                    const c = CURRENCIES[code];
                    const isSelected = currency === code;
                    return (
                      <button
                        key={code}
                        onClick={() => {
                          setCurrency(code);
                          setShowCurrencyDropdown(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between hover:bg-blue-50 transition-colors ${
                          isSelected ? 'bg-blue-50 text-blue-800 font-bold' : 'text-slate-700'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="font-mono text-slate-400">{c.symbol}</span>
                          <span>{c.name}</span>
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">{c.code}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Book Consultation Button */}
            <button
              onClick={onOpenConsultationModal}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Book Free</span>
              <span>Consultation</span>
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navbar Scrollable */}
        <div className="xl:hidden flex items-center space-x-2 overflow-x-auto py-2.5 border-t border-slate-100 no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[9px] font-bold px-1 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-blue-800 text-blue-100'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
