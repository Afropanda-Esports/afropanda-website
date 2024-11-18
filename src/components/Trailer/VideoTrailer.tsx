// import { useState } from "react";
// import { Play, X } from "lucide-react";


// export default function VideoTrailer() {
    //   const [isPlaying, setIsPlaying] = useState(false);
    
//   // Replace this URL with your actual video URL
//   const videoUrl =
//     "https://www.youtube.com/embed/2bIe00GYIkI?si=fhCt04nlY8TDl23P";

//   // Replace this with your actual thumbnail image
//   const thumbnailImage = YoutubeThumb;

//   return (
    //     <section className="py-20 bg-[#191825] relative">
    //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //         {/* Video Container */}
//         <div className="relative aspect-video rounded-xl overflow-hidden">
//           {!isPlaying ? (
//             // Thumbnail View
//             <div
//               className="relative w-full h-full group cursor-pointer"
//               onClick={() => setIsPlaying(true)}
//             >
//               {/* Thumbnail Image */}
//               <img
//                 src={thumbnailImage}
//                 alt="Video Thumbnail"
//                 className="w-full h-full object-cover"
//               />

//               {/* Play Button Overlay */}
//               <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
//                 <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                   <Play size={40} className="text-white ml-2" />
//                 </div>
//               </div>
//             </div>
//           ) : (
//             // Video Player
//             <div className="relative w-full h-full">
//               <iframe
//                 className="absolute inset-0 w-full h-full"
//                 src={`${videoUrl}?autoplay=1`}
//                 title="Video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>

//               {/* Close Button */}
//               <button
//                 onClick={() => setIsPlaying(false)}
//                 className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black bg-opacity-50 flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
//               >
//                 <X size={24} className="text-white" />
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//     </section>
//   );
// }
import { useState } from "react";
import { Play, X } from "lucide-react";
import SectionHeader from "../SectionHeader";
import YoutubeThumb from "../../assets/YoutubeThumb.jpg"

export default function VideoTrailer() {
  const [isPlaying, setIsPlaying] = useState(false);
  // Replace this URL with your actual video URL
  const videoUrl = "https://www.youtube.com/embed/2bIe00GYIkI?si=fhCt04nlY8TDl23P";

  return (
    <section className="py-20 bg-[#191825] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader sectionHeader="Watch Our Exciting Trailer" subSectionHeader="Trailer" />
        {/* Video Container */}
        <div className="relative aspect-video rounded-xl overflow-hidden">
          {!isPlaying ? (
            // Thumbnail View
            <div
              className="relative w-full h-full group cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {/* Thumbnail Image */}
              <img
                src={YoutubeThumb}
                alt="Video Thumbnail"
                className="w-full h-full object-cover"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play size={32} className="text-white ml-2" />
                </div>
              </div>
            </div>
          ) : (
            // Video Player
            <div className="relative w-full h-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`${videoUrl}?autoplay=1`}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
              >
                <X size={20} className="text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}