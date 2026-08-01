import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cpu,
  GitBranch,
  Layers,
  Zap,
  ShieldCheck,
  TrendingUp,
  Quote,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { blogPosts } from '@/data/blog';
import {
  RocketStatIcon,
  GlobeUsersStatIcon,
  UptimeStatIcon,
  AwardStatIcon,
} from '@/components/StatIcons';

export function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-hero-gradient" />
        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-700/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300 tracking-wide">
                SYSTEM ONLINE — ENGINEERING INTELLIGENT SOLUTIONS
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6 text-balance animate-fade-up">
              We build the <span className="text-gradient-blue">technology</span> that
              <br className="hidden md:block" /> powers your business.
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '100ms' }}>
              Yatta Digital Solutions delivers AI-powered systems, intelligent automation, and custom
              software that helps ambitious companies scale with precision and confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <Link to="/contact" className="btn-primary">
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-outline">
                Explore Capabilities
              </Link>
            </div>

            {/* Tech ticker */}
            <div className="mt-16 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <p className="text-xs font-mono text-slate-600 mb-4 tracking-widest uppercase">
                Technology Stack
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {['React', 'TypeScript', 'Python', 'PyTorch', 'Go', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Terraform'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 glass rounded-md text-sm text-slate-400 font-mono hover:text-brand-400 hover:border-brand-500/30 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-brand-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative border-y border-white/5 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Projects Delivered', Icon: RocketStatIcon },
              { value: '40+', label: 'Enterprise Clients', Icon: GlobeUsersStatIcon },
              { value: '99.9%', label: 'System Uptime', Icon: UptimeStatIcon },
              { value: '8 yrs', label: 'Average Experience', Icon: AwardStatIcon },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="flex flex-col items-center text-center gap-3">
                  <stat.Icon size={88} />
                  <div className="text-3xl md:text-4xl font-bold text-white font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                  <div className="w-8 h-0.5 bg-brand-500 rounded-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise / Core capabilities */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <span className="section-tag">CORE CAPABILITIES</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
                Engineering expertise across the full stack
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                From AI models to infrastructure, we bring deep technical knowledge to every layer
                of your technology stack.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: 'AI Engineering',
                desc: 'Model design, training, deployment, and monitoring for production-grade AI systems.',
              },
              {
                icon: Layers,
                title: 'System Architecture',
                desc: 'Scalable, event-driven architectures designed for reliability and growth.',
              },
              {
                icon: Zap,
                title: 'Process Automation',
                desc: 'Intelligent workflows that eliminate manual work and reduce errors.',
              },
              {
                icon: ShieldCheck,
                title: 'Security Engineering',
                desc: 'Security embedded in every layer, from infrastructure to application code.',
              },
              {
                icon: TrendingUp,
                title: 'Data Engineering',
                desc: 'Pipelines, warehouses, and analytics that make data actionable.',
              },
              {
                icon: GitBranch,
                title: 'DevOps & Cloud',
                desc: 'CI/CD, infrastructure as code, and cloud-native deployments.',
              },
            ].map((cap, i) => (
              <Reveal key={cap.title} delay={i * 80}>
                <div className="card-tech group">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4 group-hover:bg-brand-500/20 transition-colors">
                    <cap.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{cap.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="relative py-24 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <Reveal>
              <span className="section-tag">WHAT WE DO</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
                Services built for scale
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/services"
                className="text-brand-400 hover:text-brand-300 text-sm font-medium inline-flex items-center gap-2 group"
              >
                View all services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link to={`/services/${s.slug}`} className="card-tech group block h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                      <s.icon size={24} />
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.techStack.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs font-mono text-slate-500 px-2 py-1 rounded bg-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {services.slice(3).map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link to={`/services/${s.slug}`} className="card-tech group block h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 transition-colors">
                      <s.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-white font-semibold">{s.title}</h3>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-brand-400 transition-colors" />
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag">HOW WE WORK</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
                A proven approach to complex problems
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                We combine engineering rigor with business understanding to deliver systems that work.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Discover', desc: 'We dive deep into your business, data, and goals to understand the real problem.' },
              { num: '02', title: 'Design', desc: 'We architect solutions with scalability, security, and maintainability built in.' },
              { num: '03', title: 'Build', desc: 'Agile sprints with weekly demos, continuous integration, and transparent progress.' },
              { num: '04', title: 'Scale', desc: 'We deploy, monitor, and iterate — optimizing for long-term performance.' },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 120}>
                <div className="relative">
                  <div className="text-5xl font-bold font-mono text-brand-500/20 mb-4">{step.num}</div>
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 -right-3 w-6 h-px bg-glow-line" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="relative py-24 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-tag">INDUSTRIES WE SERVE</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
                Deep domain expertise
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 80}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="card-tech group flex flex-col items-center text-center h-full"
                >
                  <ind.icon className="w-8 h-8 text-brand-400 mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white text-sm font-medium">{ind.title}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <span className="section-tag">CLIENT VOICES</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
                Trusted by teams who ship
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'Yatta rebuilt our entire data platform in four months. We went from weekly reports to real-time dashboards overnight.',
                author: 'VP of Operations',
                company: 'Healthcare Network',
              },
              {
                quote: 'Their AI team delivered a fraud detection model that cut our false positives by 60%. The ROI was immediate.',
                author: 'Chief Risk Officer',
                company: 'Financial Services',
              },
              {
                quote: 'The automation workflows Yatta built saved us 30 hours a week. Our team finally focuses on strategy, not data entry.',
                author: 'Director of Operations',
                company: 'E-Commerce Platform',
              },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="card-tech h-full flex flex-col">
                  <Quote className="w-8 h-8 text-brand-500/30 mb-4" />
                  <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">"{t.quote}"</p>
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-white text-sm font-medium">{t.author}</div>
                    <div className="text-slate-500 text-xs">{t.company}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest insights */}
      <section className="relative py-24 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <Reveal>
              <span className="section-tag">LATEST INSIGHTS</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
                Thinking out loud
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                to="/blog"
                className="text-brand-400 hover:text-brand-300 text-sm font-medium inline-flex items-center gap-2 group"
              >
                Read all insights
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link to={`/blog/${post.slug}`} className="card-tech group block h-full">
                  <span className="text-xs font-mono text-brand-400 mb-3 block">{post.category}</span>
                  <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-brand-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
