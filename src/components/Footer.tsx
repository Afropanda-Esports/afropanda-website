import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FadeReveal from "./FadeReveal";
import Logo from "../assets/AfroLogo.svg";
import { footernav as navigation, footerCompanyLink } from "../constant";
import { XIcon } from "../icon/XIcon";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = (url: string, samePage?: boolean) => {
    if (samePage) {
      if (location.pathname === "/") handleScrollToSection(url);
      else {
        navigate("/");
        setTimeout(() => handleScrollToSection(url), 300);
      }
    } else navigate(url);
  };

  const linkClass = "text-neutral-400 transition-colors hover:text-brand-orange text-sm";

  return (
    <footer className="bg-[var(--surface-alt)] text-[var(--text-primary)]">
      <div className="mx-auto max-w-8xl px-5 py-16 sm:px-6 lg:px-8">
        <FadeReveal className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
           {/* Logo */}
          <Link to="/" className="relative flex w-fit shrink-0 items-center gap-2 bg-black/60 px-2 py-1.5 rounded-full">
            <img src={Logo} alt="AfroPanda" className="h-9 w-auto pr-6" />
          </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-neutral-400">
              Competitive gaming experiences, tournaments, and talent development
              for the next wave of African players.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://instagram.com/afropandaesports" target="_blank" rel="noreferrer" className="text-neutral-500 transition-colors hover:text-brand-orange" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com/afropandaesport" target="_blank" rel="noreferrer" className="text-neutral-500 transition-colors hover:text-brand-orange" aria-label="X">
                <XIcon size={20} />
              </a>
              <a href="https://www.facebook.com/afropandaesports" target="_blank" rel="noreferrer" className="text-neutral-500 transition-colors hover:text-brand-orange" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="heading-sm text-[var(--text-primary)] !font-body text-xs font-semibold uppercase tracking-[0.15em]">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {footerCompanyLink.map((item) => (
                <li key={item.id}>
                  <Link to={item.url} className={linkClass}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="heading-sm text-[var(--text-primary)] !font-body text-xs font-semibold uppercase tracking-[0.15em]">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.id}>
                  {"external" in item && item.external ? (
                    <a href={item.url} target="_blank" rel="noreferrer" className={linkClass}>
                      {item.title}
                    </a>
                  ) : item.samePage ? (
                    <a href={item.url} className={linkClass} onClick={(e) => { e.preventDefault(); handleClick(item.url, true); }}>
                      {item.title}
                    </a>
                  ) : (
                    <Link to={item.url} className={linkClass}>
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="heading-sm text-[var(--text-primary)] !font-body text-xs font-semibold uppercase tracking-[0.15em]">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-center gap-3 text-neutral-400">
                <Mail size={16} className="shrink-0 text-neutral-500" />
                <a href="mailto:admin@afropandaesports.com" className={linkClass}>
                  admin@afropandaesports.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <MapPin size={16} className="shrink-0 text-neutral-500" />
                <span className="text-sm">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </FadeReveal>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--border)] pt-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} AfroPanda. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="mailto:admin@afropandaesports.com?subject=Privacy%20enquiry" className="transition-colors hover:text-brand-orange">
              Privacy Policy
            </a>
            <a href="mailto:admin@afropandaesports.com?subject=Terms%20enquiry" className="transition-colors hover:text-brand-orange">
              Terms of Service
            </a>
            <a href="mailto:admin@afropandaesports.com?subject=Cookie%20enquiry" className="transition-colors hover:text-brand-orange">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
