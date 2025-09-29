"use client";
import { useState, useEffect } from "react";
import { useGlobal } from "../context/GlobalContext";
import Footer from "../components/Footer";

export default function Accueil() {
  const { 
    oeuvres, 
    artisans, 
    evenements, 
    categoriesWithCounts,
    addToFavoris, 
    removeFromFavoris, 
    isFavorite,
    loading 
  } = useGlobal();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // -------- Données exemples (fallback) --------
  const derniersAjouts = [
    { id: 101, titre: "Caftan Royal", region: "Fès", description: "Caftan brodé à la main avec d'or", author: "Maison Bennis", image: "/assets/img2.jpg", categorie: "Habits" },
    { id: 102, titre: "Tagine aux Légumes", region: "Casablanca", description: "Plat traditionnel cuit dans un tagine", author: "Chef Moha", image: "/assets/img3.jpg", categorie: "Gastronomie" },
    { id: 103, titre: "Danse Ahidous", region: "Atlas", description: "Danse traditionnelle berbère", author: "Ahidous d'Azrou", image: "/assets/img4.jpg", categorie: "Musique & Danse" },
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

  // Récupérer les catégories uniques pour le filtre
  const uniqueCategories = [...new Set(combinedOeuvres.map(item => item.categorie).filter(Boolean))];

  // -------- Filtrage des œuvres --------
  const filteredOeuvres = combinedOeuvres.filter(item => {
    const q = searchTerm.trim().toLowerCase();
    const fields = [item.titre, item.description, item.region, item.categorie || ""];
    const matchesSearch = q === "" || fields.some(f => f && f.toLowerCase().includes(q));
    const matchesCategory = selectedCategory === "" || (item.categorie && item.categorie.toLowerCase() === selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // -------- Gestion des favoris --------
  const handleFavoriteToggle = async (item) => {
    try {
      if (isFavorite(item.id)) {
        await removeFromFavoris(item.id);
      } else {
        await addToFavoris(item);
      }
    } catch (err) {
      alert("Erreur lors de la modification des favoris");
    }
  };

  if (loading) {
    return (
      <div className="bg-[#fff7f5] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-[#D30046]">Chargement...</div>
          <div className="text-gray-600">Veuillez patienter</div>
        </div>
      </div>
    );
  }

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
          {uniqueCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
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
                <p className="text-sm text-gray-500">📍 {item.region}</p>
                <p className="text-xs text-gray-500">Par {item.author}</p>
                {item.categorie && (
                  <span className="inline-block bg-[#D30046] text-white text-xs px-2 py-1 rounded-full mt-2">
                    {item.categorie}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Catégories avec compteur dynamique */}
      <section className="px-6 max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4">Catégories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categoriesWithCounts.map(cat => (
            <div key={cat.id || cat.name} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
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
              <p className="text-sm text-gray-600">{e.location}</p>
              <p className="text-sm text-gray-700 mt-2">{e.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}