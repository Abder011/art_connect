import React from "react";
import Footer from "../components/Footer";

export default function Accueil() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <h1>Accueil</h1>
      </div>
      <Footer />
    </div>
  );
}
