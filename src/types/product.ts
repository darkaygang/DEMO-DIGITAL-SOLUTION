export type ProductCategory = 'Todos' | 'iPhone' | 'Android' | 'Usados / Reacondicionados' | 'Accesorios';

export interface Product {
  id: string;
  name: string;
  category: Exclude<ProductCategory, 'Todos'>;
  capacity: string;
  color: string;
  condition: string;
  priceLabel: string;
  featured: boolean;
  image: string;
  alt: string;
  tags: string[];
  shortDescription: string;
  cashNote?: string;
  installmentNote?: string;
  tradeInNote?: string;
}

export type PaymentType = 'contado' | 'cuotas' | 'parte_de_pago';
