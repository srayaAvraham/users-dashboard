import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../helpers/api";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await api.get("/post");
  return response.data;
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async ({ title, description, content }) => {
    const response = await api.post("/post", { title, description, content });
    return response.data.post;
  }
);

export const getPostById = createAsyncThunk(
  "posts/getPostById",
  async ({ id }) => {
    const response = await api.get(`/post/${id}`);
    return response.data;
  }
);

export const addPermission = createAsyncThunk(
  "posts/addPermission",
  async ({ id, userToAllow }) => {
    const response = await api.put("/post/permission", { id, userToAllow });
    return response.data;
  }
);
export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    byId: null,
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
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [addNewPost.fulfilled]: (state, action) => {
      state.posts = [action.payload].concat(state.posts);
    },
    [getPostById.fulfilled]: (state, action) => {
      state.byId = action.payload;
    },
  },
});

export const selectAllPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
