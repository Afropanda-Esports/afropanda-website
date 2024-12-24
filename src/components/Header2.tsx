// import { useState, useEffect } from "react";
// import Logo from "../assets/AfroLogo.svg";
// import { MenuIcon, XIcon } from "lucide-react";
// import { Facebook, Instagram } from "lucide-react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// import { XIcon as XT } from "../icon/XIcon";

// import DropdownMenu from "./DropdownMenu";

// import { disablePageScroll, enablePageScroll } from "scroll-lock";
// import { navigationItems } from "../constant";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

//   const toggleMenu = () => {
//     setIsMenuOpen((prevState) => {
//       const newState = !prevState;
//       if (newState) {
//         disablePageScroll(); // Disable scroll when opening menu
//       } else {
//         enablePageScroll(); // Enable scroll when closing menu
//       }
//       return newState;
//     });
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//       if (window.innerWidth >= 1024) {
//         setIsMenuOpen(false);
//         enablePageScroll();
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleClick = (url: string, samePage?: boolean) => {
//     if (samePage) {
//       if (location.pathname === "/") {
//         handleScrollToSection(url);
//       } else {
//         navigate("/");
//         setTimeout(() => handleScrollToSection(url), 300);
//       }
//     } else {
//       navigate(url);
//     }

//     if (isMobile) {
//       toggleMenu();
//     }
//   };

//   const handleScrollToSection = (id: string) => {
//     const section = document.querySelector(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Clean up scroll disabling when the component unmounts or the menu closes
//   useEffect(() => {
//     return () => enablePageScroll();
//   }, []);
//   return (
//     <header className="sticky top-0 z-50 flex h-14 md:h-16 bg-[#191825]">
//       <div className="max-w-8xl flex h-full mx-auto w-full items-center px-5 py-5 md:py-5">
//         {/* Desktop Nav */}
//         <div className="hidden w-full items-center justify-between md:flex">
//           <Link to="/" className="">
//             <img src={Logo} alt="AfroPanda" loading="lazy" />
//           </Link>

//           <ul className="flex items-center">
//             {navigationItems.map((item, index) =>
//               item.children ? (
//                 <DropdownMenu
//                   key={index}
//                   items={item.children}
//                   label={item.label}
//                 />
//               ) : item.samePage ? (
//                 <a
//                   href={item.url}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     handleClick(item.url, item.samePage);
//                   }}
//                   key={item.label}
//                   className={`block relative   text-white transition-colors hover:text-white px-6  lg:text-base  lg:leading-5  py-6 md:py-0 `}
//                 >
//                   {item.label}
//                 </a>
//               ) : (
//                 <Link
//                   to={item.url}
//                   onClick={() => handleClick(item.url)}
//                   key={item.label}
//                   className={`block relative font-code text-white transition-colors hover:text-white px-6  lg:text-base  lg:leading-5 py-6 md:py-0 `}
//                 >
//                   {item.label}
//                 </Link>
//               )
//             )}
//           </ul>

//           <div className="flex justify-center space-x-3 md:space-x-6 text-gray-300">
//             <a
//               href="https://instagram.com/afropandaesports"
//               target="blank"
//               className="hover:text-white transition-colors"
//             >
//               <Instagram className="w-5 h-5 md:w-6 md:h-6" />
//             </a>
//             <a
//               href="https://twitter.com/afropandaesport"
//               target="blank"
//               className="hover:text-white transition-colors"
//             >
//               <XT className="w-5 h-5 md:w-6 md:h-6" />
//             </a>
//             <a
//               href="https://www.facebook.com/afropandaesports"
//               target="blank"
//               className="hover:text-white transition-colors"
//             >
//               <Facebook className="w-5 h-5 md:w-6 md:h-6" />
//             </a>
//           </div>
//         </div>

//         {/* Mobile Nav */}
//         <div className="flex w-full justify-between items-center gap-4 md:hidden z-50">
//           <Link to="/" className="">
//             <img src={Logo} alt="AfroPanda" loading="lazy" />
//           </Link>

//           <button onClick={toggleMenu} aria-label="Toggle Menu">
//             {isMenuOpen ? (
//               <XIcon className="text-white w-6 h-6" />
//             ) : (
//               <MenuIcon className="text-white w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Full screen Mobile Menu */}
//         {isMenuOpen && (
//           <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#191825] text-primary transition-all duration-300 md:hidden">
//             <nav className="flex flex-col items-center space-y-6">
//               {navigationItems.map((item, index) =>
//                 item.children ? (
//                   <div key={index} className="relative flex flex-col items-center">
//                     <span className="text-white text-xl font-semibold">
//                       {item.label}
//                     </span>
//                     <div className="flex flex-col items-center space-y-4 mt-4">
//                       {item.children.map((child, childIndex) => (
//                         <Link
//                           key={childIndex}
//                           to={child.url}
//                           onClick={() => handleClick(child.url)}
//                           className="text-gray-300 hover:text-white transition-colors text-lg"
//                         >
//                           {child.label}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 ) : item.samePage ? (
//                   <a
//                     href={item.url}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleClick(item.url, item.samePage);
//                     }}
//                     key={item.label}
//                     className="text-white text-xl font-semibold hover:text-gray-300 transition-colors"
//                   >
//                     {item.label}
//                   </a>
//                 ) : (
//                   <Link
//                     to={item.url}
//                     onClick={() => handleClick(item.url)}
//                     key={item.label}
//                     className="text-white text-xl font-semibold hover:text-gray-300 transition-colors"
//                   >
//                     {item.label}
//                   </Link>
//                 )
//               )}
//             </nav>

//             {/* Social Links for Mobile */}
//             <div className="flex justify-center space-x-8 text-gray-300 mt-8">
//               <a
//                 href="https://instagram.com/afropandaesports"
//                 target="blank"
//                 className="hover:text-white transition-colors"
//               >
//                 <Instagram className="w-7 h-7" />
//               </a>
//               <a
//                 href="https://twitter.com/afropandaesport"
//                 target="blank"
//                 className="hover:text-white transition-colors"
//               >
//                 <XT className="w-7 h-7" />
//               </a>
//               <a
//                 href="https://www.facebook.com/afropandaesports"
//                 target="blank"
//                 className="hover:text-white transition-colors"
//               >
//                 <Facebook className="w-7 h-7" />
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

import { useState, useEffect } from "react";
import Logo from "../assets/AfroLogo.svg";
import { MenuIcon, XIcon } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { XIcon as XT } from "../icon/XIcon";

import DropdownMenu from "./DropdownMenu";

import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigationItems } from "../constant";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => {
      const newState = !prevState;
      if (newState) {
        disablePageScroll(); // Disable scroll when opening menu
      } else {
        enablePageScroll(); // Enable scroll when closing menu
      }
      return newState;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        enablePageScroll();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      toggleMenu();
    }
  };

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Clean up scroll disabling when the component unmounts or the menu closes
  useEffect(() => {
    return () => enablePageScroll();
  }, []);
  return (
    <header className="sticky top-0 z-50 flex h-14 md:h-16 bg-[#191825]">
      <div className="max-w-8xl flex h-full mx-auto w-full items-center px-5 py-5 md:py-5">
        {/* Desktop Nav */}
        <div className="hidden w-full items-center justify-between md:flex">
          <Link to="/" className="">
            <img src={Logo} alt="AfroPanda" loading="lazy" />
          </Link>

          <ul className="flex items-center">
            {navigationItems.map((item, index) =>
              item.children ? (
                <DropdownMenu
                  key={index}
                  items={item.children}
                  label={item.label}
                  toggleMenu={toggleMenu}
                />
              ) : item.samePage ? (
                <a
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.url, item.samePage);
                  }}
                  key={item.label}
                  className={`block relative text-white transition-colors hover:text-white px-6 lg:text-base lg:leading-5 py-6 md:py-0`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.url}
                  onClick={() => handleClick(item.url)}
                  key={item.label}
                  className={`block relative font-code text-white transition-colors hover:text-white px-6 lg:text-base lg:leading-5 py-6 md:py-0`}
                >
                  {item.label}
                </Link>
              )
            )}
          </ul>

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
              <XT className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://www.facebook.com/afropandaesports"
              target="blank"
              className="hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex w-full justify-between items-center gap-4 md:hidden z-50">
          <Link to="/" className="">
            <img src={Logo} alt="AfroPanda" loading="lazy" />
          </Link>

          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <XIcon className="text-white w-6 h-6" />
            ) : (
              <MenuIcon className="text-white w-6 h-6" />
            )}
          </button>
        </div>

        {/* Full screen Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 flex flex-col items-center justify-between gap-8 bg-[#191825] text-primary transition-all duration-300 md:hidden py-14">
            <div></div>
            <nav className="flex flex-col items-center space-y-6">
              {navigationItems.map((item, index) =>
                item.children ? (
                  <div key={index} className="relative w-full">
                    <DropdownMenu
                      key={index}
                      items={item.children}
                      label={item.label}
                      // className="mobile-dropdown"
                      toggleMenu={toggleMenu}
                    />
                  </div>
                ) : item.samePage ? (
                  <a
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.url, item.samePage);
                    }}
                    key={item.label}
                    className="text-white text-xl font-semibold hover:text-gray-300 transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.url}
                    onClick={() => handleClick(item.url)}
                    key={item.label}
                    className="text-white text-xl font-semibold hover:text-gray-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* Social Links for Mobile */}
            <div className="flex justify-center space-x-8 text-gray-300 mt-8">
              <a
                href="https://instagram.com/afropandaesports"
                target="blank"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a
                href="https://twitter.com/afropandaesport"
                target="blank"
                className="hover:text-white transition-colors"
              >
                <XT className="w-7 h-7" />
              </a>
              <a
                href="https://www.facebook.com/afropandaesports"
                target="blank"
                className="hover:text-white transition-colors"
              >
                <Facebook className="w-7 h-7" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
