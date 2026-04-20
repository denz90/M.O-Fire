import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, RefreshCcw, Headset } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-brand-red">
      <Hero />
      
      {/* Features Section */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<ShieldCheck className="h-8 w-8 text-brand-red" />}
              title="Certified Quality"
              desc="All products meet NFPA & ISO international standards."
            />
            <FeatureCard 
              icon={<Truck className="h-8 w-8 text-brand-amber" />}
              title="Rapid Delivery"
              desc="Same-day dispatch for critical safety equipment."
            />
            <FeatureCard 
              icon={<RefreshCcw className="h-8 w-8 text-blue-400" />}
              title="Easy Maintenance"
              desc="Automated reminders for equipment inspection."
            />
            <FeatureCard 
              icon={<Headset className="h-8 w-8 text-green-400" />}
              title="Expert Support"
              desc="24/7 technical assistance for fire emergencies."
            />
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              "Fire Safety isn't an expense, it's an investment in your peace of mind."
            </h2>
            <div className="h-1 w-24 bg-brand-amber mx-auto"></div>
            <p className="text-gray-800 font-medium tracking-widest uppercase">Global Safety Council</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-3xl glass-dark border-white/5 space-y-4"
  >
    <div className="p-3 bg-white/5 rounded-2xl inline-block">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default HomePage;
