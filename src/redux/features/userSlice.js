import { createSlice } from "@reduxjs/toolkit";
import { getUser,getUsers } from "../../utils/user-utils/user-services";

const initialState={
    users:[],
    selectedUser:{}
}




const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{

    },
    extraReducers:{
        [getUsers.fulfilled]:(state,{payload})=>{
            state.users=payload
        },
        [getUser.fulfilled]:(state,{payload})=>{
            state.selectedUser=payload
        }
    }
})

export default userSlice.reducer