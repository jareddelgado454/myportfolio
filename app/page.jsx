import NavBar from '@/components/navBar/NavBar';
import Image from 'next/image'
import Link from 'next/link';
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill,  RiWhatsappLine  } from "react-icons/ri";

const Home = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='w-full h-full  relative'>
        <Image width={1300} height={1000} className='w-full h-full z-20 object-cover' src='https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D'/>
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-30'></div>
        <NavBar actualPage={1} />
        <div className='absolute top-[30%] left-0 z-40 text-white pl-[100px]'>
          <div className=' flex flex-col font-kanit mb-[60px]'>
            <span style={{ lineHeight: '60px' }} className='text-[60px] font-light py-0 my-0 text-white/80 tracking-[3px]'>JARED </span>
            <span style={{ lineHeight: '100px' }} className='text-[100px] py-0 my-0 font-black text-white/90 tracking-[3px]'>DELGADO</span>
            <span className='text-[30px] text-white/70 font-extralight tracking-[12px]'>FullStack Developer</span>
          </div>
          <div className='flex font-kanit'>
            <div className='w-full flex items-center justify-around'>
              <Link href=''>
                <label className='px-10 cursor-pointer py-2 rounded-xl border-[1px] border-white/90 hover:border-sky-400 hover:text-sky-400 text-white/90 text-[20px] tracking-[2px]'>Resume</label>
              </Link>
              <Link href=''>
                <label className='px-10 py-2 cursor-pointer rounded-xl border-[1px] border-white/90 hover:border-sky-400 hover:text-sky-400 text-white/90 text-[20px] tracking-[2px]'>Portfolio</label>
              </Link>
            </div>
          </div>
        </div>
        <div className='absolute left-0 bottom-10 pl-[100px] flex gap-x-4 z-40'>
          <Link href=''>
            <RiGithubFill className='text-white text-[40px] hover:text-sky-400' />
          </Link>
          <Link href=''>
            <RiLinkedinFill className='text-white text-[40px]  hover:text-sky-400'/> 
          </Link>
          <Link href=''>
            <RiTwitterXFill className='text-white text-[40px]  hover:text-sky-400'/>
          </Link>
          <Link href=''>
            <RiWhatsappLine  className='text-white text-[40px]  hover:text-sky-400'/>
          </Link>
        </div>
      </div>
   </div>
  )
}

export default Home;