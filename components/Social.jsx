import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone, AiFillBehanceSquare } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';

function Social() {
  const buttonClick = () => {
    navigator.clipboard.writeText('motioncraftmedia@protonmail.com')
    alert('Email Copied!')}

    const buttonClickk = () => {
        navigator.clipboard.writeText('+84773084665')
        alert('Phone Number Copied!')}
  return (
    <>
    <motion.div  initial={{ y: 25, opacity: 0 }}
    animate={{ y:0, opacity: 1 }}
    transition={{
    duration: 0.75,
    }}>
      <a href="https://www.facebook.com/profile.php?id=100091396505758"><AiOutlineFacebook className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" /></a>
      <a href="https://www.instagram.com/motioncraftmedia/"><AiOutlineInstagram className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" /></a>
      <a href='https://www.behance.net/tadasmiloncius'><AiFillBehanceSquare className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" /></a>  
    </motion.div>
    </>
  )
}

export default Social