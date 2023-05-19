import React from 'react'

export default function About() {
  return (
    <div className=' w-full md:h-screen p-2 flex items-center py-16'>
        <div className=' max-w-[1240px] m-auto md:grid grid-cols gap-8 '>
            <div className=' col-span-2'>
                <p className=' uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
               <h2 className=' py-4' > who I Am</h2>
               <p>// I am not your normal developer</p>
               <p className=' py-2 text-gray-600'> I am a passionate front-end developer with 2+ years in building scalable applications 
                using html, css, javascript, reactjs, nextjs, tailwindcss, typescript, nodejs, firebase, git and github </p>
                <p>checkout some of my latest projects</p>
            </div>
        </div>
        <div>
            <img src=''/>
        </div>
    </div>
  )
}
