import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

import { XIcon } from "../icon/XIcon";

import Logo from "../assets/AfroLogo.svg";
import { footernav as navigation, footerCompanyLink } from "../constant";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
    <footer className="bg-[#191825] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <a href="#hero">
                <img className="h-8 w-auto" src={Logo} alt="Logo" />
              </a>
            </div>
            <p className="text-sm mb-4">
              Bringing the best gaming experience to the African community
              through professional esports tournaments and events.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/afropandaesports"
                target="blank"
                className="hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/afropandaesport"
                target="blank"
                className="hover:text-white transition-colors"
              >
                <XIcon size={20} />
              </a>
              <a
                href="https://www.facebook.com/afropandaesports"
                target="blank"
                className="hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerCompanyLink.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.url}
                    className="hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className="hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.url, item.samePage);
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <span>info@afropanda.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <span>+234 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={20} />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm">
              © {currentYear} AfroPanda. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-col space-y-6 md:space-y-0 md:space-x-6 md:flex-row text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
