import { createSlice } from "@reduxjs/toolkit";
import { getPosts, getPost,addPost,deletePost, likePost, dislikePost, editPost, addToBookmarks, deleteFromBookmarks, getBookmarks } from "../../utils/post-utils/post-services";


const initialState = {
  posts: [],
  selectedPost: {},
  bookmarks:[],
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
    },
    updatePosts:(state,{payload})=>{
      state.posts=payload
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
    },
    [getBookmarks.fulfilled]:(state,{payload})=>{
      state.bookmarks=payload
    },
    [addToBookmarks.fulfilled]:(state,{payload})=>{
      state.bookmarks=payload
    },
    [deleteFromBookmarks.fulfilled]:(state,{payload})=>{
      state.bookmarks=payload
    } 
  },
});

export const {postModalOn,postModalOff,setSelectedPost,updatePosts}=postSlice.actions

export default postSlice.reducer;
