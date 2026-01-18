
import React, { useState } from 'react';

const Demo: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Divergence", icon: "fa-regular fa-pen-to-square" },
    { title: "Vote", icon: "fa-regular fa-hand-pointer" },
    { title: "Synthèse", icon: "fa-regular fa-file-lines" }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">Démo "en vrai"</h2>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Vivez l'expérience Hello Pulse : le Canvas se transforme intelligemment au fil de votre progression. On diverge, on vote, et l'IA synthétise instantanément vos décisions.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-orange-400"></div>
                <p><span className="font-bold text-slate-900">Co-création live</span> : curseurs & présences, sans latence.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-brand-blue"></div>
                <p><span className="font-bold text-slate-900">Clarté</span> : regroupements intelligents et votes facilités.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-slate-400"></div>
                <p><span className="font-bold text-slate-900">Décision</span> : actions assignées et export automatisé.</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl px-6 py-3 font-bold bg-slate-900 text-white hover:bg-slate-800 transition shadow-lg">
                Demander une démo <i className="fa-solid fa-video ml-2 opacity-80"></i>
              </button>
              <a href="#features" className="rounded-2xl px-6 py-3 font-bold border border-slate-200 bg-white hover:bg-slate-50 transition text-slate-700">
                Voir l'offre équipes <i className="fa-solid fa-arrow-right ml-2 opacity-80"></i>
              </a>
            </div>
          </div>

          <div id="demoVisual" className="lg:col-span-7">
            <div className="ui-frame p-4 sm:p-6 bg-white shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 grid place-items-center">
                    <i className="fa-solid fa-layer-group text-brand-blue"></i>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">Atelier : "Nouveaux rituels créatifs"</div>
                    <div className="text-xs text-slate-400">3 participants • votes en cours</div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs">
                  <span className="rounded-full px-3 py-1 border border-slate-100 bg-slate-50 text-slate-500 font-medium">Timer 07:18</span>
                  <span className="rounded-full px-3 py-1 border border-brand-blue/20 bg-brand-blue/10 text-brand-blue font-bold">Mode focus</span>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-6">
                <aside className="col-span-12 md:col-span-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Étapes</div>
                    <div className="text-[10px] text-brand-blue font-bold flex items-center gap-1 uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
                      Live
                    </div>
                  </div>

                  <div className="h-1 bg-slate-100 rounded-full mb-6 overflow-hidden">
                    <div
                      className="h-full bg-brand-blue transition-all duration-500"
                      style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    ></div>
                  </div>

                  <ol id="demoSteps" className="space-y-2">
                    {steps.map((step, idx) => (
                      <li
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`hp-step cursor-pointer flex items-center justify-between rounded-xl px-4 py-3 transition-all ${activeStep === idx ? 'is-active' : 'opacity-60 hover:opacity-80'}`}
                        role="button"
                      >
                        <span className="inline-flex items-center gap-3 text-sm font-semibold">
                          <span className="hp-step-dot"></span>
                          <i className={step.icon}></i> {step.title}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">
                          {activeStep === idx ? 'Actif' : activeStep > idx ? 'Fini' : 'Puis'}
                        </span>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-xs">
                    <div className="text-slate-400 font-bold uppercase mb-1">Règle du tour</div>
                    <div className="font-semibold text-slate-700 italic">"1 idée = 1 phrase, pas de débat"</div>
                  </div>
                </aside>

                <section className="col-span-12 md:col-span-8">
                  <div className="hp-gridlines relative h-[400px] rounded-2xl border border-slate-100 bg-slate-50/30 overflow-hidden shadow-inner">
                    {/* Screen 1: Divergence */}
                    <div className={`hp-screen ${activeStep === 0 ? 'is-active' : ''}`}>
                      <div className="p-4">
                        <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                          <span className="flex items-center gap-2">
                            <i className="fa-solid fa-wand-magic-sparkles text-brand-blue"></i> Mur d'idées
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { title: '"Café créatif" hebdo', icon: "fa-mug-hot", col: "orange" },
                            { title: '"Mur des irritants"', icon: "fa-broom", col: "blue" },
                            { title: "Atelier contraintes", icon: "fa-shapes", col: "purple" },
                            { title: "Synthèse auto IA", icon: "fa-wand-sparkles", col: "blue" }
                          ].map((idea, i) => (
                            <div key={i} className="card p-3 shadow-sm scale-95 hover:scale-100 hover:rotate-1 transition-transform bg-white/80">
                              <div className="text-[10px] opacity-50 font-bold mb-1 uppercase">Idée</div>
                              <div className="text-xs font-bold leading-tight">{idea.title}</div>
                              <div className="mt-2 text-[10px] opacity-60 flex items-center gap-1">
                                <i className={`fa-solid ${idea.icon}`}></i> tag
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Screen 2: Vote */}
                    <div className={`hp-screen ${activeStep === 1 ? 'is-active' : ''}`}>
                      <div className="p-4">
                        <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                          <span className="flex items-center gap-2">
                            <i className="fa-regular fa-hand-pointer text-orange-400"></i> Vote en cours
                          </span>
                        </div>
                        <div className="space-y-4">
                          {[
                            { title: "Synthèse auto IA", p: 46, col: "bg-brand-blue" },
                            { title: '"Café créatif" hebdo', p: 31, col: "bg-orange-300" },
                            { title: '"Mur des irritants"', p: 23, col: "bg-slate-300" }
                          ].map((v, i) => (
                            <div key={i} className="card p-3 bg-white/90">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-xs font-bold">{v.title}</span>
                                <span className="text-xs font-black text-slate-400">{v.p}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className={`h-full ${v.col} transition-all duration-1000`} style={{ width: activeStep === 1 ? `${v.p}%` : '0%' }}></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Screen 3: Synthèse */}
                    <div className={`hp-screen ${activeStep === 2 ? 'is-active' : ''}`}>
                      <div className="p-4">
                        <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                          <span className="flex items-center gap-2">
                            <i className="fa-regular fa-file-lines text-brand-blue"></i> Synthèse & plan
                          </span>
                        </div>
                        <div className="space-y-3">
                          <div className="card p-3 bg-white border-l-4 border-brand-blue">
                            <div className="text-[10px] opacity-50 font-bold uppercase mb-1">Décision</div>
                            <p className="text-xs font-bold">On lance "Café créatif" dès J+7 avec facilitation IA.</p>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="card p-3 bg-white/70">
                              <div className="text-[10px] opacity-50 font-bold uppercase mb-2">Tasks</div>
                              <ul className="text-[10px] space-y-1.5 font-bold">
                                <li className="flex gap-2"><i className="fa-solid fa-check text-brand-blue"></i> Template</li>
                                <li className="flex gap-2"><i className="fa-solid fa-check text-brand-blue"></i> Pilotage</li>
                              </ul>
                            </div>
                            <div className="card p-3 bg-slate-900 text-white flex flex-col justify-between">
                              <div>
                                <div className="text-[10px] opacity-40 font-bold uppercase mb-1">Export</div>
                                <div className="text-[10px] font-bold">PDF, Notion, Jira</div>
                              </div>
                              <button className="mt-2 bg-brand-blue text-white py-1.5 rounded-lg text-[9px] font-black uppercase">Exporter</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Collaborative cursors */}
                    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                      <div className="collab cursor-a absolute left-[15%] top-[60%] z-20">
                        <div className="rounded-full px-2 py-1 text-[9px] font-black border border-slate-200 bg-white/95 shadow-xl flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span> Lina
                        </div>
                      </div>
                      <div className="collab cursor-b absolute left-[70%] top-[25%] z-20">
                        <div className="rounded-full px-2 py-1 text-[9px] font-black border border-slate-200 bg-white/95 shadow-xl flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Mehdi
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Demo;
