import React, { useState } from 'react';
import { Search, GraduationCap, Award, Globe, DollarSign, Filter, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Clock, BookOpen } from 'lucide-react';
import { COURSES } from '../data/courses';
import { CurrencyCode } from '../types';
import { formatCurrency } from '../utils/currency';

interface CourseFinderProps {
  currency: CurrencyCode;
  initialCountry?: string;
  initialLevel?: string;
  initialMajor?: string;
  onOpenConsultationModal: (country?: string, degree?: string, courseTitle?: string) => void;
}

export const CourseFinder: React.FC<CourseFinderProps> = ({
  currency,
  initialCountry = '',
  initialLevel = '',
  initialMajor = '',
  onOpenConsultationModal
}) => {
  const [searchQuery, setSearchQuery] = useState(initialMajor);
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [selectedDegree, setSelectedDegree] = useState(initialLevel);
  const [onlyPswv, setOnlyPswv] = useState(false);

  const filteredCourses = COURSES.filter((course) => {
    const matchesSearch =
      !searchQuery ||
      course.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.universityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCountry =
      !selectedCountry ||
      course.countryName.toLowerCase() === selectedCountry.toLowerCase() ||
      course.countryId === selectedCountry.toLowerCase();

    const matchesDegree = !selectedDegree || course.degreeLevel === selectedDegree;

    const matchesPswv = !onlyPswv || course.pswvEligible;

    return matchesSearch && matchesCountry && matchesDegree && matchesPswv;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Title */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold border border-blue-300">
          <Award className="w-3.5 h-3.5 text-blue-600" />
          <span>Sunaulo University Partner Directory</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
          Search 350+ Courses & Merit Scholarships
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Filter by target country, academic level, and major. Compare tuition fees in your preferred currency and see verified scholarship bursaries up to 50%+.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          {/* Search keyword */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search course or university..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-3 py-2 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            />
          </div>

          {/* Country filter */}
          <div>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            >
              <option value="">All Destinations</option>
              <option value="Australia">🇦🇺 Australia</option>
              <option value="United States">🇺🇸 United States</option>
              <option value="United Kingdom">🇬🇧 United Kingdom</option>
              <option value="Canada">🇨🇦 Canada</option>
              <option value="Japan">🇯🇵 Japan</option>
              <option value="Germany">🇩🇪 Germany</option>
              <option value="New Zealand">🇳🇿 New Zealand</option>
            </select>
          </div>

          {/* Degree level filter */}
          <div>
            <select
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
            >
              <option value="">All Degree Levels</option>
              <option value="Master">Master’s / PG Degree</option>
              <option value="Bachelor">Bachelor’s / UG Degree</option>
              <option value="Diploma">Diploma / Certificate</option>
            </select>
          </div>

          {/* PSWV & Reset Toggle */}
          <div className="flex items-center justify-between gap-3">
            <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={onlyPswv}
                onChange={(e) => setOnlyPswv(e.target.checked)}
                className="w-4 h-4 rounded-sm text-blue-600 focus:ring-blue-500 border-slate-300"
              />
              <span>PSWV / PGWP Eligible</span>
            </label>

            {(searchQuery || selectedCountry || selectedDegree || onlyPswv) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCountry('');
                  setSelectedDegree('');
                  setOnlyPswv(false);
                }}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 underline"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <BookOpen className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 font-serif">No Matching Courses Found</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Try resetting your filters or adjusting your search keyword. Our counselors can also custom-match you with 350+ unlisted universities.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCountry('');
              setSelectedDegree('');
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all"
          >
            Show All Courses
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Header */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={course.universityLogo}
                      alt={course.universityName}
                      className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
                    />
                    <div>
                      <span className="text-[11px] font-extrabold text-blue-700 uppercase tracking-wider block">
                        {course.countryName} • {course.degreeLevel}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 font-serif leading-tight">
                        {course.universityName}
                      </h3>
                    </div>
                  </div>

                  <span className="bg-slate-900 text-blue-300 text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap shadow-2xs">
                    {course.rankingBadge}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-800 font-serif group-hover:text-blue-800 transition-colors">
                  {course.courseTitle}
                </h4>

                {/* Tuition & Scholarship Badge */}
                <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-500 uppercase tracking-wider">ANNUAL TUITION</span>
                    <span className="font-extrabold text-slate-900">
                      {formatCurrency(course.tuitionUSDYear, currency)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-blue-200/60">
                    <span className="font-semibold text-blue-900 uppercase tracking-wider">SCHOLARSHIP</span>
                    <span className="font-bold text-blue-700">
                      {course.scholarshipAvailable}
                    </span>
                  </div>
                </div>

                {/* Eligibility Requirements */}
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Duration / Intakes:</span>
                    <span className="font-semibold text-slate-800">
                      {course.durationYears} Yr ({course.intakes.join(', ')})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">English Test:</span>
                    <span className="font-semibold text-slate-800">{course.englishRequirement}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Academic GPA:</span>
                    <span className="font-semibold text-slate-800">{course.gpaRequirement}</span>
                  </div>
                </div>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {course.highlights.map((h, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-100 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded-lg"
                    >
                      {h}
                    </span>
                  ))}
                  {course.pswvEligible && (
                    <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      PSWV Eligible
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">
                  Direct Admission Support
                </span>
                <button
                  onClick={() =>
                    onOpenConsultationModal(course.countryName, course.degreeLevel, course.courseTitle)
                  }
                  className="bg-slate-900 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Check Scholarship Eligibility</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
