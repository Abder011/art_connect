import React from "react";
import FavorisItem from "./FavorisItem";

export default function FavorisListe({ favoris, onRemove }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {favoris.map((item) => (
        <FavorisItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
}