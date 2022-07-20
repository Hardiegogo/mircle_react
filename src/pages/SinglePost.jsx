import React from "react";
import { useEffect } from "react";
import {useParams} from 'react-router-dom'
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Suggestionbar from "../components/Suggestionbar";
import Post from "../components/Post";
import { getPost } from "../utils/post-utils/post-services";
import { useDispatch,useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
const SinglePost=()=>{
    const {postId}=useParams()
    const dispatch=useDispatch()
    const {selectedPost,postStatus}=useSelector(state=>state.posts)
    useEffect(()=>{
       dispatch(getPost(postId))
    },[postId])
    return <div className="grid grid-rows-rowLayout auto-rows-min min-h-screen bg-bgColor relative">
    <Navbar/>
    <div className="grid grid-cols-colsLayout xl:grid-cols-colsMaxLayout  lg:grid-cols-colslgLayout ">
        <Sidebar/>
        {postStatus!=='fulfilled' ? <ClipLoader className="mx-auto p-4 block mt-10"/>: <Post post={selectedPost} postType="single-post"/>}
        <Suggestionbar/>
    </div>
  </div>;
}

export default SinglePost