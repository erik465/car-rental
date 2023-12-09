import React from "react";
import CatalogFilters from "../../components/CatalogFilters/CatalogFilters";
import CarList from "../../components/CarList/CarList";
import { StyledContainer } from "./CatalogPage.styled";
import { NavLink } from "react-router-dom";
import { Suspense } from "react";

const CatalogPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StyledContainer>
        <NavLink to="/favorites">Favorites</NavLink>
        <CatalogFilters />
        <CarList />
      </StyledContainer>
    </Suspense>
  );
};

export default CatalogPage;
