import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GlowingCorners } from "../components/Design";
import FadeReveal from "../components/FadeReveal";
import { getArticles } from "../content";
import { resolveImageKey } from "../content/assetRegistry";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ArticlesPage() {
  const posts = getArticles();

  return (
    <div className="bg-[#111017]">
      <section className="relative overflow-hidden bg-[#191825] py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(204,85,0,0.12),transparent_55%)]" />
        <GlowingCorners />
        <motion.div
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-copy/60"
          >
            Latest articles
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-5xl font-semibold leading-[1.08] tracking-tight text-copy md:text-6xl"
          >
            Stories from the front line
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl font-maitree text-lg leading-relaxed text-copy/75 md:text-xl"
          >
            Updates, recaps, and behind-the-scenes from AfroPanda's tournaments,
            community, and culture.
          </motion.p>
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#111017] py-16 md:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm text-copy/50">No articles yet. Check back soon.</p>
              <a
                href="https://instagram.com/afropandaesports"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#CC5500] transition hover:underline"
              >
                Follow us for announcements →
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-stretch">
              {posts.map((post, index) => (
                <FadeReveal key={post.id} delay={index * 0.06} className="h-full min-h-0">
                  <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-lg transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative h-48 w-full shrink-0 overflow-hidden">
                      <img
                        src={resolveImageKey(post.coverImageKey)}
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
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
                                className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-xs text-copy"
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
          )}

          <div className="mt-10">
            <Link
              to="/"
              className="text-sm font-medium text-copy transition-colors hover:text-[#CC5500]"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
