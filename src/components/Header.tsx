import Logo from "../assets/AfroLogo.svg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation2 } from "../constant";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HamburgerMenu } from "./Design";
import { useState, useEffect } from "react";
import MenuSvg from "../assets/MenuSvg";

import { Facebook, Instagram } from "lucide-react";
import { XIcon } from "../icon/XIcon";

export default function Header2() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setOpenNavigation(false);
        enablePageScroll();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleNavigation = () => {
    if (isMobile) {
      if (openNavigation) {
        setOpenNavigation(false);
        enablePageScroll();
      } else {
        setOpenNavigation(true);
        disablePageScroll();
      }
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

    if (isMobile) {
      toggleNavigation();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-[#191825] lg:backdrop-blur-sm ${
        openNavigation ? "bg-[#191825]" : "bg-[#191825] backdrop-blur-sm"
      }`}
    >
      <div className="flex max-w-8xl mx-auto items-center px-5 py-5 md:py-5 ">
        {/* Logo */}
        <Link to="/" className="block w-[12rem] xl:mr-8">
          <img src={Logo} width={150} height={40} alt="Damisa" />
        </Link>

        {/* Navigation */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-[#0E0C15] lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation2.map((item) =>
              item.samePage ? (
                <a
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.url, item.samePage);
                  }}
                  key={item.title}
                  className={`block relative  text-2xl text-white transition-colors hover:text-white px-6  lg:text-base lg:font-semibold lg:leading-5  py-6 md:py-0 `}
                >
                  {item.title}
                </a>
              ) : (
                // py-6 md:py-8
                <Link
                  to={item.url}
                  onClick={() => handleClick(item.url)}
                  key={item.title}
                  className={`block relative font-code text-2xl text-white transition-colors hover:text-white px-6  lg:text-base lg:font-semibold lg:leading-5 py-6 md:py-0 `}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>

          <HamburgerMenu />
        </nav>

        {/* Contact Button */}
        {/* <Link to="/contact" className="hidden lg:flex">
          <Button title="Contact Me" />
        </Link> */}
        <div className="flex justify-center space-x-3 md:space-x-6 text-gray-300">
          <a
            href="https://instagram.com/afropandaesports"
            target="blank"
            className="hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://twitter.com/afropandaesport"
            target="blank"
            className="hover:text-white transition-colors"
          >
            <XIcon className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a
            href="https://www.facebook.com/afropandaesports"
            target="blank"
            className="hover:text-white transition-colors"
          >
            <Facebook className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="ml-auto lg:hidden px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </div>
      </div>
    </div>
  );
}
