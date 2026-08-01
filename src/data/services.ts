import type { ComponentType } from 'react';
import {
  AiMlIcon,
  AutomationIcon,
  CustomSoftwareIcon,
  CybersecurityIcon,
  DataAnalyticsIcon,
} from '@/components/ServiceIcons';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: ServiceFeature[];
  benefits: string[];
  process: { step: string; detail: string }[];
  techStack: string[];
}

export const services: Service[] = [
  {
    slug: 'ai-machine-learning',
    icon: AiMlIcon,
    title: 'AI & Machine Learning',
    tagline: 'Intelligent systems that learn, adapt, and decide.',
    description:
      'Custom AI models, natural language processing, and computer vision systems that turn raw data into automated decisions.',
    longDescription:
      'We build production-grade AI systems that integrate directly into your workflows. From predictive models that forecast demand to NLP agents that handle customer conversations, our AI solutions are designed for measurable business impact — not just demos. Every model is trained, validated, and deployed with monitoring that keeps it accurate over time.',
    features: [
      {
        title: 'Predictive Analytics',
        description:
          'Models that forecast demand, churn, and risk so you can act before problems arrive.',
      },
      {
        title: 'Natural Language Processing',
        description:
          'Document understanding, sentiment analysis, and conversational agents trained on your domain.',
      },
      {
        title: 'Computer Vision',
        description:
          'Defect detection, OCR, and visual quality control on the production line.',
      },
      {
        title: 'Recommendation Engines',
        description:
          'Personalized product and content recommendations that lift conversion.',
      },
    ],
    benefits: [
      'Reduce manual decision-making by up to 80%',
      'Forecast accuracy improvements of 30-50%',
      '24/7 automated customer interactions',
      'Data-driven insights surfaced in real time',
    ],
    process: [
      {
        step: 'Discovery',
        detail: 'We map your data sources, business goals, and success metrics.',
      },
      {
        step: 'Model Development',
        detail: 'Train, tune, and validate models against your historical data.',
      },
      {
        step: 'Integration',
        detail: 'Deploy models behind APIs that plug into your existing stack.',
      },
      {
        step: 'Monitoring',
        detail: 'Continuous tracking of drift, accuracy, and business KPIs.',
      },
    ],
    techStack: ['Python', 'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'OpenAI', 'scikit-learn'],
  },
  {
    slug: 'automation-workflows',
    icon: AutomationIcon,
    title: 'Automation & Workflows',
    tagline: 'Eliminate repetitive work with intelligent pipelines.',
    description:
      'Connect your tools, automate manual processes, and free your team to focus on work that matters.',
    longDescription:
      'Manual work slows growth. We design and build automation pipelines that connect your CRM, ERP, finance, and communication tools into a single, self-operating system. From lead routing to invoice processing, every workflow is built to be observable, auditable, and easy to modify as your business evolves.',
    features: [
      {
        title: 'Process Automation',
        description:
          'Replace copy-paste workflows with reliable, event-driven pipelines.',
      },
      {
        title: 'System Integration',
        description:
          'Connect Salesforce, HubSpot, Slack, ERPs, and 200+ tools seamlessly.',
      },
      {
        title: 'Document Automation',
        description:
          'Auto-generate contracts, invoices, and reports from structured data.',
      },
      {
        title: 'Workflow Orchestration',
        description:
          'Coordinate multi-step processes across teams and timezones.',
      },
    ],
    benefits: [
      'Save 15-40 hours per week per team',
      'Eliminate human error in critical processes',
      'Full audit trail for every automated action',
      'Faster turnaround on approvals and handoffs',
    ],
    process: [
      {
        step: 'Audit',
        detail: 'We map every manual process and identify automation candidates.',
      },
      {
        step: 'Design',
        detail: 'Architect workflows with fallbacks, retries, and human-in-the-loop steps.',
      },
      {
        step: 'Build',
        detail: 'Implement pipelines using your existing tool stack.',
      },
      {
        step: 'Optimize',
        detail: 'Monitor performance and refine over time.',
      },
    ],
    techStack: ['n8n', 'Zapier', 'Make', 'Temporal', 'Airflow', 'Node.js', 'Python'],
  },
  {
    slug: 'custom-software',
    icon: CustomSoftwareIcon,
    title: 'Custom Software Development',
    tagline: 'Software built precisely for how your business runs.',
    description:
      'Web and mobile applications engineered for performance, scalability, and long-term maintainability.',
    longDescription:
      'Off-the-shelf software forces your business to adapt to it. We build the opposite — software that adapts to you. Our applications are engineered with modern architectures, rigorous testing, and clean code that your team can maintain for years. From internal tools to customer-facing platforms, every product is built to scale.',
    features: [
      {
        title: 'Web Applications',
        description:
          'Responsive, high-performance web apps with modern frameworks.',
      },
      {
        title: 'Mobile Applications',
        description:
          'Native and cross-platform mobile apps for iOS and Android.',
      },
      {
        title: 'Internal Tools',
        description:
          'Custom dashboards and admin panels that fit your operations.',
      },
      {
        title: 'API Development',
        description:
          'RESTful and GraphQL APIs designed for security and scale.',
      },
    ],
    benefits: [
      'Software that fits your exact workflow',
      'Scalable architecture that grows with you',
      'Full ownership of code and data',
      'Reduced long-term licensing costs',
    ],
    process: [
      {
        step: 'Requirements',
        detail: 'Deep-dive workshops to define scope, users, and success criteria.',
      },
      {
        step: 'Design',
        detail: 'UX research, wireframes, and interactive prototypes.',
      },
      {
        step: 'Development',
        detail: 'Agile sprints with weekly demos and continuous integration.',
      },
      {
        step: 'Launch & Support',
        detail: 'Deployment, monitoring, and ongoing iteration.',
      },
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Next.js', 'React Native', 'Go'],
  },
  {
    slug: 'cybersecurity',
    icon: CybersecurityIcon,
    title: 'Cybersecurity & Compliance',
    tagline: 'Protect your data, your customers, and your reputation.',
    description:
      'Security assessments, threat modeling, and compliance frameworks built for regulated industries.',
    longDescription:
      'Security is not a product — it is a practice. We embed security into every layer of your technology stack, from infrastructure to application code. Our team conducts penetration testing, builds compliance frameworks for SOC 2, HIPAA, and GDPR, and implements continuous monitoring that catches threats before they become breaches.',
    features: [
      {
        title: 'Security Audits',
        description:
          'Comprehensive assessments of your infrastructure and codebase.',
      },
      {
        title: 'Compliance Frameworks',
        description:
          'SOC 2, HIPAA, GDPR, and ISO 27001 readiness and documentation.',
      },
      {
        title: 'Threat Modeling',
        description:
          'Proactive identification of attack vectors and mitigation plans.',
      },
      {
        title: 'Continuous Monitoring',
        description:
          'Real-time threat detection and automated incident response.',
      },
    ],
    benefits: [
      'Meet regulatory requirements with confidence',
      'Reduce breach risk by up to 70%',
      'Faster security incident response',
      'Build customer trust with proven compliance',
    ],
    process: [
      {
        step: 'Assess',
        detail: 'Full audit of current security posture and gaps.',
      },
      {
        step: 'Remediate',
        detail: 'Fix vulnerabilities and implement security controls.',
      },
      {
        step: 'Document',
        detail: 'Build compliance evidence and policies.',
      },
      {
        step: 'Monitor',
        detail: 'Ongoing scanning, alerting, and quarterly reviews.',
      },
    ],
    techStack: ['OWASP ZAP', 'Burp Suite', 'Vault', 'Cloudflare', 'Snyk', 'Wazuh', 'Terraform'],
  },
  {
    slug: 'data-analytics',
    icon: DataAnalyticsIcon,
    title: 'Data & Analytics',
    tagline: 'Turn raw data into decisions you can trust.',
    description:
      'Data pipelines, warehouses, and dashboards that give every team visibility into what matters.',
    longDescription:
      'Your data is only valuable if you can act on it. We build end-to-end data platforms — from ingestion pipelines to real-time dashboards — that make your data accessible, trustworthy, and actionable. Whether you need a executive KPI dashboard or a customer-facing analytics portal, we deliver systems that scale with your data volume.',
    features: [
      {
        title: 'Data Pipelines',
        description:
          'ETL/ELT pipelines that reliably move and transform data at scale.',
      },
      {
        title: 'Data Warehousing',
        description:
          'Cloud warehouses optimized for fast, cost-effective querying.',
      },
      {
        title: 'Business Intelligence',
        description:
          'Interactive dashboards and self-serve analytics for every team.',
      },
      {
        title: 'Real-Time Analytics',
        description:
          'Streaming analytics for live operational intelligence.',
      },
    ],
    benefits: [
      'Make decisions backed by data, not intuition',
      'Reduce reporting time from days to minutes',
      'Unified view across all business systems',
      'Identify trends and opportunities earlier',
    ],
    process: [
      {
        step: 'Strategy',
        detail: 'Define your data goals, KPIs, and reporting needs.',
      },
      {
        step: 'Pipeline',
        detail: 'Build reliable data ingestion and transformation flows.',
      },
      {
        step: 'Model',
        detail: 'Structure data into clear, queryable models.',
      },
      {
        step: 'Visualize',
        detail: 'Deploy dashboards and train your team to use them.',
      },
    ],
    techStack: ['dbt', 'Snowflake', 'BigQuery', 'Airflow', 'Looker', 'Metabase', 'PostgreSQL'],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
