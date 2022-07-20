import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signupUser,loginUser } from "../../utils/auth-utils/auth-services";

const initialState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  isAuthenticated: localStorage.getItem("token") ? true : false,
  loggedInUser: localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')): {},
};



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser:(state,{payload})=>{
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      state.token=null
      state.isAuthenticated=false
      state.loggedInUser={}
      payload.navigate('/')
    }
  },
  extraReducers: {
     [loginUser.fulfilled]:(state,{payload})=>{
      localStorage.setItem('user',JSON.stringify(payload.foundUser))
      state.loggedInUser=payload.foundUser
      state.isAuthenticated=true
      state.token=payload.encodedToken
     },
     [signupUser.fulfilled]:(state,{payload})=>{
      state.isAuthenticated=true
      state.token=payload.encodedToken
      const newUser={...payload.createdUser}
      delete newUser.password
      state.loggedInUser=newUser
      localStorage.setItem('user',JSON.stringify(newUser))

     }
  },
});

export const {logoutUser}=authSlice.actions

export default authSlice.reducer;
