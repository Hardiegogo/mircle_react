import React from 'react'
import {ImHome,ImRocket,ImProfile,ImBookmark} from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'
import { postModalOn, setSelectedPost } from '../redux/features/postSlice'
import {NavLink} from 'react-router-dom'
const Sidebar=()=> {
  const dispatch=useDispatch()
  const {loggedInUser}=useSelector(state=>state.auth)
  const clickHandler=()=>{
    dispatch(setSelectedPost(''))
    dispatch(postModalOn())
  }
  return (
    <div className='bg-lightOrange border-black border-2 shadow-neu rounded-lg w-fit p-8 m-8 font-sans min-w-[80%] text-black h-fit sticky top-24 lg:min-w-[100%] lg:mx-auto lg:m-0 lg:p-4 lg:pb-6 lg:fixed lg:top-[calc(100vh-4.6rem)] lg:rounded-none lg:bottom-0  z-20'>
        <ul className='flex flex-col gap-6 lg:flex-row flex-wrap lg:justify-between'>
            <NavLink to='/feed'className='flex gap-2 items-center cursor-pointer lg:order-1'> <ImHome size={32}/> <h3 className='font-bold text-lg lg:hidden' >Feed</h3></NavLink>
            <NavLink to='/explore'className='flex gap-2 items-center cursor-pointer lg:order-2'> <ImRocket size={32}/> <h3 className='font-bold text-lg lg:hidden' >Explore</h3></NavLink>
            <NavLink to='/bookmarks' className='flex gap-2 items-center cursor-pointer lg:order-4'> <ImBookmark size={32}/> <h3 className='font-bold text-lg lg:hidden' >Bookmarks</h3></NavLink>
            <NavLink to={`/user/${loggedInUser._id}`} className='flex gap-2 items-center cursor-pointer lg:order-5'> <ImProfile size={32}/> <h3 className='font-bold text-lg lg:hidden' >Profile</h3></NavLink>
            <li className='lg:order-3 mx-auto lg:mx-0'>
            <button onClick={clickHandler} className="bg-primary inline-block text-white px-4 p-2 border-black border-solid border-2 shadow-neu  lg:text-xl">
          <span className='lg:hidden'>Create a new post</span> +
        </button>
            </li>
        </ul>
        
    </div>
  )
}


export default Sidebar