import Image from 'next/image';
import Link from 'next/link';
import React,{useEffect} from 'react';
import weatherImg from '../public/assets/projects/weather.png';
import discordcloneImg from '../public/assets/projects/discordclone.png';
import yogarenaImg from '../public/assets/projects/yogarena.png';
import Scissors from  '@/public/assets/projects/Scissors.png'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
import Aos from 'aos';
import "aos/dist/aos.css"
const Projects = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
   },[])
  return (
    <div data-Aos="fade-up" id='projects' className='w-full'>
      <div className='max-w-[1240px] md:-mt-24 mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5e17eb]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Scissors '
            backgroundImg={Scissors}
            projectUrl='/Scissors'
            tech='Next JS'
          />
          <ProjectItem
            title='DiscordClone'
            backgroundImg={discordcloneImg}
            projectUrl='/discordClone'
            tech='React JS'

          />
                   <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />

<ProjectItem
            title='YogaArena'
            backgroundImg={yogarenaImg}
            projectUrl='/Yogaarena'
            tech='Next JS'

          />


<ProjectItem
            title='WeatherApp'
            backgroundImg={weatherImg }
            projectUrl='/weatherApp'
            tech='React JS'

          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
