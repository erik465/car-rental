import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBrands } from "../redux/operations";

const Homepage = lazy(() => import("../pages/Homepage/HomePage"));
const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const FavouritesPage = lazy(() =>
  import("../pages/FavouritesPage/FavouritesPage")
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/favorites" element={<FavouritesPage />} />
    </Routes>
  );
};

export default App;
