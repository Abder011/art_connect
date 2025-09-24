import React from "react";
import { Camera } from "lucide-react";

export default function Publier() {
  return (

    <div className="min-h-screen" style={{ backgroundColor: "#fff7f3" }}>
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Publier une oeuvre ou artisanat
          </h1>
          <p className="text-gray-600 text-l">
            Partagez votre contribution au patrimoine culturel marocain
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <form className="space-y-8">
            {/* Titre */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Titre de l'oeuvre <span className="text-[#D30046]">*</span>
              </label>
              <input
                type="text"
                placeholder="Ex : Tapis berbère"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D30046] focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Category & Region */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Catégorie <span className="text-[#D30046]">*</span>
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D30046] focus:border-transparent outline-none transition-all appearance-none bg-white">
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="artisanat">Artisanat</option>
                  <option value="Gastronomie">Gastronomie</option>
                  <option value="Habits">Habits</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Musique & Danse">Musique & Danse</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Région / Ville <span className="text-[#D30046]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex : Casablanca"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D30046] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Image upload */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Image <span className="text-[#D30046]">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-[#D30046] transition-colors cursor-pointer">
                <Camera className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-600">
                  Glissez-déposez une image ou cliquez pour télécharger
                </p>
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <span className="text-[#D30046] mr-1">*</span>
              <span>Champs obligatoires</span>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#D30046] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#B8003D] transition-colors focus:ring-2 focus:ring-[#D30046] focus:ring-offset-2 outline-none"
              >
                Publier
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
