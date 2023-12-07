import React from "react";
import CatalogFilters from "../../components/CatalogFilters/CatalogFilters";
import CarList from "../../components/CarList/CarList";
import { StyledContainer } from "./CatalogPage.styled";

const CatalogPage = () => {
  return (
    <StyledContainer>
      <CatalogFilters />
      <CarList />
    </StyledContainer>
  );
};

export default CatalogPage;
