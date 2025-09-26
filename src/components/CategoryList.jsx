import React from "react";

export default function CategoryList() {
  const categories = [
    { name: "Artisanat", count: 1 },
    { name: "Gastronomie", count: 1 },
    { name: "Habits", count: 1 },
    { name: "Architecture", count: 1 },
    { name: "Musique & Danse", count: 1 },
  ];

  return (
    <section className="px-4 max-w-6xl mx-auto mb-10">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 ml-28">
        <span className="text-green-600">✿</span> Catégories
      </h3>
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat, index) => (
          <span
            key={index}
            className="px-10 py-5 bg-white shadow rounded-lg font-bold text-gray-700"
          >
            {cat.name} <p className="font-normal mt-1">{cat.count} œuvre</p>
          </span>
        ))}
      </div>
    </section>
  );
}
