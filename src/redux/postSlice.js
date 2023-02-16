import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: { allPosts: null, isFetching: false, error: false },
  },
  reducers: {
    getPostsStart: (state) => {
      state.posts.isFetching = true;
    },
    getPostsSuccess: (state, action) => {
      state.posts.isFetching = false;
      state.posts.allPosts = action.payload;
    },
    getPostsFailed: (state) => {
      state.posts.isFetching = false;
      state.posts.error = true;
    },
  },
});

export const { getPostsStart, getPostsFailed, getPostsSuccess } =
  postSlice.actions;
export default postSlice.reducer;
