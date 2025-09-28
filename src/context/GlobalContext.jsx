import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  // -------- Œuvres --------
  const [oeuvres, setOeuvres] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("oeuvres") || "[]");
    } catch { return []; }
  });

  const publierOeuvre = (item) => {
    const itemWithId = { ...item, id: Date.now() };
    setOeuvres(p => [itemWithId, ...p]);
  };

  const supprimerOeuvre = (id) => setOeuvres(p => p.filter(o => o.id !== id));

  // -------- Catégories --------
  const [categories, setCategories] = useState(() => {
    try { return JSON.parse(localStorage.getItem("categories") || "[]"); }
    catch { return []; }
  });

  const ajouterCategorie = (item) => {
    const newItem = { ...item, id: Date.now() };
    setCategories(p => [...p, newItem]);
  };

  const supprimerCategorie = (id) => setCategories(p => p.filter(c => c.id !== id));

  // -------- Artisans --------
  const [artisans, setArtisans] = useState(() => {
    try { return JSON.parse(localStorage.getItem("artisans") || "[]"); }
    catch { return []; }
  });

  const ajouterArtisan = (item) => {
    const newItem = { ...item, id: Date.now() };
    setArtisans(p => [...p, newItem]);
  };

  const supprimerArtisan = (id) => setArtisans(p => p.filter(a => a.id !== id));

  // -------- Événements --------
  const [evenements, setEvenements] = useState(() => {
    try { return JSON.parse(localStorage.getItem("evenements") || "[]"); }
    catch { return []; }
  });

  const ajouterEvenement = (item) => {
    const newItem = { ...item, id: Date.now() };
    setEvenements(p => [...p, newItem]);
  };

  const supprimerEvenement = (id) => setEvenements(p => p.filter(e => e.id !== id));

  // -------- Favoris (optionnel) --------
  const [favoris, setFavoris] = useState(() => {
    try { return JSON.parse(localStorage.getItem("favoris") || "[]"); }
    catch { return []; }
  });

  const addToFavoris = (item) => {
    if (!favoris.some(f => f.id === item.id)) setFavoris(p => [...p, item]);
  };
  const removeFromFavoris = (id) => setFavoris(p => p.filter(f => f.id !== id));
  const isFavorite = (id) => favoris.some(f => f.id === id);

  // -------- Sync avec localStorage --------
  useEffect(() => { localStorage.setItem("oeuvres", JSON.stringify(oeuvres)); }, [oeuvres]);
  useEffect(() => { localStorage.setItem("categories", JSON.stringify(categories)); }, [categories]);
  useEffect(() => { localStorage.setItem("artisans", JSON.stringify(artisans)); }, [artisans]);
  useEffect(() => { localStorage.setItem("evenements", JSON.stringify(evenements)); }, [evenements]);
  useEffect(() => { localStorage.setItem("favoris", JSON.stringify(favoris)); }, [favoris]);

  return (
    <GlobalContext.Provider value={{
      oeuvres, publierOeuvre, supprimerOeuvre,
      categories, ajouterCategorie, supprimerCategorie,
      artisans, ajouterArtisan, supprimerArtisan,
      evenements, ajouterEvenement, supprimerEvenement,
      favoris, addToFavoris, removeFromFavoris, isFavorite
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
