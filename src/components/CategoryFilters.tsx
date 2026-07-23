import React from 'react';
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
  return (
    <div className="space-y-4 mb-8">
      {/* Scrollable Horizontal Liquid Glass Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white/30 ${
                isActive
                  ? 'liquid-glass-strong bg-white/15 text-white border border-white/30 shadow-md'
                  : 'liquid-glass text-white/60 hover:text-white border border-white/5'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Counter bar */}
      <div className="flex items-center justify-between text-xs text-white/50 border-b border-white/10 pb-3">
        <span>
          Mostrando <strong className="text-white font-medium">{resultCount}</strong> {resultCount === 1 ? 'equipo demo' : 'equipos demo'}
        </span>
        <span className="text-[10px] text-white/40 uppercase tracking-widest font-normal">
          Filtro en tiempo real
        </span>
      </div>
    </div>
  );
};
