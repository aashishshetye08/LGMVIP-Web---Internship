import React from 'react'
import BackGround from '../images/bg.jpg'

export const Navbar = () => {
  return (
    <div className="flex flex-col space-y-0 items-center bg-blend-multiply" >
      <img src={BackGround} alt="BG" className="w-full h-24 shadow-2xl" />
      <div className="absolute top-3 inset-x-2/4 text-7xl font-bold" style={{ "left" : "41.0%" }}>
        <p>SAMPLE</p>
      </div>
      <div className="flex w-full p-1 pt-2 justify-center bg-gradient-to-t from-blue-300 to-cyan-600 text-white font-semibold text-4xl shadow-md">
        <p className="">Student Enrollment Form</p>
      </div>
    </div>

  )
}
