import { Link } from "react-router-dom";
import FadeReveal from "../FadeReveal";
import { getLatestArticles } from "../../content";
import { resolveImageKey } from "../../content/assetRegistry";
import { ArrowRight } from "lucide-react";

export default function LatestArticles() {
  const posts = getLatestArticles(3);

  return (
    <section className="bg-[var(--surface)] py-24 md:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <FadeReveal className="mb-14">
          <div className="flex items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                  Signal from HQ
                </p>
              </div>
              <h2 className="heading-lg text-[var(--text-primary)]">
                Stories worth <span className="text-brand-orange">the scroll</span>
              </h2>
            </div>
            <Link
              to="/articles"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors hover:text-brand-orange"
            >
              Explore the archive <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <FadeReveal key={post.id} delay={index * 0.08} className="h-full">
              <Link
                to={`/articles/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-[var(--surface)] shadow-soft transition-all duration-300 hover:shadow-cardhover hover:border-brand-orange/20"
              >
                <div className="relative h-52 w-full shrink-0 overflow-hidden">
                  <img
                    src={resolveImageKey(post.coverImageKey)}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                    {post.date}
                  </p>
                  <h3 className="mt-3 heading-sm !text-xl text-[var(--text-primary)] transition-colors group-hover:text-brand-orange">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-neutral-500 font-body line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 transition-colors group-hover:text-brand-orange">
                    Keep reading <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </FadeReveal>
          ))}
        </div>

        <FadeReveal delay={0.12} className="mt-12 flex justify-center md:hidden">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 transition-colors hover:text-brand-orange"
          >
            Explore the archive <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeReveal>
      </div>
    </section>
  );
}
