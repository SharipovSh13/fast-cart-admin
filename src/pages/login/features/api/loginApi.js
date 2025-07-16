import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApiURL } from "../../../provider/axiosApi/api";
import { addToken } from "../../../provider/tokenAPI//api";
export const loginFuncttion = createAsyncThunk(
  "login/loginFuncttion",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axiosApiURL.post(`/Account/login`, user);
      addToken(data.data);
      return data.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(
        error.response?.data || { message: "Ошибка при входе" }
      );
    }
  }
);
