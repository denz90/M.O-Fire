import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="fixed w-full z-50 glass-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/fire logo.webp" alt="Logo" className="h-20 w-30 text-brand-red animate-pulse" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">
                  M O<span className="text-brand-red"> FIRE</span>
                </span>
                <span className="text-[12px] text-gray-400 uppercase tracking-widest font-bold">
                  Consult
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/products" className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors">Equipment</Link>
              <Link to="/services" className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors">Services</Link>
              <Link to="/training" className="text-gray-300 hover:text-white px-3 py-2 font-medium transition-colors">Safety Training</Link>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/cart" className="relative p-2 text-gray-300 hover:text-brand-red transition-colors group">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-black">
                  {cartCount}
                </span>
              )}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all group-hover:w-full"></div>
            </Link>
            <Link to="/login" className="hidden md:flex items-center space-x-2 btn-primary !py-2 !px-4 text-sm">
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark/98 backdrop-blur-2xl border-t border-white/10 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-4 pt-6 pb-12 space-y-4"
          >
            <Link 
              to="/products" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white block px-4 py-4 text-xl font-bold glass-dark rounded-2xl border-white/5"
            >
              Equipment
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white block px-4 py-4 text-xl font-bold glass-dark rounded-2xl border-white/5"
            >
              Services
            </Link>
            <Link 
              to="/training" 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white block px-4 py-4 text-xl font-bold glass-dark rounded-2xl border-white/5"
            >
              Safety Training
            </Link>
            <Link 
              to="/login" 
              onClick={() => setIsOpen(false)}
              className="text-brand-red block px-4 py-5 text-xl font-black uppercase tracking-tight border-2 border-brand-red/20 rounded-2xl text-center shadow-[0_0_30px_rgba(226,29,44,0.1)]"
            >
              Login / Register
            </Link>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
