import { createSlice } from "@reduxjs/toolkit";
import { loginFuncttion } from "../api/loginApi";
const initialState = {
  data: [],
  error: null,
  success: null,
};
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginFuncttion.fulfilled, (state, action) => {
      state.success = action.payload;
    });
    builder.addCase(loginFuncttion.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
// export const {} = loginSlice.actions;
export default loginSlice.reducer;
