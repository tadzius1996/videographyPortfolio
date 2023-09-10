import React from 'react'
import Social from './Social'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone, AiOutlineYoutube, AiFillBehanceSquare } from 'react-icons/ai';

function Contact() {
    const buttonClick = () => {
        navigator.clipboard.writeText('motioncraftmedia@protonmail.com')
        alert('Email Copied!')}

        const buttonClickk = () => {
            navigator.clipboard.writeText('+84773084665')
            alert('Phone Number Copied!')}
  return (
    <div className='h-auto bg-black pt-10' id='contact'>   
        <div className='text-center'>
            <h1 className='text-[#ffffff] text-5xl w-11/12 md:w-2/3 lg:w-1/2 m-auto'>Ready to take your projects to the next level? Let's work together!</h1>
            <h1 className='text-[#ffffff] text-2xl w-11/12 md:w-2/3 mt-10 m-auto font-thin'>I create engaging video content optimized for social media, YouTube, and promotions. My services include short / long form editing, graphics, color grading, animation, and audio mixing. I have the skills and experience to produce <span className='text-[#ff9035]'> content that make you stand out. </span></h1>
        </div>
        <div className='flex flex-row gap-3 justify-center mt-5 pb-10'>
        <a href="https://www.facebook.com/TadaVideos"><AiOutlineFacebook className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" /></a>
      <a href="https://www.instagram.com/tadascinema/"><AiOutlineInstagram className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" /></a>
      <a href='https://www.youtube.com/channel/UCwFCDM9u4RDDwV28-y7EVaA'><AiOutlineYoutube className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" /></a>  
          
        </div>
    </div>
  )
}

export default Contact