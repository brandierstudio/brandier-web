export type BillingMode = 'project' | 'retainer';
export type ServiceTrack = 'web' | 'ai_ads' | 'bundle';

export interface PackagePlan {
  id: string;
  name: string;
  track: ServiceTrack;
  tagline: string;
  projectPrice: number; // 0 means Custom
  retainerPrice: number; // 0 means Custom
  deliverables: string[];
  turnaround: string;
  featured?: boolean;
}

export const PROMO_CODES: Record<string, number> = {
  WELCOME10: 10,
  BRANDIER15: 15,
  SPECIAL20: 20,
};

export const CONTACT_INFO = {
  email: 'brandierstudio@gmail.com',
  emailTypoDisplay: 'brandierstudio@gmail.com',
  phoneRaw: '03158878955',
  phoneInternational: '923158878955',
  phoneDisplay: '+92 315 887 8955 (03158878955)',
  mainWebsite: 'https://brandierstudio.online',
  tvWebsite: 'https://tv.brandierstudio.online/',
  founder: 'Anas Mehboob',
  role: 'CGO & Creative Director',
  location: 'Karachi, Pakistan',
};

export const PACKAGE_PLANS: PackagePlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    track: 'web',
    tagline: 'Single-viewport luxury landing page or high-impact AI ad launchpad.',
    projectPrice: 490,
    retainerPrice: 390,
    turnaround: '5–7 Days',
    deliverables: [
      'Custom "On Your Own Desire" Responsive Architecture',
      'Light & Night Mode Liquid-Glass Theme System',
      '1 AI Commercial / Hero Video Integration',
      'WhatsApp & Direct Lead Capture Funnel',
      'Core Technical SEO & Speed Optimization',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    track: 'web',
    tagline: 'Multi-section interactive brand website + conversion-engineered AI assets.',
    projectPrice: 950,
    retainerPrice: 750,
    turnaround: '10–14 Days',
    featured: true,
    deliverables: [
      'Up to 6 Custom-Designed Interactive Views',
      '3 AI UGC / Motion Graphics Ad Variations',
      'Bespoke Interactive Calculators & Micro-Motion',
      'Dual Light & Dark Mode + Custom Brand Monograms',
      'CMS / Formspree & Instant WhatsApp Routing',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    track: 'bundle',
    tagline: 'Full-scale web platform paired with our 6-format AI ad campaign engine.',
    projectPrice: 1850,
    retainerPrice: 1450,
    turnaround: '14–21 Days',
    deliverables: [
      'Full-Stack Custom Web Application or E-Commerce Flagship',
      '6 Signature AI Ad Formats (UGC, TV Spot, 3D Motion, Try-On)',
      'Custom 3D / Liquid-Metal Shader & Video Scrollytelling',
      'Platform-Ready Ad Cuts (9:16, 16:9, 1:1)',
      'Dedicated Creative Strategy with Anas Mehboob',
    ],
  },
  {
    id: 'studio',
    name: 'Studio',
    track: 'bundle',
    tagline: 'Bespoke enterprise web ecosystem & unlimited AI creative production.',
    projectPrice: 0,
    retainerPrice: 0,
    turnaround: 'Custom Timeline',
    deliverables: [
      'Unlimited Custom Web Desires & Experimental UI',
      'Full 8-Format AI Commercial & Broadcast TV Production',
      'Dedicated Design & AI Engineering Squad',
      'Custom Brand Identity, Falcon & Monogram Systems',
      'Priority 24/7 WhatsApp & Executive Slack Channel',
    ],
  },
];

export interface PromoEvaluationResult {
  valid: boolean;
  discountPercent: number;
  normalizedCode: string;
  finalPrice: number;
  message: string;
}

export function evaluatePromoCode(
  rawCode: string,
  plan: PackagePlan | null,
  mode: BillingMode
): PromoEvaluationResult {
  if (!plan) {
    return {
      valid: false,
      discountPercent: 0,
      normalizedCode: '',
      finalPrice: 0,
      message: 'Please select a package first.',
    };
  }

  const basePrice = mode === 'project' ? plan.projectPrice : plan.retainerPrice;
  const code = rawCode.trim().toUpperCase();

  if (!code) {
    return {
      valid: false,
      discountPercent: 0,
      normalizedCode: '',
      finalPrice: basePrice,
      message: `No discount code applied. ${plan.name} stays at ${formatPrice(basePrice)}.`,
    };
  }

  if (plan.id === 'studio' || basePrice === 0) {
    return {
      valid: false,
      discountPercent: 0,
      normalizedCode: code,
      finalPrice: 0,
      message: 'Studio plans are custom quoted; your code will be reviewed directly with Anas Mehboob.',
    };
  }

  const discount = PROMO_CODES[code];
  if (discount) {
    const finalPrice = Math.round(basePrice * (1 - discount / 100));
    return {
      valid: true,
      discountPercent: discount,
      normalizedCode: code,
      finalPrice,
      message: `${discount}% discount applied to ${plan.name} (${formatPrice(basePrice)} → ${formatPrice(finalPrice)}).`,
    };
  }

  return {
    valid: false,
    discountPercent: 0,
    normalizedCode: code,
    finalPrice: basePrice,
    message: 'That code is not active. Try WELCOME10, BRANDIER15, or SPECIAL20.',
  };
}

export function formatPrice(amount: number): string {
  if (!amount || amount <= 0) return 'Custom';
  return `$${amount.toLocaleString('en-US')}`;
}

export interface DesireEstimateInput {
  serviceType: 'website' | 'ai_ads' | 'both';
  pagesCount: number;
  adVideosCount: number;
  includeLightDarkMode: boolean;
  includeCustomLogoBgRemoval: boolean;
  expressDelivery: boolean;
}

export function calculateDesireEstimate(input: DesireEstimateInput): {
  estimatedTotal: number;
  recommendedTier: string;
  summaryPoints: string[];
} {
  let total = 0;
  const summaryPoints: string[] = [];

  if (input.serviceType === 'website' || input.serviceType === 'both') {
    const webBase = 350 + Math.max(1, input.pagesCount) * 95;
    total += webBase;
    summaryPoints.push(`${input.pagesCount} Bespoke Web View${input.pagesCount > 1 ? 's' : ''} (On Your Own Desire)`);
  }

  if (input.serviceType === 'ai_ads' || input.serviceType === 'both') {
    const adsBase = Math.max(1, input.adVideosCount) * 180;
    total += adsBase;
    summaryPoints.push(`${input.adVideosCount} Cinematic AI Ad Video${input.adVideosCount > 1 ? 's' : ''}`);
  }

  if (input.includeLightDarkMode) {
    total += 90;
    summaryPoints.push('Dual Night & Light Liquid-Metal Theme System');
  }

  if (input.includeCustomLogoBgRemoval) {
    total += 60;
    summaryPoints.push('Custom Monogram & Falcon Logo Suite (Transparent BG)');
  }

  if (input.expressDelivery) {
    total = Math.round(total * 1.2);
    summaryPoints.push('Priority Express Studio Delivery');
  }

  let recommendedTier = 'Starter';
  if (total >= 1600) {
    recommendedTier = 'Pro';
  } else if (total >= 750) {
    recommendedTier = 'Growth';
  }

  return {
    estimatedTotal: total,
    recommendedTier,
    summaryPoints,
  };
}

export interface LeadInquiry {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export function validateLeadInquiry(inquiry: LeadInquiry): {
  valid: boolean;
  errors: Partial<Record<keyof LeadInquiry, string>>;
} {
  const errors: Partial<Record<keyof LeadInquiry, string>> = {};

  if (!inquiry.name || inquiry.name.trim().length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!inquiry.email || !emailRegex.test(inquiry.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!inquiry.message || inquiry.message.trim().length < 10) {
    errors.message = 'Please share at least 10 characters about your website or AI ad desire.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildWhatsAppUrl(text: string): string {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${CONTACT_INFO.phoneInternational}?text=${encoded}`;
}
