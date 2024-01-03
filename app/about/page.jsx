import NavBar from '@/components/navBar/NavBar'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full relative h-screen overflow-hidden' style={{backgroundColor: '#0B0D0F'}}>
        <NavBar actualPage={2}/>
        <div className='w-full absolute top-[60px] flex h-[calc(100%-50px)]'>
            <div className='w-1/2 pt-[60px] pl-[10%] pr-[30px] relative'>
              <div className='text-white  font-kanit pb-[20%]'>
                <span className='border-b-[2px] text-[50px] border-sky-600'>ABOUT</span>
                <h2 className='text-[25px] mt-2 text-white/70'>jared.delgado41@gmail.com</h2>
              </div>
              <p className='text-white text-[18px]'>I am a passionate Full Stack Developer with a proven track record in crafting modern and efficient web applications. Throughout my career as a freelancer, I have led projects spanning from frontend development using technologies like React and Next.js to the implementation of robust backends with Node.js and Express, backed by various databases. My focus revolves around creating engaging and functional user experiences, combining a strong understanding of design and interaction with technical skills across all layers of web development. I am committed to delivering innovative and scalable solutions that exceed client expectations and provide exceptional experiences for end users.</p>
              <div className='bottom-[60px] left-[10%] text-sky-200 absolute w-[90%] flex items-center justify-center text-center text-[20px] font-kanit '>
                <span className='w-full text-center tracking-[1px]'>"Turning ideas into elegant solutions, one line of code at a time."</span>
              </div>
            </div>
            <div className='w-1/2 relative'>
                <Image src='/miFoto.png' width={1000} height={1000}/>
                <div className='top-0 left-0 absolute w-full h-full custom-gradient'></div>
            </div>
        </div>
    </div>
  )
}

export default About