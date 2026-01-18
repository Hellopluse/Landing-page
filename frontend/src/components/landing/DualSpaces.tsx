
import React from 'react';

const DualSpaces: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
            Deux espaces, <br />
            <span className="text-brand-blue italic font-light">un seul flux créatif.</span>
          </h2>

          <div className="space-y-10">
            <div className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 bg-brand-blue/20 rounded-full flex items-center justify-center font-bold text-brand-blue">1</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Le Canvas (Divergence)</h3>
              <p className="text-slate-600 leading-relaxed">
                Un tableau blanc infini pour le brainstorming. L'IA agit comme un modérateur actif : elle regroupe vos post-its par thèmes, relance les débats et synthétise vos échanges en temps réel.
              </p>
            </div>

            <div className="relative pl-12 border-l-2 border-slate-100 ml-4 pb-4">
              <div className="absolute -left-[17px] top-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">2</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Le Pulse Studio (Convergence)</h3>
              <p className="text-slate-600 leading-relaxed">
                Une usine à prototypes. Transformez instantanément les mots validés du Canvas en objets concrets : code, designs UI, plans d'action ou même modèles 3D.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="bg-slate-50 p-6 rounded-3xl border-2 border-brand-blue shadow-lg">
                <div className="text-xs font-black text-brand-blue mb-2 uppercase">Canvas Mode</div>
                <div className="h-40 bg-slate-200 rounded-xl overflow-hidden flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 p-4">
                    <div className="w-8 h-8 bg-yellow-100 shadow rotate-3"></div>
                    <div className="w-8 h-8 bg-blue-100 shadow -rotate-6"></div>
                    <div className="w-8 h-8 bg-brand-blue-light shadow rotate-12"></div>
                    <div className="w-8 h-8 bg-red-100 shadow -rotate-3"></div>
                    <div className="w-8 h-8 bg-purple-100 shadow rotate-6"></div>
                  </div>
                </div>
                <p className="text-xs mt-3 text-slate-400">"Brainstorming intensif en cours..."</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900 p-6 rounded-3xl shadow-2xl">
                <div className="text-xs font-black text-white/50 mb-2 uppercase">Pulse Studio</div>
                <div className="h-40 bg-slate-800 rounded-xl p-4">
                  <div className="w-full h-2 bg-slate-700 rounded mb-2"></div>
                  <div className="w-3/4 h-2 bg-slate-700 rounded mb-2"></div>
                  <div className="w-1/2 h-2 bg-brand-blue rounded"></div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="aspect-square bg-slate-700 rounded-lg"></div>
                    <div className="aspect-square bg-slate-700 rounded-lg"></div>
                  </div>
                </div>
                <p className="text-xs mt-3 text-white/40">Génération du prototype V1.0</p>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-md border border-slate-100">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl">✨</span>
                  <span className="text-sm font-bold">Lien Direct</span>
                </div>
                <p className="text-xs text-slate-500">Pas de transfert, pas de perte de contexte. La session Canvas alimente directement le Pulse Studio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualSpaces;
