import React, { useEffect, useRef, useState } from "react";
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
  hero: "/images/proddeko-hero.jpg",
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

  "contact-form": {
    eyebrow: "Contact",
    title: "Formulaire de contact",
    text: "Écrivez-nous directement pour une prise de contact, un partenariat ou une demande d’information.",
    cards: [
      {
        title: "Équipe",
        body: "Notre équipe traite les demandes institutionnelles, partenariales et citoyennes dans les meilleurs délais.",
      },
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

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      <div
        className={`text-sm font-bold uppercase tracking-[0.22em] ${
          light ? "text-orange-300" : "text-orange-500"
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`mt-3 text-3xl font-black tracking-tight md:text-4xl ${
          light ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-5 text-lg leading-8 ${
            light ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}

function MenuGroup({ group, activeMenu, setActiveMenu, setPage }) {
  const wrapperRef = useRef(null);
  const openTimeoutRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const isOpen = activeMenu === group.label;

  const clearTimers = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openMenu = () => {
    clearTimers();
    openTimeoutRef.current = setTimeout(() => {
      setActiveMenu(group.label);
    }, 60);
  };

  const closeMenu = () => {
    clearTimers();
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu((current) => (current === group.label ? null : current));
    }, 220);
  };

  const toggleMenu = () => {
    clearTimers();
    setActiveMenu((current) => (current === group.label ? null : group.label));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target)) {
        setActiveMenu((current) => (current === group.label ? null : current));
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveMenu((current) => (current === group.label ? null : current));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      clearTimers();
    };
  }, [group.label, setActiveMenu]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <button
        type="button"
        onClick={toggleMenu}
        onFocus={openMenu}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold transition ${
          isOpen
            ? "bg-slate-100 text-blue-950"
            : "text-slate-700 hover:bg-slate-50 hover:text-orange-600"
        }`}
      >
        {group.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen ? (
        <div className="absolute left-1/2 top-full z-30 mt-1 w-[620px] -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.16)]">
            <div className="grid grid-cols-[1.1fr_0.9fr]">
              <div className="p-6">
                <div className="mb-4 border-b border-slate-100 pb-4">
                  <div className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">
                    {group.label}
                  </div>
                  <div className="mt-2 text-2xl font-black tracking-tight text-blue-950">
                    Navigation stratégique
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.page}
                        type="button"
                        onClick={() => {
                          setPage(item.page);
                          setActiveMenu(null);
                        }}
                        onFocus={openMenu}
                        className="flex items-start gap-4 rounded-[1.25rem] bg-slate-50/70 p-4 text-left transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-blue-950">
                            {item.label}
                          </div>
                          <div className="mt-1 text-xs leading-5 text-slate-500">
                            {item.page}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-950 via-slate-950 to-orange-950 p-6 text-white">
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-orange-200">
                  {SITE.name}
                </div>
                <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight">
                  Une action institutionnelle ancrée dans les territoires
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  Nos programmes articulent gouvernance, participation citoyenne,
                  innovation sociale et partenariats durables entre la Belgique et la RDC.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function StandardPage({ content }) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle eyebrow={content.eyebrow} title={content.title} text={content.text} />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {content.cards.map((card, i) => (
          <div
            key={`${card.title}-${i}`}
            className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
          >
            <h3 className="text-xl font-black tracking-tight text-blue-950">
              {card.title}
            </h3>
            <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActionPage({ content }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle eyebrow={content.eyebrow} title={content.title} text={content.text} />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {content.metrics.map((item) => (
          <div key={item.label} className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-3xl font-black text-orange-500">{item.value}</div>
            <div className="mt-2 text-sm text-slate-600">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {content.cards.map((card, i) => (
          <div key={`${card.title}-${i}`} className="rounded-3xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-blue-950">{card.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{card.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] border bg-white p-8 shadow-sm">
        <h3 className="text-xl font-black text-blue-950">Informations complémentaires</h3>
        <div className="mt-6 grid gap-4 text-sm md:grid-cols-2 xl:grid-cols-4">
          {content.details.map((item) => (
            <div key={item} className="rounded-xl bg-slate-50 p-4 text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function KilengiProjectSection() {
  return (
    <section id="projet-kilengi" className="py-16">
      <div className="grid gap-7 lg:grid-cols-[1.8fr_0.9fr]">
        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-black tracking-tight text-blue-950">
              Projet : Centre de Santé de Référence de Kilengi
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Réhabilitation d’un système solaire installé en 2019. Aujourd’hui,
              les 20 batteries sont hors d’usage. Le projet vise la remise en
              service complète avec une solution durable pour sécuriser
              l’alimentation électrique du centre de santé.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-black tracking-tight text-blue-950">
              Contexte
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Le système solaire assurait l’alimentation des services essentiels :
              accueil, médecine, éclairage, équipements prioritaires et pompage.
              Après plusieurs années d’exploitation, le parc batteries est arrivé
              en fin de vie et nécessite un remplacement ou une modernisation
              par une solution lithium.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-black tracking-tight text-blue-950">
              Schéma électrique du système
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Le schéma ci-dessous présente l’architecture recommandée :
              panneaux solaires, régulateur MPPT, onduleur/chargeur hybride,
              protections AC/DC et banque de batteries lithium 48V.
            </p>

            <figure className="mt-6">
              <img
                src="/schema-kilengi.png"
                alt="Schéma électrique du système solaire hybride du Centre de Santé de Kilengi"
                loading="lazy"
                className="block w-full rounded-3xl border border-slate-200 bg-white p-3 shadow-sm"
              />
              <figcaption className="mt-3 text-sm text-slate-500">
                Schéma de principe du système solaire hybride recommandé pour la
                remise en service du site.
              </figcaption>
            </figure>
          </div>
        </div>

        <aside className="grid gap-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-black text-blue-950">
              Éléments principaux
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Panneaux solaires : environ 3 kWc</li>
              <li>Régulateur de charge MPPT</li>
              <li>Onduleur / chargeur hybride 5 kVA</li>
              <li>Banque de batteries lithium ~20 kWh</li>
              <li>Protections AC/DC et mise à la terre</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-black text-blue-950">
              Demande actuelle
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Renouvellement des 20 batteries hors d’usage</li>
              <li>Étude comparative avec solution lithium</li>
              <li>Remise en service sécurisée du système</li>
            </ul>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-slate-950 to-emerald-800 p-7 text-white shadow-sm">
            <h3 className="text-lg font-black">Recommandation</h3>
            <p className="mt-4 text-sm leading-7 text-slate-100">
              Opter pour une solution lithium LiFePO4, plus durable, avec
              protections adaptées et contrôle du système pour sécuriser
              l’alimentation des services de santé.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
        function KilengiProjectSection() {
  return (
    <section id="projet-kilengi" className="py-16">
      <div className="grid gap-7 lg:grid-cols-[1.8fr_0.9fr]">
        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-black tracking-tight text-blue-950">
              Projet : Centre de Santé de Référence de Kilengi
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Réhabilitation d’un système solaire installé en 2019. Aujourd’hui,
              les 20 batteries sont hors d’usage. Le projet vise la remise en
              service complète avec une solution durable pour sécuriser
              l’alimentation électrique du centre de santé.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-black tracking-tight text-blue-950">
              Contexte
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Le système solaire assurait l’alimentation des services essentiels :
              accueil, médecine, éclairage, équipements prioritaires et pompage.
              Après plusieurs années d’exploitation, le parc batteries est arrivé
              en fin de vie et nécessite un remplacement ou une modernisation
              par une solution lithium.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-black tracking-tight text-blue-950">
              Schéma électrique du système
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              Le schéma ci-dessous présente l’architecture recommandée :
              panneaux solaires, régulateur MPPT, onduleur/chargeur hybride,
              protections AC/DC et banque de batteries lithium 48V.
            </p>

            <figure className="mt-6">
              <img
                src="/schema-kilengi.png"
                alt="Schéma électrique du système solaire hybride du Centre de Santé de Kilengi"
                loading="lazy"
                className="block w-full rounded-3xl border border-slate-200 bg-white p-3 shadow-sm"
              />
              <figcaption className="mt-3 text-sm text-slate-500">
                Schéma de principe du système solaire hybride recommandé pour la remise en service du site.
              </figcaption>
            </figure>
          </div>
        </div>

        <aside className="grid gap-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-black text-blue-950">
              Éléments principaux
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Panneaux solaires : environ 3 kWc</li>
              <li>Régulateur de charge MPPT</li>
              <li>Onduleur / chargeur hybride 5 kVA</li>
              <li>Banque de batteries lithium ~20 kWh</li>
              <li>Protections AC/DC et mise à la terre</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-black text-blue-950">
              Demande actuelle
            </h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Renouvellement des 20 batteries hors d’usage</li>
              <li>Étude comparative avec solution lithium</li>
              <li>Remise en service sécurisée du système</li>
            </ul>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-slate-950 to-emerald-800 p-7 text-white shadow-sm">
            <h3 className="text-lg font-black">Recommandation</h3>
            <p className="mt-4 text-sm leading-7 text-slate-100">
              Opter pour une solution lithium LiFePO4, plus durable, avec
              protections adaptées et contrôle du système pour sécuriser
              l’alimentation des services de santé.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

        <aside className="grid gap-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-black text-blue-950">Éléments principaux</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Panneaux solaires : environ 3 kWc</li>
              <li>Régulateur de charge MPPT</li>
              <li>Onduleur / chargeur hybride 5 kVA</li>
              <li>Banque de batteries lithium ~20 kWh</li>
              <li>Protections AC/DC et mise à la terre</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <h3 className="text-lg font-black text-blue-950">Demande actuelle</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
              <li>Renouvellement des 20 batteries hors d’usage</li>
              <li>Étude comparative avec solution lithium</li>
              <li>Remise en service sécurisée du système</li>
            </ul>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-slate-950 to-emerald-800 p-7 text-white shadow-sm">
            <h3 className="text-lg font-black">Recommandation</h3>
            <p className="mt-4 text-sm leading-7 text-slate-100">
              Opter pour une solution lithium LiFePO4, plus durable, avec
              protections adaptées et contrôle du système pour sécuriser
              l’alimentation des services de santé.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const currentContent = pageContent[page] || null;
  const topNav = navItems;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Ouverture de votre messagerie...");
    const subject = encodeURIComponent("Contact PRODDEKO-Belgique");
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const renderPage = () => {
    if (page === "home") return null;

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
            {[
              {
                title: "Programme gouvernance locale",
                text: "Renforcement des capacités citoyennes, suivi communautaire et dispositifs de redevabilité.",
                tag: "Gouvernance",
              },
              {
                title: "Éducation et engagement jeunesse",
                text: "Formations, ateliers et mobilisation des jeunes pour une citoyenneté active et responsable.",
                tag: "Éducation",
              },
              {
                title: "Co-développement Belgique–RDC",
                text: "Passerelles entre diaspora, partenaires locaux, institutions et communautés bénéficiaires.",
                tag: "Solidarité",
              },
            ].map((p) => (
              <div key={p.title} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="text-xs font-bold uppercase text-orange-500">{p.tag}</div>
                <h3 className="mt-3 text-xl font-bold text-blue-950">{p.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{p.text}</p>
                <button
                  type="button"
                  onClick={() => handlePageChange("don")}
                  className="mt-5 rounded-full bg-orange-500 px-4 py-2 text-sm text-white"
                >
                  Soutenir
                </button>
              </div>
            ))}
          </div>

          <KilengiProjectSection />
        </div>
      );
    }

    if (page === "don") {
      return (
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Soutenir"
            title="Faire un don pour un impact concret"
            text="Votre contribution soutient des actions utiles, traçables et durables au service des communautés accompagnées par PRODDEKO-Belgique."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-950 via-slate-950 to-orange-950 p-8 text-white shadow-2xl">
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-orange-200">
                Paiement sécurisé
              </div>
              <h3 className="mt-5 text-3xl font-black tracking-tight">
                Soutenir PRODDEKO-Belgique en toute confiance
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                Vos contributions peuvent être effectuées par virement bancaire,
                avec des coordonnées institutionnelles vérifiées.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange-200">
                    IBAN
                  </div>
                  <div className="mt-2 text-lg font-bold">{SITE.iban}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange-200">
                    BIC
                  </div>
                  <div className="mt-2 text-lg font-bold">{SITE.bic}</div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange-200">
                  Nom du compte
                </div>
                <div className="mt-2 text-base font-semibold leading-7">
                  {SITE.accountName}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${SITE.email}?subject=Don%20PRODDEKO`}
                  className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Confirmer mon don
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
                Don rapide
              </div>
              <h3 className="mt-3 text-2xl font-black text-blue-950">
                Choisir un niveau de contribution
              </h3>

              <div className="mt-8 space-y-4">
                {donationTiers.map((tier) => (
                  <div
                    key={tier.title}
                    className="rounded-2xl border border-slate-200 p-5 transition hover:border-orange-200 hover:shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-2xl font-black text-orange-500">
                          {tier.amount}
                        </div>
                        <h4 className="mt-1 text-lg font-bold text-blue-950">
                          {tier.title}
                        </h4>
                      </div>
                      <a
                        href={`mailto:${SITE.email}?subject=Don%20PRODDEKO%20-${encodeURIComponent(
                          tier.amount
                        )}`}
                        className="rounded-full bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900"
                      >
                        Donner
                      </a>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {tier.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (
      page === "action-sustainable" ||
      page === "action-education" ||
      page === "action-governance" ||
      page === "action-solidarity"
    ) {
      return <ActionPage content={currentContent} />;
    }

    if (currentContent) {
      return <StandardPage content={currentContent} />;
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <button
            type="button"
            onClick={() => handlePageChange("home")}
            className="flex min-w-0 items-center gap-4 text-left"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-white shadow-sm">
              <img
                src={SITE.logo}
                alt="Logo PRODDEKO"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="text-xl font-extrabold tracking-tight text-blue-950">
                {SITE.name}
              </div>
              <div className="hidden text-sm text-slate-600 md:block">
                {SITE.tagline}
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
            <button
              type="button"
              onClick={() => handlePageChange("home")}
              className="text-sm font-semibold text-slate-700 transition hover:text-orange-600"
            >
              Accueil
            </button>

            {topNav.map((group) => (
              <MenuGroup
                key={group.label}
                group={group}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                setPage={handlePageChange}
              />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <button
              type="button"
              onClick={() => handlePageChange("contact-form")}
              className="hidden rounded-full border border-blue-950 px-5 py-2 text-sm font-semibold text-blue-950 transition hover:bg-blue-50 md:block"
            >
              Nous contacter
            </button>

            <button
              type="button"
              onClick={() => handlePageChange("don")}
              className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
            >
              Faire un don
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="space-y-4 px-6 py-5">
              <button
                type="button"
                onClick={() => handlePageChange("home")}
                className="block w-full text-left text-sm font-semibold text-slate-700"
              >
                Accueil
              </button>

              {topNav.map((group) => (
                <div key={group.label} className="rounded-2xl border border-slate-200 p-4">
                  <div className="mb-3 text-sm font-black text-blue-950">{group.label}</div>
                  <div className="space-y-2">
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.page}
                          type="button"
                          onClick={() => handlePageChange(item.page)}
                          className="flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition hover:bg-slate-50"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="text-sm font-semibold text-slate-800">
                            {item.label}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      {renderPage() || (
        <>
          <section className="relative overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0">
              <img
                src={SITE.hero}
                alt={SITE.name}
                className="h-full w-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-slate-950/70 to-orange-950/70" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-slate-100 backdrop-blur">
                    Belgique • RDC • Co-développement • Gouvernance éthique
                  </div>

                  <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                    Une action institutionnelle durable entre territoires, citoyens et partenaires
                  </h1>

                  <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">
                    PRODDEKO-Belgique agit comme un pont entre la Belgique et la RDC
                    pour renforcer la dignité humaine, la gouvernance responsable,
                    la participation citoyenne et des dynamiques locales de transformation durable.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => handlePageChange("projects")}
                      className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                    >
                      Découvrir nos programmes
                    </button>

                    <button
                      type="button"
                      onClick={() => handlePageChange("financing")}
                      className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                    >
                      Appel à financement
                    </button>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur"
                    >
                      <div className="text-3xl font-black text-orange-300 md:text-5xl">
                        {stat.value}
                      </div>
                      <div className="mt-3 text-lg text-slate-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white">
            <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-2 lg:px-8 xl:grid-cols-4">
              {[
                { value: "200 000+", label: "bénéficiaires directs" },
                { value: "25+", label: "initiatives et projets soutenus" },
                { value: "8+", label: "partenaires stratégiques" },
                { value: "2 continents", label: "ancrage Belgique–Afrique" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm"
                >
                  <div className="text-3xl font-black text-orange-500">{item.value}</div>
                  <div className="mt-2 text-sm text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
                <img
                  src={SITE.hero}
                  alt="Présentation PRODDEKO"
                  className="h-full min-h-[420px] w-full object-cover"
                />
              </div>

              <div>
                <SectionTitle
                  eyebrow="Qui nous sommes"
                  title="Une ONG de co-développement ancrée entre la Belgique et la RDC"
                  text="PRODDEKO-Belgique mobilise la diaspora, les partenaires institutionnels, les acteurs locaux et les communautés pour concevoir des interventions durables, participatives et orientées résultats."
                />

                <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    L’organisation agit comme une interface stratégique entre territoires,
                    savoirs locaux, innovation sociale et coopération internationale.
                    Elle privilégie des réponses co-construites, adaptées aux réalités locales
                    et alignées sur les principes de transparence, de redevabilité et d’impact durable.
                  </p>

                  <p>
                    Son action couvre la gouvernance éthique, l’éducation citoyenne,
                    le développement durable, la solidarité internationale et l’appui
                    aux initiatives communautaires.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() => handlePageChange("about")}
                    className="rounded-full bg-blue-950 px-6 py-3 text-sm font-bold text-white"
                  >
                    Lire la présentation institutionnelle
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePageChange("mission")}
                    className="rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700"
                  >
                    Notre mission
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SectionTitle
                eyebrow="Nos programmes"
                title="Des actions complémentaires au service du bien commun"
                text="PRODDEKO-Belgique déploie des programmes structurés, suivis et documentés, inspirés d’une logique cadre bailleur et d’une forte appropriation territoriale."
              />

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {actionCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <button
                      key={card.title}
                      type="button"
                      onClick={() => handlePageChange(card.page)}
                      className="rounded-[2rem] border border-slate-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                            <Icon className="h-6 w-6" />
                          </div>

                          <div>
                            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                              Programme {String(i + 1).padStart(2, "0")}
                            </div>
                            <h3 className="mt-2 text-2xl font-black text-blue-950">
                              {card.title}
                            </h3>
                          </div>
                        </div>

                        <ArrowRight className="h-5 w-5 shrink-0 text-slate-400" />
                      </div>

                      <p className="mt-5 text-sm leading-7 text-slate-600">
                        {card.text}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div>
                <SectionTitle
                  eyebrow="Impact et résultats"
                  title="Des résultats visibles, suivis et documentés"
                  text="L’organisation privilégie une approche orientée résultats, fondée sur des indicateurs, des mécanismes de suivi et une lecture territoriale de l’impact."
                />

                <div className="mt-8 space-y-4">
                  {[
                    "Portée géographique entre Belgique, RDC et réseaux partenaires",
                    "Bénéficiaires directs et indirects suivis dans la durée",
                    "Dispositifs de gouvernance, formation et accompagnement déployés",
                    "Approche traçable, participative et compatible avec les exigences bailleurs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                      <span className="text-sm leading-6 text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {[
                  {
                    title: "Portée géographique",
                    text: "Présence en Belgique, ancrage en RDC et coopération avec des réseaux en Afrique et en Europe.",
                  },
                  {
                    title: "Bénéficiaires cibles",
                    text: "Jeunes, femmes, communautés locales, organisations citoyennes, autorités locales et diaspora engagée.",
                  },
                  {
                    title: "Qualité des résultats",
                    text: "Actions suivies, capitalisées et pensées pour produire des effets concrets, mesurables et reproductibles.",
                  },
                  {
                    title: "Logique bailleur",
                    text: "Objectifs, résultats, indicateurs, partenaires, budget et redevabilité intégrés dans les programmes.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                  >
                    <h3 className="text-xl font-black text-blue-950">{card.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-blue-950 py-20 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SectionTitle
                eyebrow="Territoires d’intervention"
                title="Une présence multi-territoriale entre ancrage local et ouverture internationale"
                text="Nos actions se déploient dans plusieurs provinces de la RDC ainsi qu’en Belgique, en Europe et en Afrique centrale."
                light
              />

              <div className="mt-10 flex flex-wrap gap-3">
                {territories.map((territory) => (
                  <span
                    key={territory}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100"
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
                  eyebrow="Partenaires et réseau"
                  title="Un écosystème de coopération stratégique"
                  text="Des institutions, ONG et universités renforcent la portée, la crédibilité et la qualité de nos interventions."
                />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {partners.map((partner) => (
                    <div
                      key={partner}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle
                  eyebrow="Universités partenaires"
                  title="Recherche, formation et innovation au service de l’action"
                  text="La coopération académique renforce la recherche-action, la capitalisation, la formation et l’expertise."
                />
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {universities.map((university) => (
                    <div
                      key={university}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                    >
                      {university}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-950 via-slate-950 to-orange-950 py-20 text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <SectionTitle
                    eyebrow="Soutenir / financer"
                    title="Soutenir des actions concrètes, durables et traçables"
                    text="PRODDEKO-Belgique recherche des partenaires financiers, philanthropiques et citoyens désireux d’appuyer des programmes à fort impact territorial."
                    light
                  />
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => handlePageChange("don")}
                      className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white"
                    >
                      Faire un don
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePageChange("financing")}
                      className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white"
                    >
                      Voir l’appel à financement
                    </button>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-200">
                    Coordonnées bancaires
                  </div>
                  <div className="mt-5 space-y-3 text-sm text-slate-100">
                    <div>
                      <strong>IBAN :</strong> {SITE.iban}
                    </div>
                    <div>
                      <strong>BIC :</strong> {SITE.bic}
                    </div>
                    <div>
                      <strong>Compte :</strong> {SITE.accountName}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionTitle
              eyebrow="Entrer en relation"
              title="Contacter PRODDEKO-Belgique"
              text="Coordonnées, message de contact et orientation donateur/partenaire dans un espace clair, accessible et professionnel."
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    {SITE.belgiumLocation}
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-orange-500" />
                    Coordination terrain : {SITE.drcLocation}
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-orange-500" />
                    {SITE.email}
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-orange-500" />
                    {SITE.phone}
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
                  Nous écrire
                </div>
                <h3 className="mt-3 text-2xl font-black text-blue-950">
                  Formulaire de contact
                </h3>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Nom
                    </label>
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
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      E-mail
                    </label>
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
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Message
                    </label>
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
                    <img
                      src={SITE.logo}
                      alt="Logo PRODDEKO"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-black text-blue-950">{SITE.name}</div>
                    <div className="text-sm text-slate-500">{SITE.tagline}</div>
                  </div>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                  PRODDEKO-Belgique agit comme une passerelle entre la Belgique, la RDC
                  et d’autres territoires partenaires pour soutenir des actions utiles,
                  durables et transparentes.
                </p>
              </div>

              <div>
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
                  Coordonnées
                </div>
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {SITE.belgiumLocation}
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {SITE.drcLocation}
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> {SITE.email}
                  </li>
                </ul>
              </div>

              <div>
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
                  Navigation rapide
                </div>
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <button
                    type="button"
                    onClick={() => handlePageChange("about")}
                    className="block transition hover:text-orange-500"
                  >
                    À propos
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePageChange("projects")}
                    className="block transition hover:text-orange-500"
                  >
                    Projets
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePageChange("don")}
                    className="block transition hover:text-orange-500"
                  >
                    Faire un don
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePageChange("contact-form")}
                    className="block transition hover:text-orange-500"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
