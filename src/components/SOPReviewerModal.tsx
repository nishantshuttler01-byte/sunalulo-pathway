import React, { useState } from 'react';
import { FileCheck, Sparkles, AlertTriangle, CheckCircle2, RefreshCw, Loader2, Award, ShieldAlert, BookOpen, Copy, Check } from 'lucide-react';
import { SOPReviewResult } from '../types';

interface SOPReviewerModalProps {
  onOpenConsultationModal: () => void;
}

export const SOPReviewerModal: React.FC<SOPReviewerModalProps> = ({ onOpenConsultationModal }) => {
  const [sopText, setSopText] = useState(
    "My academic foundation in Information Technology from Tribhuvan University, combined with my desire to master advanced AI and Big Data methodologies, makes pursuing a Master of Data Science in Australia a crucial step in my professional journey. Nepal's technology sector is rapidly expanding, yet specialized master's programs in Cloud Computing and AI remain limited locally. By studying at an Australian Group of Eight university, I will gain practical industry exposure and international accreditation. Upon graduation, my career plan is to return to Kathmandu and contribute as a Senior Lead Data Architect at Nepal's leading software houses such as Leapfrog or F1Soft..."
  );
  const [targetCountry, setTargetCountry] = useState('Australia');
  const [targetDegree, setTargetDegree] = useState('Master');
  const [targetMajor, setTargetMajor] = useState('Data Science & AI');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [review, setReview] = useState<SOPReviewResult | null>(null);
  const [copied, setCopied] = useState(false);

  const handleReviewSOP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/ai/sop-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sopText,
          targetCountry,
          targetDegree,
          targetMajor
        })
      });

      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || 'Failed to review SOP');
      }

      setReview(data.review);
    } catch (err: any) {
      console.error('Error reviewing SOP:', err);
      setError(err.message || 'Failed to analyze Statement of Purpose.');
    } finally {
      setLoading(false);
    }
  };

  const copyExcerpt = () => {
    if (!review?.enhancedExcerpt) return;
    navigator.clipboard.writeText(review.enhancedExcerpt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-300">
          <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
          <span>Sunaulo AI SOP & Visa Compliance Reviewer</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
          Test Your SOP Against Genuine Student (GS) Visa Criteria
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Avoid visa refusals. Our AI checks your Statement of Purpose for Genuine Student (GS) criteria, home-country career ties, financial clarity, and academic progression.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Input: SOP Draft & Details */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-7 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 font-serif flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Paste Your SOP Draft
            </h3>
            <span className="text-xs text-slate-400 font-medium">
              Word count: {sopText.trim() ? sopText.trim().split(/\s+/).length : 0}
            </span>
          </div>

          <form onSubmit={handleReviewSOP} className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Destination
                </label>
                <select
                  value={targetCountry}
                  onChange={(e) => setTargetCountry(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-800"
                >
                  <option value="Australia">🇦🇺 Australia (GS)</option>
                  <option value="USA">🇺🇸 USA (F-1 Intention)</option>
                  <option value="UK">🇬🇧 UK (Genuine Visitor)</option>
                  <option value="Canada">🇨🇦 Canada (Study Plan)</option>
                  <option value="Japan">🇯🇵 Japan (COE Plan)</option>
                  <option value="Germany">🇩🇪 Germany (Motivation)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Degree
                </label>
                <select
                  value={targetDegree}
                  onChange={(e) => setTargetDegree(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-800"
                >
                  <option value="Master">Master's / PG</option>
                  <option value="Bachelor">Bachelor's / UG</option>
                  <option value="Diploma">Diploma</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Major / Course
                </label>
                <input
                  type="text"
                  value={targetMajor}
                  onChange={(e) => setTargetMajor(e.target.value)}
                  placeholder="e.g. Data Science"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Statement of Purpose Text (Minimum 50 words)
              </label>
              <textarea
                rows={10}
                value={sopText}
                onChange={(e) => setSopText(e.target.value)}
                placeholder="Paste your Statement of Purpose (SOP) here..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-sm font-normal text-slate-800 leading-relaxed focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
              />
            </div>

            <button
              type="submit"
              disabled={loading || sopText.trim().length < 50}
              className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white font-bold py-4 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>AI Reviewing Against Visa Officer Standards...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-blue-300" />
                  <span>Analyze SOP for Visa Compliance</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Output: AI Review Report */}
        <div className="lg:col-span-6">
          {loading ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mx-auto animate-pulse">
                <FileCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                Evaluating Visa Readiness...
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto">
                Checking Genuine Student (GS) criteria, career progression clarity, home-country economic return incentives, and academic justification.
              </p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-red-800">
              <h4 className="font-bold">Error analyzing SOP</h4>
              <p className="text-sm mt-1">{error}</p>
            </div>
          ) : review ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-8 space-y-6 animate-in fade-in duration-300">
              {/* Score & Rating Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    VISA COMPLIANCE ASSESSMENT
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 font-serif">
                    {review.visaReadinessRating}
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white flex flex-col items-center justify-center shadow-md">
                  <span className="text-xl font-black leading-none">{review.overallScore}</span>
                  <span className="text-[9px] font-bold tracking-tight mt-0.5">/ 100</span>
                </div>
              </div>

              {/* Counselor Verdict */}
              <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 text-sm text-blue-950 font-medium">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block mb-1">
                  Counselor Feedback
                </span>
                <p>"{review.counselorVerdict}"</p>
              </div>

              {/* Strengths */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Key Strengths
                </h4>
                <ul className="space-y-1.5">
                  {review.strengths.map((str, idx) => (
                    <li key={idx} className="text-xs text-slate-700 bg-emerald-50/60 border border-emerald-100 px-3 py-2 rounded-lg">
                      {str}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas for Improvement (Visa Red Flags to Address) */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Visa Officer Areas to Strengthen (GS Criteria)
                </h4>
                <ul className="space-y-1.5">
                  {review.areasForImprovement.map((area, idx) => (
                    <li key={idx} className="text-xs text-slate-700 bg-amber-50/60 border border-amber-100 px-3 py-2 rounded-lg">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Enhanced Excerpt Suggestion */}
              {review.enhancedExcerpt && (
                <div className="bg-slate-900 text-slate-100 rounded-xl p-4 space-y-2 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider">
                      AI Enhanced Excerpt (Visa-Ready Rewriting)
                    </span>
                    <button
                      onClick={copyExcerpt}
                      className="text-xs text-slate-300 hover:text-white flex items-center gap-1 bg-slate-800 px-2.5 py-1 rounded-md"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-200 italic">
                    {review.enhancedExcerpt}
                  </p>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={onOpenConsultationModal}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Get 1-on-1 SOP Polish with QEAC Certified Counselor</span>
                </button>
              </div>
            </div>
          ) : (
            // Empty Initial Guidance Card
            <div className="bg-gradient-to-br from-white to-emerald-50/40 rounded-2xl border border-slate-200 shadow-md p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
                <FileCheck className="w-8 h-8" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Why Get Your SOP Reviewed?
                </h3>
                <p className="text-sm text-slate-600">
                  Over 40% of international student visa rejections are caused by poorly structured Statements of Purpose that fail to convince visa officers of genuine student intentions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left max-w-sm mx-auto pt-3 border-t border-slate-100">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                  <span className="text-xs font-bold text-slate-800 block">Australia GS</span>
                  <p className="text-[11px] text-slate-500">Checks home-country ties & ROI</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                  <span className="text-xs font-bold text-slate-800 block">USA F-1 Intent</span>
                  <p className="text-[11px] text-slate-500">Ensures clear study objectives</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
