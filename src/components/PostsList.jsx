import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import PostSection from "./PostSection";
import { calcSortedPosts } from "../utils/post-utils/calcSortedPosts";
const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const [sortBy,setSortBy]=useState('')
  const sortedPosts=calcSortedPosts(posts,sortBy)
  const changeHandler=(e)=>{
    setSortBy(e.target.value)
  }
  return (
    <div className="font-sans  m-8 lg:m-4 lg:mb-24">
      <PostSection />
      <div className="flex justify-between">
      <h2 className=" font-bold text-xl mt-8">Posts</h2>
      <div>
      <h2 className=" font-bold text-lg mt-8">Sort by:</h2>
        <select onChange={changeHandler} className="bg-secondary text-white border-black border-2 shadow-neu p-1">
          <option value="Recent posts">Recent posts</option>
          <option value="Older posts">Older posts</option>
          <option value="Trending posts">Trending posts</option>
        </select>
      </div>
      </div>
      <div className="p-8 flex flex-col gap-4">
        {sortedPosts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
