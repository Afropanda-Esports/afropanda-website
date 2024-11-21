

// const Preloader = () => {
//   return (
//     <div className="fixed inset-0 bg-[#191825] flex items-center justify-center z-50">
//       <div className="text-center">
//         {/* You can replace this with your logo or custom animation */}
//         <div className="w-16 h-16 border-4 border-t-primary rounded-full animate-spin mb-4"></div>
//         <p className="text-white text-lg">Loading...</p>
//       </div>
//     </div>
//   );
// };

// export default Preloader;


import { Gamepad2 } from 'lucide-react';
// import Logo from "../assets/AfroLogo.svg";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-[#191825] flex flex-col items-center justify-center z-50">
      {/* Container with glow effect */}
      <div className="relative text-center">
        {/* Outer rotating ring */}
        {/* <div className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite]">
          <div className="w-32 h-32 rounded-full border-4 border-transparent border-t-[#CC5500] border-r-[#CC5500]/50" />
        </div> */}
        
        {/* Inner rotating ring */}
        {/* <div className="absolute inset-0 rounded-full animate-[spin_2s_linear_infinite_reverse]">
          <div className="w-24 h-24 mx-auto my-4 rounded-full border-4 border-transparent border-b-[#CC5500] border-l-[#CC5500]/50" />
        </div> */}

        {/* Center logo */}
        {/* <div className="relative w-32 h-32 flex items-center justify-center">
          <img 
            src={Logo} 
            alt="AfroPanda Logo" 
            // className="w-16 h-16 animate-pulse"
          />
        </div> */}

        {/* Loading text with animated dots */}
        <div className="mt-8 text-white flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-[#CC5500] animate-bounce" />
          <span className="text-lg font-medium">Loading</span>
          <span className="inline-flex gap-1">
            <span className="w-1 h-1 bg-[#CC5500] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1 h-1 bg-[#CC5500] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1 h-1 bg-[#CC5500] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
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