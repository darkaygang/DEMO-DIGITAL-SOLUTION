import React, { useRef } from 'react';
import { Banknote, CalendarClock, RefreshCw } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { RevealTransition } from './ui/SectionTransition';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { ZelleLogo, BinanceLogo, CasheaLogo, BdvLogo, KreceLogo } from './ui/Logos';

export const PaymentCards: React.FC = () => {
  const lineRef = useRef(null);
  const isLineInView = useInView(lineRef, { once: true, margin: '-20% 0px' });
  const prefersReducedMotion = useReducedMotion();

  const paymentMethods = [
    {
      icon: Banknote,
      title: 'Contado',
      text: 'Muestra los métodos que realmente manejas: transferencia, Pago Móvil, Zelle, efectivo o Binance.',
      badge: 'CONFIGURABLE PARA TU TIENDA',
      tags: ['Zelle', 'Binance', 'Bancos Nacionales'],
      note: 'Se adapta a los métodos que ya aceptas.'
    },
    {
      icon: CalendarClock,
      title: 'Cuotas',
      text: 'Explica la inicial, la cantidad de cuotas y la frecuencia de pago para evitar preguntas básicas antes de la conversación.',
      badge: 'CONFIGURABLE PARA TU TIENDA',
      tags: ['Cashea', 'Krece'],
      note: 'Condiciones configurables según tu tienda.'
    },
    {
      icon: RefreshCw,
      title: 'Parte de pago',
      text: 'Indica qué equipos consideras, qué estado mínimo aceptas y cómo realizas la evaluación.',
      badge: 'CONFIGURABLE PARA TU TIENDA',
      tags: [],
      note: 'La propuesta final se confirma por WhatsApp.'
    },
  ];

  return (
    <section id="pagos" className="py-20 sm:py-28 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      
      {/* 4. Technical blueprint line transition */}
      <motion.div
        ref={lineRef}
        className="absolute top-0 left-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#8A7CFF]/30 to-transparent -translate-x-1/2 origin-top"
        initial={{ scaleY: 0 }}
        animate={isLineInView ? { scaleY: prefersReducedMotion ? 0 : 1 } : { scaleY: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Subtle noise and light effect to add texture */}
      <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pt-16">
        
        {/* Section Heading */}
        <RevealTransition type="fade-up">
          <SectionHeading
            theme="dark"
            eyebrow="FORMAS DE PAGO"
            title="Las preguntas de pago, claras desde la ficha."
            italicWord="escribir"
            paragraph="Muestra contado, inicial, cuotas o parte de pago antes de que el cliente tenga que preguntarte. Tú defines las condiciones reales de tu tienda."
          />
        </RevealTransition>

        {/* Refined Horizontal Information Rail on Desktop / Stacked Asymmetric Editorial Panels on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch mt-8">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon;
            const colSpanClass = 'md:col-span-4';
            
            return (
              <RevealTransition 
                key={index}
                type="clip-path" 
                delay={index * 0.15} 
                className={`${colSpanClass}`}
              >
                <div
                  className="bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-6 relative group h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80">
                        <Icon className="w-5 h-5 text-white/80" />
                      </div>
                      <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/10">
                        {method.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-normal text-white font-serif-editorial">
                      {method.title}
                    </h3>
                    
                    <div className="space-y-4">
                      <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                        {method.text}
                      </p>

                      {/* Venezuelan Payment Tags */}
                      {method.tags.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 pt-2">
                          {method.tags.map((tag, i) => {
                            if (tag === 'Cashea') {
                              return (
                                <span key={i} className="inline-flex items-center px-2 py-1 rounded-md border bg-[#FF4D00]/10 border-[#FF4D00]/30 text-[#FF4D00]">
                                  <CasheaLogo className="h-4 w-auto" />
                                </span>
                              );
                            }
                            if (tag === 'Krece') {
                              return (
                                <span key={i} className="inline-flex items-center px-2 py-1 rounded-md border bg-[#1B1C47]/10 border-[#1B1C47]/30 text-[#425088]">
                                  <KreceLogo className="h-4 w-auto" />
                                </span>
                              );
                            }
                            if (tag === 'Bancos Nacionales' || tag === 'BDV') {
                               return (
                                <span key={i} className="inline-flex items-center px-2 py-1 rounded-md border bg-white/5 border-white/10 text-white/70">
                                  <BdvLogo className="h-4 w-auto" />
                                </span>
                               );
                            }
                            if (tag === 'Binance') {
                              return (
                                <span key={i} className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border bg-[#F3BA2F]/10 border-[#F3BA2F]/30 text-[#F3BA2F] text-[10px] font-semibold uppercase tracking-wider">
                                  <BinanceLogo className="h-3 w-3" />
                                  Binance
                                </span>
                              );
                            }
                            if (tag === 'Zelle') {
                              return (
                                <span key={i} className="inline-flex items-center px-2 py-1 rounded-md border bg-[#741BD1]/10 border-[#741BD1]/30 text-[#c29af5]">
                                  <ZelleLogo className="h-4 w-auto" />
                                </span>
                              );
                            }
                            return (
                              <span key={i} className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md border bg-white/5 border-white/10 text-white/70">
                                {tag}
                              </span>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-[11px] text-white/40 font-sans relative z-10">
                    {method.note}
                  </div>
                </div>
              </RevealTransition>
            );
          })}
        </div>
      </div>
    </section>
  );
};
