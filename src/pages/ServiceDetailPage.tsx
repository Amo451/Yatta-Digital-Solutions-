import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Cpu } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { getServiceBySlug, services } from '@/data/services';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug ?? '');

  if (!service) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-slate-400 mb-4">Service not found.</p>
        <Link to="/services" className="btn-outline">
          <ArrowLeft className="w-4 h-4" /> Back to Services
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
                <div className="card-tech flex items-start gap-4 h-full">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5 text-brand-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{f.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{f.description}</p>
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
                <div className="flex items-center gap-3 p-4 rounded-lg glass">
                  <Check className="w-5 h-5 text-brand-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{b}</span>
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
                <div className="relative">
                  <div className="text-4xl font-bold font-mono text-brand-500/20 mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{p.step}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.detail}</p>
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
                  className="px-4 py-2 glass rounded-lg text-slate-300 font-mono text-sm hover:text-brand-400 hover:border-brand-500/30 transition-all"
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
            {otherServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link to={`/services/${s.slug}`} className="card-tech group block h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <s.icon size={20} className="shrink-0" />
                    <h3 className="text-white font-semibold group-hover:text-brand-300 transition-colors">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{s.description}</p>
                  <span className="text-brand-400 text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
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
