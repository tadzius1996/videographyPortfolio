import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import logo from '../public/uss.jpg'
import { AnimatePresence, motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div className='h-auto  p-12 px-10 md:px-20 bg-[#c2613d]' id='about' initial={{ y: 25, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
    duration: 0.75,
    }}> 
        <div className='flex flex-col text-center mt-20' id='about'>
        <h1 className={`${styles.listItem}`}>Hello and welcome <br/> to my videography website!</h1>
        <h1 className='text-center mt-10 text-3xl font-thin'>My name is Tadas, and I'm a <span className='text-orange-400'>videographer</span> <br/> with 5 years of experience.</h1>
        </div>
        <div className='mt-10 lg:mt-32 flex lg:flex-row flex-col lg:justify-evenly gap-5 lg:gap-0'>
          <div className='m-auto lg:m-0 relative'>
              <div className={`${styles.container} hidden lg:block`} />
              <Image src={logo} alt='logo' className='lg:w-[28rem] mt-5 w-96 h-auto rounded-3xl border-dashed border-orange-400 p-2' />
          </div>
            <div className='border-r-2 text-amber-500'/>
            <div className='text-center m-auto w-full md:w-auto lg:m-0 lg:text-left'>
                <h1 className='text-4xl md:text-6xl lg:text-6xl tracking-widest'>Video Producer</h1>
                <p className='w-72  md:w-11/12 m-auto lg:mx-0 lg:w-96 mt-5 text-md text-left text-lg md:text-xl'>I specialize in capturing life's special moments, from weddings to corporate events, and everything in between.

I believe that every video should tell a story, and my goal is to bring your vision to life through creative and compelling visuals. I use the latest technology and techniques to deliver high-quality, cinematic videos that will leave a lasting impression.

Whether you're looking to create a promotional video for your business, capture your wedding day, or document a special event, I'm here to help. I pride myself on my professionalism, attention to detail, and dedication to exceeding my clients' expectations.

Thank you for considering me as your videographer. I look forward to the opportunity to work with you and bring your vision to life!</p>
                <div className=' text-start justify-center w-auto h-auto border-dashed border-2 mt-5 flex  flex-wrap hover:bg-gray-200 duration-150 cursor-pointer'>

                  <ul className='p-2'>
                    <li className='font-semibold'>Name: <span className='text-slate-500 text-sm md:text-md'>Tadas</span></li>
                    <li className='font-semibold'>Age: <span className='text-slate-500 text-sm md:text-md'>26</span></li>
                    <li className='font-semibold'>Address: <span className='text-slate-500 text-sm md:text-md'>Ha Long, Vietnam</span></li>
                  </ul>

                  <ul className='p-2'>
                    <li className='font-semibold'>Email: <span className='text-slate-500 text-sm md:text-md '>milonciustadas@gmail.com</span></li>
                    <li className='font-semibold'>Experience: <span className='text-slate-500 text-sm md:text-md'>5 years</span></li>
                    
                  </ul>

                </div>

                <div className='mt-8 hidden lg:block'>
                  
                </div>
            </div>
           

        </div>
        
       
        
    </motion.div>
  )
}

export default About