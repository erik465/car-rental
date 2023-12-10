import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBrands } from "../redux/operations";
import { Suspense } from "react";

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
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavouritesPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
