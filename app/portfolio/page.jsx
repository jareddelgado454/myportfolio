import React from 'react'
import NavBar from '@/components/navBar/NavBar'
import { RiArrowRightSFill, RiGlobalLine, RiGithubFill } from "react-icons/ri";
import Link from "next/link";
import Image from 'next/image'
import Footer from '@/components/footer/Footer';


const Portfolio = () => {
  return (
    <div className='w-full relative' style={{backgroundColor: '#0B0D0F'}}>
        <NavBar actualPage={4}/>
        <div className='w-full absolute top-[60px] flex h-[calc(100%-50px)] ' >
            <div className='flex flex-col px-[10%] py-[50px] w-full h-full text-white '>
                <div className='text-white  font-kanit  mb-[30px]  '>
                    <span className='border-b-[2px] text-[50px] border-sky-600 '>PORTFOLIO</span>
                </div>
                <h3 className='text-[20px] font-bold mb-5'>PROJECTS:</h3>
                <div className='w-full flex lg:flex-row flex-col gap-x-3 pb-9 border-b-[2px] border-b-sky-900'>
                    <div className='lg:w-1/2 w-full'>
                        <div className='mb-2'>
                            <h4 className='mr-2 text-[25px] text-sky-400 font-bold'>Full Stack Web Developer – The J`Games </h4>
                            <span className='text-[20px] text-sky-500'>(Oct. 2022 - Nov. 2022)</span>
                        </div>
                        <h3 className='font-bold'>Academic experience: Henry Bootcamp</h3>
                        <p className='mb-1'>Developed an application aimed at providing information about current video games, including ratings, release dates, and other pertinent data. Responsible for designing an engaging and intuitive user interface using React, CSS, and Redux. Implemented client-side logic for server interaction using Axios. Managed server structure using Node.js and Express, ensuring scalability. Configured PostgreSQL and Sequelize for efficient database queries. Introduced additional features allowing users to filter and search for games effectively. Implemented a rating system for user feedback</p>
                        <h3 className='font-bold'>Technologies Used</h3>
                        <div className='flex items-center'>
                            <RiArrowRightSFill className='text-sky-500'/>
                                <span className='font-bold mr-2'>Frontend: </span>
                                React, CSS, Redux, Axios.
                        </div>
                        <div className='flex items-center'>
                            <RiArrowRightSFill className='text-sky-500'/>
                            <span className='font-bold mr-2'>Backend: </span>
                            Node.js, Express.
                        </div>
                        <div className='flex items-center mb-4'>
                            <RiArrowRightSFill className='text-sky-500'/>
                            <span className='font-bold mr-2'>DataBase: </span>
                                PostgreSQL, Sequelize
                        </div>
                        <div className='w-full flex  gap-x-3'>
                            <Link href='https://video-games-project-b881q6e2r-jared-delgados-projects.vercel.app/' className='flex items-center justify-center border-[2px] text-[18px] border-white/80 py-2 px-3 rounded-md gap-x-1 hover:border-sky-400 hover:text-sky-400'>
                                <RiGlobalLine /> 
                                <p>Visit Page</p>
                            </Link>
                            <Link href='https://github.com/jareddelgado454/ProjectVideogames' className='flex items-center justify-center border-[2px] text-[18px] border-white/80 py-2 px-3 rounded-md gap-x-1 hover:border-sky-400 hover:text-sky-400'>
                                <RiGithubFill /> 
                                <p>Visit Repository</p>
                            </Link>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full p-4 relative flex items-center justify-center'>
                        <div className=' w-full h-full top-0 absolute bg-black/20'></div>
                        <Image src='/jgames.PNG' width={1000} height={1000} className='w-full object-cover'/>
                    </div>
                </div>

                <div className='w-full flex lg:flex-row flex-col gap-x-3 pb-9 pt-9 mb-10'>
                    <div className='lg:w-1/2 w-full'>
                        <div className='mb-2'>
                            <h4 className='mr-2 text-[25px] text-sky-400 font-bold'>Full Stack Web Developer – Connect-Ink </h4>
                            <span className='text-[20px] text-sky-500'> (Nov 2022 - Dec 2022)</span>
                        </div>
                        <h3 className='font-bold'>Academic experience: Henry Bootcamp</h3>
                        <p className='mb-1'>We created an application to bridge the gap between tattoo artists and enthusiasts, 
facilitating direct interaction with tattoo designs, viewing artist profiles, making 
reservations, and processing payments on the same platform. Designed an attractive 
and user-friendly interface using Next.js, Tailwind.css, and Redux Toolkit. Implemented 
client-side logic with Axios and utilized Redux Toolkit for global state management. 
Developed pop-up modals for user notifications and additional features for efficient 
tattoo design filtering and searching</p>
                        <h3 className='font-bold'>Technologies Used</h3>
                        <div className='flex items-center'>
                            <RiArrowRightSFill className='text-sky-500'/>
                                <span className='font-bold mr-2'>Frontend: </span>
                                Next.js, Tailwind.css, Redux Toolkit, Axios.
                        </div>
                        <div className='flex items-center'>
                            <RiArrowRightSFill className='text-sky-500'/>
                            <span className='font-bold mr-2'>Backend: </span>
                            Next.js, Node.js, Express
                        </div>
                        <div className='flex items-center mb-4'>
                            <RiArrowRightSFill className='text-sky-500'/>
                            <span className='font-bold mr-2'>DataBase: </span>
                                PostgreSQL, Sequelize
                        </div>
                        <div className='w-full flex  gap-x-3'>
                            <Link href='https://connectink.vercel.app/' className='flex items-center justify-center border-[2px] text-[18px] border-white/80 py-2 px-3 rounded-md gap-x-1 hover:border-sky-400 hover:text-sky-400'>
                                <RiGlobalLine /> 
                                <p>Visit Page</p>
                            </Link>
                            <Link href='https://github.com/jareddelgado454/ConnectInk-Project' className='flex items-center justify-center border-[2px] text-[18px] border-white/80 py-2 px-3 rounded-md gap-x-1 hover:border-sky-400 hover:text-sky-400'>
                                <RiGithubFill /> 
                                <p>Visit Repository</p>
                            </Link>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full p-4 relative flex items-center justify-center'>
                        <div className=' w-full h-full top-0 absolute bg-black/20'></div>
                        <Image src='/connectink.PNG' width={1000} height={1000}/>
                    </div>
                </div>
                <div className='p-8'>
                    <Footer />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio