import { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Facebook, Instagram, MenuIcon, XIcon } from "lucide-react";
import Logo from "../assets/AfroLogo.svg";
import { navigationItems } from "../constant";
import { XIcon as XT } from "../icon/XIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    return () => enablePageScroll();
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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

  const handleClick = (url: string, samePage?: boolean) => {
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

  const navItems = navigationItems;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111017]/88 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center px-5 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="shrink-0">
            <img src={Logo} alt="AfroPanda" className="h-9 w-auto" />
          </Link>

          <nav className="mx-auto hidden items-center gap-8 lg:flex">
            {navItems.map((item) =>
              "external" in item && item.external ? (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#CC5500] px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-md shadow-[#CC5500]/30 ring-2 ring-[#CC5500]/80 ring-offset-2 ring-offset-[#111017] transition hover:bg-[#d96214] hover:shadow-lg hover:shadow-[#CC5500]/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
                >
                  {item.label}
                  <ExternalLink className="shrink-0 opacity-95" size={14} aria-hidden />
                </a>
              ) : item.samePage ? (
                <a
                  key={item.label}
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.url, true);
                  }}
                  className="text-sm font-medium tracking-[0.14em] text-copy transition-colors hover:text-[#CC5500]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.url}
                  onClick={closeMenu}
                  className="text-sm font-medium tracking-[0.14em] text-copy transition-colors hover:text-[#CC5500]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="ml-auto hidden items-center gap-4 text-copy lg:flex">
            <a href="https://instagram.com/afropandaesports" target="_blank" rel="noreferrer" className="text-copy transition-colors hover:text-[#CC5500]">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/afropandaesport" target="_blank" rel="noreferrer" className="text-copy transition-colors hover:text-[#CC5500]">
              <XT className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/afropandaesports" target="_blank" rel="noreferrer" className="text-copy transition-colors hover:text-[#CC5500]">
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="ml-auto text-copy lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-[#111017] px-6 pt-24 pb-10 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <motion.nav
              className="flex flex-col gap-7"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {navItems.map((item) =>
                "external" in item && item.external ? (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="inline-flex w-fit items-center gap-2 rounded-full bg-[#CC5500] px-6 py-3 text-base font-semibold tracking-wide text-white shadow-lg shadow-[#CC5500]/25 ring-2 ring-[#CC5500]/70 ring-offset-2 ring-offset-[#111017] transition hover:bg-[#d96214] hover:shadow-xl hover:shadow-[#CC5500]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
                  >
                    {item.label}
                    <ExternalLink className="shrink-0 opacity-95" size={16} aria-hidden />
                  </a>
                ) : item.samePage ? (
                  <a
                    key={item.label}
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.url, true);
                    }}
                    className="text-2xl font-semibold text-copy transition-colors hover:text-[#CC5500]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.url}
                    onClick={closeMenu}
                    className="text-2xl font-semibold text-copy transition-colors hover:text-[#CC5500]"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </motion.nav>

            <div className="mt-auto flex items-center gap-6 text-copy">
              <a href="https://instagram.com/afropandaesports" target="_blank" rel="noreferrer" className="text-copy transition-colors hover:text-[#CC5500]">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/afropandaesport" target="_blank" rel="noreferrer" className="text-copy transition-colors hover:text-[#CC5500]">
                <XT className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/afropandaesports" target="_blank" rel="noreferrer" className="text-copy transition-colors hover:text-[#CC5500]">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
