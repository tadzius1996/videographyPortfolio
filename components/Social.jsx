import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';

function Social() {
  const buttonClick = () => {
    navigator.clipboard.writeText('milonciustadas@gmail.com')
    alert('Email Copied!')}

    const buttonClickk = () => {
        navigator.clipboard.writeText('0773084665')
        alert('Phone Number Copied!')}
  return (
    <>
    <motion.div  initial={{ y: 25, opacity: 0 }}
    animate={{ y:0, opacity: 1 }}
    transition={{
    duration: 0.75,
    }}>
      <AiOutlineFacebook className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" />
      <AiOutlineInstagram className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" />
      <AiOutlineMail className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" onClick={buttonClick}/>
      <AiOutlinePhone className='w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer' onClick={buttonClick}/>
    </motion.div>
    </>
  )
}

export default Social