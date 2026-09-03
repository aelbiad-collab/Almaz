export interface Annonce {
  nom: string;
  categorie: 'Commerce' | 'Service privé';
  description: string;
  contact?: string;
  url?: string;
}

// Espace destiné à l'autofinancement de l'association : offres des commerces
// et services privés de proximité (médecin, formateur, avocat, notaire...).
export const annuaireLocal: Annonce[] = [
  {
    nom: 'Votre commerce ici',
    categorie: 'Commerce',
    description: "Emplacement publicitaire disponible pour les commerces et boutiques du quartier.",
    contact: 'contact@horizonalmaz.ma',
  },
  {
    nom: 'Votre service ici',
    categorie: 'Service privé',
    description: 'Médecin, centre de formation, avocat, notaire : faites connaître votre activité aux résidents.',
    contact: 'contact@horizonalmaz.ma',
  },
];
