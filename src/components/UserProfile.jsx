import React,{useState} from 'react'
import {followUser, getUser, unfollowUser} from "../utils/user-utils/user-services"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ClipLoader} from 'react-spinners'
import PostsList from './PostsList'
import EditProfileModal from './EditProfileModal';
import { logoutUser } from '../redux/features/authSlice';
import {useNavigate} from 'react-router-dom'
import { clearUsers } from '../redux/features/userSlice';

const calcIsFollowed=(usertoCheck,currentUser)=>{
    const result=currentUser.following?.find(user=>user.username===usertoCheck.username)
    return result ? true : false
}

const UserProfile=({userId})=> {
    const {selectedUser,currentUser}=useSelector(state=>state.users)
    let userToShow
    if(userId===currentUser._id){
        userToShow=currentUser
    }else userToShow=selectedUser
    const isFollowed=calcIsFollowed(selectedUser,currentUser)
    const {userProfile,firstName,lastName,username,description,portfolioLink,followers,following,_id}=userToShow
    const [isLoading,setIsLoading]=useState(true)
    const [isModalOpen,setIsModalOpen]=useState(false)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getUser({userId,setIsLoading}))
    },[userId,dispatch])
    const [isFollowLoading,setIsFollowLoading]=useState(false)
    const clickHandler=()=>{
        if(!isFollowLoading){
            setIsFollowLoading(true)
            if(isFollowed){
                dispatch(unfollowUser({_id,setIsFollowLoading}))
            }else{
                dispatch(followUser({_id,setIsFollowLoading}))
            }
        }
    }
    const logoutHandler=()=>{
        dispatch(logoutUser({navigate}))
        dispatch(clearUsers())
    }
  return (
    <div className='p-4 font-sans'>
        <div className='p-4 text-center'>            
            {isLoading ? <ClipLoader/>: 
            <div className='p-4 flex justify-center flex-col items-center'>
                <img className='rounded-full w-40 h-40 object-cover ' src={userProfile} alt="" />
                <h2 className='text-xl font-semibold mt-2'>{firstName + ' ' + lastName}</h2>
                <h3 className='text-gray-500 font-medium'>@{username}</h3>
                {currentUser===userToShow ? <div className='flex flex-col '><button className='p-2 shadow-neu border-black border-2 my-2 bg-white' onClick={()=>setIsModalOpen(true)}>Edit profile</button><button className='p-2 shadow-neu border-black border-2 my-2 bg-red-500 text-white' onClick={logoutHandler}>Logout</button> </div>: <button className='p-2 shadow-neu border-black border-2 my-2 bg-white' onClick={clickHandler}>{isFollowed? "Followed": "Follow"}</button>}
                <p>{description}</p>
                {portfolioLink && <a href={portfolioLink} className="text-primary">Portfolio</a>}
        </div>}
        <div className='bg-white flex p-4 w-fit mx-auto gap-6 border-2 border-black shadow-neu'>
            <div className='text-lg font-medium'>
                <h2>{followers?.length}</h2>
                <h2>Followers</h2>
            </div>
            <div className='text-lg font-medium'>
                <h2>{following?.length}</h2>
                <h2>Following</h2>
            </div>
        </div>
        </div>
        <div className='mt-4'>
            <PostsList feedType="profile-feed"/>
        </div>
    {isModalOpen && <EditProfileModal setIsModalOpen={setIsModalOpen}/>}
    </div>
  )
}

export default UserProfile