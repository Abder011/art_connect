import React from "react";

export default function EventCard({ title, location, description, image }) {
  return (
    <div className="flex flex-col w-64 bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <img src={image} alt={title} className="rounded-xl mb-3 h-36 object-cover" />
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500 mt-1">{location}</p>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}
