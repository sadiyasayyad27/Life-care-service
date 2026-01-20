
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 pt-20 pb-10 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">LC</span>
              </div>
              <span className="text-xl font-extrabold text-emerald-50">LIFE CARE MEDICAL</span>
            </div>
            <p className="text-emerald-100/60 leading-relaxed">
              Your neighborhood pharmacy, now online. We provide authentic medicines and diagnostic services with care and precision.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8">Quick Links</h4>
            <ul className="space-y-4 text-emerald-100/60">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Book a Lab Test</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Wellness Products</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Emergency Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-emerald-100/60">
                <MapPin className="text-emerald-500 shrink-0" size={20} />
                <span>123 Medical Plaza, Wellness Street, Health City - 560001</span>
              </li>
              <li className="flex items-center space-x-3 text-emerald-100/60">
                <Phone className="text-emerald-500 shrink-0" size={20} />
                <span>+1 (800) LIFE-CARE</span>
              </li>
              <li className="flex items-center space-x-3 text-emerald-100/60">
                <Mail className="text-emerald-500 shrink-0" size={20} />
                <span>support@lifecaremed.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-8">Newsletter</h4>
            <p className="text-emerald-100/60 mb-6">Subscribe for health tips and exclusive offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-emerald-900/30 border border-emerald-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-emerald-500 hover:bg-emerald-400 rounded-lg text-white font-bold transition-all">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center text-emerald-100/30 text-sm">
          <p>© 2024 Life Care Medical. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
