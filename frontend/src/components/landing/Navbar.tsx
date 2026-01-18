
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2 group">
          <img src="/Logo.png" alt="Hello Pulse" className="h-10 w-auto group-hover:scale-110 transition-transform" />
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            Hello <span className="text-brand-blue">Pulse</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center space-x-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
          <a href="#demo" className="hover:text-brand-blue transition-colors">Démo</a>
          <a href="#ux" className="hover:text-brand-blue transition-colors">Canvas</a>
          <a href="#pulse-studio" className="hover:text-brand-blue transition-colors">Studio</a>
          <a href="#agents" className="hover:text-brand-blue transition-colors">Équipe IA</a>
          <a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-3">
          <a href="#contact" className="hidden sm:block px-6 py-2.5 rounded-full border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all">
            Nous contacter
          </a>
          <a href="#demo" className="bg-brand-blue text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-sm hover:brightness-105 transition-all">
            Voir la démo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
