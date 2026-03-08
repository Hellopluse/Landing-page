
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 rounded-l-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-blue/10 rounded-r-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <div className="inline-block bg-brand-blue/20 text-blue-700 px-4 py-1.5 rounded-full text-xs font-black mb-6 tracking-widest uppercase">
            🚀 Co-création assistée par IA
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
            Passez du post-it au <span className="text-brand-blue">prototype</span> en un battement.
          </h1>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
            Hello Pulse est l'écosystème qui comble le fossé entre le brainstorming et la réalisation concrète.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-brand-blue text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:brightness-105 transition-all transform hover:-translate-y-0.5 text-center">
              Contactez-nous
            </a>
          </div>
          <div className="mt-10 flex items-center space-x-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src={`https://picsum.photos/seed/user${i}/40/40`} alt="user" />
              ))}
            </div>
            <p>Approuvé par +200 équipes</p>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 bg-white rounded-[2.5rem] shadow-2xl p-3 transform md:rotate-2 hover:rotate-0 transition-transform duration-700">
            <img
              src="/Brainstorming-cuate.svg"
              alt="Hello Pulse Interface"
              className="rounded-[2.2rem] border border-slate-100 w-full"
            />
            <div className="absolute -bottom-10 -left-6 bg-white p-5 rounded-3xl shadow-2xl border border-slate-50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white text-xl">✨</div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Facilitateur IA</p>
                  <p className="text-sm font-bold text-slate-800">"Idée géniale ! Et si on..."</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/5 rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
