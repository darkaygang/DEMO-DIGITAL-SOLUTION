import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LocalCommerceStrip } from './components/LocalCommerceStrip';
import { FeaturedModels } from './components/FeaturedModels';
import { Catalog } from './components/Catalog';
import { PaymentCards } from './components/PaymentCards';
import { DeliverySection } from './components/DeliverySection';
import { TrustGrid } from './components/TrustGrid';
import { Comparison } from './components/Comparison';
import { OwnerCTA } from './components/OwnerCTA';
import { OptionalReviewsModule } from './components/OptionalReviewsModule';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory } from './types/product';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
    setTimeout(() => {
      const el = document.getElementById('modelos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Header Sticky */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero */}
        <Hero isUnlocked={isUnlocked} onUnlock={handleUnlock} />
        
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* 2. Local Commerce Strip */}
            <LocalCommerceStrip />

            {/* 3. Modelos Destacados */}
            <FeaturedModels
              products={PRODUCTS}
              onSelectProduct={handleSelectProduct}
            />

            {/* 4. Explorar por Categoría + Catálogo */}
            <Catalog
              products={PRODUCTS}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              onSelectProduct={handleSelectProduct}
            />

            {/* 5. Bloque Formas de Pago */}
            <PaymentCards />

            {/* 6. Bloque Delivery y Envíos */}
            <DeliverySection />

            {/* 7. Bloque de Confianza */}
            <TrustGrid />

            {/* 8. Comparativa */}
            <Comparison />

            {/* 9. Hecho para tu tienda (Digital Solution) */}
            <OwnerCTA />

            {/* 10. Módulo Opcional y FAQ */}
            <OptionalReviewsModule />
            <Faq />
            <Footer />
          </motion.div>
        )}
      </main>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
