import React from 'react'
import NavBar from '@/components/navBar/NavBar'

const page = () => {
  return (
    <div className='w-full relative ' style={{backgroundColor: '#0B0D0F'}}>
        <NavBar actualPage={3}/>
        <div className='w-full absolute top-[60px] flex h-[calc(100%-50px)]'>
            
        </div>
    </div>
  )
}

export default page