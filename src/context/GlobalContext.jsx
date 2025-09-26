import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [favoris, setFavoris] = useState(() => {
    // Charger depuis le localStorage au démarrage
    const saved = localStorage.getItem("favoris");
    return saved ? JSON.parse(saved) : [];
  });

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("favoris", JSON.stringify(favoris));
  }, [favoris]);

  const addToFavoris = (item) => {
    if (!favoris.find((f) => f.id === item.id)) {
      setFavoris([...favoris, item]);
    }
  };

  const removeFromFavoris = (id) => {
    setFavoris(favoris.filter((item) => item.id !== id));
  };

  const isFavorite = (id) => favoris.some((item) => item.id === id);

  return (
    <GlobalContext.Provider
      value={{ favoris, addToFavoris, removeFromFavoris, isFavorite }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
