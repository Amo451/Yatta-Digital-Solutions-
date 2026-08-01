import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
          Ready to build something intelligent?
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Let's talk about how we can transform your operations with technology that scales.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary">
            Start a Project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/services" className="btn-outline">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
