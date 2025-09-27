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
              className="bg-[#D30046] text-white px-7 py-3 mt-6 rounded-lg font-medium hover:bg-[#B8003A] transition-colors"
              onClick={() => onRemove(item.id)}
            >
              Retirer des faboris
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
