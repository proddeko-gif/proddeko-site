import React from "react";
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
  Menu,
  X,
} from "lucide-react";

const ASSETS = {
  logo: "/images/proddeko-logo.png?v=2",
  hero: "/images/proddeko-hero.jpg",
  about: "/images/proddeko-hero.jpg",
  contact: "/images/proddeko-contact.jpg",
};

const stats = [
  { value: "200 000+", label: "bénéficiaires directs" },
  { value: "10+", label: "zones et pays d’action" },
  { value: "8+", label: "partenaires stratégiques" },
  { value: "6", label: "universités partenaires" },
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

const territories = [
  "Kongo Central",
  "Kinshasa",
  "Kwilu",
  "Nord-Kivu",
  "Belgique",
  "France",
  "Allemagne",
  "Congo-Brazzaville",
];

const donationTiers = [
  {
    amount: "25 €",
    title: "Soutien ponctuel",
    text: "Contribuer à des actions locales de sensibilisation, de logistique ou de communication communautaire.",
  },
  {
    amount: "75 €",
    title: "Appui terrain",
    text: "Soutenir des ateliers citoyens, des sessions de formation ou du matériel opérationnel.",
  },
  {
    amount: "150 €",
    title: "Partenaire d’action",
    text: "Participer au financement d’une activité structurante ou d’un micro-projet local.",
  },
];

const projectCards = [
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
];

const testimonials = [
  {
    quote:
      "PRODDEKO-Belgique valorise une approche humaine, rigoureuse et proche des réalités locales.",
    author: "Partenaire associatif",
  },
  {
    quote:
      "Les actions menées renforcent la participation citoyenne et donnent une voix aux communautés.",
    author: "Relai communautaire",
  },
  {
    quote:
      "La structure crée un lien utile entre la diaspora, les institutions et les bénéficiaires.",
    author: "Acteur du co-développement",
  },
];

const actionCards = [
  {
    icon: Globe,
    title: "Développement durable",
    page: "action-sustainable",
    text: "PRODDEKO-Belgique met en œuvre des programmes territoriaux de développement durable visant à renforcer la résilience des communautés, la gestion durable des ressources et l’autonomie économique locale.",
  },
  {
    icon: GraduationCap,
    title: "Éducation citoyenne",
    page: "action-education",
    text: "L’organisation développe des dispositifs structurés de formation et de sensibilisation destinés à renforcer la citoyenneté active, le leadership local et la participation démocratique.",
  },
  {
    icon: ShieldCheck,
    title: "Gouvernance éthique",
    page: "action-governance",
    text: "PRODDEKO-Belgique promeut des mécanismes de transparence, de redevabilité et de suivi citoyen afin d’améliorer la qualité de la gouvernance locale.",
  },
  {
    icon: Handshake,
    title: "Solidarité internationale",
    page: "action-solidarity",
    text: "À travers une approche de co-développement, l’organisation facilite la coopération entre diaspora, acteurs locaux et partenaires internationaux.",
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
      { label: "Appel à financement", page: "financing", icon: HeartHandshake },
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

const pageDetails = {
  about: {
    eyebrow: "Présentation institutionnelle",
    title: "Qui sommes-nous ?",
    text: "PRODDEKO-Belgique est une organisation de solidarité internationale et de co-développement active entre la Belgique et la République Démocratique du Congo.",
    sections: [
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
    image: ASSETS.hero,
    sections: [
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
        body: "Nombre de bénéficiaires, taux de participation des femmes et des jeunes, nombre d’initiatives soutenues, existence de mécanismes de suivi citoyen.",
      },
    ],
  },

  values: {
    eyebrow: "Référentiel d’action",
    title: "Nos valeurs",
    text: "Le référentiel d’action de PRODDEKO-Belgique repose sur des principes éthiques, organisationnels et territoriaux qui structurent l’ensemble de ses interventions.",
    sections: [
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
        body: "Chaque intervention doit produire des effets concrets, mesurables et soutenables dans le temps, en respectant les réalités sociales, culturelles et environnementales.",
      },
    ],
  },

  governance: {
    eyebrow: "Organisation",
    title: "Notre gouvernance",
    text: "Une gouvernance participative et inclusive entre la Belgique et la RDC.",
    sections: [
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
    eyebrow: "Écosystème institutionnel"        body: "Nombre de mécanismes mis en place ; nombre de citoyens impliqués ; fréquence des espaces de dialogue ; accès à l’information.",
      },      {
        title: "Bénéficiaires cibles",        body: "Collectivités locales, organisations de la société civile, relais communautaires, jeunes engagés, femmes leaders et citoyens.",
      },
    ],
  },    eyebrow: "Programme 04",      beneficiaries: "4 000+",      budget: "€ 175 000",        "Caritas International",        "Universités partenaires",        "Animation de partenariats et co-développement : 40%",        "Événements, plaidoyer et coordination : 18%",
        "Phase 2 : Déploiement des initiatives conjointes",        "Phase 3 : Renforcement des synergies et transfert de compétences",
        "Phase 4 : Consolidation, plaidoyer et réplication",      ],
    },    sections: [
      {        title: "Objectifs stratégiques",
        body: "Créer des synergies durables entre la Belgique, la RDC et les partenaires internationaux, et favoriser le transfert de compétences et de ressources.",
      },
      {        title: "Résultats attendus",
        body: "Partenariats consolidés, initiatives co-construites et meilleure mobilisation de la diaspora.",      },
      {
        title: "Indicateurs clés",
        body: "Nombre de partenariats actifs ; nombre de projets co-développés ; volume de ressources mobilisées.",      },
      {        title: "Bénéficiaires cibles",
        body: "Diaspora congolaise, organisations locales, collectivités, institutions publiques, universités, ONG et communautés bénéficiaires.",
      },
    ],  },
};      <div          light ? "text-orange-300" : "text-orange-500"
      <h2
        className={`mt-3 text-3xl font-black tracking-tight md:text-4xl ${          light ? "text-white" : "text-slate-950"
        }`}      >
        {title}      </h2>
      {text ? (
        <p
          className={`mt-5 text-lg leading-8 ${            light ? "text-slate-200" : "text-slate-600"
          }`}        >
          {text}
        </p>
      ) : null}    </div>
  );}
  active,  setPage,      className="relative"      onMouseLeave={() => setActive(null)}
            ? "bg-slate-100 text-blue-950"            : "text-slate-700 hover:bg-slate-50 hover:text-orange-600"
        }`}      >
        {group.label}        <ChevronDown className="h-4 w-4" />
      </button>          <div className="grid grid-cols-[1.1fr_0.9fr]">            <div className="p-6">                <div className="text-sm font-black uppercase tracking-[0.2em] text-orange-500">                  {group.label}                <div className="mt-2 text-2xl font-black tracking-tight text-blue-950">                  Navigation stratégique              </div>              <div className="grid grid-cols-2 gap-3">
                {group.items.map((item) => {
                  const Icon = item.icon;
                    <button                      onClick={() => {                        setActive(null);                      className="flex items-start gap-4 rounded-[1.25rem] bg-slate-50/70 p-4 text-left transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"                        <Icon className="h-5 w-5" />                      <div>                          {item.label}                        <div className="mt-1 text-xs leading-5 text-slate-500">                        </div>                  );              </div>            <div className="bg-gradient-to-br from-blue-950 via-slate-950 to-orange-950 p-6 text-white">
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-orange-200">                PRODDEKO-Belgique
              </div>
              <h3 className="mt-5 text-2xl font-black leading-tight tracking-tight">
                Une action institutionnelle ancrée dans les territoires              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-200">                Nos programmes articulent gouvernance, participation citoyenne,
                innovation sociale et partenariats durables entre la Belgique et la RDC.              </p>
            </div>          </div>
        </div>
      ) : null}
    </div>  );
}  const [page, setPage] = React.useState("home");  const [mobileOpen, setMobileOpen] = React.useState(false);  const [status, setStatus] = React.useState("");
  const valueIcons = {    "Dignité humaine": HeartHandshake,
    "Transparence et redevabilité": ShieldCheck,
    "Solidarité internationale et co-développement": Handshake,
    "Participation citoyenne et appropriation locale": Users,    "Responsabilité, durabilité et innovation utile": Sparkles,
  };    "Comité opérationnel": ShieldCheck,  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {    setStatus("Message prêt à être envoyé.");
    window.location.href = `mailto:admin@proddeko.online?subject=${subject}&body=${body}`;  };
  const renderPage = () => {    if (page === "projects") {
      return (        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionTitle
            eyebrow="Projets"            title="Des initiatives concrètes à fort impact"
            text="PRODDEKO-Belgique conçoit et met en œuvre des projets structurants en gouvernance, éducation et co-développement."          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">              <div key={s.label} className="rounded-3xl border bg-white p-6 shadow-sm">                <div className="mt-2 text-sm text-slate-600">{s.label}</div>          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">            {projectCards.map((p) => (
              <div key={p.title} className="rounded-3xl border bg-white p-6 shadow-sm">                <div className="text-xs font-bold uppercase text-orange-500">{p.tag}</div>
                <h3 className="mt-3 text-xl font-bold text-blue-950">{p.title}</h3>                <p className="mt-3 text-sm text-slate-600">{p.text}</p>
                <button
                  onClick={() => setPage("don")}
                  className="mt-5 rounded-full bg-orange-500 px-4 py-2 text-sm text-white"                >
                  Soutenir                </button>
              </div>            ))}
          </div>              {testimonials.map((t, i) => (                  <p className="text-sm italic text-slate-700">“{t.quote}”</p>                </div>            </div>
    if (page === "don") {      return (
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">          <SectionTitle
            eyebrow="Soutenir"
            title="Faire un don pour un impact concret"
            text="Votre contribution soutient des actions utiles, traçables et durables au service des communautés accompagnées par PRODDEKO-Belgique."          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">              </div>                Soutenir PRODDEKO-Belgique en toute confiance                avec des coordonnées institutionnelles vérifiées.              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange-200">
                    IBAN
                  <div className="mt-2 text-lg font-bold">BE52 0341 7896 9409</div>                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">                    BIC                  <div className="mt-2 text-lg font-bold">GEBABEBB</div>              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-orange-200">                  Nom du compte
                </div>                <div className="mt-2 text-base font-semibold leading-7">
                  PRODDEKO PROGRAMMES DE DEVELOPPEMENT DURABLE                </div>
              </div>                  href="mailto:admin@proddeko.online?subject=Don%20PRODDEKO"                >                </a>            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
                Don rapide              </div>
              <h3 className="mt-3 text-2xl font-black text-blue-950">                Choisir un niveau de contribution
              </h3>                {donationTiers.map((tier) => (                  >                      <div>                          {tier.amount}                        <h4 className="mt-1 text-lg font-bold text-blue-950">                          tier.amount                        className="rounded-full bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900"                    </div>                      {tier.text}              </div>          </div>    if (page === "values" && pageDetails.values) {
      const content = pageDetails.values;      return (
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
                eyebrow={content.eyebrow}                text={content.text}              <div className="mt-8 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-950 via-slate-950 to-orange-950 p-8 text-white shadow-2xl">                  Cadre éthique                  Un socle de principes pour des interventions crédibles, responsables et durables              </div>            <div className="grid gap-5 md:grid-cols-2">
              {content.sections?.map((section, i) => {                const Icon = valueIcons[section.title] || Scale;
                return (                  <div
                    key={i}
                    className={`rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm ${                      i === 0 ? "md:col-span-2" : ""
                    }`}                  >
                    <div className="flex items-start gap-4">                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                        <Icon className="h-6 w-6" />                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                          Principe {String(i + 1).padStart(2, "0")}                        </div>
                        <h3 className="mt-2 text-xl font-black tracking-tight text-blue-950">                          {section.title}
                        </h3>                      </div>
                    </div>                    <p className="mt-5 whitespace-pre-line text-sm leading-7 text-slate-600">
                      {section.body}
                    </p>
                  </div>                );
              })}            </div>
          </div>        </div>
      );    }
          <SectionTitle            title={content.title}            {content.sections?.map((section, i) => {              return (                    i === 0 ? "md:col-span-2" : ""                >                    </div>                      <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                    </div>                  </div>                  <p className="mt-5 text-sm leading-7 text-slate-600">                    {section.body}                </div>            })}          </div>        </div>    }
    if (page.startsWith("action-") && pageDetails[page]) {      const content = pageDetails[page];      const meta = content.meta || {};
      return (        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">          <SectionTitle            eyebrow={content.eyebrow}            title={content.title}          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">              { value: meta.beneficiaries, label: "bénéficiaires" },              { value: meta.budget, label: "budget estimé" },
              { value: meta.zones, label: "zones d’intervention" },              <div key={kpi.label} className="rounded-3xl border bg-white p-6 shadow-sm">                <div className="text-3xl font-black text-orange-500">{kpi.value}</div>                <div className="mt-2 text-sm text-slate-600">{kpi.label}</div>
              </div>            ))}          </div>          <div className="mt-12 grid gap-6 md:grid-cols-2">            {content.sections?.map((section, i) => (
              <div key={i} className="rounded-3xl border bg-white p-6 shadow-sm">                <h3 className="text-lg font-bold text-blue-950">{section.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{section.body}</p>            ))}            <div className="rounded-[2rem] border bg-white p-8 shadow-sm">              <h3 className="text-xl font-black text-blue-950">Zones d’intervention</h3>                {meta.geography}
              </div>            </div>            <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
              <h3 className="text-xl font-black text-blue-950">Partenaires impliqués</h3>              <div className="mt-4 flex flex-wrap gap-2 text-sm">                {meta.partners?.map((p) => (                  <span key={p} className="rounded-full bg-slate-50 px-3 py-1">                    {p}                ))}            </div>
          </div>            <h3 className="text-xl font-black text-blue-950">Budget indicatif</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4 text-sm">              {meta.budgetBreakdown?.map((item) => (                <div key={item} className="rounded-xl bg-slate-50 p-4">
                  {item}
          </div>          <div className="mt-14 rounded-[2rem] border bg-white p-8 shadow-sm">
            <h3 className="text-xl font-black text-blue-950">Calendrier indicatif</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4 text-sm">
              {meta.timeline?.map((item) => (
                <div key={item} className="rounded-xl bg-slate-50 p-4">
                  {item}
                </div>              ))}
            </div>        </div>      );
    }    if (pageDetails[page]) {      const content = pageDetails[page];      return (          <SectionTitle            eyebrow={content.eyebrow}            title={content.title}            text={content.text}
          />
          {content.image ? (              <img                src={content.image}                alt={content.title}
                className="h-80 w-full object-cover"              />            </div>          ) : null}
          <div className="mt-12 grid gap-6 md:grid-cols-2">            {content.sections?.map((section, i) => (                <h3 className="text-lg font-bold text-blue-950">{section.title}</h3>                <p className="mt-3 text-sm text-slate-600">{section.body}</p>
              </div>            ))}
          </div>      );    }
    return null;  };  return (      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
          <button            onClick={() => {              setPage("home");              setMobileOpen(false);            }}
            className="flex min-w-0 items-center gap-4 text-left"          >            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-white shadow-sm">              <img src={ASSETS.logo} alt="Logo PRODDEKO" className="h-full w-full object-contain" />
            </div>            <div className="min-w-0">              <div className="text-xl font-extrabold tracking-tight text-blue-950">                PRODDEKO-Belgique
              </div>              <div className="hidden text-sm text-slate-600 md:block">                Solidarité internationale • Développement durable • Gouvernance éthique              </div>
            </div>          </button>          <nav className="hidden items-center gap-4 lg:flex xl:gap-6">              onClick={() => {                setPage("home");                setActiveMenu(null);              className="text-sm font-semibold text-slate-700 transition hover:text-orange-600"            >
              Accueil            {navItems.map((group) => (              <MenuGroup                key={group.label}
                group={group}
                active={activeMenu}                setPage={setPage}
            ))}          </nav>          <div className="flex shrink-0 items-center gap-3">
            <button              onClick={() => setMobileOpen((v) => !v)}              className="rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"            >            </button>            <button              onClick={() => setPage("contact-form")}              className="hidden rounded-full border border-blue-950 px-5 py-2 text-sm font-semibold text-blue-950 transition hover:bg-blue-50 md:block"              Nous contacter              onClick={() => setPage("don")}              className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"            >            </button>          </div>
        </div>        {mobileOpen ? (          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="space-y-4 px-6 py-5">              <button                onClick={() => {
                  setPage("home");
                  setMobileOpen(false);                }}              >
                Accueil              </button>              {navItems.map((group) => (                  <div className="mb-3 text-sm font-black text-blue-950">{group.label}</div>                  <div className="space-y-2">                    {group.items.map((item) => {                      const Icon = item.icon;
                      return (                          key={item.page}
                          onClick={() => {                            setPage(item.page);                            setMobileOpen(false);                          }}
                          className="flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left transition hover:bg-slate-50"                        >                            <Icon className="h-4 w-4" />
                          </div>                          <div className="text-sm font-semibold text-slate-800">                            {item.label}                          </div>
                        </button>                      );                  </div>
                </div>            </div>
          </div>
        ) : null}
      </header>
      {renderPage() || (
          <section className="relative overflow-hidden bg-slate-950 text-white">            <div className="absolute inset-0">              <img                src={ASSETS.hero}
                alt="PRODDEKO-Belgique"                className="h-full w-full object-cover opacity-35"              />              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-slate-950/70 to-orange-950/70" />
            </div>
            <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">                <div>                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold text-slate-100 backdrop-blur">                    Belgique • RDC • Co-développement • Gouvernance éthique
                  </div>
                  <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                    Une action institutionnelle durable entre territoires, citoyens et partenaires                  </h1>                  <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-200">                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <button                      className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                    >                      Découvrir nos programmes                    </button>
                    <button
                      onClick={() => setPage("financing")}
                      className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                      Appel à financement                    </button>                  </div>                </div>
                <div className="grid gap-5 sm:grid-cols-2">                  {stats.map((stat) => (                    <div                      key={stat.label}                      className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur"                    >                      <div className="text-3xl font-black text-orange-300 md:text-5xl">
                        {stat.value}                      </div>                      <div className="mt-3 text-lg text-slate-100">{stat.label}</div>                    </div>                  ))}                </div>              </div>          </section>          <section className="border-b border-slate-200 bg-white">            <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-2 xl:grid-cols-4 lg:px-8">              {[                { value: "200 000+", label: "bénéficiaires directs" },                { value: "25+", label: "initiatives et projets soutenus" },                { value: "2 continents", label: "ancrage Belgique–Afrique" },              ].map((item) => (                <div                  key={item.label}                  className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5 shadow-sm"                >
                  <div className="text-3xl font-black text-orange-500">{item.value}</div>                  <div className="mt-2 text-sm text-slate-600">{item.label}</div>
                </div>              ))}
            </div>          </section>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">              <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">                <img                  src={ASSETS.about}                  alt="Présentation PRODDEKO"                  className="h-full min-h-[420px] w-full object-cover"                />
              <div>                <SectionTitle                  eyebrow="Qui nous sommes"
                  title="Une ONG de co-développement ancrée entre la Belgique et la RDC"                  text="PRODDEKO-Belgique mobilise la diaspora, les partenaires institutionnels, les acteurs locaux et les communautés pour concevoir des interventions durables, participatives et orientées résultats."                />
                <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">                  <p>                    savoirs locaux, innovation sociale et coopération internationale.                    Elle privilégie des réponses co-construites, adaptées aux réalités locales                  </p>                  <p>
                    Son action couvre la gouvernance éthique, l’éducation citoyenne,                    le développement durable, la solidarité internationale et l’appui                    aux initiatives communautaires.
                  </p>
                <div className="mt-8 flex flex-wrap gap-4">                  <button                    onClick={() => setPage("about")}
                    className="rounded-full bg-blue-950 px-6 py-3 text-sm font-bold text-white"                  >                    Lire la présentation institutionnelle
                  </button>                  <button                    className="rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700"                  >
                </div>              </div>            </div>          </section>            <div className="mx-auto max-w-7xl px-6 lg:px-8">              <SectionTitle                eyebrow="Nos programmes"                title="Des actions complémentaires au service du bien commun"                text="PRODDEKO-Belgique déploie des programmes structurés, suivis et documentés, inspirés d’une logique cadre bailleur et d’une forte appropriation territoriale."              />              <div className="mt-12 grid gap-6 lg:grid-cols-2">                {actionCards.map((card, i) => {
                  const Icon = card.icon;
                    <button                      key={card.title}                      onClick={() => setPage(card.page)}                      className="rounded-[2rem] border border-slate-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"                      <div className="flex items-start justify-between gap-4">                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">                            <Icon className="h-6 w-6" />                          </div>
                          <div>                            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">                              Programme {String(i + 1).padStart(2, "0")}                            </div>                            <h3 className="mt-2 text-2xl font-black text-blue-950">                            </h3>                          </div>                        </div>                        <ArrowRight className="h-5 w-5 shrink-0 text-slate-400" />
                      </div>                      <p className="mt-5 text-sm leading-7 text-slate-600">                        {card.text}                      </p>                      <div className="mt-6 grid gap-3 sm:grid-cols-2">                        {[                          "Objectifs opérationnels",                          "Résultats attendus",                          "Indicateurs clés",                          <div                            key={item}                            className="rounded-xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600"                          >                            {item}                          </div>                        ))}                      </div>                    </button>
                  );
              </div>            </div>          </section>
          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">              <div>                <SectionTitle                  eyebrow="Impact et résultats"                  title="Des résultats visibles, suivis et documentés"                  text="L’organisation privilégie une approche orientée résultats, fondée sur des indicateurs, des mécanismes de suivi et une lecture territoriale de l’impact."
                <div className="mt-8 space-y-4">                  {[                    "Portée géographique entre Belgique, RDC et réseaux partenaires",                    "Bénéficiaires directs et indirects suivis dans la durée",
                    "Dispositifs de gouvernance, formation et accompagnement déployés",                    "Approche traçable, participative et compatible avec les exigences bailleurs",
                  ].map((item) => (                    <div                      key={item}                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >                      <span className="text-sm leading-6 text-slate-600">{item}</span>                    </div>
                  ))}                </div>              <div className="grid gap-5 md:grid-cols-2">                  {
                    text: "Présence en Belgique, ancrage en RDC et coopération avec des réseaux en Afrique et en Europe.",                  },                  {                    text: "Jeunes, femmes, communautés locales, organisations citoyennes, autorités locales et diaspora engagée.",                  },                  {
                    title: "Qualité des résultats",                    text: "Actions suivies, capitalisées et pensées pour produire des effets concrets, mesurables et reproductibles.",                  },                  {                    title: "Logique bailleur",                    text: "Objectifs, résultats, indicateurs, partenaires, budget et redevabilité intégrés dans les programmes.",                  },
                ].map((card) => (                  <div                    key={card.title}                    className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"                  >                    <h3 className="text-xl font-black text-blue-950">{card.title}</h3>                  </div>                ))}              </div>            </div>          </section>            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <SectionTitle
                eyebrow="Territoires d’intervention"
                text="Nos actions se déploient dans plusieurs provinces de la RDC ainsi qu’en Belgique, en Europe et en Afrique centrale."                light              />                {territories.map((territory) => (                  <span                    key={territory}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100"                  >                    {territory}                  </span>                ))}              </div>            </div>
          </section>          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">            <div className="grid gap-10 lg:grid-cols-2">              <div>                <SectionTitle                  eyebrow="Partenaires et réseau"
                  title="Un écosystème de coopération stratégique"                  text="Des institutions, ONG et universités renforcent la portée, la crédibilité et la qualité de nos interventions."                />                <div className="mt-8 grid gap-3 sm:grid-cols-2">                  {partners.map((partner) => (                    <div                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"                    >                      {partner}                    </div>                  ))}                </div>
              </div>
              <div>                <SectionTitle                  eyebrow="Universités partenaires"                  title="Recherche, formation et innovation au service de l’action"                />                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {universities.map((university) => (                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                    >                  ))}
              </div>            </div>          </section>
          <section className="bg-gradient-to-r from-blue-950 via-slate-950 to-orange-950 py-20 text-white">            <div className="mx-auto max-w-7xl px-6 lg:px-8">              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">                <div>                  <SectionTitle                    eyebrow="Soutenir / financer"                    text="PRODDEKO-Belgique recherche des partenaires financiers, philanthropiques et citoyens désireux d’appuyer des programmes à fort impact territorial."                    light                  />                    <button                      onClick={() => setPage("don")}                      className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white"                    >
                      Faire un don                    </button>                    <button                      onClick={() => setPage("financing")}                      className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white"                    >                    </button>                  </div>                </div>                <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur">                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-200">                  </div>                  <div className="mt-5 space-y-3 text-sm text-slate-100">                    <div><strong>IBAN :</strong> BE52 0341 7896 9409</div>                    <div><strong>BIC :</strong> GEBABEBB</div>                    <div><strong>Compte :</strong> PRODDEKO PROGRAMMES DE DEVELOPPEMENT DURABLE</div>                  </div>
                </div>          </section>
          <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionTitle
            />            <div className="mt-10 grid gap-6 lg:grid-cols-3">              {[                {                  text: "Suivi d’initiatives locales, activités communautaires et dynamique territoriale entre Belgique et RDC.",                {                  title: "Note conceptuelle",                  text: "Document de présentation stratégique destiné aux partenaires, bailleurs et institutions intéressés.",                {
                  title: "Appel à partenariat",                  text: "Opportunités de cofinancement, consortium, accompagnement technique et soutien à la pérennisation.",              ].map((card) => (                <div
                  key={card.title}                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"                  <h3 className="text-xl font-black text-blue-950">{card.title}</h3>
                </div>              ))}            </div>          <section className="border-t border-slate-200 bg-slate-50 py-20">            <div className="mx-auto max-w-7xl px-6 lg:px-8">              <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
                <div>                  <SectionTitle                    eyebrow="Entrer en relation"                    title="Contacter PRODDEKO-Belgique"
                    text="Coordonnées, message de contact et orientation donateur/partenaire dans un espace clair, accessible et professionnel."
                  />                    <div className="flex items-center gap-3">                      <MapPin className="h-4 w-4 text-orange-500" />                      Welkenraedt, Belgique                      <MapPin className="h-4 w-4 text-orange-500" />
                      Coordination terrain : Kinzau-Mvuete, RDC                    </div>                    <div className="flex items-center gap-3">                      <Mail className="h-4 w-4 text-orange-500" />
                      admin@proddeko.online
                    </div>
                    <div className="flex items-center gap-3">
                      +32 488 84 46 98                    </div>                  </div>                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">                  <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">                    Nous écrire                  <h3 className="mt-3 text-2xl font-black text-blue-950">                    Formulaire de contact                  </h3>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>                        Nom                      </label>                      <input                        type="text"                        value={formData.name}
                        onChange={handleChange}                        required                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400"                      />
                    </div>                    <div>                      <label className="mb-2 block text-sm font-semibold text-slate-700">                      <input
                        type="email"                        name="email"                        value={formData.email}                        onChange={handleChange}                        required
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400"                    </div>

                    <div>                      <label className="mb-2 block text-sm font-semibold text-slate-700">                        Message                      </label>
                      <textarea                        rows="5"                        name="message"                        value={formData.message}
                        onChange={handleChange}
                        required                      />                    </div>                    <button
                      type="submit"
                      className="rounded-full bg-blue-950 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-900"                      Envoyer
                    {status ? (                      <p className="text-sm text-slate-600">{status}</p>                    ) : null}
                  </form>              </div>            </div>
          </section>          <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">                  <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border bg-white shadow-sm">
                    <img                      alt="Logo PRODDEKO"
                    />                  </div>                  <div>                    <div className="text-sm text-slate-500">                      Solidarité internationale • Développement durable • Gouvernance éthique                    </div>                  PRODDEKO-Belgique agit comme une passerelle entre la Belgique, la RDC                  et d’autres territoires partenaires pour soutenir des actions utiles,                  durables et transparentes.
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">                  Coordonnées                </div>                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">                    <MapPin className="h-4 w-4" /> Welkenraedt, Belgique                  </li>                    <MapPin className="h-4 w-4" /> Kinzau-Mvuete, RDC
                  </li>                  <li className="flex items-center gap-2">                    <Mail className="h-4 w-4" /> admin@proddeko.online                  </li>
                </ul>              </div>
              <div>                  Navigation rapide                </div>                <div className="mt-5 space-y-3 text-sm text-slate-600">                    À propos
                  </button>                  <button onClick={() => setPage("projects")} className="block transition hover:text-orange-500">                    Projets                  </button>
                  <button onClick={() => setPage("don")} className="block transition hover:text-orange-500">                    Faire un don                  <button onClick={() => setPage("contact-form")} className="block transition hover:text-orange-500">
                    Contact                  </button>                </div>              </div>
            </div>          </footer>      )}
    </div>}
