import { createAsyncThunk } from "@reduxjs/toolkit"
import axios
 from "axios"
const nameCalc=(fullname)=>{
    if(fullname.includes(' ')){
      const spaceIndex=fullname.search(' ')
      const firstName=fullname.slice(0,spaceIndex)
      const lastName=fullname.slice(spaceIndex+1)
      return [firstName,lastName]
    } else return [fullname,'']
  }

export const signupUser=createAsyncThunk('auth/signupUser',async({fullname,email,username,password,navigate})=>{
    const [firstName,lastName]=nameCalc(fullname)
    try {
      const res=await axios({
        method:"POST",
        url:'/api/auth/signup',
        data:{
          email,
          password,
          username,
          firstName,
          lastName
        }
      })
      if(res.status===201){
        localStorage.setItem('token',res.data.encodedToken)
        navigate('/feed')
        return res.data
      }
    } catch (error) {
      console.log('error occured',error)
    }
  })

  
export const loginUser=createAsyncThunk('auth/loginUser',async({username,password,navigate})=>{
    try {
      const res =await axios({
        method:"POST",
        url:"/api/auth/login",
        data:{
          username,password
        }
      })
      if(res.status===200){
        localStorage.setItem('token',res.data.encodedToken)
        navigate('/feed')
        return res.data
      }
  
    } catch (error) {
      console.log('error occured',error)
    }
  })