import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour gérer les erreurs
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    throw error;
  }
);

// Services pour les œuvres
export const oeuvresService = {
  getAll: async () => {
    const response = await api.get('/oeuvres');
    return response.data;
  },
  getById: async (id) => {
    const response = await api.get(`/oeuvres/${id}`);
    return response.data;
  },
  create: async (oeuvre) => {
    const response = await api.post('/oeuvres', oeuvre);
    return response.data;
  },
  update: async (id, oeuvre) => {
    const response = await api.put(`/oeuvres/${id}`, oeuvre);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/oeuvres/${id}`);
    return response.data;
  }
};

// Services pour les catégories
export const categoriesService = {
  getAll: async () => {
    const response = await api.get('/categories');
    return response.data;
  },
  create: async (categorie) => {
    const response = await api.post('/categories', categorie);
    return response.data;
  },
  update: async (id, categorie) => {
    const response = await api.put(`/categories/${id}`, categorie);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/categories/${id}`);
    return response.data;
  }
};

// Services pour les artisans
export const artisansService = {
  getAll: async () => {
    const response = await api.get('/artisans');
    return response.data;
  },
  create: async (artisan) => {
    const response = await api.post('/artisans', artisan);
    return response.data;
  },
  update: async (id, artisan) => {
    const response = await api.put(`/artisans/${id}`, artisan);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/artisans/${id}`);
    return response.data;
  }
};

// Services pour les événements
export const evenementsService = {
  getAll: async () => {
    const response = await api.get('/evenements');
    return response.data;
  },
  create: async (evenement) => {
    const response = await api.post('/evenements', evenement);
    return response.data;
  },
  update: async (id, evenement) => {
    const response = await api.put(`/evenements/${id}`, evenement);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/evenements/${id}`);
    return response.data;
  }
};

// Services pour les favoris
export const favorisService = {
  getAll: async () => {
    const response = await api.get('/favoris');
    return response.data;
  },
  create: async (favori) => {
    const response = await api.post('/favoris', favori);
    return response.data;
  },
  delete: async (id) => {
    const response = await api.delete(`/favoris/${id}`);
    return response.data;
  }
};

export default api;