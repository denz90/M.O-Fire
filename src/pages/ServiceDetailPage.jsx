import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  Shield, 
  Info,
  ChevronRight,
  Flame
} from 'lucide-react';
import { detailsData } from '../data/detailsData';

const ServiceDetailPage = () => {
  const { type, id } = useParams();
  
  // Use scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Look up the specific content
  const content = detailsData[type]?.[id];

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-brand-red min-h-screen pt-20 pb-20">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to={type === 'services' ? '/services' : '/training'} 
          className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">Back to {type === 'services' ? 'Services' : 'Training'}</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-brand-amber/20 text-brand-amber text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-brand-amber/30">
              {content.tag}
            </span>
            <div className="h-px w-12 bg-white/20"></div>
            <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Consultancy Excellence
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            {content.title.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-white" : "text-white/90"}>{word} </span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-12">
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass-dark p-10 rounded-[2.5rem] border-white/5"
            >
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 flex items-center space-x-3">
                <Info className="h-6 w-6 text-brand-amber" />
                <span>Overview</span>
              </h2>
              <div className="text-gray-400 leading-relaxed text-lg space-y-6">
                {content.fullContent}
              </div>
            </motion.section>

            {/* Process Section */}
            <section className="space-y-8">
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter flex items-center space-x-3">
                <Clock className="h-8 w-8 text-brand-amber" />
                <span>Our Process</span>
              </h2>
              <div className="space-y-6">
                {content.process.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full glass-dark flex items-center justify-center text-brand-amber font-black border-brand-amber/20 group-hover:bg-brand-amber group-hover:text-black transition-all">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">{step.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar (Right) */}
          <aside className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-dark p-8 rounded-3xl border-brand-amber/20 bg-gradient-to-br from-white/5 to-brand-amber/5"
            >
              <h3 className="text-lg font-black text-white uppercase tracking-widest mb-6 flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-brand-amber" />
                <span>Key Benefits</span>
              </h3>
              <ul className="space-y-4">
                {content.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-gray-400 leading-relaxed">
                    <ChevronRight className="h-4 w-4 text-brand-amber shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="glass-dark p-8 rounded-3xl border-white/5">
              <h3 className="text-sm font-black text-white/40 uppercase tracking-widest mb-6 flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Standards met</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.standards.map((std, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] text-white/60 font-bold border border-white/10">
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="p-8 rounded-3xl bg-brand-dark border-brand-red border relative overflow-hidden group">
              <Flame className="absolute -bottom-4 -right-4 h-24 w-24 text-brand-red/10 group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4">Need this professional service?</h3>
              <p className="text-gray-500 text-xs mb-6 mb-8 uppercase tracking-widest font-bold">Priority Scheduling Available</p>
              <Link to="/book-consultation" className="btn-primary w-full py-4 text-sm tracking-widest uppercase">
                Enquire Now
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
