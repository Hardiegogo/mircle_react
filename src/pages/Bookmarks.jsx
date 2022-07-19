import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import PostsList from '../components/PostsList'
import Suggestionbar from '../components/Suggestionbar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBookmarks } from '../utils/post-utils/post-services'

const Bookmarks=()=> {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getBookmarks())
  },[dispatch])
  return <div className="grid grid-rows-rowLayout auto-rows-min min-h-screen bg-bgColor relative">
    <Navbar/>
    <div className="grid grid-cols-colsLayout xl:grid-cols-colsMaxLayout  lg:grid-cols-colslgLayout ">
        <Sidebar/>
        <PostsList feedType="bookmarks"/>
        <Suggestionbar/>
    </div>
  </div>;
  
}

export default Bookmarks