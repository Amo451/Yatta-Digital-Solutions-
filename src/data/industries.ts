import type { ComponentType } from 'react';
import {
  HeartPulse,
  Banknote,
  ShoppingBag,
  Factory,
  GraduationCap,
} from 'lucide-react';

export interface IndustryChallenge {
  title: string;
  solution: string;
}

export interface Industry {
  slug: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  description: string;
  challenges: IndustryChallenge[];
  outcomes: string[];
  services: string[];
}

export const industries: Industry[] = [
  {
    slug: 'healthcare',
    icon: ({ className = '' }: { className?: string }) => <HeartPulse className={className} />,
    title: 'Healthcare',
    tagline: 'Better outcomes through intelligent systems.',
    description:
      'From patient engagement platforms to clinical decision support, we build HIPAA-compliant systems that help providers deliver better care while reducing administrative burden.',
    challenges: [
      {
        title: 'Administrative overload',
        solution:
          'Automated scheduling, billing, and documentation workflows that give clinicians their time back.',
      },
      {
        title: 'Fragmented patient data',
        solution:
          'Unified data platforms that bring EHR, imaging, and patient-reported data into one view.',
      },
      {
        title: 'Clinical decision support',
        solution:
          'AI models that surface relevant insights and flag risks at the point of care.',
      },
    ],
    outcomes: [
      '40% reduction in administrative hours',
      'Improved patient satisfaction scores',
      'Faster clinical documentation',
      'HIPAA-compliant data infrastructure',
    ],
    services: ['AI & Machine Learning', 'Custom Software', 'Cybersecurity', 'Data & Analytics'],
  },
  {
    slug: 'finance',
    icon: ({ className = '' }: { className?: string }) => <Banknote className={className} />,
    title: 'Finance & Banking',
    tagline: 'Precision, security, and speed for financial services.',
    description:
      'We build secure, compliant platforms for lending, payments, wealth management, and risk analysis — engineered to meet the strictest regulatory standards.',
    challenges: [
      {
        title: 'Fraud detection',
        solution:
          'Real-time ML models that flag suspicious transactions before they settle.',
      },
      {
        title: 'Regulatory compliance',
        solution:
          'Automated compliance reporting and audit trails for SOX, AML, and KYC.',
      },
      {
        title: 'Customer experience',
        solution:
          'Digital onboarding and self-service portals that reduce time-to-account.',
      },
    ],
    outcomes: [
      '60% faster loan processing',
      'Real-time fraud detection',
      'Automated regulatory reporting',
      'SOC 2 Type II compliant infrastructure',
    ],
    services: ['AI & Machine Learning', 'Custom Software', 'Cybersecurity', 'Automation'],
  },
  {
    slug: 'retail',
    icon: ({ className = '' }: { className?: string }) => <ShoppingBag className={className} />,
    title: 'Retail & E-Commerce',
    tagline: 'Personalized experiences that convert and retain.',
    description:
      'We build e-commerce platforms, inventory systems, and recommendation engines that help retailers deliver personalized shopping experiences at scale.',
    challenges: [
      {
        title: 'Inventory optimization',
        solution:
          'Demand forecasting models that prevent stockouts and reduce overstock.',
      },
      {
        title: 'Personalization',
        solution:
          'Recommendation engines that surface the right product to the right shopper.',
      },
      {
        title: 'Omnichannel operations',
        solution:
          'Unified systems that sync inventory, orders, and customer data across channels.',
      },
    ],
    outcomes: [
      '25% increase in conversion rate',
      '30% reduction in stockouts',
      'Unified omnichannel inventory',
      'AI-driven product recommendations',
    ],
    services: ['AI & Machine Learning', 'Custom Software', 'Data & Analytics', 'Automation'],
  },
  {
    slug: 'manufacturing',
    icon: ({ className = '' }: { className?: string }) => <Factory className={className} />,
    title: 'Manufacturing',
    tagline: 'Smart factories powered by connected data.',
    description:
      'We build IoT-enabled monitoring, predictive maintenance, and quality control systems that increase uptime and reduce waste on the production floor.',
    challenges: [
      {
        title: 'Equipment downtime',
        solution:
          'Predictive maintenance models that flag failures before they happen.',
      },
      {
        title: 'Quality control',
        solution:
          'Computer vision systems that detect defects on the production line in real time.',
      },
      {
        title: 'Supply chain visibility',
        solution:
          'Connected data platforms that track materials from supplier to shipment.',
      },
    ],
    outcomes: [
      '35% reduction in unplanned downtime',
      'Real-time defect detection',
      'Full supply chain traceability',
      'Data-driven production scheduling',
    ],
    services: ['AI & Machine Learning', 'Automation', 'Data & Analytics', 'Custom Software'],
  },
  {
    slug: 'education',
    icon: ({ className = '' }: { className?: string }) => <GraduationCap className={className} />,
    title: 'Education',
    tagline: 'Adaptive learning for every student.',
    description:
      'We build learning management platforms, adaptive learning systems, and student analytics tools that help institutions personalize education at scale.',
    challenges: [
      {
        title: 'Personalized learning',
        solution:
          'Adaptive learning engines that adjust content to each student pace.',
      },
      {
        title: 'Student retention',
        solution:
          'Early-warning analytics that identify at-risk students before they disengage.',
      },
      {
        title: 'Administrative efficiency',
        solution:
          'Automated grading, scheduling, and reporting workflows for faculty.',
      },
    ],
    outcomes: [
      'Improved student engagement',
      'Early identification of at-risk students',
      '50% reduction in grading time',
      'Scalable learning platform architecture',
    ],
    services: ['AI & Machine Learning', 'Custom Software', 'Data & Analytics', 'Automation'],
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined =>
  industries.find((i) => i.slug === slug);
