import React, { useState } from 'react';
import { Sparkles, GraduationCap, Award, DollarSign, CheckCircle2, AlertCircle, ArrowRight, BookOpen, Globe, Shield, Loader2, Share2, Printer } from 'lucide-react';
import { AIPathwayReport, CurrencyCode } from '../types';
import { formatCurrency } from '../utils/currency';

interface AIPathwayAdvisorProps {
  currency: CurrencyCode;
  onOpenConsultationModal: (country?: string, degree?: string) => void;
  initialCountry?: string;
  initialLevel?: string;
  initialMajor?: string;
}

export const AIPathwayAdvisor: React.FC<AIPathwayAdvisorProps> = ({
  currency,
  onOpenConsultationModal,
  initialCountry = 'Australia',
  initialLevel = 'Master',
  initialMajor = 'Data Science & IT'
}) => {
  // Form State
  const [academicLevel, setAcademicLevel] = useState(initialLevel);
  const [gpaOrPercentage, setGpaOrPercentage] = useState('3.4 / 4.0');
  const [englishTest, setEnglishTest] = useState('IELTS');
  const [englishScore, setEnglishScore] = useState('6.5 (No band < 6.0)');
  const [preferredCountry, setPreferredCountry] = useState(initialCountry);
  const [targetDegree, setTargetDegree] = useState(initialLevel);
  const [targetMajor, setTargetMajor] = useState(initialMajor || 'Data Science & AI');
  const [budgetPerYearUSD, setBudgetPerYearUSD] = useState(25000);
  const [fundingSource, setFundingSource] = useState('Family Savings + A-Class Bank Loan');

  // AI State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<AIPathwayReport | null>(null);

  const handleGenerateReport = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/ai/pathway-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          academicLevel,
          gpaOrPercentage,
          englishTest,
          englishScore,
          preferredCountry,
          targetDegree,
          targetMajor,
          budgetPerYearUSD,
          fundingSource
        })
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || 'Failed to generate pathway report');
      }

      setReport(data.report);
    } catch (err: any) {
      console.error('Error generating report:', err);
      setError(err.message || 'An unexpected error occurred while analyzing your profile.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold border border-blue-300">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Sunaulo AI Royal Pathway Advisor</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
          Get Your Instant AI Study Abroad & Scholarship Assessment
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Our AI analyzes your academic profile, English test scores, and budget against 350+ global universities to recommend your highest probability admission & scholarship matches.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form: Student Input Profile */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-7">
          <h3 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2 pb-4 border-b border-slate-100">
            <GraduationCap className="w-5 h-5 text-blue-600" />
            Your Academic Profile
          </h3>

          <form onSubmit={handleGenerateReport} className="space-y-4 mt-5">
            {/* Academic Level */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Current / Highest Academic Qualification
              </label>
              <select
                value={academicLevel}
                onChange={(e) => setAcademicLevel(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
              >
                <option value="4-Year Bachelor's Degree">4-Year Bachelor's Degree (NEB / TU / KU / PU)</option>
                <option value="3-Year Bachelor's Degree">3-Year Bachelor's Degree (BBS / BA / BSc)</option>
                <option value="10+2 / High School (NEB)">10+2 / High School Diploma (NEB / A-Levels / CBSE)</option>
                <option value="Diploma / PCL">3-Year Diploma / PCL (CTEVT)</option>
              </select>
            </div>

            {/* GPA / Percentage */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Overall GPA or Percentage
              </label>
              <input
                type="text"
                value={gpaOrPercentage}
                onChange={(e) => setGpaOrPercentage(e.target.value)}
                placeholder="e.g. 3.4 / 4.0 or 75% First Division"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                required
              />
            </div>

            {/* English Test & Score */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  English Test
                </label>
                <select
                  value={englishTest}
                  onChange={(e) => setEnglishTest(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                >
                  <option value="IELTS">IELTS Academic</option>
                  <option value="PTE">PTE Academic</option>
                  <option value="TOEFL">TOEFL iBT</option>
                  <option value="Duolingo">Duolingo English</option>
                  <option value="Preparing / Not Taken">Preparing</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Target / Score
                </label>
                <input
                  type="text"
                  value={englishScore}
                  onChange={(e) => setEnglishScore(e.target.value)}
                  placeholder="e.g. 6.5 or PTE 64"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  required
                />
              </div>
            </div>

            {/* Target Country */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Study Destination
              </label>
              <select
                value={preferredCountry}
                onChange={(e) => setPreferredCountry(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
              >
                <option value="Australia">🇦🇺 Australia (Group of Eight & 2-4 Yr PSWV)</option>
                <option value="USA">🇺🇸 United States (3-Year STEM OPT & Scholarships)</option>
                <option value="UK">🇬🇧 United Kingdom (1-Year Master's & Russell Group)</option>
                <option value="Canada">🇨🇦 Canada (PGWP & Permanent Residency Pathways)</option>
                <option value="Japan">🇯🇵 Japan (99.1% Visa Approval & MEXT Scholarships)</option>
                <option value="Germany">🇩🇪 Germany (Zero Public Tuition & 18-Mo Job Seeker)</option>
                <option value="New Zealand">🇳🇿 New Zealand (Green List Residency Pathway)</option>
              </select>
            </div>

            {/* Target Degree & Major */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Target Degree
                </label>
                <select
                  value={targetDegree}
                  onChange={(e) => setTargetDegree(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                >
                  <option value="Master">Master's Degree</option>
                  <option value="Bachelor">Bachelor's Degree</option>
                  <option value="Diploma">Postgrad Diploma</option>
                  <option value="PhD">PhD / Research</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Intended Major
                </label>
                <input
                  type="text"
                  value={targetMajor}
                  onChange={(e) => setTargetMajor(e.target.value)}
                  placeholder="e.g. Data Science, Nursing, MBA"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  required
                />
              </div>
            </div>

            {/* Annual Tuition Budget USD */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Annual Tuition Budget ({formatCurrency(budgetPerYearUSD, currency)})
                </label>
                <span className="text-xs font-bold text-blue-700">
                  ${budgetPerYearUSD.toLocaleString()} USD/year
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="50000"
                step="2500"
                value={budgetPerYearUSD}
                onChange={(e) => setBudgetPerYearUSD(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                <span>$5,000 (Low/Japan/Germany)</span>
                <span>$25,000 (AU/UK Standard)</span>
                <span>$50,000 (Top US/AU)</span>
              </div>
            </div>

            {/* Funding Source */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Financial Funding Source
              </label>
              <select
                value={fundingSource}
                onChange={(e) => setFundingSource(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
              >
                <option value="Family Savings + A-Class Bank Loan">Family Savings + A-Class Bank Loan (Nepal)</option>
                <option value="100% Bank Education Loan">100% Bank Education Loan (Nabil / Everest / SBI)</option>
                <option value="Personal / Family Liquid Funds">Personal / Family Liquid Funds & Property</option>
                <option value="Seeking High Scholarship / GA">Seeking High Scholarship / Graduate Assistantship</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-3"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>AI Analyzing 350+ University Pathways...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Generate AI Pathway & Scholarship Report</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Output: AI Report or Guidance Empty State */}
        <div className="lg:col-span-7">
          {loading ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mx-auto animate-bounce">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                Crafting Your Royal Pathway Report...
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Comparing your GPA ({gpaOrPercentage}) and {englishTest} score with admission requirements, scholarship opportunities, and visa guidelines for {preferredCountry}.
              </p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-red-800 flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold">Could not generate report</h4>
                <p className="text-sm mt-1">{error}</p>
              </div>
            </div>
          ) : report ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-7 animate-in fade-in duration-300">
              {/* Header Badge & Probability Score */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                    Sunaulo AI Admissions Forecast
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 font-serif">
                    Pathway & Scholarship Report
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-slate-400 block">ADMISSION CHANCE</span>
                    <span className="text-sm font-extrabold text-emerald-700">
                      {report.confidenceRating}
                    </span>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white flex flex-col items-center justify-center shadow-md">
                    <span className="text-xl font-black leading-none">{report.admissionProbabilityScore}%</span>
                    <span className="text-[9px] font-bold tracking-tight mt-0.5">SCORE</span>
                  </div>
                </div>
              </div>

              {/* Summary Statement */}
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 text-sm text-blue-950 leading-relaxed font-medium">
                <p>"{report.summary}"</p>
              </div>

              {/* Recommended Universities */}
              <div className="space-y-4">
                <h4 className="text-base font-bold text-slate-900 font-serif flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  Top 3 Recommended Universities for Your Profile
                </h4>

                <div className="grid grid-cols-1 gap-3.5">
                  {report.recommendedUniversities.map((uni, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 hover:border-blue-300 rounded-xl p-4 transition-all bg-slate-50/50 hover:bg-white shadow-2xs hover:shadow-sm"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <span className="text-[11px] font-extrabold text-blue-700 uppercase tracking-wider">
                            Recommendation #{idx + 1} • {uni.country}
                          </span>
                          <h5 className="text-lg font-bold text-slate-900 font-serif">
                            {uni.name}
                          </h5>
                          <p className="text-xs font-semibold text-slate-600 mt-0.5">
                            {uni.program}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                            uni.admissionChance.includes('High') || uni.admissionChance.includes('Very')
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          Chance: {uni.admissionChance}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3.5 pt-3 border-t border-slate-200/60 text-xs">
                        <div>
                          <span className="text-slate-400 font-semibold block">ESTIMATED TUITION</span>
                          <span className="font-bold text-slate-800">
                            {formatCurrency(uni.estimatedTuitionUSD, currency)} / year
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 font-semibold block">SCHOLARSHIP OPPORTUNITY</span>
                          <span className="font-bold text-blue-700">
                            {uni.scholarshipOpportunity}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 mt-2 italic">
                        "{uni.whyGoodFit}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scholarship Assessment & Visa Readiness Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Scholarship Assessment
                  </span>
                  <div className="font-bold text-sm text-slate-900">
                    {report.scholarshipAssessment.eligibilityLevel}
                  </div>
                  <div className="text-xs font-semibold text-emerald-700">
                    Estimated Annual Savings: {formatCurrency(report.scholarshipAssessment.estimatedAnnualSavingsUSD, currency)}
                  </div>
                  <p className="text-xs text-slate-600">
                    {report.scholarshipAssessment.keyRequirements}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Visa Readiness ({report.visaReadiness.score}%)
                  </span>
                  <div className="font-bold text-sm text-slate-900">
                    Status: {report.visaReadiness.status}
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {report.visaReadiness.keyChecklist.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Post Study Work Visa Info */}
              <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4 text-xs text-blue-950 space-y-1">
                <span className="font-bold uppercase tracking-wider text-blue-800 block">
                  Post-Study Work Visa & Career Outlook ({preferredCountry})
                </span>
                <p className="font-semibold">
                  Duration: {report.postStudyWorkVisa.duration}
                </p>
                <p className="text-blue-900">
                  {report.postStudyWorkVisa.careerOutlook}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Report</span>
                  </button>
                </div>

                <button
                  onClick={() => onOpenConsultationModal(preferredCountry, targetDegree)}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Free Session with {preferredCountry} Specialist</span>
                  <ArrowRight className="w-4 h-4 text-blue-300" />
                </button>
              </div>
            </div>
          ) : (
            // Initial Empty Guidance Card
            <div className="bg-gradient-to-br from-white to-blue-50/40 rounded-2xl border border-slate-200 shadow-md p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto shadow-xs">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Ready to See Your Best University Matches?
                </h3>
                <p className="text-sm text-slate-600">
                  Fill in your academic details on the left and click <strong>"Generate AI Pathway & Scholarship Report"</strong> to receive your custom admissions probability score and bursary options.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-left pt-4 border-t border-slate-100">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-800 block">350+ Unis</span>
                  <p className="text-[11px] text-slate-500">AU, US, UK, CA, JP, DE, NZ</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-800 block">Up to 50% Off</span>
                  <p className="text-[11px] text-slate-500">Merit bursaries & grants</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-800 block">98.4% Visa</span>
                  <p className="text-[11px] text-slate-500">GS / Genuine Student ready</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
