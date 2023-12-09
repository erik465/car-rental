import React from "react";
import CarCard from "../CarCard/CarCard";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";
import { StyledList, StyledContainer } from "./FavouritesList.styled";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import { fetchCars } from "../../redux/operations";
import { useDispatch } from "react-redux";

const FavouritesList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const favouritesList = cars.filter((car) => {
    const storage = JSON.parse(localStorage.getItem("favourites"));
    if (storage.some((obj) => JSON.stringify(obj) === JSON.stringify(car))) {
      return car;
    }
    return null;
  });

  useEffect(() => {
    const favouritesList = localStorage.getItem("favourites")
      ? localStorage.getItem("favourites")
      : [];
    if (favouritesList.length === 0) {
      localStorage.setItem("favourites", JSON.stringify([]));
    }
  }, []);

  return (
    <StyledContainer>
      {favouritesList.length > 0 ? (
        <StyledList>
          {favouritesList.map((car, index) => {
            return <CarCard index={index} data={car} key={nanoid()} />;
          })}
        </StyledList>
      ) : (
        <p>You have no favourites stored</p>
      )}
    </StyledContainer>
  );
};

export default FavouritesList;
