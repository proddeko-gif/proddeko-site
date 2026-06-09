```jsx
import React, { useEffect, useRef, useState } from "react";

import {
  BookOpen,
  Briefcase,
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
  Wrench,
  X,
  ZoomIn,
} from "lucide-react";

const SITE = {
  name: "PRODDEKO-Belgique",
  brandName: "Triple Sustain Impact",
  tagline:
    "Solidarité internationale • Développement durable • Gouvernance éthique",

  email: "admin@proddeko.online",

  phone: "+32 492 70 45 04",

  belgiumLocation: "Verviers, Belgique",

  drcLocation: "Kinzau-Mvuete, RDC",

  logo: "/images/proddeko-logo.png",
};

const PATRIMOINE_EMPLOI = {
  title: "Projet Patrimoine & Emploi — Verviers",

  subtitle:
    "Projet pilote d’insertion professionnelle pour la maintenance technique du patrimoine religieux.",

  hero:
    "/images/projects/patrimoine-emploi/patrimoine-emploi-cover.png",

  brochure:
    "/images/projects/patrimoine-emploi/patrimoine-emploi-brochure.png",

  gallery: [
    "/images/projects/patrimoine-emploi/patrimoine-emploi-cover.png",

    "/images/projects/patrimoine-emploi/pavlo-workshop.jpg",

    "/images/projects/patrimoine-emploi/urbain-matimpi.jpg",

    "/images/projects/patrimoine-emploi/orgue-verviers.jpg",
  ],

  metrics: [
    { value: "2026", label: "année pilote" },

    { value: "Verviers", label: "zone pilote" },

    { value: "Patrimoine", label: "maintenance d’orgues" },

    { value: "Insertion", label: "emploi technique" },
  ],

  objectives: [
    "Sauvegarder le patrimoine musical et historique des églises.",

    "Créer des opportunités professionnelles pour des ingénieurs qualifiés issus de la migration.",

    "Mettre en place des diagnostics techniques fiables pour les fabriques d’église.",

    "Développer une expertise locale durable en maintenance d’orgues.",
  ],

  contacts: [
    {
      name: "Urbain Matimpi Yongo",

      role: "Président & Coordination du projet",

      image:
        "/images/projects/patrimoine-emploi/urbain-matimpi.jpg",
    },

    {
      name: "Pavlo Morar",

      role: "Responsable technique",

      image:
        "/images/projects/patrimoine-emploi/pavlo-workshop.jpg",
    },
  ],
};

const EMPLOI_PRIMO_ARRIVANTS = {
  title: "Projet Emploi – Primo-arrivants qualifiés",

  subtitle:
    "Valoriser les compétences des ingénieurs, techniciens et professionnels issus de la migration à travers des projets concrets d’utilité sociale et patrimoniale.",

  hero:
    "/images/projects/primo-arrivants/primo-arrivants-cover.jpg",

  brochure:
    "/images/projects/primo-arrivants/primo-arrivants-brochure.jpg",

  gallery: [
    "/images/projects/primo-arrivants/primo-arrivants-cover.jpg",

    "/images/projects/primo-arrivants/atelier-technique.jpg",

    "/images/projects/primo-arrivants/patrimoine.jpg",

    "/images/projects/primo-arrivants/reunion.jpg",
  ],

  metrics: [
    { value: "2026", label: "année pilote" },

    { value: "Belgique", label: "territoire d’expérimentation" },

    { value: "Insertion", label: "emploi qualifié" },

    { value: "Patrimoine", label: "maintenance technique" },
  ],

  objectives: [
    "Faciliter l’intégration professionnelle des primo-arrivants qualifiés.",

    "Valoriser les compétences techniques et scientifiques des ingénieurs migrants.",

    "Créer des opportunités d’emploi à travers les métiers du patrimoine et de la maintenance.",

    "Développer des projets pilotes d’insertion professionnelle à impact territorial.",

    "Favoriser la coopération entre patrimoine, inclusion sociale et innovation durable.",
  ],

  contacts: [
    {
      name: "Urbain Matimpi Yongo",

      role: "Coordination stratégique",

      image:
        "/images/projects/patrimoine-emploi/urbain-matimpi.jpg",
    },

    {
      name: "Pavlo Morar",

      role: "Expert technique & maintenance",

      image:
        "/images/projects/patrimoine-emploi/pavlo-workshop.jpg",
    },
  ],
};

const stats = [
  { value: "200 000+", label: "bénéficiaires accompagnés" },

  { value: "10+", label: "zones d’action" },

  { value: "8+", label: "partenaires stratégiques" },

  { value: "6", label: "universités partenaires" },
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
      {
        label: "Développement durable",

        page: "action-sustainable",

        icon: Globe,
      },

      {
        label: "Éducation citoyenne",

        page: "action-education",

        icon: GraduationCap,
      },

      {
        label: "Solidarité internationale",

        page: "action-solidarity",

        icon: Handshake,
      },
    ],
  },

  {
    label: "Projets",

    items: [
      {
        label: "Patrimoine & Emploi",

        page: "project-patrimoine",

        icon: Wrench,
      },

      {
        label: "Emploi – Primo-arrivants",

        page: "project-primo-arrivants",

        icon: Briefcase,
      },

      {
        label: "Impact",

        page: "projects-impact",

        icon: Sparkles,
      },
    ],
  },

  {
    label: "Contact",

    items: [
      { label: "Coordonnées", page: "contact", icon: Mail },
    ],
  },
];

function ProtectedImage({ className = "", alt = "", ...props }) {
  return (
    <img
      {...props}
      alt={alt}
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
      className={`select-none ${className}`}
      style={{ WebkitUserDrag: "none", userSelect: "none" }}
    />
  );
}

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div
          className={`text-sm font-bold uppercase tracking-[0.22em] ${
            light ? "text-orange-300" : "text-orange-500"
          }`}
        >
          {eyebrow}
        </div>
      )}

      <h2
        className={`mt-3 text-3xl font-black tracking-tight md:text-5xl ${
          light ? "text-white" : "text-blue-950"
        }`}
      >
        {title}
      </h2>

      {text && (
        <p
          className={`mt-5 text-lg leading-8 ${
            light ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function MenuGroup({
  group,
  activeMenu,
  setActiveMenu,
  setPage,
}) {
  const wrapperRef = useRef(null);

  const isOpen = activeMenu === group.label;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, [setActiveMenu]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() =>
          setActiveMenu((current) =>
            current === group.label ? null : group.label
          )
        }
        className="flex items-center gap-1 rounded-full px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
      >
        {group.label}

        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-40 mt-3 w-[320px] rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
          <div className="space-y-2">
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
                  className="flex w-full items-center gap-3 rounded-2xl p-4 text-left transition hover:bg-slate-50"
                >
                  <div className="rounded-xl bg-orange-50 p-2 text-orange-500">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="font-semibold text-slate-700">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function Header({ setPage }) {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <button
          type="button"
          onClick={() => setPage("home")}
          className="flex items-center gap-3"
        >
          <div className="h-12 w-12 overflow-hidden rounded-xl border border-slate-200">
            <ProtectedImage
              src={SITE.logo}
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <div className="text-2xl font-black text-blue-950">
              {SITE.name}
            </div>

            <div className="hidden text-sm text-slate-500 md:block">
              {SITE.tagline}
            </div>
          </div>
        </button>

        <nav className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => setPage("home")}
            className="rounded-full px-5 py-3 text-sm font-bold hover:bg-slate-100"
          >
            Accueil
          </button>

          {navItems.map((group) => (
            <MenuGroup
              key={group.label}
              group={group}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              setPage={setPage}
            />
          ))}
        </nav>
      </div>
    </header>
  );
}

function GalleryCard({ src, alt, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(src)}
      className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <ProtectedImage
        src={src}
        alt={alt}
        className="h-72 w-full object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="absolute bottom-3 right-3 rounded-full bg-white p-2 opacity-0 transition group-hover:opacity-100">
        <ZoomIn className="h-4 w-4 text-slate-700" />
      </div>
    </button>
  );
}

function ImageLightbox({ src, onClose }) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full bg-white p-2"
        >
          <X className="h-5 w-5" />
        </button>

        <ProtectedImage
          src={src}
          alt="Preview"
          className="max-h-[90vh] rounded-2xl"
        />
      </div>
    </div>
  );
}

function PrimoArrivantsPage({ onOpen }) {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <ProtectedImage
            src={EMPLOI_PRIMO_ARRIVANTS.hero}
            alt="Projet Emploi"
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-orange-950/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-orange-200 backdrop-blur">
              Inclusion • Expertise • Emploi
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              EMPLOI
              <span className="block text-orange-400">
                & PRIMO-ARRIVANTS
              </span>
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-200">
              Valoriser les compétences des ingénieurs et
              techniciens qualifiés issus de la migration.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Projet stratégique"
          title={EMPLOI_PRIMO_ARRIVANTS.title}
          text={EMPLOI_PRIMO_ARRIVANTS.subtitle}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {EMPLOI_PRIMO_ARRIVANTS.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="text-4xl font-black text-orange-500">
                {metric.value}
              </div>

              <div className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionTitle
              eyebrow="Vision"
              title="Une expertise humaine au service des territoires"
              text="Le projet développe une nouvelle approche d’intégration professionnelle fondée sur les compétences réelles."
            />

            <div className="mt-8 space-y-4">
              {EMPLOI_PRIMO_ARRIVANTS.objectives.map(
                (objective) => (
                  <div
                    key={objective}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mt-2 h-3 w-3 rounded-full bg-orange-500" />

                    <p className="leading-7 text-slate-700">
                      {objective}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <ProtectedImage
              src={EMPLOI_PRIMO_ARRIVANTS.brochure}
              alt="Brochure"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <SectionTitle
          eyebrow="Galerie"
          title="Insertion & Expertise"
          text="Des compétences qualifiées au service du patrimoine et du développement territorial."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {EMPLOI_PRIMO_ARRIVANTS.gallery.map(
            (src, index) => (
              <GalleryCard
                key={src}
                src={src}
                alt={`Projet ${index + 1}`}
                onOpen={onOpen}
              />
            )
          )}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionTitle
            eyebrow="Coordination"
            title="Équipe du projet"
            text="Une approche professionnelle, humaine et durable."
            light
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {EMPLOI_PRIMO_ARRIVANTS.contacts.map(
              (person) => (
                <div
                  key={person.name}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="flex items-center gap-5">
                    <div className="h-24 w-24 overflow-hidden rounded-2xl border border-white/10">
                      <ProtectedImage
                        src={person.image}
                        alt={person.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-2xl font-black text-white">
                        {person.name}
                      </h3>

                      <p className="mt-2 text-orange-300">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (src) => {
    setLightbox(src);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header setPage={setPage} />

      {page === "project-primo-arrivants" && (
        <PrimoArrivantsPage onOpen={openLightbox} />
      )}

      <footer className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-black text-orange-400">
                {SITE.name}
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Un projet humain, technique et durable.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold">
                Coordonnées
              </h4>

              <div className="mt-5 space-y-3 text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-orange-400" />
                  {SITE.email}
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-orange-400" />
                  {SITE.phone}
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-orange-400" />
                  {SITE.belgiumLocation}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold">
                Projet stratégique
              </h4>

              <p className="mt-4 leading-7 text-slate-300">
                Emploi – Primo-arrivants qualifiés :
                valoriser les compétences et favoriser
                l’insertion professionnelle durable.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <ImageLightbox
        src={lightbox}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}
```
