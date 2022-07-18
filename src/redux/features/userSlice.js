import { createSlice} from "@reduxjs/toolkit";
import { getUser,getUsers,followUser, unfollowUser, editUser } from "../../utils/user-utils/user-services";

const initialState={
    users:[],
    selectedUser:{},
    currentUser:{}
}




const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        setSelectedUser:(state,{payload})=>{
            state.selectedUser=payload
        },
        setCurrentUser:(state,{payload})=>{
            state.currentUser=payload
        }
    },
    extraReducers:{
        [getUsers.fulfilled]:(state,{payload})=>{
            state.users=payload
        },
        [getUser.fulfilled]:(state,{payload})=>{
            state.selectedUser=payload
        },
        [followUser.fulfilled]:(state,{payload})=>{
            const {followUser,user}=payload
            const currentUser=state.users.find(currUser=>currUser.username===user.username)
            if(currentUser){
                currentUser.followers=user.followers
                currentUser.following=user.following
            }
            state.currentUser=user
            if(followUser._id===state.selectedUser._id){
                state.selectedUser=followUser
            }
            const currentFollowUser=state.users.find(currUser=>currUser.username===followUser.username)
            if(currentFollowUser){
                currentFollowUser.followers=followUser.followers
                currentFollowUser.following=followUser.following
            }
        },
        [unfollowUser.fulfilled]:(state,{payload})=>{
            const {followUser,user}=payload
            const currentUser=state.users.find(currUser=>currUser.username===user.username)
            if(currentUser){
                currentUser.followers=user.followers
                currentUser.following=user.following
            }
            state.currentUser=user
            if(followUser._id===state.selectedUser._id){
                state.selectedUser=followUser
            }
            const currentFollowUser=state.users.find(currUser=>currUser.username===followUser.username)
            if(currentFollowUser){
                currentFollowUser.followers=followUser.followers
                currentFollowUser.following=followUser.following
            }
        },
        [editUser.fulfilled]:(state,{payload})=>{
            state.currentUser=payload
        }

    }
})
export const {setSelectedUser,setCurrentUser} = userSlice.actions
export default userSlice.reducer