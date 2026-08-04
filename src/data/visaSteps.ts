import { VisaStage } from '../types';

export const VISA_ROADMAP_STAGES: VisaStage[] = [
  {
    id: 1,
    title: '1. Career & Country Counseling',
    description: 'Assess academic background, career ambitions, budget, and select the optimal country & university pathway.',
    timeframe: 'Week 1 - 2',
    status: 'completed',
    documents: [
      {
        id: 'doc-1',
        name: 'Academic Transcripts & Certificates (SEE, 10+2 / Diploma, Bachelor’s)',
        required: true,
        description: 'Original color scanned copies of marksheets and character certificates.'
      },
      {
        id: 'doc-2',
        name: 'Valid Passport (Minimum 2 Years Validity Remaining)',
        required: true,
        description: 'Biodata page and any previous travel visa stamps.'
      },
      {
        id: 'doc-3',
        name: 'Up-to-date Curriculum Vitae / Resume',
        required: true,
        description: 'Highlighting all educational milestones and professional work experiences with no unexplained study gaps.'
      }
    ]
  },
  {
    id: 2,
    title: '2. English Proficiency & Standardized Tests',
    description: 'Prepare for and achieve target scores in IELTS, PTE Academic, TOEFL iBT, or Duolingo English Test.',
    timeframe: 'Week 3 - 6',
    status: 'in_progress',
    documents: [
      {
        id: 'doc-4',
        name: 'Official IELTS / PTE / TOEFL Score Card',
        required: true,
        description: 'Target overall score of 6.5+ for Master’s (min 6.0 in each band) or 6.0+ for Bachelor’s.'
      },
      {
        id: 'doc-5',
        name: 'GRE / GMAT / SAT Official Report (if applicable for US STEM/MBA)',
        required: false,
        description: 'Optional but highly recommended for US universities to unlock 30%–50% tuition merit scholarships.'
      }
    ]
  },
  {
    id: 3,
    title: '3. Offer Letter Application & SOP Submission',
    description: 'Submit formal admission application with Statement of Purpose (SOP) and Academic Reference Letters.',
    timeframe: 'Week 7 - 10',
    status: 'pending',
    documents: [
      {
        id: 'doc-6',
        name: 'Visa-Compliant Statement of Purpose (SOP)',
        required: true,
        description: 'Must address Genuine Student (GS) criteria: why this university, financial readiness, career outcome in Nepal.'
      },
      {
        id: 'doc-7',
        name: 'Two Academic / Professional Letters of Recommendation (LOR)',
        required: true,
        description: 'On official letterhead from professors or employers.'
      }
    ]
  },
  {
    id: 4,
    title: '4. Financial Verification & COE / CAS / I-20 Issuance',
    description: 'Demonstrate genuine financial capacity to cover tuition and living expenses, then receive official admission confirmation.',
    timeframe: 'Week 11 - 13',
    status: 'pending',
    documents: [
      {
        id: 'doc-8',
        name: 'Bank Balance Certificate & 6-Month Transaction Statement',
        required: true,
        description: 'From A-Class commercial banks in Nepal showing stable savings or approved education loan.'
      },
      {
        id: 'doc-9',
        name: 'Annual Income Verification & Tax Clearance Certificate',
        required: true,
        description: 'From local ward/municipality verifying sponsor income sources (salary, business, agriculture, rent).'
      },
      {
        id: 'doc-10',
        name: 'Tuition Fee Deposit Telegraphic Transfer (TT) Receipt',
        required: true,
        description: 'First semester tuition payment receipt required by university to issue COE (Australia), CAS (UK), or I-20 (USA).'
      }
    ]
  },
  {
    id: 5,
    title: '5. Medical Exam, Biometrics & Visa Lodgement',
    description: 'Complete immigration health check at IOM/approved clinic, lodge visa application online, and attend interview/biometrics.',
    timeframe: 'Week 14 - 16',
    status: 'pending',
    documents: [
      {
        id: 'doc-11',
        name: 'eMedical Health Examination Certificate (IOM / Approved Clinic)',
        required: true,
        description: 'Standard chest X-ray and medical examination required for student visas.'
      },
      {
        id: 'doc-12',
        name: 'Overseas Student Health Cover (OSHC / IHS / Health Insurance)',
        required: true,
        description: 'Mandatory health insurance policy for the entire duration of stay.'
      },
      {
        id: 'doc-13',
        name: 'No Objection Certificate (NOC) from Ministry of Education Nepal',
        required: true,
        description: 'Required before foreign currency transfer and airport departure from Kathmandu.'
      }
    ]
  }
];
