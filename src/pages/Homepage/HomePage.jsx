import React from "react";
import { StyledContainer, StyledHeading, StyledLink } from "./Homepage.styled";
import { Suspense } from "react";

const Homepage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StyledContainer>
        <StyledHeading>
          Your <span>Best</span> Car Dealership
        </StyledHeading>
        <StyledLink to="favorites">Your favorites</StyledLink>
        <StyledLink to="catalog">Visit our catalog</StyledLink>
      </StyledContainer>
    </Suspense>
  );
};

export default Homepage;
