import React from 'react'
import NavBar from '@/components/navBar/NavBar'
import { RiArrowRightSFill } from "react-icons/ri";
import Link from "next/link";
import Image from 'next/image'
import Footer from '@/components/footer/Footer';

const page = () => {

  const programmingLanguages = [
    { 
      image : "https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png",
      name : "JavaScript"
    },
    {
      image : "https://cdn-icons-png.flaticon.com/512/226/226777.png",
      name : "Java"
    },
    {
      image : "https://www.php.net/images/logos/new-php-logo.svg",
      name : "PHP"
    },
    {
      image : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
      name : "Python"
    },
  ];

  const frameworks = [
    {
      image : "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png",
      name : "Next.js",
    },
    {
      image : "https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png",
      name : "Laravel"
    },
    {
      image : "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
      name : "Bootstrap",
    },
    {
      image : "https://www.lasvegascoder.com/img/tailwindcss-logo.png",
      name : "Tailwind",
    },
  ];

  const librariesTools = [
    {
      image : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      name : "React.js",
    },
    {
      image : "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      name : "Express.js"
    },
    {
      image : "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
      name : "Node.js",
    },
    {
      image : "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
      name : "Vite.js",
    },
  ];

  return (
    <div className='w-full relative ' style={{backgroundColor: '#0B0D0F'}}>
        <NavBar actualPage={3}/>
        <div className='w-full absolute top-[60px] flex h-[calc(100%-50px)] ' >
            <div className='flex flex-col px-[10%] pt-[50px] w-full h-full '>
              <div className='text-white  font-kanit  mb-[30px]'>
                <span className='border-b-[2px] text-[50px] border-sky-600'>RESUME</span>
              </div>
              <div className='  text-white md:p-8'>
                  <h3 className='md:text-[30px] text-[25px] text-white/80 mb-2'>FULL STACK - <span className='text-sky-400'>WEB DEVELOPER:</span></h3>
                  <p className='mb-4'>
                  Technology enthusiast with a year of Freelance Full Stack Development expertise, specializing in web design and development. Proficient in both Front-end and Back-end technologies, including relational and non-relational database management, and adept at utilizing various frameworks. Proven track record in designing efficient solutions, contributing to project success through creative problem-solving, informed decision-making, and efficient project management. Effective communication skills ensure the delivery of customized solutions that meet and exceed client expectations. <span className='font-bold'> English proficiency level: C1 Advanced</span>
                  </p>
                  <div>
                    <h3 className='text-[20px] mb-4 font-bold'>PROFESSIONAL EXPERIENCE:</h3>
                    <div className='w-full flex lg:flex-row flex-col lg:gap-x-8 gap-y-8 mb-6'>
                      <div className='border-sky-950 border-[2px] lg:w-1/2 w-full p-8 rounded-md ' style={{backgroundColor: '#0F1114'}}>
                        <div className='flex flex-col w-full text-center mb-5'>
                          <h4 className='mr-2 text-sky-400 text-[25px] font-bold'>FRONT-END DEVELOPER</h4>
                          <span className='text-sky-400 text-[25px] '>(Dec 2022 – Aug. 2023)</span>
                        </div>
                        <h3 className='text-[18px] font-bold mb-2'>Freelancer CDX-INNOVA.</h3>
                        <div className='flex text-[16px]'>
                          <RiArrowRightSFill className='text-sky-500 mt-1'/>
                          Developed landing pages, dashboards, and online applications using HTML, JS, CSS, Bootstrap.
                        </div>
                        <div className='flex text-[16px]'>
                          <RiArrowRightSFill className='text-sky-500 mt-1'/>
                          Designed and optimized interfaces and frontend elements.
                        </div>
                        <div className='flex text-[16px]'>
                          <RiArrowRightSFill className='text-sky-500 mt-1'/>
                          Increased positive reviews through website navigation improvements.
                        </div>
                      </div>
                      <div className='lg:w-1/2 w-full border-sky-950 border-[2px] p-8  rounded-md' style={{backgroundColor: '#0F1114'}}>
                          <div className='flex flex-col w-full text-center mb-5'>
                            <h4 className='mr-2 text-sky-400 text-[25px] font-bold'>FULL STACK TEACHING ASSISTANT</h4>
                            <span className='text-sky-400 text-[25px] '>(Oct. 2023 - Dec. 2023)</span>
                          </div>
                          <h3 className='text-[18px] font-bold mb-2'>Academic experience - HENRY BOOTCAMP.</h3>
                          <div className='flex text-[16px]'>
                            <RiArrowRightSFill className='text-sky-500  mt-1'/>
                            Coordinated a student group to foster integration into the study team.
                          </div>
                          <div className='flex text-[16px]'>
                            <RiArrowRightSFill className='text-sky-500  mt-1'/>
                            Assisted with problem-solving and promoted group collaboration (Pair Programming).
                          </div>
                          <div className='flex text-[16px]'>
                            <RiArrowRightSFill className='text-sky-500  mt-1'/>
                            Proposed ideas for improving Bootcamp processes.
                          </div>
                      </div>
                    </div>

                    

                  </div>
                  
                  <div className='w-full mb-6'>
                    <h3 className='text-[20px] font-bold mb-4'>TECHNOLOGIES:</h3>
                    <div className='w-full flex flex-wrap gap-5 items-center justify-center'>
                      <div className='w-[350px] border-[2px] border-gray-700 rounded-md p-4'>
                        <div className='w-full text-center mb-4'>
                          <h4 className='text-sky-400 text-[25px] font-bold'>Programming Languages</h4>
                        </div>
                        <div className='flex flex-col  '>
                          {
                            programmingLanguages.map((language, index) => {
                              return <div key={index} className='flex items-center gap-x-2 mb-2'>
                                <img src={language.image} className='w-[40px] h-[40px]'/>
                                <p className=' text-[20px]'>{language.name}</p>
                              </div>
                            })
                          }
                        </div>
                      </div>

                      <div className='w-[350px] border-[2px] border-gray-700 rounded-md p-4'>
                        <div className='w-full text-center mb-4'>
                          <h4 className='text-sky-400 text-[25px] font-bold'>Frameworks</h4>
                        </div>
                        <div className='flex flex-col '>
                          {
                            frameworks.map((language, index) => {
                              return <div key={index} className='flex items-center gap-x-2 mb-2'>
                                <img src={language.image} className='w-[40px] h-[40px]'/>
                                <p className=' text-[20px]'>{language.name}</p>
                              </div>
                            })
                          }
                        </div>
                      </div>

                      <div className='w-[350px] border-[2px] border-gray-700 rounded-md p-4'>
                        <div className='w-full text-center mb-4'>
                          <h4 className='text-sky-400 text-[25px] font-bold'>Libraries and Enviroments</h4>
                        </div>
                        <div className='flex flex-col '>
                          {
                            librariesTools.map((language, index) => {
                              return <div key={index} className='flex items-center gap-x-2 mb-2'>
                                <img src={language.image} className='w-[40px] h-[40px]'/>
                                <p className=' text-[20px]'>{language.name}</p>
                              </div>
                            })
                          }
                        </div>
                      </div>

                    </div>
                    
                  </div>

                  <div className='w-full mb-6'>
                    <h3 className='text-[20px] font-bold mb-5'>EDUCATION:</h3>
                    <div className='w-full flex lg:flex-row flex-col mb-10'>
                      <div className='lg:w-1/2 w-full flex flex-col items-center justify-center lg:mb-0 mb-4'>
                          <h3 className='text-[35px] text-sky-400 font-bold mb-3 text-center'>HENRY BOOTCAMP</h3>
                          <h4 className='text-[25px] text-center'>Full Stack Web Developer</h4>
                          <p className='mb-6 text-center'>800 hours of theoretical-practical coursework, 2023</p>
                          <Link href="https://d2rf2c6bvm78n9.cloudfront.net/new-cert?id=b12d6191f3c0401aae6f420cef20c97bbf8d0b9dcceb22e88755a51b1f678b37">
                            <label className='border-[2px] text-sky-400 border-sky-400 text-[20px] rounded-lg p-2 cursor-pointer hover:bg-sky-400 hover:text-white'>
                              View Certificate
                            </label>
                          </Link>
                      </div>
                      <div className='lg:w-1/2 w-full p-5 relative'>
                        <div className=' w-full h-full top-0 absolute bg-black/20'></div>
                        <Image src='/henry.PNG' width={1000} height={1000}/>
                      </div>  
                    </div>
                    <div className='w-full flex lg:flex-row flex-col-reverse'>
                      <div className='w-full  lg:w-1/2 p-5 relative'>
                      <div className=' w-full h-full top-0 absolute bg-black/20'></div>
                        <Image src='/css.jpg' width={1000} height={1000}/>
                      </div> 
                      <div className='w-full  lg:w-1/2 flex flex-col items-center justify-center lg:mb-0 mb-4'>
                          <h3 className='text-[35px] text-sky-400 font-bold mb-3 text-center'>UDEMY COURSE</h3>
                          <h4 className='text-[25px] text-center'>Master en CSS, Bootstrap</h4>
                          <p className='mb-6 text-center'>Responsive, Sass, Flexbox, Grid, Bootstrap</p>
                          <Link href="https://udemy-certificate.s3.amazonaws.com/image/UC-c6d7cec6-2a99-48bf-a12f-664133c2c0b9.jpg?v=1589519299000">
                            <label className='border-[2px] text-sky-400 border-sky-400 text-[20px] rounded-lg p-2 cursor-pointer hover:bg-sky-400 hover:text-white'>
                              View Certificate
                            </label>
                          </Link>
                      </div>   
                    </div>
                  </div>

                  <div className='w-full mb-20'>
                    <h3 className='text-[20px] font-bold mb-5'>LANGUAGES:</h3>
                    <div className='w-full flex flex-col items-center justify-center'>
                      <div className='w-full flex lg:flex-row flex-col gap-4'>
                        <div className='border-sky-950 border-[2px] lg:w-1/2 w-full p-8 rounded-md' style={{backgroundColor: '#0F1114'}}>
                          <h3 className='text-[25px] text-sky-500 font-bold text-center mb-4'>SPANISH</h3>
                          <h3 className='text-white text-[20px] text-center'><span className='font-bold'>Language Level :</span> Native </h3>
                        </div>
                        <div className='border-sky-950 border-[2px] lg:w-1/2 w-full p-8 rounded-md' style={{backgroundColor: '#0F1114'}}>
                          <h3 className='text-[25px]  text-sky-500 font-bold text-center  mb-4'>ENGLISH</h3>
                          <h3 className='text-white text-[20px] text-center' ><span className='font-bold'>Language Level :</span> Advanced C1 <Link href="https://www.efset.org/cert/53jStF" className='text-sky-500 text-[15px]'>( View certificate EFSET )</Link></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Footer />

              </div>
            </div>
        </div>
    </div>
  )
}

export default page
