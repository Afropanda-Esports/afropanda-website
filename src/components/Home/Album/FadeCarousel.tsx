import classNames from "classnames";

import { useEffect, useRef, useState } from "react";
import { imageGallery } from ".";


type FadeProp = {
  className?: string;
};

function Fade({ className }: FadeProp) {
  const [activeItem, setActiveItem] = useState(5);
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      "--transition",
      "600ms cubic-bezier(0.22, 0.61, 0.36, 1)"
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  return (
    <div
      className={`flex h-full w-full items-center justify-center ${className}`}
    >
      <div className="w-[1200px] max-w-full">
        <ul
          ref={wrapperRef}
          className="group flex flex-col gap-3 md:h-[640px] md:flex-row md:gap-[1.5%]"
        >
          {imageGallery.map((person, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "relative cursor-pointer md:w-[8%] md:first:w-[1%] md:last:w-[1%] md:[&[aria-current='true']]:w-[48%]",
                "md:[transition:width_var(--transition,200ms_ease-in)]",
                "md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white",
                "md:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%] md:hover:w-[12%]",
                "first:pointer-events-none last:pointer-events-none md:[&_img]:first:opacity-0 md:[&_img]:last:opacity-0"
              )}
              key={person.id}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#c9c6c7]">
                <img
                  className="absolute right-0 top-1/2 h-auto w-24 max-w-none -translate-y-1/2 object-cover  md:left-1/2 md:h-[640px] md:w-[590px] md:-translate-x-1/2"
                  src={person.src}
                  alt={person.alt}
                  width="590px"
                  height="640px"
                />
                <div
                  className={classNames(
                    "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture  after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity",
                    activeItem === index ? "md:opacity-25" : "md:opacity-0"
                  )}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Fade;
