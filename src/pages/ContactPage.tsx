import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        tag="CONTACT"
        title="Let's build something intelligent together."
        subtitle="Tell us about your project, your goals, or the problem you are trying to solve. We will get back to you within one business day."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <Reveal>
                <div className="card-tech">
                  <Mail className="w-6 h-6 text-brand-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <p className="text-slate-400 text-sm">hello@yattadigital.com</p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="card-tech">
                  <Phone className="w-6 h-6 text-brand-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">Call Us</h3>
                  <p className="text-slate-400 text-sm">0769590032</p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="card-tech">
                  <MapPin className="w-6 h-6 text-brand-400 mb-3" />
                  <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                  <p className="text-slate-400 text-sm">
                    Athi River, Mavoko
                    <br />
                    Tech District, TD 10001
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Reveal delay={100}>
                {submitted ? (
                  <div className="card-tech flex flex-col items-center justify-center text-center py-16">
                    <CheckCircle2 className="w-16 h-16 text-brand-400 mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Message received</h3>
                    <p className="text-slate-400 max-w-md">
                      Thank you for reaching out. Our team will review your message and get back to
                      you within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="card-tech space-y-5">
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 text-sm font-medium mb-2">Company</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all"
                          placeholder="Company name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
