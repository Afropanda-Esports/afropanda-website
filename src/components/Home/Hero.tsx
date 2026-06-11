import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
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
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import trailerVideo from "../../assets/Trailer.mp4";

// ─── Tournament card data ────────────────────────────────────────────────────

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

// ─── Hero ────────────────────────────────────────────────────────────────────

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [statsVisible, setStatsVisible] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const players = useCountUp(200, 2000, statsVisible);
  const tournaments_count = useCountUp(12, 1800, statsVisible);
  const views = useCountUp(10, 1600, statsVisible);

  // Mouse parallax
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // Stats intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen w-full overflow-hidden bg-[#0d0b13] text-copy"
      >
        {/* ── Backgrounds ── */}
        <div className="absolute inset-0">
          {/* Mouse-tracking radial glow */}
          <div
            className="absolute inset-0 opacity-40 transition-all duration-700 ease-out"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(204,85,0,0.18), transparent 40%)`,
            }}
          />
          {/* Static top glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,85,0,0.12)_0%,transparent_60%)]" />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        {/* ── Main content ── */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-28 sm:px-6 lg:px-8 lg:pt-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* LEFT ── copy */}
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
                Compete hard.{" "}
                <br />
                <span className="bg-gradient-to-r from-[#CC5500] via-[#ff7a1a] to-[#e85d00] bg-clip-text text-transparent">
                  Rise together.
                </span>
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
                      {Math.floor(tournaments_count)}+
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

            {/* RIGHT - scrolling ecosystem cards */}
            <motion.div
              className="relative h-[420px] overflow-hidden rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {/* Top + bottom fade masks */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#0d0b13] to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#0d0b13] to-transparent" />

              {/* Scrolling list - doubled for seamless loop */}
              <div className="animate-scroll-y space-y-3 px-1">
                {[...heroHighlights, ...heroHighlights].map((highlight, i) => (
                  <HighlightCard key={`${highlight.id}-${i}`} highlight={highlight} />
                ))}
              </div>

              {/* Ambient glows */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#CC5500]/15 blur-[100px]" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#CC5500]/8 blur-[100px]" />
            </motion.div>
          </div>

          {/* ── Partner scroll bar ── */}
          <div className="mt-20 border-t border-white/[0.07] pt-10">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.24em] text-copy/40">
              Our ecosystem
            </p>
            <div className="relative overflow-hidden">
              <div className="flex gap-16 animate-scroll-x">
                {[
                  "Tournaments", "Live Broadcasts", "Ambassador Program",
                  "Internships", "Community", "PandaPay",
                  "Talent Scouting", "Esports Ops",
                  // duplicate for seamless loop
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

      <VideoDialog open={videoOpen} onOpenChange={setVideoOpen} />
    </>
  );
};

// ─── Tournament card sub-component ───────────────────────────────────────────

function HighlightCard({ highlight }: { highlight: HeroHighlight }) {
  const Icon = highlight.Icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-[#CC5500]/25 hover:bg-white/[0.06]">
      <div className="flex gap-4 p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#CC5500]/25 bg-[#CC5500]/10 text-[#CC5500] transition group-hover:border-[#CC5500]/45 group-hover:bg-[#CC5500]/15">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-copy/45">
              {highlight.category}
            </span>
            <span className="text-xs font-medium text-[#CC5500]">
              {highlight.meta}
            </span>
          </div>
          <h3 className="text-base font-semibold leading-snug text-white">
            {highlight.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-copy/55">
            {highlight.description}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#CC5500]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}

function VideoDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,960px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#101019] shadow-2xl focus:outline-none">
          <Dialog.Title className="sr-only">Afropanda trailer</Dialog.Title>
          <Dialog.Description className="sr-only">
            Watch the Afropanda trailer video.
          </Dialog.Description>
          <video
            className="aspect-video w-full bg-black"
            src={trailerVideo}
            controls
            autoPlay
            playsInline
          />
          <Dialog.Close className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white transition hover:bg-black/75">
            <X className="h-5 w-5" />
            <span className="sr-only">Close trailer</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Hero;
