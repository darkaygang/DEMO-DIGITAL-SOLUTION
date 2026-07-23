import React, { useRef } from 'react';
import { CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';

export const LocalCommerceStrip: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.1 : 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { duration: prefersReducedMotion ? 0.1 : 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 } 
    }
  };

  return (
    <section ref={ref} className="relative z-20 bg-[#EAE9E5] pb-12 pt-4 -mt-10">
      {/* Very subtle grain overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none"></div>
      
      {/* Aurora Mask Reveal from bottom */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-white/20 to-transparent pointer-events-none"
        initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
        animate={isInView ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : { opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* 1px hairline that draws from 0 to 100% */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#131313]/20 to-transparent origin-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={lineVariants}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative mt-6">
        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between gap-4 text-xs font-normal text-[#131313]/70"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-[#131313] px-4 py-2 rounded-full bg-white/40 border border-black/5 backdrop-blur-sm shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#131313]" />
            <span className="font-medium tracking-wide">MENOS TIEMPO RESPONDIENDO LO MISMO</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-[#131313] px-4 py-2 rounded-full bg-white/40 border border-black/5 backdrop-blur-sm shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#131313]" />
            <span className="font-medium tracking-wide">EQUIPOS FÁCILES DE ENCONTRAR</span>
          </motion.div>
          <motion.div variants={itemVariants} className="flex items-center gap-2 text-[#131313] px-4 py-2 rounded-full bg-white/40 border border-black/5 backdrop-blur-sm shadow-sm">
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="font-medium tracking-wide">CLIENTES MÁS CLAROS AL ESCRIBIR</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
