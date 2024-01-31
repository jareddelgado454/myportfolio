import NavBar from '@/components/navBar/NavBar';
import Image from 'next/image'
import Link from 'next/link';
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill,  RiWhatsappLine  } from "react-icons/ri";

const Home = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className='w-full h-full  relative '>
        <Image width={1300} height={1000} className='w-full h-full z-20 object-cover' src='https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D'/>
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-30'></div>
        <NavBar actualPage={1} />
        <div className='absolute top-[30%] md:left-0 z-40 text-white md:pl-[100px] left-[5%]'>
            <div className=' flex flex-col font-kanit mb-[60px]'>
              <span style={{ lineHeight: '60px' }} className='md:text-[60px] sm:text-[40px] text-[30px] font-light py-0 my-0 text-white/80 tracking-[3px]'>JARED </span>
              <span style={{ lineHeight: '100px' }} className='md:text-[100px] sm:text-[80px] text-[70px] py-0 my-0 font-black text-white/90 tracking-[3px]'>DELGADO</span>
              <span className='md:text-[30px] sm:text-[20px] text-[17px] text-white/70 font-extralight md:tracking-[12px] tracking-[10px]'>FullStack Developer</span>
            </div>
            <div className='flex font-kanit'>
              <div className='w-full flex items-center justify-around'>
                <Link href='/resume'>
                  <label className='sm:px-10 px-6 cursor-pointer py-2 rounded-xl border-[1px] border-white/90 hover:border-sky-400 hover:text-sky-400 text-white/90 text-[20px] tracking-[2px]'>Resume</label>
                </Link>
                <Link href='/portfolio'>
                  <label className='sm:px-10 px-6 py-2 cursor-pointer rounded-xl border-[1px] border-white/90 hover:border-sky-400 hover:text-sky-400 text-white/90 text-[20px] tracking-[2px]'>Portfolio</label>
                </Link>
              </div>
            </div>
        </div>

        
        <div className='absolute left-0 bottom-10 pl-[100px] flex gap-x-4 z-40'>
          <Link href='https://github.com/jareddelgado454'>
            <RiGithubFill className='text-white text-[40px] hover:text-sky-400' />
          </Link>
          <Link href='https://www.linkedin.com/in/jareddelgado454/'>
            <RiLinkedinFill className='text-white text-[40px]  hover:text-sky-400'/> 
          </Link>
          <Link href='https://twitter.com/JaredDelgadoOk'>
            <RiTwitterXFill className='text-white text-[40px]  hover:text-sky-400'/>
          </Link>
          <Link href='https://api.whatsapp.com/send?phone=51916873668'>
            <RiWhatsappLine  className='text-white text-[40px]  hover:text-sky-400'/>
          </Link>
        </div>
      </div>
   </div>
  )
}

export default Home;