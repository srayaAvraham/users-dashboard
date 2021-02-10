import { createSlice } from '@reduxjs/toolkit';
import api from '../../helpers/api';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await api.get('/posts')
  return response.posts
})

export const addNewPost = createAsyncThunk(
  'posts/addNewPost',
  async ({ title, content }) => {
    const response = await client.post('/posts', { title, content })
    return response.post
  }
)

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {

  }, extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.posts = action.payload
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
    [addNewPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload)
    }
  }
});


export const selectAllPosts = state => state.posts.posts

export default postsSlice.reducer;
