
import Image from 'next/image'
import Link from 'next/link'
import React,{ useState} from 'react';
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill, BsFillpersonLinesFill} from 'react-icons/bs'
export default function Navbar() {
const [nav, setNav] = useState(false)
const handlenavbar=()=>{
  setNav(!nav)
}
  return (
    <div className=' fixed w-full h-20 shadow-xl z-[10]'>
        <div className=' flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div className=' mr-[13rem] md:mr-[20rem] xl:mr-[35rem] '> <img src="/assets/KP.png" alt="/" /> </div> 
         <div>
          <ul className=' hidden md:flex md:mr-16'>
            <Link href='/'>
              <li className=' ml-10 text-sm uppercase hover:border-r'>Home</li>
            </Link>
            <Link href='/'>
              <li className=' ml-10 text-sm uppercase hover:border-r'>About</li>
            </Link>
            <Link href='/'>
              <li className=' ml-10 text-sm uppercase hover:border-r'>Experience</li>
            </Link>
            <Link href='/'>
              <li className=' ml-10 text-sm uppercase hover:border-r'>Work</li>
            </Link>
            <Link href='/'>
              <li className=' ml-10 text-sm uppercase hover:border-r'>Contact</li>
            </Link>
          </ul>
          <div onClick={handlenavbar} className=' md:hidden'>
          <AiOutlineMenu size={30}/>
          </div>
         </div>
        </div>
        <div className={nav? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/60':''}>
     <div className={ nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white px-10 ease-in duration-500':
       'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white px-10 ease-in duration-500'

     }>
      <div>
          <div className=' mr-20 mt-5 flex w-full items-center justify-between'>
            <div className='relative mr-16 md:mr-[10rem] right-4 '> <img src="/assets/KP.png" alt="/" /> </div> 
           <div onClick={handlenavbar} className=' rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'> <AiOutlineClose size={25}/> </div>
          </div>
      </div>
      <div className=' border-b border-gray-300 my-2 '>
        <p className=' w-[85%] md:w-[85%] mb-3 md:mb-3'>let's build something legendary together</p>
      </div>
      <div className=' flex flex-col' >
     <ul className=' mt-5 uppercase '>
     <Link href='/'>
              <li className=' py-4 text-sm uppercase hover:border-r'>Home</li>
            </Link>
            <Link href='/'>
              <li className=' py-4 text-sm uppercase hover:border-r'>About</li>
            </Link>
            <Link href='/'>
              <li className=' py-4 text-sm uppercase hover:border-r'>Experience</li>
            </Link>
            <Link href='/'>
              <li className=' py-4 text-sm uppercase hover:border-r'>Work</li>
            </Link>
            <Link href='/'>
              <li className=' py-4 text-sm uppercase hover:border-r'>Contact</li>
            </Link>
     </ul>
     <div className=' pt-10'> 
          <p className=' uppercase'>let's connects</p>
          <div className=' flex items-center justify-between my-4 w-full sm:w-[80%] '>
             <div className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
             <FaLinkedinIn/>
             </div>
             <div className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
             <FaGithub/>
             </div>
             <div className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
             <AiOutlineMail/>
             </div>
             <div className=' rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 '>
             <BsFillPersonLinesFill/>
             </div>
          </div>
     </div>
   </div>
     </div>
 
        </div>
    </div>
  )
}
