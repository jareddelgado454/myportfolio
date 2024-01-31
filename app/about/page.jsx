import NavBar from '@/components/navBar/NavBar'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full relative md:h-screen md:overflow-hidden' style={{backgroundColor: '#0B0D0F'}}>
        <NavBar actualPage={2}/>
        <div className='w-full absolute top-[60px] flex md:flex-row flex-col h-[calc(100%-50px)]'>
            <div className='md:w-1/2  w-full pt-[50px] pl-[10%] pr-[30px] relative md:mb-0 mb-4'>
              <div className='text-white  font-kanit pb-[20%]'>
                <span className='border-b-[2px] text-[50px] border-sky-600'>ABOUT</span>
                <h2 className='text-[25px] mt-2 text-white/70'>jared.delgado41@gmail.com</h2>
              </div>
              <p className='text-white lg:text-[20px] text-[17px]'>I am a passionate Full Stack Developer with a proven track record in crafting modern and efficient web applications. Throughout my career as a freelancer, I have led projects spanning from frontend development using technologies like React and Next.js to the implementation of robust backends with Node.js and Express, backed by various databases. My focus revolves around creating engaging and functional user experiences, combining a strong understanding of design and interaction with technical skills across all layers of web development. I am committed to delivering innovative and scalable solutions that exceed client expectations and provide exceptional experiences for end users.</p>
              
            </div>
            <div className='md:w-1/2 w-full flex items-center justify-center md:pb-0 pb-6'>
              <div className='lg:w-[500px] lg:h-[500px] md:w-[350px] md:h-[350px] w-[300px] h-[300px] rounded-full overflow-hidden relative border-[8px] border-white/5'>
                  <Image src='/foto.jpg' width={600} height={600} className='ml-auto '/>
                  <div className='top-0 left-0 absolute w-full h-full custom-gradient'></div>
              </div>
                
            </div>
        </div>
    </div>
  )
}

export default About