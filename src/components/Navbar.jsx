import React from "react";
import { HomeIcon, PlusIcon, HeartIcon, InformationCircleIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
   <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2 ">
          <span className="font-bold text-lg ml-18">
            ArtConnect <span className="text-pink-600">Maroc</span>
          </span>
        </div>

        {/* Menu */}
        <nav className="flex items-center space-x-6 text-gray-700">
          {/* Accueil */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-2 bg-pink-600 text-white px-3 py-1.5 rounded-lg shadow-sm"
                : "flex items-center space-x-2 hover:text-pink-600"
            }
          >
            <HomeIcon className="w-5 h-5" />
            <span>Accueil</span>
          </NavLink>

          {/* Publier */}
          <NavLink
            to="/publier"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-2 text-pink-600 font-semibold"
                : "flex items-center space-x-2 hover:text-pink-600"
            }
          >
            <PlusIcon className="w-5 h-5" />
            <span>Publier</span>
          </NavLink>

          {/* Favoris */}
          <NavLink
            to="/favoris"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-2 text-pink-600 font-semibold"
                : "flex items-center space-x-2 hover:text-pink-600"
            }
          >
            <HeartIcon className="w-5 h-5" />
            <span>Favoris</span>
          </NavLink>

          {/* À propos */}
          <NavLink
            to="/apropos"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-2 text-pink-600 font-semibold"
                : "flex items-center space-x-2 hover:text-pink-600"
            }
          >
            <InformationCircleIcon className="w-5 h-5" />
            <span>À propos</span>
          </NavLink>

          {/* Admin */}
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive
                ? "flex items-center space-x-2 text-pink-600 font-semibold"
                : "flex items-center space-x-2 hover:text-pink-600 mr-30"
            }
          >
            <Cog6ToothIcon className="w-5 h-5" />
            <span>Admin</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
