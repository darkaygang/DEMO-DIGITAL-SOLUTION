import React, { useRef } from 'react';
import { Truck, Store, MapPin, Package } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { MrwLogo, ZoomLogo, TealcaLogo } from './ui/Logos';

export const DeliverySection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });
  const prefersReducedMotion = useReducedMotion();
  
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const cardVariantsLeft = {
    hidden: { opacity: 0, x: prefersReducedMotion || isMobile ? 0 : -16, y: isMobile && !prefersReducedMotion ? 16 : 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: prefersReducedMotion || isMobile ? 0 : 16, y: isMobile && !prefersReducedMotion ? 16 : 0 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section ref={ref} className="py-20 sm:py-24 bg-[#0a0a0a] border-b border-white/10 relative overflow-hidden">
      
      {/* 5. Route Line Animation */}
      <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-32 opacity-30 pointer-events-none" viewBox="0 0 2 128">
        <motion.line 
          x1="1" y1="0" x2="1" y2="128" 
          stroke="#ffffff" strokeWidth="2" strokeDasharray="6 6"
          initial={{ strokeDashoffset: 128 }}
          animate={isInView ? { strokeDashoffset: 0 } : { strokeDashoffset: 128 }}
          transition={{ duration: 1.2, ease: "linear" }}
        />
      </svg>

      <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-10">
        
        {/* Section Heading */}
        <motion.div 
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 22 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[10px] font-medium uppercase tracking-widest text-white/60 block mb-3 font-sans">
            LOGÍSTICA Y ENTREGAS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.05] font-serif-editorial">
            Recibe tu equipo <span className="font-serif-italic">como prefieras</span>.
          </h2>
          <p className="mt-4 text-base text-white/70 max-w-2xl leading-relaxed font-sans">
            Opciones de entrega adaptadas a tus necesidades. Información DEMO ilustrativa (según tienda).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pickup Card */}
          <motion.div 
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex items-start gap-4 shadow-sm group hover:border-white/20 transition-all duration-300"
            variants={cardVariantsLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0 text-white/80">
              <Store className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white font-sans mb-1">Retiro en Tienda</h3>
              <p className="text-sm text-white/70 leading-relaxed font-sans mb-2">
                Visítanos en nuestra ubicación física para retirar tu equipo personalmente.
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-medium tracking-wide text-white/60">
                <MapPin className="w-3 h-3" />
                <span>Disponible</span>
              </div>
            </div>
          </motion.div>

          {/* Delivery Card */}
          <motion.div 
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex items-start gap-4 shadow-sm group hover:border-white/20 transition-all duration-300"
            variants={cardVariantsRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.1 }}
          >
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0 text-white/80">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white font-sans mb-1">Delivery y Envíos</h3>
              <p className="text-sm text-white/70 leading-relaxed font-sans mb-3">
                Entregas locales (según zona) y envíos nacionales asegurados a través de encomiendas de confianza.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/80 h-7">
                  <MrwLogo className="h-3 w-auto opacity-80" />
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-[#F25A2A]/10 border border-[#F25A2A]/20 text-white/80 h-7">
                  <ZoomLogo className="h-3.5 w-auto" />
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-[#00529b]/10 border border-[#00529b]/30 text-white/80 h-7">
                  <TealcaLogo className="h-4 w-auto" />
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
