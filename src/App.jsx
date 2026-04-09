import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Globe,
  ShieldCheck,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  ArrowRight,
  Users,
  BookOpen,
  HeartHandshake,
  Landmark,
  Phone,
  CheckCircle2,
  Scale,
  Sparkles,
} from "lucide-react";

// ⚠️ Vérifie que les images existent bien dans /public/images
const ASSETS = {
  logo: "/images/proddeko-logo.png?v=2",
  hero: "/images/proddeko-hero.jpg",
  anticorruption: "/images/proddeko-anticorruption.jpg",
  about: "/images/proddeko-hero.jpg",
  projects: "/images/proddeko-projects.jpg",
  contact: "/images/proddeko-contact.jpg",
};

const navItems = [
  {
    label: "À propos",
    items: [
      { label: "Qui sommes-nous", page: "about", description: "Présentation institutionnelle et positionnement", icon: Users },
      { label: "Mission", page: "mission", description: "Vision, finalité et ambition stratégique", icon: HeartHandshake },
      { label: "Valeurs", page: "values", description: "Principes éthiques et référentiel d’action", icon: BookOpen },
      { label: "Gouvernance", page: "governance", description: "Organisation, pilotage et supervision", icon: Landmark },
    ],
  },
  {
    label: "Nos actions",
    items: [
      { label: "Développement durable", page: "action-sustainable", description: "Initiatives locales et résilience communautaire", icon: Globe },
      { label: "Éducation citoyenne", page: "action-education", description: "Formation, sensibilisation et engagement", icon: GraduationCap },
      { label: "Gouvernance éthique", page: "action-governance", description: "Redevabilité, suivi citoyen et bonne gestion", icon: ShieldCheck },
      { label: "Solidarité internationale", page: "action-solidarity", description: "Co-développement et mobilisation transnationale", icon: Handshake },
    ],
  },
  {
    label: "Anticorruption",
    items: [
      { label: "Transparence locale", page: "anti-transparency", description: "Suivi, budgets et accès à l’information", icon: ShieldCheck },
      { label: "Intégrité citoyenne", page: "anti-integrity", description: "Éthique, prévention et leadership", icon: Users },
      { label: "Outils numériques", page: "anti-tools", description: "Signalement, documentation et participation", icon: BookOpen },
      { label: "Plaidoyer", page: "anti-advocacy", description: "Dialogue public et transformation durable", icon: ArrowRight },
    ],
  },
  {
    label: "Projets",
    items: [
      { label: "Projets en cours", page: "projects", description: "Portefeuille d’actions et résultats visibles", icon: Globe },
      { label: "Appel à financement", page: "financing", description: "Priorités d’investissement, cofinancement et partenariat bailleur", icon: HeartHandshake },
      { label: "Impact", page: "projects-impact", description: "Chiffres clés et portée des interventions", icon: Users },
      { label: "Partenaires", page: "partners", description: "Institutions, ONG et réseaux associés", icon: Handshake },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Coordonnées", page: "contact-info", description: "Présence Belgique et RDC", icon: MapPin },
      { label: "Formulaire", page: "contact-form", description: "Écrire à l’équipe PRODDEKO", icon: Mail },
      { label: "Newsletter", page: "contact-newsletter", description: "Recevoir nos actualités", icon: BookOpen },
    ],
  },
];

const actionCards = [
  {
    icon: Globe,
    title: "Développement durable",
    text: "PRODDEKO-Belgique accompagne des dynamiques territoriales de développement durable fondées sur le renforcement des capacités locales, la résilience communautaire et la valorisation des ressources endogènes."
  },
  {
    icon: GraduationCap,
    title: "Éducation citoyenne",
    text: "Programmes de formation, leadership et citoyenneté active pour renforcer l’engagement des jeunes et des communautés."
  },
  {
    icon: ShieldCheck,
    title: "Gouvernance éthique",
    text: "Mécanismes de redevabilité, transparence et participation citoyenne pour améliorer la gouvernance locale."
  },
  {
    icon: Handshake,
    title: "Solidarité internationale",
    text: "Co-développement entre diaspora, acteurs locaux et partenaires internationaux."
  }
];

const antiCorruption = [
  "Comités de pilotage avec droit de regard sur les budgets",
  "Ateliers d’intégrité pour jeunes, femmes et leaders communautaires",
  "Outils numériques participatifs et signalement citoyen",
  "Forums publics, plaidoyer local et appui à l’alerte éthique",
];

const territories = [
  "Kongo Central",
  "Kinshasa",
  "Kwilu",
  "Sud-Ubangi",
  "Nord-Kivu",
  "Autres provinces de la RDC",
  "Congo-Brazzaville",
  "Cameroun",
  "Togo",
  "Gabon",
  "Belgique",
  "France",
  "Allemagne",
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

const stats = [
  { value: "200 000+", label: "bénéficiaires directs" },
  { value: "10+", label: "zones et pays d’action" },
  { value: "8+", label: "partenaires stratégiques" },
  { value: "6", label: "universités partenaires" },
];

const projectCards = [
  {
    title: "Programme gouvernance locale",
    text: "Renforcement des capacités citoyennes, suivi communautaire et actions de redevabilité locale en RDC.",
    tag: "Gouvernance",
  },
  {
    title: "Éducation et engagement jeunesse",
    text: "Formations, ateliers et mobilisation des jeunes pour une citoyenneté active et responsable.",
    tag: "Éducation",
  },
  {
    title: "Co-développement Belgique–RDC",
    text: "Création de passerelles entre diaspora, partenaires locaux, institutions et communautés bénéficiaires.",
    tag: "Solidarité",
  },
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
    text: "Soutenir des ateliers citoyens, des sessions de formation ou du matériel de terrain.",
  },
  {
    amount: "150 €",
    title: "Partenaire d’action",
    text: "Participer au financement d’un micro-projet local ou d’une activité structurante.",
  },
];

const testimonials = [
  {
    quote: "PRODDEKO-Belgique valorise une approche humaine, rigoureuse et proche des réalités locales.",
    author: "Partenaire associatif",
  },
  {
    quote: "Les actions menées renforcent la participation citoyenne et donnent une voix aux communautés.",
    author: "Relai communautaire",
  },
  {
    quote: "La structure crée un lien utile entre la diaspora, les institutions et les bénéficiaires.",
    author: "Acteur du co-développement",
  },
];

const pageDetails = {

  "action-sustainable": {
    title: "Programme Développement durable",
    eyebrow: "Programme 01",
    text: "Renforcement des systèmes locaux durables et résilients.",
    sections: [
      { title: "Objectifs", body: "Renforcer les capacités locales et promouvoir des pratiques durables." },
      { title: "Résultats", body: "Communautés plus résilientes et initiatives locales renforcées." },
      { title: "Indicateurs", body: "Nombre de projets durables, bénéficiaires, adoption des pratiques." }
    ]
  },

  "action-education": {
    title: "Programme Éducation citoyenne",
    eyebrow: "Programme 02",
    text: "Renforcement de la citoyenneté active et du leadership.",
    sections: [
      { title: "Objectifs", body: "Former des citoyens engagés et responsables." },
      { title: "Résultats", body: "Participation accrue et leadership local renforcé." },
      { title: "Indicateurs", body: "Nombre de formations, participants, initiatives citoyennes." }
    ]
  },

  "action-governance": {
    title: "Programme Gouvernance éthique",
    eyebrow: "Programme 03",
    text: "Promotion de la transparence et de la redevabilité.",
    sections: [
      { title: "Objectifs", body: "Renforcer la transparence et la participation citoyenne." },
      { title: "Résultats", body: "Amélioration de la gouvernance locale." },
      { title: "Indicateurs", body: "Dispositifs mis en place, participation citoyenne." }
    ]
  },

  "action-solidarity": {
    title: "Programme Solidarité internationale",
    eyebrow: "Programme 04",
    text: "Renforcement des partenariats et du co-développement.",
    sections: [
      { title: "Objectifs", body: "Créer des synergies entre territoires et acteurs." },
      { title: "Résultats", body: "Partenariats renforcés et projets collaboratifs." },
      { title: "Indicateurs", body: "Nombre de partenariats, projets co-développés." }
    ]
  },

  logframe: {
    title: "Cadre logique (Logframe UE)",
    eyebrow: "Outil de pilotage stratégique",
    text: "Présentation structurée du cadre logique conforme aux standards bailleurs (UE, ENABEL, UNOPS).",
    sections: [
      {
        title: "Objectif global",
        body: "Amélioration durable des conditions de vie via gouvernance, inclusion et développement local."
      },
      {
        title: "Objectif spécifique",
        body: "Renforcement des capacités locales et de la participation citoyenne."
      },
      {
        title: "Résultats",
        body: "Acteurs formés, dispositifs de gouvernance opérationnels, initiatives durables déployées."
      },
      {
        title: "Indicateurs",
        body: "Nombre de bénéficiaires, taux de participation, projets réalisés, dispositifs actifs."
      },
      {
        title: "Sources de vérification",
        body: "Rapports, enquêtes terrain, outils numériques de suivi, audits externes."
      },
      {
        title: "Hypothèses / Risques",
        body: "Stabilité institutionnelle, engagement des parties prenantes, accès terrain sécurisé."
      }
    ]
  },

  financing: {
    title: "Appel à financement",
    eyebrow: "Donors page • Partenariats & cofinancement",
    text: "PRODDEKO-Belgique recherche des partenaires techniques et financiers souhaitant soutenir des programmes territoriaux à fort impact en gouvernance, éducation citoyenne, eau-hygiène-assainissement, agriculture durable et innovation responsable. Notre approche combine ancrage local, co-construction, transparence financière et logique de pérennisation.",
    sections: [
      {
        title: "Pourquoi investir avec PRODDEKO-Belgique ?",
        body: "Notre valeur ajoutée réside dans notre capacité à articuler diaspora, acteurs locaux, institutions et partenaires académiques autour de projets concrets, mesurables et adaptés aux réalités des territoires. Nous privilégions des dispositifs de mise en œuvre responsables, avec redevabilité, suivi participatif, ancrage communautaire et perspective de réplication."
      },
      {
        title: "Axes ouverts au financement",
        body: "Les opportunités de financement concernent notamment : (1) gouvernance éthique et suivi citoyen ; (2) éducation citoyenne, jeunesse et leadership ; (3) accès à l’eau, hygiène et assainissement écologique ; (4) agriculture durable et résilience territoriale ; (5) outils numériques participatifs, gouvernance responsable de l’innovation et systèmes locaux d’alerte et de coordination."
      },
      {
        title: "Types de partenariat recherchés",
        body: "Nous recherchons des subventions institutionnelles, des cofinancements de projets, des partenariats programmatiques pluriannuels, des fonds pilotes pour l’innovation, des partenariats académiques appliqués ainsi que des appuis en expertise, équipement, formation et accompagnement stratégique."
      },
      {
        title: "Montages financiers possibles",
        body: "PRODDEKO-Belgique peut intervenir dans des schémas de financement variés : projet pilote, subvention affectée, cofinancement multi-acteurs, consortium, appui à l’amorçage, financement de réplication ou enveloppe dédiée au renforcement institutionnel. Les contributions peuvent couvrir les activités, l’ingénierie de projet, le suivi-évaluation, la formation, les équipements et la pérennisation."
      },
      {
        title: "Garanties de redevabilité",
        body: "Chaque partenariat s’appuie sur une logique claire d’objectifs, résultats, indicateurs, suivi budgétaire et reporting. Nous privilégions des mécanismes de traçabilité, de validation terrain, de suivi participatif, d’auditabilité et de communication régulière avec les bailleurs et partenaires."
      },
      {
        title: "Exemples de besoins prioritaires",
        body: "Financement de programmes d’éducation citoyenne et de gouvernance locale ; soutien à des dispositifs eau-hygiène-assainissement dans les écoles et centres de santé ; appui aux projets d’agriculture durable et de résilience ; soutien à des pilotes numériques responsables ; renforcement organisationnel et territorial des structures partenaires locales."
      },
      {
        title: "Partenaires ciblés",
        body: "Cette page s’adresse aux fondations, agences de coopération, bailleurs publics, institutions académiques, ONG internationales, entreprises engagées, diaspora solidaire et mécanismes de financement mixte souhaitant soutenir des interventions crédibles, contextualisées et orientées impact."
      },
      {
        title: "Entrer en discussion",
        body: "Nous sommes disponibles pour partager une note conceptuelle, un cadre logique, un budget indicatif, un plan de mise en œuvre, une matrice de résultats ou une proposition de consortium adaptée à vos priorités. Pour toute prise de contact : contact@proddeko.online • Welkenraedt, Belgique • Coordination terrain : Kinzau-Mvuete, RDC."
      }
    ]
  },

  partners: {
    title: "Partenaires stratégiques",
    eyebrow: "Écosystème institutionnel",
    text: "PRODDEKO-Belgique s’inscrit dans un réseau multi-acteurs international.",
    sections: [
      {
        title: "Institutions",
        body: "Coopération avec agences publiques, ambassades et programmes internationaux."
      },
      {
        title: "ONG & Réseaux",
        body: "Collaboration avec ONG européennes et africaines pour des actions coordonnées."
      },
      {
        title: "Académique",
        body: "Partenariats universitaires pour recherche, innovation et formation."
      },
      {
        title: "Valeur ajoutée",
        body: "Effet levier, crédibilité institutionnelle et mutualisation des ressources."
      }
    ]
  },
  about: {
    title: "Qui sommes-nous ?",
    eyebrow: "Présentation institutionnelle",
    text: "PRODDEKO-Belgique est une association sans but lucratif de droit belge, fondée par des membres de la diaspora congolaise, engagée dans la solidarité internationale et le co-développement entre la Belgique et la République Démocratique du Congo. Elle agit comme un pont citoyen mobilisant savoirs, ressources et dynamiques locales afin de construire un développement durable, inclusif et éthique.",
    sections: [
      {
        title: "Vision et engagement",
        body: `PRODDEKO-Belgique inscrit son action dans une vision stratégique de développement durable, inclusif et endogène, fondée sur la justice sociale, la cohésion communautaire et la préservation des écosystèmes. L’organisation promeut des dynamiques territoriales capables de renforcer durablement les capacités locales, en articulant innovation sociale, participation citoyenne et gouvernance responsable.

Son engagement repose sur une approche systémique des enjeux de développement, intégrant à la fois les dimensions économiques, sociales, environnementales et institutionnelles. À ce titre, la gouvernance éthique, la transparence, la redevabilité et l’implication active des communautés sont considérées comme des leviers structurants de transformation.

En mobilisant les ressources de la diaspora, les partenariats institutionnels et les savoirs locaux, PRODDEKO-Belgique contribue à co-construire des solutions adaptées aux réalités des territoires, avec une attention particulière portée à l’autonomisation des populations, notamment des femmes et des jeunes, ainsi qu’à la résilience des systèmes locaux face aux défis contemporains.`
      },
      {
        title: "Mission",
        body: "L’association soutient les initiatives locales en RDC dans des domaines clés tels que l’agriculture durable, la gouvernance territoriale, l’éducation citoyenne, le numérique et l’autonomisation des femmes et des jeunes. En Belgique, elle développe des actions d’éducation à la citoyenneté mondiale et de plaidoyer pour une coopération équitable et responsable."
      },
      {
        title: "Positionnement stratégique",
        body: "PRODDEKO-Belgique agit comme une interface entre la diaspora congolaise, les partenaires institutionnels européens et les acteurs locaux en RDC. Elle privilégie une approche de co-construction, basée sur l’écoute des besoins locaux, la réciprocité et la coresponsabilité entre partenaires du Nord et du Sud."
      },
      {
        title: "Gouvernance participative",
        body: "La gouvernance repose sur trois instances principales : une Assemblée Générale inclusive et souveraine, un Conseil d’Administration assurant le pilotage stratégique, et un Comité Opérationnel en charge de la mise en œuvre des projets. À cela s’ajoutent des comités locaux de pilotage en RDC, impliquant directement les bénéficiaires et partenaires de terrain."
      },
      {
        title: "Domaines d’intervention",
        body: "Les actions couvrent plusieurs secteurs : agroécologie et agriculture familiale, gouvernance et lutte contre la corruption, éducation citoyenne, transition numérique éthique, autonomisation des femmes et des jeunes, ainsi que renforcement des capacités locales."
      },
      {
        title: "Approche opérationnelle",
        body: "L’organisation développe des projets co-construits avec les communautés locales, intégrant des mécanismes de suivi participatif, de redevabilité et d’évaluation. Elle favorise l’innovation sociale, notamment à travers des outils numériques participatifs et des dynamiques de mobilisation citoyenne."
      },
      {
        title: "Ancrage territorial et publics cibles",
        body: "PRODDEKO-Belgique intervient principalement dans des zones rurales et périurbaines en RDC, notamment au Kongo Central et à Kinshasa, auprès d’agriculteurs, de jeunes, de femmes et d’organisations locales. En Belgique, elle s’adresse à la diaspora, aux citoyens, aux institutions et aux acteurs associatifs engagés."
      },
      {
        title: "Partenariats et réseaux",
        body: "L’organisation collabore avec des ONG, des institutions publiques, des universités et des réseaux citoyens en Belgique et en RDC, notamment CNCD–11.11.11, Entraide & Fraternité, des universités belges et congolaises, ainsi que des plateformes locales de développement durable."
      },
      {
        title: "Valeur ajoutée",
        body: "La force de PRODDEKO-Belgique réside dans son ancrage diasporique, sa capacité à articuler expertise internationale et réalités locales, ainsi que dans son engagement pour une gouvernance transparente, participative et orientée vers l’impact durable."
      }
    ]
  },

  mission: {
    title: "Notre mission",
    eyebrow: "Cadre stratégique (niveau bailleur)",
    text: "Contribuer à un développement durable, inclusif et participatif en RDC, en renforçant les capacités locales, la gouvernance éthique et l’engagement citoyen, dans une logique de co-développement entre la Belgique et les territoires d’intervention.",
    image: ASSETS.hero,
    sections: [
      {
        title: "Objectif global",
        body: `Contribuer à l’amélioration durable des conditions de vie des populations en République Démocratique du Congo, en renforçant la gouvernance locale, la participation citoyenne et les dynamiques de développement endogène.`
      },
      {
        title: "Objectifs spécifiques",
        body: `Renforcer les capacités des acteurs locaux (organisations communautaires, jeunes, femmes, autorités locales) afin d’améliorer la gouvernance territoriale et la participation citoyenne.

Soutenir le développement d’initiatives économiques et sociales durables, notamment dans les secteurs de l’agriculture, du numérique, de l’éducation et de l’entrepreneuriat local.

Promouvoir une culture d’intégrité, de transparence et de redevabilité à travers des dispositifs de gouvernance éthique et de suivi citoyen.`
      },
      {
        title: "Résultats attendus",
        body: `Les capacités organisationnelles et techniques des acteurs locaux sont renforcées.

Les mécanismes de gouvernance locale et de participation citoyenne sont opérationnels et inclusifs.

Des initiatives économiques et sociales durables sont mises en œuvre et consolidées.

La transparence, la redevabilité et la culture d’intégrité sont renforcées au niveau local.`
      },
      {
        title: "Indicateurs clés",
        body: `Nombre de bénéficiaires directs et indirects appuyés.

Taux de participation des femmes et des jeunes dans les dispositifs de gouvernance.

Nombre d’initiatives locales soutenues et pérennisées.

Existence et utilisation effective de mécanismes de suivi citoyen et de redevabilité.

Nombre de sessions de formation et d’actions de sensibilisation réalisées.`
      },
      {
        title: "Approche méthodologique",
        body: `Approche de co-construction avec les communautés locales et les partenaires institutionnels.

Ancrage territorial fort et adaptation aux réalités locales.

Mobilisation de la diaspora comme levier stratégique de compétences et de ressources.

Utilisation d’outils participatifs et numériques pour renforcer la transparence et l’engagement citoyen.`
      },
      {
        title: "Durabilité et impact",
        body: `Les actions sont conçues pour garantir une appropriation locale, un transfert de compétences et une autonomie progressive des acteurs bénéficiaires.

L’impact recherché s’inscrit dans une logique de transformation systémique et durable, alignée sur les Objectifs de Développement Durable (ODD) et les priorités des territoires d’intervention.`
      }
    ]
  },

  values: {
    title: "Nos valeurs",
    eyebrow: "Référentiel d’action",
    text: "Le référentiel d’action de PRODDEKO-Belgique repose sur des principes éthiques, organisationnels et territoriaux qui structurent l’ensemble de ses interventions. Ces valeurs guident la conception des projets, la relation avec les communautés, la gestion des ressources et les partenariats, dans une logique de co-développement, de redevabilité et d’impact durable.",
    sections: [
      {
        title: "Dignité humaine",
        body: `PRODDEKO-Belgique place la dignité humaine au cœur de son action. Chaque personne est considérée non comme bénéficiaire passive, mais comme sujet de droits, acteur de changement et partenaire du développement. Cette valeur implique le respect des identités, des parcours, des savoirs locaux et de la capacité d’initiative des communautés.

Dans les projets portés par l’organisation, la dignité se traduit par une attention particulière aux groupes les plus exposés aux vulnérabilités — notamment les enfants, les femmes, les jeunes et les ménages fragilisés — ainsi qu’à la qualité concrète des réponses apportées : accès à l’eau, à l’assainissement, à l’éducation, à l’information, à la participation et à des conditions de vie plus sûres et plus justes.`
      },
      {
        title: "Transparence et redevabilité",
        body: `La transparence constitue un engagement central de gouvernance. PRODDEKO-Belgique défend une gestion claire, traçable et responsable des ressources financières, matérielles et humaines. Elle privilégie des mécanismes de suivi, d’évaluation, de documentation et de restitution qui permettent aux partenaires, communautés, institutions et bailleurs de comprendre les décisions, d’apprécier les résultats et d’exercer un regard critique sur l’action menée.

Cette exigence de redevabilité se reflète également dans les dispositifs promus par l’organisation : participation citoyenne, suivi communautaire, mécanismes de recours, contrôle local, auditabilité des processus et diffusion d’informations utiles. La transparence n’est pas seulement un principe de gestion ; elle est un levier de confiance, de légitimité et d’efficacité collective.`
      },
      {
        title: "Solidarité internationale et co-développement",
        body: `PRODDEKO-Belgique défend une solidarité internationale fondée sur la réciprocité, l’écoute mutuelle et la coresponsabilité. L’organisation rejette les approches verticales ou paternalistes et privilégie des partenariats équilibrés entre acteurs de la diaspora, communautés locales, institutions publiques, ONG, universités et réseaux citoyens.

Cette solidarité se concrétise dans une logique de co-développement : les dynamiques entre la Belgique et la RDC sont pensées comme des relations de construction commune, d’apprentissage partagé et de mise en valeur des expertises locales. Elle vise à créer des passerelles durables entre territoires, compétences, ressources et initiatives utiles au bien commun.`
      },
      {
        title: "Participation citoyenne et appropriation locale",
        body: `La participation citoyenne est considérée comme une condition de pertinence, de légitimité et de durabilité des projets. PRODDEKO-Belgique veille à ce que les communautés, organisations locales, relais de terrain, jeunes, femmes et acteurs publics puissent contribuer à la définition des priorités, à la mise en œuvre des actions et au suivi des résultats.

Cette valeur traduit la conviction que les changements durables ne peuvent être imposés de l’extérieur. Ils doivent être portés, compris et appropriés localement. L’organisation favorise donc des méthodologies de co-construction, d’écoute active, de retour d’expérience et de renforcement des capacités locales.`
      },
      {
        title: "Responsabilité, durabilité et innovation utile",
        body: `PRODDEKO-Belgique inscrit son action dans une logique de responsabilité et d’impact durable. Chaque intervention doit produire des effets concrets, mesurables et soutenables dans le temps, tout en respectant les réalités sociales, culturelles, institutionnelles et environnementales des territoires d’intervention.

L’organisation valorise une innovation utile, c’est-à-dire des solutions adaptées, appropriables et gouvernées de manière responsable — qu’il s’agisse d’outils numériques participatifs, de dispositifs locaux de gouvernance, de pratiques d’assainissement écologique ou de mécanismes de coordination multi-acteurs. Cette orientation s’inscrit dans une démarche d’amélioration continue et d’alignement avec les Objectifs de Développement Durable.`
      }
    ]
  },

  governance: {
    title: "Notre gouvernance",
    eyebrow: "Organisation",
    text: "Une gouvernance participative et inclusive entre Belgique et RDC.",
    sections: [
      { title: "Assemblée Générale", body: "Organe souverain validant orientations et rapports." },
      { title: "Conseil d’Administration", body: "Pilotage stratégique et supervision." },
      { title: "Comité opérationnel", body: "Mise en œuvre des projets avec relais locaux." }
    ]
  },

  "anti-transparency": {
    title: "Transparence locale",
    eyebrow: "Programme anticorruption",
    text: "Renforcement de la transparence budgétaire et du contrôle citoyen au niveau local.",
    sections: [
      { title: "Suivi budgétaire", body: "Lecture simplifiée et suivi participatif des ressources." },
      { title: "Comités locaux", body: "Participation directe des citoyens au contrôle des projets." },
      { title: "Accès à l’information", body: "Diffusion d’informations pour renforcer la redevabilité." }
    ]
  },

  "anti-integrity": {
    title: "Intégrité citoyenne",
    eyebrow: "Programme anticorruption",
    text: "Renforcer une culture d’éthique et de responsabilité citoyenne.",
    sections: [
      { title: "Sensibilisation", body: "Ateliers sur corruption et bonnes pratiques." },
      { title: "Prévention", body: "Culture d’intégrité auprès des jeunes et communautés." },
      { title: "Leadership", body: "Appui à des relais citoyens crédibles." }
    ]
  },

  "anti-tools": {
    title: "Outils numériques",
    eyebrow: "Programme anticorruption",
    text: "Utilisation du numérique pour le suivi citoyen et la transparence.",
    sections: [
      { title: "Signalement", body: "Remontée d’informations structurée." },
      { title: "Documentation", body: "Suivi des données et projets." },
      { title: "Accessibilité", body: "Outils simples et adaptés aux publics." }
    ]
  },

  "anti-advocacy": {
    title: "Plaidoyer",
    eyebrow: "Programme anticorruption",
    text: "Renforcer le dialogue public et influencer les pratiques de gouvernance.",
    sections: [
      { title: "Voix citoyenne", body: "Faire remonter les besoins des communautés." },
      { title: "Dialogue", body: "Interaction avec institutions et acteurs publics." },
      { title: "Transformation", body: "Promouvoir des pratiques éthiques durables." }
    ]
  }
};

function MenuItem({ label, items, onSelect, isOpen, onOpen, onClose }) {
  return (
    <div className="relative">
      <button
        onMouseEnter={onOpen}
        onClick={() => (isOpen ? onClose() : onOpen())}
        className={`group flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition ${
          isOpen ? "bg-slate-100 text-blue-950" : "text-slate-700 hover:bg-slate-50 hover:text-orange-600"
        }`}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen ? (
        <>
          <div className="fixed inset-x-0 top-[88px] z-10 h-[26px] bg-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            className="absolute left-1/2 top-full z-20 mt-6 w-[720px] -translate-x-1/2 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.16)]"
          >
            <div className="grid grid-cols-[1.1fr_0.9fr]">
              <div className="p-7">
                <div className="mb-5 flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <div className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">
                      {label}
                    </div>
                    <div className="mt-2 text-2xl font-black tracking-tight text-blue-950">
                      Navigation stratégique
                    </div>
                    <div className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                      Explorez les sous-rubriques de cette section à travers une navigation claire, institutionnelle et orientée impact.
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
                  >
                    Fermer
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {items.map((item, index) => {
                    const Icon = item.icon || ChevronDown;
                    return (
                      <motion.button
                        key={item.page}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.03 * index, duration: 0.16 }}
                        onClick={() => {
                          onSelect(item.page);
                          onClose();
                        }}
                        className="group/item flex items-start gap-4 rounded-[1.4rem] border border-transparent bg-slate-50/70 p-4 text-left transition hover:-translate-y-0.5 hover:border-orange-100 hover:bg-white hover:shadow-md"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition group-hover/item:bg-orange-500 group-hover/item:text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-base font-bold text-blue-950">{item.label}</div>
                          <div className="mt-1 text-sm leading-6 text-slate-500">{item.description}</div>
                          <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.14em] text-orange-500 opacity-0 transition group-hover/item:opacity-100">
                            Découvrir
                            <ArrowRight className="h-3.5 w-3.5" />
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col justify-between bg-gradient-to-br from-blue-950 via-slate-950 to-orange-950 p-7 text-white">
                <div>
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-orange-200">
                    PRODDEKO-Belgique
                  </div>
                  <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight">
                    Une action institutionnelle ancrée dans les territoires
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-200">
                    Nos programmes articulent gouvernance, participation citoyenne, innovation sociale et partenariats durables entre la Belgique et la RDC.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-black text-orange-300">10+</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-300">territoires d’action</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-black text-orange-300">200k+</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-300">bénéficiaires</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </div>
  );
}

function MobileMenu({ open, onClose, onSelect }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/50 xl:hidden">
      <div className="absolute right-0 top-0 h-full w-full max-w-md overflow-y-auto bg-white p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-lg font-black text-blue-950">Menu</div>
            <div className="text-sm text-slate-500">Navigation PRODDEKO-Belgique</div>
          </div>
          <button onClick={onClose} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">Fermer</button>
        </div>

        <div className="space-y-4">
          <button onClick={() => { onSelect("home"); onClose(); }} className="w-full rounded-2xl bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-slate-700">Accueil</button>
          {navItems.map((group) => (
            <div key={group.label} className="rounded-3xl border border-slate-200 p-4">
              <div className="mb-3 text-sm font-black text-blue-950">{group.label}</div>
              <div className="space-y-2">
                {group.items.map((item) => {
                  const Icon = item.icon || ChevronDown;
                  return (
                    <button
                      key={item.page}
                      onClick={() => { onSelect(item.page); onClose(); }}
                      className="flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition hover:bg-slate-50"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800">{item.label}</div>
                        <div className="mt-1 text-xs leading-5 text-slate-500">{item.description}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      <div className={`text-sm font-bold uppercase tracking-[0.22em] ${light ? "text-orange-300" : "text-orange-500"}`}>{eyebrow}</div>
      <h2 className={`mt-3 text-3xl font-black tracking-tight md:text-4xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {text ? <p className={`mt-5 text-lg leading-8 ${light ? "text-slate-200" : "text-slate-600"}`}>{text}</p> : null}
    </div>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-bold text-blue-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

export default function ProddekoBelgiqueSite() {
  const [logoError, setLogoError] = React.useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = React.useState(null);
  const closeMenuTimeoutRef = React.useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [page, setPage] = React.useState("home");
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = React.useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const res = await fetch("https://formspree.io/f/xaqllwnk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message envoyé avec succès ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Erreur lors de l'envoi ❌");
      }
    } catch (error) {
      setStatus("Erreur réseau ❌");
    }
  };
const valueIcons = {
  "Dignité humaine": HeartHandshake,
  "Transparence et redevabilité": ShieldCheck,
  "Solidarité internationale et co-développement": Handshake,
  "Participation citoyenne et appropriation locale": Users,
  "Responsabilité, durabilité et innovation utile": Sparkles,
};

const governanceIcons = {
  "Assemblée Générale": Users,
  "Conseil d’Administration": Landmark,
  "Comité opérationnel": ShieldCheck,
};

const renderPage = () => {
  // IMPORTANT : ne rien afficher pour l'accueil
  if (page === "home") return null;

  // ===== PAGE PROJETS (premium) =====
  if (page === "projects") {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Projets"
          title="Des initiatives concrètes à fort impact"
          text="PRODDEKO-Belgique conçoit et met en œuvre des projets structurants en gouvernance, éducation et co-développement."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-3xl font-black text-orange-500">{s.value}</div>
              <div className="mt-2 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projectCards.map((p) => (
            <div key={p.title} className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-xs font-bold uppercase text-orange-500">{p.tag}</div>
              <h3 className="mt-3 text-xl font-bold text-blue-950">{p.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{p.text}</p>
              <button
                onClick={() => setPage("don")}
                className="mt-5 rounded-full bg-orange-500 px-4 py-2 text-sm text-white"
              >
                Soutenir
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <SectionTitle eyebrow="Témoignages" title="Une action reconnue sur le terrain" />
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-3xl bg-slate-50 p-6">
                <p className="text-sm italic text-slate-700">“{t.quote}”</p>
                <div className="mt-4 text-xs font-semibold text-slate-500">{t.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ===== PAGE DON =====
  if (page === "don") {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Soutenir"
          title="Faire un don pour un impact concret"
          text="Votre contribution permet de financer des actions utiles et durables."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {donationTiers.map((tier) => (
            <div key={tier.title} className="rounded-3xl border bg-white p-8 text-center shadow-sm">
              <div className="text-3xl font-black text-orange-500">{tier.amount}</div>
              <h3 className="mt-3 text-xl font-bold text-blue-950">{tier.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{tier.text}</p>
              <button className="mt-6 rounded-full bg-blue-950 px-5 py-3 text-sm text-white">
                Donner
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ===== PAGE VALEURS (layout premium UE) =====
  if (page === "values" && pageDetails.values) {
    const content = pageDetails.values;

    return (
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow={content.eyebrow}
              title={content.title}
              text={content.text}
            />

            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-950 via-slate-950 to-orange-950 p-8 text-white shadow-2xl">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-orange-200">
                Cadre éthique
              </div>
              <h3 className="mt-5 text-2xl font-black tracking-tight">
                Un socle de principes pour des interventions crédibles, responsables et durables
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                Nos valeurs structurent la relation avec les communautés, la gouvernance des projets,
                la gestion des ressources, les mécanismes de redevabilité et la qualité des partenariats.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Approche centrée sur les droits et la dignité",
                  "Transparence, auditabilité et redevabilité",
                  "Partenariats équitables et co-développement",
                  "Participation citoyenne et appropriation locale",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                    <span className="text-sm leading-6 text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {content.sections?.map((section, i) => {
              const Icon = valueIcons[section.title] || Scale;
              return (
                <div
                  key={i}
                  className={`rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${
                    i === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                        Principe {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-2 text-xl font-black tracking-tight text-blue-950">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600 whitespace-pre-line">
                    {section.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ===== PAGE GOUVERNANCE (layout premium UE) =====
  if (page === "governance" && pageDetails.governance) {
    const content = pageDetails.governance;

    return (
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow={content.eyebrow}
              title={content.title}
              text={content.text}
            />

            <div className="mt-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-950 via-slate-950 to-orange-950 p-8 text-white shadow-2xl">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-orange-200">
                Architecture institutionnelle
              </div>
              <h3 className="mt-5 text-2xl font-black tracking-tight">
                Une gouvernance participative, responsable et orientée résultats
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                La gouvernance de PRODDEKO-Belgique articule orientation stratégique, supervision,
                mise en œuvre opérationnelle et redevabilité, dans une logique de transparence,
                d’inclusion et d’ancrage territorial entre la Belgique et la RDC.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Décision collégiale et supervision stratégique",
                  "Redevabilité institutionnelle et transparence de gestion",
                  "Coordination opérationnelle avec relais territoriaux",
                  "Participation des parties prenantes et appropriation locale",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                    <span className="text-sm leading-6 text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {content.sections?.map((section, i) => {
              const Icon = governanceIcons[section.title] || Scale;
              return (
                <div
                  key={i}
                  className={`rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${
                    i === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                        Instance {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="mt-2 text-xl font-black tracking-tight text-blue-950">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-600 whitespace-pre-line">
                    {section.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ===== PAGE À PROPOS (mise en page enrichie) =====
  if (page === "about" && pageDetails.about) {
    const content = pageDetails.about;

    return (
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          text={content.text}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black text-blue-950">Présentation détaillée</h3>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              <p>
                PRODDEKO-Belgique est une organisation de solidarité internationale qui articule ancrage diasporique,
                mobilisation citoyenne et partenariats institutionnels afin de soutenir des dynamiques de transformation
                durable entre la Belgique et la République Démocratique du Congo.
              </p>
              <p>
                Son positionnement repose sur une logique de co-développement : les projets ne sont pas pensés comme une
                aide descendante, mais comme des processus co-construits avec les communautés, les organisations locales,
                les jeunes, les femmes, les partenaires académiques et les acteurs publics engagés.
              </p>
              <p>
                L’organisation agit dans des domaines complémentaires tels que l’agroécologie, la gouvernance éthique,
                l’éducation citoyenne, l’innovation numérique, l’autonomisation économique locale et la lutte contre la
                corruption, avec une attention constante portée à la participation, à la redevabilité et à l’impact durable.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-sm">
            <img src={ASSETS.hero} alt="PRODDEKO-Belgique" className="h-full min-h-[320px] w-full object-cover" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {content.sections?.map((section, i) => (
            <div key={i} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-black text-blue-950">{section.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ===== PAGES PROGRAMMES (fiche bailleur) =====
  if (page.startsWith("action-") && pageDetails[page]) {
    const content = pageDetails[page];

    return (
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          text={content.text}
        />

        {/* CTA dossier */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="rounded-full bg-blue-950 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-900">Télécharger note conceptuelle (PDF)</button>
          <button className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700">Contacter pour financement</button>
        </div>

        {/* KPIs programme */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "5 000+", label: "bénéficiaires" },
            { value: "3 ans", label: "durée" },
            { value: "€150k", label: "budget estimé" },
            { value: "3 zones", label: "zones d’intervention" },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-3xl font-black text-orange-500">{kpi.value}</div>
              <div className="mt-2 text-sm text-slate-600">{kpi.label}</div>
            </div>
          ))}
        </div>

        {/* Sections logframe */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {content.sections?.map((section, i) => (
            <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-blue-950">{section.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Carte + partenaires */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-black text-blue-950">Zones d’intervention</h3>
            <div className="mt-4 rounded-2xl bg-slate-50 p-6 text-sm text-slate-600">
              Kongo Central • Kinshasa • Kwilu • Nord-Kivu
            </div>
          </div>

          <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-black text-blue-950">Partenaires impliqués</h3>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {partners.slice(0,4).map(p => (
                <span key={p} className="rounded-full bg-slate-50 px-3 py-1">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Budget */}
        <div className="mt-14 rounded-[2rem] border bg-white p-8 shadow-sm">
          <h3 className="text-xl font-black text-blue-950">Budget indicatif</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-xl bg-slate-50 p-4">Activités : 60%</div>
            <div className="rounded-xl bg-slate-50 p-4">Suivi-évaluation : 15%</div>
            <div className="rounded-xl bg-slate-50 p-4">Coordination : 25%</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-14 rounded-[2rem] border bg-white p-8 shadow-sm">
          <h3 className="text-xl font-black text-blue-950">Calendrier indicatif</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-4 text-sm">
            <div className="rounded-xl bg-slate-50 p-4">Phase 1 : Diagnostic</div>
            <div className="rounded-xl bg-slate-50 p-4">Phase 2 : Déploiement</div>
            <div className="rounded-xl bg-slate-50 p-4">Phase 3 : Suivi</div>
            <div className="rounded-xl bg-slate-50 p-4">Phase 4 : Évaluation</div>
          </div>
        </div>
      </div>
    );
  }

  // ===== PAGES DYNAMIQUES =====
  if (pageDetails[page]) {
    const content = pageDetails[page];

    return (
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionTitle
          eyebrow={content.eyebrow}
          title={content.title}
          text={content.text}
        />

        {content.image && (
          <div className="mt-10 overflow-hidden rounded-3xl shadow-lg">
            <img
              src={content.image}
              alt={content.title}
              className="h-80 w-full object-cover"
            />
          </div>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {content.sections?.map((section, i) => (
            <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-blue-950">{section.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <a
            href="#accueil"
            onClick={(e) => {
              e.preventDefault();
              setPage("home");
              setMobileMenuOpen(false);
            }}
            className="flex min-w-0 items-center gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-white shadow-sm">
              {logoError ? (
                <div className="flex h-full w-full items-center justify-center bg-blue-950 text-sm font-black text-white">
                  PB
                </div>
              ) : (
                <img
                  src={ASSETS.logo}
                  alt="Logo PRODDEKO"
                  className="h-full w-full object-contain"
                  onError={() => setLogoError(true)}
                />
              )}
            </div>

            <div className="min-w-0">
              <div className="text-xl font-extrabold tracking-tight text-blue-950">PRODDEKO-Belgique</div>
              <div className="hidden text-sm text-slate-600 md:block">
                Solidarité internationale • Développement durable • Gouvernance éthique
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
            <button
              onClick={() => {
                setPage("home");
                setOpenDesktopMenu(null);
              }}
              className="text-sm font-semibold text-slate-700 transition hover:text-orange-600"
            >
              Accueil
            </button>
            {Array.from(new Map(navItems.map((i) => [i.label, i])).values()).map((item) => (
              <MenuItem
                key={item.label}
                {...item}
                onSelect={setPage}
                isOpen={openDesktopMenu === item.label}
                onOpen={() => {
                  if (closeMenuTimeoutRef.current) clearTimeout(closeMenuTimeoutRef.current);
                  setOpenDesktopMenu(item.label);
                }}
                onClose={() => {
                  if (closeMenuTimeoutRef.current) clearTimeout(closeMenuTimeoutRef.current);
                  closeMenuTimeoutRef.current = setTimeout(() => setOpenDesktopMenu(null), 180);
                }}
              />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 lg:hidden"
            >
              Menu
            </button>

            <button
              onClick={() => setPage("contact-form")}
              className="hidden rounded-full border border-blue-950 px-5 py-2 text-sm font-semibold text-blue-950 transition hover:bg-blue-50 md:block"
            >
              Nous contacter
            </button>

            <button
              onClick={() => setPage("don")}
              className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
            >
              Faire un don
            </button>
          </div>
        </div>

        <MobileMenu
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onSelect={(p) => {
            setPage(p);
            setMobileMenuOpen(false);
          }}
        />
      </header>

      {renderPage() || (
        <>
          <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-black to-orange-950 px-6 py-20 text-white lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-slate-100">
                  Belgique • RDC • Afrique • Europe
                </div>
                <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                  Agir ensemble pour un développement durable, solidaire et transparent
                </h1>
                <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-200">
                  PRODDEKO-Belgique agit entre la Belgique et la RDC pour renforcer la dignité humaine, la gouvernance éthique,
                  l’éducation citoyenne et le co-développement avec les communautés.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={() => setPage("projects")}
                    className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                  >
                    Découvrir nos projets
                  </button>
                  <button
                    onClick={() => setPage("partners")}
                    className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Devenir partenaire
                  </button>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur"
                  >
                    <div className="text-3xl font-black text-orange-300 md:text-5xl">{stat.value}</div>
                    <div className="mt-3 text-lg text-slate-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
  <SectionTitle
    eyebrow="Nos actions"
    title="Des programmes structurés à fort impact"
    text="PRODDEKO-Belgique déploie des interventions intégrées combinant gouvernance, éducation, développement durable et solidarité internationale, avec des résultats mesurables et une approche alignée sur les standards bailleurs."
  />

  {/* KPIs */}
  <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {[
      { value: "200 000+", label: "bénéficiaires" },
      { value: "10+", label: "territoires" },
      { value: "25+", label: "projets soutenus" },
      { value: "85%", label: "taux d’impact local" },
    ].map((kpi) => (
      <div key={kpi.label} className="rounded-3xl border bg-white p-6 shadow-sm">
        <div className="text-3xl font-black text-orange-500">{kpi.value}</div>
        <div className="mt-2 text-sm text-slate-600">{kpi.label}</div>
      </div>
    ))}
  </div>

  {/* Actions détaillées */}
  <div className="mt-12 grid gap-6 lg:grid-cols-2">
    {actionCards.map((card, i) => {
      const Icon = card.icon;
      return (
        <div key={card.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                Programme {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2 text-xl font-black text-blue-950">{card.title}</h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">{card.text}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Objectifs opérationnels",
              "Résultats attendus",
              "Indicateurs clés",
              "Bénéficiaires cibles",
            ].map((item) => (
              <div key={item} className="rounded-xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </div>
      );
    })}
  </div>
</section>

          <section className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SectionTitle
                eyebrow="Nos territoires d’intervention"
                title="Une présence multi-territoriale entre ancrage local et ouverture internationale"
                text="Nos actions se déploient dans plusieurs provinces de la RDC ainsi qu’en Belgique, en Europe et en Afrique centrale."
              />
              <div className="mt-10 flex flex-wrap gap-3">
                {territories.map((territory) => (
                  <span
                    key={territory}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    {territory}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <SectionTitle
                  eyebrow="Partenaires et réseaux"
                  title="Un écosystème de coopération stratégique"
                  text="Des institutions, ONG et universités renforcent la portée, la crédibilité et la qualité de nos interventions."
                />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {partners.map((partner) => (
                    <div key={partner} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                      {partner}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle
                  eyebrow="Universités partenaires"
                  title="Des liens académiques au service de l’innovation"
                  text="La coopération avec les universités renforce la recherche-action, la formation et l’expertise."
                />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {universities.map((university) => (
                    <div key={university} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                      {university}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-950 py-20 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SectionTitle
                eyebrow="Anticorruption"
                title="Une gouvernance locale plus transparente et plus responsable"
                text="Nous accompagnons des dispositifs concrets de prévention, de suivi citoyen et de promotion de l’intégrité."
                light
              />
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {antiCorruption.map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <SectionTitle
                  eyebrow="Coordonnées"
                  title="Entrer en relation avec PRODDEKO-Belgique"
                  text="Coordonnées, message de contact et espace newsletter sont intégrés dans un espace de contact structuré et accessible."
                />
                <div className="mt-6 space-y-4 text-sm text-slate-600">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    Welkenraedt, Belgique
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    Coordination terrain : Kinzau-Mvuete, RDC
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-orange-500" />
                    contact@proddeko.online
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-orange-500" />
                    +32 488 84 46 98
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Nous écrire</div>
                <h3 className="mt-3 text-2xl font-black text-blue-950">Formulaire de contact</h3>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Nom</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                    <textarea
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full bg-blue-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-900"
                  >
                    Envoyer
                  </button>
                  {status ? <p className="text-sm text-slate-600">{status}</p> : null}
                </form>
              </div>
            </div>
          </section>

          <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border bg-white shadow-sm">
                    {logoError ? (
                      <div className="flex h-full w-full items-center justify-center bg-blue-950 text-xs font-black text-white">PB</div>
                    ) : (
                      <img src={ASSETS.logo} alt="Logo PRODDEKO" className="h-full w-full object-contain" onError={() => setLogoError(true)} />
                    )}
                  </div>
                  <div>
                    <div className="text-lg font-black text-blue-950">PRODDEKO-Belgique</div>
                    <div className="text-sm text-slate-500">Solidarité internationale • Développement durable • Gouvernance éthique</div>
                  </div>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                  PRODDEKO-Belgique agit comme une passerelle entre la Belgique, la RDC et d’autres territoires partenaires pour soutenir des actions utiles, durables et transparentes.
                </p>
              </div>

              <div>
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Coordonnées</div>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Welkenraedt, Belgique</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Kinzau-Mvuete, RDC</li>
                  <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@proddeko.online</li>
                </ul>
              </div>

              <div>
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Navigation rapide</div>
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <button onClick={() => setPage("about")} className="block transition hover:text-orange-500">À propos</button>
                  <button onClick={() => setPage("projects")} className="block transition hover:text-orange-500">Projets</button>
                  <button onClick={() => setPage("don")} className="block transition hover:text-orange-500">Faire un don</button>
                  <button onClick={() => setPage("contact-form")} className="block transition hover:text-orange-500">Contact</button>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
