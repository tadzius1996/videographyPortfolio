import React from 'react'
import Social from './Social'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

function Contact() {
    const buttonClick = () => {
        navigator.clipboard.writeText('milonciustadas@gmail.com')
        alert('Email Copied!')}

        const buttonClickk = () => {
            navigator.clipboard.writeText('0773084665')
            alert('Phone Number Copied!')}
  return (
    <div className='h-auto bg-[#232323] pt-20' id='contact'>   
        <div className='text-center'>
            <h1 className='text-[#d6c9c9] text-5xl w-11/12 md:w-2/3 lg:w-1/2 m-auto'>Ready to take your videography projects to the next level? Let's work together!</h1>
            <h1 className='text-[#d6c9c9] text-2xl w-11/12 md:w-2/3 mt-10 m-auto font-thin'>Whether you need product videos, event coverage, or promotional content, I have the expertise and experience to create compelling and engaging video content that will help you stand out from the crowd.</h1>
        </div>
        <div className='flex flex-row gap-3 justify-center mt-5 pb-10'>
          <a href='https://www.facebook.com/TadaVideos'><AiOutlineFacebook className=" w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" /></a>
          <AiOutlineInstagram className=" w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" />
          <AiOutlineMail className=" w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" onClick={buttonClick}/>
          <AiOutlinePhone className=" w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" onClick={buttonClickk}/>
        </div>
    </div>
  )
}

export default Contact