
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Texte et Formulaire */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-brand-blue/10 text-brand-blue px-4 py-1.5 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
              📬 Parlons de votre projet
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Une question ? <br />
              <span className="text-brand-blue">L'équipe est là.</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Que vous soyez une startup en pleine croissance ou une grande entreprise, nous sommes là pour vous aider à déployer Hello Pulse et libérer votre intelligence collective.
            </p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nom complet</label>
                  <input
                    type="text"
                    placeholder="Jean Dupont"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email professionnel</label>
                  <input
                    type="email"
                    placeholder="jean@entreprise.com"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Votre besoin</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all appearance-none">
                  <option>Démo personnalisée</option>
                  <option>Offre Enterprise</option>
                  <option>Support technique</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                className="w-full md:w-auto px-10 py-4 bg-brand-blue text-white rounded-2xl font-bold text-lg shadow-lg hover:brightness-110 hover:scale-[1.02] transition-all"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Illustration */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-brand-blue/5 rounded-full blur-3xl -z-10"></div>
            <img
              src="/Contact us-rafiki.png"
              alt="Contact Hello Pulse"
              className="w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-700"
            />

            {/* Badge flottant */}
            <div className="absolute -bottom-6 right-10 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce" style={{ animationDuration: "3s" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-blue-light rounded-full flex items-center justify-center text-brand-blue">
                  <i className="fa-solid fa-bolt text-lg"></i>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Réponse rapide</p>
                  <p className="text-sm font-bold text-slate-900">Moins de 2 heures</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
