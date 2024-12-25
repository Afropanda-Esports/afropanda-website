interface Products {
  id: number;
  name: string;
  description: string;
  price?: number;
  originalPrice?: number;
  image: string;
}

interface MerchCardProps {
  product: Products;
}

export default function MerchCard({ product }: MerchCardProps) {
  return (
    <div className="bg-[#191825] rounded-lg overflow-hidden group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-[#CC5500]/30 flex items-center">
        <img
          src={product.image}
          alt={product.name}
          className=" object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-gray-400 mb-3 text-sm ">{product.description}</p>
      </div>
    </div>
  );
}
