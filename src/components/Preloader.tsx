import { Gamepad2 } from "lucide-react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-[#191825] flex flex-col items-center justify-center z-50">
      <div className="relative text-center">
        <div className="mt-8 text-white flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-[#CC5500] animate-bounce" />
          <span className="text-lg font-medium">Loading</span>
          <span className="inline-flex gap-1">
            <span
              className="w-1 h-1 bg-[#CC5500] rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></span>
            <span
              className="w-1 h-1 bg-[#CC5500] rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></span>
            <span
              className="w-1 h-1 bg-[#CC5500] rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></span>
          </span>
        </div>

        {/* Tips container */}
        <div className="absolute top-full mt-8 max-w-xs mx-auto px-4">
          <div className="text-gray-400 text-sm text-center opacity-75">
            <p className="animate-fade-in-out">
              Preparing your gaming experience...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
