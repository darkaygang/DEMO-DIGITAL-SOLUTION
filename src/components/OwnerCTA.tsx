import React, { useRef } from 'react';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import { getDigitalSolutionWhatsAppUrl } from '../data/products';
import { motion, useInView, useReducedMotion } from 'motion/react';

export const OwnerCTA: React.FC = () => {
  const dsWaUrl = getDigitalSolutionWhatsAppUrl();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20% 0px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-[#050505] border-b border-white/10 relative overflow-hidden -mt-24 pt-32 z-20">
      
      {/* Restrained Light Burst Reflection */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[360px] bg-gradient-to-r from-white/10 via-white/[0.04] to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Animated Surface (CTA Card) */}
        <motion.div 
          className="p-8 sm:p-14 rounded-[36px] bg-[#080808]/90 border border-white/15 shadow-2xl shadow-black/40 backdrop-blur-xl text-center space-y-7 relative overflow-hidden"
          initial={{ clipPath: prefersReducedMotion ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 14%, 100% 0, 100% 100%, 0 100%)' }}
          animate={isInView ? { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' } : { clipPath: prefersReducedMotion ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 14%, 100% 0, 100% 100%, 0 100%)' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          
          {/* Subtle Ambient Reflected Edge Beam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          
          {/* Eyebrow */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-medium tracking-widest uppercase shadow-sm"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.1 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-white/70" />
            <span>DIGITAL SOLUTION</span>
          </motion.div>

          {/* Heading with Instrument Serif and line reveal */}
          <div className="overflow-hidden">
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.05] max-w-2xl mx-auto font-serif-editorial"
              initial={{ y: prefersReducedMotion ? 0 : '100%', opacity: prefersReducedMotion ? 0 : 1 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: prefersReducedMotion ? 0 : '100%', opacity: prefersReducedMotion ? 0 : 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: prefersReducedMotion ? 0 : 0.15 }}
            >
              ¿Esta estructura funcionaría <span className="font-serif-italic">para tu tienda?</span>
            </motion.h2>
          </div>

          {/* Body Text */}
          <motion.p 
            className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed font-sans"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.25 }}
          >
            Digital Solution puede adaptar este catálogo a tus equipos, cuotas, garantía, parte de pago, ubicación y horario. Mantienes WhatsApp como canal principal; nosotros organizamos la información que ya explicas todos los días.
          </motion.p>

          {/* Main CTA */}
          <motion.div 
            className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4 relative"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.35 }}
          >
            <a
              href={dsWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:brightness-110 text-black font-semibold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(37,211,102,0.2)] overflow-hidden"
            >
              <MessageCircle className="w-5 h-5 fill-black stroke-none relative z-10" />
              <span className="relative z-10">Hablar con Digital Solution</span>
              <ArrowRight className="w-4.5 h-4.5 relative z-10" />
            </a>
          </motion.div>

          {/* Microcopy pricing info */}
          <motion.p 
            className="text-xs font-mono font-normal text-white/50 tracking-wider pt-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.5 }}
          >
            Catálogo Web para WhatsApp · Implementación desde $80 · 50% para iniciar
          </motion.p>

        </motion.div>
      </div>
    </section>
  );
};
