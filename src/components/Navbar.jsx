import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-xl font-bold">
            ArtConnect <span className="text-[#D30046]">Maroc</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1">
          <Link
            to="/"
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive("/") ? "bg-[#D30046] text-white" : "text-gray-600 hover:text-[#D30046] hover:bg-gray-50"
            }`}
          >
            <span className="mr-2">🏠</span>
            Accueil
          </Link>

          <Link
            to="/publier"
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive("/publier") ? "bg-[#D30046] text-white" : "text-gray-600 hover:text-[#D30046] hover:bg-gray-50"
            }`}
          >
            <span className="mr-2">+</span>
            Publier
          </Link>

          <Link
            to="/favoris"
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive("/favoris") ? "bg-[#D30046] text-white" : "text-gray-600 hover:text-[#D30046] hover:bg-gray-50"
            }`}
          >
            <span className="mr-2">❤️</span>
            Favoris
          </Link>

          <Link
            to="/apropos"
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive("/apropos") ? "bg-[#D30046] text-white" : "text-gray-600 hover:text-[#D30046] hover:bg-gray-50"
            }`}
          >
            <span className="mr-2">ℹ️</span>À propos
          </Link>

          <Link
            to="/admin"
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive("/admin") ? "bg-[#D30046] text-white" : "text-gray-600 hover:text-[#D30046] hover:bg-gray-50"
            }`}
          >
            <span className="mr-2">⚙️</span>
            Admin
          </Link>
        </div>
      </div>
    </nav>
  )
}
