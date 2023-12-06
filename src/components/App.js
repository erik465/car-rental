import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Homepage = lazy(() => import("../pages/Homepage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const FavouritesPage = lazy(() =>
  import("../pages/FavouritesPage/FavouritesPage")
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/favorites" element={<FavouritesPage />} />
    </Routes>
  );
};

export default App;
