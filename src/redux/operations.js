import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6511877a829fa0248e404647.mockapi.io/api";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/cars");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
