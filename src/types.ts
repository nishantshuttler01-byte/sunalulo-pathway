export type CurrencyCode = 'USD' | 'NPR' | 'AUD' | 'GBP' | 'CAD' | 'EUR' | 'JPY';

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rateFromUSD: number; // Conversion rate from 1 USD
}

export interface Destination {
  id: string;
  name: string;
  flag: string;
  pswvDuration: string;
  livingCostUSDYear: number;
  minBankBalanceUSD: number;
  partTimeWorkHours: string;
  visaSuccessRate: string;
  topUniversitiesCount: number;
  highlights: string[];
  bannerImage: string;
  popularMajors: string[];
}

export interface UniversityCourse {
  id: string;
  universityName: string;
  universityLogo: string;
  countryId: string;
  countryName: string;
  degreeLevel: 'Bachelor' | 'Master' | 'PhD' | 'Diploma';
  courseTitle: string;
  durationYears: number;
  tuitionUSDYear: number;
  scholarshipAvailable: string; // e.g. "Up to 30% Sunaulo Bursary"
  scholarshipDiscountPercent: number;
  intakes: string[];
  englishRequirement: string;
  gpaRequirement: string;
  pswvEligible: boolean;
  rankingBadge: string;
  highlights: string[];
}

export interface Counselor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  certification: string;
  avatar: string;
  experienceYears: number;
  rating: number;
  availableSlots: string[];
  locations: ('Kathmandu Office' | 'Pokhara Office' | 'Chitwan Office' | 'Sydney Office' | 'Online Video Call')[];
}

export interface ConsultationAppointment {
  id: string;
  counselorId: string;
  counselorName: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  preferredCountry: string;
  intendedDegree: string;
  date: string;
  timeSlot: string;
  locationType: string;
  status: 'Confirmed' | 'Pending';
  createdAt: string;
}

export interface AIPathwayReport {
  admissionProbabilityScore: number;
  confidenceRating: 'High Probability' | 'Good Probability' | 'Ambitious Reach';
  summary: string;
  recommendedUniversities: {
    name: string;
    country: string;
    program: string;
    estimatedTuitionUSD: number;
    scholarshipOpportunity: string;
    admissionChance: 'High' | 'Good' | 'Reach';
    whyGoodFit: string;
  }[];
  scholarshipAssessment: {
    eligibilityLevel: string;
    estimatedAnnualSavingsUSD: number;
    keyRequirements: string;
  };
  visaReadiness: {
    score: number;
    status: string;
    keyChecklist: string[];
  };
  postStudyWorkVisa: {
    duration: string;
    careerOutlook: string;
  };
}

export interface SOPReviewResult {
  overallScore: number;
  visaReadinessRating: string;
  strengths: string[];
  areasForImprovement: string[];
  enhancedExcerpt: string;
  counselorVerdict: string;
}

export interface VisaStage {
  id: number;
  title: string;
  description: string;
  timeframe: string;
  status: 'completed' | 'in_progress' | 'pending';
  documents: {
    id: string;
    name: string;
    required: boolean;
    description: string;
    checked?: boolean;
  }[];
}
