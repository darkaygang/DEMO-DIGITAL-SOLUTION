import React, { useRef } from 'react';
import { MessageSquareQuote, Layers } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';

export const OptionalReviewsModule: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-12 bg-[#050505] border-b border-white/10 relative overflow-hidden -mt-10 pt-20 z-10">
      
      {/* Matte overlay fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none opacity-40"></div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          ref={ref}
          className="bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-sm p-6 sm:p-8 rounded-3xl space-y-4 relative overflow-hidden"
          initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98, y: prefersReducedMotion ? 0 : 12 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: prefersReducedMotion ? 1 : 0.98, y: prefersReducedMotion ? 0 : 12 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/80">
                <MessageSquareQuote className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
                MEJORA OPCIONAL
              </span>
            </div>
            <span className="text-xs text-white/50 font-medium flex items-center gap-1 font-sans">
              <Layers className="w-3.5 h-3.5 text-white/40" />
              Mejora para tu catálogo
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-normal text-white font-serif-editorial">
            Una mejora para reforzar confianza real.
          </h3>
          <p className="text-sm text-white/70 leading-relaxed font-sans">
            Si ya tienes reseñas reales en Google o Instagram, puedes mostrarlas en tu catálogo y facilitar que nuevos clientes dejen una opinión verificable.
          </p>

          <p className="text-xs text-white/40 italic pt-3 mt-3 border-t border-white/10 font-sans">
            Se conecta solo con reseñas existentes y verificables. Sin comentarios inventados.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
