import React from 'react';
import {
  Compass,
  Sparkles,
  GraduationCap,
  Globe,
  FileText,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenConsultationModal: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenConsultationModal,
}) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'ai-advisor', label: 'AI Advisor', icon: Sparkles, highlight: true },
    { id: 'courses', label: 'Courses', icon: GraduationCap },
    { id: 'destinations', label: 'Countries', icon: Globe },
    { id: 'sop-reviewer', label: 'SOP', icon: FileText },
    { id: 'visa-roadmap', label: 'Visa', icon: ShieldCheck },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 px-1 py-1.5 pb-safe shadow-2xl flex items-center justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer relative ${
              isActive
                ? 'text-blue-700 font-bold scale-105'
                : 'text-slate-500 hover:text-slate-800 font-medium'
            }`}
          >
            <div className="relative">
              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive ? 'stroke-[2.5px]' : 'stroke-[1.8px]'
                }`}
              />
              {item.highlight && !isActive && (
                <span className="absolute -top-1 -right-1.5 w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              )}
            </div>
            <span className="text-[10px] tracking-tight mt-0.5 leading-none">
              {item.label}
            </span>
            {isActive && (
              <span className="absolute -bottom-1 w-5 h-0.5 rounded-full bg-blue-700" />
            )}
          </button>
        );
      })}

      {/* Quick Action Floating Pill for Mobile */}
      <button
        onClick={onOpenConsultationModal}
        className="flex flex-col items-center justify-center py-1 px-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold text-[10px] shadow-sm active:scale-95 transition-transform cursor-pointer"
        title="Book Counselor"
      >
        <UserCheck className="w-4 h-4" />
        <span className="leading-none mt-0.5 whitespace-nowrap">Book</span>
      </button>
    </div>
  );
};
