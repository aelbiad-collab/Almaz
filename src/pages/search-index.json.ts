import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const [blog, publications, prestataires] = await Promise.all([
    getCollection('blog'),
    getCollection('publications', ({ data }) => data.public),
    getCollection('prestataires'),
  ]);

  const index = [
    ...blog.map((p) => ({
      title: p.data.title,
      excerpt: p.data.excerpt,
      url: `${base}/blog/${p.id}`,
      section: 'Actualités',
    })),
    ...publications.map((p) => ({
      title: p.data.title,
      excerpt: `${p.data.type} · ${p.data.year}`,
      url: `${base}${p.data.file}`,
      section: 'Publications',
    })),
    ...prestataires.map((p) => ({
      title: p.data.nom,
      excerpt: p.data.resume,
      url: `${base}/retours-experience`,
      section: 'Prestataires',
    })),
    { title: "L'association", excerpt: 'Contexte, objectifs, bureau et statuts.', url: `${base}/association`, section: 'Pages' },
    { title: 'Activités et programmes', excerpt: 'Activités culturelles, sociales, environnementales et sportives.', url: `${base}/activites`, section: 'Pages' },
    { title: 'Espace Adhérents', excerpt: 'Zone sécurisée réservée aux membres.', url: `${base}/adherents`, section: 'Pages' },
    { title: 'Espace 100% Femme', excerpt: 'Ateliers, ressources et échanges dédiés aux femmes.', url: `${base}/femmes`, section: 'Pages' },
    { title: 'Liens utiles', excerpt: 'Autorités locales, services publics, sécurité.', url: `${base}/liens-utiles`, section: 'Pages' },
    { title: 'Annuaire local', excerpt: 'Commerces et services privés de proximité.', url: `${base}/annuaire-local`, section: 'Pages' },
    { title: 'Contact', excerpt: 'Coordonnées et formulaire de contact.', url: `${base}/contact`, section: 'Pages' },
  ];

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
