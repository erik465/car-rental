import React from "react";
import { StyledContainer, StyledHeading } from "./FavouritesPage.styled";
import FavouritesList from "../../components/FavouritesList/FavouritesList";
import { Suspense } from "react";
import { NavLink } from "react-router-dom";

const FavouritesPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <StyledContainer>
        <StyledHeading>
          <NavLink to="/catalog">Back to catalog</NavLink>
          Your <span>Favourites</span> Page
        </StyledHeading>
        <Suspense fallback={<p>Loading...</p>}>
          <FavouritesList />
        </Suspense>
      </StyledContainer>
    </Suspense>
  );
};

export default FavouritesPage;
