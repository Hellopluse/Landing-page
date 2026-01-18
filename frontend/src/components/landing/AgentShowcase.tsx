
import React from 'react';
import { AgentRole } from './types';


const AgentShowcase: React.FC = () => {
  const agents = [
    {
      role: AgentRole.FACILITATOR,
      emoji: "🕵️‍♂️",
      description: "Le maître de cérémonie. Il gère le temps, équilibre la parole et guide vos Design Sprints.",
      context: "Temps Réel (Canvas)"
    },
    {
      role: AgentRole.CO_CREATOR,
      emoji: "🎨",
      description: "Le boost créatif. Il propose des idées disruptives (SCAMPER) et génère des moodboards.",
      context: "Temps Réel (Canvas)"
    },
    {
      role: AgentRole.ORCHESTRATOR,
      emoji: "🛠️",
      description: "L'architecte. Il transforme les idées validées en plans d'actions concrets et structures de données.",
      context: "Post-Session (Pulse Studio)"
    },
    {
      role: AgentRole.ASSISTANT,
      emoji: "🧠",
      description: "Le savant. Fact-checker, cherche des données de marché et assure la cohérence des idées.",
      context: "Global"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Vos nouveaux coéquipiers</h2>
        <p className="text-slate-500 text-lg">
          L'IA n'est pas un chatbot générique, mais une équipe d'experts spécialisés au service de votre créativité.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {agents.map((agent, idx) => (
          <div key={idx} className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-xl transition-all group">
            <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">
              {agent.emoji}
            </div>
            <div className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-2">
              {agent.context}
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">{agent.role}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {agent.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 md:p-12 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3 text-center md:text-left">
            <h4 className="text-2xl font-bold mb-4 text-slate-900">Inclusivité Native</h4>
            <p className="text-slate-500 text-sm">
              Hello Pulse s'adapte à tous. Les introvertis brillent autant que les extravertis grâce à notre facilitation IA neutre.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🎙️", text: "Vocal complet" },
              { icon: "🈳", text: "Traduction instantanée" },
              { icon: "♿", text: "Accessibilité-First" },
              { icon: "🎭", text: "Adaptation de profils" },
              { icon: "⏱️", text: "Timebox automatique" },
              { icon: "📊", text: "Synthèse inclusive" }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-xl flex items-center space-x-3 border border-slate-100">
                <span className="text-xl">{item.icon}</span>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentShowcase;
