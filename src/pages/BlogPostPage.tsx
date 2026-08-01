import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { PageHeader } from '@/components/PageHeader';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { getBlogPostBySlug, blogPosts } from '@/data/blog';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug ?? '');

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-slate-400 mb-4">Article not found.</p>
        <Link to="/blog" className="btn-outline">
          <ArrowLeft className="w-4 h-4" /> Back to Insights
        </Link>
      </div>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        tag={post.category.toUpperCase()}
        title={post.title}
        subtitle={post.excerpt}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Insights', to: '/blog' },
          { label: post.title },
        ]}
      />

      {/* Meta */}
      <section className="relative py-6 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />{' '}
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="relative py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-6">
            {post.content.map((para, i) => (
              <Reveal key={i} delay={i * 40}>
                <p className="text-slate-300 text-lg leading-[1.8]">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      {/* Other posts */}
      <section className="relative py-20 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Keep reading</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPosts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link to={`/blog/${p.slug}`} className="card-tech group block h-full">
                  <span className="text-xs font-mono text-brand-400 mb-3 block">{p.category}</span>
                  <h3 className="text-white font-semibold mb-3 group-hover:text-brand-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{p.excerpt}</p>
                  <span className="text-brand-400 text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
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
