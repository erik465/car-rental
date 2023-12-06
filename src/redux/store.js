import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./carsSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    carsReducer,
    filtersReducer,
  },
});
