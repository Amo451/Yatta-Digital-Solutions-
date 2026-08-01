import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { blogPosts } from '@/data/blog';

export function BlogPage() {
  return (
    <>
      <PageHeader
        tag="INSIGHTS"
        title="Engineering insights and industry perspectives."
        subtitle="Deep dives into AI, automation, data engineering, and security — written by the engineers who build these systems every day."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Insights' }]}
      />

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <Link to={`/blog/${post.slug}`} className="card-tech group block h-full flex flex-col">
                  <span className="text-xs font-mono text-brand-400 mb-3 block">{post.category}</span>
                  <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-brand-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
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
