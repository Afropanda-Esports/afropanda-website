// import AfroHoddie from "../../assets/AfroHoddie.png";
// import AfroJersey from "../../assets/AfroJersey.png";

// const MerchShopSection = () => {
//   const products = [
//     {
//       id: 1,
//       name: "AfroHoodie",
//       image: AfroHoddie,
//       type: "hoodie",
//     },
//     {
//       id: 2,
//       name: "AfroJersey",
//       image: AfroJersey,
//       type: "jersey",
//     },
//     {
//       id: 3,
//       name: "AfroHoodie",
//       image: AfroHoddie,
//       type: "hoodie",
//     },
//     {
//       id: 2,
//       name: "AfroJersey",
//       image: AfroJersey,
//       type: "jersey",
//     },
//     {
//       id: 3,
//       name: "AfroHoodie",
//       image: AfroHoddie,
//       type: "hoodie",
//     },
//   ];

//   return (
//     <section id="merch" className="py-20 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-white mb-12">
//           <h2 className="text-5xl font-bold mb-2">Shop</h2>
//           <h2 className="text-5xl font-bold">Our Merchs</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <div key={product.id} className="relative group">
//               <div className="bg-gray-200   overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MerchShopSection;

// import React, { useState } from "react";
// import AfroHoddie from "../../assets/AfroHoddie.png";
// import AfroJersey from "../../assets/AfroJersey.png";
import {
  ShoppingBag,
  // Star
} from "lucide-react";

const MerchShopSection = () => {
  // const [hoveredId, setHoveredId] = useState(null);

  // const products = [
  //   {
  //     id: 1,
  //     name: "AfroHoodie",
  //     image: AfroHoddie,
  //     type: "hoodie",
  //     price: "$59.99",
  //   },
  //   {
  //     id: 2,
  //     name: "AfroJersey",
  //     image: AfroJersey,
  //     type: "jersey",
  //     price: "$49.99",
  //   },
  //   {
  //     id: 3,
  //     name: "AfroHoodie",
  //     image: AfroHoddie,
  //     type: "hoodie",
  //     price: "$59.99",
  //   },
  //   {
  //     id: 4,
  //     name: "AfroJersey",
  //     image: AfroJersey,
  //     type: "jersey",
  //     price: "$49.99",
  //   },
  //   {
  //     id: 5,
  //     name: "AfroHoodie",
  //     image: AfroHoddie,
  //     type: "hoodie",
  //     price: "$59.99",
  //   },
  // ];

  return (
    <section id="merch" className="py-20 bg-[#191825]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with gaming style */}
        <div className="text-white mb-12 relative">
          <div className="flex items-center gap-4 mb-2">
            <ShoppingBag className="w-8 h-8 text-[#CC5500]" />
            <h2 className="text-5xl font-bold relative">
              Shop
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-[#CC5500] rounded-full animate-ping" />
            </h2>
          </div>
          <h2 className="text-5xl font-bold relative inline-block">
            Our Merchs
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#CC5500] to-transparent opacity-50" />
          </h2>
        </div>

        {/* Products grid */}
      </div>
    </section>
  );
};

export default MerchShopSection;

// <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="relative group"
//               onMouseEnter={() => setHoveredId(product.id)}
//               onMouseLeave={() => setHoveredId(null)}
//             >
//               {/* Glowing border effect */}
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CC5500] to-orange-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

//               {/* Product card */}
//               <div className="relative bg-gray-900 rounded-lg overflow-hidden">
//                 {/* Image container */}
//                 <div className="bg-gray-800 aspect-square overflow-hidden">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
//                   />

//                   {/* Hover overlay */}
//                   <div className={`absolute inset-0 bg-gradient-to-t from-[#191825] via-transparent to-transparent transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
//                     <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//                       <div className="flex justify-between items-center">
//                         <h3 className="text-xl font-bold">{product.name}</h3>
//                         <span className="text-[#CC5500] font-bold">{product.price}</span>
//                       </div>
//                       <button className="mt-2 w-full bg-[#CC5500] hover:bg-orange-600 text-white py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center gap-2">
//                         <ShoppingBag className="w-4 h-4" />
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Product type badge */}
//                 <div className="absolute top-4 left-4 bg-[#CC5500] text-white px-3 py-1 rounded-full text-sm font-semibold opacity-90">
//                   {product.type}
//                 </div>

//                 {/* Featured badge */}
//                 {product.id === 1 && (
//                   <div className="absolute top-4 right-4 text-[#CC5500]">
//                     <Star className="w-6 h-6 fill-current animate-pulse" />
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
