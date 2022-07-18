import React from "react";
import { useState } from "react";
import { useSelector} from "react-redux";
import Post from "./Post";
import PostSection from "./PostSection";
import { calcSortedPosts } from "../utils/post-utils/calcSortedPosts";
import { compose,filterByFollowing } from "../utils/post-utils/filterByFollowing";


const PostsList = ({feedType}) => {
  const posts = useSelector((state) => state.posts.posts);
  const {currentUser,selectedUser}=useSelector(state=>state.users)
  console.log(currentUser)
  const [sortBy,setSortBy]=useState('')
  const sortedPosts=compose(filterByFollowing,calcSortedPosts)({posts,sortBy,feedType,currentUser,selectedUser})
  const changeHandler=(e)=>{
    setSortBy(e.target.value)
  }
  return (
    <div className="font-sans  m-8 lg:m-4 lg:mb-24">
      {!feedType && <PostSection />}
      <div className="flex justify-between">
      <h2 className=" font-bold text-xl mt-8">Posts</h2>
      {!feedType && <div>
      <h2 className=" font-bold text-lg mt-8">Sort by:</h2>
        <select onChange={changeHandler} className="bg-secondary text-white border-black border-2 shadow-neu p-1">
          <option value="Recent posts">Recent posts</option>
          <option value="Older posts">Older posts</option>
          <option value="Trending posts">Trending posts</option>
        </select>
      </div>}
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
