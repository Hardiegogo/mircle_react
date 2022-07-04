import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addPost } from "../utils/post-utils/post-services";


const PostSection = () => {
    const user = useSelector((state) => state.auth.loggedInUser);
    const [content,setContent]=useState('')
    const dispatch=useDispatch()
    const clickHandler=()=>{
        const post={content,comments:[],userProfile:user.userProfile}
        setContent('')
        dispatch(addPost(post))
    }
    return (
      <div>
        <div className="flex gap-2">
          <img
            className="w-12 rounded-full object-cover h-12 "
            src={user.userProfile}
            alt=""
          />
  
          <textarea
            className="w-full mx-auto h-40 block pl-4 p-4 resize-none rounded border-black border-2 shadow-neu"
            placeholder="What's on your mind?" value={content}
            onChange={(e)=>setContent(e.target.value)}
          ></textarea>
        </div>
        <button onClick={clickHandler} className="bg-primary block ml-auto text-white px-4 p-2 border-black border-solid border-2 shadow-neu mt-6">
            Add post
          </button>
      </div>
    );
  };

export default PostSection