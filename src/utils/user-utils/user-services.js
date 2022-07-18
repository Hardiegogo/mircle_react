import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const nameCalc=(fullname)=>{
  if(fullname.includes(' ')){
    const spaceIndex=fullname.search(' ')
    const firstName=fullname.slice(0,spaceIndex)
    const lastName=fullname.slice(spaceIndex+1)
    return [firstName,lastName]
  } else return [fullname,'']
}
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const res = await axios.get("/api/users");
    if (res.status === 200) {
      return res.data.users;
    }
  } catch (error) {}
});

export const getUser = createAsyncThunk("users/getUser", async ({userId,setIsLoading}) => {
  try {
    const res = await axios.get(`/api/users/${userId}`);
    if (res.status === 200) {
      setIsLoading(false)
      return res.data.user;
    }
  } catch (error) {
    console.log("error occured", error);
  }
});

export const followUser=createAsyncThunk("users/followUser",async({_id,setIsFollowLoading})=>{
  const encodedToken=localStorage.getItem('token')
  try {
    const res=await axios({
      method:"POST",
      url:`/api/users/follow/${_id}`,
      headers:{authorization:encodedToken}
    })
    if(res.status===200){
      setIsFollowLoading(false)
      return res.data
    }
  } catch (error) {
    console.log("error occured",error)
  }
})

export const unfollowUser=createAsyncThunk("users.unfollowUser",async({_id,setIsFollowLoading})=>{
  const encodedToken=localStorage.getItem('token')
  try {
    const res=await axios({
      method:"POST",
      url:`/api/users/unfollow/${_id}`,
      headers:{authorization:encodedToken}
    })
    if(res.status===200){
      setIsFollowLoading(false)
      return res.data
    }
  } catch (error) {
    console.log("error occured",error)
  }
})

export const editUser=createAsyncThunk("users/editUser",async(user)=>{
  const encodedToken=localStorage.getItem('token')
  const {fullname,userProfile,description,portfolioLink}=user
  const [firstName,lastName]=nameCalc(fullname)
  try {
    const res=await axios({
      method:"POST",
      url:"/api/users/edit",
      headers:{authorization:encodedToken},
      data:{
        userData:{
          firstName,
          lastName,
          userProfile,
          description,
          portfolioLink
        }
      }
    })
    if(res.status===201){
      return res.data.user
    }
  } catch (error) {
    console.log("error occured",error)
  }
})