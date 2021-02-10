import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../helpers/api";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await api.get("/post");
  console.log(response);
  return response.data;
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async ({ title, content }) => {
    const response = await api.post("/post", { title, content });
    return response.data.post;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      console.log("dsfsfs");
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [addNewPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
