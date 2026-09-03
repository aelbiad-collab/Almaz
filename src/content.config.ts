import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Association Horizon Almaz'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['PV', 'Rapport', 'Convocation', 'Compte rendu', 'Statuts', 'Règlement', 'Autre']),
    year: z.number(),
    date: z.coerce.date(),
    file: z.string(),
    public: z.boolean().default(true),
  }),
});

const prestataires = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prestataires' }),
  schema: z.object({
    nom: z.string(),
    categorie: z.enum(['Plomberie', 'Maçonnerie', 'Électricité', 'Jardinage', 'Peinture', 'Menuiserie', 'Autre']),
    statut: z.enum(['recommande', 'blackliste']),
    telephone: z.string().optional(),
    resume: z.string(),
    date: z.coerce.date(),
    auteur: z.string().default('Résident'),
  }),
});

export const collections = { blog, publications, prestataires };
