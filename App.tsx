
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductCarousel from './components/ProductCarousel';
import Categories from './components/Categories';
import LabTests from './components/LabTests';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-emerald-950 font-sans selection:bg-emerald-500 selection:text-white">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="pt-20">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-16">
          <Features />
          <ProductCarousel />
          <Categories />
          <LabTests />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
