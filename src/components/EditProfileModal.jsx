import React,{useState,useRef} from "react";
import {useSelector,useDispatch} from 'react-redux'
import { useOutsideClick } from "../hooks/useOutsideClick";
import { editUser } from "../utils/user-utils/user-services";
const EditProfileModal=({setIsModalOpen})=>{
    const currentUser=useSelector(state=>state.users.currentUser)
    const [user,setUser]=useState({
        ...currentUser,fullname:currentUser.firstName+ ' '+ currentUser.lastName
    })
    const {userProfile,fullname,portfolioLink,description}=user
    const [imgInput,setImgInput]=useState()
    const dispatch=useDispatch()
    const modalRef=useRef()
    useOutsideClick(modalRef,()=>setIsModalOpen(false))
    const refr=useRef(null)
    const changeHandler=(e)=>{
        setUser((user)=>({
            ...user,
            [e.target.name]:e.target.value
        }))
    }
    const clickHandler=(e)=>{
        e.preventDefault()
        const updatedUser={
            ...user,
            userProfile : imgInput? URL.createObjectURL(imgInput) : user.userProfile
        }
        dispatch(editUser({updatedUser,dispatch}))
        setIsModalOpen(false)
    }
    return <div className="fixed min-w-[100vw] min-h-screen top-0 left-0 grid place-items-center bg-[rgba(0,0,0,0.5)] z-20 font-sans">
        <div className="bg-lightOrange p-4 shadow-neu border-black border-2 rounded sm:max-w-[20rem] w-fit sm:p-2" ref={modalRef} >
            <h2 className="text-xl font-semibold text-center sm:text-lg">Edit Profile</h2>
            <div className="flex gap-6 sm:gap-4 justify-center items-center flex-wrap">
            <div className="">
                <img className='rounded-full w-32 h-32 object-cover ' src={imgInput ?URL.createObjectURL(imgInput): userProfile } alt="" />
                <input type="file" ref={refr} accept="image/*" className="hidden" onChange={(e)=>setImgInput(e.target.files[0])}/>
                <button className="bg-primary block text-white px-4 p-2 border-black border-solid border-2 shadow-neu  lg:text-xl mx-auto w-fit mt-2 sm:text-sm" onClick={()=>refr.current.click()}>Upload</button>
            </div>
            <form className="mt-2 flex flex-col gap-2 sm:text-sm" onSubmit={clickHandler}> 
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" className="p-2 rounded sm:text-sm" name="fullname" onChange={changeHandler} value={fullname} />
                <label htmlFor="about">About:</label>
                <textarea id="about" className="resize-none h-20 p-2 sm:h-10 sm:text-xs" name="description" onChange={changeHandler} value={description}></textarea>
                <label htmlFor="portfolio">Portfolio link:</label>
                <input type="text" id="portfolio" className="p-2 rounded sm:text-sm" name="portfolioLink" onChange={changeHandler}  value={portfolioLink}/>
                <button className="bg-primary inline-block text-white px-4 p-2 border-black border-solid border-2 shadow-neu  lg:text-xl mx-auto w-fit mt-2 sm:text-sm">Save</button>
            </form>
            </div>
           
        </div>
    </div>
}

export default EditProfileModal