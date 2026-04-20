import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ShoppingCart, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      className="group glass-dark rounded-3xl overflow-hidden border-white/5 transition-all duration-500 hover:border-brand-red/30"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
        
        <div className="absolute top-4 right-4 bg-brand-red text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg">
          {product.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-2 text-brand-amber text-[10px] font-bold uppercase tracking-widest mb-2">
          <Shield className="h-3 w-3" />
          <span>{product.certification || 'Certified'}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-500 text-sm line-clamp-2 mb-6">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white">${product.price}</span>
            <span className="text-[10px] text-gray-600 uppercase tracking-tighter">In Stock: {product.stock}</span>
          </div>
          
          <button
            onClick={() => addToCart(product)}
            className="p-4 bg-white/5 rounded-2xl text-white hover:bg-brand-red hover:shadow-[0_0_20px_rgba(226,29,44,0.4)] transition-all active:scale-95 group/btn"
          >
            <Plus className="h-6 w-6 group-hover/btn:rotate-90 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
