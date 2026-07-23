import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'motion/react';
import { RevealTransition } from './ui/SectionTransition';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: '¿Este catálogo maneja pagos o pedidos?',
    answer: 'No. Está pensado para ordenar la información de tus equipos y llevar consultas más claras a tu WhatsApp.',
  },
  {
    question: '¿Quién actualiza los modelos y precios?',
    answer: 'En una implementación real puedes enviar los cambios para actualizarlos con la frecuencia que acuerdes con tu proveedor.',
  },
  {
    question: '¿Qué pasa si cambia mi política de cuotas?',
    answer: 'Los textos de cuotas y parte de pago se ajustan sin cambiar la estructura del catálogo.',
  },
  {
    question: '¿Puedo usar este enlace en mi bio de Instagram?',
    answer: 'Sí. Puede ser tu enlace principal para biografía, historias y respuestas rápidas de WhatsApp.',
  },
  {
    question: '¿Tengo que dejar de vender por WhatsApp?',
    answer: 'No. El catálogo está creado para complementar WhatsApp, no para reemplazarlo.',
  },
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20% 0px' });
  const prefersReducedMotion = useReducedMotion();

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-[#EAE9E5] border-b border-[#131313]/10 relative overflow-hidden -mt-10 pt-10">
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-[0.02] pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <RevealTransition type="fade-up">
          <SectionHeading
            theme="light"
            eyebrow="PREGUNTAS FRECUENTES"
            title="Pensado para tu forma actual de vender."
            italicWord="vender"
          />
        </RevealTransition>

        {/* Accordion List */}
        <motion.div 
          className="space-y-3 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/60 border border-[#131313]/5 backdrop-blur-sm rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#131313]/30"
                  aria-expanded={isOpen}
                >
                  <span className="font-normal text-base sm:text-lg text-[#131313] font-sans">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#131313]/10 text-[#131313]' : 'bg-[#131313]/5 text-[#131313]/60'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#131313]/70 border-t border-[#131313]/5 leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
