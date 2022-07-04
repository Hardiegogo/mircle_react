import React from "react";
import Navbar from "../components/Navbar";
import PostsList from "../components/PostsList";
import Sidebar from "../components/Sidebar";
import Suggestionbar from "../components/Suggestionbar";

const Feed = () => {
  return <div className="grid grid-rows-rowLayout auto-rows-min min-h-screen bg-bgColor relative">
    <Navbar/>
    <div className="grid grid-cols-colsLayout xl:grid-cols-colsMaxLayout  lg:grid-cols-colslgLayout ">
        <Sidebar/>
        <PostsList/>
        <Suggestionbar/>
    </div>
  </div>;
};

export default Feed;
