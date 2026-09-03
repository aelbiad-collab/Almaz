# Horizon Almaz — Site web de l'association

Portail web de l'Association Horizon Almaz pour le Développement (quartier Al Amz), développé
avec [Astro](https://astro.build), conformément au Cahier des Prescriptions Spéciales (CPS)
fourni.

## Démarrage

```bash
npm install
npm run dev       # http://localhost:4321
npm run build      # build de production dans dist/
npm run preview
```

## Structure

- `src/pages/` — pages du site (accueil, association, activités, adhérents, publications,
  liens utiles, retours d'expérience, contact, espace femme, blog, annuaire local, recherche).
- `src/content/` — collections de contenu (`blog`, `publications`, `prestataires`) en Markdown.
- `src/data/` — données statiques (bureau, liens utiles, annuaire local).
- `src/components/`, `src/layouts/` — composants et gabarit de page communs.
- `public/logo.png` — logo officiel de l'association.
- `public/documents/` — emplacement prévu pour les statuts, règlement intérieur et publications
  PDF (à déposer par l'association).

## Couverture du CPS

| Section CPS | Statut |
|---|---|
| 2.1 Page d'accueil | ✅ Implémentée (présentation, actualités, mise en avant) |
| 2.2 Présentation de l'association | ✅ Implémentée (contexte, objectifs, bureau, statuts en téléchargement) |
| 2.3 Activités et programmes | ✅ Implémentée (catégories, suivi de programmes, galerie à alimenter) |
| 2.4 Espace Adhérents | ⚠️ Maquette d'interface ; authentification réelle à intégrer (voir Roadmap) |
| 2.5 Espace de stockage / publications | ✅ Implémentée (classement par type et année via collection de contenu) |
| 2.6 Liens utiles | ✅ Implémentée |
| 2.7 Retour d'expérience | ✅ Implémentée (recommandé / signalé, filtre par catégorie) |
| 2.8 Espace Contact | ✅ Implémentée (formulaire, carte, coordonnées) |
| Espace 100% Femme | ✅ Implémentée (structure de contenu à enrichir) |
| Monétisation | ✅ Amorcée (page Annuaire local pour commerces/services de proximité) |
| Recherche interne | ✅ Implémentée (index JSON + recherche côté client) |
| Bilingue FR/AR | ⏳ Non fait (optionnel dans le CPS) |

## Roadmap technique (hors périmètre statique)

Le site est actuellement un site **statique** Astro. Les points suivants nécessitent un backend
et sont volontairement laissés en maquette, avec une mention explicite sur les pages concernées :

1. **Authentification adhérents** — service d'auth (ex. Astro DB / Supabase / Auth.js) pour
   sécuriser réellement `/adherents`.
2. **Envoi automatique des formulaires** (contact, adhésion) — service d'e-mail transactionnel
   (ex. Resend, SendGrid) via une fonction serverless.
3. **Interface d'administration** pour publier docs/actualités sans passer par Git.
4. **Hébergement, nom de domaine, SSL** — déploiement sur un hébergeur cloud avec
   `www.horizonalmaz.ma` et sauvegardes automatiques.
5. **Version arabe** du site (i18n Astro), si retenue par l'association.
6. **Google Analytics** — à intégrer une fois le domaine de production connu.

## Contact projet

Abdeltif ELBIAD — Conseiller, Association Horizon Almaz pour le Développement
Email : contact@horizonalmaz.ma
