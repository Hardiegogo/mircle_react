import React from 'react'

const Navbar=()=> {
  return (
    <div className='p-4 font-sans flex sticky bg-bgColor top-0 z-10'  >
        <div className='h-full flex items-center  mx-auto'>
            <img className='w-20 object-contain' src="https://res.cloudinary.com/dqqehaaqo/image/upload/v1656854820/mircle/mircle-only-logo_m9brf5.jpg" alt="" />
            <h2 className='font-black text-2xl'>Mircle</h2>
        </div>
    </div>
  )
}

export default Navbar