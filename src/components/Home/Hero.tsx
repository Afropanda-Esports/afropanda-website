import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Trophy,
  Users,
  Zap,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import WaterMark from "../../assets/background.png";

function useCountUp(target: number, duration: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const raf = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(target * eased);
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

function FloatingOrbs() {
  const orbs = useMemo(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
    })),
  []);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {orbs.map((o) => (
        <motion.div
          key={o.id}
          className="absolute rounded-full bg-brand-orange"
          style={{ left: `${o.x}%`, top: `${o.y}%`, width: o.size, height: o.size, opacity: 0.08 }}
          animate={{ y: [0, -20, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: o.duration, repeat: Infinity, delay: o.delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const players = useCountUp(200, 2000, statsVisible);
  const tournaments = useCountUp(12, 1800, statsVisible);
  const views = useCountUp(10, 1600, statsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const ecosystemItems = [
    "Tournaments", "Live Broadcasts", "Ambassador Program",
    "Internships", "Community", "PandaPay",
    "Talent Scouting", "Esports Ops",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[var(--surface)] via-[var(--surface)] to-[var(--n50)] pt-28">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/3 rounded-full blur-[100px]" />
        <FloatingOrbs />
      </div>

      <div className="relative z-10 mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20 min-h-[calc(100vh-8rem)]">
          {/* Left - Main Content */}
          <div className="space-y-8 pt-8 lg:pt-0">
            {/* Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange">
                Africa's Esports Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="heading-xl text-[var(--text-primary)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span>Compete</span>
              <br />
              <span className="text-brand-orange">hard.</span>
              <span> Rise </span>
              <span className="text-brand-orange">together.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              className="max-w-lg text-lg leading-8 text-neutral-600 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tournaments, talent pathways, and standout gaming experiences
              built for African players, fans, and partners.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/events"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-brand-orange px-7 text-sm font-semibold text-white transition-all hover:shadow-glow active:scale-[0.98]"
              >
                View Events
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/ambassador"
                className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-neutral-200 bg-[var(--surface)] px-6 text-sm font-semibold text-neutral-700 transition-all hover:border-brand-orange/30 hover:text-brand-orange"
              >
                <Sparkles className="h-4 w-4" />
                Become an Ambassador
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              className="flex flex-wrap items-center gap-8 pt-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="heading-md !text-3xl text-[var(--text-primary)]">
                    {Math.floor(players)}+
                  </span>
                  <Users className="h-4 w-4 text-brand-orange" />
                </div>
                <p className="text-xs text-neutral-400 font-body">Active players</p>
              </div>
              <div className="h-8 w-px bg-neutral-200" />
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="heading-md !text-3xl text-[var(--text-primary)]">
                    {Math.floor(tournaments)}+
                  </span>
                  <Trophy className="h-4 w-4 text-brand-orange" />
                </div>
                <p className="text-xs text-neutral-400 font-body">Tournaments run</p>
              </div>
              <div className="h-8 w-px bg-neutral-200" />
              <div>
                <div className="flex items-baseline gap-1.5">
                  <Zap className="h-4 w-4 text-brand-orange" />
                  <span className="heading-md !text-3xl text-[var(--text-primary)]">
                    {Math.floor(views)}K+
                  </span>
                  <TrendingUp className="h-4 w-4 text-green-500" />
                </div>
                <p className="text-xs text-neutral-400 font-body">Tournament views</p>
              </div>
            </motion.div>
          </div>

          {/* Right - Showcase Area */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Logo watermark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full bg-brand-orange/5 blur-[80px]" />
              </div>
              <img
                src={WaterMark}
                alt=""
                className="relative h-[100dvh] max-w-[650px] mx-auto opacity-15"
              />

              {/* Floating stat pills */}
              <motion.div
                className="absolute top-8 left-4 flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-soft"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="h-2 w-2 rounded-full bg-brand-orange" />
                <p className="text-xs font-semibold text-[var(--text-primary)]">200+ Players</p>
              </motion.div>
              <motion.div
                className="absolute top-1/3 right-2 flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-soft"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <p className="text-xs font-semibold text-[var(--text-primary)]">12+ Tournaments</p>
              </motion.div>
              <motion.div
                className="absolute bottom-10 left-20 flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-soft"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <p className="text-xs font-semibold text-[var(--text-primary)]">10K+ Views</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ecosystem marquee */}
      <div className="relative border-t border-neutral-100 bg-neutral-50/50 py-6">
        <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-8">
          <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Our Ecosystem
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-20">
              {[...ecosystemItems, ...ecosystemItems].map((label, i) => (
                <span key={i} className="shrink-0 text-sm font-semibold tracking-wide text-neutral-300 uppercase">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
