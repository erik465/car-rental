import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations";

const filtersInitialState = {
  isLoading: false,
  error: null,
  brands: [],
  selectedBrand: "",
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setStatusFilter,
  setPriceFilter,
  setMileageMinFilter,
  setMileageMaxFilter,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
