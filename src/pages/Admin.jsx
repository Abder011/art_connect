"use client";
import { useState } from "react";
import { useGlobal } from "../context/GlobalContext";
import Footer from "../components/Footer";

export default function Admin() {
  const {
    oeuvres, publierOeuvre, supprimerOeuvre,
    categories, ajouterCategorie, supprimerCategorie,
    artisans, ajouterArtisan, supprimerArtisan,
    evenements, ajouterEvenement, supprimerEvenement
  } = useGlobal();

  const [activeTab, setActiveTab] = useState("Oeuvre");
  const [newItem, setNewItem] = useState({});

  const tabs = ["Oeuvre", "Catégorie", "Artisans", "Événements"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (activeTab === "Oeuvre") {
      if (!newItem.titre || !newItem.categorie || !newItem.description || !newItem.region || !newItem.image) {
        alert("Veuillez remplir tous les champs !");
        return;
      }
      publierOeuvre({ ...newItem, author: "Admin" });
    } else if (activeTab === "Catégorie") {
      if (!newItem.name) { alert("Nom requis"); return; }
      ajouterCategorie({ name: newItem.name });
    } else if (activeTab === "Artisans") {
      if (!newItem.name || !newItem.specialty || !newItem.image) { alert("Remplir tous les champs"); return; }
      ajouterArtisan(newItem);
    } else if (activeTab === "Événements") {
      if (!newItem.title || !newItem.location || !newItem.description || !newItem.image) { alert("Remplir tous les champs"); return; }
      ajouterEvenement(newItem);
    }
    setNewItem({});
  };

  const handleDelete = (id) => {
    if (!window.confirm("Confirmer la suppression ?")) return;
    if (activeTab === "Oeuvre") supprimerOeuvre(id);
    else if (activeTab === "Catégorie") supprimerCategorie(id);
    else if (activeTab === "Artisans") supprimerArtisan(id);
    else if (activeTab === "Événements") supprimerEvenement(id);
  };

  // Clés des champs pour formulaire
  const fields = {
    "Oeuvre": ["titre","categorie","description","region","image"],
    "Catégorie": ["name"],
    "Artisans": ["name","specialty","image"],
    "Événements": ["title","location","description","image"]
  };

  const items = activeTab==="Oeuvre"?oeuvres:activeTab==="Catégorie"?categories:activeTab==="Artisans"?artisans:evenements;

  return (
    <div className="bg-[#fff9f7] min-h-screen flex flex-col">
      <div className="flex-1 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Tableau de bord <span className="text-green-600">Admin</span></h1>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          {tabs.map(tab=>(
            <button key={tab} onClick={()=>setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg border font-medium ${activeTab===tab?"bg-[#D30046] text-white":"bg-gray-100 text-gray-700 hover:bg-[#D30046] hover:text-white"}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Gestion des {activeTab}</h2>

            {/* Formulaire ajout */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center items-end">
              {fields[activeTab].map(f => (
                <input key={f} name={f} value={newItem[f]||""} onChange={handleInputChange}
                  placeholder={f} className="border p-3 rounded-lg w-40"/>
              ))}
              <button onClick={handleAdd} className="bg-[#D30046] text-white px-4 py-2 rounded-lg">Ajouter</button>
            </div>

{/* Liste des items */}
<div className="grid md:grid-cols-3 gap-6">
  {activeTab === "Catégorie" ? (
    <div className="col-span-3">
      <ul className="divide-y divide-gray-200">
        {categories.map(cat => {
          // compter le nombre d'oeuvres dans cette catégorie
          const count = oeuvres.filter(o => o.categorie === cat.name).length;
          return (
            <li key={cat.id} className="flex justify-between items-center py-3">
              <span className="font-medium">{cat.name}</span>
              <span className="text-sm text-gray-500">{count} œuvre{count>1?"s":""}</span>
              <button 
                onClick={() => handleDelete(cat.id)} 
                className="bg-red-600 text-white px-3 py-1 rounded-lg ml-4">
                Supprimer
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    items.map(item => (
      <div key={item.id} className="border rounded-2xl p-6 shadow-sm bg-white text-center">
        <img 
          src={item.image || "/placeholder.svg"} 
          alt={item.titre || item.title || item.name} 
          className="w-full h-36 object-cover rounded-lg mb-2"
        />
        <p className="font-bold">{item.titre || item.title || item.name}</p>
        <p className="text-sm text-gray-500">
          {item.categorie || item.specialty || item.location || ""}
        </p>
        <p className="text-sm text-gray-700">{item.description || ""}</p>
        <button 
          onClick={() => handleDelete(item.id)} 
          className="bg-red-600 text-white px-3 py-1 rounded-lg mt-2">
          Supprimer
        </button>
      </div>
    ))
  )}
</div>


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}