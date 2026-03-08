import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import DualSpaces from '@/components/landing/DualSpaces';
import PulseStudio from '@/components/landing/PulseStudio';
import AgentShowcase from '@/components/landing/AgentShowcase';
import Demo from '@/components/landing/Demo';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="vision" className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-10 text-slate-900 tracking-tight">
              L'Intelligence Collective <span className="text-brand-blue">Augmentée.</span>
            </h2>
            <p className="text-2xl text-slate-500 leading-relaxed italic max-w-4xl mx-auto font-light">
              "Devenir la référence mondiale de la co-création assistée par IA, où chaque équipe peut libérer son potentiel créatif sans barrière technologique."
            </p>
          </div>
        </section>

        <section id="demo">
          <Demo />
        </section>

        <section id="features" className="bg-slate-50">
          <Features />
        </section>

        <section id="ux" className="py-24 bg-white overflow-hidden">
          <DualSpaces />
        </section>

        <section id="pulse-studio">
          <PulseStudio />
        </section>

        <section id="agents" className="py-24 bg-slate-50">
          <AgentShowcase />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="cta" className="py-28 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-slate-900 tracking-tight">
              Prêt à passer à l'action ?
            </h2>
            <p className="text-xl mb-12 text-slate-500 max-w-2xl mx-auto font-medium">
              Rejoignez les équipes qui transforment déjà leurs conversations en prototypes concrets avec Hello Pulse.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#contact" className="bg-brand-blue text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:brightness-105 transition-all transform hover:scale-105">
                Contactez-nous
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
