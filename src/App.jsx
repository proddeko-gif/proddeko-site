import React, { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronDown,
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
  tagline: "Solidarité internationale • Développement durable • Gouvernance éthique",
  email: "admin@proddeko.online",
  phone: "+32 488 84 46 98",
  belgiumLocation: "Welkenraedt, Belgique",
  drcLocation: "Kinzau-Mvuete, RDC",
  logo: "/images/proddeko-logo.png",
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
  during: [
    "/images/projects/kilengi/CS-Kilengi_avril-22_1.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_01.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_2.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_3-2.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_4-2.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_5.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_6.jpeg",
    "/images/projects/kilengi/CS-Kilengi_avril-22_7-2.jpeg",
  ],
  before: makeImagePaths("/images/projects/kilengi/before", "kilengi-avant", 3, "jpg"),
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
  menuLabel: "JPN95 — Souveraineté agricole",
  title: "JPN95 Kongo Central — Fertiliser autrement pour la souveraineté agricole",
  subtitle:
    "Face à la hausse du prix des engrais chimiques, aux tensions internationales et aux fragilités agricoles en RDC, PRODDEKO-Belgique porte un pilote de fertilisant naturel à base d’eau de mer pour renforcer les rendements, les revenus ruraux et la résilience des petits exploitants.",
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
  metrics: [
    { value: "500", label: "petits exploitants ciblés" },
    { value: "24 mois", label: "durée pilote" },
    { value: "195 000 €", label: "financement recherché" },
    { value: "Kongo Central", label: "zone pilote" },
  ],
};

const REBOND_FOOT = {
  title: "Projet « Rebondir par le Foot » — Kinshasa, OC Somwe-Yongo",
  subtitle:
    "Réinsertion sociale de jeunes par le football, l’éducation et le suivi psycho-social.",
  hero: "/images/projects/rebond-foot/rebond-foot-01.png",
  gallery: makeImagePaths("/images/projects/rebond-foot", "rebond-foot", 15, "png"),
};

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
      { label: "Projet Kilengi", page: "project-kilengi", icon: Zap },
      { label: "Projet Boma", page: "project-boma", icon: Leaf },
      { label: JPN95.menuLabel, page: "project-jpn95", icon: Sprout },
      { label: "Rebondir par le Foot", page: "project-rebond-foot", icon: Users },
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
  },
  mission: {
    eyebrow: "Cadre stratégique",
    title: "Notre mission",
    text: "Contribuer à un développement durable, inclusif et participatif en RDC, en renforçant les capacités locales, la gouvernance éthique et l’engagement citoyen.",
  },
  values: {
    eyebrow: "Référentiel d’action",
    title: "Nos valeurs",
    text: "Dignité humaine, transparence, participation citoyenne, solidarité internationale et responsabilité partagée.",
  },
  governance: {
    eyebrow: "Organisation",
    title: "Notre gouvernance",
    text: "Une gouvernance participative et inclusive entre la Belgique et la RDC.",
  },
  financing: {
    eyebrow: "Appui financier",
    title: "Appel à financement",
    text: "PRODDEKO-Belgique recherche des partenaires techniques et financiers souhaitant soutenir des programmes territoriaux à fort impact.",
  },
  "contact-info": {
    eyebrow: "Contact",
    title: "Coordonnées",
    text: `${SITE.email} • ${SITE.phone} • ${SITE.belgiumLocation}`,
  },
  "action-sustainable": {
    eyebrow: "Programme",
    title: "Développement durable",
    text: "Résilience communautaire, gestion responsable des ressources, accès à l’eau potable et autonomisation économique locale.",
  },
  "action-education": {
    eyebrow: "Programme",
    title: "Éducation citoyenne",
    text: "Sensibilisation, leadership local, citoyenneté mondiale, solidarité internationale et engagement des jeunes en Belgique et en RDC.",
  },
  "action-governance": {
    eyebrow: "Programme",
    title: "Gouvernance éthique",
    text: "Transparence, redevabilité, suivi citoyen et dialogue entre institutions et populations.",
  },
  "action-solidarity": {
    eyebrow: "Programme",
    title: "Solidarité internationale",
    text: "Co-développement Belgique–RDC, mobilisation de la diaspora et partenariats multi-acteurs.",
  },
};

function ImageProtection() {
  useEffect(() => {
    const block = (event) => {
      if (event.target?.closest?.("img, [data-protected-image]")) event.preventDefault();
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
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
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
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
      <h2 className={`mt-3 text-3xl font-black tracking-tight md:text-4xl ${light ? "text-white" : "text-blue-950"}`}>
        {title}
      </h2>
      {text && <p className={`mt-5 text-lg leading-8 ${light ? "text-slate-200" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

function Header({ page, setPage }) {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <button onClick={() => setPage("home")} className="flex items-center gap-3 text-left">
          <div className="flex h-12 w-12 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <ProtectedImage src={SITE.logo} alt="Logo PRODDEKO" className="h-full w-full object-contain" />
          </div>
          <div>
            <div className="text-xl font-black tracking-tight text-blue-950 md:text-2xl">{SITE.name}</div>
            <div className="hidden text-sm text-slate-500 md:block">{SITE.tagline}</div>
          </div>
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          <button onClick={() => setPage("home")} className="rounded-full px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100">
            Accueil
          </button>

          {navItems.map((group) => (
            <div key={group.label} className="relative">
              <button
                onClick={() => setOpen(open === group.label ? null : group.label)}
                className="flex items-center gap-1 rounded-full px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100"
              >
                {group.label}
                <ChevronDown className="h-4 w-4" />
              </button>

              {open === group.label && (
                <div className="absolute left-1/2 top-full z-40 mt-3 w-72 -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-4 shadow-xl">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.page}
                        onClick={() => {
                          setPage(item.page);
                          setOpen(null);
                        }}
                        className="flex w-full items-center gap-3 rounded-2xl p-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        <Icon className="h-4 w-4 text-orange-500" />
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          <button onClick={() => setPage("contact-form")} className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white hover:bg-orange-600">
            Nous contacter
          </button>
        </nav>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-full border border-slate-200 p-2 lg:hidden">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <button onClick={() => { setPage("home"); setMobileOpen(false); }} className="mb-2 w-full rounded-2xl border px-4 py-3 text-left font-semibold">
            Accueil
          </button>

          {navItems.map((group) => (
            <div key={group.label} className="mb-2 rounded-2xl border p-3">
              <div className="mb-2 font-black text-blue-950">{group.label}</div>
              {group.items.map((item) => (
                <button
                  key={item.page}
                  onClick={() => { setPage(item.page); setMobileOpen(false); }}
                  className="block w-full rounded-xl px-3 py-2 text-left text-sm hover:bg-slate-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero({ setPage }) {
  const slides = useMemo(() => [...KILENGI.during.slice(0, 4), ...BOMA.gallery.slice(0, 4)], []);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((v) => (v + 1) % slides.length), 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        {slides.map((src, index) => (
          <ProtectedImage
            key={src}
            src={src}
            alt="Projet PRODDEKO"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-80" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/70 via-slate-950/45 to-orange-950/35" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold">
            Belgique • RDC • Co-développement
          </div>
          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
            Une action durable entre territoires, citoyens et partenaires
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-100">
            PRODDEKO-Belgique valorise des projets concrets en santé, agriculture durable, gouvernance et résilience communautaire.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button onClick={() => setPage("project-jpn95")} className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white hover:bg-orange-600">
              Voir le projet JPN95
            </button>
            <button onClick={() => setPage("project-kilengi")} className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
              Voir Kilengi
            </button>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <button onClick={() => setCurrent((v) => (v - 1 + slides.length) % slides.length)} className="rounded-full border border-white/20 bg-white/10 p-3">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button onClick={() => setCurrent((v) => (v + 1) % slides.length)} className="rounded-full border border-white/20 bg-white/10 p-3">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ src, alt, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(src, alt)}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      data-protected-image
    >
      <ProtectedImage src={src} alt={alt} loading="lazy" className="h-64 w-full object-cover transition duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
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
          {eyebrow && <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">{eyebrow}</div>}
          <h3 className="mt-1 text-xl font-black text-blue-950">{title}</h3>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-600">
          {images.length} visuels
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {images.map((src, index) => (
          <GalleryCard key={`${title}-${index}`} src={src} alt={`${title} ${index + 1}`} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

function JPN95Gallery({ onOpen }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle
        eyebrow="Solutions agricoles"
        title="Applications du fertilisant JPN95"
        text="Une solution naturelle adaptée à différents types de cultures et usages agricoles."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {JPN95.gallery.map((src, index) => (
          <div
            key={src}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            onClick={() => onOpen(src, `Application JPN95 ${index + 1}`)}
            data-protected-image
          >
            <ProtectedImage
              src={src}
              alt={`Application JPN95 ${index + 1}`}
              loading="lazy"
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="absolute bottom-3 right-3 rounded-full bg-white p-2 opacity-0 shadow transition group-hover:opacity-100">
              <ZoomIn className="h-4 w-4 text-slate-700" />
            </div>
            <div className="absolute bottom-3 left-3 text-sm font-semibold text-white opacity-0 transition group-hover:opacity-100">
              Application {index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ImageLightbox({ src, title, onClose }) {
  if (!src) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4" onClick={onClose}>
      <div className="relative max-h-[95vh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-slate-800 shadow">
          <X className="h-5 w-5" />
        </button>
        <ProtectedImage src={src} alt={title} className="max-h-[95vh] w-full rounded-2xl bg-white object-contain" />
      </div>
    </div>
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

function GenericPage({ content }) {
  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle eyebrow={content.eyebrow} title={content.title} text={content.text} />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <InfoCard icon={HeartHandshake} title="Approche">
            Une méthode fondée sur l’ancrage local, la transparence, la participation citoyenne et la recherche d’impact durable.
          </InfoCard>
          <InfoCard icon={ShieldCheck} title="Engagement">
            PRODDEKO-Belgique agit avec les communautés, les partenaires et les institutions pour construire des solutions concrètes.
          </InfoCard>
        </div>
      </section>
    </main>
  );
}

function ProjectPage({ project, onOpen, type }) {
  const gallery = type === "kilengi" ? [...project.during, ...project.before, ...project.after] : project.gallery;

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-4xl">
          <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
            Projet en recherche de financement
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-blue-950 md:text-5xl">{project.title}</h1>
          <p className="mt-6 text-xl leading-9 text-slate-600">{project.subtitle}</p>
        </div>

        {project.metrics && (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-3xl font-black text-blue-950">{m.value}</div>
                <div className="mt-2 text-sm text-slate-600">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-slate-200">
          <ProtectedImage src={project.hero} alt={project.title} className="h-[420px] w-full object-cover" />
        </div>
      </section>

      {type === "jpn95" ? (
        <JPN95Gallery onOpen={onOpen} />
      ) : (
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <GallerySection title="Galerie du projet" eyebrow="Documentation visuelle" images={gallery} onOpen={onOpen} />
        </section>
      )}
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

          <a
            href={`mailto:${SITE.email}`}
            className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white hover:bg-orange-600"
          >
            Écrire un email
          </a>
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
        <SectionTitle
          eyebrow="Projets prioritaires"
          title="Des actions concrètes, documentées et finançables"
          text="PRODDEKO-Belgique met en avant des projets à fort impact social, agricole, éducatif et communautaire."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <button onClick={() => setPage("project-jpn95")} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <ProtectedImage src={JPN95.gallery[0]} alt="JPN95" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-black text-blue-950">JPN95 Kongo Central</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{JPN95.subtitle}</p>
            </div>
          </button>

          <button onClick={() => setPage("project-kilengi")} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <ProtectedImage src={KILENGI.hero} alt="Kilengi" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-black text-blue-950">Centre de Santé Kilengi</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{KILENGI.subtitle}</p>
            </div>
          </button>

          <button onClick={() => setPage("project-boma")} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <ProtectedImage src={BOMA.hero} alt="Boma" className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-black text-blue-950">Projet maraîcher Boma</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{BOMA.subtitle}</p>
            </div>
          </button>
        </div>
      </section>

      <JPN95Gallery onOpen={onOpen} />
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
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
  else content = <GenericPage content={pageContent[page] || pageContent.about} />;

  return (
    <>
      <ImageProtection />
      <Header page={page} setPage={setPage} />
      {content}
      <ImageLightbox src={lightbox.src} title={lightbox.title} onClose={closeLightbox} />

      <footer className="border-t border-slate-200 bg-blue-950 px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-2xl font-black">{SITE.name}</div>
          <div className="mt-2 text-sm text-slate-300">{SITE.tagline}</div>
          <div className="mt-6 text-sm text-slate-300">
            {SITE.email} • {SITE.phone} • {SITE.belgiumLocation}
          </div>
        </div>
      </footer>
    </>
  );
}
