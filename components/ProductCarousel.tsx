
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, name: 'Vitamin C Boost', price: '$19.99', image: 'https://picsum.photos/400/400?random=1' },
  { id: 2, name: 'Omega-3 Fish Oil', price: '$24.50', image: 'https://picsum.photos/400/400?random=2' },
  { id: 3, name: 'Baby Care Kit', price: '$45.00', image: 'https://picsum.photos/400/400?random=3' },
  { id: 4, name: 'Premium Face Serum', price: '$32.00', image: 'https://picsum.photos/400/400?random=4' },
  { id: 5, name: 'Digital Thermometer', price: '$12.99', image: 'https://picsum.photos/400/400?random=5' },
  { id: 6, name: 'Natural Sleep Aid', price: '$18.75', image: 'https://picsum.photos/400/400?random=6' },
];

const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleProducts = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      let idx = (currentIndex + i + products.length) % products.length;
      items.push({ ...products[idx], pos: i });
    }
    return items;
  };

  return (
    <section className="py-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-4xl font-extrabold text-white mb-4">Featured Products</h2>
        <div className="h-1.5 w-24 bg-emerald-500 rounded-full"></div>
      </div>

      <div className="relative h-[450px] w-full flex items-center justify-center overflow-hidden">
        {getVisibleProducts().map((item) => (
          <div
            key={item.id}
            className={`absolute transition-all duration-700 ease-in-out transform flex flex-col items-center ${
              item.pos === 0 
                ? 'scale-110 z-30 opacity-100 blur-0 translate-x-0' 
                : item.pos === -1 
                  ? 'scale-90 z-20 opacity-40 blur-sm -translate-x-[70%]' 
                  : 'scale-90 z-20 opacity-40 blur-sm translate-x-[70%]'
            }`}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glass border-2 border-emerald-500/20 shadow-2xl relative group">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              {item.pos === 0 && (
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent opacity-60"></div>
              )}
            </div>
            {item.pos === 0 && (
              <div className="mt-8 text-center animate-fadeInUp">
                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-emerald-400 font-bold text-xl">{item.price}</p>
                <button className="mt-4 px-6 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-400 transition-colors font-semibold">
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        ))}

        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-20 z-40">
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)}
            className="p-4 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % products.length)}
            className="p-4 rounded-full bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default ProductCarousel;
