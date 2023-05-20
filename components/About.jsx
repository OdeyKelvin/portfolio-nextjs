import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import ContactImg2 from '../public/assets/contact2.jpeg';
const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5e17eb]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          I am a highly skilled and passionate front-end developer with 2+ years of experience in building 
          beautiful and user-friendly web applications.
           I have a strong foundation in HTML, CSS, and JavaScript, REACTJS, NEXTJS, TYPESCRIPT and I constantly 
           strive to stay updated with the latest web development trends and technologies. 
           With a keen eye for design and a commitment to writing clean and maintainable code, 
           I create engaging and responsive interfaces that deliver exceptional user experiences. 
          </p>
          <p className='py-2 text-gray-600'>
                    </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={ ContactImg2} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
