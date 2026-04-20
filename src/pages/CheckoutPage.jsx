import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShieldCheck, CreditCard, Lock, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      alert("Payment Successful! Your order is being processed.");
      navigate('/');
    }, 2000);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/cart" className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors mb-8 group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Selection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Shipping Form */}
          <div>
            <h2 className="text-4xl font-black text-white mb-10 tracking-tight uppercase">
              Shipping <span className="text-brand-red">Intelligence</span>
            </h2>
            
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputGroup label="First Name" placeholder="John" />
                <InputGroup label="Last Name" placeholder="Doe" />
              </div>
              <InputGroup label="Email Address" placeholder="john@example.com" type="email" />
              <InputGroup label="Shipping Address" placeholder="123 Safety Street" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <InputGroup label="City" placeholder="New York" />
                <InputGroup label="State" placeholder="NY" />
                <InputGroup label="Zip Code" placeholder="10001" />
              </div>

              <div className="pt-10">
                <button 
                  type="submit"
                  disabled={isProcessing}
                  className="btn-primary w-full py-5 text-xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-wait"
                >
                  {isProcessing ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <CreditCard className="h-6 w-6" />
                      <span>Authorize Payment of ${cartTotal.toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Trust Panel */}
          <div className="hidden lg:block">
            <div className="glass-dark p-12 rounded-[2rem] border-white/5 h-full flex flex-col justify-center">
              <div className="text-center space-y-8">
                <div className="inline-block p-6 glass-dark rounded-full mb-4">
                  <ShieldCheck className="h-16 w-16 text-brand-red animate-pulse" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight">Zero-Risk Transaction</h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Your data is protected by the same encryption standards used by global banking institutions.
                </p>
                <div className="flex items-center justify-center space-x-12 pt-12">
                  <TrustIcon icon={<Lock />} label="AES-256" />
                  <TrustIcon icon={<ShieldCheck />} label="PCI-DSS" />
                  <TrustIcon icon={<CreditCard />} label="SECURE" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-[10px] uppercase font-bold tracking-widest text-gray-500 ml-1">{label}</label>
    <input 
      type={type} 
      required
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-brand-red/50 transition-all outline-none placeholder:text-gray-700"
    />
  </div>
);

const TrustIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center space-y-2">
    <div className="text-gray-500">{icon}</div>
    <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">{label}</span>
  </div>
);

export default CheckoutPage;
