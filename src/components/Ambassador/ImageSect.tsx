import {
  Am1,
  Am2,
  Am3,
  Am4,
  Am5,
  Am6,
  Am7,
  Am8,
} from "../../assets/Ambassador";
import { DecorativeElement } from "../Design";

export default function ImageSect() {
  const images = [
    {
      id: 1,
      src: Am1,
      alt: "Gamer Standing",
      className: "md:col-span-1 row-span-4 md:row-span-1",
    },
    {
      id: 2,
      src: Am2,
      alt: "Gamers playing game",
      className: "md:col-span-2 row-span-4 md:row-span-2",
    },
    {
      id: 3,
      src: Am4,
      alt: "Gamers playing game",
      className: "col-span-2 row-span-12 md:row-span-2",
    },
    {
      id: 4,
      src: Am3,
      alt: "Team member in casual setting",
      className: "col-span-1 row-span-8 md:row-span-1",
    },
    {
      id: 5,
      src: Am5,
      alt: "Team member working",
      className: "col-span-1 row-span-4 md:row-span-1",
    },
    {
      id: 6,
      src: Am6,
      alt: "Team members sharing a moment",
      className: "col-span-1 row-span-1  row-span-4 md:row-span-1",
    },
    {
      id: 7,
      src: Am7,
      alt: "Team member in casual setting",
      className: " hidden md:flex col-span-1 row-span-1",
    },
    {
      id: 8,
      src: Am8,
      alt: "Team member working",
      className: "hidden md:flex col-span-1 row-span-1",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    className="w-full h-full object-cover "
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
