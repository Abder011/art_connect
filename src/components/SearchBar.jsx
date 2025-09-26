import React, { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <section className="bg-white max-w-4xl mx-auto rounded-xl shadow-sm p-6 mb-10">
      <h2 className="text-center text-lg font-medium mb-4">Découvrez le patrimoine marocain</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex items-center border rounded-md px-3 py-2 flex-1 min-w-[180px]">
          🔍
          <input
            type="text"
            placeholder="Rechercher par mot-clé ..."
            className="flex-1 outline-none ml-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="border rounded-md px-3 py-2 min-w-[140px]"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>Catégorie</option>
          <option>Artisanat</option>
          <option>Gastronomie</option>
          <option>Habits</option>
          <option>Architecture</option>
          <option>Musique & Danse</option>
        </select>
        <button className="bg-pink-600 text-white px-5 py-2 rounded-md">Rechercher</button>
        <button className="bg-gray-100 px-5 py-2 rounded-md hover:bg-gray-200">Réinitialiser</button>
      </div>
    </section>
  );
}
