import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Cpu } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { getServiceBySlug, services } from '@/data/services';
import { useState } from 'react';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug ?? '');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-slate-400 mb-4">Service not found.</p>
        <Link to="/services" className="btn-outline inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Services
        </Link>
      </div>
    );
  }

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        tag={service.title.toUpperCase()}
        title={service.tagline}
        subtitle={service.longDescription}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />

      {/* Features */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">What we deliver</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="card-tech flex items-start gap-4 h-full group">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-brand-500/20 group-hover:scale-110 group-hover:rotate-3">
                    <Cpu className="w-5 h-5 text-brand-400 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 transition-colors duration-300 group-hover:text-brand-300">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-300">{f.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-20 bg-dark-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Business impact</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 60}>
                <div className="flex items-center gap-3 p-4 rounded-lg glass group transition-all duration-300 hover:bg-white/5">
                  <Check className="w-5 h-5 text-brand-400 shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" aria-hidden="true" />
                  <span className="text-slate-300 text-sm transition-colors duration-300 group-hover:text-slate-200">{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">How we engage</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 100}>
                <div className="relative group">
                  <div className="text-4xl font-bold font-mono text-brand-500/20 mb-3 transition-all duration-500 group-hover:text-brand-500/40 group-hover:scale-110 group-hover:translate-x-2">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-white font-semibold mb-2 transition-colors duration-300 group-hover:text-brand-300">{p.step}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-slate-300">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="relative py-20 bg-dark-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Technology we use</h2>
            <div className="flex flex-wrap gap-3">
              {service.techStack.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 glass rounded-lg text-slate-300 font-mono text-sm hover:text-brand-400 hover:border-brand-500/30 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Explore other services</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s, i) => {
              const isHovered = hoveredService === s.slug;
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="card-tech group block h-full"
                    onMouseEnter={() => setHoveredService(s.slug)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-brand-500/20 group-hover:scale-110 group-hover:rotate-3">
                        <s.icon
                          size={20}
                          className={`text-brand-400 transition-all duration-500 ${
                            isHovered ? 'scale-125 rotate-12' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-white font-semibold transition-colors duration-300 group-hover:text-brand-300">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-3 transition-colors duration-300 group-hover:text-slate-300">
                      {s.description}
                    </p>
                    <span className="text-brand-400 text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      Learn more <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" aria-hidden="true" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
