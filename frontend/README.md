# Hello Pulse - Landing Page

Landing page officielle pour Hello Pulse, l'écosystème de co-création assistée par IA.

## 🚀 Démarrage rapide

### Installation des dépendances

```bash
npm install
```

### Lancement du serveur de développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:8080`

### Build de production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

## 📁 Structure du projet

```
frontend/
├── public/               # Assets statiques (images, SVG, etc.)
├── src/
│   ├── components/
│   │   └── landing/     # Composants de la landing page
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── Features.tsx
│   │       ├── DualSpaces.tsx
│   │       ├── PulseStudio.tsx
│   │       ├── AgentShowcase.tsx
│   │       ├── Demo.tsx
│   │       ├── Contact.tsx
│   │       ├── Footer.tsx
│   │       └── types.ts
│   ├── lib/
│   │   └── utils.ts     # Utilitaires (cn pour Tailwind)
│   ├── App.tsx          # Composant principal
│   ├── main.tsx         # Point d'entrée
│   └── index.css        # Styles globaux et variables Tailwind
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Technologies utilisées

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **DM Sans** - Police personnalisée de Google Fonts

## 📝 Sections de la landing page

1. **Hero** - Section d'introduction avec CTA
2. **Vision** - Message de vision de l'entreprise
3. **Demo** - Démonstration interactive
4. **Features** - Fonctionnalités principales
5. **Dual Spaces** - Explication Canvas & Pulse Studio
6. **Pulse Studio** - Détails sur les agents spécialisés
7. **Agent Showcase** - Présentation des agents IA
8. **Contact** - Formulaire de contact
9. **CTA** - Call-to-action final
10. **Footer** - Pied de page

## 🎯 Personnalisation

### Couleurs de marque

Les couleurs sont définies dans `src/index.css` et `tailwind.config.ts` :
- **Brand Blue**: `hsl(207 77% 77%)` - Couleur principale
- **Slate**: Échelle de gris pour le texte et les arrière-plans

### Police

La police **DM Sans** est importée depuis Google Fonts dans `src/index.css`.

## 📄 License

Propriétaire - Hello Pulse © 2024
