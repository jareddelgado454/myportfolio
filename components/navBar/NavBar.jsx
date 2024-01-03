import React from 'react'
import Link from 'next/link'
import { RiCellphoneLine } from "react-icons/ri";

const NavBar = ({actualPage}) => {
  return (
    <nav className='absolute top-0 left-0 w-full h-[50px] flex items-center justify-between z-40 text-white/80 font-kanit'>
        <div className='flex gap-x-[50px] px-[40px]  items-center pt-4'>
            <Link className={`flex items-center cursor-pointer ${actualPage==1 && 'text-sky-400'} text-[19px] hover:text-white/50`} href='/'>
                Home
            </Link>
            <Link className={`flex items-center cursor-pointer  ${actualPage==2 && 'text-sky-400'} text-[19px]  hover:text-white/50`} href='/about'>
                About
            </Link>
            <Link className={`flex items-center cursor-pointer  ${actualPage==3 && 'text-sky-400'} text-[19px]  hover:text-white/50 `} href='/resume'>
                Resume
            </Link>
            <Link className={`flex items-center cursor-pointer  ${actualPage==4 && 'text-sky-400'} text-[19px]  hover:text-white/50`} href=''>
                Portfolio
            </Link>
        </div>
        <div className='pt-4 pr-[40px] flex gap-x-1 items-center cursor-pointer'>
            <RiCellphoneLine className='text-sky-400'/>
            <span className='tracking-[2px]'>+51-916873668</span>
        </div>
    </nav>
  )
}

export default NavBar