import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  brand: "",
  price: undefined,
  mileage: {
    from: undefined,
    to: undefined,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setBrandFilter(state, action) {
      state.brand = action.payload;
    },
    setPriceFilter(state, action) {
      state.price = action.payload;
    },
    setMileageMinFilter(state, action) {
      state.mileage.from = action.payload;
    },
    setMileageMaxFilter(state, action) {
      state.mileage.to = action.payload;
    },
  },
});

export const {
  setStatusFilter,
  setPriceFilter,
  setMileageMinFilter,
  setMileageMaxFilter,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
