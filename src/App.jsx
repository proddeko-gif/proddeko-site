import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronDown,
  Cookie,
  Droplets,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  Globe,
  GraduationCap,
  Handshake,
  HeartHandshake,
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
  X,
  Zap,
  ZoomIn,
} from "lucide-react";

const SITE = {
  name: "PRODDEKO-Belgique",
  legalName: "PRODDEKO-Belgique",
  tradeName: "Triple Sustain Impact",
  enterpriseNumber: "BE 0459.354.980",
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

const KILENGI = {
  title: "Réhabilitation du Centre de Santé de Référence de Kilengi",
  subtitle:
    "Réhabilitation énergétique, sécurisation de l’alimentation électrique et valorisation documentaire du chantier.",
  hero: "/images/projects/kilengi/CS-Kilengi_avril-22_1.jpeg",
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
  gallery: makeImagePaths("/images/projects/boma", "boma", 8, "jpg"),
};

const JPN95 = {
  menuLabel: "JPN95 — Licence Fertilomer",
  title: "Accord de licence et déploiement stratégique de Fertilomer JPN95",
  subtitle:
    "PRODDEKO-Belgique, agissant sous le nom commercial Triple Sustain Impact, structure une demande d’accord de licence auprès de Laguzze, détentrice de la licence JPN95 / Fertilomer, afin d’ouvrir le développement, l’adaptation terrain et le déploiement commercial de Fertilomer JPN95 en Belgique et en République Démocratique du Congo.",
  gallery: [
    "/images/projects/jpn95/Fertilomer-JPN95-01.png",
    "/images/projects/jpn95/Fertilomer-JPN95-02.png",
    "/images/projects/jpn95/Fertilomer-JPN95-03.png",
    "/images/projects/jpn95/Fertilomer-JPN95-04.png",
    "/images/projects/jpn95/Fertilomer-JPN95-05.png",
    "/images/projects/jpn95/Fertilomer-JPN95-06.png",
    "/images/projects/jpn95/Fertilomer-JPN95-07.png",
    "/images/projects/jpn95/Fertilomer-JPN95-08.png",
    "/images/projects/jpn95/Fertilomer-JPN95-09.png",
    "/images/projects/jpn95/Fertilomer-JPN95-10.png",
    "/images/projects/jpn95/Fertilomer-JPN95-11.png",
  ],
  docs: [
    { title: "Dossier de candidature FID", href: "/docs/jpn95-dossier-candidature-fid.pdf", icon: FileText },
    { title: "Éligibilité FID", href: "/docs/jpn95-eligibilite-fid.pdf", icon: FileText },
    { title: "Organisation candidate", href: "/docs/jpn95-organisation-candidate.pdf", icon: FileText },
    { title: "Budget prévisionnel", href: "/docs/jpn95-budget.xlsx", icon: FileSpreadsheet },
  ],
  metrics: [
    { value: "500", label: "exploitants agricoles ciblés" },
    { value: "24 mois", label: "durée pilote" },
    { value: "195 000 €", label: "financement recherché" },
    { value: "Belgique / RDC", label: "territoires visés" },
  ],
};

const REBOND_FOOT = {
  title: "Projet « Rebondir par le Foot » — Kinshasa, OC Somwe-Yongo",
  subtitle:
    "Réinsertion sociale de 35 jeunes anciens délinquants de rue par le football, l’éducation et le suivi psycho-social.",
  hero: "/images/projects/rebond-foot/rebond-foot-01.png",
  gallery: makeImagePaths("/images/projects/rebond-foot", "rebond-foot", 15, "png"),
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
    text: "Triple Sustain Impact est le nom commercial sous lequel PRODDEKO-Belgique structure ses actions de solidarité internationale, de développement durable et de gouvernance éthique entre la Belgique et la République Démocratique du Congo.",
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
    text: "Les valeurs de Triple Sustain Impact / PRODDEKO-Belgique structurent l’ensemble des interventions.",
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
    text: "Triple Sustain Impact / PRODDEKO-Belgique s’inscrit dans un réseau multi-acteurs mobilisant institutions, ONG, universités et relais territoriaux.",
    cards: partnersList.map((name) => ({ title: name, body: "Partenaire potentiel, institutionnel ou technique dans l’écosystème de solidarité et de développement." })),
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
    text: "Triple Sustain Impact / PRODDEKO-Belgique recherche des partenaires techniques et financiers souhaitant soutenir des programmes territoriaux à fort impact.",
    cards: [
      { title: "Pourquoi soutenir ?", body: "Une capacité à articuler diaspora, acteurs locaux, institutions et partenaires autour de projets concrets." },
      { title: "Axes ouverts", body: "Santé communautaire, eau, agriculture durable, éducation citoyenne, gouvernance et infrastructures locales." },
      { title: "Partenariats recherchés", body: "Subventions, cofinancements, appuis techniques, mécénat, partenariats programmatiques et dons." },
      { title: "Compte bancaire", body: `${SITE.accountName} — IBAN : ${SITE.iban} — BIC : ${SITE.bic}` },
    ],
  },
  "contact-info": {
    eyebrow: "Contact",
    title: "Coordonnées",
    text: "Les coordonnées institutionnelles de Triple Sustain Impact / PRODDEKO-Belgique.",
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
    text: "Formation, sensibilisation, leadership local et participation démocratique des jeunes, des femmes et des relais communautaires, ainsi que l’éducation à la citoyenneté mondiale en Belgique.",
    cards: [
      { title: "Objectifs", body: "Renforcer les capacités citoyennes, le leadership local et l’engagement solidaire." },
      { title: "Public cible", body: "Jeunes, femmes, leaders communautaires, écoles, relais locaux, associations et acteurs éducatifs." },
      { title: "Citoyenneté mondiale", body: "Sensibilisation aux enjeux globaux : climat, inégalités, solidarité internationale, migrations, paix, citoyenneté active et liens Belgique–RDC." },
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
  "legal-notice": {
    eyebrow: "Mentions légales",
    title: "Mentions légales",
    text: "Informations légales relatives au site Triple Sustain Impact / PRODDEKO-Belgique.",
    cards: [
      { title: "Identification", body: `${SITE.legalName}, agissant sous le nom commercial ${SITE.tradeName}. Numéro d’entreprise : ${SITE.enterpriseNumber}.` },
      { title: "Contact officiel", body: `Email : ${SITE.email} — Téléphone : ${SITE.phone}.` },
      { title: "Siège", body: SITE.belgiumLocation },
      { title: "Responsabilité", body: "PRODDEKO-Belgique veille à publier des informations exactes sans garantir l’absence totale d’erreurs." },
    ],
  },
  privacy: {
    eyebrow: "Protection des données",
    title: "Politique de confidentialité – RGPD",
    text: "Triple Sustain Impact / PRODDEKO-Belgique respecte la protection des données personnelles conformément au RGPD.",
    cards: [
      { title: "Responsable du traitement", body: `${SITE.legalName}, agissant sous le nom commercial ${SITE.tradeName}.` },
      { title: "Données collectées", body: "Nom, email, téléphone et informations transmises volontairement." },
      { title: "Finalité", body: "Gestion des contacts, partenariats et suivi des projets." },
      { title: "Vos droits", body: `Droit d’accès, rectification, suppression et opposition. Contact : ${SITE.email}.` },
    ],
  },
  cookies: {
    eyebrow: "Cookies",
    title: "Politique cookies",
    text: "Ce site utilise des cookies nécessaires et, avec votre accord, des cookies de mesure d’audience.",
    cards: [
      { title: "Cookies nécessaires", body: "Ils assurent le fonctionnement technique du site." },
      { title: "Cookies de mesure d’audience", body: "Ils peuvent aider à améliorer l’expérience utilisateur, uniquement si vous les acceptez." },
      { title: "Gestion", body: "Vous pouvez modifier vos préférences à tout moment depuis le bandeau cookies." },
      { title: "Contact", body: SITE.email },
    ],
  },
};

function ImageProtection() {
  useEffect(() => {
    const protectedSelector = "img, [data-protected-image]";
    const block = (event) => {
      if (event.target?.closest?.(protectedSelector)) event.preventDefault();
    };
    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    document.addEventListener("selectstart", block);
    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
      document.removeEventListener("selectstart", block);
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

function BrandBlock({ light = false, center = false, size = "md" }) {
  const tradeSize = size === "xl" ? "text-5xl md:text-7xl" : size === "lg" ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl";
  const legalSize = size === "xl" ? "text-xl md:text-2xl" : "text-base md:text-lg";
  return (
    <div className={center ? "text-center" : ""}>
      <div className={`${tradeSize} font-black tracking-tight ${light ? "text-orange-300" : "text-orange-600"}`}>{SITE.tradeName}</div>
      <div className={`mt-2 ${legalSize} font-extrabold ${light ? "text-white" : "text-blue-950"}`}>{SITE.name}</div>
      <div className={`mt-1 text-sm ${light ? "text-slate-200" : "text-slate-500"}`}>{SITE.tagline}</div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      <BrandBlock light={light} size="md" />
      {eyebrow && <div className={`mt-8 text-sm font-bold uppercase tracking-[0.22em] ${light ? "text-orange-300" : "text-orange-500"}`}>{eyebrow}</div>}
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
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500"><Icon className="h-5 w-5" /></div>
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
              <BrandBlock light size="md" />
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
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm" data-protected-image>
            <ProtectedImage src={SITE.logo} alt="Logo PRODDEKO-Belgique" className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <div className="text-2xl font-black leading-none tracking-tight text-orange-600 md:text-3xl">{SITE.tradeName}</div>
            <div className="mt-1 text-lg font-extrabold leading-none text-blue-950 md:text-xl">{SITE.name}</div>
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
          <button type="button" onClick={() => { setPage("home"); setMobileOpen(false); }} className="mb-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700">Accueil</button>
          {navItems.map((group) => {
            const isOpen = activeMenu === group.label;
            return (
              <div key={group.label} className="mb-3 rounded-2xl border border-slate-200 p-4">
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-slate-950/45 to-orange-950/45" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <BrandBlock light size="xl" />
            <div className="mt-8 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-slate-100 backdrop-blur">Belgique • RDC • Co-développement • Solidarité internationale</div>
            <h1 className="mt-8 max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">Une action durable entre territoires, citoyens et partenaires</h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-100">Triple Sustain Impact / PRODDEKO-Belgique valorise des projets concrets en santé, agriculture durable, gouvernance et résilience communautaire.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button type="button" onClick={() => setPage("project-kilengi")} className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600">Voir le projet Kilengi</button>
              <button type="button" onClick={() => setPage("project-jpn95")} className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">Licence stratégique JPN95</button>
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
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
      <div className="relative max-h-[95vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-slate-800 shadow"><X className="h-5 w-5" /></button>
        <ProtectedImage src={src} alt={title} className="max-h-[95vh] w-full rounded-2xl bg-white object-contain" />
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500"><Icon className="h-6 w-6" /></div>
        <div><h3 className="text-lg font-black text-blue-950">{title}</h3><div className="mt-3 text-sm leading-7 text-slate-600">{children}</div></div>
      </div>
    </div>
  );
}

function JPN95Gallery({ onOpen }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle eyebrow="Solutions agricoles" title="Applications du fertilisant JPN95" text="Une solution naturelle adaptée à plusieurs cultures et usages agricoles : maraîchage, fruits, céréales, horticulture, prairies et agriculture de précision." />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {JPN95.gallery.map((src, index) => (
          <div key={src} className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl" onClick={() => onOpen(src, `Application JPN95 ${index + 1}`)} data-protected-image>
            <ProtectedImage src={src} alt={`Application JPN95 ${index + 1}`} loading="lazy" className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute bottom-3 right-3 rounded-full bg-white p-2 opacity-0 shadow transition group-hover:opacity-100"><ZoomIn className="h-4 w-4 text-slate-700" /></div>
            <div className="absolute bottom-3 left-3 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">Application {index + 1}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DocsSection({ docs = [] }) {
  if (!docs.length) return null;
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
        <SectionTitle eyebrow="Documentation" title="Documents du projet" text="Documents utiles pour les partenaires, bailleurs, institutions et acteurs techniques." />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {docs.map((doc) => {
            const Icon = doc.icon || FileText;
            return (
              <a key={doc.title} href={doc.href} target="_blank" rel="noreferrer" className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <Icon className="h-7 w-7 text-orange-500" />
                <div className="mt-4 text-sm font-black text-blue-950">{doc.title}</div>
                <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-slate-500">Ouvrir <ExternalLink className="h-3.5 w-3.5" /></div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function JPN95LicenseContent({ onOpen }) {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-950 to-blue-950 p-8 text-white shadow-xl">
            <BrandBlock light center size="lg" />
            <div className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-emerald-200">Fertilomer JPN95</div>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">Régénérer les sols. Sécuriser les récoltes. Structurer une agriculture durable.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">Fertiliser autrement pour nourrir les familles, préserver les sols et renforcer l’économie locale.</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-slate-50 p-6">
              <h3 className="text-xl font-black text-blue-950">Porteur de la demande</h3>
              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <p><strong>{SITE.legalName}</strong>, agissant sous le nom commercial <strong>{SITE.tradeName}</strong>.</p>
                <p>Numéro d’entreprise : <strong>{SITE.enterpriseNumber}</strong></p>
                <p>Email officiel : <a href={`mailto:${SITE.email}`} className="font-bold text-blue-950 underline underline-offset-4">{SITE.email}</a></p>
                <p>Territoires visés : Belgique et République Démocratique du Congo.</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-blue-950">1. Objet de la demande</h3>
              <p className="mt-4 leading-8 text-slate-700">La présente demande vise à établir un partenariat structuré avec la société <strong>Laguzze</strong>, détentrice de la licence du fertilisant naturel <strong>JPN95 / Fertilomer</strong>, afin de permettre à PRODDEKO-Belgique, sous son nom commercial Triple Sustain Impact, de développer, adapter et diffuser cette solution en Belgique et en République Démocratique du Congo.</p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <InfoCard icon={Droplets} title="Solution naturelle">JPN95 / Fertilomer est présenté comme un fertilisant naturel à base d’eau de mer transformée, enrichi en oligo-éléments, destiné à soutenir la fertilité des sols.</InfoCard>
            <InfoCard icon={Sprout} title="Souveraineté agricole">Le projet vise à réduire la dépendance aux engrais chimiques importés et à renforcer l’autonomie productive des petits exploitants agricoles.</InfoCard>
            <InfoCard icon={Handshake} title="Partenariat Laguzze">PRODDEKO-Belgique souhaite obtenir un cadre de licence, de transfert de savoir-faire et d’encadrement technique pour la Belgique et la RDC.</InfoCard>
          </div>
          <div className="mt-12 space-y-10">
            <section>
              <h3 className="text-2xl font-black text-blue-950">2. Présentation de JPN95 / Fertilomer</h3>
              <p className="mt-4 leading-8 text-slate-700">JPN95 / Fertilomer est une solution fertilisante innovante qui vise à améliorer la fertilité des sols, réduire la dépendance aux intrants chimiques, diminuer les coûts agricoles et soutenir une agriculture plus résiliente.</p>
              <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-700">
                <li>Amélioration durable de la fertilité des sols</li>
                <li>Réduction de la dépendance aux engrais chimiques importés</li>
                <li>Diminution des coûts de production agricole</li>
                <li>Renforcement de la résilience des exploitations</li>
                <li>Soutien à une agriculture locale plus productive</li>
              </ul>
            </section>
            <section>
              <h3 className="text-2xl font-black text-blue-950">3. Projet pilote : JPN95 Kongo Central</h3>
              <p className="mt-4 leading-8 text-slate-700">Le projet pilote prévoit une phase d’expérimentation dans la province du Kongo Central, en République Démocratique du Congo, afin de tester l’efficacité agronomique, économique et sociale de la solution auprès de petits exploitants.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {JPN95.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><div className="text-3xl font-black text-emerald-800">{metric.value}</div><div className="mt-2 text-sm text-slate-600">{metric.label}</div></div>
                ))}
              </div>
            </section>
            <section>
              <h3 className="text-2xl font-black text-blue-950">4. Objectifs stratégiques</h3>
              <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-700">
                <li>Obtenir une licence d’exploitation JPN95 / Fertilomer</li>
                <li>Déployer une solution durable en Belgique et en RDC</li>
                <li>Structurer un modèle agricole reproductible Europe – Afrique</li>
                <li>Accompagner les petits producteurs agricoles</li>
                <li>Contribuer à la souveraineté alimentaire locale</li>
              </ul>
            </section>
            <section>
              <h3 className="text-2xl font-black text-blue-950">5. Engagement souhaité avec Laguzze</h3>
              <p className="mt-4 leading-8 text-slate-700">PRODDEKO-Belgique souhaite établir avec Laguzze un partenariat structuré, transparent et durable autour de la licence JPN95 / Fertilomer.</p>
              <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-700">
                <li>Accès à la licence JPN95 / Fertilomer</li>
                <li>Transfert de savoir-faire technique</li>
                <li>Encadrement du projet pilote</li>
                <li>Possibilité de co-développement Belgique / RDC</li>
                <li>Suivi des résultats agronomiques et économiques</li>
              </ul>
            </section>
            <section>
              <h3 className="text-2xl font-black text-blue-950">6. Conclusion</h3>
              <p className="mt-4 leading-8 text-slate-700">Cette demande de licence s’inscrit dans une logique de coopération internationale, de transfert de technologie et de développement agricole durable. Elle vise à faire de JPN95 / Fertilomer une solution concrète au service des producteurs, des sols, des familles et des économies locales.</p>
            </section>
          </div>
        </div>
      </section>
      <JPN95Gallery onOpen={onOpen} />
      <DocsSection docs={JPN95.docs} />
    </>
  );
}

function GenericPage({ content }) {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow={content.eyebrow} title={content.title} text={content.text} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {(content.cards || []).map((card) => <InfoCard key={card.title} icon={HeartHandshake} title={card.title}>{card.body}</InfoCard>)}
        </div>
      </section>
    </main>
  );
}

function ProjectPage({ project, type, onOpen }) {
  const gallery = type === "kilengi" ? [...project.during, ...project.before, ...project.after] : project.gallery || [];
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-4xl">
          <BrandBlock size="lg" />
          <div className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-orange-500">{type === "jpn95" ? "Dossier officiel de demande de licence" : "Projet en recherche de financement"}</div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-blue-950 md:text-5xl">{project.title}</h1>
          <p className="mt-6 text-xl leading-9 text-slate-600">{project.subtitle}</p>
        </div>
        {type !== "jpn95" && project.metrics && (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((metric) => <div key={metric.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6"><div className="text-3xl font-black text-blue-950">{metric.value}</div><div className="mt-2 text-sm text-slate-600">{metric.label}</div></div>)}
          </div>
        )}
        {type !== "jpn95" && project.hero && (
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100" data-protected-image>
            <ProtectedImage src={project.hero} alt={project.title} className="h-[420px] w-full object-cover" />
          </div>
        )}
      </section>
      {type === "jpn95" ? (
        <JPN95LicenseContent onOpen={onOpen} />
      ) : (
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8"><GallerySection title="Galerie du projet" eyebrow="Documentation visuelle" images={gallery} onOpen={onOpen} /></section>
      )}
    </main>
  );
}

function ActivityReportsPage() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow="Transparence" title="Rapports d’activités" text="Documents institutionnels disponibles pour les partenaires et soutiens de Triple Sustain Impact / PRODDEKO-Belgique." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a href={DOCS.activityReport2022} target="_blank" rel="noreferrer" className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <FileText className="h-8 w-8 text-orange-500" />
            <h3 className="mt-4 text-xl font-black text-blue-950">Rapport d’activités 2022</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Consulter ou télécharger le rapport institutionnel.</p>
          </a>
        </div>
      </section>
    </main>
  );
}

function ContactForm() {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow="Contact" title="Nous contacter" text="Pour un partenariat, un don, une collaboration ou une demande d’information." />
        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={Mail} title="Email">{SITE.email}</InfoCard>
            <InfoCard icon={Phone} title="Téléphone">{SITE.phone}</InfoCard>
            <InfoCard icon={MapPin} title="Belgique">{SITE.belgiumLocation}</InfoCard>
            <InfoCard icon={Globe} title="RDC">{SITE.drcLocation}</InfoCard>
          </div>
          <div className="mt-8 rounded-3xl bg-slate-50 p-6">
            <h3 className="text-lg font-black text-blue-950">Soutenir {SITE.tradeName}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Compte : {SITE.accountName}<br />IBAN : {SITE.iban}<br />BIC : {SITE.bic}</p>
          </div>
          <a href={`mailto:${SITE.email}`} className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white hover:bg-orange-600">Écrire un email</a>
        </div>
      </section>
    </main>
  );
}

function SupportActionPage({ type }) {
  const config = {
    donate: {
      eyebrow: "Soutenir Triple Sustain Impact",
      title: "Faire un don",
      intro: "Votre don contribue directement aux projets de santé communautaire, d’agriculture durable, d’éducation citoyenne et de solidarité internationale entre la Belgique et la RDC.",
      button: "Valider mon intention de don",
      fields: ["Prénom", "Nom", "Email", "Montant souhaité", "Message"],
    },
    partner: {
      eyebrow: "Partenariat stratégique",
      title: "Devenir partenaire",
      intro: "Triple Sustain Impact / PRODDEKO-Belgique recherche des partenaires techniques, institutionnels, académiques et financiers pour co-développer des projets à fort impact.",
      button: "Proposer un partenariat",
      fields: ["Organisation", "Personne de contact", "Email", "Type de partenariat", "Message"],
    },
    volunteer: {
      eyebrow: "Engagement citoyen",
      title: "Devenir bénévole",
      intro: "Rejoignez nos actions de sensibilisation, d’éducation citoyenne, de mobilisation solidaire et d’appui aux projets de terrain.",
      button: "Proposer mon aide bénévole",
      fields: ["Prénom", "Nom", "Email", "Compétences ou disponibilités", "Message"],
    },
  }[type];

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          <BrandBlock size="lg" />
          <div className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-orange-500">{config.eyebrow}</div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-blue-950 md:text-5xl">{config.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{config.intro}</p>

          {type === "donate" && (
            <div className="mt-10 grid gap-3 sm:grid-cols-4">
              {["10 €", "25 €", "40 €", "100 €"].map((amount) => (
                <button key={amount} type="button" className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-black text-blue-950 transition hover:border-orange-400 hover:bg-orange-50">
                  {amount}
                </button>
              ))}
            </div>
          )}

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {config.fields.map((field) => (
              <label key={field} className={field === "Message" ? "md:col-span-2" : ""}>
                <span className="text-sm font-bold text-slate-700">{field}</span>
                {field === "Message" ? (
                  <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400" placeholder={field} />
                ) : (
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400" placeholder={field} />
                )}
              </label>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={`mailto:${SITE.email}`} className="rounded-full bg-orange-600 px-7 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-orange-700">
              {config.button}
            </a>
            <div className="text-sm text-slate-500">Ou écrivez directement à <a href={`mailto:${SITE.email}`} className="font-bold text-blue-950 underline underline-offset-4">{SITE.email}</a></div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Home({ setPage, onOpen }) {
  return (
    <main>
      <Hero setPage={setPage} />
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow="Projets prioritaires" title="Des actions concrètes, documentées et finançables" text="Triple Sustain Impact / PRODDEKO-Belgique met en avant des projets à fort impact social, agricole, éducatif et communautaire." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <button type="button" onClick={() => setPage("project-jpn95")} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><ProtectedImage src={JPN95.gallery[0]} alt="JPN95" className="h-56 w-full object-cover" /><div className="p-6"><h3 className="text-xl font-black text-blue-950">Licence et déploiement Fertilomer JPN95</h3><p className="mt-3 text-sm leading-7 text-slate-600">{JPN95.subtitle}</p></div></button>
          <button type="button" onClick={() => setPage("project-kilengi")} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><ProtectedImage src={KILENGI.hero} alt="Kilengi" className="h-56 w-full object-cover" /><div className="p-6"><h3 className="text-xl font-black text-blue-950">Centre de Santé Kilengi</h3><p className="mt-3 text-sm leading-7 text-slate-600">{KILENGI.subtitle}</p></div></button>
          <button type="button" onClick={() => setPage("project-boma")} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><ProtectedImage src={BOMA.hero} alt="Boma" className="h-56 w-full object-cover" /><div className="p-6"><h3 className="text-xl font-black text-blue-950">Projet maraîcher Boma</h3><p className="mt-3 text-sm leading-7 text-slate-600">{BOMA.subtitle}</p></div></button>
        </div>
      </section>
      <JPN95Gallery onOpen={onOpen} />
    </main>
  );
}

function Footer({ setPage }) {
  const goTo = (pageName) => {
    setPage(pageName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2f2f2f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_1fr_1fr_0.95fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white p-2" data-protected-image><ProtectedImage src={SITE.logo} alt="Logo PRODDEKO-Belgique" className="h-full w-full object-contain" /></div>
              <div><div className="text-3xl font-black tracking-tight text-orange-300">{SITE.tradeName}</div><div className="mt-1 text-lg font-bold text-white">{SITE.name}</div><div className="mt-1 text-xs font-semibold text-slate-300">Belgique • RDC</div></div>
            </div>
            <div className="mt-8 h-px w-full bg-white/20" />
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <button type="button" onClick={() => goTo("about")} className="block hover:text-white">Qui sommes-nous ?</button>
              <button type="button" onClick={() => goTo("mission")} className="block hover:text-white">Mission</button>
              <button type="button" onClick={() => goTo("values")} className="block hover:text-white">Valeurs</button>
              <button type="button" onClick={() => goTo("governance")} className="block hover:text-white">Gouvernance</button>
            </div>
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-200">Nos actions</div>
            <div className="mt-5 space-y-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">
              <button type="button" onClick={() => goTo("action-sustainable")} className="block text-left hover:text-white">Développement durable</button>
              <button type="button" onClick={() => goTo("action-education")} className="block text-left hover:text-white">Éducation citoyenne</button>
              <button type="button" onClick={() => goTo("action-governance")} className="block text-left hover:text-white">Gouvernance éthique</button>
              <button type="button" onClick={() => goTo("action-solidarity")} className="block text-left hover:text-white">Solidarité internationale</button>
            </div>
            <div className="mt-7 h-px w-full bg-white/20" />
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <button type="button" onClick={() => goTo("project-kilengi")} className="block hover:text-white">Projet Kilengi</button>
              <button type="button" onClick={() => goTo("project-boma")} className="block hover:text-white">Projet Boma</button>
              <button type="button" onClick={() => goTo("project-jpn95")} className="block hover:text-white">Licence JPN95 / Fertilomer</button>
              <button type="button" onClick={() => goTo("project-rebond-foot")} className="block hover:text-white">Rebondir par le Foot</button>
            </div>
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-[0.25em] text-white">Contact</div>
            <div className="mt-5 space-y-3 text-sm font-bold leading-7 text-slate-100"><div>{SITE.tradeName}</div><div>{SITE.name}</div><div>{SITE.belgiumLocation}</div><div>{SITE.drcLocation}</div><div className="pt-2">T : {SITE.phone}</div><div>E : {SITE.email}</div></div>
            <div className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-white">Suivez-nous</div>
            <div className="mt-4 flex gap-3 text-slate-300"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-black">f</span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-black">in</span><span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-black">▶</span></div>
          </div>
          <div>
            <div className="text-xs font-black uppercase tracking-[0.25em] text-white">Compte bancaire</div>
            <div className="mt-5 space-y-2 text-sm font-bold leading-7 text-slate-100"><div>{SITE.accountName}</div><div>IBAN : {SITE.iban}</div><div>BIC : {SITE.bic}</div></div>
            <div className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-white">Chiffres clés</div>
            <div className="mt-5 grid grid-cols-2 gap-3">{stats.map((stat) => <div key={stat.label} className="rounded-xl border border-white/10 bg-white/10 p-3"><div className="text-xl font-black text-orange-300">{stat.value}</div><div className="mt-1 text-[11px] leading-4 text-slate-300">{stat.label}</div></div>)}</div>
          </div>
          <div className="bg-[#1f1b1d] p-6 lg:-my-14 lg:py-14">
            <div className="text-xs font-black uppercase tracking-[0.25em] text-white">Soutenir {SITE.tradeName}</div>
            <p className="mt-5 text-sm font-semibold leading-7 text-slate-200">Soutenez nos projets en santé communautaire, eau potable, agriculture durable, éducation citoyenne et solidarité internationale.</p>
            <a href="#donate" onClick={(event) => { event.preventDefault(); goTo("donate"); }} className="mt-6 flex w-full items-center justify-between bg-orange-600 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-orange-700">Je fais un don <span className="text-xl">›</span></a>
            <a href="#partner" onClick={(event) => { event.preventDefault(); goTo("partner"); }} className="mt-3 flex w-full items-center justify-between border border-white/20 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10">Devenir partenaire <span className="text-xl">›</span></a>
            <a href="#volunteer" onClick={(event) => { event.preventDefault(); goTo("volunteer"); }} className="mt-3 flex w-full items-center justify-between border border-white/20 px-6 py-4 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/10">Devenir bénévole <span className="text-xl">›</span></a>
            <div className="mt-8 text-xs font-black uppercase tracking-[0.25em] text-white">Newsletter</div>
            <p className="mt-4 text-sm leading-6 text-slate-300">Recevez nos nouvelles, appels à partenariat et rapports d’impact.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#202020] px-6 py-12 text-xs text-slate-300">
        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <BrandBlock light center size="lg" />
          <div className="text-sm leading-7 text-slate-200"><strong>{SITE.legalName}</strong>, agissant sous le nom commercial <strong>{SITE.tradeName}</strong><br />Numéro d’entreprise : <strong>{SITE.enterpriseNumber}</strong><br />Email : <a href={`mailto:${SITE.email}`} className="underline underline-offset-4 hover:text-white">{SITE.email}</a></div>
          <div className="mx-auto max-w-3xl text-xs leading-6 text-slate-400"><strong>Protection des données personnelles – RGPD</strong><br />Conformément au Règlement Général sur la Protection des Données, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition concernant vos données personnelles. Pour exercer ces droits, veuillez écrire à <a href={`mailto:${SITE.email}`} className="underline underline-offset-4 hover:text-white">{SITE.email}</a>.</div>
          <div className="mx-auto max-w-2xl text-xs leading-6 text-slate-500">Ce site peut utiliser des cookies nécessaires à son fonctionnement ainsi que, le cas échéant, des cookies de mesure d’audience.</div>
          <div className="border-t border-white/10 pt-5">
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
              <div className="font-semibold text-slate-400">© {new Date().getFullYear()} {SITE.tradeName} / {SITE.name}. Tous droits réservés.</div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
                <a href="#legal-notice" onClick={(event) => { event.preventDefault(); goTo("legal-notice"); }} className="hover:text-white">Mentions légales</a><span>|</span>
                <a href="#privacy" onClick={(event) => { event.preventDefault(); goTo("privacy"); }} className="hover:text-white">RGPD</a><span>|</span>
                <a href="#cookies" onClick={(event) => { event.preventDefault(); goTo("cookies"); }} className="hover:text-white">Cookies</a><span>|</span>
                <a href="#contact-info" onClick={(event) => { event.preventDefault(); goTo("contact-info"); }} className="hover:text-white">Contact</a><span>|</span>
                <a href="#activity-reports" onClick={(event) => { event.preventDefault(); goTo("activity-reports"); }} className="hover:text-white">Rapports d’activités</a><span>|</span>
                <a href="#donate" onClick={(event) => { event.preventDefault(); goTo("donate"); }} className="hover:text-white">Faire un don</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CookieConsent({ setPage }) {
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("proddeko_cookie_consent");
    if (!saved) setVisible(true);
    else {
      try {
        const parsed = JSON.parse(saved);
        setAnalytics(Boolean(parsed.analytics));
      } catch {
        setVisible(true);
      }
    }
  }, []);

  const saveConsent = (analyticsValue) => {
    const consent = {
      necessary: true,
      analytics: analyticsValue,
      savedAt: new Date().toISOString(),
      version: "1.0",
    };
    localStorage.setItem("proddeko_cookie_consent", JSON.stringify(consent));
    setAnalytics(analyticsValue);
    setVisible(false);
  };

  if (!visible) {
    return (
      <button
        type="button"
        onClick={() => setVisible(true)}
        className="fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-lg hover:bg-slate-50"
        aria-label="Modifier mes préférences cookies"
      >
        <Cookie className="h-4 w-4 text-orange-500" /> Cookies
      </button>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.22)] md:p-6">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-500"><Cookie className="h-5 w-5" /></div>
              <div>
                <h3 className="text-base font-black text-blue-950">Gestion des cookies</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">Nous utilisons des cookies nécessaires au fonctionnement du site. Avec votre accord, des cookies de mesure d’audience peuvent aussi être utilisés pour améliorer l’expérience utilisateur.</p>
              </div>
            </div>

            {preferencesOpen && (
              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-sm font-black text-blue-950">Cookies nécessaires</div>
                    <p className="mt-2 text-xs leading-5 text-slate-600">Toujours actifs : ils permettent le fonctionnement technique du site.</p>
                    <div className="mt-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Obligatoires</div>
                  </div>
                  <label className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-black text-blue-950">Mesure d’audience</div>
                        <p className="mt-2 text-xs leading-5 text-slate-600">Facultatif : aide à comprendre l’utilisation du site.</p>
                      </div>
                      <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} className="mt-1 h-5 w-5 accent-orange-500" />
                    </div>
                  </label>
                </div>
              </div>
            )}

            <button type="button" onClick={() => setPage("cookies")} className="mt-4 text-xs font-bold text-blue-950 underline underline-offset-4">Lire la politique cookies</button>
          </div>

          <div className="flex flex-col gap-3 md:min-w-[230px]">
            <button type="button" onClick={() => saveConsent(true)} className="rounded-full bg-orange-500 px-5 py-3 text-sm font-black text-white hover:bg-orange-600">Tout accepter</button>
            <button type="button" onClick={() => saveConsent(false)} className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-50">Refuser le facultatif</button>
            <button type="button" onClick={() => setPreferencesOpen((value) => !value)} className="rounded-full border border-slate-200 px-5 py-3 text-sm font-black text-slate-700 hover:bg-slate-50">Personnaliser</button>
            {preferencesOpen && <button type="button" onClick={() => saveConsent(analytics)} className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-slate-800">Enregistrer mes choix</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [lightbox, setLightbox] = useState({ src: null, title: "" });

  const openLightbox = (src, title) => setLightbox({ src, title });
  const closeLightbox = () => setLightbox({ src: null, title: "" });

  let content;
  if (page === "home") content = <Home setPage={setPage} onOpen={openLightbox} />;
  else if (page === "project-kilengi") content = <ProjectPage project={KILENGI} type="kilengi" onOpen={openLightbox} />;
  else if (page === "project-boma") content = <ProjectPage project={BOMA} type="boma" onOpen={openLightbox} />;
  else if (page === "project-jpn95") content = <ProjectPage project={JPN95} type="jpn95" onOpen={openLightbox} />;
  else if (page === "project-rebond-foot") content = <ProjectPage project={REBOND_FOOT} type="rebond-foot" onOpen={openLightbox} />;
  else if (page === "contact-form") content = <ContactForm />;
  else if (page === "activity-reports") content = <ActivityReportsPage />;
  else if (page === "donate") content = <SupportActionPage type="donate" />;
  else if (page === "partner") content = <SupportActionPage type="partner" />;
  else if (page === "volunteer") content = <SupportActionPage type="volunteer" />;
  else content = <GenericPage content={pageContent[page] || pageContent.about} />;

  return (
    <>
      <ImageProtection />
      <Header page={page} setPage={setPage} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      {content}
      <Footer setPage={setPage} />
      <CookieConsent setPage={setPage} />
      <ImageLightbox src={lightbox.src} title={lightbox.title} onClose={closeLightbox} />
    </>
  );
}
