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
} from "lucide-react";

const ASSETS = {
  logo: "/images/proddeko-logo.png?v=2",
  hero: "/images/proddeko-hero.jpg",
  anticorruption: "/images/proddeko-anticorruption.jpg",
  about: "/images/proddeko-about.jpg",
  projects: "/images/proddeko-projects.jpg",
  contact: "/images/proddeko-contact.jpg",
};

const navItems = [
  { label: "À propos", 
   items: [
  { label: "Qui sommes-nous", page: "about", description: "Présentation institutionnelle et positionnement", icon: Users },
  { label: "Mission", page:  "mission", description: "Vision, finalité et ambition stratégique", icon: HeartHandshake }, 
  { label: "Valeurs", page: "values", description: "Principes éthiques et référentiel d'action", icon: BookOpen },
  { label: "Gouvernance", page: "governance", description: "Organisation, pilotage et supervision", icon: BookOpen },
  { label: "Nos actions", 
   items: [
  { label: "Développement durable", page: "action-sustainable", description: "Initiatives locales et résilience communautaire", icon: Globe }, 
  { label: "Éducation citoyenne", page: "action-education", description: "Formation, sensibilisation et engagement", icon: GraduationCap },
  { label: "Gouvernance éthique", page: "action-governance", description: Redevabilité, suivi citoyen et bonne gestion", icon: ShieldCheck }, 
  { label: "Solidarité internationale", page: "action-solidarity", description: "Co-développement et mobilisation transnationale", icon: Handshake },
   ],
  },
  { label: "Anticorruption", 
   Items: [
     { label: "Transparence locale", page: "anti-transparency", description: "Suivi, budgets et accès à l'information", icon: ShieldCheck },
     { label: "Intégrité citoyenne", page: anti-integrity", description: Éthique, prévention et leadership", icon: Users },
     { label: "Outils numériques", page: "anti-tools", description: "Signalement, documentation et participation", icon: BookOpen },
     { label: "Plaidoyer", page: "anti-advocacy", description: "Dialogue public et transformation durable", icon: ArrowRight },
   ],
  },
     { 
       label: "Projets", 
       items: [
         { label: "Projets en cours", page: "projects", description: "Portefeuille d'actions et résultats visibles", icon: Globe },
         { label: "Projets à soutenir", page: "projects-support", description: "Priorités nécessitant des appuis", icon: HeartHandshake },
         { label: "Impact", page: "projects-impact", description: "Chiffres clés et portée des interventions", icon: Users }, 
         { label: "Partenaires", page: "partners", description: "Institutions, ONG et réseaux associés", icon: Handshake },
          ] 
     },
  { 
    label: "Contact", 
    items: [
      { label: "Coordonnées", page: "contact-info", description: "Présence Belgique et RDC", icon: MapPin }, 
      { label: "Formulaire", page: "contact-form", description: "Écrire à l'équipe PRODDEKO, icon: Mail },
      { label: "Newsletter"] }, page: "contact-newsletter", description: Recevoir nos actualités", icon: BookOpen },
    ] 
},
{ 

const actionCards = [
  { 
    icon: Globe, 
    title: "Développement durable", 
    text: "Appui aux initiatives locales, renforcement communautaire, transition écologique et projets à impact durable." 
  },
  { 
    icon: GraduationCap, 
    title: "Éducation citoyenne", 
    text: "Sensibilisation, formation, plaidoyer et accompagnement de jeunes et d’acteurs locaux engagés." 
  },
  { 
    icon: ShieldCheck, 
    title: "Gouvernance éthique", 
    text: "Promotion de la redevabilité, participation citoyenne et suivi communautaire des projets et services." 
  },
  { 
    icon: Handshake, 
    title: "Solidarité internationale", 
    text: "Mise en lien des dynamiques citoyennes entre la Belgique, la RDC et d’autres pays partenaires." 
  },
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
  { title: "Programme gouvernance locale", 
   text: "Renforcement des capacités citoyennes, suivi communautaire et actions de redevabilité locale en RDC.", 
   tag: "Gouvernance" 
  },
  { 
    title: "Éducation et engagement jeunesse", 
    text: "Formations, ateliers et mobilisation des jeunes pour une citoyenneté active et responsable.", 
    tag: "Éducation" 
  },
  { 
    title: "Co-développement Belgique–RDC", 
    text: "Création de passerelles entre diaspora, partenaires locaux, institutions et communautés bénéficiaires.", 
    tag: "Solidarité" },
];

Const donationTiers = [
  {
      amount: "25 €"
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
  about: {
    title: "Qui sommes-nous ?",
    eyebrow: "Présentation institutionnelle",
    text: "PRODDEKO-Belgique est une organisation engagée dans la solidarité internationale et le co-développement entre la Belgique et la RDC. Elle mobilise la diaspora, les acteurs locaux et les partenaires institutionnels pour des actions concrètes à fort impact social.",
    image: ASSETS.about,
    sections: [
      {
        title: "Positionnement",
        body: "PRODDEKO-Belgique agit comme passerelle entre les dynamiques citoyennes en Belgique et en Afrique centrale, avec un accent sur la RDC. Elle intervient dans une logique de partenariat, de co-construction et de responsabilité partagée.",
      },
      {
        title: "Publics concernés",
        body: "L’organisation s’adresse aux communautés locales, aux jeunes, aux femmes, aux acteurs associatifs, aux partenaires académiques ainsi qu’aux institutions qui souhaitent renforcer des actions utiles et durables.",
      },
      {
        title: "Valeur ajoutée",
        body: "Son ancrage à la fois diasporique, institutionnel et communautaire permet une lecture fine des besoins, une meilleure proximité avec le terrain et une articulation crédible entre vision stratégique et action concrète.",
      },
    ],
  },
  mission: {
    title: "Notre mission",
    eyebrow: "Orientation stratégique",
    text: "Promouvoir un développement durable, inclusif et participatif en renforçant les capacités locales et l’engagement citoyen.",
    image: ASSETS.hero,
    sections: [
      {
        title: "Finalité",
        body: "Contribuer à l’amélioration durable des conditions de vie à travers des projets utiles, structurants et fondés sur la dignité humaine.",
      },
      {
        title: "Méthode",
        body: "Associer les partenaires de terrain, les communautés bénéficiaires, les institutions et les experts afin de concevoir des réponses adaptées, réalistes et mesurables.",
      },
      {
        title: "Ambition",
        body: "Faire émerger des dynamiques locales plus autonomes, plus transparentes et plus résilientes, tout en renforçant les liens entre la Belgique et les territoires d’intervention.",
      },
    ],
  },
  values: {
    title: "Nos valeurs",
    eyebrow: "Référentiel d’action",
    text: "Dignité humaine, transparence, responsabilité, participation citoyenne et solidarité internationale.",
    sections: [
      { title: "Dignité", body: "Chaque action doit respecter les personnes, leurs réalités, leurs droits et leur capacité d’agir." },
      { title: "Transparence", body: "La clarté dans la gestion, l’information et la redevabilité constitue un principe central." },
      { title: "Solidarité", body: "Les projets s’inscrivent dans une logique de coopération équilibrée, sans verticalité inutile." },
    ],
  },
  governance: {
    title: "Notre gouvernance",
    eyebrow: "Organisation et pilotage",
    text: "Une structure transparente avec assemblée générale, conseil d’administration et coordination opérationnelle.",
    sections: [
      { title: "Assemblée générale", body: "Elle définit les orientations, valide les rapports et garantit la vie démocratique de l’association." },
      { title: "Conseil d’administration", body: "Il assure la supervision stratégique, le suivi des engagements et la cohérence des actions." },
      { title: "Coordination opérationnelle", body: "Elle met en œuvre les projets, anime les partenariats et veille à la qualité des interventions." },
    ],
  },
  "action-sustainable": {
    title: "Développement durable",
    eyebrow: "Axe d’intervention",
    text: "Nous soutenons des initiatives locales, des projets à impact social et environnemental, ainsi que des actions de renforcement communautaire orientées vers la durabilité.",
    image: ASSETS.projects,
    sections: [
      { title: "Approche locale", body: "Soutien à des initiatives conçues avec les communautés et adaptées aux réalités du terrain." },
      { title: "Résilience", body: "Promotion de pratiques durables et d’outils de gestion permettant de mieux faire face aux vulnérabilités." },
      { title: "Impact visé", body: "Construire des bases solides pour un développement équilibré, utile et pérenne." },
    ],
  },
  "action-education": {
    title: "Éducation citoyenne",
    eyebrow: "Axe d’intervention",
    text: "Nous développons des formations, ateliers, sensibilisations et outils pédagogiques pour encourager une citoyenneté active, responsable et inclusive.",
    sections: [
      { title: "Jeunesse", body: "Mobiliser les jeunes autour de l’engagement, de l’éthique publique et de l’action collective." },
      { title: "Pédagogie", body: "Créer des formats accessibles : ateliers, débats, rencontres, supports visuels et numériques." },
      { title: "Effets attendus", body: "Renforcer les capacités d’analyse, la participation et la culture de responsabilité." },
    ],
  },
  "action-governance": {
    title: "Gouvernance éthique",
    eyebrow: "Axe d’intervention",
    text: "Nos actions promeuvent la redevabilité, la bonne gestion, la participation communautaire et le suivi citoyen des projets et services publics.",
    sections: [
      { title: "Suivi citoyen", body: "Outiller les acteurs pour suivre les ressources, les engagements et les résultats." },
      { title: "Redevabilité", body: "Encourager une culture de gestion responsable et de transparence dans l’action publique et associative." },
      { title: "Dialogue", body: "Créer des espaces d’échanges entre communautés, relais locaux et partenaires." },
    ],
  },
  "action-solidarity": {
    title: "Solidarité internationale",
    eyebrow: "Axe d’intervention",
    text: "Nous favorisons les liens entre diasporas, communautés locales, institutions et partenaires afin de soutenir des projets utiles entre la Belgique, la RDC et d’autres pays partenaires.",
    sections: [
      { title: "Passerelles", body: "Créer des connexions efficaces entre expertise, engagement citoyen et besoins locaux." },
      { title: "Co-développement", body: "Promouvoir une logique de partenariat équilibré et durable entre les territoires." },
      { title: "Mobilisation", body: "Fédérer des soutiens institutionnels, associatifs et citoyens autour d’initiatives concrètes." },
    ],
  },
  "anti-transparency": {
    title: "Transparence locale",
    eyebrow: "Anticorruption",
    text: "Nous accompagnons la mise en place de pratiques de transparence budgétaire, de suivi communautaire et de contrôle citoyen au niveau local.",
    sections: [
      { title: "Budgets", body: "Lecture simplifiée, suivi et compréhension des ressources affectées aux actions et services." },
      { title: "Participation", body: "Implication des citoyens et bénéficiaires dans le regard porté sur les projets." },
      { title: "Visibilité", body: "Améliorer l’accès à l’information utile pour renforcer la confiance et la redevabilité." },
    ],
  },
  "anti-integrity": {
    title: "Intégrité citoyenne",
    eyebrow: "Anticorruption",
    text: "Des ateliers, formations et espaces de dialogue sont proposés pour renforcer l’éthique, la responsabilité et le rejet des pratiques de corruption.",
    sections: [
      { title: "Sensibilisation", body: "Informer sur les mécanismes de corruption, leurs effets et les comportements alternatifs." },
      { title: "Prévention", body: "Renforcer une culture d’intégrité dès les espaces citoyens et communautaires." },
      { title: "Leadership", body: "Soutenir des relais capables de porter une parole crédible et exemplaire." },
    ],
  },
  "anti-tools": {
    title: "Outils numériques",
    eyebrow: "Anticorruption",
    text: "Nous encourageons l’usage d’outils numériques participatifs pour le signalement, l’information citoyenne et le suivi des engagements publics.",
    sections: [
      { title: "Signalement", body: "Faciliter la remontée d’informations utiles dans un cadre responsable et structuré." },
      { title: "Documentation", body: "Mieux conserver, organiser et diffuser les données utiles au suivi citoyen." },
      { title: "Accessibilité", body: "Utiliser des outils simples, adaptés et compréhensibles par les publics concernés." },
    ],
  },
  "anti-advocacy": {
    title: "Plaidoyer",
    eyebrow: "Anticorruption",
    text: "Le plaidoyer de PRODDEKO-Belgique vise à faire remonter les besoins des communautés et à défendre une gouvernance plus juste, transparente et inclusive.",
    sections: [
      { title: "Voix des communautés", body: "Faire entendre les besoins et préoccupations des bénéficiaires auprès des acteurs concernés." },
      { title: "Dialogue institutionnel", body: "Favoriser une meilleure prise en compte des réalités de terrain dans les décisions." },
      { title: "Transformation", body: "Promouvoir des pratiques plus responsables, plus éthiques et plus efficaces." },
    ],
  },
  projects: {
    title: "Projets en cours",
    eyebrow: "Portefeuille d’actions",
    text: "PRODDEKO-Belgique développe des projets structurants qui répondent aux besoins locaux et s’inscrivent dans une logique de transformation durable.",
    image: ASSETS.projects,
    sections: [
      {
        title: "Projets actifs",
        body: "Programmes de gouvernance locale, initiatives d’éducation citoyenne et actions de co-développement entre la Belgique et la RDC sont actuellement en cours de mise en œuvre."
      },
      {
        title: "Objectifs",
        body: "Renforcer les capacités des communautés, promouvoir la transparence, soutenir l’engagement citoyen et améliorer les conditions de vie de manière durable."
      },
      {
        title: "Méthode",
        body: "Une approche basée sur la co-construction avec les bénéficiaires, le partenariat avec des acteurs locaux et un suivi régulier des activités et résultats."
      },
      {
        title: "Résultats attendus",
        body: "Des communautés plus autonomes, une meilleure gouvernance locale, une participation citoyenne renforcée et des dynamiques de développement pérennes."
      }
    ]
  },
  "projects-support": {
    title: "Projets à soutenir",
    eyebrow: "Mobilisation des partenaires",
    text: "Cette rubrique met en avant les projets prioritaires qui nécessitent l’appui de partenaires, de bailleurs, de volontaires ou de donateurs.",
    sections: [
      { title: "Financement", body: "Appui financier à des activités à fort potentiel de transformation sociale." },
      { title: "Expertise", body: "Mobilisation d’experts, de formateurs ou de partenaires techniques sur des besoins ciblés." },
      { title: "Réseaux", body: "Mise en relation avec des structures capables de renforcer la portée des projets." },
    ],
  },
  "projects-impact": {
    title: "Notre impact",
    eyebrow: "Résultats et portée",
    text: "PRODDEKO-Belgique génère un impact mesurable et durable grâce à des actions ancrées dans les réalités locales.",
    image: ASSETS.projects,
    sections: [
      {
        title: "Chiffres clés",
        body: "Plus de 200 000 bénéficiaires directs, plus de 10 zones d’intervention et un réseau solide de partenaires."
      },
      {
        title: "Portée géographique",
        body: "Présence en RDC et en Europe avec des projets de co-développement structurants."
      },
      {
        title: "Bénéficiaires",
        body: "Jeunes, femmes, acteurs locaux et institutions renforcés à travers des actions concrètes."
      },
      {
        title: "Qualité des résultats",
        body: "Suivi rigoureux, indicateurs d’impact et transparence dans la mise en œuvre."
      }
    ]
  },
  partners: {
    title: "Partenaires et réseaux",
    eyebrow: "Écosystème institutionnel",
    text: "Un réseau solide d’institutions, ONG et universités soutient l’action de PRODDEKO-Belgique.",
    sections: [
      {
        title: "Institutions",
        body: "Fondation Roi Baudouin, ENABEL, UNOPS et partenaires publics renforcent la crédibilité institutionnelle."
      },
      {
        title: "ONG et réseaux",
        body: "Collaborations avec Caritas, CNCD–11.11.11 et autres réseaux pour amplifier l’impact."
      },
      {
        title: "Universités",
        body: "Partenariats académiques avec ULiège, UCLouvain et universités congolaises."
      },
      {
        title: "Type de collaboration",
        body: "Co-construction, expertise, financement et mise en réseau pour des projets durables."
      }
    ]
  },
  "contact-info": {
    title: "Coordonnées",
    eyebrow: "Entrer en relation",
    text: "Welkenraedt en Belgique et Kinzau-Mvuete en RDC constituent deux points de référence pour le dialogue avec les partenaires, les bénéficiaires et les institutions.",
    sections: [
      { title: "Belgique", body: "Un ancrage utile pour la coordination, les partenariats et la visibilité institutionnelle." },
      { title: "RDC", body: "Une proximité avec les réalités de terrain et les dynamiques communautaires." },
      { title: "Disponibilité", body: "L’équipe reste accessible pour toute demande sérieuse d’information ou de collaboration." },
    ],
  },
  "contact-form": {
    title: "Formulaire de contact",
    eyebrow: "Demande d’information",
    text: "Le formulaire permet aux visiteurs d’envoyer un message directement à l’équipe PRODDEKO-Belgique pour toute demande d’information, de partenariat ou d’accompagnement.",
    sections: [
      { title: "Partenariats", body: "Prendre contact pour discuter d’une collaboration institutionnelle, technique ou associative." },
      { title: "Information", body: "Demander des précisions sur les axes d’action, projets ou modalités d’engagement." },
      { title: "Réactivité", body: "L’équipe s’efforce de répondre dans des délais raisonnables et avec clarté." },
    ],
  },
  "contact-newsletter": {
    title: "Newsletter",
    eyebrow: "Suivre nos actualités",
    text: "La newsletter permet de suivre les actualités de PRODDEKO-Belgique, ses projets, ses partenariats et ses actions de plaidoyer.",
    sections: [
      { title: "Informations utiles", body: "Recevoir les principales nouvelles concernant les projets et initiatives en cours." },
      { title: "Visibilité", body: "Mieux faire connaître les actions menées et leurs résultats." },
      { title: "Lien durable", body: "Conserver un contact régulier avec les partenaires, sympathisants et soutiens." },
    ],
  },
  don: {
    title: "Faire un don",
    eyebrow: "Soutenir l’action",
    text: "Votre soutien permet de financer des actions concrètes, durables et utiles au bénéfice des communautés accompagnées par PRODDEKO-Belgique.",
    sections: [
      { title: "Utilité", body: "Chaque contribution soutient des actions réelles, ciblées et à fort impact social." },
      { title: "Confiance", body: "Les dons s’inscrivent dans une logique de responsabilité, de suivi et de cohérence avec la mission." },
      { title: "Partenariat", body: "Donner, c’est aussi rejoindre une dynamique de solidarité active et durable." },
    ],
  },
};

function MenuItem({ label, items, onSelect }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-orange-600">
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>

      <div className="invisible absolute left-1/2 top-full z-30 mt-4 w-[560px] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-6 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
        <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <div className="text-sm font-black text-blue-950">{label}</div>
            <div className="text-xs text-slate-500">Explorez les sous-rubriques de cette section</div>
          </div>
          <div className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">Navigation</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => {
            const Icon = item.icon || ChevronDown;
            return (
              <button
                key={item.page}
                onClick={() => onSelect(item.page)}
                className="flex items-start gap-3 rounded-2xl p-4 text-left transition hover:bg-slate-50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-950">{item.label}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-500">{item.description}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
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
    } catch {
      setStatus("Erreur réseau ❌");
    }
  };

  const renderPage = () => {
  // ✅ IMPORTANT : ne rien afficher pour l'accueil
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

  
