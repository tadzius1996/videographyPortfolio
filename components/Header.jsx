import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import logo from '../public/finalLogoo.png';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
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
    <motion.header className="bg-[#c2613d]" initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    transition={{
    duration: 0.75,
    }}>
      <nav className="max-w-screen-xl mx-auto px-10 xl:px-0 flex items-center justify-between h-24 md:h-28">
        <div className="flex items-center">
          <Link href="/">
            <motion.p className="flex-shrink-0" initial={{ x: -25, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{
               duration: 0.75,
               }}>
              <Image src={logo} alt="logo" width={100} height={48} />
            </motion.p>
          </Link>
        </div>
        <motion.div className="hidden md:flex items-center gap-5" initial={{ x: 25, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{
               duration: 0.75,
               }}>
          <Link href="/">
            <p className={styles.listItem}>HOME</p>
          </Link>
          <Link href="#gallery" scroll={false}>
            <p className={styles.listItem}>PORTFOLIO</p>
          </Link>
          <Link href="#incentive" scroll={false}>
            <p className={styles.listItem}>INCENTIVE</p>
          </Link>
          <Link href="#about" scroll={false}>
            <p className={styles.listItem}>ABOUT</p>
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
            <svg className='w-14 mr-3 h-auto text-gray-200' viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
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
            <Link href="#incentive" scroll={false}>
            <p className="text-xl text-white p-4">INCENTIVE</p>
          </Link>
            <Link href="#about">
              <p className="text-xl text-white p-4">ABOUT</p>
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
              <AiOutlineMail className="w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer" onClick={buttonClick}/>
              <AiOutlinePhone className='w-10 py-2 h-auto text-white hover:scale-105 duration-75 ease-in-out cursor-pointer' onClick={buttonClick}/>
          </motion.div>
        </div>
      )}
    </motion.header>
  );
}

export default Header;