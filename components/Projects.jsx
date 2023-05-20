import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import weatherImg from '../public/assets/projects/weather.png';
import discordcloneImg from '../public/assets/projects/discordclone.png';
import nupatdashboardImg from '../public/assets/projects/nupatdashboard.png';
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5e17eb]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='WeatherApp '
            backgroundImg={weatherImg}
            projectUrl='/weatherApp'
            tech='React JS'
          />
          <ProjectItem
            title='DiscordClone'
            backgroundImg={discordcloneImg}
            projectUrl='/discordClone'
            tech='React JS'

          />
          <ProjectItem
            title='Nupatdashboard'
            backgroundImg={nupatdashboardImg}
            projectUrl='/Nupatdashboard'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
