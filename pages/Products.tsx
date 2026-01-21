import React from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Page } from '../types';

interface ProductsProps {
  onNavigate: (page: Page) => void;
}

export const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const handleProductSelect = () => {
    // In a real app, add to cart or go to detail
    // For now, redirect to booking/contact
    onNavigate(Page.BOOKING);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-fuxion-primary font-bold tracking-wide uppercase text-sm mb-2">Nuestras Bebidas</h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nutrición Inteligente</h1>
          <p className="max-w-2xl mx-auto text-gray-500">
            Descubre nuestra gama de productos diseñados para potenciar cada aspecto de tu salud.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={handleProductSelect} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};