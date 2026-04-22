# Portfolio Frontend

Portfolio de Boris Dhaene — développeur Full Stack Junior basé en France.

## Stack

- **Framework** : React 18
- **Build tool** : Vite 5
- **Langage** : TypeScript
- **Styling** : Tailwind CSS 3
- **Animations** : Framer Motion
- **Formulaire** : React Hook Form + Zod

## Sections

- **Hero** — présentation et statut de disponibilité
- **TechStrip** — défilement des technologies maîtrisées
- **Projects** — projets réalisés avec liens démo/repo
- **Skills** — compétences frontend, backend et DevOps
- **Education** — parcours de formation
- **Contact** — formulaire connecté à l'API backend
- **Footer** — liens GitHub, LinkedIn, CV

## Installation

```bash
# Aller dans le dossier
cd portfolio-frontend

# Installer les dépendances
npm install
```

## Variables d'environnement

```env
VITE_API_URL=http://localhost:3001
```

Le frontend utilise un proxy Vite en développement (`/api` → `localhost:3001`), cette variable sert uniquement en production.

## Scripts

```bash
npm run dev        # Démarrage du serveur de développement (port 5173)
npm run build      # Build de production (tsc + vite build)
npm run preview    # Prévisualisation du build de production
npm run lint       # Linting ESLint
npm run typecheck  # Vérification des types TypeScript
npm run format     # Formatage avec Prettier
```

## Structure

```
src/
├── components/
│   ├── ui/           # Composants génériques (FadeIn, SectionHeader)
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Nav.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── TechStrip.tsx
├── data/
│   └── portfolio.ts  # Données du portfolio (projets, compétences, formations)
├── hooks/
│   ├── useCursorGlow.ts
│   └── useScrolled.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Lancement complet (frontend + backend)

```bash
# Terminal 1 — backend
cd portfolio-backend && npm run dev

# Terminal 2 — frontend
cd portfolio-frontend && npm run dev
```

L'application est accessible sur [http://localhost:5173](http://localhost:5173).
