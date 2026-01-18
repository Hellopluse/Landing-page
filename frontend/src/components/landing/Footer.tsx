
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-black tracking-tighter">
                Hello <span className="text-brand-blue">Pulse</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              L'écosystème de co-création qui libère le potentiel créatif des équipes grâce à l'IA générative.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer">𝕏</div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer">in</div>
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors cursor-pointer">ig</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Produit</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agents IA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Intégrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Ressources</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Webinaires</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-500">Compagnie</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2024 Hello Pulse. Fait avec passion pour les créateurs.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Propulsé par Gemini 2.0 Flash</span>
            <span className="flex items-center"><span className="w-2 h-2 bg-brand-blue rounded-full mr-2"></span> Systèmes Opérationnels</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
