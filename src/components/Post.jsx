import React,{useState,useRef} from 'react'
import {AiOutlineHeart,AiFillDelete,AiFillHeart,AiFillEdit} from 'react-icons/ai'
import {BsBookmark,BsThreeDotsVertical,BsBookmarkFill} from 'react-icons/bs'
import {GoComment} from 'react-icons/go'
import { useSelector,useDispatch } from 'react-redux'
import { postModalOn, setSelectedPost } from '../redux/features/postSlice'
import { addComment, addToBookmarks, deleteFromBookmarks, deletePost, dislikePost, getComments, getPost, likePost } from '../utils/post-utils/post-services'
import { useOutsideClick } from '../hooks/useOutsideClick' 

import CommentSection from './CommentSection'
const isLikedCalculator=(likedBy,username)=>{
    const result=likedBy?.find(user=>user.username===username)
    return result ? true : false
}
const isBookmarkedCalculator=(bookmarks,_id)=>{
    const result=bookmarks?.find(bookmark=>bookmark._id===_id)
    return result ? true : false
}

const Post=({post,postType})=> {
    const {username,content,likes,comments,userProfile,_id}=post
    const user = useSelector(state=>state.auth.loggedInUser)
    const [isLiked,setIsLiked]=useState(isLikedCalculator(likes?.likedBy,user.username))
    const [isCommentsOn,setIsCommentsOn]=useState((postType ? true : false))
    const bookmarks=useSelector(state=>state.posts.bookmarks)
    const [isBookmarked,setIsBookmarked]=useState(isBookmarkedCalculator(bookmarks,post._id))
    const dispatch=useDispatch()
    const refr=useRef()
    useOutsideClick(refr,()=>setIsDropMenu(false))
    const isSameUser=user.username===username
    const {likeCount}=likes
    const [isDropMenu,setIsDropMenu]=useState(false)
    const [isDeleted,setIsDeleted]=useState(false)
    const deleteClickHandler=()=>{
        if(!isDeleted){
        dispatch(deletePost(_id))
        }
        setIsDeleted(true)
    }
    const likeClickHandler=()=>{
        if(!isLiked){
            dispatch(likePost(_id))

        }else{
            dispatch(dislikePost(_id))
        }
        setIsLiked(!isLiked)
    }
    const editHandler=()=>{
        dispatch(setSelectedPost(post))
        dispatch(postModalOn())
    }
    const bookmarkClickHandler=()=>{
        if(!isBookmarked){
            dispatch(addToBookmarks(_id))
        }else{
            dispatch(deleteFromBookmarks(_id))
        }setIsBookmarked(!isBookmarked)
    }
    
  return (
    <div className='bg-white border-black border-2 rounded shadow-neu p-4 font-sans m-2 mb-24'>
        <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
            <img className="w-12 rounded-full object-cover h-12 " src={userProfile} alt="" />
            <h3 className='font-semibold'>@{username}</h3>
        </div>
        <div className='relative'>
            {isSameUser && <BsThreeDotsVertical onClick={()=>setIsDropMenu(!isDropMenu)} className='cursor-pointer' size={25}/>}
            {isDropMenu && 
                <ul className='absolute right-4 bg-bgColor rounded' ref={refr} >
                    <li onClick={deleteClickHandler} className='whitespace-nowrap flex items-center p-2 cursor-pointer rounded gap-1 hover:bg-lightOrange '><AiFillDelete size={20}/>Delete post</li>
                    <li onClick={editHandler} className='whitespace-nowrap flex items-center p-2 cursor-pointer rounded gap-1 hover:bg-lightOrange '><AiFillEdit size={20}/>Edit post</li>

                </ul>
            } 
        </div>
        </div>
        <div className='p-2'>
            {content}
        </div>
        <div className='flex p-2 justify-between'>
            <ul className='flex gap-2'>
                <li className='flex items-center cursor-pointer ' onClick={likeClickHandler}>
                    {isLiked ? <AiFillHeart size={25} />  : <AiOutlineHeart size={25}/>}<p className='text-gray-600 ml-1'>{likeCount}</p>
                </li>
                <li className='flex items-center cursor-pointer' onClick={()=>setIsCommentsOn(!isCommentsOn)}>
                    <GoComment size={20}/> <p className='text-gray-600 ml-1' >{comments?.length}</p>                   
                </li>
            </ul>
            <div className='cursor-pointer' onClick={bookmarkClickHandler}>
                {!isBookmarked ? <BsBookmark size={20}/> : <BsBookmarkFill size={20}/>}
            </div>
        </div>
        {isCommentsOn && <CommentSection postId={post._id} postType={postType}/>}
    </div>
  )
}

export default Post