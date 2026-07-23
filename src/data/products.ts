import { Product } from '../types/product';

export const DEMO_PHONE_NUMBER = '584120000000';

export const PRODUCTS: Product[] = [
  {
    id: 'iphone-15-pro',
    name: 'iPhone 15 Pro',
    category: 'iPhone',
    capacity: '256 GB',
    color: 'Titanio Natural',
    condition: 'Nuevo (DEMO)',
    priceLabel: 'Desde $--- · DEMO',
    featured: true,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    alt: 'iPhone 15 Pro Titanio Natural',
    tags: ['Contado', 'Cuotas', 'Parte de pago'],
    shortDescription: 'Acabado en titanio aeroespacial, chip A17 Pro y sistema de cámaras profesional.',
    cashNote: 'En un catálogo real, aquí se mostraría el precio de contado y los métodos de pago que maneja la tienda.',
    installmentNote: 'Este bloque organiza la inicial, el número de cuotas y la frecuencia de pago antes de que el cliente escriba.',
    tradeInNote: 'Aquí se resume la política para recibir equipos como parte de pago, sin tener que explicarla desde cero en cada chat.'
  },
  {
    id: 'samsung-s25',
    name: 'Samsung Galaxy S25',
    category: 'Android',
    capacity: '256 GB',
    color: 'Negro',
    condition: 'Nuevo (DEMO)',
    priceLabel: 'Desde $--- · DEMO',
    featured: true,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
    alt: 'Samsung Galaxy S25 Negro',
    tags: ['Contado', 'Cuotas', 'Parte de pago'],
    shortDescription: 'Diseño ultra elegante, procesador de última generación y funciones de inteligencia artificial.',
    cashNote: 'En un catálogo real, aquí se mostraría el precio de contado y los métodos de pago que maneja la tienda.',
    installmentNote: 'Este bloque organiza la inicial, el número de cuotas y la frecuencia de pago antes de que el cliente escriba.',
    tradeInNote: 'Aquí se resume la política para recibir equipos como parte de pago, sin tener que explicarla desde cero en cada chat.'
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    category: 'Usados / Reacondicionados',
    capacity: '128 GB',
    color: 'Azul',
    condition: 'Reacondicionado (DEMO)',
    priceLabel: 'Desde $--- · DEMO',
    featured: true,
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=800&q=80',
    alt: 'iPhone 13 Azul Reacondicionado',
    tags: ['Contado', 'Cuotas', 'Parte de pago'],
    shortDescription: 'Batería verificada, pantalla Super Retina XDR y excelente rendimiento asegurado.',
    cashNote: 'En un catálogo real, aquí se mostraría el precio de contado y los métodos de pago que maneja la tienda.',
    installmentNote: 'Este bloque organiza la inicial, el número de cuotas y la frecuencia de pago antes de que el cliente escriba.',
    tradeInNote: 'Aquí se resume la política para recibir equipos como parte de pago, sin tener que explicarla desde cero en cada chat.'
  },
  {
    id: 'redmi-note-14-pro',
    name: 'Redmi Note 14 Pro',
    category: 'Android',
    capacity: '256 GB',
    color: 'Negro',
    condition: 'Nuevo (DEMO)',
    priceLabel: 'Desde $--- · DEMO',
    featured: true,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    alt: 'Redmi Note 14 Pro Negro',
    tags: ['Contado', 'Cuotas', 'Parte de pago'],
    shortDescription: 'Carga ultrarrápida, cámara de alta resolución y batería de larga duración.',
    cashNote: 'En un catálogo real, aquí se mostraría el precio de contado y los métodos de pago que maneja la tienda.',
    installmentNote: 'Este bloque organiza la inicial, el número de cuotas y la frecuencia de pago antes de que el cliente escriba.',
    tradeInNote: 'Aquí se resume la política para recibir equipos como parte de pago, sin tener que explicarla desde cero en cada chat.'
  },
  {
    id: 'samsung-a56',
    name: 'Samsung Galaxy A56',
    category: 'Android',
    capacity: '256 GB',
    color: 'Gris',
    condition: 'Nuevo (DEMO)',
    priceLabel: 'Desde $--- · DEMO',
    featured: false,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
    alt: 'Samsung Galaxy A56 Gris',
    tags: ['Contado', 'Cuotas', 'Parte de pago'],
    shortDescription: 'Pantalla AMOLED fluida, triple cámara y diseño resistente al agua.',
    cashNote: 'En un catálogo real, aquí se mostraría el precio de contado y los métodos de pago que maneja la tienda.',
    installmentNote: 'Este bloque organiza la inicial, el número de cuotas y la frecuencia de pago antes de que el cliente escriba.',
    tradeInNote: 'Aquí se resume la política para recibir equipos como parte de pago, sin tener que explicarla desde cero en cada chat.'
  },
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro 2',
    category: 'Accesorios',
    capacity: 'Audio inalámbrico',
    color: 'Blanco',
    condition: 'Nuevo (DEMO)',
    priceLabel: 'Desde $--- · DEMO',
    featured: false,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    alt: 'AirPods Pro 2 Blanco',
    tags: ['Contado', 'Cuotas'],
    shortDescription: 'Cancelación activa de ruido mejorada, audio espacial y estuche con carga MagSafe.',
    cashNote: 'En un catálogo real, aquí se mostraría el precio de contado y los métodos de pago que maneja la tienda.',
    installmentNote: 'Este bloque organiza la inicial, el número de cuotas y la frecuencia de pago antes de que el cliente escriba.',
    tradeInNote: 'Aquí se resume la política para recibir accesorios en parte de pago si la tienda lo permite.'
  },
  {
    id: 'apple-watch-10',
    name: 'Apple Watch Series 10',
    category: 'Accesorios',
    capacity: 'GPS · 44 mm',
    color: 'Negro',
    condition: 'Nuevo (DEMO)',
    priceLabel: 'Desde $--- · DEMO',
    featured: false,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    alt: 'Apple Watch Series 10 GPS 44mm Negro',
    tags: ['Contado', 'Cuotas', 'Parte de pago'],
    shortDescription: 'Pantalla Retina siempre activa, sensores de salud avanzados y seguimiento deportivo.',
    cashNote: 'En un catálogo real, aquí se mostraría el precio de contado y los métodos de pago que maneja la tienda.',
    installmentNote: 'Este bloque organiza la inicial, el número de cuotas y la frecuencia de pago antes de que el cliente escriba.',
    tradeInNote: 'Aquí se resume la política para recibir equipos como parte de pago, sin tener que explicarla desde cero en cada chat.'
  },
  {
    id: 'power-bank-20k',
    name: 'Power Bank 20.000 mAh',
    category: 'Accesorios',
    capacity: '20.000 mAh',
    color: 'Negro',
    condition: 'Nuevo (DEMO)',
    priceLabel: 'Desde $--- · DEMO',
    featured: false,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=800&q=80',
    alt: 'Power Bank 20.000 mAh Negro',
    tags: ['Contado', 'Cuotas'],
    shortDescription: 'Batería portátil de alta capacidad con carga rápida USB-C y múltiples puertos.',
    cashNote: 'En un catálogo real, aquí se mostraría el precio de contado y los métodos de pago que maneja la tienda.',
    installmentNote: 'Este bloque organiza la inicial, el número de cuotas y la frecuencia de pago antes de que el cliente escriba.',
    tradeInNote: 'Aquí se resume la política para accesorios o promociones de la tienda.'
  }
];

export const GENERAL_WHATSAPP_MESSAGE = 'Hola, vi el Catálogo Web para WhatsApp de NOVA MOBILE. Quiero consultar un equipo.';
export const DIGITAL_SOLUTION_WHATSAPP_MESSAGE = 'Hola, vi la demo de NOVA MOBILE y quiero conocer cómo funcionaría un Catálogo Web para WhatsApp para mi tienda.';
export const DIGITAL_SOLUTION_PHONE_NUMBER = '573215885381';

export function getDigitalSolutionWhatsAppUrl(): string {
  return `https://api.whatsapp.com/send/?phone=${DIGITAL_SOLUTION_PHONE_NUMBER}&text=${encodeURIComponent(DIGITAL_SOLUTION_WHATSAPP_MESSAGE)}&type=phone_number&app_absent=0`;
}

export function getWhatsAppUrl(phone: string, text: string): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function getProductWhatsAppMessage(model: string, capacity: string, type: 'contado' | 'cuotas' | 'parte_de_pago'): string {
  const modelInfo = `${model} ${capacity}`.trim();
  switch (type) {
    case 'contado':
      return `Hola, vi el ${modelInfo} en el catálogo web. Me interesa consultar disponibilidad y precio de contado.`;
    case 'cuotas':
      return `Hola, vi el ${modelInfo} en el catálogo web. Me interesa consultar disponibilidad y condiciones de pago a cuotas.`;
    case 'parte_de_pago':
      return `Hola, vi el ${modelInfo} en el catálogo web. Me interesa saber si puedo usar mi equipo actual como parte de pago.`;
  }
}
