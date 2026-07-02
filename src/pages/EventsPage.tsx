import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Trophy, ArrowLeft } from "lucide-react";
import EventCard from "../components/Home/Upcoming/EventCard";
import FadeReveal from "../components/FadeReveal";
import { getEvents } from "../content";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 5,
    })),
  []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-brand-orange"
          style={{ left: `${p.x}%`, width: p.size, height: p.size, opacity: 0.15 }}
          animate={{ y: [0, -30, 0], opacity: [0.08, 0.3, 0.08] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function EventsPage() {
  const events = getEvents();

  return (
    <div className="bg-[var(--surface)]">
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--surface)] via-[var(--surface)] to-[var(--n50)] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,107,1,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,1,0.5) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,1,0.08),transparent_55%)]" />
        <Particles />

        <motion.div
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--n50)] px-4 py-1.5 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Tournaments & Programs
            </p>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="heading-xl text-[var(--text-primary)]">
            Where the <span className="text-brand-orange">brackets land</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] font-body"
          >
            Past competitions, ambassador cohorts, and everything we have run since day one.
          </motion.p>

          {events.length > 0 && (
            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--n50)] px-5 py-2 text-sm text-[var(--text-secondary)]">
                <CalendarDays className="h-4 w-4 text-brand-orange" />
                <span>{events.length} events</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--n50)] px-5 py-2 text-sm text-[var(--text-secondary)]">
                <MapPin className="h-4 w-4 text-brand-orange" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--n50)] px-5 py-2 text-sm text-[var(--text-secondary)]">=
                <Trophy className="h-4 w-4 text-brand-orange" />
                <span>All past</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      <section className="relative bg-[var(--surface)] py-16 md:py-24">
        <div className="relative mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
          <p className="mb-8 max-w-2xl text-sm text-neutral-500 font-body">
            Highlights from our competitive showcases and ambassador initiatives. For the latest
            announcements, follow us on socials.
          </p>

          {events.length === 0 ? (
            <div className="py-16 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-100 bg-neutral-50">
                <CalendarDays className="h-8 w-8 text-neutral-300" />
              </div>
              <p className="text-sm text-neutral-400">No events yet. Check back soon.</p>
              <a
                href="https://instagram.com/afropandaesports"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 text-sm font-semibold text-white transition hover:shadow-glow"
              >
                Follow us for announcements
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event, index) => (
                <FadeReveal key={event.id} delay={index * 0.08}>
                  <div className="transition-transform duration-300 hover:-translate-y-1">
                    <EventCard event={event} />
                  </div>
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
