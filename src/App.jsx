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
  logo: "/images/proddeko-logo.png",
  hero: "/images/proddeko-hero.jpg",
  anticorruption: "/images/proddeko-anticorruption.jpg",
  about: "/images/proddeko-about.jpg",
  projects: "/images/proddeko-projects.jpg",
  contact: "/images/proddeko-contact.jpg",
};

const navItems = [
  { label: "À propos", href: "#a-propos", items: ["Qui sommes-nous", "Mission", "Valeurs", "Gouvernance"] },
  { label: "Nos actions", href: "#actions", items: ["Développement durable", "Éducation citoyenne", "Gouvernance éthique", "Solidarité internationale"] },
  { label: "Anticorruption", href: "#anticorruption", items: ["Transparence locale", "Intégrité citoyenne", "Outils numériques", "Plaidoyer"] },
  { label: "Projets", href: "#projets", items: ["Projets en cours", "Projets à soutenir", "Impact", "Partenaires"] },
  { label: "Contact", href: "#contact", items: ["Coordonnées", "Formulaire", "Newsletter"] },
];

const actionCards = [
  { icon: Globe, title: "Développement durable", text: "Appui aux initiatives locales, renforcement communautaire, transition écologique et projets à impact durable." },
  { icon: GraduationCap, title: "Éducation citoyenne", text: "Sensibilisation, formation, plaidoyer et accompagnement de jeunes et d’acteurs locaux engagés." },
  { icon: ShieldCheck, title: "Gouvernance éthique", text: "Promotion de la redevabilité, participation citoyenne et suivi communautaire des projets et services." },
  { icon: Handshake, title: "Solidarité internationale", text: "Mise en lien des dynamiques citoyennes entre la Belgique, la RDC et d’autres pays partenaires." },
];

const antiCorruption = [
  "Comités de pilotage avec droit de regard sur les budgets",
  "Ateliers d’intégrité pour jeunes, femmes et leaders communautaires",
  "Outils numériques participatifs et signalement citoyen",
  "Forums publics, plaidoyer local et appui à l’alerte éthique",
];

const territories = [
  "Kongo Central","Kinshasa","Kwilu","Sud-Ubangi","Nord-Kivu","Autres provinces de la RDC",
  "Congo-Brazzaville","Cameroun","Togo","Gabon","Belgique","France","Allemagne",
];

const partners = [
  "Fondation Roi Baudouin","ENABEL","UNOPS","Ambassade du Japon","Caritas International",
  "CNCD–11.11.11","Entraide & Fraternité","Laguzze-JPN95",
];

const universities = [
  "ULiège","UCLouvain","Université de Kinshasa","Université Kongo","ISAV Matadi","ISDR-Kinzau-Mvuete",
];

const stats = [
  { value: "200 000+", label: "bénéficiaires directs" },
  { value: "10+", label: "zones et pays d’action" },
  { value: "8+", label: "partenaires stratégiques" },
  { value: "6", label: "universités partenaires" },
];

const projectCards = [
  { title: "Programme gouvernance locale", text: "Renforcement des capacités citoyennes, suivi communautaire et actions de redevabilité locale en RDC.", tag: "Gouvernance" },
  { title: "Éducation et engagement jeunesse", text: "Formations, ateliers et mobilisation des jeunes pour une citoyenneté active et responsable.", tag: "Éducation" },
  { title: "Co-développement Belgique–RDC", text: "Création de passerelles entre diaspora, partenaires locaux, institutions et communautés bénéficiaires.", tag: "Solidarité" },
];

function MenuItem({ label, href, items }) {
  return (
    <div className="group relative">
      <a href={href} className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-orange-600">
        {label}
        <ChevronDown className="h-4 w-4" />
      </a>
      <div className="invisible absolute left-0 top-full z-20 mt-3 w-60 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <div key={item} className="rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-orange-600">{item}</div>
        ))}
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

export default function App() {
  const [page, setPage] = React.useState("home");
  const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
  const [status, setStatus] = React.useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
    if (page === "about") return (
      <div className="p-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">À propos de PRODDEKO</h1>
        <p className="text-lg text-slate-600">PRODDEKO-Belgique est une organisation engagée dans la solidarité internationale, le développement durable et la gouvernance éthique entre la Belgique et la RDC.</p>
      </div>
    );
    if (page === "projects") return (
      <div className="p-10 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Nos projets</h1>
        <div className="grid gap-6">
          {projectCards.map((p) => (
            <div key={p.title} className="p-6 border rounded-2xl">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="text-slate-600 mt-2">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
    if (page === "don") return (
      <div className="p-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Faire un don</h1>
        <p className="text-slate-600 mb-6">Votre soutien permet d’avoir un impact direct sur les communautés bénéficiaires.</p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full">Contribuer maintenant</button>
      </div>
    );
    return null;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 scroll-smooth">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#accueil" className="flex items-center gap-4">
            <img src={ASSETS.logo} alt="Logo PRODDEKO" className="h-12 w-12 rounded-xl border object-contain" />
            <div>
              <div className="text-xl font-extrabold tracking-tight text-blue-950">PRODDEKO-Belgique</div>
              <div className="text-sm text-slate-600">Solidarité internationale • Développement durable • Gouvernance éthique</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 xl:flex">
            <button onClick={() => setPage("home")} className="text-sm font-semibold">Accueil</button>
            <button onClick={() => setPage("about")} className="text-sm font-semibold">À propos</button>
            <button onClick={() => setPage("projects")} className="text-sm font-semibold">Projets</button>
            <button onClick={() => setPage("don")} className="text-sm font-semibold">Don</button>
            {navItems.map((item) => <MenuItem key={item.label} {...item} />)}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden rounded-full border border-blue-950 px-5 py-2 text-sm font-semibold text-blue-950 transition hover:bg-blue-50 md:block">Nous contacter</a>
            <a href="#agir" className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600">Faire un don</a>
          </div>
        </div>
      </header>

      <main>
        {renderPage() || (
          <>
            <section id="accueil" className="relative overflow-hidden bg-slate-950 text-white">
              <div className="absolute inset-0">
                <img src={ASSETS.hero} alt="Actions de PRODDEKO" className="h-full w-full object-cover opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-slate-950/80 to-orange-900/60" />
              </div>
              <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium text-slate-100">Belgique • RDC • Afrique • Europe</div>
                  <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">Agir ensemble pour un développement durable, solidaire et transparent</h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">PRODDEKO-Belgique agit entre la Belgique et la RDC pour renforcer la dignité humaine, la gouvernance éthique, l’éducation citoyenne et le co-développement avec les communautés.</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="#projets" className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-orange-600">Découvrir nos projets</a>
                    <a href="#agir" className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">Devenir partenaire</a>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-sm">
                      <div className="text-3xl font-black text-orange-300">{stat.value}</div>
                      <div className="mt-2 text-sm text-slate-100">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </section>

            <section id="a-propos" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
              <div className="overflow-hidden rounded-[2rem] shadow-xl"><img src={ASSETS.about} alt="Présentation de PRODDEKO" className="h-full min-h-[420px] w-full object-cover" /></div>
              <div className="flex flex-col justify-center">
                <SectionTitle eyebrow="À propos" title="Une association de droit belge au service de la solidarité internationale" text="PRODDEKO-Belgique est une association engagée pour le développement durable, la participation citoyenne et la gouvernance éthique, en lien étroit avec la RDC et d’autres espaces de coopération." />
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <InfoCard icon={Users} title="Qui sommes-nous" text="Une structure portée par des dynamiques citoyennes, la diaspora congolaise, des partenaires locaux et des relais institutionnels." />
                  <InfoCard icon={HeartHandshake} title="Notre mission" text="Soutenir des projets utiles, inclusifs et durables, tout en renforçant les liens entre acteurs de Belgique, de RDC et d’ailleurs." />
                  <InfoCard icon={BookOpen} title="Nos valeurs" text="Dignité humaine, écoute des besoins locaux, co-construction, transparence et action concrète." />
                  <InfoCard icon={Landmark} title="Notre gouvernance" text="Assemblée générale, conseil d’administration, comité opérationnel et participation des bénéficiaires dans le suivi des projets." />
                </div>
              </div>
            </section>

            <section id="actions" className="bg-slate-50 py-20">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionTitle eyebrow="Nos actions" title="Des actions multisectorielles en RDC, en Belgique et au-delà" text="Le site présente les grands axes d’intervention de PRODDEKO-Belgique avec un ton institutionnel, clair et orienté impact." />
                <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{actionCards.map((card) => <InfoCard key={card.title} icon={card.icon} title={card.title} text={card.text} />)}</div>
              </div>
            </section>

            <section id="anticorruption" className="py-20">
              <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
                <div>
                  <SectionTitle eyebrow="Lutte anticorruption" title="Une approche concrète et citoyenne" text="Des actions locales pour promouvoir transparence, participation et intégrité." />
                  <div className="mt-8 grid gap-4">{antiCorruption.map((item, index) => (
                    <div key={item} className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-100 font-bold text-orange-600">0{index + 1}</div>
                      <p className="text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}</div>
                </div>
                <div className="overflow-hidden rounded-[2rem] shadow-xl"><img src={ASSETS.anticorruption} alt="Actions anticorruption PRODDEKO" className="h-full w-full object-cover" /></div>
              </div>
            </section>

            <section id="projets" className="bg-blue-950 py-20 text-white">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionTitle eyebrow="Projets" title="Des pages internes prêtes pour présenter les projets de PRODDEKO" text="Cette section joue le rôle de page Projets avec cartes, résumés et appels à l’action pour une future navigation détaillée." light />
                <div className="mt-10 grid gap-6 lg:grid-cols-3">{projectCards.map((project) => (
                  <div key={project.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
                    <div className="inline-flex rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-orange-200">{project.tag}</div>
                    <h3 className="mt-5 text-2xl font-bold">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-200">{project.text}</p>
                    <a href="#agir" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-300 transition hover:text-orange-200">Soutenir ce projet <ArrowRight className="h-4 w-4" /></a>
                  </div>
                ))}</div>
                <div className="mt-12 overflow-hidden rounded-[2rem] shadow-xl"><img src={ASSETS.projects} alt="Projets PRODDEKO" className="h-80 w-full object-cover" /></div>
              </div>
            </section>

            <section id="territoires" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-[2rem] bg-orange-50 p-8 ring-1 ring-orange-100">
                  <SectionTitle eyebrow="Territoires d’intervention" title="Une présence enracinée en RDC et ouverte à l’international" text="Les pages du site peuvent s’appuyer sur cette géographie d’action pour valoriser l’ancrage local et les partenariats transnationaux." />
                  <div className="mt-8 flex flex-wrap gap-3">{territories.map((territory) => <span key={territory} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-orange-100">{territory}</span>)}</div>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <SectionTitle eyebrow="Universités partenaires" title="Un appui académique et technique solide" text="Les futures pages internes peuvent détailler les collaborations en recherche-action, formation et expertise locale." />
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">{universities.map((u) => <div key={u} className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">{u}</div>)}</div>
                </div>
              </div>
            </section>

            <section id="partenaires" className="bg-slate-950 py-20 text-white">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionTitle eyebrow="Partenaires et réseaux" title="Des alliances pour agir avec plus d’impact" text="Le site valorise les institutions, ONG, réseaux et plateformes qui renforcent la crédibilité et la portée de l’action de PRODDEKO-Belgique." light />
                <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{partners.map((partner) => <div key={partner} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm font-semibold text-white backdrop-blur-sm">{partner}</div>)}</div>
              </div>
            </section>

            <section id="agir" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[2rem] bg-slate-50 p-8 ring-1 ring-slate-200">
                  <SectionTitle eyebrow="Agir avec nous" title="Soutenir, rejoindre, collaborer" text="Cette page interne peut servir de base pour un futur espace Don, Partenariat ou Bénévolat." />
                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <div className="rounded-3xl bg-white p-5 shadow-sm"><h3 className="text-lg font-bold text-blue-950">Faire un don</h3><p className="mt-3 text-sm leading-7 text-slate-600">Contribuer au financement d’actions concrètes sur le terrain.</p></div>
                    <div className="rounded-3xl bg-white p-5 shadow-sm"><h3 className="text-lg font-bold text-blue-950">Devenir partenaire</h3><p className="mt-3 text-sm leading-7 text-slate-600">Construire des projets avec PRODDEKO-Belgique et ses relais locaux.</p></div>
                    <div className="rounded-3xl bg-white p-5 shadow-sm"><h3 className="text-lg font-bold text-blue-950">S’engager</h3><p className="mt-3 text-sm leading-7 text-slate-600">Rejoindre le réseau comme bénévole, expert ou relai citoyen.</p></div>
                  </div>
                </div>

                <div id="contact" className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                  <img src={ASSETS.contact} alt="Contact PRODDEKO" className="h-56 w-full object-cover" />
                  <div className="p-8">
                    <SectionTitle eyebrow="Contact" title="Une page contact déjà structurée" text="Coordonnées, message de contact et espace newsletter peuvent être branchés ensuite à un vrai formulaire." />
                    <div className="mt-6 space-y-4 text-sm text-slate-600">
                      <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-orange-500" /> Welkenraedt, Belgique</div>
                      <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-orange-500" /> Coordination terrain : Kinzau-Mvuete, RDC</div>
                      <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-orange-500" /> contact@proddeko.online</div>
                      <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-orange-500" /> +32 488 84 46 98</div>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 grid gap-3">
                      <input name="name" value={formData.name} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-orange-400" placeholder="Votre nom" required />
                      <input name="email" type="email" value={formData.email} onChange={handleChange} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-orange-400" placeholder="Votre e-mail" required />
                      <textarea name="message" value={formData.message} onChange={handleChange} className="min-h-[120px] rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-orange-400" placeholder="Votre message" required />
                      <button type="submit" className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600">Envoyer</button>
                      {status && <p className="text-sm text-slate-600 mt-2">{status}</p>}
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 xl:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img src={ASSETS.logo} alt="Logo PRODDEKO" className="h-10 w-10 object-contain" />
              <div className="text-xl font-extrabold text-blue-950">PRODDEKO-Belgique</div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">Association de solidarité internationale engagée pour la dignité humaine, le développement durable et la gouvernance éthique.</p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Navigation</div>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li><a href="#a-propos">À propos</a></li>
              <li><a href="#actions">Nos actions</a></li>
              <li><a href="#anticorruption">Anticorruption</a></li>
              <li><a href="#projets">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Coordonnées</div>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Liège, Belgique</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Matadi, RDC</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@proddeko.org</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Newsletter</div>
            <div className="mt-5 space-y-3">
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-orange-400 focus:outline-none" placeholder="Votre e-mail" />
              <button className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600">S’abonner</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
