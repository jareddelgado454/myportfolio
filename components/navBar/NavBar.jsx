'use client'
import React, {useState} from 'react'
import Link from 'next/link'
import { RiCellphoneLine, RiWhatsappLine } from "react-icons/ri";

const NavBar = ({actualPage}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <nav className='absolute top-0 left-0 w-full h-[50px] flex items-center justify-between  text-white/80 font-kanit z-50' >
        <div className='md:flex md:gap-x-[50px] md:px-[40px]  md:items-center md:pt-4 hidden'>
            <Link className={`flex items-center cursor-pointer ${actualPage==1 && 'text-sky-400'} text-[19px] hover:text-white/50`} href='/'>
                Home
            </Link>
            <Link className={`flex items-center cursor-pointer  ${actualPage==2 && 'text-sky-400'} text-[19px]  hover:text-white/50`} href='/about'>
                About
            </Link>
            <Link className={`flex items-center cursor-pointer  ${actualPage==3 && 'text-sky-400'} text-[19px]  hover:text-white/50 `} href='/resume'>
                Resume
            </Link>
            <Link className={`flex items-center cursor-pointer  ${actualPage==4 && 'text-sky-400'} text-[19px]  hover:text-white/50`} href='/portfolio'>
                Portfolio
            </Link>
        </div>
        
        <div className='relative flex flex-col'>
            <div className='md:hidden flex pl-6 pt-3 z-50'>
                <button
                className='md:hidden flex items-center cursor-pointer pr-[40px]'
                onClick={toggleMenu}
                >
                    <div className='text-sky-400 text-[25px]'>&#x2630;</div>
                </button>
            </div>

            <div className={`md:hidden ${isMenuOpen ? 'absolute flex flex-col gap-y-3 w-[150px] top-12  z-50' : 'hidden'} pl-6 py-4 `} style={{backgroundColor : "#16171A"}}>
                <Link className={`flex items-center cursor-pointer text-[19px]  ${actualPage==1 && 'text-sky-400 '}   hover:text-white`} href='/'>
                Home
                </Link>
                <Link className={`flex items-center cursor-pointer text-[19px]  ${actualPage==2 && 'text-sky-400'}   hover:text-white`} href='/about'>
                About
                </Link>
                <Link className={`flex items-center cursor-pointer text-[19px]  ${actualPage==3 && 'text-sky-400'}  hover:text-white`} href='/resume'>
                Resume
                </Link>
                <Link className={`flex items-center cursor-pointer text-[19px]   ${actualPage==4 && 'text-sky-400'}  hover:text-white`} href='/portfolio'>
                Portfolio
                </Link>
            </div>

        </div>
        



        <Link href='https://api.whatsapp.com/send?phone=51916873668'>
            <div className='pt-4 pr-[40px] flex gap-x-1 items-center cursor-pointer'>
                <RiWhatsappLine className='text-sky-400 text-[20px]'/>
                <span className='tracking-[2px] hover:text-sky-400'>+51-916873668</span>
            </div> 
        </Link>
    </nav>
  )
}

export default NavBar