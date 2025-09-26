const API_BASE_URL = "http://localhost:4000";

export const getOeuvres = async () => {
  const res = await fetch(`${API_BASE_URL}/oeuvres`);
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${API_BASE_URL}/categories`);
  return res.json();
};

export const getEvenements = async () => {
  const res = await fetch(`${API_BASE_URL}/evenements`);
  return res.json();
};

export const getArtisans = async () => {
  const res = await fetch(`${API_BASE_URL}/artisans`);
  return res.json();
};
