import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Wrench, 
  Activity, 
  Map, 
  GraduationCap, 
  FileSearch, 
  ArrowRight,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const services = [
    {
      title: "Fire Risk Assessment",
      description: "Professional identifying of fire hazards and people at risk, evaluating current safety measures, and providing a comprehensive action plan.",
      icon: <ShieldCheck className="h-8 w-8" />,
      tag: "COMPLIANCE",
      slug: "fire-risk-assessment"
    },
    {
      title: "System Installation",
      description: "Expert installation of advanced smoke detectors, automated sprinkler systems, and high-tech fire alarms tailored to your building architecture.",
      icon: <Wrench className="h-8 w-8" />,
      tag: "TECHNICAL",
      slug: "system-installation"
    },
    {
      title: "Maintenance & Testing",
      description: "Regular servicing and rigorous testing of all fire safety equipment to ensure peak performance when it matters most.",
      icon: <Activity className="h-8 w-8" />,
      tag: "RELIABILITY",
      slug: "maintenance-testing"
    },
    {
      title: "Emergency Planning",
      description: "Strategic design of evacuation routes, assembly points, and emergency protocols for industrial and commercial structures.",
      icon: <Map className="h-8 w-8" />,
      tag: "STRATEGY",
      slug: "emergency-planning"
    },
    {
      title: "Safety Training",
      description: "Hands-on fire warden training and employee safety workshops to build a culture of preparedness effectively.",
      icon: <GraduationCap className="h-8 w-8" />,
      tag: "EDUCATION",
      slug: "fire-warden-training"
    },
    {
      title: "Compliance Audit",
      description: "Thorough review of your safety documentation and equipment to ensure full adherence to local and international fire safety standards.",
      icon: <FileSearch className="h-8 w-8" />,
      tag: "AUDIT",
      slug: "compliance-audit"
    }
  ];

  return (
    <div className="bg-brand-red min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[url('/fire.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-red/20 border border-brand-red/30 px-4 py-2 rounded-full mb-6">
              <Flame className="h-4 w-4 text-brand-red" />
              <span className="text-brand-red text-xs font-black uppercase tracking-[0.2em]">Consultancy Excellence</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
              Elite Fire <span className="text-brand-red">Safety Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From risk assessment to technical installation, we provide end-to-end fire protection solutions designed to preserve life and protect assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl glass-dark border-white/5 hover:border-brand-red/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {service.icon}
              </div>
              
              <div className="text-[10px] font-black text-brand-gray tracking-[0.3em] mb-4 uppercase">
                {service.tag}
              </div>
              
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red/20 transition-colors text-white group-hover:text-brand-amber">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {service.description}
              </p>
              
              <Link 
                to={service.slug ? `/details/services/${service.slug}` : "#"}
                className="flex items-center space-x-2 text-white font-bold text-xs uppercase tracking-widest group-hover:text-brand-amber transition-colors"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-white border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tighter mb-16">
            Why Partner With <span className="text-brand-red">M O Fire Consult?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Licensed Experts", desc: "Certified professionals with decades of safety experience." },
              { title: "Tailored Solutions", desc: "We don't believe in one-size-fits-all safety protocols." },
              { title: "24/7 Reliability", desc: "Committed to your safety around the clock, every day." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <CheckCircle2 className="h-10 w-10 text-brand-red mb-6" />
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-900 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] glass-dark border-brand-red/20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-white/5 to-transparent"></div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">
            Ready to secure your <span className="text-brand-red">Future?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Schedule a professional fire risk assessment today. Our consultants are ready to help you protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/book-consultation" className="btn-primary w-full sm:w-auto px-12 py-5 text-lg">
              Book a Consultation
            </Link>
            <button className="w-full sm:w-auto px-12 py-5 text-white font-bold border-2 border-white/10 rounded-2xl hover:bg-white/5 transition-all uppercase tracking-widest text-sm">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesPage;
