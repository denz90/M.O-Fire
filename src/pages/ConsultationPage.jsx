import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2,
  ChevronRight,
  ClipboardList
} from 'lucide-react';

const ConsultationPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'risk-assessment',
    address: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-brand-red min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Info & Branding */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-brand-amber/20 border border-brand-amber/30 px-4 py-2 rounded-full mb-4">
              <Calendar className="h-4 w-4 text-brand-amber" />
              <span className="text-brand-amber text-xs font-black uppercase tracking-[0.2em]">Priority Scheduling</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Book Your <span className="text-brand-amber">Professional</span> Consultation
            </h1>
            
            <p className="text-xl text-white/70 max-w-lg leading-relaxed mb-12">
              Our safety consultants are ready to conduct an in-depth audit of your facilities. Secure your peace of mind with M O FIRE Consult.
            </p>

            <div className="space-y-6">
              {[
                { icon: <ShieldCheck className="h-6 w-6 text-brand-amber" />, text: "Certified NFPA Professionals" },
                { icon: <ClipboardList className="h-6 w-6 text-brand-amber" />, text: "Comprehensive Safety Reports" },
                { icon: <CheckCircle2 className="h-6 w-6 text-brand-amber" />, text: "Legal Compliance Guaranteed" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">{item.icon}</div>
                  <span className="text-white font-bold uppercase tracking-widest text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-4 glass-dark rounded-2xl group-hover:bg-brand-amber group-hover:text-black transition-all">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Call Directly</p>
                  <p className="text-white font-bold">+233 549 663 151</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-4 glass-dark rounded-2xl group-hover:bg-brand-amber group-hover:text-black transition-all">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Email Support</p>
                  <p className="text-white font-bold text-sm">michelleobeng51@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Consultation Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="glass-dark p-8 md:p-12 rounded-[2.5rem] border-white/5 shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/5 blur-3xl rounded-full"></div>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-amber transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-amber transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-amber transition-colors"
                          placeholder="+233 XXX XXX XXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Service Required</label>
                        <select 
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-amber appearance-none transition-colors"
                        >
                          <option value="risk-assessment" className="bg-brand-red">Fire Risk Assessment</option>
                          <option value="installation" className="bg-brand-red">System Installation</option>
                          <option value="maintenance" className="bg-brand-red">Maintenance & Testing</option>
                          <option value="training" className="bg-brand-red">Safety Training</option>
                          <option value="consultation" className="bg-brand-red">General Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Consultation Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 h-5 w-5 text-brand-amber" />
                        <input 
                          type="text" 
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-brand-amber transition-colors"
                          placeholder="Your property or office location"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Safety Concerns / Extra Info</label>
                      <textarea 
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-amber transition-colors resize-none"
                        placeholder="Tell us about your specific safety requirements..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-primary w-full py-5 rounded-[1.5rem] flex items-center justify-center space-x-3 group"
                    >
                      <span className="uppercase tracking-widest font-black text-sm">Schedule Now</span>
                      <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    <p className="text-center text-white/30 text-[10px] font-bold uppercase tracking-widest">
                      Our team usually responds within 24 hours
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-dark p-16 rounded-[2.5rem] border-brand-amber/30 text-center shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-amber"></div>
                  <CheckCircle2 className="h-20 w-20 text-brand-amber mx-auto mb-8 animate-bounce" />
                  <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Request Received</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Thank you, <span className="text-white font-bold">{formData.name}</span>. Your consultation request for <span className="text-white font-bold">{formData.serviceType.replace('-', ' ')}</span> has been registered. 
                  </p>
                  <p className="text-brand-amber font-black uppercase tracking-[0.2em] text-xs mb-12">Reference ID: MOF-{Math.floor(1000 + Math.random() * 9000)}</p>
                  
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="flex items-center space-x-2 text-white/60 hover:text-white mx-auto transition-colors font-bold uppercase tracking-widest text-xs"
                  >
                    <span>Send another request</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
