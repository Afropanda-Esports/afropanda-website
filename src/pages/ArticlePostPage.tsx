import { Link, useParams } from "react-router-dom";
import FadeReveal from "../components/FadeReveal";
import { getArticleBySlug, getLatestArticles } from "../content";
import { resolveImageKey } from "../content/assetRegistry";
import { Clock, ArrowLeft } from "lucide-react";

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default function ArticlePostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getArticleBySlug(slug) : undefined;
  const related = getLatestArticles(3).filter((a) => a.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-32 pt-28 text-center text-copy">
        <p className="text-copy/60">Article not found.</p>
        <Link
          to="/articles"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-copy hover:text-[#CC5500]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to articles
        </Link>
      </div>
    );
  }

  const readTime = estimateReadingTime(post.content);
  const paragraphs = post.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <article className="pb-24 pt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeReveal>
          {/* Back link */}
          <Link
            to="/articles"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-copy/60 transition hover:text-[#CC5500]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Articles
          </Link>

          {/* Cover image */}
          <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10">
            <img
              src={resolveImageKey(post.coverImageKey)}
              alt=""
              className="aspect-video w-full object-cover"
            />
          </div>

          {/* Meta row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-wider text-copy/50">
            <span>{post.date}</span>
            <span className="text-copy/20">·</span>
            <span>{post.author}</span>
            <span className="text-copy/20">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden />
              {readTime} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-4 text-3xl font-bold leading-tight text-copy md:text-4xl">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-copy/70"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeReveal>

        {/* Article body */}
        <FadeReveal delay={0.08} className="mt-10">
          <div className="space-y-6 text-base leading-8 text-copy/85">
            {paragraphs.map((block, i) => {
              // Detect heading-like lines (short, no full stop at end)
              if (block.length < 80 && !block.endsWith(".") && i > 0) {
                return (
                  <h2
                    key={i}
                    className="pt-4 text-xl font-semibold text-copy"
                  >
                    {block}
                  </h2>
                );
              }
              return (
                <p key={i} className="font-maitree">
                  {block}
                </p>
              );
            })}
          </div>
        </FadeReveal>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Share row */}
        <FadeReveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-copy/50">Share this article</p>
          <div className="flex gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-copy/70 transition hover:border-[#CC5500]/40 hover:text-[#CC5500]"
            >
              Share on X
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-copy/70 transition hover:border-[#CC5500]/40 hover:text-[#CC5500]"
            >
              Share on Facebook
            </a>
          </div>
        </FadeReveal>

        {/* Related articles */}
        {related.length > 0 && (
          <FadeReveal delay={0.12} className="mt-16">
            <h2 className="text-lg font-semibold text-copy">More to read</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/articles/${rel.slug}`}
                  className="group flex gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#CC5500]/20 hover:bg-white/[0.05]"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={resolveImageKey(rel.coverImageKey)}
                      alt=""
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-copy/50">{rel.date}</p>
                    <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-copy transition group-hover:text-[#CC5500]">
                      {rel.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </FadeReveal>
        )}
      </div>
    </article>
  );
}
