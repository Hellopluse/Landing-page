
import React from 'react';

const Features: React.FC = () => {
  const pillars = [
    {
      title: 'Architecture "Poupées Russes"',
      description: 'Une hiérarchie infinie. Zoomez de la vision stratégique globale jusqu\'au moindre détail opérationnel sans jamais perdre le contexte. Plus de séparation entre "Gestion" et "Création".',
      icon: "fa-solid fa-layer-group",
    },
    {
      title: "Système d'Agents Dual",
      description: "Pas un simple chatbot. Des agents spécialisés : un Facilitateur pour structurer vos brainstormings et un Orchestrateur pour transformer les post-its en code.",
      icon: "fa-solid fa-brain",
      highlight: ["Facilitateur", "Orchestrateur"]
    },
    {
      title: "Inclusivité Native",
      description: 'Conçu "Accessibility-First". Traduction instantanée pour les équipes mondiales, synthèse vocale et facilitation adaptée aux profils introvertis.',
      icon: "fa-solid fa-globe",
    }
  ];

  const renderDescription = (text: string, highlights?: string[]) => {
    if (!highlights) return text;
    let parts = [text];
    highlights.forEach(h => {
      const newParts: string[] = [];
      parts.forEach(p => {
        if (typeof p !== 'string') {
          newParts.push(p);
          return;
        }
        const split = p.split(h);
        for (let i = 0; i < split.length; i++) {
          newParts.push(split[i]);
          if (i < split.length - 1) {
            newParts.push(h);
          }
        }
      });
      parts = newParts;
    });

    return parts.map((part, i) => 
      highlights.includes(part as string) ? <span key={i} className="text-brand-blue font-semibold">{part}</span> : part
    );
  };

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Pourquoi Hello Pulse est <span className="text-brand-blue">unique</span>
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed">
          Nous avons brisé les barrières entre gestion de projet, tableau blanc et développement.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="pillar-card bg-white p-10 rounded-[2.5rem] flex flex-col items-start text-left h-full shadow-sm hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8">
              <i className={`${pillar.icon} text-brand-blue text-2xl`}></i>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight">
              {pillar.title}
            </h3>
            
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              {renderDescription(pillar.description, pillar.highlight)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
