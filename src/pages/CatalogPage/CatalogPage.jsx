import React from "react";
import CatalogFilters from "../../components/CatalogFilters/CatalogFilters";
import CarList from "../../components/CarList/CarList";
import { StyledContainer } from "./CatalogPage.styled";
import { NavLink } from "react-router-dom";

const CatalogPage = () => {
  return (
    <StyledContainer>
      <NavLink to="/favorites">Favorites</NavLink>
      <CatalogFilters />
      <CarList />
    </StyledContainer>
  );
};

export default CatalogPage;
