import React from 'react';
import { Award, Calendar, MapPin, Star, ShieldCheck, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { COUNSELORS } from '../data/counselors';
import { Counselor } from '../types';

interface CounselorShowcaseProps {
  onSelectCounselor: (counselor: Counselor) => void;
}

export const CounselorShowcase: React.FC<CounselorShowcaseProps> = ({ onSelectCounselor }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold border border-blue-300">
          <Award className="w-3.5 h-3.5 text-blue-600" />
          <span>QEAC • USATC • British Council Certified</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
          Meet Nepal’s Most Experienced Education Counselors
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Our senior guidance counselors have helped over 15,000 students secure admissions and scholarships across Australia, USA, UK, Canada, Japan, Germany & New Zealand.
        </p>
      </div>

      {/* Grid of Counselors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {COUNSELORS.map((counselor) => (
          <div
            key={counselor.id}
            className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all p-6 flex flex-col sm:flex-row items-start gap-5 group"
          >
            {/* Avatar image */}
            <img
              src={counselor.avatar}
              alt={counselor.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-blue-200 shadow-sm shrink-0"
            />

            {/* Info */}
            <div className="flex-1 space-y-3">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-slate-900 font-serif group-hover:text-blue-800 transition-colors">
                    {counselor.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-blue-50 text-blue-900 px-2 py-0.5 rounded-md text-xs font-bold border border-blue-200">
                    <Star className="w-3.5 h-3.5 fill-blue-500 text-blue-500" />
                    <span>{counselor.rating}</span>
                  </div>
                </div>
                <p className="text-xs font-bold text-blue-700 mt-0.5">
                  {counselor.title}
                </p>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {counselor.certification}
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  SPECIALIZATION
                </span>
                <p className="text-xs font-semibold text-slate-800 mt-0.5">
                  {counselor.specialization}
                </p>
              </div>

              {/* Locations */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Available at: {counselor.locations.join(' • ')}</span>
              </div>

              {/* Slots and Action */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Next Slot: {counselor.availableSlots[0]}</span>
                </div>

                <button
                  onClick={() => onSelectCounselor(counselor)}
                  className="bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book 1-on-1 Session</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Banner */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-blue-950 font-serif">
            Free Visa Assessment & Scholarship Screening
          </h4>
          <p className="text-xs sm:text-sm text-blue-900 max-w-xl">
            Sunaulo Pathways does not charge initial consultation fees. Bring your 10+2 / Bachelor marksheet and IELTS/PTE score for a complimentary evaluation.
          </p>
        </div>

        <button
          onClick={() => onSelectCounselor(COUNSELORS[0])}
          className="bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all shrink-0"
        >
          Book With Any Counselor →
        </button>
      </div>
    </div>
  );
};
