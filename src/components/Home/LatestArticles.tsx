import { Link } from "react-router-dom";
import FadeReveal from "../FadeReveal";
import { getLatestArticles } from "../../content";
import { resolveImageKey } from "../../content/assetRegistry";

export default function LatestArticles() {
  const posts = getLatestArticles(3);

  return (
    <section className="border-t border-white/10 bg-[#111017] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeReveal>
          <div className="flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-[#CC5500]" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-copy">
              Signal from HQ
            </p>
          </div>
          <h2 className="mt-3 text-3xl font-semibold text-copy md:text-4xl">
            Stories worth the scroll
          </h2>
        </FadeReveal>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <FadeReveal key={post.id} delay={index * 0.08} className="h-full min-h-0">
              <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="relative h-44 w-full shrink-0 overflow-hidden">
                  <img
                    src={resolveImageKey(post.coverImageKey)}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex min-h-0 flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-wider text-copy">
                    {post.date} · {post.author}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-copy">{post.title}</h3>
                  <div className="mt-2 flex min-h-0 flex-1 flex-col">
                    <p className="line-clamp-2 text-sm leading-6 text-copy">{post.excerpt}</p>
                    <Link
                      to={`/articles/${post.slug}`}
                      className="mt-auto pt-6 text-sm font-semibold text-copy transition-colors hover:text-[#CC5500]"
                    >
                      Keep reading →
                    </Link>
                  </div>
                </div>
              </article>
            </FadeReveal>
          ))}
        </div>

        <FadeReveal delay={0.12} className="mt-12 flex justify-center">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-copy transition-colors hover:text-[#CC5500]"
          >
            Explore the archive →
          </Link>
        </FadeReveal>
      </div>
    </section>
  );
}
