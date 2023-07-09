import React,{useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Aos from 'aos';
import "aos/dist/aos.css"
import ContactImg2 from '../public/assets/contact3.jpg';
const About = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
   },[])
  return (
    <div data-Aos="fade-up" id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 mt-[-7rem] '>
          <p className='uppercase text-xl tracking-widest text-[#5e17eb] ml-3 '>
            About
          </p>
          <h2 className='py-5 ml-2'>Who I Am</h2>
          <p className='py-2 ml-2 text-gray-600'>
          I am a highly skilled and passionate front-end developer with 3+ years of experience in building 
          beautiful and user-friendly web applications.
           I have a strong foundation in HTML, CSS, JavaScript, REACTJS, NEXTJS, TYPESCRIPT. I constantly 
           strive to stay updated with the latest web development trends and technologies. 
           With a keen eye for design and a commitment to writing clean and maintainable code, 
           I create engaging and responsive interfaces that deliver exceptional user experiences.
           am passionate about delivering exceptional user experiences through innovative design and seamless functionality. With a strong focus on industry best practices, I strive to create web solutions that not only meet client goals but also exceed expectations in terms of performance and user engagement.



          </p>
          <p className='py-2 text-gray-600'>
                    </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer ml-2'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-40 hidden ml-3 md:w-full m-auto shadow-xl shadow-gray-400 rounded-xl md:flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image height={400}   src={ ContactImg2} className='rounded-xl hidden md:block md:w-full' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
