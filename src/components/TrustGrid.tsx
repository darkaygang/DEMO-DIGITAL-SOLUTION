import React, { useRef } from 'react';
import { ShieldCheck, BadgeCheck, WalletCards, MapPin, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { RevealTransition } from './ui/SectionTransition';

export const TrustGrid: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-20% 0px' });
  const prefersReducedMotion = useReducedMotion();

  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'Estado del equipo',
      description: 'Nuevo, usado o reacondicionado indicado en cada ficha.',
    },
    {
      icon: BadgeCheck,
      title: 'Condiciones de garantía',
      description: 'Espacio para explicar lo que respalda tu tienda.',
    },
    {
      icon: WalletCards,
      title: 'Formas de pago',
      description: 'Contado, cuotas o parte de pago presentados de forma clara.',
    },
    {
      icon: MapPin,
      title: 'Ubicación y horario',
      description: 'Datos de contacto y atención en un solo lugar.',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#050505] relative overflow-hidden mt-[-100px]">
      
      {/* Dark fade overlap */}
      <div className="absolute top-0 inset-x-0 h-[200px] bg-gradient-to-b from-[#0a0a0a] to-[#050505] pointer-events-none z-0"></div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.035] pointer-events-none z-0"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-24" ref={containerRef}>
        
        {/* Section Heading */}
        <RevealTransition type="clip-path">
          <SectionHeading
            eyebrow="COMPRA INFORMADA"
            title="Menos dudas antes de abrir WhatsApp."
            italicWord="clara"
            paragraph="Cuando el cliente puede revisar el estado, la garantía, las formas de pago y la atención en un mismo lugar, la conversación empieza con menos preguntas básicas."
          />
        </RevealTransition>

        {/* Outer Trust Container with Illuminated Border */}
        <div className="relative mt-8 rounded-[2rem] p-1">
          {/* Illuminated traveling border */}
          <motion.div 
            className="absolute inset-0 rounded-[2rem] border-2 border-transparent pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              backgroundSize: '200% 100%'
            }}
            initial={{ backgroundPosition: '200% 0' }}
            animate={isInView && !prefersReducedMotion ? { backgroundPosition: '-100% 0' } : { backgroundPosition: '200% 0' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          <div className="bg-[#0A0A0A] rounded-[1.8rem] border border-white/5 p-2">
            {/* 4 Trust Cards / Asymmetric Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trustItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-[#050505] border border-white/5 hover:border-white/15 transition-all duration-300 p-6 rounded-2xl space-y-4 flex flex-col justify-between group"
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="space-y-3">
                      <motion.div variants={childVariants} className="p-2.5 rounded-xl bg-white/5 border border-white/5 w-fit text-white/80 group-hover:bg-white/10 transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <motion.h3 variants={childVariants} className="text-lg font-normal text-white font-serif-editorial">
                        {item.title}
                      </motion.h3>
                      <motion.p variants={childVariants} className="text-xs sm:text-sm text-white/50 leading-relaxed font-sans group-hover:text-white/60 transition-colors">
                        {item.description}
                      </motion.p>
                    </div>
                    <motion.div variants={childVariants} className="pt-2 text-[10px] text-white/30 font-medium font-sans">
                      MENOS IDA Y VUELTA POR WHATSAPP
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* CTA & Disclaimer */}
            <motion.div 
              className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
              transition={{ duration: 0.65, delay: 0.4 }}
            >
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-sm font-semibold text-white">
                  Así se ve una tienda cuando la información está en orden.
                </p>
                <p className="text-xs text-white/50 font-sans">
                  Los datos mostrados en NOVA MOBILE son ilustrativos.
                </p>
              </div>
              <a
                href="#catalogo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 font-semibold text-xs sm:text-sm transition-all duration-200"
              >
                <span>Ver equipos organizados</span>
                <ArrowUpRight className="w-4 h-4 text-black/80" />
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
