import React from "react";
import CarCard from "../CarCard/CarCard";
import { useSelector } from "react-redux";
import {
  selectCars,
  selectPage,
  selectIsLastPage,
  selectBrandFilter,
} from "../../redux/selectors";
import { StyledList, StyledContainer, LoadMoreStyled } from "./CarList.styled";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/operations";
import { useEffect } from "react";
import { nanoid } from "nanoid";

const getFilteredCars = (cars, filters) => {
  if (filters.brand) {
    const filteredArray = cars.filter((car) => car.make === filters.brand);
    return filteredArray;
  }
  return cars;
};

const CarList = () => {
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);
  const brandFilter = useSelector(selectBrandFilter);
  const isLastPage = useSelector(selectIsLastPage);
  const dispatch = useDispatch();

  const visibleCars = getFilteredCars(cars, { brand: brandFilter });

  useEffect(() => {
    dispatch(fetchCars(1));
  }, [dispatch]);

  const handlePageChange = () => {
    dispatch(fetchCars(page));
  };
  return (
    <StyledContainer>
      <StyledList>
        {visibleCars.map((car) => {
          return <CarCard key={nanoid()} data={car} />;
        })}
      </StyledList>
      {!isLastPage ? (
        <LoadMoreStyled onClick={handlePageChange}>Load More</LoadMoreStyled>
      ) : null}
    </StyledContainer>
  );
};

export default CarList;
