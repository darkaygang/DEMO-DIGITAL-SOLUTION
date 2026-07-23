import React, { useRef } from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { getDigitalSolutionWhatsAppUrl } from '../data/products';
import { motion, useInView, useReducedMotion } from 'motion/react';

export const Footer: React.FC = () => {
  const dsWaUrl = getDigitalSolutionWhatsAppUrl();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <footer ref={ref} className="bg-[#050505] relative overflow-hidden -mt-[160px] pt-[220px] pb-12 z-0">
      
      {/* FAQ fade overlay covering the top portion of footer */}
      <div className="absolute top-0 inset-x-0 h-[220px] bg-gradient-to-b from-[#EAE9E5] to-transparent pointer-events-none z-10"></div>
      
      {/* Animated top rule */}
      <motion.div 
        className="absolute top-[160px] left-0 right-0 h-[1px] bg-white/5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none"></div>

      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 relative z-20"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: prefersReducedMotion ? 0 : 0.3 }}
      >
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Logo & Info */}
          <div className="space-y-1.5">
            <div className="flex items-baseline gap-1 font-semibold text-base tracking-wider text-white">
              <span className="font-bold tracking-widest text-white font-serif-editorial">NOVA</span>
              <span className="text-white/30 font-light text-xs">/</span>
              <span className="text-white/70 font-normal tracking-wider font-sans">MOBILE</span>
            </div>
            <p className="text-white/60 font-normal text-xs">
              Catálogo DEMO creado por <strong className="text-white font-medium">Digital Solution</strong>.
            </p>
            <p className="text-[11px] text-white/40">
              Diseñado para tiendas de celulares y tecnología en Barquisimeto, Venezuela.
            </p>
          </div>
          
          {/* CTA Link */}
          <div>
            <a
              href={dsWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-medium text-xs border border-white/10 transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
              <span>Conocer Digital Solution</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/40" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-white/40 text-[11px] font-sans">
          <p>© 2026 NOVA MOBILE DEMO · Todos los derechos reservados.</p>
          <p className="text-white/50 font-normal">Información y productos ilustrativos.</p>
        </div>

      </motion.div>
    </footer>
  );
};
