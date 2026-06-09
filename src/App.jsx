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
  UserCheck,
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

const projectCards = [
  {
    title: "Projet Kilengi",

    category: "Projets",

    icon: Sparkles,

    page: "kilengi",
  },

  {
    title: "Projet Boma",

    category: "Projets",

    icon: Globe,

    page: "boma",
  },

  {
    title: "JPN95 — Souveraineté agricole",

    category: "Projets",

    icon: GraduationCap,

    page: "jpn95",
  },

  {
    title: "Rebondir par le Foot",

    category: "Projets",

    icon: Users,

    page: "football",
  },

  {
    title: "Impact",

    category: "Projets",

    icon: HeartHandshake,

    page: "impact",
  },

  {
    title: "Partenaires",

    category: "Projets",

    icon: Handshake,

    page: "partners",
  },

  {
    title: "Appel à financement",

    category: "Projets",

    icon: ShieldCheck,

    page: "funding",
  },

  {
    title: "Emploi – Primo-arrivants qualifiés",

    category: "Insertion professionnelle",

    icon: UserCheck,

    page: "project-primo-arrivants",
  },
];

function ProtectedImage({
  className = "",
  alt = "",
  ...props
}) {
  return (
    <img
      {...props}
      alt={alt}
      draggable="false"
      onContextMenu={(e) => e.preventDefault()}
      className={`select-none ${className}`}
      style={{
        WebkitUserDrag: "none",
        userSelect: "none",
      }}
    />
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 overflow-hidden rounded-xl border border-slate-200">
            <ProtectedImage
              src={SITE.logo}
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl font-black text-blue-950">
              {SITE.name}
            </h1>

            <p className="text-lg text-slate-500">
              {SITE.tagline}
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <button className="rounded-full bg-slate-100 px-7 py-4 font-bold text-blue-950">
            Accueil
          </button>

          <button className="font-bold text-blue-950">
            À propos
          </button>

          <button className="font-bold text-blue-950">
            Nos actions
          </button>

          <button className="rounded-full bg-slate-100 px-7 py-4 font-bold text-blue-950">
            Projets
          </button>

          <button className="font-bold text-blue-950">
            Contact
          </button>

          <button className="rounded-full border border-slate-300 px-7 py-4 font-bold text-blue-950">
            Projet Kilengi
          </button>

          <button className="rounded-full bg-orange-500 px-8 py-4 font-bold text-white">
            Nous contacter
          </button>
        </div>
      </div>
    </header>
  );
}

function ProjectNavigation({ setPage }) {
  return (
    <section className="relative z-20 mx-auto -mt-6 max-w-7xl px-6">
      <div className="grid overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl lg:grid-cols-[1.2fr_0.9fr]">
        <div className="max-h-[640px] overflow-y-auto p-8">
          <div className="text-sm font-black uppercase tracking-[0.35em] text-orange-500">
            Projets
          </div>

          <h2 className="mt-4 text-5xl font-black text-blue-950">
            Navigation stratégique
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projectCards.map((project) => {
              const Icon = project.icon;

              return (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setPage(project.page)}
                  className="group flex items-start gap-5 rounded-[2rem] bg-slate-50 p-6 text-left transition hover:-translate-y-1 hover:bg-orange-50 hover:shadow-lg"
                >
                  <div className="rounded-2xl bg-orange-100 p-4 text-orange-500">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black leading-tight text-blue-950">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-lg text-slate-500">
                      {project.category}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-black to-red-950 p-10 text-white">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-orange-200">
            PRODDEKO-BELGIQUE
          </div>

          <h3 className="mt-10 text-6xl font-black leading-tight">
            Une action institutionnelle ancrée dans les territoires
          </h3>

          <p className="mt-10 text-2xl leading-10 text-slate-200">
            Des projets concrets, documentés et orientés
            impact entre la Belgique et la RDC.
          </p>

          <div className="mt-14 space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-4xl font-black text-orange-400">
                10+
              </div>

              <div className="mt-2 text-lg text-slate-300">
                Zones d’intervention
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-4xl font-black text-orange-400">
                200 000+
              </div>

              <div className="mt-2 text-lg text-slate-300">
                Bénéficiaires
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="text-4xl font-black text-orange-400">
                Belgique – RDC
              </div>

              <div className="mt-2 text-lg text-slate-300">
                Coopération stratégique
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ src, alt, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(src)}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <ProtectedImage
        src={src}
        alt={alt}
        className="h-80 w-full object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="absolute bottom-4 right-4 rounded-full bg-white p-3 opacity-0 transition group-hover:opacity-100">
        <ZoomIn className="h-5 w-5 text-slate-700" />
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
          className="absolute right-4 top-4 rounded-full bg-white p-3"
        >
          <X className="h-5 w-5" />
        </button>

        <ProtectedImage
          src={src}
          alt="Preview"
          className="max-h-[90vh] rounded-3xl"
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
            className="h-full w-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-orange-950/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-32">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-orange-200 backdrop-blur">
              Inclusion • Expertise • Emploi
            </div>

            <h1 className="mt-10 text-6xl font-black leading-tight md:text-7xl">
              EMPLOI
              <span className="block text-orange-400">
                & PRIMO-ARRIVANTS
              </span>
            </h1>

            <p className="mt-10 text-2xl leading-10 text-slate-200">
              Valoriser les compétences des ingénieurs et
              techniciens qualifiés issus de la migration.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-4">
          {EMPLOI_PRIMO_ARRIVANTS.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="text-5xl font-black text-orange-500">
                {metric.value}
              </div>

              <div className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
              Vision
            </div>

            <h2 className="mt-5 text-5xl font-black text-blue-950">
              Une expertise humaine au service des territoires
            </h2>

            <p className="mt-8 text-xl leading-9 text-slate-600">
              Le projet développe une nouvelle approche
              d’intégration professionnelle fondée sur les
              compétences réelles et les besoins du
              patrimoine.
            </p>

            <div className="mt-10 space-y-5">
              {EMPLOI_PRIMO_ARRIVANTS.objectives.map(
                (objective) => (
                  <div
                    key={objective}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="mt-2 h-3 w-3 rounded-full bg-orange-500" />

                    <p className="text-lg leading-8 text-slate-700">
                      {objective}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl">
            <ProtectedImage
              src={EMPLOI_PRIMO_ARRIVANTS.brochure}
              alt="Brochure"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="text-sm font-black uppercase tracking-[0.25em] text-orange-500">
          Galerie
        </div>

        <h2 className="mt-5 text-5xl font-black text-blue-950">
          Insertion & Expertise
        </h2>

        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
          Des compétences qualifiées au service du patrimoine
          et du développement territorial.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
      <Header />

      {page === "home" && (
        <>
          <section className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24">
              <div className="max-w-4xl">
                <div className="text-sm font-black uppercase tracking-[0.3em] text-orange-500">
                  Solutions agricoles
                </div>

                <h1 className="mt-6 text-6xl font-black leading-tight text-blue-950">
                  Applications du fertilisant naturel
                </h1>

                <p className="mt-8 text-2xl leading-10 text-slate-600">
                  Une solution naturelle adaptée à plusieurs
                  cultures : céréales, horticulture, prairies
                  et agriculture durable.
                </p>
              </div>
            </div>
          </section>

          <ProjectNavigation setPage={setPage} />
        </>
      )}

      {page === "project-primo-arrivants" && (
        <PrimoArrivantsPage onOpen={openLightbox} />
      )}

      <footer className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-3xl font-black text-orange-400">
                {SITE.name}
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Un projet humain, institutionnel et durable.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-black">
                Coordonnées
              </h4>

              <div className="mt-6 space-y-4 text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-orange-400" />
                  {SITE.email}
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-orange-400" />
                  {SITE.phone}
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-orange-400" />
                  {SITE.belgiumLocation}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-black">
                Projet stratégique
              </h4>

              <p className="mt-6 text-lg leading-8 text-slate-300">
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
