import React,{useState} from 'react'
import {AiOutlineHeart,AiFillDelete,AiFillHeart} from 'react-icons/ai'
import {BsBookmark,BsThreeDotsVertical} from 'react-icons/bs'
import {GoComment} from 'react-icons/go'
import { useSelector,useDispatch } from 'react-redux'
import { deletePost, dislikePost, likePost } from '../utils/post-utils/post-services'

const isLikedCalculator=(likedBy,username)=>{
    const result=likedBy.find(user=>user.username===username)
    return result ? true : false
}

const Post=({post:{username,content,likes,comments,userProfile,_id}})=> {
    const user = useSelector(state=>state.auth.loggedInUser)
    const [isLiked,setIsLiked]=useState(isLikedCalculator(likes.likedBy,user.username))
    const dispatch=useDispatch()
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
    
  return (
    <div className='bg-white border-black border-2 rounded shadow-neu p-4 font-sans'>
        <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
            <img className="w-12 rounded-full object-cover h-12 " src={userProfile} alt="" />
            <h3 className='font-semibold'>@{username}</h3>
        </div>
        <div className='relative'>
            {isSameUser && <BsThreeDotsVertical onClick={()=>setIsDropMenu(!isDropMenu)} className='cursor-pointer' size={25}/>}
            {isDropMenu && 
                <ul className='absolute right-4 bg-bgColor rounded' >
                    <li onClick={deleteClickHandler} className='whitespace-nowrap flex items-center p-2 cursor-pointer rounded gap-1 hover:bg-lightOrange '><AiFillDelete size={20}/>Delete post</li>
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
                <li className='flex items-center cursor-pointer'>
                    <GoComment size={20}/> <p className='text-gray-600 ml-1' >{comments.length}</p>                   
                </li>
            </ul>
            <div className='cursor-pointer'>
                <BsBookmark size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Post