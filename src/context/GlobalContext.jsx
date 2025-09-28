import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  // favoris (persistés dans localStorage)
  const [favoris, setFavoris] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favoris") || "[]");
    } catch (e) {
      return [];
    }
  });

  // oeuvres publiées par les utilisateurs (en mémoire seulement)
  const [oeuvres, setOeuvres] = useState([]);

  // sync favoris -> localStorage
  useEffect(() => {
    try {
      localStorage.setItem("favoris", JSON.stringify(favoris));
    } catch (e) {}
  }, [favoris]);

  // Favoris helpers
  const addToFavoris = (item) => {
    if (!favoris.some((f) => f.id === item.id)) {
      setFavoris((p) => [...p, item]);
    }
  };
  const removeFromFavoris = (id) => setFavoris((p) => p.filter((f) => f.id !== id));
  const isFavorite = (id) => favoris.some((f) => f.id === id);

  // Publier une oeuvre (en mémoire)
  const publierOeuvre = (newItem) => {
    // assigne un id unique
    const itemWithId = { ...newItem, id: Date.now() };
    // on met les publiées en tête pour qu'elles apparaissent en premier
    setOeuvres((p) => [itemWithId, ...p]);
  };

  return (
    <GlobalContext.Provider
      value={{
        favoris,
        addToFavoris,
        removeFromFavoris,
        isFavorite,
        oeuvres,
        publierOeuvre,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => {
  const ctx = useContext(GlobalContext);
  if (!ctx) throw new Error("useGlobal must be used inside GlobalProvider");
  return ctx;
};
