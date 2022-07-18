import React,{useState,useRef} from "react";
import { useSelector,useDispatch } from "react-redux";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { postModalOff } from "../redux/features/postSlice";
import { addPost, editPost } from "../utils/post-utils/post-services";
const calculateContent=(selectedPost)=>{
  if(Object.keys(selectedPost).length===0 && selectedPost.constructor===Object){
    return ''
  }else return selectedPost.content
}

const PostModal=()=>{
    
    const user = useSelector((state) => state.auth.loggedInUser);
    const selectedPost=useSelector(state=>state.posts.selectedPost)
    const refr=useRef(null)
    const [content,setContent]=useState(calculateContent(selectedPost))
    
    const dispatch=useDispatch()
    const clickHandler=()=>{
        if(content){
          if(!selectedPost){
          const post={content,comments:[],userProfile:user.userProfile}
            setContent('')
            dispatch(addPost(post))
            dispatch(postModalOff())
          }else {
          const post={content,comments:[],userProfile:user.userProfile,_id:selectedPost._id}
            setContent('')
            dispatch(editPost(post))
            dispatch(postModalOff())
          }
        
        }
    }
    useOutsideClick(refr,()=>dispatch(postModalOff()))
    return (
      <div className="fixed min-h-screen min-w-[100vw] top-0 left-0 grid place-items-center bg-[rgba(0,0,0,0.5)] z-20" >
        <div ref={refr}className="border-solid border-2 border-black bg-lightOrange p-6 rounded shadow-neu w-fit min-w-[30rem] sm:min-w-[20rem]  h-fit">
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
            {calculateContent(selectedPost) ? 'Edit post': 'Add post'}
          </button>
      </div>
      </div>
    );
}

export default PostModal