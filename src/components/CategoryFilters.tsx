import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ProductCategory } from '../types/product';

interface CategoryFiltersProps {
  categories: ProductCategory[];
  activeCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  resultCount: number;
}

export const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  resultCount,
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20%' });

  return (
    <div className="space-y-4 mb-8" ref={containerRef}>
      {/* Scrollable Horizontal Chips with layoutId */}
      <div className="relative">
        {/* Luminous line drawing */}
        <motion.div 
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -top-3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8A7CFF]/50 to-transparent origin-left"
        />

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap pt-2"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`relative px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/30 ${
                  isActive
                    ? 'text-white'
                    : 'text-white/60 hover:text-white bg-white/5 border border-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 rounded-full liquid-glass-strong border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)] -z-10"
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Counter bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex items-center justify-between text-xs text-white/50 border-b border-white/10 pb-3"
      >
        <span>
          Mostrando <strong className="text-white font-medium">{resultCount}</strong> {resultCount === 1 ? 'equipo de ejemplo' : 'equipos de ejemplo'}
        </span>
        <span className="text-[10px] text-white/40 uppercase tracking-widest font-normal">
          Filtra por tipo de equipo
        </span>
      </motion.div>
    </div>
  );
};
