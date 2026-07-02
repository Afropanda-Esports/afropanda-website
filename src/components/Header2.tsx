import { useEffect, useRef, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  Facebook,
  Instagram,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import Logo from "../assets/AfroLogo.svg";
import { PANDAPAY_URL } from "../constant";
import { XIcon as XT } from "../icon/XIcon";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Events", url: "/events" },
  { label: "Stories", url: "/articles" },
  { label: "Ambassador", url: "/ambassador" },
  { label: "Internship", url: "/internship" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => enablePageScroll();
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setMobileExpanded(null);
    enablePageScroll();
  }, [location.pathname]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileExpanded(null);
    enablePageScroll();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      const next = !prev;
      if (next) disablePageScroll();
      else enablePageScroll();
      return next;
    });
  };

  const { theme, toggleTheme } = useTheme();

  const [, setMobileExpanded] = useState<string | null>(null);
  const [themeAnim, setThemeAnim] = useState<{
    originX: number;
    originY: number;
    color: string;
    maxRadius: number;
  } | null>(null);
  const [animPhase, setAnimPhase] = useState<"expand" | "contract">("contract");
  const animatingRef = useRef(false);

  const handleThemeToggle = (e: React.MouseEvent) => {
    if (animatingRef.current) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = Math.max(cx, window.innerWidth - cx);
    const dy = Math.max(cy, window.innerHeight - cy);
    const maxRadius = Math.sqrt(dx * dx + dy * dy) + 60;
    animatingRef.current = true;

    if (theme === "light") {
      // Going to dark: dark behind white sheet, then contract it away
      toggleTheme();
      setAnimPhase("contract");
      setThemeAnim({ originX: cx, originY: cy, color: "#FFFFFF", maxRadius });
    } else {
      // Going to light: expand white, toggle theme, contract white away
      setAnimPhase("expand");
      setThemeAnim({ originX: cx, originY: cy, color: "#FFFFFF", maxRadius });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--surface)]/90 backdrop-blur-lg border-b border-[var(--border)] shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-8xl items-center px-5 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="relative flex shrink-0 items-center gap-2 bg-black/60 px-2 py-1.5 rounded-full">
            <img src={Logo} alt="AfroPanda" className="h-9 w-auto" />
            <span className="heading-sm text-[var(--text-primary)] hidden sm:inline"></span>
          </Link>

          {/* Desktop nav */}
          <nav className="mx-auto hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = location.pathname === item.url;
              return (
                <Link
                  key={item.label}
                  to={item.url}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-brand-orange"
                      : "text-neutral-700 hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-orange rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Theme toggle */}
          <button
            onClick={handleThemeToggle}
            className="ml-auto mr-4 hidden rounded-full p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--n100)] hover:text-brand-orange lg:block"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ scale: 0.3, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.3, rotate: 180, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Desktop right */}
          <div className="ml-auto hidden items-center gap-4 lg:flex">
            <a
              href={PANDAPAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-black px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--n800)] hover:shadow-glow active:scale-[0.98]"
            >
              PandaPay
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={toggleMenu}
            className="ml-auto text-[var(--text-secondary)] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-[var(--surface)] px-6 pt-24 pb-10 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.nav
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.25 }}
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <Link
                    key={item.label}
                    to={item.url}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-lg font-medium transition ${
                      isActive
                        ? "bg-brand-orange/5 text-brand-orange"
                        : "text-[var(--text-secondary)] hover:bg-[var(--n50)]"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="ml-auto h-2 w-2 rounded-full bg-brand-orange" />
                    )}
                  </Link>
                );
              })}

              <div className="my-6 h-px bg-[var(--border)]" />

              <button
                onClick={handleThemeToggle}
                className="flex items-center justify-center gap-3 rounded-xl px-4 py-3.5 text-lg font-medium text-[var(--text-secondary)] transition hover:bg-[var(--n50)]"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ scale: 0.3, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.3, rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </motion.div>
                </AnimatePresence>
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>

              <a
                href={PANDAPAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-black px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[var(--n800)]"
              >
                PandaPay
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </motion.nav>

            {/* Social */}
            <div className="mt-auto flex items-center gap-6 pt-10 text-[var(--n400)]">
              <a href="https://instagram.com/afropandaesports" target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-brand-orange">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/afropandaesport" target="_blank" rel="noreferrer" aria-label="X" className="transition-colors hover:text-brand-orange">
                <XT className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/afropandaesports" target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-colors hover:text-brand-orange">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Theme transition overlay */}
      {themeAnim && (
        <motion.div
          className="fixed z-[9999] rounded-full pointer-events-auto"
          style={{
            background: themeAnim.color,
            width: themeAnim.maxRadius * 2,
            height: themeAnim.maxRadius * 2,
            left: themeAnim.originX - themeAnim.maxRadius,
            top: themeAnim.originY - themeAnim.maxRadius,
          }}
          initial={{ scale: animPhase === "contract" ? 1 : 0 }}
          animate={{ scale: animPhase === "contract" ? 0 : 1 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => {
            if (animPhase === "expand") toggleTheme();
            setThemeAnim(null);
            animatingRef.current = false;
          }}
        />
      )}
    </>
  );
}
