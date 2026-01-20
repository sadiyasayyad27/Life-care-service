
import React from 'react';
import { ClipboardCheck, ArrowRight, Activity, Microscope, Heart, FlaskConical } from 'lucide-react';

const TestItem = ({ title, price, icon: Icon, direction }: any) => {
  return (
    <div className={`flex items-center space-x-4 glass p-6 rounded-2xl transition-all hover:bg-emerald-900/40 group transform ${direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'}`}>
      <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
        <Icon size={24} />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-bold">{title}</h4>
        <p className="text-emerald-400 font-semibold">{price}</p>
      </div>
      <button className="p-2 bg-emerald-900/50 rounded-lg text-emerald-100 group-hover:bg-emerald-500 transition-all">
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

const LabTests: React.FC = () => {
  const tests = [
    { title: 'Diabetes Panel', price: '$29.00', icon: Activity, direction: 'left' },
    { title: 'Thyroid Care', price: '$35.00', icon: Microscope, direction: 'right' },
    { title: 'Cardiac Health', price: '$49.00', icon: Heart, direction: 'left' },
    { title: 'Liver Profile', price: '$39.00', icon: FlaskConical, direction: 'right' },
  ];

  return (
    <section className="py-24 relative overflow-hidden rounded-[3rem]">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1600/900?medical" 
          alt="Laboratory" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-transparent"></div>
      </div>

      <div className="relative z-10 p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-bold uppercase tracking-wider mb-6">Diagnostic Care</span>
          <h2 className="text-5xl font-extrabold text-white mb-8 leading-tight">
            Book Comprehensive <br />
            <span className="text-emerald-500">Health Checkups</span>
          </h2>
          
          <div className="space-y-4 mb-10">
            <div className="flex items-center space-x-3 text-emerald-100/70">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Home Sample Collection</span>
            </div>
            <div className="flex items-center space-x-3 text-emerald-100/70">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>E-Reports within 12 Hours</span>
            </div>
            <div className="flex items-center space-x-3 text-emerald-100/70">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Verified Labs & Pathologists</span>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border-2 border-emerald-500/30">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Full Body Package</h3>
                <p className="text-emerald-400 font-bold text-3xl mt-1">$149.00 <span className="text-sm text-emerald-100/40 line-through ml-2">$299.00</span></p>
              </div>
              <ClipboardCheck size={48} className="text-emerald-500 opacity-50" />
            </div>
            <button className="w-full py-5 bg-emerald-500 hover:bg-emerald-400 text-white font-black text-xl rounded-2xl shadow-2xl shadow-emerald-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
              BOOK NOW
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <h4 className="text-xl font-bold text-white mb-2">Additional Tests</h4>
          {tests.map((t, i) => (
            <TestItem key={i} {...t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-left { animation: slideLeft 1s ease-out forwards; }
        .animate-slide-right { animation: slideRight 1s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default LabTests;
