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
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-[var(--surface)] shadow-soft transition-all duration-300 hover:shadow-card hover:border-brand-orange/20">
      <div className="relative aspect-square overflow-hidden bg-neutral-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-[var(--text-primary)]">
            {product.name}
          </h3>
          <p className="mt-1 text-xs leading-5 text-neutral-500 font-body">{product.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            {product.price !== undefined && (
              <span className="text-base font-bold text-[var(--text-primary)]">
                ${product.price.toFixed(2)}
              </span>
            )}
            {product.originalPrice !== undefined && (
              <span className="text-xs text-neutral-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <a
            href="mailto:admin@afropandaesports.com?subject=Merch%20order"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-4 py-2 text-xs font-semibold text-white transition-all hover:shadow-glow active:scale-[0.98]"
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
