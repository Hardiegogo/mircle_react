import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getPosts=createAsyncThunk('posts/getPosts',async()=>{
    try {
        const res=await axios.get('/api/posts')
        if(res.status===200){
            return res.data.posts
        }
    } catch (error) {
        console.log('error occured',error)
    }
})

export const getPost=createAsyncThunk('posts/getPost',async(postId)=>{
    try {
        const res=await axios.get(`/api/posts/${postId}`)
        if(res.status===200){
            return res.data.post
        }
    } catch (error) {
        console.log('error occured',error)
    }
})


export const addPost=createAsyncThunk('posts/addPost',async(postData)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const res=await axios({
            method:"POST",
            url:"/api/posts",
            headers:{authorization:encodedToken},
            data:{
                postData
            }

        })
        if(res.status===201){
            return res.data.posts
        }
    } catch (error) {
        console.log('error occured',error)
    }
})

export const deletePost=createAsyncThunk('posts/deletePost',async(id)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const res=await axios({
            method:"DELETE",
            url:`/api/posts/${id}`,
            headers:{authorization:encodedToken},
        })
        if(res.status===201){
            return res.data.posts
        }
    } catch (error) {
        console.log('error occured',error)
    }
})

export const likePost=createAsyncThunk('posts/likePost',async(id)=>{
    const encodedToken=localStorage.getItem('token') 
    try {
        const res=await axios({
            method:"POST",
            url:`/api/posts/like/${id}`,
            headers:{authorization:encodedToken}
        })
        if(res.status===201){ 
            return {posts:res.data.posts,id}
        }
    } catch (error) {
        console.log('error occured', error)
    }
})
export const dislikePost=createAsyncThunk('posts/dislikePost',async(id)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const res=await axios({
            method:"POST",
            url:`/api/posts/dislike/${id}`,
            headers:{authorization:encodedToken}
        })
        if(res.status===201){
            return {posts:res.data.posts,id}
        }
    } catch (error) {
        console.log('error occured', error)
    }
})

export const editPost=createAsyncThunk('posts/editPost',async(postData)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const res=await axios({
            method:"POST",
            url:`/api/posts/edit/${postData._id}`,
            headers:{authorization:encodedToken},
            data:{
                postData
            }
        })
        if(res.status===201){
            return res.data.posts
        }
    } catch (error) {
        console.log('error occured',error)
    }
})

export const addToBookmarks=createAsyncThunk("posts/addToBookmarks",async(postId)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const res=await axios({
            method:"POST",
            url:`/api/users/bookmark/${postId}`,
            headers:{authorization:encodedToken},
        })
        if(res.status===200){
            return res.data.bookmarks
        }
    } catch (error) {
        console.log("error occured",error)
    }
})
export const deleteFromBookmarks=createAsyncThunk("posts/deleteFromBookmarks",async(postId)=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const res=await axios({
            method:"POST",
            url:`/api/users/remove-bookmark/${postId}`,
            headers:{authorization:encodedToken},
        })
        if(res.status===200){
            return res.data.bookmarks
        }
    } catch (error) {
        console.log("error occured",error)
    }
})

export const getBookmarks=createAsyncThunk("posts/getBookmarks",async()=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const res=await axios({
            method:"GET",
            url:"/api/users/bookmark/",
            headers:{authorization:encodedToken}
        })
        if(res.status===200){
            return res.data.bookmarks
        }
    } catch (error) {
        console.log("error occured",error)
    }
})

export const getComments=createAsyncThunk("posts/getComments",async(id)=>{
    try {
        const res=await axios({
            method:"GET",
            url:`/api/comments/${id}`
        })
        if(res.status===200){
            return res.data.comments
        }
    } catch (error) {
        console.log("error occured",error)
    }
})

export const addComment=createAsyncThunk("posts/addComment",async({commentData,postId})=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const res=await axios({
            method:"POST",
            url:`/api/comments/add/${postId}`,
            headers:{authorization:encodedToken},
            data:{
                commentData
            }
            
        })
        if(res.status===201){
            return res.data.comments
        }
    } catch (error) {
        console.log("error occured", error)
    }
})

export const deleteComment=createAsyncThunk("posts/deleteComment",async({postId,commentId})=>{
    const encodedToken=localStorage.getItem('token')
    try {
        const res=await axios({
            method:"POST",
            url:`/api/comments/delete/${postId}/${commentId}`,
            headers:{authorization:encodedToken}
        })
        if(res.status===201){
            return res.data.comments
        }
    } catch (error) {
        console.log("error occured", error)
    }
})