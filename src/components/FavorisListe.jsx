import React from "react";

export default function FavorisListe({ favoris, onRemove }) {
  if (favoris.length === 0) {
    return <p className="text-center text-gray-500 mt-10">Aucun favori pour le moment.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {favoris.map((item) => (
        <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.category}</p>
            <button
              className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              onClick={() => onRemove(item.id)}
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
