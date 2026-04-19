import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import FadeReveal from "../components/FadeReveal";
import { getArticles } from "../content";
import { resolveImageKey } from "../content/assetRegistry";

export default function ArticlesPage() {
  const posts = getArticles();

  return (
    <div className="pt-24 pb-20">
      <section className="relative overflow-hidden bg-[#111017] py-12">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeReveal className="mb-12">
            <SectionHeader sectionHeader="Articles" subSectionHeader="Latest articles" />
          </FadeReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-stretch">
            {posts.map((post, index) => (
              <FadeReveal key={post.id} delay={index * 0.06} className="h-full min-h-0">
                <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#222035] shadow-lg transition-transform duration-300 hover:-translate-y-1">
                  <div className="relative h-48 w-full shrink-0 overflow-hidden">
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
                    <h2 className="mt-2 text-xl font-bold text-copy">{post.title}</h2>
                    <div className="mt-3 flex min-h-0 flex-1 flex-col">
                      <p className="line-clamp-3 text-sm leading-6 text-copy">{post.excerpt}</p>
                      <div className="mt-auto pt-6">
                        <div className="flex min-h-[2.25rem] flex-wrap content-end gap-2">
                          {post.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-copy"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={`/articles/${post.slug}`}
                          className="mt-4 inline-block text-sm font-semibold text-copy transition-colors hover:text-[#CC5500]"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeReveal>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/" className="text-sm font-medium text-copy hover:text-[#CC5500]">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
