import { createSlice } from "@reduxjs/toolkit";
import { getPosts, getPost,addPost,deletePost, likePost, dislikePost, editPost, addToBookmarks, deleteFromBookmarks, getBookmarks, getComments, addComment, deleteComment } from "../../utils/post-utils/post-services";


const initialState = {
  posts: [],
  selectedPost: {},
  bookmarks:[],
  commentState:"idle",
  postStatus:"idle",
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
    [getPost.pending]: (state, { payload }) => {
      state.postStatus='loading'
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.postStatus='fulfilled'
      state.selectedPost = payload;
    },
    [addPost.fulfilled]:(state,{payload})=>{
        state.posts=payload
    },
    [deletePost.fulfilled]:(state,{payload})=>{
        state.posts=payload
    },
    [likePost.fulfilled]:(state,{payload})=>{
      const{posts,id}=payload
      const likedPost=posts.find(post=>post._id===id)
      const newBookmarks=state.bookmarks.map(bookmark=>{
        if(likedPost._id===id){
          return likedPost
        }else return bookmark
      })
      return {
        ...state,
        posts:posts,
        bookmarks:newBookmarks
      }
      
    },
    [dislikePost.fulfilled]:(state,{payload})=>{
      const{posts,id}=payload
      const dislikedPost=posts.find(post=>post._id===id)
      const newBookmarks=state.bookmarks.map(bookmark=>{
        if(dislikedPost._id===id){
          return dislikedPost
        }else return bookmark
      })
      return {
        ...state,
        posts:posts,
        bookmarks:newBookmarks
      }
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
    },
    [getComments.pending]:(state)=>{
      state.commentState='loading'
    }, 
    [getComments.fulfilled]:(state,{payload})=>{
      state.commentState='fulfilled'
      state.selectedPost.comments=payload
    },
    [addComment.fulfilled]:(state,{payload})=>{
      const updatedPost=state.posts.find(post=>post._id===state.selectedPost._id)
      updatedPost.comments=payload
      state.selectedPost.comments=payload
    },
    [deleteComment.pending]:(state)=>{
      state.commentState='loading'
    },
    [deleteComment.fulfilled]:(state,{payload})=>{
      state.commentState='fulfilled'
      const updatedPost=state.posts.find(post=>post._id===state.selectedPost._id)
      updatedPost.comments=payload
      state.selectedPost.comments=payload
    },

  },
});

export const {postModalOn,postModalOff,setSelectedPost,updatePosts}=postSlice.actions

export default postSlice.reducer;
