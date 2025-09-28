"use client";
import { useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import Footer from "../components/Footer";

export default function Accueil() {
  const { oeuvres, artisans, evenements, addToFavoris, removeFromFavoris, isFavorite } = useGlobal();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // -------- Données exemples --------
  const derniersAjouts = [
    { id: 101, titre: "Caftan Royal", location: "Fès", description: "Caftan brodé à la main avec d'or", author: "Maison Bennis", image: "/assets/img2.jpg", categorie: "Habits" },
    { id: 102, titre: "Tagine aux Légumes", location: "Casablanca", description: "Plat traditionnel cuit dans un tagine", author: "Chef Moha", image: "/assets/img3.jpg", categorie: "Gastronomie" },
    { id: 103, titre: "Danse Ahidous", location: "Atlas", description: "Danse traditionnelle berbère", author: "Ahidous d'Azrou", image: "/assets/img4.jpg", categorie: "Musique & Danse" },
  ];

  const exempleEvenements = [
    { id:201, title:"Festival Gnaoua", location:"Essaouira / Juin 2025", description:"Concerts, ateliers et expositions autour de la musique gnaoua", image:"/assets/img5.jpg" },
    { id:202, title:"Exposition d'art contemporain", location:"Rabat / Août 2025", description:"Œuvres d'artistes marocains émergents", image:"/assets/img6.jpg" },
    { id:203, title:"Salon International du Livre", location:"Casablanca / Juillet 2025", description:"Rencontres avec des auteurs", image:"/assets/img7.jpg" },
  ];

  const exempleArtisans = [
    { id:301, name:"Kenza Bennani", specialty:"Créatrice et artisane de bijoux", image:"/assets/img8.jpg" },
    { id:302, name:"Abdelhamid Krim", specialty:"Maître artisan du cuir", image:"/assets/img9.jpg" },
    { id:303, name:"Hassan Hajjaj", specialty:"Designer et artisan contemporain", image:"/assets/img10.jpg" },
  ];

  // Combine admin + exemples
  const combinedOeuvres = [...oeuvres, ...derniersAjouts];
  const combinedEvenements = [...evenements, ...exempleEvenements];
  const combinedArtisans = [...artisans, ...exempleArtisans];

  // -------- Filtrage des œuvres --------
  const filteredOeuvres = combinedOeuvres.filter(item => {
    const q = searchTerm.trim().toLowerCase();
    const fields = [item.titre, item.description, item.location, item.categorie || ""];
    const matchesSearch = q === "" || fields.some(f => f && f.toLowerCase().includes(q));
    const matchesCategory = selectedCategory === "" || (item.categorie && item.categorie.toLowerCase() === selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // -------- Comptage des catégories --------
  const categoriesList = ["Artisanat", "Habits", "Gastronomie", "Musique & Danse", "Architecture"];
  const categoryCounts = categoriesList.map(cat => ({
    name: cat,
    count: combinedOeuvres.filter(item => item.categorie === cat).length
  }));

  // -------- Gestion des favoris --------
  const handleFavoriteToggle = (item) => {
    if (isFavorite(item.id)) removeFromFavoris(item.id);
    else addToFavoris(item);
  };

  return (
    <div className="bg-[#fff7f5] min-h-screen text-gray-800">

      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold mb-6">Art<span className="text-[#D30046]">Connect</span> Maroc</h1>
      </header>

      {/* Barre recherche */}
      <section className="bg-white rounded-xl shadow-sm p-6 mb-12 flex flex-wrap justify-center gap-5">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border p-2 rounded-lg min-w-[200px]"
        />
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-lg min-w-[160px]"
        >
          <option value="">Toutes les catégories</option>
          {categoriesList.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </section>

      {/* Derniers ajouts */}
      <section className="px-6 max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Derniers ajouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOeuvres.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow relative">
              <img src={item.image} alt={item.titre} className="w-full h-48 object-cover"/>
              <button
                onClick={() => handleFavoriteToggle(item)}
                className={`absolute top-3 right-3 w-10 h-10 rounded-full shadow-md flex items-center justify-center transition-colors ${
                  isFavorite(item.id) ? "bg-[#D30046] text-white" : "bg-white text-gray-400 hover:text-[#D30046]"
                }`}
              >❤️</button>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.titre}</h3>
                <p className="text-gray-700">{item.description}</p>
                <p className="text-sm text-gray-500">📍 {item.location}</p>
                <p className="text-xs text-gray-500">Par {item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Catégories */}
      <section className="px-6 max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Catégories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categoryCounts.map(cat => (
            <div key={cat.name} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-700 mb-2">{cat.name}</h4>
              <p className="text-sm text-gray-500">{cat.count} œuvre{cat.count > 1 ? "s" : ""}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Artisans */}
      <section className="px-6 max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Artisans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {combinedArtisans.map(a => (
            <div key={a.id} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <img src={a.image} alt={a.name} className="w-full h-40 rounded-xl mx-auto mb-6 object-cover"/>
              <h3 className="font-semibold mb-2">{a.name}</h3>
              <p className="text-sm text-gray-500">{a.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Événements */}
      <section className="px-6 max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Événements à venir</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {combinedEvenements.map(e => (
            <div key={e.id} className="bg-white rounded-xl shadow-md p-4 text-center hover:shadow-lg transition-shadow">
              <img src={e.image} alt={e.title} className="w-full h-36 object-cover rounded-lg mb-2"/>
              <h3 className="font-semibold">{e.title}</h3>
              <p>{e.location}</p>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
