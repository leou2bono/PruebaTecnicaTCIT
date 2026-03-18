import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:4000';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
});

export const createPost = createAsyncThunk('posts/createPost', async (post) => {
  const response = await axios.post(`${API_URL}/posts`, post);
  return response.data;
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  const response = await axios.delete(`${API_URL}/posts/${id}`);
  return response.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    filterName: '',
  },
  reducers: {
    setFilterName(state, action) {
      state.filterName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload.id);
      });
  },
});

export const { setFilterName } = postsSlice.actions;
export default postsSlice.reducer;
