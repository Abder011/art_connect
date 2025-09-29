import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  oeuvresService, 
  categoriesService, 
  artisansService, 
  evenementsService, 
  favorisService 
} from "../services/api";

const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  // -------- États --------
  const [oeuvres, setOeuvres] = useState([]);
  const [categories, setCategories] = useState([]);
  const [artisans, setArtisans] = useState([]);
  const [evenements, setEvenements] = useState([]);
  const [favoris, setFavoris] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // -------- Chargement initial --------
  useEffect(() => {
    loadAllData();
  }, []);

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [oeuvresData, categoriesData, artisansData, evenementsData, favorisData] = await Promise.all([
        oeuvresService.getAll(),
        categoriesService.getAll(),
        artisansService.getAll(),
        evenementsService.getAll(),
        favorisService.getAll()
      ]);

      setOeuvres(oeuvresData);
      setCategories(categoriesData);
      setArtisans(artisansData);
      setEvenements(evenementsData);
      setFavoris(favorisData);
    } catch (err) {
      setError("Erreur lors du chargement des données");
      console.error("Load data error:", err);
    } finally {
      setLoading(false);
    }
  };

  // -------- Œuvres --------
  const publierOeuvre = async (item) => {
    try {
      const newOeuvre = await oeuvresService.create(item);
      setOeuvres(prev => [newOeuvre, ...prev]);
      return newOeuvre;
    } catch (err) {
      setError("Erreur lors de l'ajout de l'œuvre");
      throw err;
    }
  };

  const modifierOeuvre = async (id, updates) => {
    try {
      const updatedOeuvre = await oeuvresService.update(id, updates);
      setOeuvres(prev => prev.map(o => o.id === id ? updatedOeuvre : o));
      return updatedOeuvre;
    } catch (err) {
      setError("Erreur lors de la modification de l'œuvre");
      throw err;
    }
  };

  const supprimerOeuvre = async (id) => {
    try {
      await oeuvresService.delete(id);
      setOeuvres(prev => prev.filter(o => o.id !== id));
      // Supprimer aussi des favoris si présent
      if (favoris.some(f => f.id === id)) {
        await removeFromFavoris(id);
      }
    } catch (err) {
      setError("Erreur lors de la suppression de l'œuvre");
      throw err;
    }
  };

  // -------- Catégories --------
  const ajouterCategorie = async (item) => {
    try {
      const newCategorie = await categoriesService.create(item);
      setCategories(prev => [...prev, newCategorie]);
      return newCategorie;
    } catch (err) {
      setError("Erreur lors de l'ajout de la catégorie");
      throw err;
    }
  };

  const modifierCategorie = async (id, updates) => {
    try {
      const updatedCategorie = await categoriesService.update(id, updates);
      setCategories(prev => prev.map(c => c.id === id ? updatedCategorie : c));
      return updatedCategorie;
    } catch (err) {
      setError("Erreur lors de la modification de la catégorie");
      throw err;
    }
  };

  const supprimerCategorie = async (id) => {
    try {
      await categoriesService.delete(id);
      setCategories(prev => prev.filter(c => c.id !== id));
    } catch (err) {
      setError("Erreur lors de la suppression de la catégorie");
      throw err;
    }
  };

  // -------- Artisans --------
  const ajouterArtisan = async (item) => {
    try {
      const newArtisan = await artisansService.create(item);
      setArtisans(prev => [...prev, newArtisan]);
      return newArtisan;
    } catch (err) {
      setError("Erreur lors de l'ajout de l'artisan");
      throw err;
    }
  };

  const modifierArtisan = async (id, updates) => {
    try {
      const updatedArtisan = await artisansService.update(id, updates);
      setArtisans(prev => prev.map(a => a.id === id ? updatedArtisan : a));
      return updatedArtisan;
    } catch (err) {
      setError("Erreur lors de la modification de l'artisan");
      throw err;
    }
  };

  const supprimerArtisan = async (id) => {
    try {
      await artisansService.delete(id);
      setArtisans(prev => prev.filter(a => a.id !== id));
    } catch (err) {
      setError("Erreur lors de la suppression de l'artisan");
      throw err;
    }
  };

  // -------- Événements --------
  const ajouterEvenement = async (item) => {
    try {
      const newEvenement = await evenementsService.create(item);
      setEvenements(prev => [...prev, newEvenement]);
      return newEvenement;
    } catch (err) {
      setError("Erreur lors de l'ajout de l'événement");
      throw err;
    }
  };

  const modifierEvenement = async (id, updates) => {
    try {
      const updatedEvenement = await evenementsService.update(id, updates);
      setEvenements(prev => prev.map(e => e.id === id ? updatedEvenement : e));
      return updatedEvenement;
    } catch (err) {
      setError("Erreur lors de la modification de l'événement");
      throw err;
    }
  };

  const supprimerEvenement = async (id) => {
    try {
      await evenementsService.delete(id);
      setEvenements(prev => prev.filter(e => e.id !== id));
    } catch (err) {
      setError("Erreur lors de la suppression de l'événement");
      throw err;
    }
  };

  // -------- Favoris --------
  const addToFavoris = async (item) => {
    try {
      if (!favoris.some(f => f.id === item.id)) {
        const newFavori = await favorisService.create(item);
        setFavoris(prev => [...prev, newFavori]);
        return newFavori;
      }
    } catch (err) {
      setError("Erreur lors de l'ajout aux favoris");
      throw err;
    }
  };

  const removeFromFavoris = async (id) => {
    try {
      await favorisService.delete(id);
      setFavoris(prev => prev.filter(f => f.id !== id));
    } catch (err) {
      setError("Erreur lors de la suppression des favoris");
      throw err;
    }
  };

  const isFavorite = (id) => favoris.some(f => f.id === id);

  // -------- Fonctions utilitaires --------
  const getCategoriesWithCounts = () => {
    return categories.map(cat => ({
      ...cat,
      count: oeuvres.filter(oeuvre => oeuvre.categorie === cat.name).length
    }));
  };

  const clearError = () => setError(null);

  return (
    <GlobalContext.Provider value={{
      // États
      oeuvres, categories, artisans, evenements, favoris,
      loading, error,
      
      // Œuvres
      publierOeuvre, modifierOeuvre, supprimerOeuvre,
      
      // Catégories
      categoriesWithCounts: getCategoriesWithCounts(),
      ajouterCategorie, modifierCategorie, supprimerCategorie,
      
      // Artisans
      ajouterArtisan, modifierArtisan, supprimerArtisan,
      
      // Événements
      ajouterEvenement, modifierEvenement, supprimerEvenement,
      
      // Favoris
      addToFavoris, removeFromFavoris, isFavorite,
      
      // Utilitaires
      clearError,
      refetchData: loadAllData
    }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => {
  const ctx = useContext(GlobalContext);
  if (!ctx) throw new Error("useGlobal must be used inside GlobalProvider");
  return ctx;
};