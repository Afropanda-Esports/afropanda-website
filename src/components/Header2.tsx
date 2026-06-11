import { useEffect, useRef, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Facebook,
  Instagram,
  MenuIcon,
  XIcon,
  Trophy,
  Users,
  Newspaper,
  CalendarDays,
  Briefcase,
  Sparkles,
  Info,
} from "lucide-react";
import Logo from "../assets/AfroLogo.svg";
import { PANDAPAY_URL } from "../constant";
import { XIcon as XT } from "../icon/XIcon";

// ─── Mega-menu data ──────────────────────────────────────────────────────────

const exploreItems = [
  {
    icon: Trophy,
    label: "What we build",
    description: "Tournaments, broadcasts & talent pathways",
    url: "#services",
    samePage: true,
  },
  {
    icon: CalendarDays,
    label: "Events",
    description: "Past competitions and ambassador programs",
    url: "/events",
  },
  {
    icon: Newspaper,
    label: "Stories",
    description: "Articles and updates from the team",
    url: "/articles",
  },
  {
    icon: Info,
    label: "About",
    description: "Who we are and what drives us",
    url: "/about",
  },
];

const joinItems = [
  {
    icon: Briefcase,
    label: "Internships",
    description: "Real tracks. Real output. Real mentors.",
    url: "/internship",
  },
  {
    icon: Sparkles,
    label: "Ambassadors",
    description: "Carry the energy into your community",
    url: "/ambassador",
  },
  {
    icon: Users,
    label: "Community",
    description: "Follow our socials to stay in the loop",
    url: "https://instagram.com/afropandaesports",
    external: true,
  },
];

// ─── Dropdown component ───────────────────────────────────────────────────────

interface DropdownItem {
  icon: React.ElementType;
  label: string;
  description: string;
  url: string;
  samePage?: boolean;
  external?: boolean;
}

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  onNavigate: (url: string, samePage?: boolean) => void;
  isActive: boolean;
}

function NavDropdown({ label, items, onNavigate, isActive }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className={`inline-flex items-center gap-1 text-sm font-medium tracking-[0.14em] transition-colors hover:text-[#CC5500] focus-visible:outline-none ${
          isActive ? "text-[#CC5500]" : "text-copy"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2"
          >
            {/* Arrow pointer */}
            <div className="mx-auto mb-0 flex justify-center">
              <div className="h-2 w-3 overflow-hidden">
                <div className="mx-auto h-2 w-2 -translate-y-1 rotate-45 border border-white/10 bg-[#1a1826]" />
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1a1826] shadow-2xl shadow-black/50">
              <div className="p-2">
                {items.map((item) => {
                  const Icon = item.icon;
                  const inner = (
                    <div className="flex items-start gap-3 rounded-xl p-3 transition duration-150 hover:bg-white/[0.06] group">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#CC5500]/20 bg-[#CC5500]/[0.1] transition group-hover:border-[#CC5500]/40 group-hover:bg-[#CC5500]/20">
                        <Icon className="h-4 w-4 text-[#CC5500]" strokeWidth={1.5} aria-hidden />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-copy group-hover:text-[#CC5500] transition">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-xs leading-relaxed text-copy/50">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );

                  if (item.external) {
                    return (
                      <a
                        key={item.label}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                      >
                        {inner}
                      </a>
                    );
                  }

                  if (item.samePage) {
                    return (
                      <button
                        key={item.label}
                        className="w-full text-left"
                        onClick={() => {
                          onNavigate(item.url, true);
                          setOpen(false);
                        }}
                      >
                        {inner}
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.url}
                      onClick={() => setOpen(false)}
                    >
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    return () => enablePageScroll();
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileExpanded(null);
    enablePageScroll();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (next) {
        disablePageScroll();
      } else {
        enablePageScroll();
      }
      return next;
    });
  };

  const handleNavigate = (url: string, samePage?: boolean) => {
    if (samePage) {
      if (location.pathname === "/") {
        handleScrollToSection(url);
      } else {
        navigate("/");
        setTimeout(() => handleScrollToSection(url), 300);
      }
    } else {
      navigate(url);
    }
    closeMenu();
  };

  const isActive = (url: string) => {
    if (url.startsWith("#")) return false;
    return location.pathname === url;
  };

  const exploreActive = exploreItems.some(
    (i) => !i.samePage && isActive(i.url)
  );
  const joinActive = joinItems.some(
    (i) => !i.external && isActive(i.url)
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111017]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center px-5 py-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img src={Logo} alt="AfroPanda" className="h-9 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="mx-auto hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            <NavDropdown
              label="Explore"
              items={exploreItems}
              onNavigate={handleNavigate}
              isActive={exploreActive}
            />

            <NavDropdown
              label="Get involved"
              items={joinItems}
              onNavigate={handleNavigate}
              isActive={joinActive}
            />

            {/* PandaPay external CTA — kept as a pill badge */}
            <a
              href={PANDAPAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#CC5500] px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-md shadow-[#CC5500]/30 ring-2 ring-[#CC5500]/80 ring-offset-2 ring-offset-[#111017] transition hover:bg-[#d96214] hover:shadow-lg hover:shadow-[#CC5500]/35"
            >
              PandaPay
              <ExternalLink className="shrink-0 opacity-95" size={13} aria-hidden />
            </a>
          </nav>

          {/* Social icons — desktop */}
          <div className="ml-auto hidden items-center gap-4 text-copy lg:flex">
            <a
              href="https://instagram.com/afropandaesports"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-copy transition-colors hover:text-[#CC5500]"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/afropandaesport"
              target="_blank"
              rel="noreferrer"
              aria-label="X / Twitter"
              className="text-copy transition-colors hover:text-[#CC5500]"
            >
              <XT className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/afropandaesports"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-copy transition-colors hover:text-[#CC5500]"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={toggleMenu}
            className="ml-auto text-copy lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#111017] px-6 pt-24 pb-10 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <motion.nav
              className="flex flex-col gap-1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              aria-label="Mobile navigation"
            >
              {/* Explore group */}
              <MobileGroup
                label="Explore"
                isExpanded={mobileExpanded === "explore"}
                onToggle={() =>
                  setMobileExpanded((p) => (p === "explore" ? null : "explore"))
                }
              >
                {exploreItems.map((item) => {
                  const Icon = item.icon;
                  if (item.samePage) {
                    return (
                      <button
                        key={item.label}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-white/[0.05]"
                        onClick={() => handleNavigate(item.url, true)}
                      >
                        <Icon className="h-4 w-4 shrink-0 text-[#CC5500]/80" strokeWidth={1.5} aria-hidden />
                        <span className="text-base font-medium text-copy">{item.label}</span>
                      </button>
                    );
                  }
                  return (
                    <Link
                      key={item.label}
                      to={item.url}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.05] ${
                        isActive(item.url) ? "text-[#CC5500]" : "text-copy"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[#CC5500]/80" strokeWidth={1.5} aria-hidden />
                      <span className="text-base font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </MobileGroup>

              {/* Get involved group */}
              <MobileGroup
                label="Get involved"
                isExpanded={mobileExpanded === "join"}
                onToggle={() =>
                  setMobileExpanded((p) => (p === "join" ? null : "join"))
                }
              >
                {joinItems.map((item) => {
                  const Icon = item.icon;
                  if (item.external) {
                    return (
                      <a
                        key={item.label}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.05]"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-[#CC5500]/80" strokeWidth={1.5} aria-hidden />
                        <span className="text-base font-medium text-copy">{item.label}</span>
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={item.label}
                      to={item.url}
                      onClick={closeMenu}
                      className={`flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/[0.05] ${
                        isActive(item.url) ? "text-[#CC5500]" : "text-copy"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0 text-[#CC5500]/80" strokeWidth={1.5} aria-hidden />
                      <span className="text-base font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </MobileGroup>

              {/* Divider */}
              <div className="my-4 h-px bg-white/10" />

              {/* PandaPay */}
              <a
                href={PANDAPAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#CC5500] px-6 py-3 text-base font-semibold tracking-wide text-white shadow-lg shadow-[#CC5500]/25 ring-2 ring-[#CC5500]/70 ring-offset-2 ring-offset-[#111017] transition hover:bg-[#d96214]"
              >
                PandaPay
                <ExternalLink className="shrink-0 opacity-95" size={16} aria-hidden />
              </a>
            </motion.nav>

            {/* Social icons — mobile */}
            <div className="mt-auto flex items-center gap-6 pt-10 text-copy">
              <a
                href="https://instagram.com/afropandaesports"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-[#CC5500]"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/afropandaesport"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="transition-colors hover:text-[#CC5500]"
              >
                <XT className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/afropandaesports"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-[#CC5500]"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Mobile accordion group ───────────────────────────────────────────────────

interface MobileGroupProps {
  label: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function MobileGroup({ label, isExpanded, onToggle, children }: MobileGroupProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-xl px-3 py-4 text-left text-2xl font-semibold text-copy transition hover:text-[#CC5500]"
        aria-expanded={isExpanded}
      >
        {label}
        <ChevronDown
          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
            isExpanded ? "rotate-180 text-[#CC5500]" : ""
          }`}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="flex flex-col pb-2 pl-3">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
