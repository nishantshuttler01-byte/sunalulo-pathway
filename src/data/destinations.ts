import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    pswvDuration: '2 to 4 Years (Temporary Graduate Visa Subclass 485)',
    livingCostUSDYear: 16500,
    minBankBalanceUSD: 19800,
    partTimeWorkHours: '48 hours per fortnight during semester (Unlimited during breaks)',
    visaSuccessRate: '98.4%',
    topUniversitiesCount: 43,
    bannerImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Top choice for Nepali & South Asian students with high PR pathway potential',
      'High minimum student wage ($23.23 AUD/hour)',
      'World-ranked Group of Eight (Go8) research universities',
      'Flexible 2 to 4 year Post-Study Work Visa rights'
    ],
    popularMajors: [
      'Information Technology & Cyber Security',
      'Nursing & Aged Healthcare',
      'Civil & Mechanical Engineering',
      'Professional Accounting & FinTech',
      'Data Science & AI'
    ]
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    pswvDuration: '1 Year Standard OPT + 2 Year STEM Extension (Total 3 Years)',
    livingCostUSDYear: 18000,
    minBankBalanceUSD: 24000,
    partTimeWorkHours: '20 hours/week on-campus (CPT/OPT for off-campus internships)',
    visaSuccessRate: '94.2%',
    topUniversitiesCount: 150,
    bannerImage: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Highest global starting salaries for STEM graduates ($75K-$110K USD)',
      'Generous merit scholarships and Graduate Assistantships (GA/TA)',
      '3-year STEM OPT extension for Computer Science, Engineering & Data majors',
      'Unmatched research facilities and Silicon Valley industry access'
    ],
    popularMajors: [
      'Computer Science & Artificial Intelligence',
      'Business Analytics & STEM MBA',
      'Electrical & Robotics Engineering',
      'Biomedical & Pharmaceutical Sciences',
      'Cloud Computing & Cybersecurity'
    ]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    pswvDuration: '2 Years (Graduate Route PSW Visa)',
    livingCostUSDYear: 15500,
    minBankBalanceUSD: 17200,
    partTimeWorkHours: '20 hours/week during term-time',
    visaSuccessRate: '97.8%',
    topUniversitiesCount: 65,
    bannerImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      '1-Year intensive Master’s degrees saving 1 year of living costs',
      '2-Year guaranteed Post-Study Graduate Route Visa',
      'Russell Group prestigious universities with worldwide recognition',
      'NHS healthcare coverage through immigration health surcharge'
    ],
    popularMajors: [
      'International Business & Management',
      'Data Science & Analytics',
      'Global Healthcare & Public Health',
      'Law & International Relations',
      'Software Engineering'
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    pswvDuration: 'Up to 3 Years (Post-Graduation Work Permit - PGWP)',
    livingCostUSDYear: 15000,
    minBankBalanceUSD: 18000,
    partTimeWorkHours: '20 hours/week off-campus (up to 24 hrs under new guidelines)',
    visaSuccessRate: '95.6%',
    topUniversitiesCount: 40,
    bannerImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Clear Express Entry and Provincial Nominee (PNP) immigration pathways',
      'Affordable tuition compared to US & UK equivalents',
      'Welcoming multicultural society with strong Nepali & Asian diaspora',
      'Co-op degree programs with paid industrial internships'
    ],
    popularMajors: [
      'Computer Programming & Web Development',
      'Global Supply Chain & Logistics',
      'Practical & Registered Nursing',
      'Automotive & Civil Engineering Technology',
      'Hospitality & Tourism Management'
    ]
  },
  {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    pswvDuration: '1 Year Job Hunting Visa + Specified Skilled Worker (SSW / Highly Skilled Visa)',
    livingCostUSDYear: 11000,
    minBankBalanceUSD: 13500,
    partTimeWorkHours: '28 hours/week (up to 40 hrs during summer/winter vacations)',
    visaSuccessRate: '99.1%',
    topUniversitiesCount: 30,
    bannerImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Highest visa approval rate (99.1%) with COE guidance',
      'Extremely safe society with low living expenses',
      'High demand for IT engineers, hospitality, and healthcare workers',
      'MEXT and university tuition reduction scholarships up to 50%-100%'
    ],
    popularMajors: [
      'Japanese Language & Cultural Immersion',
      'Robotics & Mechanical Systems',
      'IT & Japanese Business Management',
      'Elderly Care & Healthcare Assistant',
      'Automotive Design & Engineering'
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    pswvDuration: '18 Months Post-Study Work Visa to find a job matching degree',
    livingCostUSDYear: 12500,
    minBankBalanceUSD: 13000,
    partTimeWorkHours: '120 full days or 240 half days per calendar year',
    visaSuccessRate: '93.5%',
    topUniversitiesCount: 38,
    bannerImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Zero or very low tuition fees at public research universities',
      'Europe’s largest industrial economy with high demand for engineers',
      'English-taught Master’s degrees in Engineering, IT, and Natural Sciences',
      '18-month job seeker visa with direct EU Blue Card pathway'
    ],
    popularMajors: [
      'Mechanical & Automotive Engineering',
      'Computer Science & Software Architecture',
      'Renewable Energy & Environmental Science',
      'Industrial Engineering & Logistics',
      'Mechatronics & Robotics'
    ]
  },
  {
    id: 'newzealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    pswvDuration: '3 Years for Bachelor’s/Master’s (Green List pathways available)',
    livingCostUSDYear: 14800,
    minBankBalanceUSD: 16000,
    partTimeWorkHours: '20 hours/week during term-time',
    visaSuccessRate: '96.2%',
    topUniversitiesCount: 8,
    bannerImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'All 8 state universities ranked in the top 3% globally (QS Rankings)',
      'Green List fast-track residency for Engineers, IT, and Teachers',
      'Safe, welcoming lifestyle with high student support standards',
      'Spouse work rights for Master’s and PhD degree candidates'
    ],
    popularMajors: [
      'Civil, Structural & Environmental Engineering',
      'Early Childhood Education & Teaching',
      'Software Engineering & Cyber Security',
      'Viticulture & Agricultural Science',
      'Healthcare Management'
    ]
  }
];
