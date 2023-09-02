import React from 'react';
import { BsCamera2 } from 'react-icons/bs';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import kiss from '../public/kisss.png';
import farm from '../public/FARMA.png';
import owlBright from '../public/owlbright.png';
import logoDesign from '../public/logoDesign.png';
import motionGraphics from '../public/motionGraphics.jpg';
import chefbox from '../public/chefbox.png';
import beautyLogo from '../public/BEAUTYLOGO.png';
import graphics from '../public/advert.png';
import beauty from '../public/beauty.png';
import personal from '../public/thumbnail.png';
import britain from '../public/britain.png';

function Works() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className='bg-[#f5f5f5] h-auto' id='gallery'>
      <div className='bg-orange-600 w-[2px] h-10 absolute bottom-[-1rem] left-1/2' />
      <div className='text-center flex flex-col gap-2 pt-14'>
        <BsCamera2 className='w-14 h-auto m-auto' />
        <h1 className='text-center text-5xl tracking-widest'>PORTFOLIO</h1>
        <Slider {...settings} className='mt-5'>
        <div className='px-3 group'>
    <div className='relative cursor-pointer'>
      <Image
        src={motionGraphics}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 text-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
        <a href='https://www.youtube.com/watch?v=iqZt6V1totg&ab_channel=TadasMiloncius' className='text-xl tracking-widest'>YOUTUBE</a>
      </div>
    </div>
  </div>

  <div className='px-3 group cursor-pointer'>
    <div className='relative'>
      <Image
        src={britain}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 -500 ease-in-out opacity-0 duration-500 group-hover:opacity-100'>
        <a href='https://www.youtube.com/watch?v=rvlAmhMlRik&ab_channel=TadasMiloncius' className='text-xl tracking-widest text-white'>YOUTUBE</a>
      </div>
    </div>
  </div>


  <div className='px-3 group'>
    <div className='relative cursor-pointer'>
      <Image
        src={owlBright}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 text-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
        <a href='https://www.youtube.com/watch?v=2dVOl2_JkPQ&t=1s&ab_channel=MotionCraft' className='text-xl tracking-widest'>EXPLAINER ANIMATION</a>
      </div>
    </div>
  </div>

  <div className='px-3 group cursor-pointer'>
    <div className='relative'>
      <Image
        src={personal}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 -500 ease-in-out opacity-0 duration-500 group-hover:opacity-100'>
        <a href='https://www.facebook.com/TadaVideos/videos/318182335744248' className='text-xl tracking-widest text-white'>FOOTAGE COMPILATION</a>
      </div>
    </div>
  </div>

  <div className='px-3 group'>
    <div className='relative cursor-pointer'>
      <Image
        src={farm}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 text-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
        <a href='https://www.youtube.com/watch?v=H6Iis4aYHdM' className='text-xl tracking-widest'>MOTION GRAPHICS</a>
      </div>
    </div>
  </div>

  <div className='px-3 group'>
    <div className='relative cursor-pointer'>
      <Image
        src={chefbox}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 text-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
        <a href='https://www.youtube.com/watch?v=sPKh2TFx_t0' className='text-xl tracking-widest'>EXPLAINER ANIMATION</a>
      </div>
    </div>
  </div>
  <div className='px-3 group'>
    <div className='relative cursor-pointer'>
      <Image
        src={beautyLogo}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 text-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
        <a href='https://www.youtube.com/watch?v=kp0iWXPLmGs' className='text-xl tracking-widest'>PRODUCT ADVERTISEMENT</a>
      </div>
    </div>
  </div>
  <div className='px-3 group'>
    <div className='relative cursor-pointer'>
      <Image
        src={kiss}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 text-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
        <a href='https://www.facebook.com/phukienthoitranga/videos/2123152517747184' className='text-xl tracking-widest'>BRAND RECOGNITION</a>
      </div>
    </div>
  </div>
  <div className='px-3 group cursor-pointer'>
    <div className='relative'>
      <Image
        src={graphics}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 text-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
        <a href='https://www.youtube.com/watch?v=uIlig0EcWP4' className='text-xl tracking-widest'>BRAND PROMO</a>
      </div>
    </div>
  </div>
  <div className='px-3 group cursor-pointer'>
    <div className='relative'>
      <Image
        src={beauty}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 text-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
        <a href='https://www.facebook.com/tadas.miloncius/videos/669442111595900' className='text-xl tracking-widest'>VIDEO EDITING</a>
      </div>
    </div>
  </div>


 
  
  <div className='px-3 group'>
    <div className='relative cursor-pointer'>
      <Image
        src={logoDesign}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 text-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
        <a href='https://www.youtube.com/watch?v=AZmjGi94pfI' className='text-xl tracking-widest'>LOGO ANIMATION</a>
      </div>
    </div>
  </div>
  
</Slider>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='mt-[2rem]'><path fill="black" fill-opacity="1" d="M0,192L30,181.3C60,171,120,149,180,128C240,107,300,85,360,90.7C420,96,480,128,540,165.3C600,203,660,245,720,224C780,203,840,117,900,122.7C960,128,1020,224,1080,266.7C1140,309,1200,299,1260,261.3C1320,224,1380,160,1410,128L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
</div>
);
}

export default Works; 
