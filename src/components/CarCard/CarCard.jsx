import React from "react";
import {
  StyledCard,
  StyledHeading,
  MainInfo,
  ImageContainer,
  FeaturesText,
  StyledButton,
} from "./CarCard.styled";

const CarCard = ({ data }) => {
  return (
    <StyledCard>
      <ImageContainer
        img={data.img ? data.img : data.photoLink}
      ></ImageContainer>
      <MainInfo>
        <StyledHeading>
          {data.make} <span>{data.model}</span>, {data.year}
        </StyledHeading>
        <p>{data.rentalPrice}</p>
      </MainInfo>
      <FeaturesText>
        <p>{data.address.split(",")[1]}</p>
        <p>{data.address.split(",")[2]}</p>
        <p>{data.rentalCompany}</p>
        <p>{data.type}</p>
        <p>{data.model}</p>
        <p>{data.id}</p>
        <p>{data.accessories[0]}</p>
      </FeaturesText>
      <StyledButton>Learn More</StyledButton>
    </StyledCard>
  );
};

export default CarCard;
