import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6511877a829fa0248e404647.mockapi.io/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get("/cars", {
        params: { page: page, limit: 12 },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchBrands = createAsyncThunk(
  "filters/fetchBrands",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/brands");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
