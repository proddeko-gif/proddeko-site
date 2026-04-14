import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Globe,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
const SITE = {
  name: "PRODDEKO-Belgique",
  tagline:
    "Solidarité internationale • Développement durable • Gouvernance éthique",
  email: "admin@proddeko.online",
  phone: "+32 488 84 46 98",
  iban: "BE52 0341 7896 9409",
  bic: "GEBABEBB",
  accountName: "PRODDEKO PROGRAMMES DE DEVELOPPEMENT DURABLE",
  belgiumLocation: "Welkenraedt, Belgique",
  drcLocation: "Kinzau-Mvuete, RDC",
  logo: "/images/proddeko-logo.png?v=2",
};
const stats = [
  { value: "200 000+", label: "bénéficiaires directs" },
  { value: "10+", label: "zones et pays d’action" },
  { value: "8+", label: "partenaires stratégiques" },
  { value: "6", label: "universités partenaires" },
];
const territories = [
  "Kongo Central",
  "Kinshasa",
  "Kwilu",
  "Nord-Kivu",
  "Sud-Ubangi",
  "Belgique",
  "France",
  "Allemagne",
  "Congo-Brazzaville",
  "Cameroun",
];
const partners = [
  "Fondation Roi Baudouin",
  "ENABEL",
  "UNOPS",
  "Ambassade du Japon",
  "Caritas International",
  "CNCD–11.11.11",
  "Entraide & Fraternité",
  "Laguzze-JPN95",
];
const universities = [
  "ULiège",
  "UCLouvain",
  "Université de Kinshasa",
  "Université Kongo",
  "ISAV Matadi",
  "ISDR-Kinzau-Mvuete",
];
const donationTiers = [
  {
    amount: "25 €",
    title: "Soutien ponctuel",
    text: "Contribuer à des actions de sensibilisation, de communication communautaire ou d’appui logistique.",
  },
  {
    amount: "75 €",
    title: "Appui terrain",
    text: "Soutenir des ateliers citoyens, des sessions de formation ou du matériel opérationnel.",
  },
  {
    amount: "150 €",
    title: "Partenaire d’action",
    text: "Participer au financement d’un micro-projet local ou d’une activité structurante.",
  },
];
const actionCards = [
  {
    icon: Globe,
    page: "action-sustainable",
    title: "Développement durable",
    text: "Programmes territoriaux de résilience communautaire, gestion responsable des ressources et autonomisation économique locale.",
  },
  {
    icon: GraduationCap,
    page: "action-education",
    title: "Éducation citoyenne",
    text: "Formation, sensibilisation, leadership local et participation démocratique des jeunes, des femmes et des relais communautaires.",
  },
  {
    icon: ShieldCheck,
    page: "action-governance",
    title: "Gouvernance éthique",
    text: "Transparence, redevabilité, suivi citoyen et amélioration du dialogue entre institutions et populations.",
  },
  {
    icon: Handshake,
    page: "action-solidarity",
    title: "Solidarité internationale",
    text: "Co-développement entre Belgique et RDC, mobilisation de la diaspora et partenariats multi-acteurs à fort impact.",
  },
];
const navItems = [
  {
    label: "À propos",
    items: [
      { label: "Qui sommes-nous", page: "about", icon: Users },
      { label: "Mission", page: "mission", icon: HeartHandshake },
      { label: "Valeurs", page: "values", icon: BookOpen },
      { label: "Gouvernance", page: "governance", icon: Landmark },
    ],
  },
  {
    label: "Nos actions",
    items: [
      { label: "Développement durable", page: "action-sustainable", icon: Globe },
      { label: "Éducation citoyenne", page: "action-education", icon: GraduationCap },
      { label: "Gouvernance éthique", page: "action-governance", icon: ShieldCheck },
      { label: "Solidarité internationale", page: "action-solidarity", icon: Handshake },
    ],
  },
  {
    label: "Projets",
    items: [
      { label: "Projets en cours", page: "projects", icon: Globe },
      { label: "Impact", page: "projects-impact", icon: Users },
      { label: "Partenaires", page: "partners", icon: Handshake },
      { label: "Appel à financement", page: "financing", icon: Sparkles },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Coordonnées", page: "contact-info", icon: MapPin },
      { label: "Formulaire", page: "contact-form", icon: Mail },
    ],
  },
];
const pageContent = {
  about: {
    eyebrow: "Présentation institutionnelle",
    title: "Qui sommes-nous ?",
    text: "PRODDEKO-Belgique est une organisation de solidarité internationale et de co-développement active entre la Belgique et la République Démocratique du Congo.",
    cards: [
      {
        title: "Vision et engagement",
        body: "PRODDEKO-Belgique promeut un développement durable, inclusif et endogène, fondé sur la justice sociale, la cohésion communautaire et la protection de l’environnement.",
      },
      {
        title: "Positionnement stratégique",
        body: "L’organisation agit comme une interface entre la diaspora, les partenaires institutionnels européens et les acteurs locaux en RDC, dans une logique de co-construction et de réciprocité.",
      },
      {
        title: "Domaines d’intervention",
        body: "Gouvernance éthique, éducation citoyenne, développement durable, solidarité internationale, transition numérique responsable et autonomisation des femmes et des jeunes.",
      },
      {
        title: "Valeur ajoutée",
        body: "Ancrage diasporique, articulation entre expertise internationale et réalités locales, gouvernance transparente, participative et orientée impact durable.",
      },
    ],
  },
  mission: {
    eyebrow: "Cadre stratégique",
    title: "Notre mission",
    text: "Contribuer à un développement durable, inclusif et participatif en RDC, en renforçant les capacités locales, la gouvernance éthique et l’engagement citoyen.",
    cards: [
      {
        title: "Objectif global",
        body: "Améliorer durablement les conditions de vie des populations en renforçant la gouvernance locale, la participation citoyenne et les dynamiques de développement endogène.",
      },
      {
        title: "Objectifs spécifiques",
        body: "Renforcer les capacités des acteurs locaux, soutenir les initiatives économiques et sociales durables, et promouvoir une culture d’intégrité, de transparence et de redevabilité.",
      },
      {
        title: "Résultats attendus",
        body: "Capacités renforcées, mécanismes de gouvernance opérationnels, initiatives durables consolidées et meilleure appropriation locale.",
      },
      {
        title: "Indicateurs clés",
        body: "Nombre de bénéficiaires, taux de participation des femmes et des jeunes, nombre d’initiatives soutenues et existence de mécanismes de suivi citoyen.",
      },
    ],
  },
  values: {
    eyebrow: "Référentiel d’action",
    title: "Nos valeurs",
    text: "Le référentiel d’action de PRODDEKO-Belgique repose sur des principes éthiques, organisationnels et territoriaux qui structurent l’ensemble de ses interventions.",
    cards: [
      {
        title: "Dignité humaine",
        body: "Chaque personne est considérée comme sujet de droits, acteur de changement et partenaire du développement.",
      },
      {
        title: "Transparence et redevabilité",
        body: "L’organisation défend une gestion claire, traçable et responsable des ressources financières, matérielles et humaines.",
      },
      {
        title: "Solidarité internationale et co-développement",
        body: "PRODDEKO-Belgique privilégie des partenariats équilibrés entre diaspora, communautés locales, institutions publiques, ONG et universités.",
      },
      {
        title: "Participation citoyenne et appropriation locale",
        body: "La participation active des communautés est considérée comme une condition de pertinence, de légitimité et de durabilité des projets.",
      },
      {
        title: "Responsabilité, durabilité et innovation utile",
        body: "Chaque intervention doit produire des effets concrets, mesurables et soutenables dans le temps, en respectant les réalités sociales et environnementales.",
      },
    ],
  },
  governance: {
    eyebrow: "Organisation",
    title: "Notre gouvernance",
    text: "Une gouvernance participative et inclusive entre la Belgique et la RDC.",
    cards: [
      {
        title: "Assemblée Générale",
        body: "Organe souverain validant les orientations stratégiques, les rapports et les grandes décisions institutionnelles.",
      },
      {
        title: "Conseil d’Administration",
        body: "Pilotage stratégique, supervision et suivi de la cohérence institutionnelle des programmes.",
      },
      {
        title: "Comité opérationnel",
        body: "Mise en œuvre des projets, coordination avec les relais locaux et suivi des activités de terrain.",
      },
    ],
  },
  partners: {
    eyebrow: "Écosystème institutionnel",
    title: "Partenaires stratégiques",
    text: "PRODDEKO-Belgique s’inscrit dans un réseau multi-acteurs international mobilisant institutions, ONG, universités et relais territoriaux.",
    cards: [
      {
        title: "Institutions",
        body: "Coopération avec agences publiques, ambassades, collectivités et programmes internationaux engagés dans le développement durable et la gouvernance responsable.",
      },
      {
        title: "ONG et réseaux",
        body: "Collaboration avec des ONG européennes et africaines, des plateformes citoyennes et des réseaux de solidarité internationale pour amplifier la portée des actions.",
      },
      {
        title: "Universités et recherche",
        body: "Partenariats académiques destinés à renforcer la recherche-action, la formation, la capitalisation et l’innovation appliquée.",
      },
      {
        title: "Valeur ajoutée partenariale",
        body: "Effet levier institutionnel, crédibilité opérationnelle, complémentarité des compétences et capacité renforcée de cofinancement.",
      },
    ],
  },
  "projects-impact": {
    eyebrow: "Résultats et portée",
    title: "Notre impact",
    text: "Une lecture institutionnelle de la portée, des bénéficiaires et de la qualité des résultats générés par les actions de PRODDEKO-Belgique.",
    cards: [
      {
        title: "Chiffres clés",
        body: "Les interventions touchent directement et indirectement des milliers de bénéficiaires à travers des programmes de gouvernance, d’éducation citoyenne, de développement durable et de solidarité internationale.",
      },
      {
        title: "Portée géographique",
        body: "Les actions couvrent plusieurs territoires en RDC ainsi que des espaces de mobilisation et de plaidoyer en Belgique.",
      },
      {
        title: "Bénéficiaires cibles",
        body: "Jeunes, femmes, communautés locales, agriculteurs, organisations citoyennes, relais communautaires, autorités locales et diaspora engagée.",
      },
      {
        title: "Qualité des résultats",
        body: "Les résultats sont pensés dans une logique d’appropriation locale, de participation, de redevabilité et de durabilité.",
      },
    ],
  },
  financing: {
    eyebrow: "Donors page",
    title: "Appel à financement",
    text: "PRODDEKO-Belgique recherche des partenaires techniques et financiers souhaitant soutenir des programmes territoriaux à fort impact.",
    cards: [
      {
        title: "Pourquoi investir avec PRODDEKO-Belgique ?",
        body: "Notre valeur ajoutée réside dans notre capacité à articuler diaspora, acteurs locaux, institutions et partenaires académiques autour de projets concrets, mesurables et adaptés aux réalités des territoires.",
      },
      {
        title: "Axes ouverts au financement",
        body: "Gouvernance éthique, éducation citoyenne, eau-hygiène-assainissement, agriculture durable, innovation responsable et systèmes locaux de coordination.",
      },
      {
        title: "Types de partenariat recherchés",
        body: "Subventions institutionnelles, cofinancements de projets, partenariats programmatiques pluriannuels, fonds pilotes pour l’innovation et appuis en expertise.",
      },
      {
        title: "Entrer en discussion",
        body: `Pour toute prise de contact : ${SITE.email} • ${SITE.belgiumLocation} • Coordination terrain : ${SITE.drcLocation}.`,
      },
    ],
  },
  "contact-info": {
    eyebrow: "Contact",
    title: "Coordonnées",
    text: "Les coordonnées institutionnelles de PRODDEKO-Belgique.",
    cards: [
      { title: "Siège", body: SITE.belgiumLocation },
      { title: "Coordination terrain", body: SITE.drcLocation },
      { title: "Email", body: SITE.email },
      { title: "Téléphone", body: SITE.phone },
    ],
  },
  "action-sustainable": {
    eyebrow: "Programme 01",
    title: "Programme Développement durable",
    text: "PRODDEKO-Belgique accompagne des trajectoires territoriales de développement durable visant à renforcer la résilience communautaire, la gestion responsable des ressources et l’amélioration durable des conditions de vie.",
    metrics: [
      { value: "12 000+", label: "bénéficiaires" },
      { value: "36 mois", label: "durée" },
      { value: "€ 280 000", label: "budget estimé" },
      { value: "4 territoires", label: "zones d’intervention" },
    ],
    cards: [
      {
        title: "Objectifs stratégiques",
        body: "Renforcer les capacités locales, promouvoir des pratiques agroécologiques et soutenir des initiatives économiques et communautaires durables.",
      },
      {
        title: "Résultats attendus",
        body: "Communautés mieux organisées, pratiques durables adoptées et meilleure résilience face aux vulnérabilités.",
      },
      {
        title: "Indicateurs clés",
        body: "Nombre de bénéficiaires directs et indirects, nombre d’initiatives soutenues et taux d’adoption des pratiques durables.",
      },
      {
        title: "Bénéficiaires cibles",
        body: "Agriculteurs, jeunes, femmes, organisations communautaires et populations vulnérables.",
      },
    ],
    details: [
      "Zones d’intervention : Kongo Central • Kinshasa • Kwilu • zones rurales partenaires",
      "Partenaires impliqués : ENABEL • Fondation Roi Baudouin • Université Kongo • organisations communautaires locales",
      "Budget indicatif : Activités terrain 58% • Formation 17% • Suivi-évaluation 10% • Coordination 15%",
      "Calendrier : Diagnostic • Déploiement • Consolidation • Évaluation",
    ],
  },
  "action-education": {
    eyebrow: "Programme 02",
    title: "Programme Éducation citoyenne",
    text: "Le programme Éducation citoyenne vise à développer une citoyenneté active, critique et responsable à travers des dispositifs de formation, de sensibilisation et de mobilisation.",
    metrics: [
      { value: "8 500+", label: "bénéficiaires" },
      { value: "24 mois", label: "durée" },
      { value: "€ 195 000", label: "budget estimé" },
      { value: "3 territoires", label: "zones d’intervention" },
    ],
    cards: [
      {
        title: "Objectifs stratégiques",
        body: "Renforcer les capacités citoyennes, développer le leadership local et promouvoir une culture démocratique fondée sur la participation.",
      },
      {
        title: "Résultats attendus",
        body: "Amélioration de la participation citoyenne, renforcement du leadership local et implication accrue des jeunes et des femmes.",
      },
      {
        title: "Indicateurs clés",
        body: "Nombre de formations, nombre de participants, taux de participation des jeunes et des femmes et initiatives citoyennes lancées.",
      },
      {
        title: "Bénéficiaires cibles",
        body: "Jeunes, femmes, leaders communautaires, organisations locales, établissements éducatifs et relais de terrain.",
      },
    ],
    details: [
      "Zones d’intervention : Kinshasa • Kongo Central • espaces éducatifs partenaires",
      "Partenaires impliqués : CNCD–11.11.11 • UCLouvain • établissements éducatifs • relais communautaires",
      "Budget indicatif : Formations 52% • Mobilisation 18% • Documentation 12% • Coordination 18%",
      "Calendrier : Conception • Mise en œuvre • Appui aux initiatives • Évaluation",
    ],
  },
  "action-governance": {
    eyebrow: "Programme 03",
    title: "Programme Gouvernance éthique",
    text: "Ce programme renforce les mécanismes locaux de transparence, de redevabilité et de participation citoyenne afin d’améliorer la qualité de la gouvernance territoriale.",
    metrics: [
      { value: "6 000+", label: "bénéficiaires" },
      { value: "30 mois", label: "durée" },
      { value: "€ 240 000", label: "budget estimé" },
      { value: "3 collectivités", label: "zones d’intervention" },
    ],
    cards: [
      {
        title: "Objectifs stratégiques",
        body: "Promouvoir des pratiques de gouvernance éthique, renforcer les mécanismes de suivi citoyen et améliorer le dialogue entre autorités locales et citoyens.",
      },
      {
        title: "Résultats attendus",
        body: "Dispositifs de redevabilité opérationnels, participation citoyenne accrue et meilleure circulation de l’information publique.",
      },
      {
        title: "Indicateurs clés",
        body: "Nombre de mécanismes mis en place, nombre de citoyens impliqués, fréquence des espaces de dialogue et niveau d’accès à l’information.",
      },
      {
        title: "Bénéficiaires cibles",
        body: "Collectivités locales, organisations de la société civile, relais communautaires, jeunes engagés, femmes leaders et citoyens.",
      },
    ],
    details: [
      "Zones d’intervention : Kongo Central • Kinshasa • collectivités locales pilotes",
      "Partenaires impliqués : UNOPS • Entraide & Fraternité • autorités locales • OSC partenaires",
      "Budget indicatif : Redevabilité 47% • Sensibilisation 20% • Outils 13% • Gouvernance 20%",
      "Calendrier : Analyse • Mise en place • Dialogue • Évaluation",
    ],
  },
  "action-solidarity": {
    eyebrow: "Programme 04",
    title: "Programme Solidarité internationale",
    text: "PRODDEKO-Belgique développe une solidarité internationale fondée sur le co-développement, la réciprocité et la mobilisation conjointe des ressources de la diaspora et des partenaires.",
    metrics: [
      { value: "4 000+", label: "bénéficiaires" },
      { value: "24 mois", label: "durée" },
      { value: "€ 175 000", label: "budget estimé" },
      { value: "Belgique • RDC", label: "zones d’intervention" },
    ],
    cards: [
      {
        title: "Objectifs stratégiques",
        body: "Créer des synergies durables entre la Belgique, la RDC et les partenaires internationaux, et favoriser le transfert de compétences et de ressources.",
      },
      {
        title: "Résultats attendus",
        body: "Partenariats consolidés, initiatives co-construites et meilleure mobilisation de la diaspora.",
      },
      {
        title: "Indicateurs clés",
        body: "Nombre de partenariats actifs, nombre de projets co-développés et volume de ressources mobilisées.",
      },
      {
        title: "Bénéficiaires cibles",
        body: "Diaspora congolaise, organisations locales, collectivités, institutions publiques, universités, ONG et communautés bénéficiaires.",
      },
    ],
    details: [
      "Zones d’intervention : Welkenraedt • Kinshasa • Kongo Central • réseaux de diaspora",
      "Partenaires impliqués : Caritas International • diaspora congolaise • universités partenaires • ONG alliées",
      "Budget indicatif : Animation 40% • Appui technique 22% • Coordination 18% • Suivi 20%",
      "Calendrier : Réseautage • Déploiement • Renforcement • Consolidation",
    ],
  },
};
function PageHero({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle eyebrow={eyebrow} title={title} text={text} />
    </div>
  );
}
function ContentGrid({ cards, iconMap }) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {cards.map((card, i) => {
        const Icon = iconMap?.[card.title];
        return (
          <div
            key={`${card.title}-${i}`}
            className={`rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm ${
              i === 0 && cards.length >= 4 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              {Icon ? (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                  <Icon className="h-6 w-6" />
                </div>
              ) : null}
              <div>
                <h3 className="text-xl font-black tracking-tight text-blue-950">
                  {card.title}
                </h3>
                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600">
                  {card.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
