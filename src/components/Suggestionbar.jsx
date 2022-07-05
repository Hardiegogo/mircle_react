import React from 'react'
import { useSelector } from 'react-redux'

const ProfileChip=({user:{userProfile,username}})=>{
    
    return <div className='flex justify-between flex-wrap gap-1'>
        <div className='flex items-center font-sans gap-1'>
            <img className='w-12 rounded-full object-cover h-12 ' src={userProfile} alt="" />
            <h3 className='font-semibold text-black text-md'>@{username}</h3>
        </div>
        <button className='bg-secondary text-white border-black border-2 shadow-neu px-2 py-1'>
            Follow
        </button>
        
    </div>
}

const Suggestionbar=()=> {
    const users=useSelector(state=>state.users.users)
  return (
    <div className='bg-lightOrange  border-black border-2 shadow-neu rounded-lg w-fit p-6 m-8 font-sans min-w-[80%] text-black h-fit sticky top-24 xl:hidden'>
        <h3 className='text-lg font-bold' >People you can follow</h3>
        <ul className='flex flex-col gap-6 mt-4'>
        {users.map(user=><ProfileChip user={user} key={user._id}/>)}

        </ul>


    </div>
  )
}

export default Suggestionbar