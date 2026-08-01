export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-production-ai-systems',
    title: 'Building AI Systems That Actually Work in Production',
    excerpt:
      'Most AI projects fail at deployment, not development. Here is the framework we use to ship models that stay accurate in the real world.',
    category: 'AI & Machine Learning',
    date: '2025-11-12',
    readTime: '8 min read',
    author: 'Yatta Engineering Team',
    content: [
      'The gap between an AI model that works in a notebook and one that works in production is enormous. In our experience, 80% of AI initiatives stall at the prototype stage — not because the models are bad, but because the infrastructure around them is missing.',
      'The first principle is monitoring. A model is not done when it is deployed; it is done when it has been monitored for drift, accuracy, and bias over weeks of real traffic. We instrument every model with dashboards that track prediction distributions, input data shifts, and business KPIs. When accuracy drops, the team knows within hours, not quarters.',
      'The second principle is fallback. Production AI systems must degrade gracefully. If a model is uncertain or unavailable, the system should fall back to a rule-based path, not crash. We design every AI feature with a deterministic fallback so the user experience never breaks.',
      'The third principle is iteration. Real-world data changes. Customer behavior shifts. A model that was accurate in January may be stale by July. We build retraining pipelines that let models refresh on a schedule, with automated validation gates that prevent a bad model from replacing a good one.',
      'Finally, business alignment matters. A model is only valuable if it changes a decision. Before we build anything, we define the decision the model will influence and the metric that will measure its impact. If we cannot draw a line from the model to a business outcome, we do not build it.',
    ],
  },
  {
    slug: 'automation-first-business-operations',
    title: 'The Automation-First Approach to Business Operations',
    excerpt:
      'How to identify, prioritize, and implement automation across your organization without disrupting existing workflows.',
    category: 'Automation',
    date: '2025-10-28',
    readTime: '6 min read',
    author: 'Yatta Engineering Team',
    content: [
      'Automation is not about replacing people — it is about removing the work that prevents people from doing their best. The most successful automation initiatives start with an audit of where time is actually spent.',
      'We begin every engagement with a two-week process audit. We sit with teams, watch how they work, and log every manual handoff, copy-paste, and approval step. The result is a heatmap of repetitive work that reveals which processes are worth automating first.',
      'Prioritization is critical. Not every manual process should be automated. We score each candidate on three axes: time saved, error reduction, and complexity to automate. High-impact, low-complexity processes go first. High-complexity processes get a business case before any code is written.',
      'The technical implementation is the easy part. The hard part is change management. We involve the teams who will use the automation from day one, build in human-in-the-loop checkpoints for critical decisions, and make every workflow observable so anyone can see what happened and why.',
      'The result is not a single automation — it is an automation capability. Once a team sees what is possible, they start identifying opportunities themselves. That is when automation becomes a culture, not a project.',
    ],
  },
  {
    slug: 'data-platform-architecture-guide',
    title: 'A Practical Guide to Modern Data Platform Architecture',
    excerpt:
      'From ingestion to dashboard, here is how we design data platforms that scale reliably without becoming a maintenance nightmare.',
    category: 'Data & Analytics',
    date: '2025-10-10',
    readTime: '10 min read',
    author: 'Yatta Engineering Team',
    content: [
      'A data platform is not a single tool — it is a layered architecture. Each layer has a job, and when the layers are clean, the platform is easy to maintain and extend.',
      'The ingestion layer is where most platforms fail. Batch pipelines are simple but slow. Streaming pipelines are fast but complex. We default to batch for 80% of use cases and reserve streaming for use cases where latency actually matters — operational alerts, fraud detection, real-time personalization.',
      'The storage layer is where cost and performance trade off. We separate raw data (cheap, immutable) from transformed data (modeled, query-optimized). This separation lets you reprocess historical data without rebuilding your entire pipeline.',
      'The transformation layer is where business logic lives. We use dbt to define transformations as code — version-controlled, tested, and documented. Every metric has a lineage so anyone can trace a dashboard number back to its source.',
      'The consumption layer is what users actually see. We build dashboards for executives, self-serve tools for analysts, and APIs for applications. The key is matching the interface to the user: executives need answers, analysts need flexibility, applications need reliability.',
      'The governance layer ties it all together. Data quality checks, access controls, and audit logs are not afterthoughts — they are part of the architecture from day one.',
    ],
  },
  {
    slug: 'security-by-design-principles',
    title: 'Security by Design: 7 Principles Every Team Should Adopt',
    excerpt:
      'Security is not a checkpoint at the end of a project. It is a set of principles applied from the first line of code.',
    category: 'Cybersecurity',
    date: '2025-09-22',
    readTime: '7 min read',
    author: 'Yatta Engineering Team',
    content: [
      'Most security vulnerabilities are not exotic zero-days. They are the result of teams treating security as a final review rather than a daily practice. Here are the principles we embed in every project.',
      'Principle one: least privilege. Every service, user, and process should have the minimum permissions required to do its job. We default to deny and grant access only when there is a concrete need.',
      'Principle two: encrypt everything. Data at rest, data in transit, data in use where possible. Encryption is cheap; breaches are not. We use managed KMS systems so key rotation is automatic.',
      'Principle three: assume breach. Design systems that limit damage when — not if — an attacker gets in. Network segmentation, blast-radius limits, and anomaly detection are standard, not optional.',
      'Principle four: dependency hygiene. Most codebases have hundreds of dependencies. We scan for known vulnerabilities, pin versions, and remove unused packages. A dependency you do not use is a risk you do not need.',
      'Principle five: logging and observability. You cannot respond to what you cannot see. Every authentication event, access change, and data export is logged and retained. Logs are shipped to a separate system so an attacker cannot cover their tracks.',
      'Principle six: regular testing. We run automated security scans on every commit and conduct manual penetration tests quarterly. Security is a habit, not a one-time audit.',
      'Principle seven: compliance as code. Policies, controls, and evidence should be version-controlled and automated. When an auditor asks, you should be able to generate a report in minutes, not weeks.',
    ],
  },
  {
    slug: 'choosing-tech-stack-2025',
    title: 'Choosing the Right Tech Stack in 2025: A Decision Framework',
    excerpt:
      'React or Vue? Postgres or Mongo? Serverless or containers? The answer is always "it depends" — here is how we decide.',
    category: 'Custom Software',
    date: '2025-09-05',
    readTime: '9 min read',
    author: 'Yatta Engineering Team',
    content: [
      'Technology choices are reversible but expensive. Every stack decision shapes your team, your hiring, and your velocity for years. We use a simple framework to make these decisions deliberately.',
      'Start with the team. The best technology is the one your team can use well. A stack that no one on your team has experience with will cost you months of ramp time. We bias toward technologies the team already knows, unless there is a compelling reason to change.',
      'Next, consider the problem. A content site does not need the same architecture as a real-time trading platform. We map the requirements — latency, throughput, consistency, complexity — and choose the simplest stack that meets them.',
      'Factor in the ecosystem. A technology with a large community has more libraries, more answers on Stack Overflow, and more developers you can hire. We weight ecosystem health heavily for long-term projects.',
      'Consider the operational cost. Some technologies are cheap to build but expensive to run. Serverless is great for sporadic traffic but costly at scale. Containers require more setup but offer better cost control at high volume.',
      'Finally, plan for change. We avoid lock-in where possible. We prefer open standards over proprietary APIs, and we architect systems so individual components can be swapped without rewriting everything.',
      'The right stack is not the newest or the trendiest. It is the one that lets your team ship reliably, hire easily, and adapt as the business grows.',
    ],
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
