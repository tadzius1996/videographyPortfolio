import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Social from './Social';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

function Hero() {
    const wedding = require('../public/wedding.jpg');
    const editor = require('../public/editor.jpg');
    const filmMaker = require('../public/filmMaker.jpg');
    const myself = require('../public/uss.jpg');
    return (
      <div className=" h-[87vh]">
        {/* Add dark overlay */}
        
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          showArrows={false}
        > 
         

         <div className='h-[87vh] flex justify-around flex-row ' style={{backgroundImage: "url('/editor.jpg')", backgroundSize: "cover"}}>
            
            <motion.div className='flex w-4/5 lg:w-2/3 items-center justify-center text-center flex-col gap-7 font-thin' initial={{ y: -25, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{
               duration: 0.75,
               }}>
              <h1 className='z-20 text-7xl lg:text-8xl text-white leading-tight'>Bring Your Vision to Life<br/></h1>
              <h2 className='text-3xl text-white z-50'>with Professional<span className='text-[#ff9035]'> Video Editing Services</span></h2>
              <Link href="#gallery" scroll={false} className={styles.button}><p>Portfolio</p></Link>
            </motion.div>
            <div className="absolute w-full h-full bg-black opacity-60 z-10" />
          </div>

          <div className='h-[87vh] flex justify-around flex-row ' style={{backgroundImage: "url('/filmMaker.jpg')", backgroundSize: "cover"}}>
            <div className='flex w-4/5 lg:w-2/3 items-center justify-center text-center flex-col gap-7 font-thin'>
              <h1 className='z-20  text-7xl lg:text-8xl text-white'>See It to Believe It<br/></h1>
              <h2 className='text-3xl text-white'>Discover Our Product/Service Through Captivating <span className='text-[#ff9035]'>Video Advertising</span></h2>
              <Link href="#gallery" scroll={false} className={styles.button}><p>Portfolio</p></Link>
            </div>
            <div className="absolute w-full h-full bg-black opacity-30 z-10" />
          </div>

        </Carousel>
        <div className='absolute bottom-10 left-5 pb-7 lg:pb-0'>
          <Social/>
        </div>
      </div>
    );
  }

export default Hero
