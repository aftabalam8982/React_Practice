import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    try {
      const res = await axios.get(URL);
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isData: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.error = true;
      });
  },
});
console.log(userSlice);
export default userSlice.reducer;
