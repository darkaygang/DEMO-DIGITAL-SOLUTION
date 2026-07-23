import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Eye, ShieldCheck } from 'lucide-react';
import { Product } from '../types/product';
import { DEMO_PHONE_NUMBER, getProductWhatsAppMessage, getWhatsAppUrl } from '../data/products';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  variant?: 'featured' | 'standard';
  theme?: 'dark' | 'light' | 'ink-blue';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  variant = 'standard',
  theme = 'dark',
}) => {
  const isLight = theme === 'light';
  const isInkBlue = theme === 'ink-blue';
  
  const quickWaUrl = getWhatsAppUrl(
    DEMO_PHONE_NUMBER,
    getProductWhatsAppMessage(product.name, product.capacity, 'contado')
  );

  const handleQuickWaClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents triggering modal open
  };

  const cardClass = isLight
    ? "group cursor-pointer rounded-2xl p-4 sm:p-5 flex flex-col justify-between h-full relative bg-white/40 border border-[#131313]/10 backdrop-blur-sm shadow-sm transition-all duration-220 desktop-hover-product"
    : isInkBlue 
    ? "group cursor-pointer rounded-2xl p-4 sm:p-5 flex flex-col justify-between h-full relative bg-[#131313]/40 border border-white/10 backdrop-blur-md shadow-lg shadow-black/20 hover:bg-[#131313]/60 transition-all duration-220 desktop-hover-product"
    : "group cursor-pointer rounded-2xl display-card p-4 sm:p-5 flex flex-col justify-between h-full relative transition-all duration-220 desktop-hover-product";

  const badgeClass = isLight 
    ? "text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#131313]/5 border border-[#131313]/10 text-[#131313]/70"
    : "text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70";
    
  const shieldBadgeClass = isLight
    ? "text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#131313]/5 border border-[#131313]/10 text-[#131313]/60 flex items-center gap-1"
    : "text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60 flex items-center gap-1";

  const imgFrameClass = isLight
    ? "relative aspect-[4/3] rounded-xl overflow-hidden bg-[#131313]/5 mb-4 border border-[#131313]/10 flex items-center justify-center p-2"
    : isInkBlue
    ? "relative aspect-[4/3] rounded-xl overflow-hidden bg-black/40 mb-4 border border-white/5 flex items-center justify-center p-2"
    : "relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60 mb-4 border border-white/5 flex items-center justify-center p-2";

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
      }}
      onClick={() => onSelectProduct(product)}
      className={cardClass}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectProduct(product);
        }
      }}
      aria-label={`Ver detalles de ${product.name} ${product.capacity}`}
    >
      {/* Light Reflection Pseudo-element for Ink Blue */}
      {isInkBlue && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent rounded-2xl pointer-events-none"></div>
      )}

      {/* Top Badges */}
      <div className="flex items-center justify-between gap-2 z-10 mb-3 relative">
        <span className={badgeClass}>
          {product.category}
        </span>
        <span className={shieldBadgeClass}>
          <ShieldCheck className={`w-3 h-3 ${isLight ? 'text-[#131313]/50' : 'text-white/50'}`} />
          {product.condition}
        </span>
      </div>

      {/* Product Image Frame (Preserving product.image) */}
      <div className={imgFrameClass}>
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? 'from-[#131313]/80' : 'from-black/80'} via-transparent to-transparent opacity-40`}></div>
        
        {/* Subtle Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-xs font-medium">
          <Eye className="w-3.5 h-3.5 text-white/80" />
          <span>Ver ficha completa</span>
        </div>
      </div>

      {/* Product Information */}
      <div className="space-y-2 flex-grow relative">
        <div className="flex items-start justify-between gap-2">
          <h3 className={`font-semibold text-base sm:text-lg transition-colors leading-snug font-sans ${isLight ? 'text-[#131313] group-hover:text-[#131313]/90' : 'text-white group-hover:text-white/90'}`}>
            {product.name}
          </h3>
          <span className={`text-[11px] font-medium px-2 py-0.5 rounded border whitespace-nowrap ${isLight ? 'bg-[#131313]/5 border-[#131313]/10 text-[#131313]/80' : 'bg-white/5 border-white/10 text-white/80'}`}>
            {product.capacity}
          </span>
        </div>
        <p className={`text-xs flex items-center gap-1.5 ${isLight ? 'text-[#131313]/50' : 'text-white/50'}`}>
          <span className={`w-1.5 h-1.5 rounded-full inline-block ${isLight ? 'bg-[#131313]/30' : 'bg-white/30'}`}></span>
          Color: <span className={`font-normal ${isLight ? 'text-[#131313]/80' : 'text-white/80'}`}>{product.color}</span>
        </p>
        
        {/* Short Description */}
        <p className={`text-xs line-clamp-2 leading-relaxed pt-1 font-sans ${isLight ? 'text-[#131313]/60' : 'text-white/60'}`}>
          {product.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {product.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-normal px-2 py-0.5 rounded border ${isLight ? 'bg-[#131313]/5 text-[#131313]/60 border-[#131313]/10' : 'bg-white/5 text-white/60 border-white/5'}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Price & CTAs */}
      <div className={`pt-4 mt-4 border-t space-y-3 relative ${isLight ? 'border-[#131313]/10' : 'border-white/10'}`}>
        <div className="flex items-center justify-between">
          <span className={`text-xs font-semibold ${isLight ? 'text-[#131313]/90' : 'text-white/90'}`}>
            {product.priceLabel}
          </span>
          <span className={`text-[9px] font-medium uppercase tracking-widest ${isLight ? 'text-[#131313]/40' : 'text-white/40'}`}>
            ILUSTRATIVO
          </span>
        </div>

        <div className="grid grid-cols-12 gap-2">
          {/* Main Detail Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            className={`col-span-7 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl font-medium text-xs border transition-all active:scale-[0.98] hover:scale-[1.03] ${isLight ? 'bg-[#131313]/5 hover:bg-[#131313]/10 text-[#131313] border-[#131313]/10' : 'bg-white/5 hover:bg-white/10 text-white border-white/10'}`}
          >
            <Eye className={`w-3.5 h-3.5 ${isLight ? 'text-[#131313]/70' : 'text-white/70'}`} />
            <span>{variant === 'featured' ? 'Detalles' : 'Ficha'}</span>
          </button>

          {/* Quick WhatsApp Button */}
          <a
            href={quickWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleQuickWaClick}
            className={`col-span-5 inline-flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] font-semibold text-xs transition-all active:scale-[0.98] hover:scale-[1.03] ${isLight ? 'text-[#131313]' : 'text-black'}`}
            aria-label={`Consultar ${product.name} por WhatsApp`}
            title="Consultar por WhatsApp"
          >
            <MessageCircle className={`w-3.5 h-3.5 stroke-none ${isLight ? 'fill-[#131313]' : 'fill-black'}`} />
            <span className="truncate">WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
