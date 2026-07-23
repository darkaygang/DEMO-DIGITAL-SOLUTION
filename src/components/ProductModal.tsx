import React, { useEffect, useRef } from 'react';
import { X, MessageCircle, CalendarClock, RefreshCw, Banknote, ShieldCheck, AlertCircle } from 'lucide-react';
import { Product } from '../types/product';
import { getProductWhatsAppMessage, getWhatsAppUrl, DEMO_PHONE_NUMBER } from '../data/products';
import { motion, useReducedMotion } from 'motion/react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const cashWaUrl = getWhatsAppUrl(
    DEMO_PHONE_NUMBER,
    getProductWhatsAppMessage(product.name, product.capacity, 'contado')
  );
  
  const installmentWaUrl = getWhatsAppUrl(
    DEMO_PHONE_NUMBER,
    getProductWhatsAppMessage(product.name, product.capacity, 'cuotas')
  );
  
  const tradeInWaUrl = getWhatsAppUrl(
    DEMO_PHONE_NUMBER,
    getProductWhatsAppMessage(product.name, product.capacity, 'parte_de_pago')
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <motion.div 
        className="fixed inset-0 bg-black/85 backdrop-blur-xl -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: "easeInOut" }}
      />

      <motion.div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#0A0A0A] border border-white/12 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col liquid-glass-strong"
        initial={prefersReducedMotion ? { opacity: 0 } : (isMobile ? { opacity: 0, y: 24 } : { opacity: 0, scale: 0.98, y: 12 })}
        animate={prefersReducedMotion ? { opacity: 1 } : (isMobile ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 })}
        exit={prefersReducedMotion ? { opacity: 0 } : (isMobile ? { opacity: 0, y: 24 } : { opacity: 0, scale: 0.98, y: 12 })}
        transition={{ duration: isMobile ? 0.28 : 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Sticky Header inside modal */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 py-4 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-white/80 border border-white/10 uppercase tracking-wider">
              {product.category}
            </span>
            <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70 uppercase tracking-wider">
              {product.condition}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-white/30"
            aria-label="Cerrar modal de producto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Top Product Hero Block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-black border border-white/10 p-2">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40"></div>
            </div>
            
            <div className="md:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 text-white/70 border border-white/10 text-[10px] font-medium uppercase tracking-widest">
                <AlertCircle className="w-3.5 h-3.5 text-white/60" />
                INFORMACIÓN DEMO
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-normal text-white leading-tight font-serif-editorial">
                {product.name} · <span className="font-serif-italic text-white/80">{product.capacity}</span>
              </h2>
              <p className="text-sm text-white/70 font-sans">
                Color: <strong className="text-white font-medium">{product.color}</strong>
              </p>
              <p className="text-xs text-white/60 leading-relaxed pt-1 font-sans">
                {product.shortDescription}
              </p>
            </div>
          </div>

          {/* 4 Information Blocks */}
          <div className="space-y-3 pt-2">
            
            {/* Block 1: Pago de contado */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Banknote className="w-4 h-4 text-emerald-400" />
                <span>Pago de contado</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                {product.cashNote || 'En un catálogo real, aquí se mostraría el precio de contado y los métodos de pago que maneja la tienda.'}
              </p>
            </div>

            {/* Block 2: Consulta a cuotas */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <CalendarClock className="w-4 h-4 text-white/80" />
                <span>Consulta a cuotas</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                {product.installmentNote || 'Este bloque organiza la inicial, el número de cuotas y la frecuencia de pago antes de que el cliente escriba.'}
              </p>
            </div>

            {/* Block 3: Garantía y estado */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-white/80" />
                <span>Garantía y estado</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                Ejemplo DEMO: muestra si el equipo es nuevo, usado o reacondicionado y las condiciones de garantía que defina la tienda.
              </p>
            </div>

            {/* Block 4: Parte de pago */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <RefreshCw className="w-4 h-4 text-white/80" />
                <span>Parte de pago</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                {product.tradeInNote || 'Aquí se resume la política para recibir equipos como parte de pago, sin tener que explicarla desde cero en cada chat.'}
              </p>
            </div>

          </div>

          {/* Explicit Demo Disclaimer Note */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
            <p className="text-xs text-white/60 font-sans font-normal">
              Toda la información de esta ficha es ilustrativa. En una implementación real se adapta a las condiciones de cada tienda.
            </p>
          </div>

          {/* 3 WhatsApp Action Buttons */}
          <div className="space-y-2.5 pt-2 border-t border-white/10">
            <p className="text-xs font-semibold text-white/50 text-center uppercase tracking-wider font-sans">
              Elige tu tipo de consulta para WhatsApp:
            </p>
            {/* CTA 1: Contado (Verde) */}
            <a
              href={cashWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-[#25D366] hover:brightness-110 text-black font-semibold text-sm transition-all duration-200 active:scale-[0.98]"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-black stroke-none" />
              <span>Consultar de contado</span>
            </a>
            
            {/* CTA 2: Cuotas (Liquid Glass Strong) */}
            <a
              href={installmentWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl liquid-glass-strong hover:bg-white/10 text-white font-semibold text-sm transition-all duration-200 border border-white/20 active:scale-[0.98]"
            >
              <CalendarClock className="w-4.5 h-4.5 text-white/80" />
              <span>Consultar a cuotas</span>
            </a>
            
            {/* CTA 3: Parte de Pago (Liquid Glass) */}
            <a
              href={tradeInWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl liquid-glass hover:bg-white/10 text-white/90 font-semibold text-sm border border-white/10 transition-all duration-200 active:scale-[0.98]"
            >
              <RefreshCw className="w-4 h-4 text-white/80" />
              <span>Consultar parte de pago</span>
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  );
};
