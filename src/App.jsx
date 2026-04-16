import React, { useState } from "react";

const SITE = {
  name: "PRODDEKO-Belgique",
};

function KilengiProjectSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <h2 className="text-3xl font-black text-blue-950 mb-10">
          Projet : Centre de Santé de Référence de Kilengi
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">

          {/* CONTENU PRINCIPAL */}
          <div className="space-y-6">

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <p className="text-slate-600">
                Réhabilitation d’un système solaire installé en 2019.
                Aujourd’hui, les 20 batteries sont hors d’usage.
                Le projet vise la remise en service complète avec une solution durable.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="font-bold text-blue-950 mb-3">Contexte</h3>
              <p className="text-slate-600">
                Le système assurait l’alimentation des services essentiels :
                accueil, médecine, éclairage et équipements prioritaires.
                Après plusieurs années, le parc batteries est en fin de vie.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="font-bold text-blue-950 mb-3">
                Schéma électrique du système
              </h3>

              <p className="text-slate-600 mb-4">
                Architecture recommandée : panneaux solaires, régulateur MPPT,
                onduleur hybride, protections AC/DC et batteries lithium.
              </p>

              <img
                src="/schema-kilengi.png"
                alt="Schéma électrique Kilengi"
                className="w-full rounded-2xl border"
              />

              <p className="text-sm text-slate-500 mt-3">
                Schéma de principe du système solaire hybride recommandé.
              </p>
            </div>

          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="font-bold text-blue-950 mb-3">
                Éléments principaux
              </h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Panneaux solaires ~3 kWc</li>
                <li>• Régulateur MPPT</li>
                <li>• Onduleur hybride 5 kVA</li>
                <li>• Batteries lithium ~20 kWh</li>
                <li>• Protections AC/DC</li>
              </ul>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="font-bold text-blue-950 mb-3">
                Demande actuelle
              </h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Remplacement des batteries</li>
                <li>• Étude solution lithium</li>
                <li>• Remise en service</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-blue-950 to-green-700 p-6 text-white">
              <h3 className="font-bold mb-2">Recommandation</h3>
              <p className="text-sm">
                Opter pour une solution lithium LiFePO4 plus durable
                et sécurisée pour les services de santé.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>

      {/* NAV */}
      <div className="p-4 border-b flex gap-4">
        <button onClick={() => setPage("home")}>Accueil</button>
        <button onClick={() => setPage("projects")}>Projets</button>
      </div>

      {/* HOME */}
      {page === "home" && (
        <div className="p-10">
          <h1 className="text-4xl font-black text-blue-950">
            {SITE.name}
          </h1>
        </div>
      )}

      {/* PROJECTS */}
      {page === "projects" && (
        <>
          <KilengiProjectSection />
        </>
      )}

    </div>
  );
}
