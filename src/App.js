import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar";

// Pages
import Accueil from "./pages/Accueil";
import Publier from "./pages/Publier";
import Details from "./pages/Details";
import Favoris from "./pages/Favoris";
import Apropos from "./pages/Apropos";
import Admin from "./pages/Admin";

// Footer


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        {/* Navbar reste en haut tout le temps */}
        <Navbar />

        {/* Les routes changent le contenu en dessous */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/publier" element={<Publier />} />
            <Route path="/oeuvre/:id" element={<Details />} /> {/* route dynamique */}
            <Route path="/favoris" element={<Favoris />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
