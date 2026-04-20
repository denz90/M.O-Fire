import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-brand-dark flex flex-col items-center justify-center space-y-8 px-4">
        <div className="p-8 glass-dark rounded-full">
          <ShoppingBag className="h-20 w-20 text-gray-700" />
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Ready to secure your world? Start browsing our equipment.</p>
          <Link to="/products" className="btn-primary">
            Explore Equipment
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-black text-white mb-12 tracking-tight uppercase">
          Review <span className="text-brand-red">Selection</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-grow space-y-4">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-dark p-4 sm:p-6 rounded-[2rem] border-white/5 flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:border-brand-red/20 transition-all duration-500"
              >
                <div className="flex w-full sm:w-auto items-center gap-4 sm:gap-6">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden bg-black/40 shrink-0 border border-white/5">
                    <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-700" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-red transition-colors">{item.name}</h3>
                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">{item.category}</p>
                    <div className="sm:hidden mt-2 text-xl font-black text-brand-red">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto sm:ml-auto gap-4">
                  <div className="flex items-center space-x-4 glass-dark rounded-2xl p-1 border-white/5">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-white font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="hidden sm:block text-right min-w-[120px]">
                    <p className="text-2xl font-black text-white">${(item.price * item.quantity).toFixed(2)}</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-tighter">${item.price} / unit</p>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-700 hover:text-brand-red transition-all p-3 glass-dark rounded-xl"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="w-full lg:w-96">
            <div className="glass-dark p-8 rounded-3xl border-white/5 sticky top-32">
              <h3 className="text-xl font-bold text-white mb-8 border-b border-white/5 pb-4">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>Subtotal</span>
                  <span className="text-white">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>Shipping</span>
                  <span className="text-green-500 font-bold uppercase text-[10px] tracking-widest">Calculated at next step</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-10">
                <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Total cost</span>
                <span className="text-4xl font-black text-brand-red">${cartTotal.toFixed(2)}</span>
              </div>

              <Link to="/checkout" className="btn-primary w-full flex items-center justify-center space-x-2 py-4">
                <span>Secure Checkout</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <p className="mt-6 text-center text-gray-600 text-[10px] uppercase font-bold tracking-widest">
                Protected by 256-bit AES encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
