import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { signupUser } from "../utils/auth-utils/auth-services";

function Signup() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const changeHandler=(e)=>{
    setUser(user=>({
        ...user,
        [e.target.name]:e.target.value
    }))
  }
  const clickHandler=(e)=>{
    e.preventDefault()
    dispatch(signupUser({...user,navigate}))
  }
  return (
    <div className="bg-bgColor min-h-screen p-4 font-sans sm:p-2">
      <div className=" mx-auto w-fit md:mt-8">
        <div className="w-32 mx-auto">
          <img
            className="object-contain"
            src="https://res.cloudinary.com/dqqehaaqo/image/upload/v1656513306/mircle/Mircle_ayyeqb.jpg"
            alt=""
          />
        </div>
        <div className="bg-white w-96 p-8 border-solid border-4 border-black shadow-neu sm:w-11/12 mx-auto">
          <form>
            <h2 className="text-center text-2xl font-bold">Sign up</h2>
            <label className="font-semibold mt-4 text-lg block">
              Full name:
            </label>
            <input
              className="border-solid border-black border-2 p-2 rounded w-full"
              type="text"
              value={user.fullname}
              name="fullname"
              onChange={changeHandler}
            />
            <label className="font-semibold mt-2 text-lg block">Email:</label>
            <input
              className="border-solid border-black border-2 p-2 rounded w-full"
              type="email"
              value={user.email}
              name="email"
              onChange={changeHandler}
            />
            <label className="font-semibold mt-2 text-lg block">
              User name:
            </label>
            <input
              className="border-solid border-black border-2 p-2 rounded w-full"
              type="text"
              value={user.username}
              name="username"
              onChange={changeHandler}
            />
            <label className="font-semibold mt-2 text-lg block">
              Password:
            </label>
            <input
              className="border-solid border-black border-2 p-2 rounded w-full"
              type="password"
              value={user.password}
              name="password"
              onChange={changeHandler}
            />

            <button onClick={clickHandler} className="bg-primary text-white px-4 p-2 border-black border-solid border-2 shadow-neu mt-4 block mx-auto">
              Sign up
            </button>
            <Link
              to="/login"
              className="bg-secondary w-fit text-white px-4 p-2 border-black border-solid border-2 shadow-neu block mx-auto mt-4"
            >
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
