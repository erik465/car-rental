import React from "react";
import CarCard from "../CarCard/CarCard";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import { StyledList, StyledContainer, LoadMoreStyled } from "./CarList.styled";

const CarList = () => {
  const cars = useSelector(selectCars);
  return (
    <StyledContainer>
      <StyledList>
        {cars.map((car) => {
          return <CarCard key={car.id} data={car} />;
        })}
      </StyledList>
      <LoadMoreStyled>Load More</LoadMoreStyled>
    </StyledContainer>
  );
};

export default CarList;
