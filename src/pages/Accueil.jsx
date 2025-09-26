import React from "react";
import Footer from "../components/Footer";
import { useGlobal } from "../context/GlobalContext";

export default function Accueil() {
  const { favoris, addToFavoris, removeFromFavoris, isFavorite } = useGlobal();

  // Fonction pour basculer un favori
  const handleFavoriteToggle = (item) => {
    if (isFavorite(item.id)) {
      removeFromFavoris(item.id);
    } else {
      addToFavoris(item);
    }
  };

  // Données des derniers ajouts
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

  return (
    <div className="bg-[#fff7f5] min-h-screen text-gray-800">
      {/* -------- HEADER -------- */}
      <header className="text-center py-8">
        <h1 className="text-3xl font-bold">
          Art<span className="text-red-600">Connect</span>{" "}
          <span className="text-green-600">Maroc</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Explorez les œuvres, les artisans et la culture de toutes les régions du Maroc
        </p>
        <button className="mt-5 bg-pink-600 text-white px-6 py-2 rounded-md ">
          Publier une œuvre
        </button>
      </header>

      {/* -------- BARRE DE RECHERCHE -------- */}
      <section className="bg-white max-w-4xl mx-auto rounded-xl shadow-sm p-6 mb-10">
        <h2 className="text-center text-lg font-medium mb-4">
          Découvrez le patrimoine marocain
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center border rounded-md px-3 py-2 flex-1 min-w-[180px]">
            🔍
            <input
              type="text"
              placeholder="Rechercher par mot-clé ..."
              className="flex-1 outline-none ml-2 "
            />
          </div>
          <select className="border rounded-md px-3 py-2 min-w-[140px]">
            <option>Catégorie</option>
            <option>Artisanat</option>
            <option>Gastronomie</option>
            <option>Habits</option>
          </select>
          <button className="bg-pink-600 text-white px-5 py-2 rounded-md ">
            Rechercher
          </button>
          <button className="bg-gray-100 px-5 py-2 rounded-md hover:bg-gray-200">
            Réinitialiser
          </button>
        </div>
      </section>

      {/* -------- DERNIERS AJOUTS -------- */}
      <section className="bg-[#fff6f4] py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6 ml-28">
            <span className="text-pink-500 text-xl">💎</span>
            <h2 className="text-2xl font-bold">Derniers ajouts</h2>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {derniersAjouts.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md w-72 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    className={`absolute top-2 right-2 p-2 rounded-full shadow transition-colors ${
                      isFavorite(item.id)
                        ? "bg-red-600 text-white"
                        : "bg-white text-gray-400 hover:text-red-600 hover:bg-gray-100"
                    }`}
                    onClick={() => handleFavoriteToggle(item)}
                  >
                    ❤️
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    📍 {item.location}
                  </p>
                  <p className="text-gray-700 text-sm mt-1">{item.description}</p>
                  <p className="text-xs text-gray-500 mt-2">Par {item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- CATEGORIES -------- */}
      <section className="px-4 max-w-6xl mx-auto mb-10">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 ml-28">
          <span className="text-green-600">✿</span> Catégories
        </h3>
        <div className="flex flex-wrap gap-3 justify-center ">
          <span className="px-10 py-5 bg-white shadow rounded-lg font-bold text-gray-700">
            Artisanat
            <p className="font-normal mt-1">1 oeuvre</p>
          </span>
          <span className="px-10 py-5 bg-white shadow rounded-lg font-bold text-gray-700">
            Gastronomie
            <p className="font-normal mt-1">1 oeuvre</p>
          </span>
          <span className="px-10 py-5 bg-white shadow rounded-lg font-bold text-gray-700">
            Habits
            <p className="font-normal mt-1">1 oeuvre</p>
          </span>
          <span className="px-10 py-5 bg-white shadow rounded-lg font-bold text-gray-700">
            Architecture
            <p className="font-normal mt-1">1 oeuvre</p>
          </span>
          <span className="px-10 py-5 bg-white shadow rounded-lg font-bold text-gray-700">
            Musique & Danse
            <p className="font-normal mt-1">1 oeuvre</p>
          </span>
        </div>
      </section>

      {/* -------- EVENEMENTS -------- */}
      <section className="px-4 max-w-6xl mx-auto mb-10">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 ml-28">
          <span className="text-pink-600">🎉</span> Événements à venir
        </h3>
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Carte événement 1 */}
          <div className="flex flex-col w-64 bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
              src="/assets/img5.jpg"
              alt=""
              className="rounded-xl mb-3 h-36 object-cover"
            />
            <h4 className="font-semibold">Festival Gnaoua</h4>
            <p className="text-sm text-gray-500 mt-1">Essaouira / Juin 2025</p>
            <p className="text-sm text-gray-600 mt-2">
              Festival de musique et spectacles traditionnels
            </p>
          </div>
          {/* Carte événement 2 */}
          <div className="flex flex-col w-64 bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
              src="/assets/img6.jpg"
              alt=""
              className="rounded-xl mb-3 h-36 object-cover"
            />
            <h4 className="font-semibold">Exposition d'art contemporain</h4>
            <p className="text-sm text-gray-500 mt-1">Rabat / Août 2025</p>
            <p className="text-sm text-gray-600 mt-2">
              Œuvres d'artistes marocains émergents
            </p>
          </div>
          {/* Carte événement 3 */}
          <div className="flex flex-col w-64 bg-white rounded-xl shadow hover:shadow-lg transition p-4">
            <img
              src="/assets/img7.jpg"
              alt=""
              className="rounded-xl mb-3 h-36 object-cover"
            />
            <h4 className="font-semibold">Salon International du Livre</h4>
            <p className="text-sm text-gray-500 mt-1">Casablanca / Juillet 2025</p>
            <p className="text-sm text-gray-600 mt-2">Grand salon dédié à la littérature</p>
          </div>
        </div>
      </section>

      {/* -------- ARTISANS -------- */}
      <section className="max-w-6xl mx-auto mb-10">
        <h3 className="flex items-center text-lg font-semibold mb-4 ml-28">
          <span className="text-yellow-600 mr-2">⭐</span> Artisan du mois
        </h3>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="bg-white rounded-xl shadow-sm p-4 w-72 text-center">
            <img
              src="/assets/img8.jpg"
              alt="Konza Benani"
              className="w-30 h-30  mx-auto mb-3 object-cover"
            />
            <h4 className="font-medium">Konza Benani</h4>
            <p className="text-sm text-gray-500 mt-2">Créatrice et artisane de bijoux</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 w-72 text-center">
            <img
              src="/assets/img9.jpg"
              alt="Abdelhamid Karim"
              className="w-30 h-30  mx-auto mb-3 object-cover"
            />
            <h4 className="font-medium">Abdelhamid Karim</h4>
            <p className="text-sm text-gray-500 mt-2">Designer & Artisan</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4 w-72 text-center">
            <img
              src="/assets/img10.jpg"
              alt="Hassan Helqi"
              className="w-30 h-30  mx-auto mb-3 object-cover"
            />
            <h4 className="font-medium">Hassan Helqi</h4>
            <p className="text-sm text-gray-500 mt-2">Designer et artisan contemporain</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
