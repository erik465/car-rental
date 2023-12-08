import React from "react";
import { StyledContainer, StyledHeading } from "./FavouritesPage.styled";
import CarList from "../../components/CarList/CarList";

const FavouritesPage = () => {
  return (
    <StyledContainer>
      <StyledHeading>
        Your <span>Favourites</span> Page
      </StyledHeading>
      <CarList />
    </StyledContainer>
  );
};

export default FavouritesPage;
