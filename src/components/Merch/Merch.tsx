

import AfroHoddie from "../../assets/AfroHoddie.png";
import AfroJersey from "../../assets/AfroJersey.png";

const MerchShopSection = () => {
  const products = [
    {
      id: 1,
      name: "AfroHoodie",
      image: AfroHoddie,
      type: "hoodie",
    },
    {
      id: 2,
      name: "AfroJersey",
      image: AfroJersey,
      type: "jersey",
    },
    {
      id: 3,
      name: "AfroHoodie",
      image: AfroHoddie,
      type: "hoodie",
    },
  ];

  return (
    <section id="merch" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white mb-12">
          <h2 className="text-5xl font-bold mb-2">Shop</h2>
          <h2 className="text-5xl font-bold">Our Merchs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="bg-gray-200   overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchShopSection;
