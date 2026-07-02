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
      <div className="mx-auto max-w-3xl px-4 py-32 pt-28 text-center">
        <p className="text-neutral-400">Article not found.</p>
        <Link
          to="/articles"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-brand-orange"
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
    <article className="pb-24 pt-28 md:pt-32 bg-[var(--surface)]">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <FadeReveal>
          <Link
            to="/articles"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 transition hover:text-brand-orange"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Articles
          </Link>

          <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-neutral-100 shadow-soft">
            <img
              src={resolveImageKey(post.coverImageKey)}
              alt=""
              className="aspect-video w-full object-cover"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-wider text-neutral-400">
            <span>{post.date}</span>
            <span className="text-neutral-200">·</span>
            <span>{post.author}</span>
            <span className="text-neutral-200">·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden />
              {readTime} min read
            </span>
          </div>

          <h1 className="mt-5 heading-lg text-[var(--text-primary)]">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-neutral-100 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-500"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeReveal>

        <FadeReveal delay={0.08} className="mt-12">
          <div className="space-y-6 text-base leading-8 text-neutral-600 font-body">
            {paragraphs.map((block, i) => {
              if (block.length < 80 && !block.endsWith(".") && i > 0) {
                return (
                  <h2 key={i} className="pt-4 heading-sm !text-2xl text-[var(--text-primary)]">
                    {block}
                  </h2>
                );
              }
              return <p key={i}>{block}</p>;
            })}
          </div>
        </FadeReveal>

        <div className="mt-16 border-t border-neutral-100" />

        <FadeReveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">Share this article</p>
          <div className="flex gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 transition hover:border-brand-orange/30 hover:text-brand-orange bg-[var(--surface)]"
            >
              Share on X
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-100 px-4 py-2 text-xs font-medium text-neutral-500 transition hover:border-brand-orange/30 hover:text-brand-orange bg-[var(--surface)]"
            >
              Share on Facebook
            </a>
          </div>
        </FadeReveal>

        {related.length > 0 && (
          <FadeReveal delay={0.12} className="mt-16">
            <h2 className="heading-sm !text-2xl text-[var(--text-primary)]">More to read</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/articles/${rel.slug}`}
                  className="group flex gap-4 overflow-hidden rounded-2xl border border-neutral-100 bg-[var(--surface)] p-5 shadow-soft transition hover:shadow-card hover:border-brand-orange/20"
                >
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={resolveImageKey(rel.coverImageKey)}
                      alt=""
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-400 font-medium">{rel.date}</p>
                    <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-[var(--text-primary)] transition group-hover:text-brand-orange">
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
