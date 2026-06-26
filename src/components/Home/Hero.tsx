import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  Radio,
  Sparkles,
  TrendingUp,
  Trophy,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Logo from "../../assets/AfroLogo.svg";

// ─── Highlight card data ─────────────────────────────────────────────────────

interface HeroHighlight {
  id: number;
  category: string;
  title: string;
  description: string;
  meta: string;
  Icon: LucideIcon;
}

const heroHighlights: HeroHighlight[] = [
  {
    id: 1,
    category: "Tournaments",
    title: "Competitive events for African players",
    description:
      "Structured matchdays, brackets, prize pools, and serious competition for local gaming scenes.",
    meta: "EA FC / CODM / Fighting games",
    Icon: Trophy,
  },
  {
    id: 2,
    category: "Community",
    title: "A growing network of players and fans",
    description:
      "A place for gamers, creators, organizers, and fans to connect around African esports culture.",
    meta: "200+ active players",
    Icon: Users,
  },
  {
    id: 3,
    category: "Ambassadors",
    title: "Campus and community representation",
    description:
      "Ambassadors help bring AfroPanda events, stories, and competitive energy into their local scenes.",
    meta: "Campus / Community / Culture",
    Icon: Sparkles,
  },
  {
    id: 4,
    category: "Internships",
    title: "Hands-on esports operations",
    description:
      "Real experience across events, media, logistics, partnerships, and community management.",
    meta: "Learn by building",
    Icon: Briefcase,
  },
  {
    id: 5,
    category: "Broadcasts",
    title: "Matchday coverage and storytelling",
    description:
      "Streams, recaps, highlights, and creator-led coverage that make every competition feel bigger.",
    meta: "Live / Recaps / Stories",
    Icon: Radio,
  },
  {
    id: 6,
    category: "Events",
    title: "Gaming moments built for participation",
    description:
      "From competitive tournaments to community activations, AfroPanda creates spaces players can show up for.",
    meta: "Events / Activations / Play",
    Icon: CalendarDays,
  },
];

// ─── Stats counter hook ──────────────────────────────────────────────────────

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

// ─── Floating particles ──────────────────────────────────────────────────────

function Particles() {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
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
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            opacity: 0.3,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsWrapRef = useRef<HTMLDivElement>(null);
  const cardsOffsetRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [scrollShift, setScrollShift] = useState(0);

  const players = useCountUp(200, 2000, statsVisible);
  const tournamentCount = useCountUp(12, 1800, statsVisible);
  const views = useCountUp(10, 1600, statsVisible);

  // Stats counter trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll-linked horizontal shift (on top of CSS marquee)
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      const heroH = heroRef.current.offsetHeight;
      const factor = Math.max(0, Math.min(1 - heroBottom / heroH, 1));
      setScrollShift(-factor * 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full overflow-hidden bg-[#0d0b13] pb-20 pt-28 text-copy lg:pt-24 lg:pb-16"
    >
      {/* ── Backgrounds ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,85,0,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:72px_72px]" />

        {/* Glowing panda logo watermark */}
        <div className="absolute right-0 top-1/3 -translate-y-1/2 md:w-[500px] md:h-[400px] opacity-[0.07] lg:opacity-[0.08]">
          <div className="absolute inset-0 rounded-full bg-[#CC5500]/20 blur-[80px]" />
          <img
            src={Logo}
            alt=""
            className="absolute inset-0 h-full w-full object-contain p-16 rotate-90"
          />
        </div>

        <Particles />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* LEFT — copy */}
        <div className="space-y-8">
          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#CC5500]/25 bg-[#CC5500]/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#CC5500]/90 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#CC5500]" />
            Africa's Esports Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl font-bold leading-[1.0] tracking-tight text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Compete hard<span className="text-[#CC5500]/90">.</span>
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-[#CC5500] via-[#ff7a1a] to-[#e85d00] bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <motion.span
                className="inline-block"
                animate={{ textShadow: ["0 0 20px rgba(204,85,0,0)", "0 0 30px rgba(204,85,0,0.4)", "0 0 20px rgba(204,85,0,0)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Rise together<span className="text-white">.</span>
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="max-w-lg font-maitree text-lg leading-8 text-copy/75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Tournaments, talent pathways, and standout gaming experiences
            built for African players, fans, and partners.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <a href="#events">
              <button className="group relative inline-flex h-12 items-center overflow-hidden rounded-full px-7 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#CC5500]/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#CC5500]/40">
                <span className="absolute inset-0 bg-gradient-to-r from-[#CC5500] via-[#ff7a1a] to-[#CC5500] bg-[length:200%_100%] transition-[background-position] duration-500 group-hover:[background-position:100%_0]" />
                <span className="relative z-10 flex items-center gap-2">
                  View Events
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </button>
            </a>

            <a
              href="#album"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 text-sm font-semibold text-copy/85 backdrop-blur-sm transition hover:border-[#CC5500]/40 hover:text-[#CC5500]"
            >
              <Users className="h-4 w-4" />
              See Community
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            className="flex flex-wrap items-center gap-6 pt-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">
                  {Math.floor(players)}+
                </span>
                <Users className="h-4 w-4 text-[#CC5500]" />
              </div>
              <p className="text-xs text-copy/50">Active players</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">
                  {Math.floor(tournamentCount)}+
                </span>
                <Trophy className="h-4 w-4 text-[#CC5500]" />
              </div>
              <p className="text-xs text-copy/50">Tournaments run</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div>
              <div className="flex items-baseline gap-1">
                <Zap className="h-4 w-4 text-[#CC5500]" />
                <span className="text-2xl font-bold text-white">
                  {Math.floor(views)}K+
                </span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <p className="text-xs text-copy/50">Tournament views</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — horizontal auto-scrolling cards */}
        <motion.div
          ref={cardsWrapRef}
          className="relative mt-12 h-[320px] overflow-hidden rounded-2xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0d0b13] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0d0b13] to-transparent" />

          <div
            ref={cardsOffsetRef}
            style={{ transform: `translateX(${scrollShift}px)`, willChange: 'transform' }}
          >
            <div className="flex gap-6 px-1 animate-scroll-cards">
              {[...heroHighlights, ...heroHighlights].map((highlight, i) => (
                <div key={`${highlight.id}-${i}`} className="w-72 shrink-0">
                  <div className="h-full">
                    <HighlightCard highlight={highlight} index={i} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#CC5500]/15 blur-[100px] hidden" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full z-[-10] sm:bg-[#CC5500]/60" />
        </motion.div>

        {/* ── Ecosystem marquee ── */}
        <div className="mt-16 border-t border-white/[0.07] pt-10">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.24em] text-copy/40">
            Our ecosystem
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-x gap-16">
              {[
                "Tournaments", "Live Broadcasts", "Ambassador Program",
                "Internships", "Community", "PandaPay",
                "Talent Scouting", "Esports Ops",
                "Tournaments", "Live Broadcasts", "Ambassador Program",
                "Internships", "Community", "PandaPay",
                "Talent Scouting", "Esports Ops",
              ].map((label, i) => (
                <span
                  key={i}
                  className="shrink-0 text-base font-bold tracking-wide text-white/30"
                >
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

// ─── Highlight card ───────────────────────────────────────────────────────────

const CARD_ACCENTS = [
  'from-[#CC5500]/20',
  'from-blue-500/15',
  'from-purple-500/15',
  'from-emerald-500/15',
  'from-amber-500/15',
  'from-rose-500/15',
];

function HighlightCard({ highlight, index }: { highlight: HeroHighlight; index: number }) {
  const Icon = highlight.Icon;
  const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-[#CC5500]/25 hover:bg-white/[0.06]">
      <div className="flex flex-col gap-3 p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#CC5500]/25 bg-[#CC5500]/10 text-[#CC5500]">
              <Icon className="h-4 w-4" strokeWidth={1.8} />
            </div>
            <div className="flex flex-wrap items-center justify-end gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-copy/45">
              {highlight.category}
            </span>
            <span className="max-w-[120px] truncate text-xs font-medium text-[#CC5500]">
              {highlight.meta}
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold leading-snug text-white">
            {highlight.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-copy/55">
            {highlight.description}
          </p>
        </div>
      </div>
      <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${accent} via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
    </div>
  );
}

export default Hero;
