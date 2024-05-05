import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./counterSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    counter: reducer,
    user: userReducer,
  },
});
export default store;
