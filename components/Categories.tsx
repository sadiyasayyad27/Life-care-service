
import React from 'react';
import { Bone, Baby, Sparkles, Activity, Brain, HeartPulse } from 'lucide-react';

const CategoryCard = ({ icon: Icon, title, color }: any) => (
  <div className="group relative overflow-hidden glass p-10 rounded-[2.5rem] flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer border border-emerald-500/10">
    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 ${color} group-hover:scale-110 group-hover:rotate-6`}>
      <Icon size={40} className="text-white" />
    </div>
    <h3 className="mt-6 text-xl font-bold text-white text-center group-hover:text-emerald-400 transition-colors">{title}</h3>
    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <div className="h-1 w-12 bg-emerald-500 rounded-full"></div>
    </div>
    
    {/* Abstract Background Shapes */}
    <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-500"></div>
  </div>
);

const Categories: React.FC = () => {
  const categories = [
    { title: 'Bone Care', icon: Bone, color: 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]' },
    { title: 'Skin Care', icon: Sparkles, color: 'bg-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.3)]' },
    { title: 'Baby Care', icon: Baby, color: 'bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]' },
    { title: 'Vitamins', icon: Activity, color: 'bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]' },
    { title: 'Mind Wellness', icon: Brain, color: 'bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]' },
    { title: 'Heart Care', icon: HeartPulse, color: 'bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.3)]' },
  ];

  return (
    <section className="py-16">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl font-extrabold text-white mb-4">Health Categories</h2>
        <div className="h-1.5 w-24 bg-emerald-500 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((c, i) => (
          <CategoryCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
