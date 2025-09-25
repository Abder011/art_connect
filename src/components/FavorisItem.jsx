import React from "react";

export default function FavorisItem({ item, onRemove }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4"> 
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4">- {item.category}</p>
        <button
          onClick={() => onRemove(item.id)}
          className="w-full bg-[#D30046] text-white py-2 px-4 rounded-lg hover:bg-[#B8003D] transition-colors font-medium"
        >
          Retirer des favoris
        </button>
      </div>
    </div>
  );
}