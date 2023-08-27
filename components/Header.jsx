import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import logo from '../public/finalLogoo.png';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone, AiOutlineYoutube } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonClick = () => {
    navigator.clipboard.writeText('milonciustadas@gmail.com')
    alert('Email Copied!')}

    const buttonClickk = () => {
        navigator.clipboard.writeText('0773084665')
        alert('Phone Number Copied!')}

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <motion.header className="bg-[black]" initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    transition={{
    duration: 0.75,
    }}>

<h1 className='absolute left-7 top-8 text-white text-lg font-thin underline invisible lg:visible'>milonciustadas@gmail.com</h1>

      <div className="flex justify-center items-center text-center m-auto pt-3">
          <Link href="/">
            <motion.div className="flex" initial={{ x: -25, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{
               duration: 0.75,
               }}>
              <h1 className='text-3xl font-bold font-white leading-loose mt-4 font-serif text-white'>TADAS <span className='text-lg '>Portfolio</span></h1>
             
            </motion.div>
          </Link>
        </div>

      <nav className="max-w-screen-xl mx-auto px-10 xl:px-0 flex items-center justify-center h-24 md:h-10">
        
        <motion.div className="hidden md:flex items-center gap-20 " initial={{ x: 25, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{
               duration: 0.75,
               }}>
          <Link href="/">
            <p className={styles.listItem}>HOME</p>
          </Link>
          <Link href="#gallery" scroll={false}>
            <p className={styles.listItem}>MY WORK</p>
          </Link>
          <Link href="#contact" scroll={false}>
            <p className={styles.listItem}>CONTACT</p>
          </Link>
        </motion.div>
        <div className="md:hidden flex items-center">
          <button
            className="text-2xl text-black p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-[#c2613d] absolute top-27 h-auto z-50 w-full">
          <motion.div className="flex flex-col items-center" initial={{ y: -25, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{
               duration: 0.75,
               }}>
            <Link href="/">
              <p className="text-xl text-white p-4">HOME</p>
            </Link>
            <Link href="#portfolio">
              <p className="text-xl text-white p-4">PORTFOLIO</p>
            </Link>
            
            <Link href="#contact">
              <p className="text-xl text-white p-4">CONTACT</p>
            </Link>
          </motion.div>
            <motion.div className='flex justify-center gap-3 pb-5' initial={{ y: 25, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{
               duration: 0.75,
               }}>
              <AiOutlineFacebook className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" />
              <AiOutlineInstagram className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" />
              <a href='https://www.youtube.com/channel/UCwFCDM9u4RDDwV28-y7EVaA'><AiOutlineYoutube className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" /></a> 
              
          </motion.div>
        </div>
      )}
    </motion.header>
  );
}

export default Header;