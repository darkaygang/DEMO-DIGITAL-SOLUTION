import React, { useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { CategoryFilters } from './CategoryFilters';
import { ProductCard } from './ProductCard';
import { Product, ProductCategory } from '../types/product';
import { RevealTransition } from './ui/SectionTransition';
import { Reveal } from './ui/Reveal';

interface CatalogProps {
  products: Product[];
  activeCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  onSelectProduct: (product: Product) => void;
}

const CATEGORIES: ProductCategory[] = [
  'Todos',
  'iPhone',
  'Android',
  'Usados / Reacondicionados',
  'Accesorios',
];

export const Catalog: React.FC<CatalogProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  onSelectProduct,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });
  const prefersReducedMotion = useReducedMotion();

  const filteredProducts =
    activeCategory === 'Todos'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogo" className="relative pb-20 sm:pb-28 bg-[#0A0E17] border-b border-white/10 z-20 pt-20 sm:pt-28">
      
      
      

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Sequence: Eyebrow, then heading, then filters, then counter */}
        <div className="space-y-4">
          <RevealTransition type="clip-path">
            <SectionHeading
              eyebrow="CATÁLOGO DEMO"
              title="Que cada cliente encuentre lo que busca antes de escribir."
              italicWord="feed"
              paragraph="En vez de preguntar “¿qué tienes disponible?”, el cliente puede revisar modelos, memoria, estado y opciones de pago antes de abrir WhatsApp."
            />
          </RevealTransition>

          <CategoryFilters
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onSelectCategory={onSelectCategory}
              resultCount={filteredProducts.length}
            />
        </div>

        {/* Animated Catalog Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, translateY: prefersReducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: prefersReducedMotion ? 0 : -12 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProductCard
                  product={product}
                  onSelectProduct={onSelectProduct}
                  variant="standard"
                  theme="ink-blue"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 liquid-glass rounded-2xl p-6 border border-white/10 mt-8">
            <p className="text-white/60 text-sm font-sans">
              No hay productos registrados en esta categoría demo.
            </p>
            <button
              onClick={() => onSelectCategory('Todos')}
              className="mt-4 px-4 py-2 rounded-full liquid-glass-strong text-white text-xs font-medium border border-white/20 transition-transform active:scale-[0.98]"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
