// import { ChevronDown, ChevronUp } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { enablePageScroll } from "scroll-lock";

// interface DropdownMenuItems {
//   label: string;
//   url: string;
// }

// interface DropdownMenuProps {
//   label: string;
//   items: DropdownMenuItems[];
//   toggleMenu?: () => void;
// }

// const DropdownMenu = ({ items, label, toggleMenu }: DropdownMenuProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLLIElement>(null);
//   const navigate = useNavigate();

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeDropdown = () => {
//     setIsOpen(false);
//   };

//   const handleNavigation = (url: string) => {
//     closeDropdown();
//     enablePageScroll(); // Ensure scroll is enabled before navigation
//     if (toggleMenu) {
//       toggleMenu(); // This will handle mobile menu closing
//     }
//     navigate(url);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         event.target instanceof HTMLElement &&
//         !dropdownRef.current.contains(event.target)
//       ) {
//         closeDropdown();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   // Cleanup effect to ensure scroll is enabled when component unmounts
//   useEffect(() => {
//     return () => {
//       enablePageScroll();
//     };
//   }, []);

//   return (
//     <li className="relative list-none" ref={dropdownRef}>
//       <button
//         className="flex items-center space-x-2 py-2 px-4 bg-[#CC5500]/20 rounded-md cursor-pointer text-white"
//         onClick={toggleDropdown}
//       >
//         <span>{label}</span>
//         {isOpen ? (
//           <ChevronUp className="h-5 w-5" />
//         ) : (
//           <ChevronDown className="h-5 w-5" />
//         )}
//       </button>
//       {isOpen && (
//         <div className="absolute left-0 mt-2 w-48 bg-[#CC5500] rounded-md shadow-lg z-10 py-2">
//           {items.map((item, index) => (
//             <button
//               key={index}
//               onClick={() => handleNavigation(item.url)}
//               className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-white dark:hover:bg-[#CC5500]/20 transition-colors duration-300"
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       )}
//     </li>
//   );
// };

// export default DropdownMenu;


import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface DropdownMenuItems {
  label: string;
  url: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownMenuItems[];
  toggleMenu?: () => void;
}

const DropdownMenu = ({ items, label, toggleMenu }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleNavigation = (url: string) => {
    closeDropdown();
    if (toggleMenu) {
      toggleMenu();
    }
    setTimeout(() => {
      navigate(url);
    }, 10);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof HTMLElement &&
        !dropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <li className="relative list-none" ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 py-2 px-4 bg-[#CC5500]/20 rounded-md cursor-pointer text-white"
        onClick={toggleDropdown}
      >
        <span>{label}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-[#CC5500] rounded-md shadow-lg z-10 py-2">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item.url)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-white dark:hover:bg-[#CC5500]/20 transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </li>
  );
};

export default DropdownMenu;