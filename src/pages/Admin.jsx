"use client";

import { useState } from "react";
import Footer from "../components/Footer";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("Oeuvres");

  // ---- States pour chaque section ----
  const [oeuvres, setOeuvres] = useState([
    { id: 1, titre: "Tapis Amazigh", categorie: "Tapis", description: "Un tapis tissé à la main", region: "Atlas", image: "/placeholder.svg" },
  ]);

  const [categories, setCategories] = useState([
    { id: 1, nom: "Tapis" },
    { id: 2, nom: "Céramique" },
  ]);

  const [artisans, setArtisans] = useState([
    { id: 1, nom: "Fatima", specialite: "Tapis" },
    { id: 2, nom: "Ahmed", specialite: "Céramique" },
  ]);

  const [evenements, setEvenements] = useState([
    { id: 1, titre: "Festival du Zellige", date: "2025-11-15", lieu: "Fès" },
  ]);

  // ---- Form state générique ----
  const [newItem, setNewItem] = useState({});
  const [editingItem, setEditingItem] = useState(null);

  // ---- Tabs ----
  const tabs = ["Oeuvres", "Catégories", "Artisans", "Événements"];

  // ---- Handlers ----
  const handleInputChange = (e, isEditing = false) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditingItem((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewItem((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAdd = (section, setSection) => {
    if (Object.values(newItem).some((val) => !val)) {
      alert("Veuillez remplir tous les champs");
      return;
    }
    const item = { id: Date.now(), ...newItem };
    setSection((prev) => [...prev, item]);
    setNewItem({});
    alert(`${section} ajouté avec succès !`);
  };

  const handleEdit = (item) => {
    setEditingItem({ ...item });
  };

  const handleSave = (setSection) => {
    setSection((prev) =>
      prev.map((item) => (item.id === editingItem.id ? editingItem : item))
    );
    setEditingItem(null);
    alert("Élément modifié avec succès !");
  };

  const handleDelete = (id, setSection) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ?")) {
      setSection((prev) => prev.filter((item) => item.id !== id));
      alert("Supprimé avec succès !");
    }
  };

  // ---- Formulaires dynamiques ----
  const renderForm = () => {
    switch (activeTab) {
      case "Oeuvres":
        return (
          <>
            <input name="titre" placeholder="Titre" onChange={handleInputChange} />
            <input name="categorie" placeholder="Catégorie" onChange={handleInputChange} />
            <input name="description" placeholder="Description" onChange={handleInputChange} />
            <input name="region" placeholder="Région" onChange={handleInputChange} />
            <input name="image" placeholder="Image URL" onChange={handleInputChange} />
            <button onClick={() => handleAdd("Œuvre", setOeuvres)}>Ajouter</button>
          </>
        );
      case "Catégories":
        return (
          <>
            <input name="nom" placeholder="Nom de catégorie" onChange={handleInputChange} />
            <button onClick={() => handleAdd("Catégorie", setCategories)}>Ajouter</button>
          </>
        );
      case "Artisans":
        return (
          <>
            <input name="nom" placeholder="Nom de l’artisan" onChange={handleInputChange} />
            <input name="specialite" placeholder="Spécialité" onChange={handleInputChange} />
            <button onClick={() => handleAdd("Artisan", setArtisans)}>Ajouter</button>
          </>
        );
      case "Événements":
        return (
          <>
            <input name="titre" placeholder="Titre de l’événement" onChange={handleInputChange} />
            <input name="date" placeholder="Date" onChange={handleInputChange} />
            <input name="lieu" placeholder="Lieu" onChange={handleInputChange} />
            <button onClick={() => handleAdd("Événement", setEvenements)}>Ajouter</button>
          </>
        );
      default:
        return null;
    }
  };

  // ---- Listes dynamiques ----
  const renderList = () => {
    const sectionMap = {
      Oeuvres: [oeuvres, setOeuvres, ["titre", "categorie", "description", "region", "image"]],
      Catégories: [categories, setCategories, ["nom"]],
      Artisans: [artisans, setArtisans, ["nom", "specialite"]],
      Événements: [evenements, setEvenements, ["titre", "date", "lieu"]],
    };

    const [items, setItems, fields] = sectionMap[activeTab];

    return (
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {items.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg shadow">
            {editingItem && editingItem.id === item.id ? (
              <>
                {fields.map((field) => (
                  <input
                    key={field}
                    name={field}
                    value={editingItem[field]}
                    onChange={(e) => handleInputChange(e, true)}
                  />
                ))}
                <button onClick={() => handleSave(setItems)}>Enregistrer</button>
                <button onClick={() => setEditingItem(null)}>Annuler</button>
              </>
            ) : (
              <>
                {fields.map((field) => (
                  <p key={field}>
                    <strong>{field}:</strong> {item[field]}
                  </p>
                ))}
                <button onClick={() => handleEdit(item)}>Modifier</button>
                <button onClick={() => handleDelete(item.id, setItems)}>Supprimer</button>
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#fff9f7] min-h-screen flex flex-col">
      <div className="flex-1 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            Tableau de bord <span className="text-green-600">Admin</span>
          </h1>
          <p className="text-gray-600 mt-2">Gestion complète de la plateforme ArtConnect Maroc</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setNewItem({});
                setEditingItem(null);
              }}
              className={`px-6 py-3 rounded-lg border font-medium ${
                activeTab === tab ? "bg-[#D30046] text-white" : "bg-gray-100 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Formulaire + Liste */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Gestion des {activeTab}</h2>
            <div className="flex gap-2 flex-wrap mb-4">{renderForm()}</div>
            {renderList()}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
