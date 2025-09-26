import React from "react";
import FavorisListe from "../components/FavorisListe";
import { useGlobal } from "../context/GlobalContext";

export default function Favoris() {
  const { favoris, removeFromFavoris } = useGlobal();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fff7f3" }}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vos favoris</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Retrouvez toutes vos œuvres préférées du patrimoine marocain ici
          </p>
        </div>

        <FavorisListe favoris={favoris} onRemove={removeFromFavoris} />
      </main>
    </div>
  );
}
