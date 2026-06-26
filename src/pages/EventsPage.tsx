import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Trophy, ExternalLink } from "lucide-react";
import { GlowingCorners } from "../components/Design";
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
          className="absolute rounded-full bg-[#CC5500]"
          style={{ left: `${p.x}%`, width: p.size, height: p.size, opacity: 0.2 }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function EventsPage() {
  const events = getEvents();

  return (
    <div className="bg-[#111017]">
      <section className="relative overflow-hidden bg-[#191825] py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(204,85,0,0.12),transparent_55%)]" />
        <GlowingCorners />
        <Particles />

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
            Tournaments & programs
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="mt-4 text-5xl font-semibold leading-[1.08] tracking-tight text-copy md:text-6xl"
          >
            Where the brackets land
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl font-maitree text-lg leading-relaxed text-copy/75 md:text-xl"
          >
            Past competitions, ambassador cohorts, and everything we've run since
            day one.
          </motion.p>

          {events.length > 0 && (
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-wrap justify-center gap-6"
            >
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-copy/70">
                <CalendarDays className="h-4 w-4 text-[#CC5500]" />
                <span>{events.length} events</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-copy/70">
                <MapPin className="h-4 w-4 text-[#CC5500]" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-copy/70">
                <Trophy className="h-4 w-4 text-[#CC5500]" />
                <span>All past</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-[#111017] py-16 md:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-10 max-w-2xl text-copy/70">
            Highlights from our competitive showcases and ambassador initiatives. For the latest
            announcements, follow us on socials.
          </p>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
            {events.length === 0 ? (
              <div className="py-16 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
                  <CalendarDays className="h-8 w-8 text-copy/30" />
                </div>
                <p className="text-sm text-copy/50">No events yet. Check back soon.</p>
                <a
                  href="https://instagram.com/afropandaesports"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#CC5500] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#e85d00]"
                >
                  Follow us for announcements
                  <ExternalLink className="h-4 w-4" />
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
          </div>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-copy/60 transition-colors hover:text-[#CC5500]"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
