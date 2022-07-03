import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../utils/auth-utils/auth-services";
import {Link,useNavigate} from 'react-router-dom'

const Login = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const clickHandler=(e)=>{
    e.preventDefault()
    dispatch(loginUser({username,password,navigate}))
  }
  return (
    <div className="bg-bgColor min-h-screen p-4 font-sans sm:p-2">
      <div className="mt-12 mx-auto w-fit md:mt-8">
        <div className="w-40 mx-auto">
          <img
            className="object-contain"
            src="https://res.cloudinary.com/dqqehaaqo/image/upload/v1656513306/mircle/Mircle_ayyeqb.jpg"
            alt=""
          />
        </div>
        <div className="bg-white w-80 p-8 border-solid border-4 border-black shadow-neu sm:w-11/12 mx-auto">
          <form>
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <label className="font-semibold mt-4 text-lg block">User name:</label>
            <input
              className="border-solid border-black border-2 p-2 rounded w-full"
              type="text"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <label className="font-semibold mt-4 text-lg block">
              Password:
            </label>
            <input
              className="border-solid border-black border-2 p-2 rounded w-full"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

            />

            <button onClick={clickHandler} className="bg-primary text-white px-4 p-2 border-black border-solid border-2 shadow-neu mt-4 block mx-auto">
              Sign in
            </button>
            <Link to='/signup' className="bg-secondary w-fit text-white px-4 p-2 border-black border-solid border-2 shadow-neu block mx-auto mt-4">
          Create a new account
        </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
