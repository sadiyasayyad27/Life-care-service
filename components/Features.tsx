
import React, { useEffect, useRef, useState } from 'react';
import { Truck, ShieldCheck, Clock, Headphones } from 'lucide-react';

const FeatureCard = ({ title, desc, icon, index, direction }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const slideClass = direction === 'left' 
    ? (isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0')
    : (isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0');

  return (
    <div 
      ref={cardRef}
      className={`glass p-8 rounded-3xl transition-all duration-1000 ease-out transform ${slideClass} hover:border-emerald-500/50 hover:bg-emerald-900/30 group`}
    >
      <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform group-hover:bg-emerald-500 group-hover:text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-emerald-100/60 leading-relaxed">{desc}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    { title: 'Fastest Delivery', desc: 'Get your medicines delivered within 24 hours at your doorstep.', icon: <Truck size={32} />, direction: 'left' },
    { title: '100% Genuine', desc: 'Directly sourced from trusted manufacturers and verified brands.', icon: <ShieldCheck size={32} />, direction: 'left' },
    { title: '24/7 Service', desc: 'Expert pharmacists available round the clock for your needs.', icon: <Clock size={32} />, direction: 'right' },
    { title: 'Support Care', desc: 'Personalized care support for all your health-related queries.', icon: <Headphones size={32} />, direction: 'right' },
  ];

  return (
    <section className="py-12 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
};

export default Features;
