
import React, { useEffect, useState } from 'react';
import { Pill, Thermometer, ShieldPlus, Stethoscope, Syringe, HeartPulse } from 'lucide-react';

// Using React.FC ensures the 'key' prop is recognized as a valid intrinsic attribute
const PoppingIcon: React.FC<{ delay: number }> = ({ delay }) => {
  const [style, setStyle] = useState<React.CSSProperties>({});
  
  useEffect(() => {
    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 150;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    // Explicitly casting as React.CSSProperties to allow for custom CSS variables
    setStyle({
      '--tw-translate-x': `${x}px`,
      '--tw-translate-y': `${y}px`,
      animationDelay: `${delay}s`,
    } as React.CSSProperties);
  }, [delay]);

  const icons = [<Pill />, <Thermometer />, <ShieldPlus />, <Stethoscope />, <Syringe />, <HeartPulse />];
  const Icon = icons[Math.floor(Math.random() * icons.length)];

  return (
    <div 
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-400/80 animate-pop-out pointer-events-none"
      style={style}
    >
      {React.cloneElement(Icon as React.ReactElement, { className: 'w-6 h-6' })}
    </div>
  );
};

const Hero: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpened(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[450px] w-full flex items-center overflow-hidden bg-emerald-950">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-emerald-600/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div className="z-10 transform translate-x-[-50px] opacity-0 animate-[slideInLeft_0.8s_ease-out_forwards]">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Your Health, <br />
            <span className="text-emerald-400">Our Care.</span>
          </h1>
          <p className="text-lg text-emerald-200/70 max-w-md mb-8">
            Life Care Medical brings you the world's most trusted pharmacy brands delivered right to your doorstep.
          </p>
          <div className="flex space-x-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl shadow-xl shadow-emerald-500/20 transition-all transform hover:-translate-y-1">
              Shop Now
            </button>
            <button className="px-8 py-4 bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 font-bold rounded-xl hover:bg-emerald-900 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side Animation */}
        <div className="relative h-full flex items-center justify-center">
          <div className="relative w-80 h-32 perspective-1000">
            {/* The Capsule Container */}
            <div className={`relative w-full h-full flex items-center transition-all duration-1000 ease-in-out ${isOpened ? 'gap-12' : 'gap-0'}`}>
              {/* Left Half */}
              <div className="w-1/2 h-full bg-emerald-600 rounded-l-full shadow-2xl relative z-20 border-r-2 border-emerald-500/50 flex items-center justify-end pr-4">
                <div className="w-4 h-12 bg-emerald-400/30 rounded-full blur-sm" />
              </div>
              
              {/* Center Popping Area */}
              {isOpened && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  {[...Array(12)].map((_, i) => (
                    <PoppingIcon key={i} delay={i * 0.2} />
                  ))}
                </div>
              )}

              {/* Right Half */}
              <div className="w-1/2 h-full bg-emerald-100 rounded-r-full shadow-2xl relative z-20 border-l-2 border-emerald-200/30 flex items-center justify-start pl-4">
                <div className="w-4 h-12 bg-emerald-600/10 rounded-full blur-sm" />
              </div>
            </div>
            
            {/* Shadow beneath capsule */}
            <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 h-4 bg-emerald-900/50 rounded-full blur-md transition-all duration-1000 ${isOpened ? 'w-96 opacity-50' : 'w-64 opacity-100'}`} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Hero;