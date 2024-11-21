import { useState } from "react";
import Logo from "../assets/AfroLogo.svg";
import { navigation } from "../constant";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { XIcon } from "../icon/XIcon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#191825]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#CC5500] to-orange-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <a
              href="#hero"
              onClick={() => setIsMenuOpen(false)}
              className="relative block"
            >
              <img
                className="h-8 w-auto transform group-hover:scale-105 transition-transform duration-300"
                src={Logo}
                alt="Logo"
              />
            </a>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4 text-gray-300">
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#191825] bg-opacity-80">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="flex justify-center space-x-6 py-4 border-t border-gray-700 text-gray-300">
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
      )}
    </nav>
  );
}
