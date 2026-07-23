const fs = require('fs');

const code = `import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
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
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = featuredProducts[activeIndex];
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const [mobileActive, setMobileActive] = useState(0);

  useEffect(() => {
    const root = carouselRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index)) setMobileActive(index);
          }
        });
      },
      { root, threshold: 0.6 }
    );

    Array.from(root.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [featuredProducts]);

  if (!activeProduct) return null;

  const activeWaUrl = getWhatsAppUrl(
    DEMO_PHONE_NUMBER,
    getProductWhatsAppMessage(activeProduct.name, activeProduct.capacity, 'contado')
  );

  return (
    <section id="modelos" className="py-20 sm:py-28 bg-[#EAE9E5] relative overflow-hidden -mt-8 pt-28">
      {/* Background to Transition Band */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <RevealTransition type="clip-path">
          <SectionHeading
            theme="light"
            eyebrow="SELECCIÓN DEMO"
            title="Modelos que quieres mover primero."
            italicWord="mover"
            paragraph="Ejemplo de cómo puedes dar prioridad a equipos clave sin que se pierdan entre publicaciones."
          />
        </RevealTransition>

        {/* Desktop Editorial Gallery */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch mt-12">
          {/* Main Product Display */}
          <div className="col-span-8 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 14, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.985 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 bg-white/40 border border-[#131313]/10 backdrop-blur-sm rounded-[2rem] p-8 flex flex-col relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-2 z-10 mb-6">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-[#131313]/5 border border-[#131313]/10 text-[#131313]/90">
                    <Sparkles className="w-3 h-3 text-[#131313]/70" />
                    FLAGSHIP DESTACADO
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#131313]/5 border border-[#131313]/10 text-[#131313]/60 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#131313]/50" />
                    {activeProduct.condition}
                  </span>
                </div>

                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-[#131313]/5 border border-[#131313]/10 mb-6 flex items-center justify-center">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.alt}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white pointer-events-none">
                    <motion.span 
                      initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
                      animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
                      transition={{ duration: 0.42, delay: 0.1 }}
                      className="font-semibold text-2xl"
                    >
                      {activeProduct.name}
                    </motion.span>
                    <span className="px-3 py-1.5 rounded-full bg-[#131313]/80 border border-white/20 font-mono text-sm">
                      {activeProduct.capacity}
                    </span>
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <p className="text-sm text-[#131313]/70 leading-relaxed font-sans max-w-2xl">
                    {activeProduct.shortDescription}
                  </p>
                  
                  <div className="pt-6 mt-4 border-t border-[#131313]/10 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-semibold text-[#131313]">
                        {activeProduct.priceLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onSelectProduct(activeProduct)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#131313]/5 hover:bg-[#131313]/10 text-[#131313] font-medium text-sm border border-[#131313]/10 transition-all active:scale-[0.98]"
                      >
                        <Eye className="w-4 h-4 text-[#131313]/70" />
                        <span>Ver detalles</span>
                      </button>
                      <a
                        href={activeWaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:brightness-110 text-[#131313] font-semibold text-sm transition-all active:scale-[0.98]"
                      >
                        <MessageCircle className="w-4 h-4 fill-[#131313] stroke-none" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side List */}
          <div className="col-span-4 flex flex-col gap-3">
            {featuredProducts.map((product, idx) => (
              <button
                key={product.id}
                onClick={() => setActiveIndex(idx)}
                onFocus={() => setActiveIndex(idx)}
                className={\`text-left p-5 rounded-2xl border transition-all duration-300 \${
                  activeIndex === idx 
                    ? 'bg-white/60 border-[#131313]/20 shadow-sm' 
                    : 'bg-white/10 border-[#131313]/5 hover:bg-white/30 hover:border-[#131313]/10'
                }\`}
              >
                <div className="flex items-start gap-4">
                  <span className={\`font-mono text-sm \${activeIndex === idx ? 'text-[#131313]' : 'text-[#131313]/40'}\`}>
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className={\`font-semibold \${activeIndex === idx ? 'text-[#131313]' : 'text-[#131313]/60'}\`}>
                      {product.name}
                    </h4>
                    <p className={\`text-xs mt-1 \${activeIndex === idx ? 'text-[#131313]/70' : 'text-[#131313]/40'}\`}>
                      {product.capacity} • {product.condition}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="lg:hidden mt-8">
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs font-semibold text-[#131313]/70 uppercase tracking-wider">Destacados</span>
            <span className="text-xs font-mono text-[#131313]/50">0{mobileActive + 1} / 0{featuredProducts.length}</span>
          </div>
          
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 -mx-4 px-4 gap-4"
          >
            {featuredProducts.map((product, idx) => (
              <div 
                key={product.id}
                data-index={idx}
                className="snap-center shrink-0 w-[90vw] sm:w-[400px]"
              >
                <ProductCard
                  product={product}
                  onSelectProduct={onSelectProduct}
                  variant="featured"
                  theme="light"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Transición: Líneas de ficha se multiplican hacia el catálogo azul tinta */}
      <div className="absolute bottom-0 inset-x-0 h-[220px] bg-gradient-to-t from-[#0A0E17] via-[#0A0E17]/60 to-transparent pointer-events-none z-0">
        <div className="absolute inset-0 opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black)]" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
    </section>
  );
};
`
fs.writeFileSync('src/components/FeaturedModels.tsx', code);
