import React from "react";
import CarCard from "../CarCard/CarCard";
import { useSelector } from "react-redux";
import {
  selectCars,
  selectPage,
  selectIsLastPage,
} from "../../redux/selectors";
import { StyledList, StyledContainer, LoadMoreStyled } from "./CarList.styled";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/operations";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import { Suspense } from "react";
import { setCarsItems, setPage } from "../../redux/carsSlice";

const CarList = () => {
  const cars = useSelector(selectCars);
  const page = useSelector(selectPage);
  const isLastPage = useSelector(selectIsLastPage);
  const dispatch = useDispatch();

  useEffect(() => {
    const favouritesList = localStorage.getItem("favourites")
      ? localStorage.getItem("favourites")
      : [];
    console.log(favouritesList);
    if (favouritesList.length === 0) {
      localStorage.setItem("favourites", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    dispatch(setPage(1));
    dispatch(setCarsItems([]));
    dispatch(fetchCars(page));
  }, [dispatch]);

  const handlePageChange = () => {
    dispatch(fetchCars(page));
  };
  return (
    <StyledContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <StyledList>
          {cars.map((car, index) => {
            return <CarCard index={index} data={car} key={nanoid()} />;
          })}
        </StyledList>
        {!isLastPage ? (
          <LoadMoreStyled onClick={handlePageChange}>Load More</LoadMoreStyled>
        ) : null}
      </Suspense>
    </StyledContainer>
  );
};

export default CarList;
