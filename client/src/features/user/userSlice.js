import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("user/login", async () => {
  // const res = await api.post('/api/auth/login/', { username, password })
  return "herf374tr873uhf273yr3r2uf";
});

export const signup = createAsyncThunk(
  "user/signup",
  async ({ username, email, password }) => {
    // const res = await api.post('/api/auth/signup/', { username, password })
    return "signup";
  }
);

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
    },
    [login.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const {} = userSlice.actions;

export const selectCount = (state) => state.counter.value;

export default userSlice.reducer;
