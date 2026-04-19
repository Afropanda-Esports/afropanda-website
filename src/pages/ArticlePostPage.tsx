import { Link, useParams } from "react-router-dom";
import FadeReveal from "../components/FadeReveal";
import { getArticleBySlug } from "../content";
import { resolveImageKey } from "../content/assetRegistry";

export default function ArticlePostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getArticleBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-32 pt-28 text-center text-copy">
        <p className="text-copy">Article not found.</p>
        <Link to="/articles" className="mt-4 inline-block text-copy hover:text-[#CC5500]">
          ← Back to articles
        </Link>
      </div>
    );
  }

  const paragraphs = post.content.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);

  return (
    <article className="pb-20 pt-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeReveal>
          <Link to="/articles" className="text-sm font-medium text-copy hover:text-[#CC5500]">
            ← Articles
          </Link>
          <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10">
            <img
              src={resolveImageKey(post.coverImageKey)}
              alt=""
              className="aspect-video w-full object-cover"
            />
          </div>
          <p className="mt-6 text-sm uppercase tracking-wider text-copy">
            {post.date} · {post.author}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-copy md:text-4xl">{post.title}</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-3 py-1 text-xs text-copy"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeReveal>

        <FadeReveal delay={0.08} className="mt-10 max-w-none">
          <div className="space-y-5 text-base leading-8 text-copy">
            {paragraphs.map((block, i) => (
              <p key={i}>{block}</p>
            ))}
          </div>
        </FadeReveal>
      </div>
    </article>
  );
}
