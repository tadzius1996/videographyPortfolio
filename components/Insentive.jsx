import React from 'react'
import Image from 'next/image'
import proof from '../public/why.jpg'
import motions from '../public/motions.png'
//import camera from '../public/camera.png'
function Insentive() {
  return (
    <>
    <div id='incentive' className=' pt-7 bg-gradient-to-l from-gray-700 via-gray-900 to-black h-auto md:h-screen '>
        <div className='p-8 rounded-2xl  w-11/12 h-5/6 m-auto pt-10 flex flex-col lg:flex-row'>
            <div className='text-white flex-1 '>
                <h1 className='text-5xl md:text-6xl tracking-widest lg:w-5/6 text-center lg:text-start'>Why Video is Effective?</h1>
                <p className=' text-lg mt-10 lg:mt-5 lg:w-4/6'>Video content is a powerful tool for businesses of all sizes as well as for individuals who want to capture life's special moments. It allows you to visually convey your message in a way that's engaging and easy to understand. With our expertise in videography and video editing, we can help you create videos that showcase your products or services, tell your brand or personal story, and connect with your target audience or loved ones.</p>
                <p className=' text-lg mt-5 lg:w-4/6'>Whether you're looking to showcase your business or capture your life's special moments, don't settle for mediocre video content that fails to capture the attention of your audience. Contact us today to take your video content to the next level and showcase your business or personal life in the best possible light.</p>
                
               
            </div>
            
            <div className='h-full w-full flex-1 mt-14 lg:mt-0' style={{ position: 'relative' }}>
              <Image src={proof} alt='picture' layout='fill' objectFit='cover' className='rounded-2xl w-full '/>
              <img src={proof.src} alt='picture' style={{ display: 'none' }}/>
            </div>
        </div>
    </div>

    <div  className='  bg-gradient-to-r from-gray-700 via-gray-900 to-black h-auto md:h-screen flex '>
        <div className=' p-8 rounded-2xl  w-11/12 h-5/6 m-auto pt-10 flex justify-between flex-col lg:flex-row lg:gap-44   lg:mt-0'>
        <div className='h-full w-full flex-1 mt-0 lg:mt-0' style={{ position: 'relative' }}>
              <Image src={motions} alt='picture' layout='fill' objectFit='cover' className='rounded-2xl w-full'/>
              <img src={proof.src} alt='picture' style={{ display: 'none' }}/>
            </div>
            <div className='text-white flex-1 '>
                <h1 className='text-5xl md:text-6xl tracking-widest lg:w-full text-center lg:text-start'>Motion Graphics, Illustrations, and Sound Effects</h1>
                <p className=' text-lg mt-10 lg:mt-5 lg:w-5/6'>In today's digital age, video content is king. With the rise of social media platforms and online marketing, businesses and individuals alike are using video as a powerful tool to engage with their audience.</p>
                <p className=' text-lg mt-5 lg:w-5/6'> However, with so much competition out there, it's important to create content that stands out. This is where videography services that incorporate motion graphics, illustrations, and sound effects come in.</p>
            </div>
            
            
        </div>
    </div>
    
    </>
  )
}

export default Insentive