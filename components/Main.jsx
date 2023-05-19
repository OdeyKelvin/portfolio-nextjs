import React from 'react'
import { AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
export default function Main() {
  return (
    <div className=' w-full h-screen text-center'>
      <div className=' max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
         <div className=' mt-[8rem]'>
           <p className=' uppercase text-sm tracking-widest text-gray-700 '>Let's build something together!!</p>
         <h1 className=' py-2 text-gray-700'>Hi, I'm 
         <span className=' text-[#5651e5]'> Kelvin</span>
             </h1> 
             <h1 className=' py-2  text-gray-700 '>A Front-End Web Developer</h1>
             <p className=' py-3 max-w-[70%] m-auto'> I'm a front-end web developer specializing in building Responsive and SEO optimized websites.
             Currently I'm focused on learning backend technologies. </p>
             <div className=' flex items-center justify-between max-w-[300px] m-auto py-3 '>

                <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-112 ease-in duration-300 '>
                <FaLinkedinIn/>
                </div>
                <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-112 ease-in duration-300 '>
                <FaGithub/>
                </div>
                <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-112 ease-in duration-300 '>
                <AiOutlineMail/>
                </div>
                <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-112 ease-in duration-300 '>
                <BsFillPersonLinesFill/>
                </div>


             </div>
         </div>
      </div>
    </div>
  )
}
