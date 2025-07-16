import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../../login/features/reducer/loginSlice";
export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
