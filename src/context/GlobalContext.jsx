"use client";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  // Favoris (déjà existant)
  const [favoris, setFavoris] = useState([]);

  // 🔴 Nouveau : œuvres publiées
  const [oeuvres, setOeuvres] = useState([]);

  const addToFavoris = (item) => setFavoris((prev) => [...prev, item]);
  const removeFromFavoris = (id) =>
    setFavoris((prev) => prev.filter((item) => item.id !== id));
  const isFavorite = (id) => favoris.some((item) => item.id === id);

  // 🔴 Fonction pour publier une œuvre
  const publierOeuvre = (oeuvre) => {
    setOeuvres((prev) => [...prev, { id: Date.now(), ...oeuvre }]);
  };

  return (
    <GlobalContext.Provider
      value={{ favoris, addToFavoris, removeFromFavoris, isFavorite, oeuvres, publierOeuvre }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => useContext(GlobalContext);
