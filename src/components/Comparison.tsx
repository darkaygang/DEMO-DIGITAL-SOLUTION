import React, { useRef, useState, useEffect } from 'react';
import { SectionHeading } from './SectionHeading';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { RevealTransition } from './ui/SectionTransition';

export const Comparison: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' });
  const prefersReducedMotion = useReducedMotion();

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 1024 : false;

  return (
    <section 
      id="como-funciona" 
      ref={sectionRef}
      className="py-20 sm:py-28 border-b border-[#131313]/10 relative overflow-hidden bg-[#050505]"
    >
      {/* Background Transition Sweep */}
      <motion.div 
        className="absolute inset-0 bg-[#EAE9E5] z-0"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Sweep Light Edge */}
        <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-r from-transparent to-white/60 blur-md pointer-events-none transform translate-x-1/2"></div>
      </motion.div>
      {/* Subtle topographic / map line texture */}
      <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
        >
          <SectionHeading
            theme="light"
            eyebrow="EL CAMBIO NO ES DE WHATSAPP. ES DE ORDEN."
            title="No dejas de vender por WhatsApp. Dejas de perder tiempo explicando desde cero."
            italicWord="cero."
          />
        </motion.div>

        {/* Calm Editorial Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch relative mt-8">
          
          {/* Luminous Divider */}
          <motion.div 
            className="hidden lg:block absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#131313]/20 to-transparent pointer-events-none"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.6, ease: "circOut" }}
            style={{ originY: 0 }}
          />

          {/* Mobile Horizontal Divider */}
          <motion.div 
            className="lg:hidden absolute top-[50%] left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-[#131313]/20 to-transparent pointer-events-none"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: prefersReducedMotion ? 0 : 0.6, ease: "circOut" }}
            style={{ originX: 0 }}
          />

          {/* Left: Instagram solamente (Begins earlier) */}
          <motion.div 
            className="p-6 sm:p-8 rounded-3xl bg-[#131313]/[0.03] border border-[#131313]/5 flex flex-col justify-between space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 0.4 }}
          >
            <div>
              <div className="pb-6 border-b border-[#131313]/10">
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#131313]/50 block mb-1 font-sans">
                  CUANDO TODO ESTÁ REPARTIDO
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#131313]/70 font-serif-editorial">
                  Instagram solamente
                </h3>
              </div>
              
              <ul className="space-y-5 pt-6 text-sm text-[#131313]/70 font-sans">
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313]/30 shrink-0 mt-2"></span>
                  <span>El cliente busca entre publicaciones, historias y reels para encontrar un equipo.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313]/30 shrink-0 mt-2"></span>
                  <span>Modelo, memoria, precio y condiciones se vuelven a explicar dentro del chat.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313]/30 shrink-0 mt-2"></span>
                  <span>Muchas conversaciones empiezan con “¿qué tienes disponible?”</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313]/30 shrink-0 mt-2"></span>
                  <span>Si tardas en responder, puede terminar preguntando en otra tienda.</span>
                </li>
              </ul>
            </div>
            
            
          </motion.div>

          {/* Right: Catálogo Web para WhatsApp (Follows with delay) */}
          <motion.div 
            className="p-6 sm:p-8 rounded-3xl bg-white border border-[#131313]/10 shadow-sm flex flex-col justify-between space-y-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 0.54 }} // 160ms delay
          >
            <div className="absolute top-0 right-8 px-3 py-1 bg-[#131313]/5 text-[#131313] border border-[#131313]/10 border-t-0 text-[9px] font-medium uppercase tracking-widest rounded-b-md">
              ESTRATEGIA OPTIMIZADA
            </div>
            <div>
              <div className="pb-6 border-b border-[#131313]/10">
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#131313]/60 block mb-1 font-sans">
                  CUANDO TODO ESTÁ ORDENADO
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#131313] font-serif-editorial">
                  Catálogo Web para WhatsApp
                </h3>
              </div>
              
              <ul className="space-y-5 pt-6 text-sm text-[#131313]/90 font-sans">
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313] shrink-0 mt-2"></span>
                  <span>Tus equipos están organizados en un solo enlace.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313] shrink-0 mt-2"></span>
                  <span>El cliente revisa modelo, memoria, estado y opciones antes de escribir.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313] shrink-0 mt-2"></span>
                  <span>Cuotas, garantía y parte de pago se explican dentro de cada ficha.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313] shrink-0 mt-2"></span>
                  <span>El chat comienza con una consulta más específica.</span>
                </li>
              </ul>
            </div>
            
            
          </motion.div>

        </div>

        {/* Footnote */}
        <motion.p 
          className="mt-8 text-center text-xs text-[#131313]/50 italic font-sans"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 1.2 }}
        >
          Esta estructura organiza información para facilitar conversaciones más claras. No garantiza ventas ni reemplaza la atención de tu equipo.
        </motion.p>
      </div>
    </section>
  );
};
