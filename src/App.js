import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Accueil from "./pages/Accueil";
import Publier from "./pages/Publier";
import Details from "./pages/Details";
import Favoris from "./pages/Favoris";
import Apropos from "./pages/Apropos";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar reste en haut */}
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

        {/* Footer reste en bas */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;