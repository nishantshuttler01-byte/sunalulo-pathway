import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Circle, Clock, FileCheck, AlertCircle, HelpCircle, ArrowRight, Download, CheckSquare, Square } from 'lucide-react';
import { VISA_ROADMAP_STAGES } from '../data/visaSteps';
import { VisaStage } from '../types';

interface VisaRoadmapProps {
  onOpenConsultationModal: () => void;
}

export const VisaRoadmap: React.FC<VisaRoadmapProps> = ({ onOpenConsultationModal }) => {
  const [stages, setStages] = useState<VisaStage[]>(VISA_ROADMAP_STAGES);
  const [activeStageId, setActiveStageId] = useState<number>(1);

  const toggleDocumentCheck = (stageId: number, docId: string) => {
    setStages((prev) =>
      prev.map((stage) => {
        if (stage.id !== stageId) return stage;
        return {
          ...stage,
          documents: stage.documents.map((doc) =>
            doc.id === docId ? { ...doc, checked: !doc.checked } : doc
          )
        };
      })
    );
  };

  const currentStage = stages.find((s) => s.id === activeStageId) || stages[0];

  // Calculate total checked docs
  const totalDocs = stages.reduce((acc, stage) => acc + stage.documents.length, 0);
  const checkedDocs = stages.reduce(
    (acc, stage) => acc + stage.documents.filter((d) => d.checked).length,
    0
  );
  const progressPercent = Math.round((checkedDocs / totalDocs) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold border border-blue-300">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>Sunaulo 5-Step Visa & NOC Roadmap</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
          From Counseling to Airport Departure
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Interactive document checklist for Nepali students. Check off your academic certificates, bank balance statements, SOP drafts, and Ministry of Education NOC before visa lodgement.
        </p>
      </div>

      {/* Progress Bar Header */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-slate-900 font-serif">
            Your Visa Document Readiness
          </h3>
          <p className="text-xs text-slate-500">
            {checkedDocs} of {totalDocs} required documents prepared for admission & immigration review
          </p>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="flex-1 sm:w-48 bg-slate-100 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-blue-800 h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-lg font-extrabold text-blue-700 font-serif whitespace-nowrap">
            {progressPercent}% Ready
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Stage Navigation Steps */}
        <div className="lg:col-span-4 space-y-3">
          {stages.map((stage) => {
            const isActive = stage.id === activeStageId;
            const stageChecked = stage.documents.filter((d) => d.checked).length;
            const stageTotal = stage.documents.length;
            const isCompleted = stageChecked === stageTotal && stageTotal > 0;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-start justify-between gap-3 cursor-pointer ${
                  isActive
                    ? 'bg-blue-50/80 border-blue-400 shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-700'
                        : isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-bold">{stage.id}</span>
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-serif">
                      {stage.title}
                    </h4>
                    <span className="text-xs font-semibold text-slate-400 mt-0.5 block">
                      {stage.timeframe}
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {stageChecked}/{stageTotal} Docs
                  </span>
                </div>
              </button>
            );
          })}

          {/* Download Full Checklist Guide Button */}
          <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3 text-center">
            <h5 className="text-sm font-bold font-serif">Need the Printable PDF Guide?</h5>
            <p className="text-xs text-slate-400">
              Download Sunaulo Pathways’ official MoE NOC and Australian GS financial checklist.
            </p>
            <button
              onClick={onOpenConsultationModal}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Get Free Document Checklist</span>
            </button>
          </div>
        </div>

        {/* Right Column: Detailed Document Checklist for Active Stage */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                STAGE {currentStage.id} OF 5 • {currentStage.timeframe}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 font-serif">
                {currentStage.title}
              </h3>
            </div>
            <span className="bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full">
              {currentStage.documents.filter((d) => d.checked).length} of {currentStage.documents.length} Completed
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {currentStage.description}
          </p>

          {/* Documents Checklist items */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Required Documents & Action Items
            </h4>
            <div className="space-y-3">
              {currentStage.documents.map((doc) => {
                const isChecked = !!doc.checked;
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleDocumentCheck(currentStage.id, doc.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-emerald-50/60 border-emerald-300'
                        : 'bg-slate-50 border-slate-200 hover:border-blue-300 hover:bg-white'
                    }`}
                  >
                    <div className="shrink-0 mt-0.5">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h5
                          className={`text-sm font-bold ${
                            isChecked ? 'text-emerald-900 line-through' : 'text-slate-900 font-serif'
                          }`}
                        >
                          {doc.name}
                        </h5>
                        {doc.required && (
                          <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-sm">
                            REQUIRED
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Genuine Student (GS) Financial Tip Box */}
          {currentStage.id === 4 && (
            <div className="bg-blue-50/80 border border-blue-300 rounded-2xl p-4 text-xs text-blue-950 space-y-1.5">
              <span className="font-bold uppercase tracking-wider text-blue-800 block">
                Sunaulo Visa Compliance Alert: Financial Verification
              </span>
              <p>
                For Australia Subclass 500 visa applications, funds must be held in A-Class commercial banks in Nepal for at least 3 months, or supported by an official Education Loan disbursement letter from Nabil, Everest, Nepal SBI, or Standard Chartered Bank.
              </p>
            </div>
          )}

          {/* Next Step Action */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => setActiveStageId((prev) => Math.max(1, prev - 1))}
              disabled={currentStage.id === 1}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-40"
            >
              ← Previous Stage
            </button>

            <div className="flex items-center gap-2">
              {currentStage.id < 5 ? (
                <button
                  onClick={() => setActiveStageId((prev) => Math.min(5, prev + 1))}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5"
                >
                  <span>Proceed to Stage {currentStage.id + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={onOpenConsultationModal}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-xs transition-all flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Book Final Visa Lodgement Review</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
