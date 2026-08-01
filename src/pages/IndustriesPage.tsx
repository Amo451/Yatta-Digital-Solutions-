import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { industries } from '@/data/industries';

export function IndustriesPage() {
  return (
    <>
      <PageHeader
        tag="INDUSTRIES"
        title="Domain expertise that drives results."
        subtitle="We bring deep industry knowledge to every engagement, tailoring our technology solutions to the unique challenges of each sector we serve."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
      />

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 80}>
                <Link to={`/industries/${ind.slug}`} className="card-tech group block h-full">
                  <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-5 group-hover:bg-brand-500/20 transition-colors">
                    <ind.icon className="w-7 h-7 text-brand-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-brand-300 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{ind.description}</p>
                  <div className="flex items-center gap-2 text-brand-400 text-sm">
                    Explore solutions
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
