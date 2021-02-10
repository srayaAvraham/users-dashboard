import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../helpers/api';

export const login = createAsyncThunk("user/login", async ({ email, password }) => {
  const res = await api.post('/auth/signin', { email, password })
  console.log(res)
  return res.data;
});


export const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    error: null,
    user: null,
  },
  reducers: {
    logout: (state, action) => {
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
      localStorage.setItem("token", action.payload.accessToken)
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    }
  },
});

export const {} = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectStatus = state => state.user.status;
export const selectError = state => state.user.error;

export default userSlice.reducer;
