import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { YattaLogo } from '@/components/YattaLogo';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-dark-950 mt-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <YattaLogo variant="full" size="sm" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Pioneering business transformation through intelligent technology. We build the systems
              that help ambitious companies scale with precision.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/30 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/30 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@yattadigital.com"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/30 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-mono uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-slate-400 hover:text-brand-400 text-sm transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-mono uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {industries.map((i) => (
                <li key={i.slug}>
                  <Link
                    to={`/industries/${i.slug}`}
                    className="text-slate-400 hover:text-brand-400 text-sm transition-colors"
                  >
                    {i.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-mono uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-brand-400 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-mono">
            © {new Date().getFullYear()} Yatta Digital Solutions. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs font-mono">
            Built with precision. Powered by intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
