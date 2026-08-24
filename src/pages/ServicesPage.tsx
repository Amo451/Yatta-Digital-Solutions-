import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { services } from '@/data/services';
import { useState } from 'react';

export function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        tag="OUR SERVICES"
        title="Technology services that transform operations."
        subtitle="From AI systems to custom software, we offer a full spectrum of technology services designed to help your business scale intelligently."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-6">
            {services.map((s, i) => {
              const isHovered = hoveredService === s.slug;
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="card-tech group block"
                    onMouseEnter={() => setHoveredService(s.slug)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-brand-500/10 flex items-center justify-center shrink-0 transition-all duration-500 group-hover:bg-brand-500/20 group-hover:scale-110 group-hover:rotate-3">
                        <s.icon 
                          size={32} 
                          className={`transition-all duration-500 ${
                            isHovered ? 'scale-125 rotate-12' : ''
                          }`}
                          aria-hidden="true" 
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold text-xl mb-2 transition-colors duration-300 group-hover:text-brand-300">
                          {s.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-4 transition-colors duration-300 group-hover:text-slate-300">
                          {s.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {s.features.slice(0, 4).map((f) => (
                            <span
                              key={f.title}
                              className="text-xs font-mono text-slate-500 px-2.5 py-1 rounded-md bg-white/5 transition-all duration-300 group-hover:bg-white/10 group-hover:text-slate-300"
                            >
                              {f.title}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex md:flex-col items-center gap-2 text-brand-400 shrink-0">
                        <span className="text-sm font-medium hidden md:block transition-colors duration-300 group-hover:text-brand-300">
                          Learn more
                        </span>
                        <ArrowRight 
                          className={`w-5 h-5 transition-all duration-500 ${
                            isHovered ? 'translate-x-1 scale-110' : ''
                          }`} 
                          aria-hidden="true" 
                        />
                      </div>
                    </div>
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
