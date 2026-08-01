import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { YattaLogo } from '@/components/YattaLogo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setIndustriesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <YattaLogo variant="full" size="sm" className="group-hover:opacity-90 transition-opacity" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link flex items-center gap-1 ${isActive ? 'active' : ''}`}
              >
                Services <ChevronDown className="w-3 h-3" />
              </NavLink>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72">
                  <div className="glass rounded-xl p-2 shadow-2xl">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <s.icon size={20} className="text-brand-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-white text-sm font-medium group-hover:text-brand-300">
                            {s.title}
                          </div>
                          <div className="text-slate-500 text-xs">{s.tagline}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <NavLink
                to="/industries"
                className={({ isActive }) => `nav-link flex items-center gap-1 ${isActive ? 'active' : ''}`}
              >
                Industries <ChevronDown className="w-3 h-3" />
              </NavLink>
              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64">
                  <div className="glass rounded-xl p-2 shadow-2xl">
                    {industries.map((i) => (
                      <Link
                        key={i.slug}
                        to={`/industries/${i.slug}`}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <i.icon className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-white text-sm font-medium group-hover:text-brand-300">
                            {i.title}
                          </div>
                          <div className="text-slate-500 text-xs">{i.tagline}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Insights
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary text-sm">
              Start a Project
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-dark-950/95 backdrop-blur-xl border-t border-white/5 max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-6 space-y-4">
            <Link to="/about" className="block text-slate-300 hover:text-brand-400 py-2">
              About
            </Link>
            <Link to="/services" className="block text-slate-300 hover:text-brand-400 py-2">
              Services
            </Link>
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="block text-slate-500 hover:text-brand-400 py-1.5 pl-4 text-sm"
              >
                {s.title}
              </Link>
            ))}
            <Link to="/industries" className="block text-slate-300 hover:text-brand-400 py-2">
              Industries
            </Link>
            {industries.map((i) => (
              <Link
                key={i.slug}
                to={`/industries/${i.slug}`}
                className="block text-slate-500 hover:text-brand-400 py-1.5 pl-4 text-sm"
              >
                {i.title}
              </Link>
            ))}
            <Link to="/blog" className="block text-slate-300 hover:text-brand-400 py-2">
              Insights
            </Link>
            <Link to="/contact" className="block text-slate-300 hover:text-brand-400 py-2">
              Contact
            </Link>
            <Link to="/contact" className="btn-primary w-full justify-center mt-4">
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
