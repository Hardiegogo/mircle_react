import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Suggestionbar from "../components/Suggestionbar";
import UserProfile from "../components/UserProfile";
const Profile=()=>{
    const params=useParams()
    return <div className="grid grid-rows-rowLayout auto-rows-min min-h-screen bg-bgColor relative">
    <Navbar/>
    <div className="grid grid-cols-colsLayout xl:grid-cols-colsMaxLayout  lg:grid-cols-colslgLayout ">
        <Sidebar/>
        <UserProfile userId={params.id}/>
        <Suggestionbar/>
    </div>
    </div>
}

export default Profile