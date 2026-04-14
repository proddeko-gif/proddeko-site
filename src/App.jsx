import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  const stats = [
    { value: "200 000+", label: "bénéficiaires" },
    { value: "10+", label: "zones d’action" },
    { value: "8+", label: "partenaires" },
    { value: "6", label: "universités" },
  ];

  const renderHome = () => (
    <>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>
          PRODDEKO-Belgique
        </h1>
        <p style={styles.subtitle}>
          Développement durable • Gouvernance éthique • Solidarité internationale
        </p>

        <div style={{ marginTop: 20 }}>
          <button onClick={() => setPage("projects")} style={styles.button}>
            Voir nos projets
          </button>
          <button onClick={() => setPage("don")} style={styles.buttonOutline}>
            Faire un don
          </button>
        </div>
      </section>

      {/* STATS */}
      <section style={styles.section}>
        <div style={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} style={styles.card}>
              <h2>{s.value}</h2>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={styles.section}>
        <h2>Qui sommes-nous</h2>
        <p>
          PRODDEKO-Belgique est une organisation de solidarité internationale
          active entre la Belgique et la RDC. Elle promeut un développement
          durable, inclusif et participatif fondé sur la justice sociale et la
          gouvernance éthique.
        </p>
      </section>

      {/* ACTIONS */}
      <section style={styles.section}>
        <h2>Nos actions</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Développement durable</h3>
            <p>Renforcement communautaire et transition écologique.</p>
          </div>
          <div style={styles.card}>
            <h3>Éducation citoyenne</h3>
            <p>Formation et engagement des citoyens.</p>
          </div>
          <div style={styles.card}>
            <h3>Gouvernance éthique</h3>
            <p>Transparence et redevabilité.</p>
          </div>
          <div style={styles.card}>
            <h3>Solidarité internationale</h3>
            <p>Co-développement Belgique–RDC.</p>
          </div>
        </div>
      </section>
    </>
  );

  const renderProjects = () => (
    <section style={styles.section}>
      <h2>Projets</h2>
      <p>Programmes en gouvernance, éducation et développement durable.</p>
    </section>
  );

  const renderDon = () => (
    <section style={styles.section}>
      <h2>Faire un don</h2>

      <div style={styles.card}>
        <p><strong>IBAN :</strong> BE52 0341 7896 9409</p>
        <p><strong>BIC :</strong> GEBABEBB</p>
        <p><strong>Nom :</strong> PRODDEKO PROGRAMMES DE DEVELOPPEMENT DURABLE</p>
      </div>

      <div style={{ marginTop: 20 }}>
        <a
          href="mailto:admin@proddeko.online"
          style={styles.button}
        >
          Confirmer mon don
        </a>
      </div>
    </section>
  );

  return (
    <div>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <button onClick={() => setPage("home")}>Accueil</button>
        <button onClick={() => setPage("projects")}>Projets</button>
        <button onClick={() => setPage("don")}>Don</button>
      </nav>

      {/* ROUTER */}
      {page === "home" && renderHome()}
      {page === "projects" && renderProjects()}
      {page === "don" && renderDon()}

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>PRODDEKO-Belgique</p>
        <p>admin@proddeko.online</p>
      </footer>
    </div>
  );
}

/* STYLES SIMPLES */
const styles = {
  nav: {
    display: "flex",
    gap: 10,
    padding: 20,
    background: "#eee",
  },
  hero: {
    padding: 60,
    textAlign: "center",
    background: "#0f172a",
    color: "white",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 10,
  },
  section: {
    padding: 40,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
    gap: 20,
  },
  card: {
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 10,
  },
  button: {
    marginRight: 10,
    padding: "10px 20px",
    background: "orange",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
  buttonOutline: {
    padding: "10px 20px",
    border: "1px solid orange",
    background: "transparent",
    color: "orange",
    cursor: "pointer",
  },
  footer: {
    padding: 20,
    textAlign: "center",
    background: "#f5f5f5",
  },
};
