import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { followUser, unfollowUser } from '../utils/user-utils/user-services'

const calcIsFollowed=(usertoCheck,currentUser)=>{
    const result=currentUser.following.find(user=>user.username===usertoCheck.username)
    return result ? true : false
}

const ProfileChip=({user})=>{
    const {userProfile,username,_id} = user
    const currentUser=useSelector(state=>state.users.currentUser)
    const isFollowed=calcIsFollowed(user,currentUser)
    const [isFollowLoading,setIsFollowLoading]=useState(false)
    const dispatch=useDispatch()
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
    return <div className='flex justify-between flex-wrap gap-1'>
        <div className='flex items-center font-sans gap-1'>
            <Link to={`/user/${_id}`}><img className='w-12 rounded-full object-cover h-12 ' src={userProfile} alt="" /></Link>
            <h3 className='font-semibold text-black text-md'>@{username}</h3>
        </div>
        <button className='bg-secondary text-white border-black border-2 shadow-neu px-2 py-1' onClick={clickHandler}>
            {isFollowed ? 'Followed' : 'Follow'}
        </button>
        
    </div>
}

const calcUsersToShow=(users,loggedInUser)=>{
    return users.filter((user)=>user.username!==loggedInUser.username)
}

const Suggestionbar=()=> {
    const users=useSelector(state=>state.users.users)
    const {loggedInUser}=useSelector(state=>state.auth)
    const usersToShow=calcUsersToShow(users,loggedInUser)
  return (
    <div className='bg-lightOrange  border-black border-2 shadow-neu rounded-lg w-fit p-6 m-8 font-sans min-w-[80%] text-black h-fit sticky top-24 xl:hidden'>
        <h3 className='text-lg font-bold' >People you can follow</h3>
        <ul className='flex flex-col gap-6 mt-4'>
        {usersToShow.map(user=><ProfileChip user={user} key={user._id}/>)}
        </ul>


    </div>
  )
}

export default Suggestionbar