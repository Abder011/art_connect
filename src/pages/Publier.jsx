"use client"
import { useState } from "react"
import { useGlobal } from "../context/GlobalContext"

export default function Publier() {
  const { publierOeuvre, categories } = useGlobal()

  const [formData, setFormData] = useState({
    titre: "",
    categorie: "",
    region: "",
    description: "",
    image: null,
  })
  const [imagePreview, setImagePreview] = useState(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.titre || !formData.categorie || !formData.region || !formData.description) {
      alert("Veuillez remplir tous les champs obligatoires")
      return
    }

    setIsSubmitting(true)

    try {
      // Simuler l'upload d'image (dans un vrai projet, uploader vers un service cloud)
      const imageUrl = imagePreview || "/placeholder.svg"

      const oeuvreData = {
        ...formData,
        image: imageUrl,
        author: "Utilisateur",
        datePublication: new Date().toISOString()
      }

      await publierOeuvre(oeuvreData)
      
      alert("Votre œuvre a été publiée avec succès !")
      
      // Réinitialiser le formulaire
      setFormData({
        titre: "",
        categorie: "",
        region: "",
        description: "",
        image: null,
      })
      setImagePreview(null)
    } catch (error) {
      alert("Erreur lors de la publication. Veuillez réessayer.")
      console.error("Erreur publication:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fff9f7] py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Publier une <span className="text-[#D30046]">Œuvre</span></h1>
          <p className="text-gray-600 mt-2">Partagez votre création avec la communauté</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          {/* Upload d'image */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image de l'œuvre *
            </label>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                isDragOver ? "border-[#D30046] bg-[#D30046]/5" : "border-gray-300 hover:border-[#D30046]"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById("image-upload").click()}
            >
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              
              {imagePreview ? (
                <div className="space-y-2">
                  <img
                    src={imagePreview}
                    alt="Aperçu"
                    className="mx-auto h-32 w-32 object-cover rounded-lg"
                  />
                  <p className="text-sm text-gray-600">Cliquez pour changer l'image</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="mx-auto h-12 w-12 text-gray-400">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      <span className="text-[#D30046] font-medium">Cliquez pour uploader</span> ou glissez-déposez
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, JPEG (max. 5MB)</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Titre */}
          <div className="mb-4">
            <label htmlFor="titre" className="block text-sm font-medium text-gray-700 mb-1">
              Titre de l'œuvre *
            </label>
            <input
              type="text"
              id="titre"
              name="titre"
              value={formData.titre}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D30046] focus:border-transparent"
              placeholder="Donnez un titre à votre œuvre"
              required
            />
          </div>

          {/* Catégorie */}
          <div className="mb-4">
            <label htmlFor="categorie" className="block text-sm font-medium text-gray-700 mb-1">
              Catégorie *
            </label>
            <select
              id="categorie"
              name="categorie"
              value={formData.categorie}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D30046] focus:border-transparent"
              required
            >
              <option value="">Sélectionnez une catégorie</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Région */}
          <div className="mb-4">
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
              Région *
            </label>
            <input
              type="text"
              id="region"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D30046] focus:border-transparent"
              placeholder="Région d'origine"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D30046] focus:border-transparent"
              placeholder="Décrivez votre œuvre en détail..."
              required
            />
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#D30046] hover:bg-[#b8003d]"
            }`}
          >
            {isSubmitting ? "Publication en cours..." : "Publier l'œuvre"}
          </button>
        </form>
      </div>
    </div>
  )
}