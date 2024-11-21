// import SectionHeader from "../SectionHeader";
// import { imageGallery } from ".";
// import AlbumCard from "./AlbumCard";

// export default function Album() {
//   return (
//     <section id="album" className=" py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}

//         <SectionHeader
//           sectionHeader="Moments Captured"
//           subSectionHeader="Gallery"
//         />

//         {/* Album Grid */}

//         <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
//             {imageGallery.map((image, index) => (
//                 <AlbumCard image={image} key={index} />
//             ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';
import { imageGallery } from '.';
import AlbumCard from './AlbumCard';

// Define interfaces
interface AlbumCardP {
  id: number;
  src: string;
  alt: string;
  className: string;
}

interface GalleryRowProps {
  images: AlbumCardP[];
  duration?: number;
  className?: string;
}



const GalleryRow: React.FC<GalleryRowProps> = ({ 
  images, 
  duration = 15, 
  className = '' 
}) => {
  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <motion.div
        animate={{
          translateX: '-50%'
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop'
        }}
        className="flex gap-3 -translate-x-1/2"
      >
        {[...new Array(2)].map((_, arrayIndex) => (
          <React.Fragment key={arrayIndex}>
            {images.map((image: AlbumCardP, index: number) => (
              <div
                key={`${arrayIndex}-${index}`}
                className="w-96 flex-shrink-0"
              >
                <AlbumCard
                  image={{
                    ...image,
                    className: `${image.className} h-64`
                  }}
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

// Album Component
const Album: React.FC = () => {
  return (
    <section id="album" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionHeader="Moments Captured"
          subSectionHeader="Gallery"
        />
        
        <div className="flex flex-col gap-3 [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)]">
          <GalleryRow images={imageGallery} duration={15} />
          <GalleryRow images={imageGallery} duration={19} />
          <GalleryRow images={imageGallery} duration={17} />
        </div>
      </div>
    </section>
  );
};



export default Album;