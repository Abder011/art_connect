import React from "react";

export default function Favoris() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fff7f3" }}>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vos favoris</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Retrouvez toutes vos œuvres préférées du patrimoine marocain ici
          </p>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ceramic Pottery Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2023/04/21/12/06/teapot-7941793_1280.jpg"
                alt="Port en céramique de Safi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Port en céramique de Safi</h3>
              <p className="text-gray-600 mb-4">- Céramique</p>
              <button className="w-full bg-[#D30046] text-white py-2 px-4 rounded-lg hover:bg-[#B8003D] transition-colors font-medium">
                Retirer des favoris
              </button>
            </div>
          </div>

          {/* Babouches Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2018/05/27/10/47/morocco-3433248_1280.jpg"
                alt="Babouches Fès"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Babouches Fès</h3>
              <p className="text-gray-600 mb-4">- Artisanat</p>
              <button className="w-full bg-[#D30046] text-white py-2 px-4 rounded-lg hover:bg-[#B8003D] transition-colors font-medium">
                Retirer des favoris
              </button>
            </div>
          </div>

          {/* Zellige Ceiling Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2024/12/02/16/21/arabian-9240332_1280.png"
                alt="Plafond Zellige"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Plafond Zellige</h3>
              <p className="text-gray-600 mb-4">- Zellige</p>
              <button className="w-full bg-[#D30046] text-white py-2 px-4 rounded-lg hover:bg-[#B8003D] transition-colors font-medium">
                Retirer des favoris
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
