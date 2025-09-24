import React from "react";
import Footer from "../components/Footer";

export default function Apropos() {
  return (
    <div className="bg-[#fff9f7] text-gray-800 font-sans">
      <section className="max-w-4xl mx-auto py-12 px-6">
        {/* Titre */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold mb-2">À propos d'ArtConnect Maroc</h1>
          <p className="text-gray-600">
            Préserver et célébrer l'art et la culture marocaine
          </p>
        </div>

        {/* Notre mission */}
        <div className="bg-white rounded-2xl shadow p-6 mb-10 border">
          <h2 className="text-xl font-semibold text-red-500 mb-3">Notre mission</h2>
          <p>
            ArtConnect Maroc a pour objectif de promouvoir et préserver l'art et
            la culture marocaine. Nous connectons artistes, artisans et
            passionnés de culture à travers le royaume pour partager et célébrer
            la richesse du patrimoine marocain.
          </p>
        </div>

        {/* Ce que vous pouvez faire */}
        <div className="bg-white rounded-2xl shadow p-6 mb-10 border">
          <h2 className="text-xl font-semibold text-red-500 mb-6">
            Ce que vous pouvez faire
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-red-500 mb-2">
                Explorer les créations
              </h3>
              <p>
                Découvrez peintures, artisanat, architecture, gastronomie et
                habits traditionnels par région ou style.
              </p>
            </div>
            <div className="p-4 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-orange-500 mb-2">
                Participer aux événements
              </h3>
              <p>
                Suivez et participez à des événements culturels pour vivre l'art
                marocain en direct.
              </p>
            </div>
            <div className="p-4 border rounded-xl hover:shadow-md transition">
              <h3 className="font-semibold text-yellow-500 mb-2">
                Sauvegarder vos favoris
              </h3>
              <p>
                Ajoutez vos œuvres et traditions préférées à vos favoris pour
                les retrouver facilement.
              </p>
            </div>
          </div>
        </div>

        {/* Notre histoire */}
        <div className="bg-white rounded-2xl shadow p-6 mb-10 border">
          <h2 className="text-xl font-semibold text-red-500 mb-3">
            Notre histoire
          </h2>
          <p className="mb-2">
            Depuis sa création en 2025, ArtConnect Maroc a recensé plus de{" "}
            <span className="text-red-500 font-semibold">
              200 traditions et œuvres
            </span>{" "}
            à travers le pays.
          </p>
          <p>
            La plateforme vise à mettre en lumière les talents locaux et à
            transmettre le savoir-faire marocain aux nouvelles générations.
          </p>
        </div>

        {/* Nos valeurs */}
        <div>
          <h2 className="text-xl font-semibold text-red-500 mb-6">Nos valeurs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-100 p-6 rounded-2xl text-center">
              <h3 className="font-semibold text-red-500 mb-2">
                Explorer les créations
              </h3>
              <p>Respecter et valoriser l'héritage culturel marocain.</p>
            </div>

            <div className="bg-orange-100 p-6 rounded-2xl text-center">
              <h3 className="font-semibold text-orange-500 mb-2">Innovation</h3>
              <p>Encourager de nouvelles créations et formes artistiques.</p>
            </div>

            <div className="bg-yellow-100 p-6 rounded-2xl text-center">
              <h3 className="font-semibold text-yellow-500 mb-2">Communauté</h3>
              <p>
                Créer un espace où artistes et amateurs partagent leurs passions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>

    );
};