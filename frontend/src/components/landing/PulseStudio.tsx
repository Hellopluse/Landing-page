
import React from 'react';

const PulseStudio: React.FC = () => {
  const specialists = [
    {
      role: "L'Agent de Recherche",
      task: "Veille Stratégique 360°",
      output: "Multi-sources, Data, Insights",
      icon: "fa-solid fa-magnifying-glass-chart",
      benefit: "Analyse des milliers de sources web en temps réel (actualités, brevets, réseaux) pour valider vos opportunités de marché."
    },
    {
      role: "Le Storyboarder",
      task: "Scénarisation & UX",
      output: "Frames, Parcours, Narrations",
      icon: "fa-solid fa-film",
      benefit: "Transforme vos concepts en une séquence visuelle cohérente. Idéal pour visualiser un parcours utilisateur ou une publicité."
    },
    {
      role: "Le Synthétiseur de Projet",
      task: "Livrables Business",
      output: "PPT, Notion, PDF, Pitch",
      icon: "fa-solid fa-file-invoice",
      benefit: "Fini les heures de rédaction. L'IA génère vos présentations PowerPoint, vos espaces de travail Notion et vos business plans."
    },
    {
      role: "L'Architecte Web",
      task: "Prototype Code",
      output: "React, Next.js, Live App",
      icon: "fa-solid fa-code",
      benefit: "Génère un site ou une application fonctionnelle prête à être déployée pour tester votre idée face à de vrais utilisateurs."
    },
    {
      role: "Le Designer Visuel",
      task: "Branding Complet",
      output: "Logo, UI Kit, Moodboard",
      icon: "fa-solid fa-palette",
      benefit: "Crée une identité de marque forte et cohérente, déclinée sur tous vos futurs supports de communication."
    },
    {
      role: "Le Producteur Média",
      task: "Communication Multimodale",
      output: "Vidéos, Podcasts, Audio",
      icon: "fa-solid fa-microphone-lines",
      benefit: "Transforme votre projet en une vidéo explicative captivante ou un podcast de présentation à deux voix."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] -z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-brand-blue/20 text-brand-blue px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-blue/30">
              Espace de Convergence
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1]">
              Pulse Studio : <br />
              <span className="text-brand-blue">Concrétisez vos ambitions.</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              Le Studio est votre département de production autonome. Nos agents transforment vos idées en livrables professionnels immédiatement.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#contact" className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:brightness-105 transition-all text-center">
                Nous contacter
              </a>
              <a href="#demo" className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all text-center">
                Voir la démo
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-slate-800 rounded-[2.5rem] p-1 border border-white/10 shadow-2xl overflow-hidden">
              <div className="bg-slate-900 rounded-[2.3rem] p-8">
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Flux de Production</span>
                </div>

                <div className="space-y-5">
                  {[
                    { name: "Deep Web Research", val: 100, status: "Terminé", color: "bg-brand-blue" },
                    { name: "Storyboard Generator", val: 85, status: "En cours...", color: "bg-brand-blue" },
                    { name: "Business Synthesizer", val: 45, status: "Export PPT...", color: "bg-purple-400" }
                  ].map((job, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[9px] font-bold uppercase tracking-wider">
                        <span className="text-slate-300">{job.name}</span>
                        <span className="text-slate-500 italic">{job.status}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className={`h-full ${job.color}`} style={{ width: `${job.val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialists.map((spec, idx) => (
            <div key={idx} className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-blue/30 transition-all duration-300 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-blue/20 group-hover:text-brand-blue transition-all">
                <i className={`${spec.icon} text-lg`}></i>
              </div>
              <h3 className="text-lg font-bold mb-1">{spec.role}</h3>
              <p className="text-[10px] text-brand-blue font-black uppercase mb-4 tracking-widest">{spec.task}</p>
              <p className="text-sm text-slate-400 leading-relaxed min-h-[4.5rem]">
                {spec.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PulseStudio;
