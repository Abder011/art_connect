"use client"

import { useState } from "react"

export default function Publier() {
  const [formData, setFormData] = useState({
    titre: "",
    categorie: "",
    region: "",
    image: null,
  })
  const [imagePreview, setImagePreview] = useState(null)
  const [isDragOver, setIsDragOver] = useState(false)

  const categories = ["Artisanat", "Gastronomie", "Habits", "Architecture", "Musique & Danse"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageUpload = (file) => {
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }))

      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    handleImageUpload(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    const file = e.dataTransfer.files[0]
    handleImageUpload(file)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation
    if (!formData.titre || !formData.categorie || !formData.region || !formData.image) {
      alert("Veuillez remplir tous les champs obligatoires")
      return
    }

    // Here you would typically upload to Cloudinary and save to your backend
    console.log("Form submitted:", formData)
    alert("Œuvre publiée avec succès !")

    // Reset form
    setFormData({
      titre: "",
      categorie: "",
      region: "",
      image: null,
    })
    setImagePreview(null)
  }

  return (
    <div className="bg-[#fff7f5] min-h-screen py-8">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Publier une oeuvre ou artisanat</h1>
          <p className="text-gray-600">Partagez votre contribution au patrimoine culturel marocain</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Titre de l'oeuvre */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Titre de l'oeuvre <span className="text-[#D30046]">*</span>
              </label>
              <input
                type="text"
                name="titre"
                value={formData.titre}
                onChange={handleInputChange}
                placeholder="Ex : Tapis berbère"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D30046] focus:border-[#D30046] outline-none transition-colors"
                required
              />
            </div>

            {/* Catégorie et Région */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Catégorie <span className="text-[#D30046]">*</span>
                </label>
                <select
                  name="categorie"
                  value={formData.categorie}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D30046] focus:border-[#D30046] outline-none transition-colors bg-white"
                  required
                >
                  <option value="">Sélectionnez une catégorie</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Région / Ville <span className="text-[#D30046]">*</span>
                </label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  placeholder="Ex : Casablanca"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D30046] focus:border-[#D30046] outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Image <span className="text-[#D30046]">*</span>
              </label>

              <div
                className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragOver ? "border-[#D30046] bg-red-50" : "border-gray-300 hover:border-[#D30046]"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {imagePreview ? (
                  <div className="space-y-4">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      className="max-w-full max-h-48 mx-auto rounded-lg object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview(null)
                        setFormData((prev) => ({ ...prev, image: null }))
                      }}
                      className="text-[#D30046] hover:text-red-700 text-sm font-medium"
                    >
                      Supprimer l'image
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-6xl text-gray-400">📷</div>
                    <div>
                      <p className="text-gray-600 mb-2">Glissez-déposez une image ou cliquez pour télécharger</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="inline-block bg-[#D30046] text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-[#B8003A] transition-colors"
                      >
                        Choisir une image
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Required Fields Notice */}
            <div className="flex items-center justify-between pt-4">
              <p className="text-sm text-gray-500">
                <span className="text-[#D30046]">*</span> Champs obligatoires
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#D30046] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B8003A] transition-colors focus:ring-2 focus:ring-[#D30046] focus:ring-offset-2"
              >
                Publier
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
