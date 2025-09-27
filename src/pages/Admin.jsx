"use client"

import { useState } from "react"
import Footer from "../components/Footer"

export default function Admin() {
  const [activeTab, setActiveTab] = useState("Oeuvre")
  const [editingItem, setEditingItem] = useState(null)
  const [newItem, setNewItem] = useState({
    titre: "",
    categorie: "",
    description: "",
    region: "",
    image: "",
  })

  // Sample data for oeuvres
  const [oeuvres, setOeuvres] = useState([
    {
      id: 1,
      titre: "Tapis Amazigh",
      categorie: "Tapis",
      description: "Un tapis tissé à la main avec des motifs traditionnels berbères.",
      region: "Atlas",
      image: "/assets/img11.jpg",
    },
    {
      id: 2,
      titre: "Pot en céramique de Safi",
      categorie: "Céramique",
      description: "Une pièce en céramique colorée provenant des ateliers",
      region: "Safi",
      image: "/assets/img12.jpg",
    },
    {
      id: 3,
      titre: "Tapis Amazigh",
      categorie: "Tapis",
      description: "Un tapis tissé à la main avec des motifs traditionnels berbères.",
      region: "Atlas",
      image: "/assets/img11.jpg",
    },
  ])

  const tabs = ["Oeuvre", "Catégorie", "Artisans", "Événements"]

  const handleInputChange = (e, isEditing = false) => {
    const { name, value } = e.target
    if (isEditing) {
      setEditingItem((prev) => ({
        ...prev,
        [name]: value,
      }))
    } else {
      setNewItem((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleAddItem = () => {
    if (!newItem.titre || !newItem.categorie || !newItem.description || !newItem.region) {
      alert("Veuillez remplir tous les champs")
      return
    }

    const newOeuvre = {
      id: Date.now(),
      ...newItem,
    }

    setOeuvres((prev) => [...prev, newOeuvre])
    setNewItem({
      titre: "",
      categorie: "",
      description: "",
      region: "",
      image: "",
    })
    alert("Œuvre ajoutée avec succès !")
  }

  const handleEdit = (item) => {
    setEditingItem({ ...item })
  }

  const handleSaveEdit = () => {
    setOeuvres((prev) => prev.map((item) => (item.id === editingItem.id ? editingItem : item)))
    setEditingItem(null)
    alert("Œuvre modifiée avec succès !")
  }

  const handleCancelEdit = () => {
    setEditingItem(null)
  }

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette œuvre ?")) {
      setOeuvres((prev) => prev.filter((item) => item.id !== id))
      alert("Œuvre supprimée avec succès !")
    }
  }

  return (
    <div className="bg-[#fff9f7] min-h-screen flex flex-col">
      <div className="flex-1 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Tableau de bord <span className="text-green-600">Admin</span>
          </h1>
          <p className="text-gray-600 mt-2">Gestion complète de la plateforme ArtConnect Maroc</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg border transition-colors font-medium ${
                activeTab === tab
                  ? "bg-[#D30046] text-white border-[#D30046]"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-[#D30046] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6">
          {activeTab === "Oeuvre" && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Gestion des Oeuvres</h2>

              {/* Add Form */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center items-end">
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="titre"
                    value={newItem.titre}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Titre"
                    className="w-40 border border-[#D30046] p-3 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D30046]"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="categorie"
                    value={newItem.categorie}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Catégorie"
                    className="w-40 border border-[#D30046] p-3 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D30046]"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="description"
                    value={newItem.description}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Description"
                    className="w-40 border border-[#D30046] p-3 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D30046]"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="region"
                    value={newItem.region}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Région"
                    className="w-40 border border-[#D30046] p-3 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D30046]"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="image"
                    value={newItem.image}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Image URL"
                    className="w-40 border border-[#D30046] p-3 rounded-lg text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D30046]"
                  />
                </div>
                <button
                  onClick={handleAddItem}
                  className="w-40 bg-[#D30046] text-white rounded-lg py-3 px-4 shadow-md hover:bg-[#B8003A] transition-colors font-medium"
                >
                  Ajouter
                </button>
              </div>

              {/* Items Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {oeuvres.map((item) => (
                  <div key={item.id} className="border rounded-2xl p-6 shadow-sm bg-white">
                    {editingItem && editingItem.id === item.id ? (
                      /* Edit Mode */
                      <div className="space-y-3">
                        <input
                          type="text"
                          name="titre"
                          value={editingItem.titre}
                          onChange={(e) => handleInputChange(e, true)}
                          className="w-full border border-[#D30046] p-2 rounded-lg text-sm"
                        />
                        <input
                          type="text"
                          name="categorie"
                          value={editingItem.categorie}
                          onChange={(e) => handleInputChange(e, true)}
                          className="w-full border border-[#D30046] p-2 rounded-lg text-sm"
                        />
                        <textarea
                          name="description"
                          value={editingItem.description}
                          onChange={(e) => handleInputChange(e, true)}
                          className="w-full border border-[#D30046] p-2 rounded-lg text-sm h-20 resize-none"
                        />
                        <input
                          type="text"
                          name="region"
                          value={editingItem.region}
                          onChange={(e) => handleInputChange(e, true)}
                          className="w-full border border-[#D30046] p-2 rounded-lg text-sm"
                        />
                        <input
                          type="text"
                          name="image"
                          value={editingItem.image}
                          onChange={(e) => handleInputChange(e, true)}
                          className="w-full border border-[#D30046] p-2 rounded-lg text-sm"
                        />
                        <div className="flex justify-between gap-2">
                          <button
                            onClick={handleSaveEdit}
                            className="flex-1 bg-[#D30046] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#B8003A] transition-colors"
                          >
                            Enregistrer
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
                          >
                            Annuler
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* View Mode */
                      <div>
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.titre}
                          className="rounded-lg mb-4 w-full h-40 object-cover"
                        />
                        <h3 className="font-bold text-lg mb-2">{item.titre}</h3>
                        <p className="text-sm text-gray-500 mb-2">-{item.categorie}</p>
                        <p className="text-sm text-gray-700 mb-2">{item.description}</p>
                        <p className="text-sm text-gray-500 mb-4">📍 {item.region}</p>
                        <div className="flex justify-between gap-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
                          >
                            Modifier
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                          >
                            Supprimer
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other tabs content */}
          {activeTab !== "Oeuvre" && (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Gestion des {activeTab}</h2>
              <p className="text-gray-600">Cette section sera développée prochainement.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
