import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-[url('/fire.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-red/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-amber/10 rounded-full blur-[150px] delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-dark text-brand-red mb-8 border border-brand-red/20"
          >
            <ShieldCheck className="h-5 w-5" />
            <span className="text-sm font-bold tracking-widest uppercase">Certified Safety Equipment</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-tight mb-8"
          >
            DEFEND YOUR <br />
            <span className="bg-gradient-to-r from-brand-red to-brand-amber bg-clip-text text-transparent">WORLD</span> FROM FIRE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl text-white-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Premium fire protection solutions for industrial, commercial, and residential safety. 
            Because when seconds count, quality is everything.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/products" className="btn-primary flex items-center space-x-2 w-full sm:w-auto text-lg py-4 px-8">
              <span>Explore Equipment</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/services" className="btn-secondary w-full sm:w-auto text-lg py-4 px-8">
              Our Services
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 sm:mt-24"
          >
            <div className="rounded-3xl border-white/5 transition-all hover:border-brand-red/20 group">
              <Flame className="h-8 w-8 text-brand-red mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">24/7 Monitoring</h3>
              <p className="text-white-500 text-sm italic">Immediate response systems</p>
            </div>
            <div className="rounded-3xl border-white/5 transition-all hover:border-brand-amber/20 group">
              <ShieldCheck className="h-8 w-8 text-brand-amber mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">ISO Certified</h3>
              <p className="text-white-500 text-sm italic">Global safety standards</p>
            </div>
            <div className="rounded-3xl border-white/5 transition-all hover:border-blue-400/20 group sm:col-span-2 lg:col-span-1">
              <Zap className="h-8 w-8 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">Smart Alerts</h3>
              <p className="text-white-500 text-sm italic">Integrated mobile notifications</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
