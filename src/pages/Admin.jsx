import React from "react";
import Footer from "../components/Footer";

export default function Admin() {
  return (
<div className="bg-[#fff9f7] min-h-screen flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">
          Tableau de bord <span className="text-green-600">Admin</span>
        </h1>
        <p className="text-gray-600">
          Gestion complète de la plateforme ArtConnect Maroc
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mb-10">
        <button className="px-4 py-2 rounded-lg border border-pink-400  bg-gray-100 hover:bg-pink-600 ">
          Oeuvre
        </button>
        <button className="px-4 py-2 rounded-lg border border-pink-400  bg-gray-100 hover:bg-pink-600">
          Catégorie
        </button>
        <button className="px-4 py-2 rounded-lg border border-pink-400  bg-gray-100 hover:bg-pink-600">
          Artisans
        </button>
        <button className="px-4 py-2 rounded-lg border border-pink-400  bg-gray-100 hover:bg-pink-600">
          Événements
        </button>
      </div>

      {/* Gestion des oeuvres */}
      <div className="bg-white rounded-2xl shadow p-6 border">
        <h1 className="text-lg font-bold text-center mb-10 mt-10">
          Gestion des Oeuvres
        </h1>

        {/* Formulaire */}
              {/* Formulaire */}
           <div className="flex gap-3 mb-6 flex-wrap justify-center items-center">
         <input
         type="text"
          placeholder="Titre"
       className="w-40 border border-pink-400 p-2 rounded-md text-sm shadow-sm focus:outline-pink-500"
                                                       />
              <input
              
        type="text"
        placeholder="Catégorie"
    className="w-40 border border-pink-400 p-2 rounded-md text-sm shadow-sm focus:outline-pink-500"
     />
     <input
    type="text"
    placeholder="Description"
    className="w-40 border border-pink-400 p-2 rounded-md text-sm shadow-sm focus:outline-pink-500"
  />
  <input
    type="text"
    placeholder="Région"
    className="w-40 border border-pink-400 p-2 rounded-md text-sm shadow-sm focus:outline-pink-500"
  />
  <input
    type="text"
    placeholder="Image"
    className="w-40 border border-pink-400 p-2 rounded-md text-sm shadow-sm focus:outline-pink-500"
  />
  <button className="w-40 bg-pink-600 text-white rounded-md py-2 shadow-md shadow-pink-300 hover:bg-pink-700 transition">
    Ajouter
  </button>
</div>


        {/* Liste des oeuvres */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Oeuvre 1 */}
          <div className="border rounded-2xl p-4 shadow-sm bg-white">
            <img
              src="/assets/img1.png"
              alt="Tapis Amazigh"
              className="rounded-lg mb-3 w-full h-40 object-cover"
            />
            <h3 className="font-semibold text-lg">Tapis Amazigh</h3>
            <p className="text-sm text-gray-500">-Tapis</p>
            <p className="text-sm mt-2">
              Un tapis tissé à la main avec des motifs traditionnels berbères.
            </p>
            <div className="flex justify-between mt-4">
              <button className="bg-orange-500 text-white px-4 py-1 rounded-md">
                Modifier
              </button>
              <button className="bg-red-600 text-white px-4 py-1 rounded-md">
                Supprimer
              </button>
            </div>
          </div>

          {/* Oeuvre 2 (formulaire en mode édition) */}
          <div className="border rounded-2xl p-4 shadow-sm bg-white">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                defaultValue="Pot en céramique de Safi"
                className="border p-2 rounded-md text-sm border-pink-400"
              />
              <input
                type="text"
                defaultValue="Céramique"
                className="border p-2 rounded-md text-sm border-pink-400"
              />
              <input
                type="text"
                defaultValue="Une pièce en céramique colorée provenant des ateliers"
                className="border p-2 rounded-md text-sm border-pink-400"
              />
              <input
                type="text"
                defaultValue="https://th.bing.com/th/id/OIP.1J4DBBiBM0OCxC48LBaxQHaHv?w=179&h=180"
                className="border p-2 rounded-md text-sm border-pink-400"
              />
              <input
                type="text"
                defaultValue="https://th.bing.com/th/id/OIP.1J4DBBiBM0OCxC48LBaxQHaHv?w=179&h=180"
                className="border p-2 rounded-md text-sm h-[93px] border-pink-400"
              />
              <div className="flex justify-between ">
                <button className="bg-red-600 text-white px-4 py-1 rounded-md">
                  Enregistrer
                </button>
                <button className="bg-gray-200 px-4 py-1 rounded-md">
                  Annuler
                </button>
              </div>
            </div>
          </div>

          {/* Oeuvre 3 */}
          <div className="border rounded-2xl p-4 shadow-sm bg-white">
            <img
              src="/assets/img1.png"
              alt="Tapis"
              className="rounded-lg mb-3 w-full h-40 object-cover"
            />
            <h3 className="font-semibold text-lg">Tapis Amazigh</h3>
            <p className="text-sm text-gray-500">-Tapis</p>
            <p className="text-sm mt-2">
              Un tapis tissé à la main avec des motifs traditionnels berbères.
            </p>
            <div className="flex justify-between  mt-4 ">
              <button className="bg-orange-500 text-white px-4 py-1 rounded-md">
                Modifier
              </button>
              <button className="bg-red-600 text-white px-4 py-1 rounded-md">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer className="mt-auto w-full" />
    </div>
  );
}