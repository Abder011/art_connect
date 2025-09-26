import React from "react";

export default function ArtworkCard({ id, title, location, description, author, image, isFav, onToggleFav }) {
  return (
    <div className="bg-white rounded-xl shadow-md w-72 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <button
          onClick={() => onToggleFav(id)}
          className={`absolute top-2 right-2 rounded-full p-2 shadow ${
            isFav ? "bg-pink-600 text-white" : "bg-white text-gray-400 hover:text-pink-600"
          }`}
        >
          ❤️
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 flex items-center gap-1">📍 {location}</p>
        <p className="text-gray-700 text-sm mt-1">{description}</p>
        <p className="text-xs text-gray-500 mt-2">Par {author}</p>
      </div>
    </div>
  );
}
