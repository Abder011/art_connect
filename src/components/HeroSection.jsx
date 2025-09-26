import React from "react";

export default function HeroSection() {
  return (
    <header className="text-center py-8">
      <h1 className="text-3xl font-bold">
        Art<span className="text-red-600">Connect</span>{" "}
        <span className="text-green-600">Maroc</span>
      </h1>
      <p className="text-gray-600 mt-2">
        Explorez les œuvres, les artisans et la culture de toutes les régions du Maroc
      </p>
      <button className="mt-5 bg-pink-600 text-white px-6 py-2 rounded-md">
        Publier une œuvre
      </button>
    </header>
  );
}
