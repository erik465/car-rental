import React from "react";
import {
  StyledContainer,
  StyledHeading,
  StyledLink,
  NavContainer,
  StyledImage,
  ImageContainer,
} from "./Homepage.styled";
import { Suspense } from "react";

const Homepage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <StyledContainer>
        <StyledHeading>
          Your <span>Best</span> Car Dealership
        </StyledHeading>
        <ImageContainer>
          <StyledImage
            src="https://imagescdn.dealercarsearch.com/dealerimages/2379/20646/01.jpg"
            alt="Dealership"
          />
        </ImageContainer>
        <NavContainer>
          <StyledLink to="favorites">Your favorites</StyledLink>
          <StyledLink to="catalog">Visit our catalog</StyledLink>
        </NavContainer>
      </StyledContainer>
    </Suspense>
  );
};

export default Homepage;
