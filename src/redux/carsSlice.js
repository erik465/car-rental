import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchFilteredCars } from "./operations";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    isLastPage: false,
  },
  reducers: {
    setCarsItems(state, action) {
      state.items = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
        state.page++;
        state.isLastPage = action.payload.length === 12 ? false : true;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilteredCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.page++;
        state.isLastPage = action.payload.length === 12 ? false : true;
      })
      .addCase(fetchFilteredCars.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setCarsItems, setPage } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
