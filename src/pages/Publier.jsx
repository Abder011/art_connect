import React, { useState } from "react";
import { Camera } from "lucide-react";

export default function Publier() {
  const [imageUrl, setImageUrl] = useState(""); // URL après upload
  const [loading, setLoading] = useState(false);

  // Fonction d’upload vers Cloudinary
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_upload"); // preset non signé

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dqjifhssa/image/upload", // remplace dqjifhssa par ton cloud name
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      console.log("Cloudinary response:", data);

      setImageUrl(data.secure_url); // stocke l’URL de l’image
    } catch (err) {
      console.error("Erreur upload Cloudinary", err);
      alert("Échec de l’upload. Vérifie ton preset Cloudinary.");
    } finally {
      setLoading(false);
    }
  };

  // Gestion du submit (validation des champs)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageUrl) {
      alert("Merci d’ajouter une image !");
      return;
    }
    alert("Œuvre publiée avec succès ✅");
    // Ici tu pourras envoyer les données vers ton backend plus tard
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fff7f3" }}>
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Publier une œuvre ou artisanat
          </h1>
          <p className="text-gray-600 text-lg">
            Partagez votre contribution au patrimoine culturel marocain
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Titre */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Titre de l'œuvre <span className="text-[#D30046]">*</span>
              </label>
              <input
                type="text"
                placeholder="Ex : Tapis berbère"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg
                focus:ring-2 focus:ring-[#D30046] focus:border-transparent
                outline-none transition-all"
              />
            </div>

            {/* Catégorie & Région */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Catégorie <span className="text-[#D30046]">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                  focus:ring-2 focus:ring-[#D30046] focus:border-transparent
                  outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="artisanat">Artisanat</option>
                  <option value="gastronomie">Gastronomie</option>
                  <option value="habits">Habits</option>
                  <option value="architecture">Architecture</option>
                  <option value="musique">Musique & Danse</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Région / Ville <span className="text-[#D30046]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Ex : Casablanca"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg
                  focus:ring-2 focus:ring-[#D30046] focus:border-transparent
                  outline-none transition-all"
                />
              </div>
            </div>

            {/* Image upload */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Image <span className="text-[#D30046]">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
              {loading && <p className="text-gray-500 mt-2">Upload en cours...</p>}
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Aperçu"
                  className="mt-4 w-full h-48 object-cover rounded-lg"
                />
              )}
            </div>

            {/* Champs obligatoires */}
            <div className="flex items-center text-sm text-gray-500">
              <span className="text-[#D30046] mr-1">*</span>
              <span>Champs obligatoires</span>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#D30046] text-white px-8 py-3 rounded-lg
                font-medium hover:bg-[#B8003D] transition-colors
                focus:ring-2 focus:ring-[#D30046] focus:ring-offset-2 outline-none"
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
