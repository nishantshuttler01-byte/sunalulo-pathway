import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, User, Mail, Phone, Globe, GraduationCap, Award } from 'lucide-react';
import { COUNSELORS } from '../data/counselors';
import { Counselor } from '../types';

interface ConsultationBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCountry?: string;
  initialDegree?: string;
  initialCourse?: string;
  selectedCounselor?: Counselor | null;
}

export const ConsultationBookingModal: React.FC<ConsultationBookingModalProps> = ({
  isOpen,
  onClose,
  initialCountry = 'Australia',
  initialDegree = 'Master',
  initialCourse = '',
  selectedCounselor = null
}) => {
  const [counselorId, setCounselorId] = useState(
    selectedCounselor?.id || COUNSELORS[0].id
  );
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');
  const [preferredCountry, setPreferredCountry] = useState(initialCountry || 'Australia');
  const [targetDegree, setTargetDegree] = useState(initialDegree || 'Master');
  const [locationType, setLocationType] = useState('Kathmandu Office');
  const [selectedDate, setSelectedDate] = useState('2026-08-05');
  const [selectedSlot, setSelectedSlot] = useState('11:30 AM');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentCounselor =
    COUNSELORS.find((c) => c.id === counselorId) ||
    selectedCounselor ||
    COUNSELORS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white p-6 sm:p-7 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="space-y-1">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-200 block">
              Sunaulo Pathways • Free QEAC Counselor Guidance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif">
              Book Your 1-on-1 Study Abroad Consultation
            </h3>
            <p className="text-xs sm:text-sm text-blue-100">
              No service fee for admission evaluation & scholarship assessment
            </p>
          </div>
        </div>

        {isSubmitted ? (
          // Success Confirmation
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-extrabold text-slate-900 font-serif">
                Appointment Confirmed!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{studentName}</strong>! Your session with{' '}
                <strong>{currentCounselor.name}</strong> is scheduled for{' '}
                <strong>{selectedDate} at {selectedSlot}</strong> ({locationType}).
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
              <div className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">
                What to Bring to Your Session:
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-600">
                <li>Original or scanned SEE, 10+2 / Bachelor marksheets</li>
                <li>IELTS / PTE scorecard (or mock test score if preparing)</li>
                <li>Sponsor financial idea / bank loan discussion</li>
              </ul>
            </div>

            <button
              onClick={resetAndClose}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all text-sm"
            >
              Done & Back to Overview
            </button>
          </div>
        ) : (
          // Booking Form
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
            {/* Counselor choice */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Select Sunaulo Specialist Counselor
              </label>
              <select
                value={counselorId}
                onChange={(e) => setCounselorId(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800"
              >
                {COUNSELORS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} — {c.title} ({c.specialization})
                  </option>
                ))}
              </select>
            </div>

            {/* Student name & email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name (As in Passport) *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Karki"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3.5 py-2.5 text-sm font-medium text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. aarav@gmail.com"
                    value={studentEmail}
                    onChange={(e) => setStudentEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3.5 py-2.5 text-sm font-medium text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* Phone Number & Preferred Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Nepal / Australia Phone / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9801088990 or +614..."
                    value={studentPhone}
                    onChange={(e) => setStudentPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3.5 py-2.5 text-sm font-medium text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Target Country
                </label>
                <select
                  value={preferredCountry}
                  onChange={(e) => setPreferredCountry(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800"
                >
                  <option value="Australia">🇦🇺 Australia (Go8 & PSWV)</option>
                  <option value="USA">🇺🇸 USA (STEM OPT & GA)</option>
                  <option value="UK">🇬🇧 UK (Russell Group & 1-Yr MSc)</option>
                  <option value="Canada">🇨🇦 Canada (PGWP & PR)</option>
                  <option value="Japan">🇯🇵 Japan (99.1% Visa & MEXT)</option>
                  <option value="Germany">🇩🇪 Germany (Zero Public Tuition)</option>
                  <option value="New Zealand">🇳🇿 New Zealand (Green List)</option>
                </select>
              </div>
            </div>

            {/* Location Type & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Consultation Location
                </label>
                <select
                  value={locationType}
                  onChange={(e) => setLocationType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800"
                >
                  <option value="Kathmandu Office">Kathmandu Putalisadak Head Office</option>
                  <option value="Pokhara Office">Pokhara New Road Office</option>
                  <option value="Chitwan Office">Chitwan Bharatpur Office</option>
                  <option value="Sydney Office">Sydney Liaison Office (Australia)</option>
                  <option value="Online Video Call">Online Zoom / Google Meet Call</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800"
                />
              </div>
            </div>

            {/* Time Slot Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Available Time Slot ({currentCounselor.name})
              </label>
              <div className="grid grid-cols-4 gap-2">
                {currentCounselor.availableSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all text-center ${
                      selectedSlot === slot
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                Confirm Free Booking
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
