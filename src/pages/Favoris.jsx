import React, { useState } from "react";
import FavorisListe from "../components/FavorisListe";

export default function Favoris() {
  const [favoris, setFavoris] = useState([
    {
      id: 1,
      title: "Port en céramique de Safi",
      category: "Céramique",
      image: "https://cdn.pixabay.com/photo/2023/04/21/12/06/teapot-7941793_1280.jpg",
    },
    {
      id: 2,
      title: "Babouches Fès",
      category: "Artisanat",
      image: "https://cdn.pixabay.com/photo/2018/05/27/10/47/morocco-3433248_1280.jpg",
    },
    {
      id: 3,
      title: "Plafond Zellige",
      category: "Zellige",
      image: "https://cdn.pixabay.com/photo/2024/12/02/16/21/arabian-9240332_1280.png",
    },
    {
      id: 4,
      title: "Babouches Fès1111",
      category: "Artisanat",
      image: "https://cdn.pixabay.com/photo/2018/05/27/10/47/morocco-3433248_1280.jpg",
    },
    {
      id: 5,
      title: "Plafond Zellige2222",
      category: "Zellige",
      image: "https://cdn.pixabay.com/photo/2024/12/02/16/21/arabian-9240332_1280.png",
    },
  ]);

  // Fct de suppression de favori
  const handleRemove = (id) => {
    setFavoris(favoris.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fff7f3" }}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vos favoris</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Retrouvez toutes vos œuvres préférées du patrimoine marocain ici
          </p>
        </div>

        <FavorisListe favoris={favoris} onRemove={handleRemove} />
      </main>
    </div>
  );
}