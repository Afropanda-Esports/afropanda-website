import { win, entertain, innovate, fifa, robot } from "../../assets";
import { DecorativeElement } from "../Design";

export default function ImageSect() {
  const images = [
    {
      id: 1,
      src: win,
      alt: "Team member presenting",
      className: "md:col-span-1 row-span-4 md:row-span-1",
    },
    {
      id: 2,
      src: entertain,
      alt: "Event space with decorations",
      className: "md:col-span-2 row-span-4 md:row-span-2",
    },
    {
      id: 3,
      src: innovate,
      alt: "Team members sharing a moment",
      className: "col-span-2 row-span-12 md:row-span-2",
    },
    {
      id: 4,
      src: fifa,
      alt: "Team member in casual setting",
      className: "col-span-1 row-span-8 md:row-span-1",
    },
    {
      id: 5,
      src: robot,
      alt: "Team member working",
      className: "col-span-1 row-span-4 md:row-span-1",
    },
    {
      id: 6,
      src: innovate,
      alt: "Team members sharing a moment",
      className: "col-span-1 row-span-1  row-span-4 md:row-span-1",
    },
    {
      id: 7,
      src: fifa,
      alt: "Team member in casual setting",
      className: " hidden md:flex col-span-1 row-span-1",
    },
    {
      id: 8,
      src: robot,
      alt: "Team member working",
      className: "hidden md:flex col-span-1 row-span-1",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fixed height container */}
        <div className="h-screen md:h-[500px]">
          {/* Grid with aspect ratio preservation */}
          <div className="grid grid-cols-2  md:grid-cols-7 gap-2 h-full">
            {images.map((image) => (
              <div
                key={image.id}
                className={`${image.className} relative overflow-hidden rounded-lg shadow-lg `}
              >
                {/* Container with aspect ratio */}
                <div className="absolute inset-0">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DecorativeElement />
    </section>
  );
}
