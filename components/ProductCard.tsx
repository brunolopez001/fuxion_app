import React from 'react';
import { Product } from '../types';
import { Check, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-fuxion-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1">
          {product.description}
        </p>
        
        <div className="mb-6 space-y-1">
          {product.benefits.slice(0, 2).map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
              <Check size={14} className="text-fuxion-secondary" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-bold text-fuxion-primary">
            S/. {product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => onSelect(product)}
            className="bg-fuxion-secondary hover:bg-green-600 text-white p-3 rounded-xl transition-colors shadow-md shadow-green-200"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};