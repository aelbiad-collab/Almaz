export interface LienUtile {
  categorie: string;
  nom: string;
  description: string;
  url?: string;
  telephone?: string;
}

export const liensUtiles: LienUtile[] = [
  { categorie: 'Autorités locales', nom: 'Commune / Caïdat', description: 'Services administratifs de proximité', telephone: 'À compléter' },
  { categorie: 'Services publics', nom: 'ONEE / Régie eau-électricité', description: 'Réclamations, coupures, factures', telephone: 'À compléter' },
  { categorie: 'Télécoms', nom: 'Maroc Telecom / Orange / Inwi', description: 'Assistance technique et abonnements' },
  { categorie: 'Sécurité', nom: 'Gendarmerie / Police de proximité', description: "Numéros d'urgence du quartier", telephone: 'À compléter' },
  { categorie: 'Immobilier', nom: 'Watika', description: 'Portail immobilier', url: 'https://www.watika.ma' },
  { categorie: 'Immobilier', nom: 'Chokaya', description: 'Petites annonces immobilières', url: 'https://www.chokaya.ma' },
];
