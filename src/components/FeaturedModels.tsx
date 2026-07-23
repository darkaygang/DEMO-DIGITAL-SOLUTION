import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { ProductCard } from './ProductCard';
import { Product } from '../types/product';
import { MessageCircle, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { DEMO_PHONE_NUMBER, getProductWhatsAppMessage, getWhatsAppUrl } from '../data/products';
import { RevealTransition } from './ui/SectionTransition';

interface FeaturedModelsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const FeaturedModels: React.FC<FeaturedModelsProps> = ({
  products,
  onSelectProduct,
}) => {
  const featuredProducts = products.filter((p) => p.featured);
  const heroFeatured = featuredProducts[0];
  const secondaryFeatured = featuredProducts.slice(1);

  const heroWaUrl = heroFeatured
    ? getWhatsAppUrl(
        DEMO_PHONE_NUMBER,
        getProductWhatsAppMessage(heroFeatured.name, heroFeatured.capacity, 'contado')
      )
    : '';

  return (
    <section id="modelos" className="py-20 sm:py-28 bg-[#EAE9E5] border-b border-[#131313]/10 relative overflow-hidden -mt-8 pt-28">
      {/* Very subtle noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading with clip-path reveal */}
        <RevealTransition type="clip-path">
          <SectionHeading
            theme="light"
            eyebrow="SELECCIÓN DEMO"
            title="Modelos que quieres mover primero."
            italicWord="mover"
            paragraph="Ejemplo de cómo puedes dar prioridad a equipos clave sin que se pierdan entre publicaciones."
          />
        </RevealTransition>

        {/* Asymmetric Editorial Grid */}
        <RevealTransition type="gallery-shelf" staggerChildren={0.09}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Flagship Curated Hero Plinth (7 cols on desktop) */}
            {heroFeatured && (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                onClick={() => onSelectProduct(heroFeatured)}
                className="lg:col-span-7 group cursor-pointer p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden bg-white/40 border border-[#131313]/10 backdrop-blur-sm shadow-sm transition-all duration-220 desktop-hover-product"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProduct(heroFeatured);
                  }
                }}
              >
                {/* Top Bar Badges */}
                <div className="flex items-center justify-between gap-2 z-10 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-[#131313]/5 border border-[#131313]/10 text-[#131313]/90">
                    <Sparkles className="w-3 h-3 text-[#131313]/70" />
                    FLAGSHIP DESTACADO
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#131313]/5 border border-[#131313]/10 text-[#131313]/60 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#131313]/50" />
                    {heroFeatured.condition}
                  </span>
                </div>

                {/* High-Impact Visual Area */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#131313]/5 border border-[#131313]/10 my-4 p-3 flex items-center justify-center">
                  <img
                    src={heroFeatured.image}
                    alt={heroFeatured.alt}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  
                  {/* Embedded Overlay Caption */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 pointer-events-none">
                    <span className="font-semibold text-white text-base sm:text-lg">{heroFeatured.name}</span>
                    <span className="px-3 py-1 rounded-full bg-[#131313]/80 border border-white/20 font-mono text-xs text-white/90">
                      {heroFeatured.capacity}
                    </span>
                  </div>
                </div>

                {/* Info & Tags */}
                <div className="space-y-3 pt-2">
                  <p className="text-xs sm:text-sm text-[#131313]/70 leading-relaxed line-clamp-2 font-sans">
                    {heroFeatured.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {heroFeatured.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-normal px-2.5 py-0.5 rounded-md bg-[#131313]/5 text-[#131313]/70 border border-[#131313]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="pt-6 mt-6 border-t border-[#131313]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-sm font-semibold text-[#131313]">
                      {heroFeatured.priceLabel}
                    </span>
                    <p className="text-[9px] text-[#131313]/40 uppercase tracking-widest font-medium">
                      ESTRUCTURA DE CONSULTA DEMO
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(heroFeatured);
                      }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#131313]/5 hover:bg-[#131313]/10 text-[#131313] font-medium text-xs border border-[#131313]/10 transition-all active:scale-[0.98] hover:scale-[1.03]"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#131313]/70" />
                      <span>Ver detalles</span>
                    </button>
                    <a
                      href={heroWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] hover:brightness-110 text-[#131313] font-semibold text-xs transition-all active:scale-[0.98] hover:scale-[1.03]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-[#131313] stroke-none" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Secondary Curated Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-5">
              {secondaryFeatured.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={onSelectProduct}
                  variant="featured"
                  theme="light"
                />
              ))}
            </div>

          </div>
        </RevealTransition>

      </div>
      
      {/* Dark ink-blue curtain transition area for next section */}
      <div className="catalog-curtain-transition pointer-events-none"></div>
    </section>
  );
};
