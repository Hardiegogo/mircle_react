import { createSlice } from "@reduxjs/toolkit";
import { getPosts, getPost,addPost,deletePost, likePost, dislikePost } from "../../utils/post-utils/post-services";


const initialState = {
  posts: [],
  selectedPost: {},
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload;
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.selectedPost = payload;
    },
    [addPost.fulfilled]:(state,{payload})=>{
        state.posts=payload
    },
    [deletePost.fulfilled]:(state,{payload})=>{
        state.posts=payload
    },
    [likePost.fulfilled]:(state,{payload})=>{
      state.posts=payload
    },
    [dislikePost.fulfilled]:(state,{payload})=>{
      state.posts=payload
    }
  },
});

export default postSlice.reducer;
