import { ShoppingBag } from "lucide-react";

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
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-[#CC5500]/25 hover:bg-white/[0.05]">
      <div className="relative aspect-square overflow-hidden bg-[#CC5500]/10">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex-1">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-copy">
            {product.name}
          </h3>
          <p className="mt-1 text-xs leading-5 text-copy/60">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            {product.price !== undefined && (
              <span className="text-base font-semibold text-copy">
                ${product.price.toFixed(2)}
              </span>
            )}
            {product.originalPrice !== undefined && (
              <span className="text-xs text-copy/40 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <a
            href="mailto:admin@afropandaesports.com?subject=Merch%20order"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#CC5500] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[#CC5500]/25 transition hover:bg-[#d96214]"
            aria-label={`Order ${product.name}`}
          >
            <ShoppingBag className="h-3.5 w-3.5" aria-hidden />
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
