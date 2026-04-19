import { Facebook, Instagram, Mail, MapPin } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FadeReveal from "./FadeReveal";
import Logo from "../assets/AfroLogo.svg";
import { footernav as navigation, footerCompanyLink } from "../constant";
import { XIcon } from "../icon/XIcon";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
  };

  return (
    <footer className="border-t border-white/10 bg-[#111017] text-copy">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <FadeReveal className="grid grid-cols-1 gap-10 text-copy md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#hero" className="text-copy">
              <img className="h-8 w-auto" src={Logo} alt="AfroPanda logo" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-7 text-copy">
              Competitive gaming experiences, tournaments, and talent development
              for the next wave of African players.
            </p>
            <div className="mt-5 flex gap-4 text-copy">
              <a
                href="https://instagram.com/afropandaesports"
                target="_blank"
                rel="noreferrer"
                className="text-copy transition-colors hover:text-[#CC5500]"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-copy" />
              </a>
              <a
                href="https://twitter.com/afropandaesport"
                target="_blank"
                rel="noreferrer"
                className="text-copy transition-colors hover:text-[#CC5500]"
                aria-label="X"
              >
                <XIcon size={20} className="text-copy" />
              </a>
              <a
                href="https://www.facebook.com/afropandaesports"
                target="_blank"
                rel="noreferrer"
                className="text-copy transition-colors hover:text-[#CC5500]"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-copy" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-copy">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-copy">
              {footerCompanyLink.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.url}
                    className="text-copy transition-colors hover:text-[#CC5500]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-copy">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-copy">
              {navigation.map((item) => (
                <li key={item.id}>
                  {"external" in item && item.external ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-copy transition-colors hover:text-[#CC5500]"
                    >
                      {item.title}
                    </a>
                  ) : item.samePage ? (
                    <a
                      href={item.url}
                      className="text-copy transition-colors hover:text-[#CC5500]"
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.url, true);
                      }}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      to={item.url}
                      className="text-copy transition-colors hover:text-[#CC5500]"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-copy">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-copy">
              <li className="flex items-center gap-3 text-copy">
                <Mail size={18} className="shrink-0 text-copy" aria-hidden />
                <span className="text-copy">info@afropanda.com</span>
              </li>
              <li className="flex items-center gap-3 text-copy">
                <MapPin size={18} className="shrink-0 text-copy" aria-hidden />
                <span className="text-copy">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </FadeReveal>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-copy md:flex-row md:items-center md:justify-between">
          <p className="text-copy">© {currentYear} AfroPanda. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="text-copy transition-colors hover:text-[#CC5500]">
              Privacy Policy
            </a>
            <a href="#" className="text-copy transition-colors hover:text-[#CC5500]">
              Terms of Service
            </a>
            <a href="#" className="text-copy transition-colors hover:text-[#CC5500]">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
