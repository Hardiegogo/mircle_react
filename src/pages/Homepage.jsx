import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-bgColor min-h-screen p-4 font-sans pb-8">
      <div className="mt-32 mx-auto w-fit md:mt-8">
        <div className="flex items-center md:flex-col">
          <div className="w-80">
            <img
              className="object-contain"
              src="https://res.cloudinary.com/dqqehaaqo/image/upload/v1656513306/mircle/Mircle_ayyeqb.jpg"
              alt=""
            />
          </div>
          <div className=" font-sans text-5xl text-left leading-normal font-extrabold md:text-center">
            <h1>Find your </h1>
            <h1>new </h1>
            <h1 className="text-primary">Circle</h1>
          </div>
        </div>
        <div className="flex gap-6 justify-center md:mt-4">
        <Link to='/signup' className="bg-primary text-white px-4 p-2 border-black border-solid border-2 shadow-neu ">
          Join now
        </Link>

        <Link to='/login' className="bg-secondary text-white px-4 p-2 border-black border-solid border-2 shadow-neu ">
          Sign in
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
