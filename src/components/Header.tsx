import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getDigitalSolutionWhatsAppUrl } from '../data/products';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generalWaUrl = getDigitalSolutionWhatsAppUrl();

  return (
    <header
      id="main-header"
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Floating Liquid Glass Pill */}
        <div
          className={`w-full flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-500 ${
            scrolled
              ? 'liquid-glass-strong bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80'
              : 'liquid-glass bg-black/40 backdrop-blur-md border border-white/10'
          }`}
        >
          {/* Brand Logo & Subtle Demo Label */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none focus:ring-1 focus:ring-white/30 rounded-full py-0.5"
          >
            <div className="flex items-baseline gap-1 font-semibold text-sm sm:text-base tracking-wider text-white">
              <span className="font-bold tracking-widest text-white">NOVA</span>
              <span className="text-white/30 font-light text-xs">/</span>
              <span className="text-white/80 font-normal tracking-wider">MOBILE</span>
            </div>
            <span className="hidden sm:inline-block text-[9px] font-medium uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">
              DEMO
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide text-white/65">
            <a
              href="#modelos"
              className="hover:text-white transition-colors py-1 hover:border-b hover:border-white/40"
            >
              Modelos
            </a>
            <a
              href="#catalogo"
              className="hover:text-white transition-colors py-1 hover:border-b hover:border-white/40"
            >
              Catálogo
            </a>
            <a
              href="#pagos"
              className="hover:text-white transition-colors py-1 hover:border-b hover:border-white/40"
            >
              Pagos
            </a>
            <a
              href="#como-funciona"
              className="hover:text-white transition-colors py-1 hover:border-b hover:border-white/40"
            >
              Cómo funciona
            </a>
          </nav>

          {/* WhatsApp CTA Button */}
          <a
            href={generalWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-label="Consultar por WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black stroke-none" />
            <span className="hidden sm:inline-block font-semibold text-xs tracking-tight">Quiero este catálogo</span>
            <span className="sm:hidden font-semibold text-xs tracking-tight">Quiero el mío</span>
          </a>
        </div>

      </div>
    </header>
  );
};
