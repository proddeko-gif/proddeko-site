import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileText,
  Image as ImageIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Wrench,
  X,
  Zap,
  ZoomIn,
} from "lucide-react";

const SITE = {
  name: "PRODDEKO-Belgique",
  tagline:
    "Solidarité internationale • Développement durable • Gouvernance éthique",
  email: "admin@proddeko.online",
  phone: "+32 488 84 46 98",
  locationBelgium: "Welkenraedt, Belgique",
  locationDRC: "Kinzau-Mvuete, RDC",
  logo: "/images/proddeko-logo.png",
  hero: "/images/proddeko-hero.jpg",
};

const KILENGI = {
  title: "Réhabilitation du Centre de Santé de Référence de Kilengi",
  subtitle:
    "Réhabilitation énergétique, sécurisation de l’alimentation électrique et valorisation documentaire du chantier.",
  hero: "/images/projects/kilengi/CS-Kilengi_avril-22_1.jpeg",
  schema: "/schema-kilengi.png",
  reportPdf: "/docs/CS-Kilengi_Rapport_photos.pdf",
  budgetDocument: "/images/projects/kilengi/CS-Kilengi_Cout-total-activites.png",
  before: [
    "/images/projects/kilengi/before/kilengi-avant-01.jpg",
    "/images/projects/kilengi/before/kilengi-avant-02.jpg",
    "/images/projects/kilengi/before/kilengi-avant-03.jpg",
    "/images/projects/kilengi/before/kilengi-avant-04.jpg",
    "/images/projects/kilengi/before/kilengi-avant-05.jpg",
  ],
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
  after: [
    "/images/projects/kilengi/after/kilengi-apres-01.jpg",
    "/images/projects/kilengi/after/kilengi-apres-02.jpg",
    "/images/projects/kilengi/after/kilengi-apres-03.jpg",
    "/images/projects/kilengi/after/kilengi-apres-04.jpg",
  ],
};

const stats = [
  { value: "200 000+", label: "bénéficiaires accompagnés" },
  { value: "10+", label: "zones et pays d’action" },
  { value: "8+", label: "partenaires stratégiques" },
  { value: "6", label: "universités partenaires" },
];

const impactPoints = [
  "Réhabilitation d’une infrastructure de santé essentielle",
  "Sécurisation de l’alimentation électrique pour les services prioritaires",
  "Documentation visuelle du chantier avant, pendant et après les travaux",
  "Appui à la crédibilité du projet auprès des partenaires et bailleurs",
];

const technicalItems = [
  "Panneaux solaires",
  "Régulateur de charge MPPT",
  "Onduleur / chargeur hybride",
  "Banque de batteries lithium",
  "Protections AC/DC et mise à la terre",
];

function SectionTitle({ eyebrow, title, text, light = false, center = false }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? (
        <div
          className={`text-sm font-bold uppercase tracking-[0.22em] ${
            light ? "text-orange-300" : "text-orange-500"
          }`}
        >
          {eyebrow}
        </div>
      ) : null}

      <h2
        className={`mt-3 text-3xl font-black tracking-tight md:text-4xl ${
          light ? "text-white" : "text-blue-950"
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

function Header({ page, setPage, mobileOpen, setMobileOpen }) {
  const navButtonClass =
    "rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-slate-100";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <button
          type="button"
          onClick={() => setPage("home")}
          className="flex items-center gap-3 text-left"
        >
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <img
              src={SITE.logo}
              alt="Logo PRODDEKO-Belgique"
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <div className="text-lg font-black tracking-tight text-blue-950">
              {SITE.name}
            </div>
            <div className="hidden text-sm text-slate-500 md:block">
              {SITE.tagline}
            </div>
          </div>
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={() => setPage("home")}
            className={`${navButtonClass} ${
              page === "home" ? "bg-slate-100 text-blue-950" : "text-slate-700"
            }`}
          >
            Accueil
          </button>
          <button
            type="button"
            onClick={() => setPage("projects")}
            className={`${navButtonClass} ${
              page === "projects"
                ? "bg-slate-100 text-blue-950"
                : "text-slate-700"
            }`}
          >
            Projet Kilengi
          </button>
          <a
            href={KILENGI.reportPdf}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Rapport PDF
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Nous contacter
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setPage("home");
                setMobileOpen(false);
              }}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700"
            >
              Accueil
            </button>
            <button
              type="button"
              onClick={() => {
                setPage("projects");
                setMobileOpen(false);
              }}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700"
            >
              Projet Kilengi
            </button>
            <a
              href={KILENGI.reportPdf}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
            >
              Rapport PDF
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero({ setPage }) {
  return (
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
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-slate-100 backdrop-blur">
              Belgique • RDC • Co-développement • Solidarité internationale
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Une action durable entre territoires, citoyens et partenaires
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">
              PRODDEKO-Belgique agit comme passerelle entre la Belgique et la RDC
              pour soutenir des projets utiles, documentés et structurants, au
              service des communautés.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setPage("projects")}
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Voir le projet Kilengi
              </button>

              <a
                href={KILENGI.reportPdf}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Télécharger le rapport
              </a>
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
                <div className="mt-3 text-base text-slate-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePreview({ setPage }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
          <img
            src={KILENGI.hero}
            alt="Projet Kilengi"
            className="h-full min-h-[440px] w-full object-cover"
          />
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
            Projet mis en avant
          </div>

          <h2 className="mt-3 text-3xl font-black text-blue-950 md:text-4xl">
            {KILENGI.title}
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            Ce projet documente les travaux de réhabilitation et la remise en
            service d’une solution énergétique durable pour le Centre de Santé de
            Référence de Kilengi. Il met en avant les photos du chantier, le
            rapport documentaire et les éléments budgétaires essentiels.
          </p>

          <div className="mt-6 space-y-3">
            {impactPoints.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <span className="text-sm leading-6 text-slate-600">{item}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setPage("projects")}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-900"
          >
            Ouvrir la page projet
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ImageLightbox({ src, title, onClose }) {
  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[95vh] w-full max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-slate-800 shadow"
        >
          <X className="h-5 w-5" />
        </button>

        <img
          src={src}
          alt={title}
          className="max-h-[95vh] w-full rounded-2xl bg-white object-contain"
        />
      </div>
    </div>
  );
}

function GalleryCard({ src, alt, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(src, alt)}
      className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="absolute bottom-3 right-3 rounded-full bg-white/90 p-2 text-slate-800 opacity-0 shadow transition group-hover:opacity-100">
        <ZoomIn className="h-4 w-4" />
      </div>
    </button>
  );
}

function GallerySection({ title, eyebrow, images, onOpen }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          {eyebrow ? (
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
              {eyebrow}
            </div>
          ) : null}
          <h3 className="mt-1 text-xl font-black text-blue-950">{title}</h3>
        </div>

        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
          {images.length} visuels
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {images.map((src, index) => (
          <GalleryCard
            key={`${title}-${index}`}
            src={src}
            alt={`${title} Kilengi ${index + 1}`}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-black text-blue-950">{title}</h3>
          <div className="mt-3 text-sm leading-7 text-slate-600">{children}</div>
        </div>
      </div>
    </div>
  );
}

function KilengiProjectPage() {
  const [lightbox, setLightbox] = useState({ src: "", title: "" });

  const featuredImages = useMemo(() => KILENGI.during.slice(0, 6), []);

  const openLightbox = (src, title) => setLightbox({ src, title });
  const closeLightbox = () => setLightbox({ src: "", title: "" });

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Projet en cours"
          title={KILENGI.title}
          text={KILENGI.subtitle}
        />

        <div className="mt-10 rounded-[2.25rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-600">
                Kilengi • RDC
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-blue-950 md:text-5xl">
                Réhabilitation énergétique et documentation complète du chantier
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Le projet vise à renforcer l’accès à une alimentation électrique
                fiable pour un centre de santé de référence, tout en valorisant
                les différentes étapes du chantier à travers une présentation
                visuelle, technique et documentaire claire.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Réhabilitation",
                  "Énergie durable",
                  "Suivi photographique",
                  "Transparence documentaire",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={KILENGI.reportPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-900"
                >
                  <Download className="h-4 w-4" />
                  Télécharger le rapport photo
                </a>

                <a
                  href={KILENGI.budgetDocument}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                >
                  <FileText className="h-4 w-4" />
                  Voir le document budgétaire
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
              <img
                src={KILENGI.hero}
                alt="Travaux du Centre de Santé de Référence de Kilengi"
                className="h-full min-h-[360px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.8fr_0.9fr]">
          <div className="grid gap-6">
            <InfoCard icon={Zap} title="Contexte du projet">
              Le système solaire assurait l’alimentation des services essentiels
              du centre de santé. Après plusieurs années d’exploitation, les
              batteries sont devenues hors d’usage, ce qui compromet la qualité
              et la continuité des services.
            </InfoCard>

            <InfoCard icon={Wrench} title="Objectif principal">
              Remettre en service une solution énergétique durable, sécurisée et
              adaptée aux besoins prioritaires du Centre de Santé de Référence de
              Kilengi, tout en documentant de manière transparente l’évolution
              des travaux.
            </InfoCard>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-7">
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                Schéma technique
              </div>
              <h3 className="mt-2 text-xl font-black text-blue-950">
                Architecture recommandée du système
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Le schéma ci-dessous présente une architecture type intégrant les
                panneaux solaires, les protections, le régulateur de charge,
                l’onduleur hybride et une solution batterie plus durable.
              </p>

              <button
                type="button"
                onClick={() =>
                  openLightbox(KILENGI.schema, "Schéma technique du système Kilengi")
                }
                className="mt-6 block w-full overflow-hidden rounded-[1.5rem] border border-slate-200"
              >
                <img
                  src={KILENGI.schema}
                  alt="Schéma du système solaire de Kilengi"
                  className="w-full bg-white object-contain"
                />
              </button>
            </div>

            <section className="mt-2 grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Pièce documentaire
                </div>

                <h3 className="mt-3 text-xl font-black text-blue-950">
                  Coût total des activités
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  Ce document présente une vue synthétique des coûts estimatifs
                  du projet, répartis par composante d’intervention. Il permet
                  d’améliorer la lisibilité budgétaire et de renforcer la
                  transparence financière des actions menées par
                  PRODDEKO-Belgique.
                </p>

                <button
                  type="button"
                  onClick={() =>
                    openLightbox(
                      KILENGI.budgetDocument,
                      "Tableau du coût total des activités du projet Kilengi"
                    )
                  }
                  className="mt-6 block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <img
                    src={KILENGI.budgetDocument}
                    alt="Tableau du coût total des activités du projet Kilengi"
                    className="w-full bg-white object-contain"
                  />
                </button>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">
                  Intégration web
                </div>

                <h3 className="mt-3 text-xl font-black text-blue-950">
                  Organisation recommandée des fichiers du projet
                </h3>

                <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-slate-100">
                  public/
                  <br />
                  ├── docs/
                  <br />
                  │&nbsp;&nbsp;&nbsp;&nbsp;└── CS-Kilengi_Rapport_photos.pdf
                  <br />
                  ├── images/
                  <br />
                  │&nbsp;&nbsp;&nbsp;&nbsp;└── projects/
                  <br />
                  │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── kilengi/
                  <br />
                  │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── CS-Kilengi_Cout-total-activites.png
                  <br />
                  │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── CS-Kilengi_avril-22_1.jpeg
                  <br />
                  │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── CS-Kilengi_avril-22_01.jpeg
                  <br />
                  │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── CS-Kilengi_avril-22_2.jpeg
                  <br />
                  │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── before/
                  <br />
                  │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── after/
                </div>

                <p className="mt-5 text-slate-600 leading-7">
                  Pour éviter les erreurs d’affichage, tous les visuels du
                  projet Kilengi doivent être regroupés dans un dossier unique,
                  avec des sous-dossiers distincts pour les visuels
                  d’avant-travaux et d’après-travaux. Les noms de fichiers
                  doivent rester simples, cohérents et sans espaces.
                </p>
              </div>
            </section>

            <GallerySection
              eyebrow="Mise en avant"
              title="Sélection de photos mises en avant"
              images={featuredImages}
              onOpen={openLightbox}
            />

            <GallerySection
              eyebrow="Documentation visuelle"
              title="Avant les travaux"
              images={KILENGI.before}
              onOpen={openLightbox}
            />

            <GallerySection
              eyebrow="Chantier"
              title="Pendant les travaux"
              images={KILENGI.during}
              onOpen={openLightbox}
            />

            <GallerySection
              eyebrow="Résultats"
              title="Après les travaux"
              images={KILENGI.after}
              onOpen={openLightbox}
            />
          </div>

          <aside className="grid gap-6">
            <InfoCard icon={ShieldCheck} title="Éléments techniques">
              <ul className="list-disc space-y-2 pl-5">
                {technicalItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard icon={ImageIcon} title="Contenus disponibles">
              <ul className="list-disc space-y-2 pl-5">
                <li>Rapport photo PDF</li>
                <li>Galerie avant / pendant / après travaux</li>
                <li>Schéma technique</li>
                <li>Document budgétaire de synthèse</li>
              </ul>
            </InfoCard>

            <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 via-slate-950 to-emerald-800 p-7 text-white shadow-sm">
              <h3 className="text-lg font-black">Recommandation</h3>
              <p className="mt-4 text-sm leading-7 text-slate-100">
                Mettre ce projet en avant sur le site permet de renforcer la
                visibilité du chantier, la confiance des partenaires et la
                lisibilité des besoins auprès des bailleurs et donateurs.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-lg font-black text-blue-950">
                Contact institutionnel
              </h3>

              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  {SITE.locationBelgium}
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  Coordination terrain : {SITE.locationDRC}
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

              <a
                href={`mailto:${SITE.email}?subject=Projet%20Kilengi`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                <Mail className="h-4 w-4" />
                Écrire à PRODDEKO-Belgique
              </a>
            </div>
          </aside>
        </div>
      </section>

      <ImageLightbox
        src={lightbox.src}
        title={lightbox.title}
        onClose={closeLightbox}
      />
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <img
                src={SITE.logo}
                alt="Logo PRODDEKO-Belgique"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="text-lg font-black text-blue-950">{SITE.name}</div>
              <div className="text-sm text-slate-500">{SITE.tagline}</div>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
            PRODDEKO-Belgique agit comme une passerelle entre la Belgique, la
            RDC et d’autres territoires partenaires pour soutenir des actions
            utiles, durables et transparentes.
          </p>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
            Coordonnées
          </div>
          <ul className="mt-5 space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {SITE.locationBelgium}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {SITE.locationDRC}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> {SITE.email}
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
            Ressources
          </div>
          <div className="mt-5 space-y-3 text-sm text-slate-600">
            <a
              href={KILENGI.reportPdf}
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-orange-500"
            >
              Rapport photo Kilengi
            </a>
            <a
              href={KILENGI.budgetDocument}
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-orange-500"
            >
              Coût total des activités
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header
        page={page}
        setPage={setPage}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {page === "home" ? (
        <>
          <Hero setPage={setPage} />
          <HomePreview setPage={setPage} />
        </>
      ) : null}

      {page === "projects" ? <KilengiProjectPage /> : null}

      <Footer />
    </div>
  );
}
