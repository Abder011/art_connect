"use client";

import { useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import Footer from "../components/Footer";

export default function Accueil() {
  const { addToFavoris, removeFromFavoris, isFavorite, oeuvres } = useGlobal();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // -------- Données exemples --------
  const derniersAjouts = [
    {
      id: 1,
      title: "Caftan Royal",
      location: "Fès",
      description: "Caftan brodé à la main avec d'or",
      author: "Maison Bennis",
      image: "/assets/img2.jpg",
      category: "Habits",
    },
    {
      id: 2,
      title: "Tagine aux Légumes",
      location: "Casablanca",
      description: "Plat traditionnel cuit dans un tagine",
      author: "Chef Moha",
      image: "/assets/img3.jpg",
      category: "Gastronomie",
    },
    {
      id: 3,
      title: "Danse Ahidous",
      location: "Atlas",
      description: "Danse traditionnelle berbère",
      author: "Ahidous d'Azrou",
      image: "/assets/img4.jpg",
      category: "Musique & Danse",
    },
  ];

  const evenements = [
    { id: 1, title: "Festival Gnaoua", location: "Essaouira / Juin 2025", description: "Concerts, ateliers et expositions autour de la musique gnaoua", image: "/assets/img5.jpg" },
    { id: 2, title: "Exposition d'art contemporain", location: "Rabat / Août 2025", description: "Œuvres d'artistes marocains émergents", image: "/assets/img6.jpg" },
    { id: 3, title: "Salon International du Livre", location: "Casablanca / Juillet 2025", description: "Rencontres avec des auteurs", image: "/assets/img7.jpg" },
  ];

  const artisans = [
    { id: 1, name: "Kenza Bennani", specialty: "Créatrice et artisane de bijoux", image: "/assets/img8.jpg" },
    { id: 2, name: "Abdelhamid Krim", specialty: "Maître artisan du cuir", image: "/assets/img9.jpg" },
    { id: 3, name: "Hassan Hajjaj", specialty: "Designer et artisan contemporain", image: "/assets/img10.jpg" },
  ];

  const categories = [
    { name: "Artisanat", count: 1 },
    { name: "Gastronomie", count: 1 },
    { name: "Habits", count: 1 },
    { name: "Architecture", count: 1 },
    { name: "Musique & Danse", count: 1 },
  ];

  // Favoris
  const handleFavoriteToggle = (item) => {
    if (isFavorite(item.id)) removeFromFavoris(item.id);
    else addToFavoris(item);
  };

  // Combine oeuvres du contexte (publiées pendant la session) + derniersAjouts (fixes)
  // on met oeuvres (utilisateurs) en premier pour qu'elles apparaissent en tête
  const combinedList = [...oeuvres, ...derniersAjouts];

  // Filtrage automatique (par saisie et par catégorie)
  const q = searchTerm.trim().toLowerCase();
  const filteredCombined = combinedList.filter((item) => {
    const fields = [
      item.title,
      item.description,
      item.location,
      item.category || item.categorie || "",
    ];
    const matchesSearch = q === "" || fields.some((f) => f && f.toLowerCase().includes(q));
    const matchesCategory =
      selectedCategory === "" || (item.category && item.category.toLowerCase() === selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#fff7f5] min-h-screen text-gray-800">
      {/* -------- HEADER -------- */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold mb-6">
          Art<span className="text-[#D30046]">Connect</span> <span className="text-green-600">Maroc</span>
        </h1>
        <p className="text-gray-600 mb-8 text-lg">Explorez les œuvres, les artisans et la culture de toutes les régions du Maroc</p>
      </header>

      {/* -------- BARRE DE RECHERCHE -------- */}
      <section className="bg-white rounded-xl shadow-sm p-6 mb-50 mx-40">
        <h2 className="text-center text-xl font-semibold mb-6">Découvrez le patrimoine marocain</h2>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <div className="flex items-center border rounded-lg px-4 py-3 flex-1 min-w-[200px] bg-gray-50">
            <span className="text-gray-400 mr-3">🔍</span>
            <input type="text" placeholder="Rechercher par mot-clé ..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="flex-1 outline-none bg-transparent" />
          </div>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="border rounded-lg px-4 py-3 min-w-[140px] bg-white">
            <option value="">Catégorie</option>
            <option value="Artisanat">Artisanat</option>
            <option value="Gastronomie">Gastronomie</option>
            <option value="Habits">Habits</option>
            <option value="Architecture">Architecture</option>
            <option value="Musique & Danse">Musique & Danse</option>
          </select>
        </div>
      </section>

      {/* -------- DERNIERS AJOUTS -------- */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">💎</span>
            <h2 className="text-2xl font-bold">Derniers ajouts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCombined.length > 0 ? (
              filteredCombined.map((item) => (
                <div key={`${item.id}-${item.title}`} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                    <button onClick={() => handleFavoriteToggle(item)} className={`absolute top-3 right-3 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors ${isFavorite(item.id) ? "bg-[#D30046] text-white" : "bg-white text-gray-400 hover:text-[#D30046]"}`}>
                      ❤️
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mb-2">📍 {item.location}</p>
                    <p className="text-gray-700 text-sm mb-3">{item.description}</p>
                    <p className="text-xs text-gray-500">Par {item.author}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Aucune œuvre trouvée.</p>
            )}
          </div>
        </div>
      </section>

      {/* -------- CATEGORIES -------- */}
      <section className="px-6 max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl text-green-600">🌸</span>
          <h3 className="text-2xl font-bold">Catégories</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-700 mb-2">{category.name}</h4>
              <p className="text-sm text-gray-500">{category.count} œuvre</p>
            </div>
          ))}
        </div>
      </section>

      {/* -------- EVENEMENTS -------- */}
      <section className="px-6 max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl text-[#D30046]">🎉</span>
          <h3 className="text-2xl font-bold">Événements à venir</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evenements.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={event.image} alt={event.title} className="w-full h-36 object-cover" />
              <div className="p-4">
                <h4 className="font-semibold mb-2">{event.title}</h4>
                <p className="text-sm text-gray-500 mb-2">{event.location}</p>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------- ARTISANS -------- */}
      <section className="px-6 max-w-6xl mx-auto mb-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="text-2xl text-yellow-600">⭐</span>
          <h3 className="text-2xl font-bold">Artisan du mois</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artisans.map((artisan) => (
            <div key={artisan.id} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <img src={artisan.image} alt={artisan.name} className="w-full h-40 rounded-xl mx-auto mb-6 object-cover" />
              <h4 className="font-semibold mb-2">{artisan.name}</h4>
              <p className="text-sm text-gray-500">{artisan.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
