
import React from 'react';
import { ShoppingCart, LogIn, UserPlus, Heart, Menu } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'login', label: 'Login', icon: <LogIn className="w-4 h-4" /> },
    { id: 'signin', label: 'Sign In', icon: <UserPlus className="w-4 h-4" /> },
    { id: 'cart', label: 'Cart', icon: <ShoppingCart className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => onTabChange('home')}>
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-emerald-500/20">
              <span className="text-white font-bold text-xl">LC</span>
            </div>
            <span className="text-xl font-extrabold text-emerald-50 bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
              LIFE CARE MEDICAL
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeTab === item.id 
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
                    : 'text-emerald-100 hover:bg-emerald-900/50 hover:text-emerald-400'
                }`}
              >
                {item.icon}
                <span className="font-semibold">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-emerald-100 p-2 hover:bg-emerald-900/50 rounded-lg transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
