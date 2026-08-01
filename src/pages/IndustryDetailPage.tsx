import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Lightbulb } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { getIndustryBySlug } from '@/data/industries';

export function IndustryDetailPage() {
  const { slug } = useParams();
  const industry = getIndustryBySlug(slug ?? '');

  if (!industry) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-slate-400 mb-4">Industry not found.</p>
        <Link to="/industries" className="btn-outline">
          <ArrowLeft className="w-4 h-4" /> Back to Industries
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        tag={industry.title.toUpperCase()}
        title={industry.tagline}
        subtitle={industry.description}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Industries', to: '/industries' },
          { label: industry.title },
        ]}
      />

      {/* Challenges & Solutions */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Challenges we solve
            </h2>
          </Reveal>
          <div className="space-y-6">
            {industry.challenges.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="card-tech">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                          <span className="text-red-400 font-mono text-sm font-bold">!</span>
                        </div>
                        <h3 className="text-white font-semibold">{c.title}</h3>
                      </div>
                    </div>
                    <div className="md:w-2/3 md:border-l md:border-white/5 md:pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Lightbulb className="w-5 h-5 text-brand-400" />
                        <span className="text-brand-400 text-sm font-mono uppercase tracking-wide">
                          Our Solution
                        </span>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="relative py-20 bg-dark-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Outcomes we deliver</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.outcomes.map((o, i) => (
              <Reveal key={o} delay={i * 60}>
                <div className="flex items-center gap-3 p-4 rounded-lg glass">
                  <Check className="w-5 h-5 text-brand-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant services */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Services for this industry
            </h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {industry.services.map((s) => (
              <Link
                key={s}
                to="/services"
                className="px-5 py-3 glass rounded-xl text-slate-300 hover:text-brand-400 hover:border-brand-500/30 transition-all inline-flex items-center gap-2 group"
              >
                {s}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
