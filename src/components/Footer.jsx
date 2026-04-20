import React from 'react';
import { ShieldAlert, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img src="/fire logo.webp" alt="Logo" className="h-20 w-30 text-brand-red" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">
                  M O<span className="text-brand-red"> FIRE</span>
                </span>
                <span className="text-[12px] text-gray-400 uppercase tracking-widest font-bold">
                  Consult
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing cutting-edge fire protection systems and safety equipment for over two decades. Committed to saving lives and protecting assets.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/181q4prgoQ/?mibextid=wwXIfr" className="p-3 glass-dark rounded-xl text-gray-400 hover:text-brand-red transition-all hover:-translate-y-1"><Facebook className="h-4 w-4" /></a>
              <a href="https://www.instagram.com/m_o_fire_consult?igsh=MW5jZmZhZzlnejBxZg%3D%3D&utm_source=qr" className="p-3 glass-dark rounded-xl text-gray-400 hover:text-brand-red transition-all hover:-translate-y-1"><Instagram className="h-4 w-4" /></a>
              <a href="https://www.linkedin.com/in/michelle-obeng-412a21374?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="p-3 glass-dark rounded-xl text-gray-400 hover:text-brand-red transition-all hover:-translate-y-1"><Linkedin className="h-4 w-4" /></a>
              {/*<a href="wa.me/233549663151" className="p-3 glass-dark rounded-xl text-gray-400 hover:text-brand-red transition-all hover:-translate-y-1"><Whatsapp className="h-4 w-4" /></a>*/}
              {/*<a href="https://www.tiktok.com/@mofireconsult?_r=1&_t=ZS-95bpsteIRhX" className="p-3 glass-dark rounded-xl text-gray-400 hover:text-brand-red transition-all hover:-translate-y-1"><Tiktok className="h-4 w-4" /></a>*/}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/products" className="hover:text-brand-red transition-colors">Safety Equipment</Link></li>
              <li><Link to="/services" className="hover:text-brand-red transition-colors">Installation Services</Link></li>
              <li><Link to="/training" className="hover:text-brand-red transition-colors">Safety Training</Link></li>
              <li><Link to="/maintenance" className="hover:text-brand-red transition-colors">Maintenance Programs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/book-consultation" className="hover:text-brand-red transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-red shrink-0" />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-brand-red shrink-0" />
                <span>+233 549 663 151</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-brand-red shrink-0" />
                <span>michelleobeng51@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs text-center space-y-6 md:space-y-0">
          <p>© {new Date().getFullYear()} M O FIRE Consult. All rights reserved.</p>
          <div className="flex space-x-8">
            <span className="flex items-center space-x-2"><ShieldAlert className="h-3 w-3" /> <span>NFPA Member</span></span>
            <span className="flex items-center space-x-2"><ShieldAlert className="h-3 w-3" /> <span>ISO 9001:2015</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
