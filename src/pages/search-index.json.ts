import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const [blog, publications, prestataires] = await Promise.all([
    getCollection('blog'),
    getCollection('publications', ({ data }) => data.public),
    getCollection('prestataires'),
  ]);

  const index = [
    ...blog.map((p) => ({
      title: p.data.title,
      excerpt: p.data.excerpt,
      url: `/blog/${p.id}`,
      section: 'Actualités',
    })),
    ...publications.map((p) => ({
      title: p.data.title,
      excerpt: `${p.data.type} · ${p.data.year}`,
      url: p.data.file,
      section: 'Publications',
    })),
    ...prestataires.map((p) => ({
      title: p.data.nom,
      excerpt: p.data.resume,
      url: '/retours-experience',
      section: 'Prestataires',
    })),
    { title: "L'association", excerpt: 'Contexte, objectifs, bureau et statuts.', url: '/association', section: 'Pages' },
    { title: 'Activités et programmes', excerpt: 'Activités culturelles, sociales, environnementales et sportives.', url: '/activites', section: 'Pages' },
    { title: 'Espace Adhérents', excerpt: 'Zone sécurisée réservée aux membres.', url: '/adherents', section: 'Pages' },
    { title: 'Espace 100% Femme', excerpt: 'Ateliers, ressources et échanges dédiés aux femmes.', url: '/femmes', section: 'Pages' },
    { title: 'Liens utiles', excerpt: 'Autorités locales, services publics, sécurité.', url: '/liens-utiles', section: 'Pages' },
    { title: 'Annuaire local', excerpt: 'Commerces et services privés de proximité.', url: '/annuaire-local', section: 'Pages' },
    { title: 'Contact', excerpt: 'Coordonnées et formulaire de contact.', url: '/contact', section: 'Pages' },
  ];

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
