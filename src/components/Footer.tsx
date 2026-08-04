import React from 'react';
import { Compass, MapPin, Phone, Mail, Award, Globe, Shield, Clock } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenConsultationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenConsultationModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner Call to Action */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif">
              Ready to Begin Your Royal Study Abroad Journey?
            </h3>
            <p className="text-blue-100 text-sm max-w-2xl">
              Get personalized university matching, up to 50% merit scholarship assessment, and 98%+ visa success guidance from Nepal’s top QEAC & USATC certified counselors.
            </p>
          </div>
          <button
            onClick={onOpenConsultationModal}
            className="bg-white text-blue-950 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all text-sm sm:text-base shrink-0 cursor-pointer"
          >
            Book Your Free Counseling Session →
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                <Compass className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-serif">Sunaulo</span>
                <span className="text-xl font-extrabold text-blue-400"> Pathways</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Sunaulo Pathways is Nepal’s premier study abroad consultancy and global education gateway. We empower ambitious Nepali students to achieve admissions and scholarships at world-class universities in Australia, USA, UK, Canada, Japan, Germany, and New Zealand.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-blue-400 text-xs font-semibold border border-slate-700">
                <Award className="w-3.5 h-3.5" />
                QEAC Certified (M342)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-blue-400 text-xs font-semibold border border-slate-700">
                <Shield className="w-3.5 h-3.5" />
                USATC Specialist
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-blue-400 text-xs font-semibold border border-slate-700">
                <Globe className="w-3.5 h-3.5" />
                British Council Agent
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Explore Pathways
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => setActiveTab('destinations')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Study in Australia (Go8 & PSWV)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('destinations')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Study in USA (STEM OPT & GA)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('destinations')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Study in UK (Russell Group)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Sunaulo Merit Scholarships
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('visa-roadmap')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Visa & NOC Document Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: AI & Tools */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              AI Student Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => setActiveTab('ai-advisor')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <span>AI Pathway & Scholarship Advisor</span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded-sm font-bold">
                    NEW
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('sop-reviewer')}
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <span>AI SOP & Essay Reviewer</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded-sm font-bold">
                    GS READY
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Live Tuition Currency Converter
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('counselors')}
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  Meet Our Expert Counselors
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Offices in Nepal & Australia */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Offices
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Kathmandu Head Office</span>
                  <span>Putalisadak Chowk (Near Star Mall), Kathmandu, Nepal</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Pokhara Office</span>
                  <span>New Road (Opposite Bhatbhateni), Pokhara, Kaski</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Sydney Liaison Office</span>
                  <span>Suite 402, Sussex Street, Haymarket, NSW 2000, Australia</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-300 pt-1">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+977-1-4248900 / 9801088990</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>admissions@sunaulopathways.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Sunaulo Pathways Education Consultancy Pvt. Ltd. All rights reserved. • Registered with Ministry of Education, Nepal.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">MoE NOC Guidance</span>
            <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
