import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  HeartPulse,
  Banknote,
  ShoppingBag,
  Factory,
  GraduationCap,
} from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { industries } from '@/data/industries';
import { useState } from 'react';

// Map industry slugs to their icons
const industryIcons: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  healthcare: HeartPulse,
  finance: Banknote,
  retail: ShoppingBag,
  manufacturing: Factory,
  education: GraduationCap,
};

// Fallback icon component - used if an icon is missing
// This must accept the `size` prop!
const FallbackIcon = ({ className = '', size = 28 }: { className?: string; size?: number }) => {
  const sizeClass = size === 28 ? 'w-7 h-7' : 'w-8 h-8';
  return <div className={`${sizeClass} bg-brand-400/20 rounded-full animate-pulse ${className}`} />;
};

export function IndustriesPage() {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

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
          {industries && industries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, i) => {
                // Use fallback if icon doesn't exist
                const Icon = industryIcons[ind.slug] || FallbackIcon;
                const isHovered = hoveredIndustry === ind.slug;
                
                return (
                  <Reveal key={ind.slug} delay={i * 80}>
                    <Link
                      to={`/industries/${ind.slug}`}
                      className="card-tech group block h-full"
                      onMouseEnter={() => setHoveredIndustry(ind.slug)}
                      onMouseLeave={() => setHoveredIndustry(null)}
                    >
                      <div className="w-14 h-14 rounded-2xl bg-brand-500/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-brand-500/20 group-hover:scale-110 group-hover:rotate-3">
                        <Icon
                          size={28}
                          className={`text-brand-400 transition-all duration-500 ${
                            isHovered ? 'scale-125 rotate-12 text-brand-300' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-2 transition-colors duration-300 group-hover:text-brand-300">
                        {ind.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 transition-colors duration-300 group-hover:text-slate-300">
                        {ind.description}
                      </p>
                      <div className="flex items-center gap-2 text-brand-400 text-sm">
                        Explore solutions
                        <ArrowRight
                          className={`w-4 h-4 transition-all duration-500 ${
                            isHovered ? 'translate-x-1 scale-110' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-400">Loading industries...</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
