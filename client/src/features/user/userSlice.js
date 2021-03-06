import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../helpers/api";

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/signin", { email, password });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    error: null,
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectStatus = (state) => state.user.status;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
