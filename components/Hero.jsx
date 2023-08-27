import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Social from './Social';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

function Hero() {
    const wedding = require('../public/wedding.jpg');
    const editor = require('../public/editor.jpg');
    const filmMaker = require('../public/filmMaker.jpg');
    const myself = require('../public/uss.jpg');
    return (
      <div className=" h-[87vh]">
        {/* Add dark overlay */}
         

         <div className='h-[87vh] flex justify-around flex-row bg-[#000000]'>
            
            <div className='flex w-4/5 lg:w-2/3 items-center justify-center text-center flex-col gap-7 font-thin mt-[-12rem] lg:mt-[0rem]' 
               >
              <h1 className='z-20 text-7xl lg:text-8xl text-white leading-tight'>Bring Your Vision to Life<br/></h1>
              <h2 className='text-3xl text-white z-50'>Video edits | Animation | Graphic design | <span className='text-[#ff9035]'> Content creation</span></h2>
              <Link href="#gallery" scroll={false} className={styles.button}><p>Portfolio</p></Link>
            </div>
            
          </div>

          

        
        <div className='absolute bottom-10 left-5 pb-7 lg:pb-0'>
          <Social/>
        </div>
      </div>
    );
  }

export default Hero
