import React, { useEffect, useState } from "react";
import {
  ArrowRight, Building2, CheckCircle2, ChevronRight, Globe2, Handshake,
  Leaf, Mail, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Sprout, Target, FileText, Users, X,
  Droplets, BriefcaseBusiness, Scale, HeartHandshake
} from "lucide-react";

const NAV = [
  ["Accueil", "accueil"], ["Qui sommes-nous", "qui"], ["Programmes", "programmes"],
  ["Projets", "projets"], ["Impact", "impact"], ["Gouvernance", "gouvernance"],
  ["Partenaires", "partenaires"], ["Contact", "contact"]
];

const programs = [
  {icon: Droplets, title:"Eau, agriculture & résilience climatique", text:"Accès durable à l’eau, irrigation solaire, agriculture familiale, agroécologie et gestion participative des ressources naturelles."},
  {icon: BriefcaseBusiness, title:"Insertion, jeunesse & économie verte", text:"Formation, entrepreneuriat, métiers verts, économie circulaire et accompagnement vers une insertion économique durable."},
  {icon: Users, title:"Inclusion & cohésion sociale", text:"Citoyenneté, apprentissage, sport comme levier d’insertion et valorisation des compétences des personnes issues de la migration."},
  {icon: Scale, title:"Gouvernance & innovation territoriale", text:"Renforcement institutionnel, transparence, partenariats responsables, technologies appropriées et solutions ancrées dans les territoires."}
];

const projects = [
  {status:"En cours", title:"BOMA – Irrigation solaire et résilience maraîchère", place:"Boma, Kongo Central · RDC", text:"Améliorer l’accès à l’eau et la résilience de 300 maraîchers grâce à une solution d’irrigation solaire, une gouvernance locale de l’eau et un accompagnement technique."},
  {status:"En développement", title:"KIN ECO-JEUNES 2027", place:"Malueka, Kinshasa · RDC", text:"Insertion économique de jeunes et de femmes par les métiers verts, l’économie circulaire, l’entrepreneuriat et un Green Business Lab territorial."},
  {status:"En développement", title:"Brussels Football Bridges", place:"Bruxelles · Belgique", text:"Utiliser le football comme porte d’entrée vers les compétences personnelles, la citoyenneté, l’inclusion et l’insertion socioprofessionnelle des jeunes."},
  {status:"Pilote", title:"Emploi – Primo-arrivants qualifiés", place:"Belgique", text:"Valoriser les compétences d’ingénieurs, techniciens et professionnels issus de la migration au service de projets techniques et patrimoniaux d’utilité sociale."}
];

const partners = ["Fondations et bailleurs", "Pouvoirs publics", "ONG et associations", "Universités et experts", "Entreprises responsables", "Organisations communautaires"];

function Shell({children}) { return <div className="min-h-screen bg-slate-50 text-slate-800">{children}</div>; }
function Wrap({children, className=""}) { return <div className={`mx-auto max-w-7xl px-5 sm:px-7 lg:px-8 ${className}`}>{children}</div>; }
function Eyebrow({children}) { return <div className="text-xs font-black uppercase tracking-[.28em] text-orange-600">{children}</div>; }
function SectionTitle({eyebrow, title, text}) { return <div className="max-w-3xl"><Eyebrow>{eyebrow}</Eyebrow><h2 className="mt-4 text-3xl font-black tracking-tight text-blue-950 sm:text-5xl">{title}</h2>{text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}</div>; }

export default function App(){
  const pathToPage = {
    "/": "accueil",
    "/qui-sommes-nous/": "qui",
    "/programmes/": "programmes",
    "/projets/": "projets",
    "/impact/": "impact",
    "/gouvernance/": "gouvernance",
    "/partenaires/": "partenaires",
    "/contact/": "contact"
  };

  const pageToPath = {
    accueil: "/",
    qui: "/qui-sommes-nous/",
    programmes: "/programmes/",
    projets: "/projets/",
    impact: "/impact/",
    gouvernance: "/gouvernance/",
    partenaires: "/partenaires/",
    contact: "/contact/"
  };

  const [page,setPage]=useState(
    pathToPage[window.location.pathname] || "accueil"
  );

  const [mobile,setMobile]=useState(false);

  const go=(p)=>{
    setPage(p);
    setMobile(false);

    const newPath = pageToPath[p] || "/";
    window.history.pushState({}, "", newPath);

    window.scrollTo({top:0,behavior:"smooth"});
  };
  return <Shell>
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Wrap className="flex min-h-20 items-center justify-between gap-4 py-3">
        <button onClick={()=>go("accueil")} className="flex items-center gap-3 text-left">
          <img src="/images/proddeko-logo.png" alt="PRODDEKO-Belgique" className="h-12 w-12 rounded-xl object-contain" />
          <div><div className="font-black text-blue-950">PRODDEKO-Belgique</div><div className="text-xs font-semibold text-slate-500">Triple Sustain Impact</div></div>
        </button>
        <nav className="hidden items-center gap-1 xl:flex">{NAV.map(([n,p])=><button key={p} onClick={()=>go(p)} className={`rounded-full px-3 py-2 text-sm font-bold ${page===p?"bg-blue-950 text-white":"text-slate-700 hover:bg-slate-100"}`}>{n}</button>)}</nav>
        <button className="xl:hidden" onClick={()=>setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</button>
      </Wrap>
      {mobile && <div className="border-t bg-white xl:hidden"><Wrap className="grid gap-1 py-4">{NAV.map(([n,p])=><button key={p} onClick={()=>go(p)} className="rounded-xl px-4 py-3 text-left font-bold hover:bg-slate-100">{n}</button>)}</Wrap></div>}
    </header>

    {page==="accueil" && <>
      <section className="relative overflow-hidden bg-blue-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,.28),transparent_35%),radial-gradient(circle_at_10%_80%,rgba(34,197,94,.18),transparent_30%)]" />
        <Wrap className="relative grid gap-12 py-24 lg:grid-cols-[1.15fr_.85fr] lg:py-32">
          <div><div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold">Belgique · République démocratique du Congo</div>
            <h1 className="mt-7 text-5xl font-black leading-[1.04] sm:text-7xl">Agir durablement.<br/><span className="text-orange-400">Innover ensemble.</span><br/>Transformer les territoires.</h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-200">PRODDEKO-Belgique conçoit et accompagne des solutions à triple impact — social, économique et environnemental — en reliant les communautés, l’expertise, l’innovation et les partenaires de développement.</p>
            <div className="mt-9 flex flex-wrap gap-4"><button onClick={()=>go("projets")} className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-black">Découvrir nos projets <ArrowRight size={18}/></button><button onClick={()=>go("partenaires")} className="rounded-full border border-white/25 px-6 py-3 font-black">Construire un partenariat</button></div>
          </div>
          <div className="grid gap-4 self-end sm:grid-cols-2 lg:grid-cols-1"><HeroCard icon={Sprout} title="Impact social" text="Capacités, inclusion, autonomisation et participation."/><HeroCard icon={Target} title="Impact économique" text="Emploi, entrepreneuriat, revenus et économie locale."/><HeroCard icon={Leaf} title="Impact environnemental" text="Résilience climatique, eau, énergie et ressources durables."/></div>
        </Wrap>
      </section>
      <section className="py-20"><Wrap><SectionTitle eyebrow="Notre approche" title="Du besoin territorial à l’impact mesurable" text="Nous partons des réalités locales, construisons avec les acteurs concernés et recherchons des solutions techniquement pertinentes, financièrement responsables et capables de produire des effets durables."/><div className="mt-10 grid gap-5 md:grid-cols-4">{["Écouter et diagnostiquer","Co-concevoir","Mettre en œuvre","Mesurer et capitaliser"].map((x,i)=><div key={x} className="rounded-3xl border bg-white p-6 shadow-sm"><div className="text-4xl font-black text-orange-500">0{i+1}</div><div className="mt-4 font-black text-blue-950">{x}</div></div>)}</div></Wrap></section>
      <ProjectsPreview go={go}/>
    </>}

    {page==="qui" && <>
  <PageHero
    eyebrow="Qui sommes-nous ?"
    title="Une organisation de coopération et d’innovation au service des territoires"
    text="PRODDEKO-Belgique – Triple Sustain Impact est une association belge engagée dans le développement durable, la solidarité internationale, l’inclusion et l’innovation territoriale. Issue d’une dynamique associative initiée en 1996, elle développe et accompagne des initiatives en Belgique et en République démocratique du Congo, en recherchant simultanément un impact social, économique et environnemental."
  />

  <section className="py-20">
    <Wrap>
      <div className="grid gap-8 lg:grid-cols-2">

        <TextBlock title="Notre identité">
          Notre approche repose sur une conviction : les réponses durables aux défis sociaux, économiques et environnementaux se construisent avec les populations et les acteurs des territoires concernés. PRODDEKO-Belgique agit comme facilitateur, concepteur de projets et interface de coopération entre communautés locales, associations, experts, institutions publiques, acteurs académiques, entreprises responsables et partenaires de développement.
        </TextBlock>

        <TextBlock title="Notre mission">
          Contribuer à des territoires plus autonomes, inclusifs et résilients en renforçant les capacités des personnes et des organisations et en facilitant l’accès aux ressources, aux compétences, aux technologies et aux opportunités économiques.
        </TextBlock>

        <TextBlock title="Notre vision">
          Contribuer à l’émergence de communautés capables d’agir sur leur propre avenir, d’organisations locales renforcées et de partenariats dans lesquels les ressources mobilisées produisent des changements mesurables, responsables et durables.
        </TextBlock>

        <TextBlock title="Nos principes d’intervention">
          Dignité humaine, participation, équité, intégrité, responsabilité environnementale, transparence et redevabilité. Nous privilégions la co-construction, le renforcement des capacités locales, les technologies appropriées et la recherche de solutions capables de produire des effets durables au-delà de la durée d’un financement.
        </TextBlock>

      </div>

      <div className="mt-12 rounded-[2rem] bg-blue-950 p-8 text-white sm:p-10">
        <Eyebrow>Triple Sustain Impact</Eyebrow>
        <h2 className="mt-4 text-3xl font-black sm:text-4xl">
          Trois dimensions complémentaires de l’impact
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
            <HeartHandshake className="h-8 w-8 text-orange-400" />
            <h3 className="mt-4 text-xl font-black">Impact social</h3>
            <p className="mt-3 leading-7 text-slate-200">
              Dignité, inclusion, compétences, participation et autonomisation des personnes.
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
            <BriefcaseBusiness className="h-8 w-8 text-orange-400" />
            <h3 className="mt-4 text-xl font-black">Impact économique</h3>
            <p className="mt-3 leading-7 text-slate-200">
              Insertion, entrepreneuriat, amélioration des revenus, productivité et développement économique local.
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
            <Leaf className="h-8 w-8 text-orange-400" />
            <h3 className="mt-4 text-xl font-black">Impact environnemental</h3>
            <p className="mt-3 leading-7 text-slate-200">
              Gestion responsable de l’eau et des ressources, énergie propre, agroécologie, économie circulaire et résilience climatique.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <TextBlock title="Notre méthode">
          Diagnostiquer avec les acteurs locaux, co-concevoir les réponses, mobiliser les compétences et les partenariats, mettre en œuvre, mesurer les résultats puis capitaliser les apprentissages afin d’améliorer les interventions.
        </TextBlock>

        <TextBlock title="Notre ancrage Belgique – RDC">
          Cet ancrage permet à PRODDEKO-Belgique de favoriser la circulation des compétences, des expériences, des technologies et des partenariats entre la Belgique et la République démocratique du Congo, tout en maintenant les besoins et les capacités des acteurs locaux au centre des projets.
        </TextBlock>
      </div>

      <div className="mt-12 rounded-[2rem] border bg-white p-8 shadow-sm">
        <Eyebrow>Repères institutionnels</Eyebrow>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="text-sm font-bold text-slate-500">Identité</div>
            <div className="mt-1 font-black text-blue-950">PRODDEKO-Belgique · Triple Sustain Impact</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-500">Création</div>
            <div className="mt-1 font-black text-blue-950">1996</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-500">BCE</div>
            <div className="mt-1 font-black text-blue-950">0459.354.980</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-500">Siège social</div>
            <div className="mt-1 font-black text-blue-950">Rue Prince Albert 8/1, 4840 Welkenraedt</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-500">Ancrage</div>
            <div className="mt-1 font-black text-blue-950">Belgique · République démocratique du Congo</div>
          </div>
          <div>
            <div className="text-sm font-bold text-slate-500">E-mail</div>
            <a
              href="mailto:admin@proddeko.online"
              className="mt-1 block font-black text-blue-950 hover:text-orange-600"
            >
              admin@proddeko.online
            </a>
          </div>
        </div>
      </div>

    </Wrap>
  </section>
</>}
    {page==="programmes" && <>
  <PageHero
    eyebrow="Programmes"
    title="Quatre programmes pour un triple impact"
    text="PRODDEKO-Belgique – Triple Sustain Impact structure son action autour de quatre programmes complémentaires. Ils relient besoins territoriaux, renforcement des capacités, innovation et partenariats afin de produire des résultats sociaux, économiques et environnementaux durables."
  />

  <section className="py-20">
    <Wrap>
      <SectionTitle
        eyebrow="Nos domaines d’intervention"
        title="Des programmes conçus à partir des réalités des territoires"
        text="Chaque programme constitue un cadre d’intervention dans lequel peuvent être développés plusieurs projets, en Belgique comme en République démocratique du Congo."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
          <Droplets className="h-10 w-10 text-orange-500" />
          <div className="mt-5 text-xs font-black uppercase tracking-[.25em] text-orange-600">
            Programme 01
          </div>
          <h2 className="mt-3 text-2xl font-black text-blue-950">
            Eau, agriculture & résilience climatique
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Améliorer durablement l’accès à l’eau, renforcer l’agriculture familiale
            et développer la capacité des communautés à faire face aux effets du changement climatique.
          </p>

          <div className="mt-6 border-t pt-5">
            <div className="font-bold text-blue-950">Axes d’intervention</div>
            <p className="mt-2 leading-7 text-slate-600">
              Irrigation solaire · gestion responsable de l’eau · agriculture familiale ·
              agroécologie · technologies appropriées · renforcement des organisations
              de producteurs · résilience climatique.
            </p>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 p-5">
            <div className="text-sm font-black text-blue-950">Projet associé</div>
            <p className="mt-2 text-slate-600">
              BOMA – Irrigation solaire et résilience maraîchère · Kongo Central, RDC.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
          <BriefcaseBusiness className="h-10 w-10 text-orange-500" />
          <div className="mt-5 text-xs font-black uppercase tracking-[.25em] text-orange-600">
            Programme 02
          </div>
          <h2 className="mt-3 text-2xl font-black text-blue-950">
            Insertion, jeunesse & économie verte
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Faciliter l’insertion économique des jeunes et des personnes confrontées
            à des obstacles d’accès à l’emploi en combinant compétences,
            entrepreneuriat et nouvelles opportunités économiques.
          </p>

          <div className="mt-6 border-t pt-5">
            <div className="font-bold text-blue-950">Axes d’intervention</div>
            <p className="mt-2 leading-7 text-slate-600">
              Formation professionnelle · métiers verts · entrepreneuriat · économie
              circulaire · accompagnement vers l’emploi · incubation · compétences
              numériques · innovation économique locale.
            </p>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 p-5">
            <div className="text-sm font-black text-blue-950">Initiatives associées</div>
            <p className="mt-2 text-slate-600">
              KIN ECO-JEUNES 2027 · Emploi – Primo-arrivants qualifiés.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
          <Users className="h-10 w-10 text-orange-500" />
          <div className="mt-5 text-xs font-black uppercase tracking-[.25em] text-orange-600">
            Programme 03
          </div>
          <h2 className="mt-3 text-2xl font-black text-blue-950">
            Inclusion & cohésion sociale
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Renforcer la participation, les compétences et l’autonomie des personnes
            tout en utilisant l’apprentissage, la citoyenneté et le sport comme
            leviers de cohésion sociale.
          </p>

          <div className="mt-6 border-t pt-5">
            <div className="font-bold text-blue-950">Axes d’intervention</div>
            <p className="mt-2 leading-7 text-slate-600">
              Inclusion · apprentissage · citoyenneté · jeunesse · sport · compétences
              sociales · accompagnement des publics vulnérables · dialogue interculturel.
            </p>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 p-5">
            <div className="text-sm font-black text-blue-950">Initiative associée</div>
            <p className="mt-2 text-slate-600">
              Brussels Football Bridges · Belgique.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
          <Scale className="h-10 w-10 text-orange-500" />
          <div className="mt-5 text-xs font-black uppercase tracking-[.25em] text-orange-600">
            Programme 04
          </div>
          <h2 className="mt-3 text-2xl font-black text-blue-950">
            Gouvernance & innovation territoriale
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Renforcer les organisations et les territoires afin qu’ils puissent
            concevoir, piloter et évaluer leurs propres stratégies de développement
            dans un cadre transparent et responsable.
          </p>

          <div className="mt-6 border-t pt-5">
            <div className="font-bold text-blue-950">Axes d’intervention</div>
            <p className="mt-2 leading-7 text-slate-600">
              Renforcement institutionnel · gouvernance · transparence · redevabilité ·
              planification territoriale · partenariats · technologies appropriées ·
              suivi et mesure de l’impact.
            </p>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 p-5">
            <div className="text-sm font-black text-blue-950">Fonction transversale</div>
            <p className="mt-2 text-slate-600">
              Ce programme soutient également la qualité institutionnelle et la
              pérennisation des autres programmes.
            </p>
          </div>
        </div>

      </div>

      <div className="mt-14 rounded-[2rem] bg-blue-950 p-8 text-white sm:p-10">
        <div className="max-w-3xl">
          <Eyebrow>Une logique commune</Eyebrow>

          <h2 className="mt-4 text-3xl font-black">
            Du programme au projet, du projet à l’impact
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            Les programmes définissent les orientations de long terme. Les projets
            traduisent ces orientations en interventions concrètes, avec des territoires,
            des bénéficiaires, des partenaires, des ressources et des résultats attendus
            clairement identifiés.
          </p>

          <button
            onClick={()=>go("projets")}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-black text-white transition hover:bg-orange-600"
          >
            Découvrir nos projets
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

    </Wrap>
  </section>
</>}
    {page==="projets" && <>
  <PageHero
    eyebrow="Projets"
    title="Des interventions concrètes, avec un niveau de maturité clairement identifié"
    text="Nos projets traduisent les programmes de PRODDEKO-Belgique en interventions territoriales concrètes. Nous distinguons les projets en cours, les initiatives en développement et les projets pilotes afin de présenter de manière transparente leur niveau d’avancement."
  />

  <section className="py-20">
    <Wrap>
      <SectionTitle
        eyebrow="Portefeuille de projets"
        title="De la réponse locale à l’impact durable"
        text="Chaque projet est développé à partir d’un besoin identifié, d’un territoire, de bénéficiaires et de partenaires clairement définis. Les informations présentées évoluent en fonction de la maturation, des partenariats et des financements effectivement mobilisés."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2">

        <article className="rounded-[2rem] border bg-white p-8 shadow-sm">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-orange-700">
            En cours
          </span>

          <h2 className="mt-5 text-2xl font-black text-blue-950">
            BOMA – Irrigation solaire et résilience maraîchère
          </h2>

          <div className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-500">
            <MapPin size={16} />
            Boma, Kongo Central · RDC
          </div>

          <p className="mt-5 leading-7 text-slate-600">
            Améliorer durablement l’accès à l’eau et renforcer la résilience
            des producteurs maraîchers grâce à une solution d’irrigation solaire,
            une gestion responsable de la ressource en eau et un accompagnement
            technique adapté au contexte local.
          </p>

          <div className="mt-6 border-t pt-5">
            <div className="font-bold text-blue-950">Public prioritaire</div>
            <p className="mt-2 text-slate-600">
              Producteurs maraîchers et organisations locales de producteurs.
            </p>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 p-5">
            <div className="text-sm font-black text-blue-950">
              Contribution attendue
            </div>
            <p className="mt-2 leading-7 text-slate-600">
              Sécurisation de l’accès à l’eau, amélioration des capacités
              productives, résilience climatique et renforcement de la
              gouvernance locale de l’eau.
            </p>
          </div>
        </article>

        <article className="rounded-[2rem] border bg-white p-8 shadow-sm">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-orange-700">
            En développement
          </span>

          <h2 className="mt-5 text-2xl font-black text-blue-950">
            KIN ECO-JEUNES 2027
          </h2>

          <div className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-500">
            <MapPin size={16} />
            Malueka, Kinshasa · RDC
          </div>

          <p className="mt-5 leading-7 text-slate-600">
            Favoriser l’insertion économique des jeunes et des femmes par
            les métiers verts, l’économie circulaire, l’entrepreneuriat
            et le développement progressif d’un Green Business Lab territorial.
          </p>

          <div className="mt-6 border-t pt-5">
            <div className="font-bold text-blue-950">Public prioritaire</div>
            <p className="mt-2 text-slate-600">
              Jeunes et femmes souhaitant développer des compétences,
              une activité économique ou un parcours entrepreneurial.
            </p>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 p-5">
            <div className="text-sm font-black text-blue-950">
              Approche
            </div>
            <p className="mt-2 leading-7 text-slate-600">
              Formation technique, entrepreneuriat, accompagnement,
              incubation, économie circulaire et mise en réseau avec
              les acteurs économiques et institutionnels.
            </p>
          </div>
        </article>

        <article className="rounded-[2rem] border bg-white p-8 shadow-sm">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-orange-700">
            En développement
          </span>

          <h2 className="mt-5 text-2xl font-black text-blue-950">
            Brussels Football Bridges
          </h2>

          <div className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-500">
            <MapPin size={16} />
            Bruxelles · Belgique
          </div>

          <p className="mt-5 leading-7 text-slate-600">
            Utiliser le football comme porte d’entrée vers le développement
            des compétences personnelles et sociales, la citoyenneté,
            l’inclusion et l’insertion socioprofessionnelle des jeunes.
          </p>

          <div className="mt-6 border-t pt-5">
            <div className="font-bold text-blue-950">
              Logique d’intervention
            </div>
            <p className="mt-2 text-slate-600">
              Sport, accompagnement éducatif, compétences transversales,
              orientation et création de passerelles vers les acteurs
              de l’insertion.
            </p>
          </div>
        </article>

        <article className="rounded-[2rem] border bg-white p-8 shadow-sm">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-orange-700">
            Pilote
          </span>

          <h2 className="mt-5 text-2xl font-black text-blue-950">
            Emploi – Primo-arrivants qualifiés
          </h2>

          <div className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-500">
            <MapPin size={16} />
            Belgique
          </div>

          <p className="mt-5 leading-7 text-slate-600">
            Valoriser les compétences d’ingénieurs, techniciens et autres
            professionnels issus de la migration, en créant des passerelles
            entre leurs compétences, les besoins du marché du travail
            et des projets d’utilité sociale.
          </p>

          <div className="mt-6 border-t pt-5">
            <div className="font-bold text-blue-950">Objectif</div>
            <p className="mt-2 text-slate-600">
              Réduire la sous-utilisation des compétences, faciliter
              l’orientation professionnelle et favoriser la reconnaissance
              des savoir-faire.
            </p>
          </div>
        </article>

      </div>

      <div className="mt-14 rounded-[2rem] bg-blue-950 p-8 text-white sm:p-10">
        <div className="max-w-3xl">
          <Eyebrow>Transparence</Eyebrow>

          <h2 className="mt-4 text-3xl font-black">
            Un statut de projet n’est pas une promesse de financement
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            La mention « en développement » indique qu’une initiative est
            en cours de conception, de recherche de partenaires ou de
            financement. Les résultats, budgets et partenaires sont publiés
            progressivement lorsqu’ils sont confirmés et documentés.
          </p>

          <button
            onClick={()=>go("partenaires")}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-black text-white transition hover:bg-orange-600"
          >
            Construire un partenariat
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

    </Wrap>
  </section>
</>}
{page==="impact" && <>
  <PageHero
    eyebrow="Impact"
    title="Mesurer ce qui change réellement"
    text="Notre approche de l’impact privilégie les résultats documentés, la qualité des changements observés et la capacité des acteurs locaux à maintenir les acquis dans la durée."
  />

  <section className="py-20">
    <Wrap>

      <SectionTitle
        eyebrow="Notre approche"
        title="De l’activité au changement durable"
        text="Nous ne réduisons pas l’impact au nombre d’activités réalisées. Nous cherchons à comprendre ce qui change pour les personnes, les organisations et les territoires, pourquoi ce changement intervient et dans quelle mesure il peut être maintenu."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-[2rem] border bg-white p-7 shadow-sm">
          <HeartHandshake className="h-9 w-9 text-orange-500" />
          <h3 className="mt-5 text-xl font-black text-blue-950">
            Impact social
          </h3>
          <p className="mt-4 leading-7 text-slate-600">
            Inclusion, compétences, participation, accès aux services,
            autonomisation et amélioration des capacités d’action.
          </p>
        </div>

        <div className="rounded-[2rem] border bg-white p-7 shadow-sm">
          <BriefcaseBusiness className="h-9 w-9 text-orange-500" />
          <h3 className="mt-5 text-xl font-black text-blue-950">
            Impact économique
          </h3>
          <p className="mt-4 leading-7 text-slate-600">
            Insertion, entrepreneuriat, revenus, productivité,
            développement des compétences et dynamiques économiques locales.
          </p>
        </div>

        <div className="rounded-[2rem] border bg-white p-7 shadow-sm">
          <Leaf className="h-9 w-9 text-orange-500" />
          <h3 className="mt-5 text-xl font-black text-blue-950">
            Impact environnemental
          </h3>
          <p className="mt-4 leading-7 text-slate-600">
            Gestion responsable de l’eau, énergie propre, adaptation
            climatique, économie circulaire et pratiques durables.
          </p>
        </div>

        <div className="rounded-[2rem] border bg-white p-7 shadow-sm">
          <Building2 className="h-9 w-9 text-orange-500" />
          <h3 className="mt-5 text-xl font-black text-blue-950">
            Impact institutionnel
          </h3>
          <p className="mt-4 leading-7 text-slate-600">
            Gouvernance, capacités organisationnelles, transparence,
            coopération entre acteurs et pérennisation des dispositifs.
          </p>
        </div>

      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-2">

        <div>
          <Eyebrow>Mesure de l’impact</Eyebrow>

          <h2 className="mt-4 text-3xl font-black text-blue-950">
            Une chaîne de résultats lisible et vérifiable
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Chaque intervention doit progressivement relier les ressources
            mobilisées aux activités réalisées, aux résultats obtenus et
            aux changements recherchés. Cette logique permet de distinguer
            ce qui a effectivement été réalisé de ce qui reste attendu.
          </p>
        </div>

        <div className="space-y-4">

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-black text-orange-700">
                1
              </div>
              <div>
                <h3 className="font-black text-blue-950">
                  Ressources
                </h3>
                <p className="mt-1 text-slate-600">
                  Financements, expertise, équipements, partenariats
                  et mobilisation locale.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-black text-orange-700">
                2
              </div>
              <div>
                <h3 className="font-black text-blue-950">
                  Activités
                </h3>
                <p className="mt-1 text-slate-600">
                  Formations, infrastructures, accompagnement,
                  animation territoriale et appui institutionnel.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-black text-orange-700">
                3
              </div>
              <div>
                <h3 className="font-black text-blue-950">
                  Résultats
                </h3>
                <p className="mt-1 text-slate-600">
                  Services accessibles, compétences acquises,
                  équipements opérationnels et organisations renforcées.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-black text-orange-700">
                4
              </div>
              <div>
                <h3 className="font-black text-blue-950">
                  Changements
                </h3>
                <p className="mt-1 text-slate-600">
                  Amélioration durable des conditions, des capacités
                  et de l’autonomie des acteurs concernés.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-20">
        <SectionTitle
          eyebrow="Indicateurs"
          title="Publier des résultats que nous pouvons démontrer"
          text="Les indicateurs sont adaptés à chaque projet. Ils doivent être associés à une période, un périmètre, une méthode de collecte et, lorsque cela est possible, une situation de référence."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-[2rem] border bg-white p-7 shadow-sm">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
            <h3 className="mt-5 text-xl font-black text-blue-950">
              Résultats réalisés
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Données correspondant à des activités ou résultats
              effectivement réalisés et pouvant être documentés.
            </p>
          </div>

          <div className="rounded-[2rem] border bg-white p-7 shadow-sm">
            <Target className="h-8 w-8 text-orange-500" />
            <h3 className="mt-5 text-xl font-black text-blue-950">
              Résultats attendus
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Objectifs et cibles fixés dans les projets, clairement
              distingués des résultats déjà atteints.
            </p>
          </div>

          <div className="rounded-[2rem] border bg-white p-7 shadow-sm">
            <FileText className="h-8 w-8 text-blue-700" />
            <h3 className="mt-5 text-xl font-black text-blue-950">
              Sources & preuves
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Rapports, listes de participation, documents techniques,
              données de suivi, évaluations et autres éléments vérifiables.
            </p>
          </div>

        </div>
      </div>

      <div className="mt-20 rounded-[2rem] bg-slate-50 p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-2">

          <div>
            <Eyebrow>Apprentissage</Eyebrow>

            <h2 className="mt-4 text-3xl font-black text-blue-950">
              Mesurer pour améliorer, pas seulement pour rendre compte
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Le suivi et l’évaluation doivent permettre d’identifier
              ce qui fonctionne, ce qui doit être adapté et les enseignements
              transférables à d’autres projets ou territoires.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <div className="font-black text-blue-950">
              Notre cycle d’apprentissage
            </div>

            <div className="mt-5 space-y-3 text-slate-600">
              <p>01 · Observer et documenter</p>
              <p>02 · Analyser les résultats</p>
              <p>03 · Identifier les écarts et enseignements</p>
              <p>04 · Adapter les interventions</p>
              <p>05 · Capitaliser et partager</p>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-14 rounded-[2rem] bg-blue-950 p-8 text-white sm:p-10">
        <div className="max-w-4xl">

          <Eyebrow>Transparence de l’impact</Eyebrow>

          <h2 className="mt-4 text-3xl font-black">
            Pas de chiffre sans contexte
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            PRODDEKO-Belgique privilégie une communication prudente et
            vérifiable. Un chiffre d’impact doit pouvoir être relié à une
            source, une période, un territoire et une méthode de collecte.
            Les objectifs futurs sont présentés comme des cibles et non
            comme des réalisations.
          </p>

          <button
            onClick={()=>go("gouvernance")}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-black text-white transition hover:bg-orange-600"
          >
            Découvrir notre gouvernance
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>
      </div>

    </Wrap>
  </section>
</>}
    {page==="gouvernance" && <>
  <PageHero
    eyebrow="Gouvernance"
    title="Responsabilité, transparence et redevabilité"
    text="La gouvernance constitue une condition essentielle de la qualité et de la durabilité de nos interventions. PRODDEKO-Belgique renforce progressivement ses procédures de décision, de gestion, de contrôle et de suivi afin de répondre aux exigences des membres, partenaires, bailleurs et communautés."
  />

  <section className="py-20">
    <Wrap>

      <SectionTitle
        eyebrow="Cadre institutionnel"
        title="Une organisation responsable de ses décisions et de ses ressources"
        text="Notre objectif est de consolider une gouvernance associative lisible, des responsabilités clairement définies et une gestion proportionnée à la taille et à la complexité des projets."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">

        <Govern
          title="Gouvernance associative"
          text="Assemblée générale, conseil d’administration, répartition des responsabilités, décisions documentées et respect des dispositions statutaires."
        />

        <Govern
          title="Gestion financière"
          text="Budgets identifiés par projet, suivi des engagements, conservation des pièces justificatives et séparation progressive des fonctions d’autorisation, d’exécution et de contrôle."
        />

        <Govern
          title="Éthique & intégrité"
          text="Prévention des conflits d’intérêts, vigilance face à la fraude et à la corruption, respect des personnes, confidentialité et application des règles pertinentes."
        />

        <Govern
          title="Suivi, évaluation & apprentissage"
          text="Définition d’indicateurs adaptés, collecte de preuves, analyse des résultats, documentation des écarts et capitalisation des enseignements."
        />

      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-2">

        <div>
          <Eyebrow>Redevabilité</Eyebrow>

          <h2 className="mt-4 text-3xl font-black text-blue-950">
            Savoir qui décide, qui exécute et qui contrôle
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Une gouvernance crédible repose sur une distinction claire entre
            les fonctions de décision stratégique, de mise en œuvre opérationnelle
            et de contrôle. Cette séparation réduit les risques, améliore la
            traçabilité et facilite la reddition de comptes.
          </p>
        </div>

        <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
          <div className="space-y-6">

            <div>
              <div className="text-sm font-black uppercase tracking-wider text-orange-600">
                Niveau 01
              </div>
              <h3 className="mt-2 text-xl font-black text-blue-950">
                Orientation stratégique
              </h3>
              <p className="mt-2 text-slate-600">
                Assemblée générale et conseil d’administration.
              </p>
            </div>

            <div className="border-t pt-5">
              <div className="text-sm font-black uppercase tracking-wider text-orange-600">
                Niveau 02
              </div>
              <h3 className="mt-2 text-xl font-black text-blue-950">
                Pilotage opérationnel
              </h3>
              <p className="mt-2 text-slate-600">
                Coordination des projets, suivi des activités, partenaires
                et obligations contractuelles.
              </p>
            </div>

            <div className="border-t pt-5">
              <div className="text-sm font-black uppercase tracking-wider text-orange-600">
                Niveau 03
              </div>
              <h3 className="mt-2 text-xl font-black text-blue-950">
                Contrôle & redevabilité
              </h3>
              <p className="mt-2 text-slate-600">
                Vérification des dépenses, suivi des engagements, rapports,
                preuves et documentation des décisions.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-20">
        <SectionTitle
          eyebrow="Gestion des projets"
          title="Des règles appliquées tout au long du cycle de financement"
          text="Les exigences de gouvernance doivent accompagner le projet depuis sa conception jusqu’à la clôture et à la capitalisation."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["01", "Conception", "Objectifs, responsabilités, budget et risques identifiés."],
            ["02", "Validation", "Décisions et engagements formalisés avant mise en œuvre."],
            ["03", "Exécution", "Suivi technique, administratif et financier documenté."],
            ["04", "Clôture", "Rapportage, justification, évaluation et archivage."]
          ].map(([n,t,d])=>(
            <div key={n} className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-3xl font-black text-orange-500">{n}</div>
              <h3 className="mt-4 text-xl font-black text-blue-950">{t}</h3>
              <p className="mt-3 leading-7 text-slate-600">{d}</p>
            </div>
          ))}

        </div>
      </div>

      <div className="mt-20 rounded-[2rem] bg-slate-50 p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-2">

          <div>
            <Eyebrow>Intégrité</Eyebrow>

            <h2 className="mt-4 text-3xl font-black text-blue-950">
              Prévenir les risques avant qu’ils ne fragilisent les projets
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Les mécanismes de prévention doivent être proportionnés aux
              activités et aux financements concernés : conflits d’intérêts,
              fraude, corruption, protection des données, sécurité des personnes
              et utilisation responsable des ressources.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">
            <ShieldCheck className="h-9 w-9 text-orange-500" />

            <div className="mt-5 font-black text-blue-950">
              Principes de vigilance
            </div>

            <div className="mt-5 space-y-3 text-slate-600">
              <p>• Traçabilité des décisions et des dépenses</p>
              <p>• Déclaration des conflits d’intérêts</p>
              <p>• Respect des bénéficiaires et partenaires</p>
              <p>• Protection des informations sensibles</p>
              <p>• Réaction documentée en cas d’incident</p>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-14 rounded-[2rem] bg-blue-950 p-8 text-white sm:p-10">
        <div className="max-w-4xl">

          <Eyebrow>Amélioration continue</Eyebrow>

          <h2 className="mt-4 text-3xl font-black">
            Une gouvernance qui se renforce avec la croissance de l’organisation
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            PRODDEKO-Belgique poursuit la formalisation progressive de ses
            procédures internes. Les mécanismes de contrôle, de gestion des risques
            et de suivi sont appelés à évoluer avec les volumes financiers,
            les exigences contractuelles et la complexité des partenariats.
          </p>

          <button
            onClick={()=>go("partenaires")}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-black text-white transition hover:bg-orange-600"
          >
            Découvrir nos partenariats
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>
      </div>

    </Wrap>
  </section>
</>}
    {page==="partenaires" && <>
  <PageHero
    eyebrow="Partenaires"
    title="Construire des alliances utiles, complémentaires et durables"
    text="PRODDEKO-Belgique développe ses interventions avec des acteurs publics, associatifs, techniques, académiques et financiers capables de conjuguer expertise, ancrage territorial et responsabilité."
  />

  <section className="py-20">
    <Wrap>

      <SectionTitle
        eyebrow="Notre approche partenariale"
        title="Coopérer là où les compétences se complètent"
        text="Nous ne recherchons pas des partenariats de façade. Chaque collaboration doit répondre à un besoin identifié, apporter une valeur ajoutée concrète et préciser les responsabilités de chaque organisation."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {[
          {
            title:"Associations & ONG",
            text:"Co-construction et mise en œuvre d’interventions, mobilisation communautaire, accompagnement des bénéficiaires et ancrage territorial."
          },
          {
            title:"Institutions publiques",
            text:"Articulation avec les politiques publiques, coordination territoriale, accès aux dispositifs institutionnels et recherche de complémentarités."
          },
          {
            title:"Fondations & bailleurs",
            text:"Financement d’interventions démontrables, accompagnement stratégique, suivi des résultats et développement de solutions reproductibles."
          },
          {
            title:"Entreprises & experts",
            text:"Expertise technique, technologies appropriées, ingénierie, équipements, innovation et transfert de compétences."
          },
          {
            title:"Universités & recherche",
            text:"Diagnostic, production de connaissances, suivi-évaluation, recherche-action, documentation et capitalisation des enseignements."
          },
          {
            title:"Acteurs communautaires",
            text:"Identification des besoins, participation aux décisions, mise en œuvre locale, appropriation et pérennisation des solutions."
          }
        ].map((item)=>(
          <div
            key={item.title}
            className="rounded-[2rem] border bg-white p-7 shadow-sm"
          >
            <Handshake className="h-9 w-9 text-orange-500" />

            <h3 className="mt-5 text-xl font-black text-blue-950">
              {item.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {item.text}
            </p>
          </div>
        ))}

      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-2 lg:items-center">

        <div>
          <Eyebrow>Principes de collaboration</Eyebrow>

          <h2 className="mt-4 text-3xl font-black text-blue-950">
            Des responsabilités définies avant l’action
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Une coopération solide commence par une compréhension commune du
            problème à résoudre, des résultats recherchés et des capacités
            réellement disponibles. Les rôles, contributions, mécanismes de
            décision et obligations de rapportage doivent être explicités dès
            la préparation du partenariat.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Cette approche permet de limiter les malentendus, de mieux gérer
            les risques et de construire une relation fondée sur la confiance
            et la redevabilité.
          </p>
        </div>

        <div className="rounded-[2rem] bg-blue-950 p-8 text-white sm:p-10">

          <div className="space-y-6">

            {[
              ["01", "Objectifs partagés",
               "Définir clairement le problème, les bénéficiaires et les résultats attendus."],

              ["02", "Complémentarité",
               "Identifier ce que chaque partenaire apporte réellement au projet."],

              ["03", "Responsabilités",
               "Formaliser les rôles, décisions, ressources et obligations de chacun."],

              ["04", "Transparence",
               "Partager les informations nécessaires au pilotage et au contrôle."],

              ["05", "Apprentissage",
               "Documenter les résultats, difficultés et enseignements de la collaboration."]
            ].map(([n,title,text])=>(
              <div key={n} className="flex gap-4">

                <div className="text-2xl font-black text-orange-400">
                  {n}
                </div>

                <div>
                  <div className="font-black">
                    {title}
                  </div>

                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    {text}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      <div className="mt-20">

        <SectionTitle
          eyebrow="Valeur ajoutée"
          title="Ce que PRODDEKO-Belgique apporte à une alliance"
          text="Notre contribution se situe à l’interface entre développement territorial, ingénierie de projets, mobilisation de partenaires et accompagnement des acteurs locaux."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
            <Globe2 className="h-9 w-9 text-orange-500" />

            <h3 className="mt-5 text-2xl font-black text-blue-950">
              Ancrage Belgique – RDC
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Une capacité à relier acteurs, compétences et opportunités entre
              la Belgique et la République démocratique du Congo, tout en
              privilégiant l’appropriation locale des interventions.
            </p>
          </div>

          <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
            <BriefcaseBusiness className="h-9 w-9 text-orange-500" />

            <h3 className="mt-5 text-2xl font-black text-blue-950">
              Ingénierie de projets
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Diagnostic, structuration d’interventions, recherche de
              partenaires, budgétisation, préparation de dossiers et
              organisation du suivi des projets.
            </p>
          </div>

          <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
            <Users className="h-9 w-9 text-orange-500" />

            <h3 className="mt-5 text-2xl font-black text-blue-950">
              Approche participative
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Association des bénéficiaires, organisations locales et parties
              prenantes à l’identification des besoins et à la construction
              des solutions.
            </p>
          </div>

          <div className="rounded-[2rem] border bg-white p-8 shadow-sm">
            <ShieldCheck className="h-9 w-9 text-orange-500" />

            <h3 className="mt-5 text-2xl font-black text-blue-950">
              Recherche de redevabilité
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Documentation des engagements, suivi des résultats et
              renforcement progressif des mécanismes de transparence,
              d’intégrité et de gestion des risques.
            </p>
          </div>

        </div>

      </div>

      <div className="mt-20 rounded-[2rem] bg-slate-50 p-8 sm:p-10">

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

          <div>
            <Eyebrow>Cycle de partenariat</Eyebrow>

            <h2 className="mt-4 text-3xl font-black text-blue-950">
              De la première rencontre à l’évaluation commune
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Nous privilégions une construction progressive des alliances
              afin de vérifier la cohérence stratégique, les capacités
              disponibles et la faisabilité de la collaboration.
            </p>
          </div>

          <div className="space-y-4">

            {[
              ["1", "Prise de contact",
               "Comprendre l’organisation, le besoin et l’opportunité de coopération."],

              ["2", "Analyse de complémentarité",
               "Vérifier les objectifs communs, compétences et responsabilités potentielles."],

              ["3", "Co-construction",
               "Définir l’intervention, les résultats, ressources, risques et modalités de gouvernance."],

              ["4", "Formalisation",
               "Préciser les engagements et, lorsque nécessaire, les contractualiser."],

              ["5", "Mise en œuvre & suivi",
               "Piloter les activités, documenter les résultats et traiter les difficultés."],

              ["6", "Évaluation & capitalisation",
               "Analyser la collaboration et décider des suites à lui donner."]
            ].map(([n,title,text])=>(
              <div
                key={n}
                className="flex gap-5 rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-black text-orange-600">
                  {n}
                </div>

                <div>
                  <div className="font-black text-blue-950">
                    {title}
                  </div>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {text}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

      <div className="mt-14 rounded-[2rem] bg-blue-950 p-8 text-white sm:p-10">

        <div className="max-w-4xl">

          <Eyebrow>Construisons ensemble</Eyebrow>

          <h2 className="mt-4 text-3xl font-black">
            Vous souhaitez développer un partenariat ?
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            Coopération technique, financement, recherche, formation,
            innovation, accompagnement institutionnel ou mise en réseau :
            nous sommes ouverts aux collaborations cohérentes avec nos
            programmes et capables de produire une valeur concrète pour
            les territoires concernés.
          </p>

          <button
            onClick={()=>go("contact")}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-black text-white transition hover:bg-orange-600"
          >
            Proposer une collaboration
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>

      </div>

    </Wrap>
  </section>
</>}
    {page==="contact" && <>
  <PageHero
    eyebrow="Contact"
    title="Parlons de votre projet ou d’un partenariat"
    text="Vous représentez une institution, une association, une entreprise, un bailleur, une université ou une communauté ? Contactez PRODDEKO-Belgique pour une demande institutionnelle, une proposition de collaboration ou une information sur nos programmes."
  />

  <section className="py-20">
    <Wrap>

      <SectionTitle
        eyebrow="Nous contacter"
        title="Un premier échange pour identifier les possibilités de collaboration"
        text="Afin de faciliter le traitement de votre demande, indiquez votre organisation, l’objet de votre message, le territoire concerné et, lorsqu’il s’agit d’un projet, son niveau actuel de préparation."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_.95fr]">

        <div className="rounded-[2rem] border bg-white p-8 shadow-sm sm:p-10">

          <ContactLine
            icon={Mail}
            title="E-mail institutionnel"
            text="admin@proddeko.online"
            href="mailto:admin@proddeko.online"
          />

          <ContactLine
            icon={Phone}
            title="Téléphone"
            text="+32 492 70 45 04"
            href="tel:+32492704504"
          />

          <ContactLine
            icon={MessageCircle}
            title="WhatsApp"
            text="+32 488 84 46 98"
            href="https://wa.me/32488844698"
            external
          />

          <ContactLine
            icon={Globe2}
            title="Site internet"
            text="proddeko.online"
            href="https://proddeko.online"
            external
          />

          <ContactLine
            icon={MapPin}
            title="Siège social"
            text="Rue Prince Albert 8/1, 4840 Welkenraedt · Belgique"
          />

          <ContactLine
            icon={Globe2}
            title="Territoires d’intervention"
            text="Belgique · République démocratique du Congo"
          />

        </div>

        <div className="rounded-[2rem] bg-blue-950 p-8 text-white sm:p-10">

          <ShieldCheck className="h-11 w-11 text-orange-400" />

          <h2 className="mt-6 text-3xl font-black">
            Une coopération responsable
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            Les propositions de partenariat sont examinées au regard de leur
            cohérence avec notre mission, de leur faisabilité, de la valeur
            ajoutée de chaque partenaire et de leur impact potentiel pour les
            populations et territoires concernés.
          </p>

          <div className="mt-8 border-t border-white/15 pt-7">

            <div className="font-black">
              Pour une demande de partenariat, précisez si possible :
            </div>

            <div className="mt-5 space-y-3 text-slate-300">
              <p>• votre organisation et vos coordonnées ;</p>
              <p>• le territoire ou public concerné ;</p>
              <p>• le problème ou besoin identifié ;</p>
              <p>• le type de collaboration envisagé ;</p>
              <p>• le calendrier indicatif ;</p>
              <p>• les ressources ou compétences déjà disponibles.</p>
            </div>

          </div>

          <a
            href="mailto:admin@proddeko.online?subject=Proposition%20de%20partenariat"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-black text-white transition hover:bg-orange-600"
          >
            Envoyer une proposition
            <ChevronRight className="h-5 w-5" />
          </a>

        </div>

      </div>

      <div className="mt-20">

        <SectionTitle
          eyebrow="Orienter votre demande"
          title="Quel est l’objet de votre prise de contact ?"
          text="Une demande bien identifiée nous permet de l’orienter plus rapidement."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-[2rem] border bg-white p-7 shadow-sm">
            <Handshake className="h-8 w-8 text-orange-500" />
            <h3 className="mt-5 text-xl font-black text-blue-950">
              Partenariat
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Co-construction de projet, consortium, expertise ou coopération
              institutionnelle.
            </p>
          </div>

          <div className="rounded-[2rem] border bg-white p-7 shadow-sm">
            <BriefcaseBusiness className="h-8 w-8 text-orange-500" />
            <h3 className="mt-5 text-xl font-black text-blue-950">
              Projet
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Proposition, information ou échange concernant l’un de nos
              programmes ou projets.
            </p>
          </div>

          <div className="rounded-[2rem] border bg-white p-7 shadow-sm">
            <Users className="h-8 w-8 text-orange-500" />
            <h3 className="mt-5 text-xl font-black text-blue-950">
              Expertise
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Offre de compétences, collaboration technique, recherche,
              formation ou accompagnement.
            </p>
          </div>

          <div className="rounded-[2rem] border bg-white p-7 shadow-sm">
            <Mail className="h-8 w-8 text-orange-500" />
            <h3 className="mt-5 text-xl font-black text-blue-950">
              Demande institutionnelle
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Documents, renseignements administratifs, communication ou
              demande officielle.
            </p>
          </div>

        </div>

      </div>

      <div className="mt-20 rounded-[2rem] bg-slate-50 p-8 sm:p-10">

        <div className="grid gap-10 lg:grid-cols-2">

          <div>
            <Eyebrow>Informations institutionnelles</Eyebrow>

            <h2 className="mt-4 text-3xl font-black text-blue-950">
              Identifier clairement notre organisation
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Ces informations permettent aux partenaires et interlocuteurs
              institutionnels d’identifier l’association dans leurs échanges
              et documents administratifs.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm">

            <div className="space-y-5">

              <div>
                <div className="text-sm font-bold text-slate-500">
                  Organisation
                </div>
                <div className="mt-1 font-black text-blue-950">
                  PRODDEKO-Belgique
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="text-sm font-bold text-slate-500">
                  Positionnement
                </div>
                <div className="mt-1 font-black text-blue-950">
                  Triple Sustain Impact
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="text-sm font-bold text-slate-500">
                  Forme juridique
                </div>
                <div className="mt-1 font-black text-blue-950">
                  Association sans but lucratif (ASBL)
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="text-sm font-bold text-slate-500">
                  Numéro BCE
                </div>
                <div className="mt-1 font-black text-blue-950">
                  0459.354.980
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="text-sm font-bold text-slate-500">
                  Siège social
                </div>
                <div className="mt-1 font-black text-blue-950">
                  Rue Prince Albert 8/1 · 4840 Welkenraedt · Belgique
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="mt-14 rounded-[2rem] bg-blue-950 p-8 text-white sm:p-10">

        <div className="max-w-4xl">

          <Eyebrow>Premier contact</Eyebrow>

          <h2 className="mt-4 text-3xl font-black">
            Une idée de collaboration ?
          </h2>

          <p className="mt-5 leading-8 text-slate-200">
            Présentez-nous brièvement votre organisation, le besoin identifié
            et la collaboration envisagée. Un premier échange permettra
            d’évaluer les complémentarités et les prochaines étapes possibles.
          </p>

          <a
            href="mailto:admin@proddeko.online?subject=Premier%20contact%20PRODDEKO"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-black text-white transition hover:bg-orange-600"
          >
            Contacter PRODDEKO-Belgique
            <Mail className="h-5 w-5" />
          </a>

        </div>

      </div>

    </Wrap>
  </section>
</>}
    <footer className="border-t bg-slate-950 py-12 text-slate-300">
  <Wrap className="grid gap-8 md:grid-cols-[1fr_auto]">
    <div>
      <div className="text-xl font-black text-white">
        PRODDEKO-Belgique · Triple Sustain Impact
      </div>

      <p className="mt-3 max-w-2xl">
        Agir durablement. Innover ensemble. Transformer les territoires.
      </p>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a
      href="/mentions-legales.html"
          className="transition hover:text-white"
        >
          Mentions légales
        </a>

        <a
          href="/politique-confidentialite.html"
          className="transition hover:text-white"
        >
          Politique de confidentialité
        </a>
      </div>
    </div>

    <div className="text-sm md:text-right">
      © 2026 PRODDEKO-Belgique
      <br />
      ASBL · BCE 0459.354.980
      <br />
      Solidarité · Innovation · Durabilité
    </div>
  </Wrap>
</footer>
  </Shell>
}

function PageHero({eyebrow,title,text}){return <section className="bg-blue-950 py-20 text-white"><Wrap><div className="max-w-4xl"><Eyebrow>{eyebrow}</Eyebrow><h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-xl leading-9 text-slate-200">{text}</p></div></Wrap></section>}
function HeroCard({icon:Icon,title,text}){return <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"><Icon className="h-8 w-8 text-orange-400"/><div className="mt-4 text-xl font-black">{title}</div><p className="mt-2 text-slate-300">{text}</p></div>}
function TextBlock({title,children}){return <div className="rounded-[2rem] border bg-white p-8 shadow-sm"><h3 className="text-2xl font-black text-blue-950">{title}</h3><p className="mt-4 text-lg leading-8 text-slate-600">{children}</p></div>}
function ProgramCard({icon:Icon,title,text}){return <div className="rounded-[2rem] border bg-white p-8 shadow-sm"><div className="inline-flex rounded-2xl bg-orange-100 p-4 text-orange-600"><Icon/></div><h3 className="mt-6 text-2xl font-black text-blue-950">{title}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></div>}
function ProjectCard({status,title,place,text}){return <article className="rounded-[2rem] border bg-white p-8 shadow-sm"><span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black uppercase tracking-wider text-orange-700">{status}</span><h3 className="mt-5 text-2xl font-black text-blue-950">{title}</h3><div className="mt-3 flex items-center gap-2 text-sm font-bold text-slate-500"><MapPin size={16}/>{place}</div><p className="mt-5 leading-7 text-slate-600">{text}</p></article>}
function Impact({icon:Icon,title,text}){return <div className="rounded-[2rem] border bg-white p-8 shadow-sm"><Icon className="h-9 w-9 text-orange-500"/><h3 className="mt-5 text-2xl font-black text-blue-950">Impact {title.toLowerCase()}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></div>}
function Govern({title,text}){return <div className="rounded-[2rem] border bg-white p-8 shadow-sm"><div className="flex items-start gap-4"><CheckCircle2 className="mt-1 shrink-0 text-green-600"/><div><h3 className="text-2xl font-black text-blue-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></div></div></div>}
function ContactLine({icon:Icon,title,text,href,external=false}){const content=<><div className="rounded-2xl bg-orange-100 p-3 text-orange-600"><Icon/></div><div><div className="font-black text-blue-950">{title}</div><div className="mt-1 text-slate-600">{text}</div></div></>;return href?<a href={href} target={external?"_blank":undefined} rel={external?"noreferrer":undefined} className="flex gap-4 border-b border-slate-100 py-5 transition hover:opacity-80 last:border-0">{content}</a>:<div className="flex gap-4 border-b border-slate-100 py-5 last:border-0">{content}</div>}
function ProjectsPreview({go}){return <section className="bg-white py-20"><Wrap><SectionTitle eyebrow="Projets prioritaires" title="Des interventions concrètes, avec un statut clairement identifié" text="Découvrez les initiatives en cours, pilotes et en développement."/><div className="mt-10 grid gap-6 md:grid-cols-2">{projects.slice(0,2).map(p=><ProjectCard key={p.title} {...p}/>)}</div><button onClick={()=>go("projets")} className="mt-8 inline-flex items-center gap-2 font-black text-blue-950">Voir tous les projets <ArrowRight size={18}/></button></Wrap></section>}
