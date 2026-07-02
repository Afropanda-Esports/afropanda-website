import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FadeReveal from "../components/FadeReveal";
import { getArticles } from "../content";
import { resolveImageKey } from "../content/assetRegistry";
import { ArrowLeft, ArrowRight } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ArticlesPage() {
  const posts = getArticles();

  return (
    <div className="bg-[var(--surface)]">
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--surface)] via-[var(--surface)] to-[var(--n50)] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,107,1,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,1,0.5) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,1,0.08),transparent_55%)]" />

        <motion.div
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--n50)] px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Latest Articles
            </p>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="heading-xl text-[var(--text-primary)]">
            Stories from <span className="text-brand-orange">the front line</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] font-body"
          >
            Updates, recaps, and behind-the-scenes from AfroPanda's tournaments,
            community, and culture.
          </motion.p>
        </motion.div>
      </section>

      <section className="relative bg-[var(--surface)] py-16 md:py-24">
        <div className="relative mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm text-neutral-400">No articles yet. Check back soon.</p>
              <a
                href="https://instagram.com/afropandaesports"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition hover:underline"
              >
                Follow us for announcements →
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-stretch">
              {posts.map((post, index) => (
                <FadeReveal key={post.id} delay={index * 0.06} className="h-full min-h-0">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-[var(--surface)] shadow-soft transition-all duration-300 hover:shadow-cardhover">
                    <div className="relative h-48 w-full shrink-0 overflow-hidden">
                      <img
                        src={resolveImageKey(post.coverImageKey)}
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col p-7">
                      <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                        {post.date} · {post.author}
                      </p>
                      <h2 className="mt-3 heading-sm !text-xl text-[var(--text-primary)] transition-colors group-hover:text-brand-orange">
                        {post.title}
                      </h2>
                      <div className="mt-3 flex min-h-0 flex-1 flex-col">
                        <p className="line-clamp-3 text-sm leading-6 text-neutral-500 font-body">{post.excerpt}</p>
                        <div className="mt-auto pt-6">
                          <div className="flex min-h-[2.25rem] flex-wrap content-end gap-2">
                            {post.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-neutral-100 bg-neutral-50 px-2.5 py-1 text-[11px] font-medium text-neutral-500"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <Link
                            to={`/articles/${post.slug}`}
                            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 transition-colors hover:text-brand-orange"
                          >
                            Read more <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </FadeReveal>
              ))}
            </div>
          )}

          <div className="mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors hover:text-brand-orange"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
