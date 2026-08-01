import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  to?: string;
}

export function PageHeader({
  tag,
  title,
  subtitle,
  crumbs,
}: {
  tag: string;
  title: string;
  subtitle: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="relative max-w-5xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6 font-mono">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              {c.to ? (
                <Link to={c.to} className="hover:text-brand-400 transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-slate-300">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight className="w-3 h-3" />}
            </span>
          ))}
        </nav>
        <span className="section-tag">{tag}</span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance leading-tight">
          {title}
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
