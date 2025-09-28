import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext(null);

export function GlobalProvider({ children }) {
  // Favoris persistés
  const [favoris, setFavoris] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favoris") || "[]");
    } catch (e) {
      return [];
    }
  });

  // Œuvres publiées
  const [oeuvres, setOeuvres] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("oeuvres") || "[]");
    } catch (e) {
      return [];
    }
  });

  // Sync favoris -> localStorage
  useEffect(() => {
    localStorage.setItem("favoris", JSON.stringify(favoris));
  }, [favoris]);

  // Sync oeuvres -> localStorage
  useEffect(() => {
    localStorage.setItem("oeuvres", JSON.stringify(oeuvres));
  }, [oeuvres]);

  // Favoris helpers
  const addToFavoris = (item) => {
    if (!favoris.some((f) => f.id === item.id)) {
      setFavoris((p) => [...p, item]);
    }
  };
  const removeFromFavoris = (id) => setFavoris((p) => p.filter((f) => f.id !== id));
  const isFavorite = (id) => favoris.some((f) => f.id === id);

  // Ajouter une œuvre
  const publierOeuvre = (newItem) => {
    const itemWithId = { ...newItem, id: Date.now() };
    setOeuvres((p) => [itemWithId, ...p]);
  };

  // Modifier une œuvre
  const modifierOeuvre = (updatedItem) => {
    setOeuvres((p) => p.map((o) => (o.id === updatedItem.id ? updatedItem : o)));
  };

  // Supprimer une œuvre
  const supprimerOeuvre = (id) => {
    setOeuvres((p) => p.filter((o) => o.id !== id));
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
        modifierOeuvre,
        supprimerOeuvre,
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
