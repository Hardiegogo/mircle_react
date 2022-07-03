import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signupUser,loginUser } from "../../utils/auth-utils/auth-services";

const initialState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  isAuthenticated: localStorage.getItem("token") ? true : false,
  loggedInUser: {},
};



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    test:()=>{
      console.log('gg')
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

export const {test}=authSlice.actions

export default authSlice.reducer;
