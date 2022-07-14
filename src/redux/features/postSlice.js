import { createSlice } from "@reduxjs/toolkit";
import { getPosts, getPost,addPost,deletePost, likePost, dislikePost, editPost } from "../../utils/post-utils/post-services";


const initialState = {
  posts: [],
  selectedPost: {},
  isModalOpen:false
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postModalOn:(state)=>{
      state.isModalOpen=true
    },
    postModalOff:(state)=>{
      state.isModalOpen=false
    },
    setSelectedPost:(state,{payload})=>{
      state.selectedPost=payload
    }
  },
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
    },
    [editPost.fulfilled]:(state,{payload})=>{
      state.posts=payload
    } 
  },
});

export const {postModalOn,postModalOff,setSelectedPost}=postSlice.actions

export default postSlice.reducer;
