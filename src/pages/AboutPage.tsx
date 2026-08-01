import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';

export function AboutPage() {
  return (
    <>
      <PageHeader
        tag="ABOUT US"
        title="We are engineers, builders, and problem-solvers."
        subtitle="Yatta Digital Solutions was founded on a simple belief: technology should work for your business, not the other way around. We build systems that are intelligent, reliable, and built to last."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Mission / Vision / Values */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To help businesses scale by building intelligent technology systems that are reliable, secure, and transformative.' },
              { icon: Eye, title: 'Our Vision', desc: 'A world where every business — regardless of size — has access to enterprise-grade technology and AI capabilities.' },
              { icon: Heart, title: 'Our Values', desc: 'Engineering excellence, transparent communication, and relentless focus on business outcomes over buzzwords.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="card-tech h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-20 bg-dark-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <span className="section-tag">OUR STORY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              From a small team to a trusted technology partner
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Yatta Digital Solutions started with a group of engineers who were frustrated by the
                gap between what technology promises and what it actually delivers. Too many businesses
                were stuck with software that did not fit, data they could not use, and manual processes
                that slowed them down.
              </p>
              <p>
                We set out to build a different kind of technology partner — one that leads with
                engineering depth, communicates clearly, and measures success by business impact rather
                than lines of code. Over the years, we have delivered over 150 projects across healthcare,
                finance, retail, manufacturing, and education.
              </p>
              <p>
                Today, we are a team of AI engineers, software architects, data specialists, and security
                experts who bring deep technical knowledge to every engagement. We do not just build
                software — we build the systems that help businesses run smarter.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12">
              <span className="section-tag">WHY YATTA</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white text-balance">
                What sets us apart
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Users, title: 'Senior-Only Team', desc: 'Every project is led by experienced engineers. No handoffs to juniors, no learning on your dime.' },
              { icon: Lightbulb, title: 'Business-First Thinking', desc: 'We start with your goals, not our tools. Every technical decision is tied to a business outcome.' },
              { icon: Award, title: 'Proven Delivery', desc: '150+ projects shipped. 99.9% uptime on systems we maintain. A track record of on-time delivery.' },
              { icon: CheckCircle2, title: 'Transparent Process', desc: 'Weekly demos, visible progress, and honest communication. You always know where your project stands.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="card-tech flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team stats */}
      <section className="relative py-20 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '25+', label: 'Team Members' },
              { value: '150+', label: 'Projects Shipped' },
              { value: '40+', label: 'Enterprise Clients' },
              { value: '8', label: 'Years of Excellence' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-blue font-mono">{stat.value}</div>
                  <div className="text-slate-500 text-sm mt-2">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
