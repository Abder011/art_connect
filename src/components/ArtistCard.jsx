import React from "react";

export default function ArtistCard({ name, specialty, image }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-72 text-center hover:shadow-md transition">
      <img src={image} alt={name} className="w-30 h-30 mx-auto mb-3 object-cover rounded-full" />
      <h4 className="font-medium">{name}</h4>
      <p className="text-sm text-gray-500 mt-2">{specialty}</p>
    </div>
  );
}
