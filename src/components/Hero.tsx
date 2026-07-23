import React, { useRef } from 'react';
import { ArrowDown, MessageCircle, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { DEMO_PHONE_NUMBER, GENERAL_WHATSAPP_MESSAGE, getWhatsAppUrl } from '../data/products';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface HeroProps {
  isUnlocked: boolean;
  onUnlock: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isUnlocked, onUnlock }) => {
  const generalWaUrl = getWhatsAppUrl(DEMO_PHONE_NUMBER, GENERAL_WHATSAPP_MESSAGE);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Moves the showcase up slightly on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -100]);
  // Slowly rotates the showcase
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 10]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, prefersReducedMotion ? -10 : -20]);
  
  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden bg-black border-b border-white/10 [perspective:1000px]">
      
      {/* Background Film Grain Overlay (Opacity <= 0.04) */}
      <div className="absolute inset-0 noise-overlay pointer-events-none z-0"></div>

      {/* Atmospheric Ambient Lighting Field (Restrained Cool Blue / Distant Violet) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] sm:h-[600px] ambient-cool-glow blur-3xl pointer-events-none opacity-60 z-0"></div>

      {/* SCULPTURAL TECH SHOWCASE (Moving on scroll) */}
      <div className="absolute inset-0 flex items-center justify-end md:justify-center pointer-events-none z-0 opacity-80 overflow-hidden">
        <motion.div 
          className="relative w-full max-w-6xl h-full flex items-center justify-end pr-4 sm:pr-10 md:justify-end lg:pr-32"
          style={{ y, rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
          {/* Authentic 3D iPhone Presentation */}
          <div className="relative w-full max-w-[400px] aspect-[1/2] flex items-center justify-center translate-y-12 sm:translate-y-0" style={{ perspective: '1500px' }}>
            {/* Ambient Glow behind the phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8A7CFF]/50 via-transparent to-[#25D366]/40 blur-3xl rounded-full opacity-70 mix-blend-screen scale-125 animate-pulse" />
            
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 18, ease: "linear", repeat: Infinity }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-[220px] h-[460px] sm:w-[250px] sm:h-[520px] md:w-[280px] md:h-[580px]"
            >
              {/* Phone Edges (Thickness) */}
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 rounded-[40px] sm:rounded-[48px] bg-[#2a2a2a] border border-[#444]"
                  style={{ transform: `translateZ(${i - 6}px)`, backfaceVisibility: 'hidden' }}
                />
              ))}

              {/* Side bands (Titanium look) */}
              <div 
                className="absolute inset-y-6 -left-[4px] w-[8px] bg-gradient-to-r from-[#111] via-[#555] to-[#111]"
                style={{ transform: 'rotateY(-90deg) translateZ(110px) sm:translateZ(125px) md:translateZ(140px)', transformOrigin: 'left center', backfaceVisibility: 'visible' }}
              />
              <div 
                className="absolute inset-y-6 -right-[4px] w-[8px] bg-gradient-to-r from-[#111] via-[#555] to-[#111]"
                style={{ transform: 'rotateY(90deg) translateZ(110px) sm:translateZ(125px) md:translateZ(140px)', transformOrigin: 'right center', backfaceVisibility: 'visible' }}
              />

              {/* Phone Body (Front) */}
              <div 
                className="absolute inset-0 rounded-[40px] sm:rounded-[48px] bg-black border-[6px] border-[#333] p-1 flex flex-col items-center shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
                style={{ backfaceVisibility: 'hidden', transform: 'translateZ(7px)' }}
              >
                {/* Dynamic Island */}
                <div className="absolute top-3 sm:top-4 w-24 h-6 sm:w-28 sm:h-7 bg-black rounded-full flex items-center justify-end px-3 z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#111] border border-white/10 shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full rounded-[34px] sm:rounded-[40px] bg-[#000] relative overflow-hidden flex flex-col items-center justify-center border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#000] opacity-80" />
                  
                  {/* DEMO Text inside screen */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <span className="text-4xl sm:text-5xl font-black tracking-widest text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                      DEMO
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone Body (Back) */}
              <div 
                className="absolute inset-0 rounded-[40px] sm:rounded-[48px] bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-[4px] border-[#333] shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg) translateZ(7px)' }}
              >
                {/* Apple Logo placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                </div>
                
                {/* Camera Module (iPhone 16 Pro Style) */}
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-24 h-24 sm:w-28 sm:h-28 rounded-[24px] sm:rounded-[28px] bg-black/80 backdrop-blur-md border border-white/10 flex flex-wrap p-2 shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
                  {/* Camera 1 */}
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border-2 border-[#222] shadow-[inset_0_0_12px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-slate-800 border border-white/5 shadow-[inset_0_0_4px_rgba(255,255,255,0.2)]"></div>
                    </div>
                  </div>
                  {/* Camera 2 */}
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border-2 border-[#222] shadow-[inset_0_0_12px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-slate-800 border border-white/5 shadow-[inset_0_0_4px_rgba(255,255,255,0.2)]"></div>
                    </div>
                  </div>
                  {/* Camera 3 */}
                  <div className="w-1/2 h-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black border-2 border-[#222] shadow-[inset_0_0_12px_rgba(0,0,0,1)] flex items-center justify-center">
                       <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-slate-800 border border-white/5 shadow-[inset_0_0_4px_rgba(255,255,255,0.2)]"></div>
                    </div>
                  </div>
                  {/* Flash/LiDAR */}
                  <div className="w-1/2 h-1/2 flex items-center justify-center relative">
                     <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-amber-100/80 shadow-[0_0_8px_rgba(255,251,204,0.6)]"></div>
                     <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#111] border border-white/10 shadow-[inset_0_0_2px_rgba(0,0,0,1)]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Gradient Overlays for Pure Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10 w-[120%] sm:w-3/4"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10"></div>

      {/* FOREGROUND EDITORIAL STAGE */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-20 w-full my-auto pb-10">
        
        <div className="max-w-xl sm:max-w-2xl space-y-6 sm:space-y-8 text-left">
          
          {/* Eyebrow & Discrete DEMO Label */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full liquid-glass text-white/80 text-[11px] font-semibold tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-white/70" />
              CATÁLOGO WEB PARA WHATSAPP
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-medium tracking-widest uppercase">
              DEMO ILUSTRATIVA
            </span>
          </div>

          {/* Editorial H1 Headline with Instrument Serif */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight leading-[0.98] font-serif-editorial drop-shadow-sm">
            Tu próximo equipo
            <br />
            <span className="font-serif-italic font-normal text-white/90 pr-2">
              empieza
            </span>{' '}
            aquí.
          </h1>

          {/* Subheading & Description */}
          <div className="space-y-2">
            <p className="text-base sm:text-xl font-medium text-white/90 tracking-wide font-sans">
              Modelos, cuotas y garantía en un solo lugar.
            </p>
            <p className="text-sm sm:text-base text-white/60 max-w-lg sm:max-w-xl leading-relaxed font-sans font-normal">
              Encuentra el equipo que buscas y escribe por WhatsApp con el modelo y la forma de pago ya seleccionados.
            </p>
          </div>

          {/* Refined Liquid Glass & High Contrast CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            {!isUnlocked ? (
              <button
                onClick={onUnlock}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full liquid-glass-strong hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] border border-white/20 animate-pulse-glow"
              >
                <span>Ver equipos</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/70" />
              </button>
            ) : (
              <a
                href="#modelos"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full liquid-glass-strong hover:bg-white/10 text-white font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] border border-white/20 animate-pulse-glow"
              >
                <span>Ver equipos</span>
                <ArrowDown className="w-3.5 h-3.5 text-white/70" />
              </a>
            )}
            <a
              href={generalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:brightness-110 text-black font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] shadow-lg shadow-emerald-950/30"
            >
              <MessageCircle className="w-4 h-4 fill-black stroke-none" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>

          {/* Microcopy */}
          <p className="text-xs text-black/80 font-medium italic font-sans relative z-40 pt-2 drop-shadow-sm">
            Demo creada por Digital Solution para mostrar cómo podría verse tu propio catálogo.
          </p>
        </div>
      </div>

      {/* Soft transition into ivory mist (180px - 260px overlapping zone) */}
      <div className="absolute bottom-0 inset-x-0 h-[220px] bg-gradient-to-t from-[#F4F0EA] via-[#F4F0EA]/80 to-transparent pointer-events-none z-30 [mask-image:linear-gradient(to_top,black_20%,transparent_100%)]"></div>
    </section>
  );
};
