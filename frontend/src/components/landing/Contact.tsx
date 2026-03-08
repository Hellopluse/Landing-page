import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Portfolio Pattern: FormSubmit.co with table template and no captcha
    const submissionData = {
      ...data,
      _subject: `🚀 [Hello Pulse] Nouveau Message de ${data.name}`,
      _template: 'table',
      _captcha: 'false'
    };
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/hellopulse@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(submissionData)
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

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

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-100 p-8 rounded-[2rem] text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
                <p className="text-slate-500 mb-6">Merci pour votre intérêt. Notre équipe vous répondra sous peu (souvent en moins de 2h).</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-brand-blue font-bold hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nom complet</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Jean Dupont"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email professionnel</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="jean@entreprise.com"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Votre besoin</label>
                  <select 
                    name="category"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all appearance-none"
                  >
                    <option>Démo personnalisée</option>
                    <option>Offre Enterprise</option>
                    <option>Support technique</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium">Oups ! Une erreur est survenue lors de l'envoi. Veuillez réessayer.</p>
                )}

                <button
                  disabled={status === 'submitting'}
                  type="submit"
                  className={`w-full md:w-auto px-10 py-4 bg-brand-blue text-white rounded-2xl font-bold text-lg shadow-lg hover:brightness-110 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer le message'
                  )}
                </button>
              </form>
            )}
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
