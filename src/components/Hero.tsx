import DHeroBg from "../assets/DHeroBg.png";
import MHeroBg from "../assets/MHeroBg.png";

export default function Hero() {
  return (
    <section className="relative h-screen" id="hero">
      {/* Background Images */}
      <div className="absolute inset-0">
        <img
          src={DHeroBg}
          alt="Desktop Background"
          className="hidden md:block w-full h-full object-cover"
        />
        <img
          src={MHeroBg}
          alt="Mobile Background"
          className="block md:hidden w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-[#CC5500]">
              Join the Winning Esports Team
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight  text-white">
              Step into the World of AfroPanda Esports
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              AfroPanda Esports is where talent meets opportunity on the world
              stage.
            </p>
            <div className="space-x-4 flex flex-wrap gap-4">
              <button
                className="bg-[#CC5500] text-white  
                  py-3 px-6 rounded transition duration-300 ease-in-out transform 
                  hover:scale-105"
              >
                Explore Events
              </button>
            </div>
          </div>

          {/* Optional scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce  text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
