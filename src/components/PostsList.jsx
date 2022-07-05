import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import PostSection from "./PostSection";
const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const sortedPosts=[...posts].sort((a,b)=>{
    const aDate=new Date(a.createdAt)
    const bDate=new Date(b.createdAt)
    return bDate-aDate
  })

  return (
    <div className="font-sans  m-8 lg:m-4 lg:mb-24">
      <PostSection />
      <h2 className=" font-bold text-xl mt-8">Latest posts</h2>
      <div className="p-8 flex flex-col gap-4">
        {sortedPosts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
