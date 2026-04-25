import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronDown,
  Download,
  Droplets,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  Globe,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Image as ImageIcon,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
  Wrench,
  X,
  Zap,
  ZoomIn,
} from "lucide-react";

const SITE = {
  name: "PRODDEKO-Belgique",
  tagline: "Solidarité internationale • Développement durable • Gouvernance éthique",
  email: "admin@proddeko.online",
  phone: "+32 488 84 46 98",
  iban: "BE52 0341 7896 9409",
  bic: "GEBABEBB",
  accountName: "PRODDEKO PROGRAMMES DE DEVELOPPEMENT DURABLE",
  belgiumLocation: "Welkenraedt, Belgique",
  drcLocation: "Kinzau-Mvuete, RDC",
  logo: "/images/proddeko-logo.png",
};

const DOCS = {
  activityReport2022: "/docs/rapport-activites-2022-fsdi-clodik.pdf",
};

function makeImagePaths(folder, prefix, count, extension = "jpg", start = 1) {
  return Array.from({ length: count }, (_, index) => {
    const number = String(start + index).padStart(2, "0");
    return `${folder}/${prefix}-${number}.${extension}`;
  });
}

function makeCustomImagePaths(folder, prefix, numbers, extension = "jpg") {
  return numbers.map((number) => {
    const formatted = String(number).padStart(2, "0");
    return `${folder}/${prefix}-${formatted}.${extension}`;
  });
}

const KILENGI = {
  title: "Réhabilitation du Centre de Santé de Référence de Kilengi",
  subtitle:
    "Réhabilitation énergétique, sécurisation de l’alimentation électrique et valorisation documentaire du chantier.",
  hero: "/images/projects/kilengi/CS-Kilengi_avril-22_1.jpeg",
  schema: "/schema-kilengi.png",
  reportPdf: "/docs/CS-Kilengi_Rapport_photos.pdf",
  budgetDocument: "/images/projects/kilengi/CS-Kilengi_Cout-total-activites.png",
  before: makeImagePaths("/images/projects/kilengi/before", "kilengi-avant", 3, "jpg"),
  during: [
    "/images/projects/kilengi/CS-Kilengi_avril-22_1.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_01.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_2.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_3-2.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_4-2.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_5.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_6.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_7-2.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_9-2.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_11.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_12.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_13.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_14.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_15.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_16.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_17-2.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_18.jpeg",
  ],
  after: makeImagePaths("/images/projects/kilengi/after", "kilengi-apres", 6, "png"),
};

const BOMA = {
  title: "Projet maraîcher et irrigation communautaire de Boma",
  subtitle:
    "Appui aux maraîchers, organisation communautaire et amélioration durable de l’accès à l’eau pour la production locale.",
  hero: "/images/projects/boma/boma-01.jpg",
  gallery: [
    "/images/projects/boma/boma-01.jpg",
    "/images/projects/boma/boma-02.jpg",
    "/images/projects/boma/boma-03.jpg",
    "/images/projects/boma/boma-04.jpg",
    "/images/projects/boma/boma-05.jpg",
    "/images/projects/boma/boma-06.jpg",
    "/images/projects/boma/boma-07.jpg",
    "/images/projects/boma/boma-08.jpg",
  ],
  schema: "/images/projects/boma/boma-croquis-irrigation.jpg",
};

const JPN95 = {
  menuLabel: "JPN95 — Souveraineté agricole",
  title: "JPN95 Kongo Central — Fertiliser autrement pour la souveraineté agricole",
  subtitle:
    "Face à la hausse du prix des engrais chimiques, aux tensions internationales et aux fragilités agricoles en RDC, PRODDEKO-Belgique porte un pilote de fertilisant naturel à base d’eau de mer pour renforcer les rendements, les revenus ruraux et la résilience des petits exploitants.",
  docs: [
    { title: "Dossier de candidature FID", href: "/docs/jpn95-dossier-candidature-fid.pdf", icon: FileText },
    { title: "Éligibilité FID", href: "/docs/jpn95-eligibilite-fid.pdf", icon: FileText },
    { title: "Organisation candidate", href: "/docs/jpn95-organisation-candidate.pdf", icon: FileText },
    { title: "Budget prévisionnel", href: "/docs/jpn95-budget.xlsx", icon: FileSpreadsheet },
  ],
  metrics: [
    { value: "500", label: "petits exploitants ciblés" },
    { value: "24 mois", label: "durée pilote" },
    { value: "195 000 €", label: "financement recherché" },
    { value: "Kongo Central", label: "zone pilote" },
  ],
};

// Images attendues dans : public/images/projects/rebond-foot/
// Chemins publics utilisés par React : /images/projects/rebond-foot/rebond-foot-01.png ... rebond-foot-15.png
const REBOND_FOOT = {
  title: "Projet « Rebondir par le Foot » — Kinshasa, OC Somwe-Yongo",
  subtitle:
    "Demande d’aide d’urgence pour la réinsertion sociale de 35 jeunes anciens délinquants de rue par le football, l’éducation et le suivi psycho-social.",
  hero: "/images/projects/rebond-foot/rebond-foot-01.png",
  gallery: [
    "/images/projects/rebond-foot/rebond-foot-01.png",
    "/images/projects/rebond-foot/rebond-foot-02.png",
    "/images/projects/rebond-foot/rebond-foot-03.png",
    "/images/projects/rebond-foot/rebond-foot-04.png",
    "/images/projects/rebond-foot/rebond-foot-05.png",
    "/images/projects/rebond-foot/rebond-foot-06.png",
    "/images/projects/rebond-foot/rebond-foot-07.png",
    "/images/projects/rebond-foot/rebond-foot-08.png",
    "/images/projects/rebond-foot/rebond-foot-09.png",
    "/images/projects/rebond-foot/rebond-foot-10.png",
    "/images/projects/rebond-foot/rebond-foot-11.png",
    "/images/projects/rebond-foot/rebond-foot-12.png",
    "/images/projects/rebond-foot/rebond-foot-13.png",
    "/images/projects/rebond-foot/rebond-foot-14.png",
    "/images/projects/rebond-foot/rebond-foot-15.png",
  ],
  metrics: [
    { value: "35", label: "jeunes accompagnés" },
    { value: "3 500 €", label: "aide d’urgence demandée" },
    { value: "Lukunga", label: "championnat urbain" },
    { value: "Kinshasa", label: "zone d’intervention" },
  ],
};

const stats = [
  { value: "200 000+", label: "bénéficiaires accompagnés" },
  { value: "10+", label: "zones et pays d’action" },
  { value: "8+", label: "partenaires stratégiques" },
  { value: "6", label: "universités partenaires" },
];

const partnersList = [
  "Fondation Roi Baudouin",
  "ENABEL",
  "UNOPS",
  "Ambassade du Japon",
  "Caritas International",
  "CNCD–11.11.11",
  "Entraide & Fraternité",
  "Energy Assistance",
  "Laguzze / Fertilomer JPN95",
];

const universities = [
  "ULiège",
  "UCLouvain",
  "Université de Kinshasa",
  "Université Kongo",
  "ISAV Matadi",
  "ISDR-Kinzau-Mvuete",
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

const navItems = [
  {
    label: "À propos",
    items: [
      { label: "Qui sommes-nous", page: "about", icon: Users },
      { label: "Mission", page: "mission", icon: HeartHandshake },
      { label: "Valeurs", page: "values", icon: BookOpen },
      { label: "Gouvernance", page: "governance", icon: Landmark },
      { label: "Rapports d’activités", page: "activity-reports", icon: FileText },
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
      { label: "Projet Kilengi", page: "project-kilengi", icon: Zap },
      { label: "Projet Boma", page: "project-boma", icon: Leaf },
      { label: JPN95.menuLabel, page: "project-jpn95", icon: Sprout },
      { label: "Rebondir par le Foot", page: "project-rebond-foot", icon: Users },
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
      { title: "Vision et engagement", body: "Promouvoir un développement durable, inclusif et endogène, fondé sur la justice sociale, la cohésion communautaire et la protection de l’environnement." },
      { title: "Positionnement stratégique", body: "Agir comme interface entre diaspora, partenaires institutionnels européens et acteurs locaux en RDC, dans une logique de co-construction." },
      { title: "Domaines d’intervention", body: "Santé communautaire, eau potable, agriculture durable, éducation citoyenne, gouvernance éthique et solidarité internationale." },
      { title: "Valeur ajoutée", body: "Ancrage local, transparence documentaire, mobilisation partenariale et approche orientée résultats." },
    ],
  },
  mission: {
    eyebrow: "Cadre stratégique",
    title: "Notre mission",
    text: "Contribuer à un développement durable, inclusif et participatif en RDC, en renforçant les capacités locales, la gouvernance éthique et l’engagement citoyen.",
    cards: [
      { title: "Objectif global", body: "Améliorer durablement les conditions de vie des populations en renforçant la gouvernance locale, la participation citoyenne et les initiatives communautaires." },
      { title: "Objectifs spécifiques", body: "Renforcer les capacités locales, soutenir les projets sociaux et économiques durables, et promouvoir la transparence et la redevabilité." },
      { title: "Résultats attendus", body: "Des communautés mieux organisées, des infrastructures utiles, des projets documentés et une meilleure appropriation locale." },
      { title: "Méthode", body: "Diagnostic, participation communautaire, mobilisation des partenaires, mise en œuvre, suivi et capitalisation." },
    ],
  },
  values: {
    eyebrow: "Référentiel d’action",
    title: "Nos valeurs",
    text: "Les valeurs de PRODDEKO-Belgique structurent l’ensemble de ses interventions.",
    cards: [
      { title: "Dignité humaine", body: "Chaque personne est considérée comme sujet de droits et acteur de changement." },
      { title: "Transparence", body: "Une gestion claire, traçable et responsable des ressources financières, matérielles et humaines." },
      { title: "Participation citoyenne", body: "L’implication active des communautés est une condition de durabilité." },
      { title: "Solidarité internationale", body: "Des partenariats équilibrés entre diaspora, communautés locales, institutions et ONG." },
    ],
  },
  governance: {
    eyebrow: "Organisation",
    title: "Notre gouvernance",
    text: "Une gouvernance participative et inclusive entre la Belgique et la RDC.",
    cards: [
      { title: "Assemblée Générale", body: "Organe souverain validant les orientations stratégiques, les rapports et les grandes décisions." },
      { title: "Conseil d’Administration", body: "Pilotage stratégique, supervision et suivi de la cohérence institutionnelle." },
      { title: "Comité opérationnel", body: "Mise en œuvre des projets, coordination avec les relais locaux et suivi de terrain." },
      { title: "Relais locaux", body: "Acteurs communautaires impliqués dans l’identification, la mise en œuvre et le suivi des actions." },
    ],
  },
  partners: {
    eyebrow: "Écosystème institutionnel",
    title: "Partenaires stratégiques",
    text: "PRODDEKO-Belgique s’inscrit dans un réseau multi-acteurs mobilisant institutions, ONG, universités et relais territoriaux.",
    cards: [
      { title: "Institutions", body: "Coopération avec agences publiques, ambassades, collectivités et programmes internationaux." },
      { title: "ONG et réseaux", body: "Collaboration avec des ONG européennes et africaines, plateformes citoyennes et réseaux de solidarité." },
      { title: "Universités", body: "Recherche-action, formation, capitalisation et innovation appliquée." },
      { title: "Communautés locales", body: "Participation active des bénéficiaires, comités locaux et relais communautaires." },
    ],
  },
  "projects-impact": {
    eyebrow: "Résultats et portée",
    title: "Notre impact",
    text: "Une lecture institutionnelle de la portée, des bénéficiaires et de la qualité des résultats générés par les actions.",
    cards: [
      { title: "Portée géographique", body: "Actions en RDC et espaces de mobilisation en Belgique." },
      { title: "Bénéficiaires cibles", body: "Jeunes, femmes, communautés locales, agriculteurs, organisations citoyennes et autorités locales." },
      { title: "Qualité des résultats", body: "Appropriation locale, participation, redevabilité et durabilité." },
      { title: "Documentation", body: "Photos, rapports, budgets, schémas et éléments de suivi publiables." },
    ],
  },
  financing: {
    eyebrow: "Appui financier",
    title: "Appel à financement",
    text: "PRODDEKO-Belgique recherche des partenaires techniques et financiers souhaitant soutenir des programmes territoriaux à fort impact.",
    cards: [
      { title: "Pourquoi soutenir ?", body: "Une capacité à articuler diaspora, acteurs locaux, institutions et partenaires autour de projets concrets." },
      { title: "Axes ouverts", body: "Santé communautaire, eau, agriculture durable, éducation citoyenne, gouvernance et infrastructures locales." },
      { title: "Partenariats recherchés", body: "Subventions, cofinancements, appuis techniques, mécénat, partenariats programmatiques et dons." },
      { title: "Contact", body: `Pour toute discussion : ${SITE.email} • ${SITE.belgiumLocation}.` },
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
    eyebrow: "Programme",
    title: "Développement durable",
    text: "Programmes territoriaux de résilience communautaire, gestion responsable des ressources et autonomisation économique locale.",
    cards: [
      { title: "Objectifs", body: "Renforcer les capacités locales et soutenir les initiatives communautaires durables." },
      { title: "Bénéficiaires", body: "Agriculteurs, jeunes, femmes, organisations communautaires et populations vulnérables." },
      { title: "Résultats attendus", body: "Communautés mieux organisées, pratiques durables adoptées et meilleure résilience locale." },
      { title: "Méthode", body: "Diagnostic, formation, accompagnement, suivi et capitalisation." },
    ],
  },
  "action-education": {
    eyebrow: "Programme",
    title: "Éducation citoyenne",
    text: "Formation, sensibilisation, leadership local et participation démocratique des jeunes, des femmes et des relais communautaires.",
    cards: [
      { title: "Objectifs", body: "Renforcer les capacités citoyennes et le leadership local." },
      { title: "Public cible", body: "Jeunes, femmes, leaders communautaires, écoles et relais locaux." },
      { title: "Résultats", body: "Participation accrue, initiatives citoyennes et meilleure appropriation des projets." },
      { title: "Approche", body: "Ateliers, sensibilisation, échanges communautaires et documentation." },
    ],
  },
  "action-governance": {
    eyebrow: "Programme",
    title: "Gouvernance éthique",
    text: "Transparence, redevabilité, suivi citoyen et amélioration du dialogue entre institutions et populations.",
    cards: [
      { title: "Objectifs", body: "Promouvoir la transparence et renforcer les mécanismes de suivi citoyen." },
      { title: "Bénéficiaires", body: "Collectivités, OSC, relais communautaires, jeunes, femmes leaders et citoyens." },
      { title: "Résultats", body: "Dialogue local renforcé et meilleure circulation de l’information publique." },
      { title: "Outils", body: "Documentation, suivi, réunions, rapports et capitalisation." },
    ],
  },
  "action-solidarity": {
    eyebrow: "Programme",
    title: "Solidarité internationale",
    text: "Co-développement entre Belgique et RDC, mobilisation de la diaspora et partenariats multi-acteurs à fort impact.",
    cards: [
      { title: "Objectifs", body: "Créer des synergies durables entre Belgique, RDC et partenaires internationaux." },
      { title: "Bénéficiaires", body: "Diaspora, organisations locales, universités, ONG et communautés bénéficiaires." },
      { title: "Résultats", body: "Partenariats consolidés, initiatives co-construites et ressources mobilisées." },
      { title: "Approche", body: "Réseautage, transfert de compétences, mobilisation et suivi." },
    ],
  },
};

function ImageProtection() {
  useEffect(() => {
    const protectedSelector = "img, [data-protected-image]";

    const block = (event) => {
      if (event.target?.closest?.(protectedSelector)) {
        event.preventDefault();
      }
    };

    const blockKeys = (event) => {
      const key = event.key?.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && ["s", "u", "p"].includes(key)) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    document.addEventListener("selectstart", block);
    document.addEventListener("keydown", blockKeys);

    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
      document.removeEventListener("selectstart", block);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  return null;
}

function ProtectedImage({ className = "", alt = "", ...props }) {
  return (
    <img
      {...props}
      alt={alt}
      draggable="false"
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
      className={`select-none ${className}`}
      style={{ WebkitUserDrag: "none", userSelect: "none", ...(props.style || {}) }}
    />
  );
}

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className={`text-sm font-bold uppercase tracking-[0.22em] ${light ? "text-orange-300" : "text-orange-500"}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`mt-3 text-3xl font-black tracking-tight md:text-4xl ${light ? "text-white" : "text-blue-950"}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-8 ${light ? "text-slate-200" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

function MenuGroup({ group, activeMenu, setActiveMenu, setPage }) {
  const wrapperRef = useRef(null);
  const isOpen = activeMenu === group.label;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActiveMenu((current) => (current === group.label ? null : current));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [group.label, setActiveMenu]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setActiveMenu((current) => (current === group.label ? null : group.label))}
        className={`flex items-center gap-1 rounded-full px-4 py-3 text-sm font-bold transition ${isOpen ? "bg-slate-100 text-blue-950 shadow-sm" : "text-slate-700 hover:bg-slate-100 hover:text-blue-950"}`}
      >
        {group.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 top-full z-40 mt-3 w-[720px] -translate-x-1/2 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.16)]">
          <div className="grid grid-cols-[1.15fr_0.85fr]">
            <div className="p-6">
              <div className="mb-4 border-b border-slate-100 pb-4">
                <div className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">{group.label}</div>
                <div className="mt-2 text-2xl font-black tracking-tight text-blue-950">Navigation stratégique</div>
              </div>

              <div className="grid max-h-[410px] grid-cols-2 gap-3 overflow-y-auto pr-1">
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
                      className="flex items-start gap-4 rounded-[1.25rem] bg-slate-50/70 p-4 text-left transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-blue-950">{item.label}</div>
                        <div className="mt-1 text-xs leading-5 text-slate-500">{group.label}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-950 via-slate-950 to-orange-950 p-6 text-white">
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-orange-200">{SITE.name}</div>
              <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight">Une action institutionnelle ancrée dans les territoires</h3>
              <p className="mt-4 text-sm leading-7 text-slate-200">Des projets concrets, documentés et orientés impact entre la Belgique et la RDC.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Header({ page, setPage, mobileOpen, setMobileOpen, activeMenu, setActiveMenu }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <button type="button" onClick={() => setPage("home")} className="flex min-w-0 items-center gap-3 text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm" data-protected-image>
            <ProtectedImage src={SITE.logo} alt="Logo PRODDEKO-Belgique" className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <div className="text-xl font-black tracking-tight text-blue-950 md:text-2xl">{SITE.name}</div>
            <div className="hidden text-sm text-slate-500 md:block">{SITE.tagline}</div>
          </div>
        </button>

        <nav className="hidden items-center gap-3 lg:flex">
          <button type="button" onClick={() => { setPage("home"); setActiveMenu(null); }} className={`rounded-full px-5 py-3 text-sm font-bold transition ${page === "home" ? "bg-slate-100 text-blue-950 shadow-sm" : "text-slate-700 hover:bg-slate-100 hover:text-blue-950"}`}>Accueil</button>
          {navItems.map((group) => <MenuGroup key={group.label} group={group} activeMenu={activeMenu} setActiveMenu={setActiveMenu} setPage={setPage} />)}
          <button type="button" onClick={() => setPage("project-kilengi")} className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 hover:text-blue-950">Projet Kilengi</button>
          <button type="button" onClick={() => setPage("contact-form")} className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600">Nous contacter</button>
        </nav>

        <button type="button" onClick={() => setMobileOpen((v) => !v)} className="rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden" aria-label="Ouvrir le menu">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            <button type="button" onClick={() => { setPage("home"); setMobileOpen(false); }} className="rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700">Accueil</button>
            {navItems.map((group) => {
              const isOpen = activeMenu === group.label;
              return (
                <div key={group.label} className="rounded-2xl border border-slate-200 p-4">
                  <button type="button" onClick={() => setActiveMenu((current) => (current === group.label ? null : group.label))} className="flex w-full items-center justify-between text-left">
                    <span className="text-sm font-black text-blue-950">{group.label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="mt-3 max-h-[380px] space-y-2 overflow-y-auto pr-1">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button key={item.page} type="button" onClick={() => { setPage(item.page); setMobileOpen(false); setActiveMenu(null); }} className="flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition hover:bg-slate-50">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500"><Icon className="h-4 w-4" /></div>
                            <div className="text-sm font-semibold text-slate-800">{item.label}</div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ setPage }) {
  const heroSlides = useMemo(() => [...KILENGI.during.slice(0, 4), ...BOMA.gallery.slice(0, 4)], []);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length), 3500);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0" data-protected-image>
        {heroSlides.map((src, index) => (
          <ProtectedImage key={src} src={src} alt={`Projet ${index + 1}`} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === currentSlide ? "opacity-80" : "opacity-0"}`} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/55 via-slate-950/35 to-orange-950/35" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-slate-100 backdrop-blur">Belgique • RDC • Co-développement • Solidarité internationale</div>
            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">Une action durable entre territoires, citoyens et partenaires</h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-100">PRODDEKO-Belgique valorise des projets concrets en santé, agriculture durable, gouvernance et résilience communautaire.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button type="button" onClick={() => setPage("project-kilengi")} className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600">Voir le projet Kilengi</button>
              <button type="button" onClick={() => setPage("project-jpn95")} className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">Voir le projet JPN95</button>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
                <div className="text-3xl font-black text-orange-300 md:text-5xl">{stat.value}</div>
                <div className="mt-3 text-base text-slate-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex items-center gap-4">
          <button type="button" onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)} className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"><ArrowLeft className="h-5 w-5" /></button>
          <div className="flex items-center gap-2">{heroSlides.map((_, index) => <button key={index} type="button" onClick={() => setCurrentSlide(index)} className={`h-2.5 w-2.5 rounded-full transition ${index === currentSlide ? "bg-orange-400" : "bg-white/35"}`} />)}</div>
          <button type="button" onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)} className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"><ArrowRight className="h-5 w-5" /></button>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ src, alt, onOpen }) {
  return (
    <button type="button" onClick={() => onOpen(src, alt)} className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl" data-protected-image>
      <ProtectedImage src={src} alt={alt} loading="lazy" className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
      <div className="absolute bottom-3 right-3 rounded-full bg-white/90 p-2 text-slate-800 opacity-0 shadow transition group-hover:opacity-100"><ZoomIn className="h-4 w-4" /></div>
    </button>
  );
}

function GallerySection({ title, eyebrow, images, onOpen }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>{eyebrow && <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">{eyebrow}</div>}<h3 className="mt-1 text-xl font-black text-blue-950">{title}</h3></div>
        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-600">{images.length} visuels</div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{images.map((src, index) => <GalleryCard key={`${title}-${index}`} src={src} alt={`${title} ${index + 1}`} onOpen={onOpen} />)}</div>
    </section>
  );
}

function ImageLightbox({ src, title, onClose }) {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4" onClick={onClose} data-protected-image>
      <div className="relative max-h-[95vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-slate-800 shadow"><X className="h-5 w-5" /></button>
        <ProtectedImage src={src} alt={title} className="max-h-[95vh] w-full rounded-2xl bg-white object-contain" />
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500"><Icon className="h-6 w-6" /></div><div><h3 className="text-lg font-black text-blue-950">{title}</h3><div className="mt-3 text-sm leading-7 text-slate-600">{children}</div></div></div>
    </div>
  );
}

// ⚠️ NOTE TECHNIQUE (IMAGES LOCALES)
// Si les images ne s'affichent pas en local :
// 1. Lancer le serveur : npm run dev
// 2. Vérifier que les images sont bien dans /public/images/...
// 3. Accéder via : http://localhost:5173/images/...
// 4. Ne jamais utiliser "src/assets" pour ces images (utiliser public/)

// ⚠️ NOTE TECHNIQUE (IMAGES LOCALES)
// Si les images ne s'affichent pas en local :
// 1. Lancer le serveur : npm run dev
// 2. Vérifier que les images sont bien dans /public/images/...
// 3. Accéder via : http://localhost:5173/images/...
// 4. Ne jamais utiliser "src/assets" pour ces images (utiliser public/)

// ⚠️ NOTE TECHNIQUE (IMAGES LOCALES)
// Si les images ne s'affichent pas en local :
// 1. Lancer le serveur : npm run dev
// 2. Vérifier que les images sont bien dans /public/images/...
// 3. Accéder via : http://localhost:5173/images/...
// 4. Ne jamais utiliser "src/assets" pour ces images (utiliser public/)

// ⚠️ NOTE TECHNIQUE (IMAGES LOCALES)
// Si les images ne s'affichent pas en local :
// 1. Lancer le serveur : npm run dev
// 2. Vérifier que les images sont bien dans /public/images/...
// 3. Accéder via : http://localhost:5173/images/...
// 4. Ne jamais utiliser "src/assets" pour ces images (utiliser public/)

// ⚠️ NOTE TECHNIQUE (IMAGES LOCALES)
// Si les images ne s'affichent pas en local :
// 1. Lancer le serveur : npm run dev
// 2. Vérifier que les images sont bien dans /public/images/...
// 3. Accéder via : http://localhost:5173/images/...
// 4. Ne jamais utiliser "src/assets" pour ces images (utiliser public/)

function ActivityReportsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionTitle eyebrow="Transparence documentaire" title="Rapports d’activités" text="Cette rubrique rassemble les rapports d’activités disponibles afin de renforcer la transparence, la mémoire institutionnelle et la redevabilité envers les partenaires." />
      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">Rapport disponible</div>
        <h3 className="mt-3 text-2xl font-black text-blue-950">Rapport d’activités 2022 — FSDI-CLODIK</h3>
        <p className="mt-4 text-slate-600 leading-7">Ce rapport documente les activités réalisées en 2022 : travaux d’électrification et d’adduction d’eau potable avec pompe solaire à Kilengi, projets éducatifs, activités agricoles, rapports financiers, soutiens mobilisés, équipe et volontaires.</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a href={DOCS.activityReport2022} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-blue-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-900"><FileText className="h-4 w-4" />Consulter le rapport PDF</a>
          <a href={DOCS.activityReport2022} download className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"><Download className="h-4 w-4" />Télécharger le rapport</a>
        </div>
      </div>
    </div>
  );
}

function Jpn95ProjectPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle eyebrow="Projet en recherche de financement" title={JPN95.title} text={JPN95.subtitle} />
      <div className="mt-10 rounded-[2.25rem] border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-orange-50 p-6 shadow-sm lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-600">Agriculture • Climat • Kongo Central</div>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-blue-950 md:text-5xl">Une réponse naturelle à la crise des engrais chimiques</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">Le pilote JPN95 propose d’évaluer, auprès de petits exploitants agricoles, une solution naturelle à base d’eau de mer transformée, dans un contexte de hausse des prix des intrants importés, de fragilité alimentaire et de besoin urgent de souveraineté agricole en RDC.</p>
            <div className="mt-6 flex flex-wrap gap-3">{["Fertilisant naturel", "95 oligo-éléments", "Résilience paysanne", "Alternative aux intrants coûteux"].map((item) => <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">{item}</span>)}</div>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-emerald-800 via-slate-950 to-blue-950 p-8 text-white shadow-xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-200">FERTILOMER JPN95</div>
            <h3 className="mt-4 text-3xl font-black leading-tight">Fertiliser autrement pour nourrir les sols, les familles et l’économie locale.</h3>
            <p className="mt-5 text-sm leading-7 text-slate-100">Le projet vise à démontrer la valeur agronomique, économique et opérationnelle d’une solution plus accessible, moins dangereuse à manipuler et adaptée aux contraintes des petits producteurs.</p>
          </div>
        </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{JPN95.metrics.map((item) => <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="text-3xl font-black text-orange-500">{item.value}</div><div className="mt-2 text-sm text-slate-600">{item.label}</div></div>)}</div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="grid gap-6">
          <InfoCard icon={Sprout} title="Pourquoi ce projet maintenant ?">Les producteurs congolais sont exposés à la volatilité des prix des engrais chimiques, à la dépendance aux importations et aux tensions internationales qui perturbent les chaînes d’approvisionnement. Dans l’Est de la RDC, les conflits aggravent la pression sur la sécurité alimentaire et renforcent l’ur
