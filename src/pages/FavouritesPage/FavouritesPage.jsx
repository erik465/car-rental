import React from "react";
import { StyledContainer, StyledHeading } from "./FavouritesPage.styled";
import FavouritesList from "../../components/FavouritesList/FavouritesList";
import { Suspense } from "react";
const FavouritesPage = () => {
  return (
    <StyledContainer>
      <StyledHeading>
        Your <span>Favourites</span> Page
      </StyledHeading>
      <Suspense fallback={<p>Loading...</p>}>
        <FavouritesList />
      </Suspense>
    </StyledContainer>
  );
};

export default FavouritesPage;
