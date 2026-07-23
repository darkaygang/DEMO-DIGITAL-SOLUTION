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
      className="py-20 sm:py-28 border-b border-[#131313]/10 relative overflow-hidden bg-[#EAE9E5]"
    >
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
            eyebrow="POR QUÉ ESTA ESTRUCTURA"
            title="Tu catálogo no reemplaza WhatsApp. Hace que cada conversación llegue más clara."
            italicWord="más clara"
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
                  PROCESO TRADICIONAL
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#131313]/70 font-serif-editorial">
                  Instagram solamente
                </h3>
              </div>
              
              <ul className="space-y-5 pt-6 text-sm text-[#131313]/70 font-sans">
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313]/30 shrink-0 mt-2"></span>
                  <span>El cliente hace scroll entre posts, historias y reels para buscar un modelo.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313]/30 shrink-0 mt-2"></span>
                  <span>Modelo y memoria se aclaran dentro del chat, después de varias preguntas.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313]/30 shrink-0 mt-2"></span>
                  <span>Cuotas, garantía y parte de pago quedan repartidas en publicaciones.</span>
                </li>
              </ul>
            </div>
            
            <div className="text-[11px] font-mono text-[#131313]/50 uppercase tracking-widest pt-4 border-t border-[#131313]/10">
              Mayor tiempo en responder consultas repetitivas
            </div>
          </motion.div>

          {/* Right: Catálogo Web para WhatsApp (Follows with delay) */}
          <motion.div 
            className="p-6 sm:p-8 rounded-3xl bg-white border border-[#131313]/10 shadow-sm flex flex-col justify-between space-y-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 0.96 }} // 160ms delay
          >
            <div className="absolute top-0 right-8 px-3 py-1 bg-[#131313]/5 text-[#131313] border border-[#131313]/10 border-t-0 text-[9px] font-medium uppercase tracking-widest rounded-b-md">
              ESTRATEGIA OPTIMIZADA
            </div>
            <div>
              <div className="pb-6 border-b border-[#131313]/10">
                <span className="text-[10px] font-medium uppercase tracking-widest text-[#131313]/60 block mb-1 font-sans">
                  ESTRUCTURA NOVA MOBILE
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#131313] font-serif-editorial">
                  Catálogo Web para WhatsApp
                </h3>
              </div>
              
              <ul className="space-y-5 pt-6 text-sm text-[#131313]/90 font-sans">
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313] shrink-0 mt-2"></span>
                  <span>Equipos organizados en un solo enlace.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313] shrink-0 mt-2"></span>
                  <span>Modelo, memoria y forma de pago claros antes de escribir.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313] shrink-0 mt-2"></span>
                  <span>Cuotas, garantía y parte de pago dentro de cada ficha.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#131313] shrink-0 mt-2"></span>
                  <span>Enlace listo para bio, historias y respuestas rápidas.</span>
                </li>
              </ul>
            </div>
            
            <div className="text-[11px] font-mono text-[#131313]/70 uppercase tracking-widest pt-4 border-t border-[#131313]/10">
              Consultas calificadas con contexto previo
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
          Esta estructura está diseñada para ordenar información y facilitar consultas claras. No representa una garantía de ventas.
        </motion.p>
      </div>
    </section>
  );
};
