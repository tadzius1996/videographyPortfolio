import React from 'react';
import { BsCamera2 } from 'react-icons/bs';
import { MdComputer } from 'react-icons/md';
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
import turkey from '../public/turkey.png';
import turkeytwo from '../public/turkeytwo.png';
import catba from '../public/catba.png';

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
        <MdComputer className='w-14 h-auto m-auto' />
        <h1 className='text-center text-5xl tracking-widest'>ANIMATION</h1>
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


  <div className='text-center flex flex-col gap-2 pt-14'>
        <BsCamera2 className='w-14 h-auto m-auto' />
        <h1 className='text-center text-5xl tracking-widest'>CUTS</h1>
        <Slider {...settings} className='mt-5'>
        

        <div className='px-3 group cursor-pointer'>
    <div className='relative'>
      <Image
        src={turkey}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 -500 ease-in-out opacity-0 duration-500 group-hover:opacity-100'>
        <a href='https://www.youtube.com/watch?v=1o5aLVwl1dY&ab_channel=TadasMiloncius' className='text-xl tracking-widest text-white'>YOUTUBE</a>
      </div>
    </div>
  </div>


  <div className='px-3 group cursor-pointer'>
    <div className='relative'>
      <Image
        src={catba}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 -500 ease-in-out opacity-0 duration-500 group-hover:opacity-100'>
        <a href='https://www.youtube.com/watch?v=wpWoVpeEESQ&t=40s&ab_channel=TadasMiloncius' className='text-xl tracking-widest text-white'>YOUTUBE</a>
      </div>
    </div>
  </div>

  <div className='px-3 group'>
    <div className='relative cursor-pointer'>
      <Image
        src={turkeytwo}
        alt='logo'
        className='w-80vw h-auto transition duration-500 ease-in-out group-hover:brightness-50'
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full bg-opacity-50 py-2 px-3 text-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100'>
        <a href='https://www.youtube.com/watch?v=1aAPMs6QUVo&ab_channel=TadasMiloncius' className='text-xl tracking-widest'>YOUTUBE</a>
      </div>
    </div>
  </div>
  
  
</Slider>



  </div>


  

 
  
</div>
);
}

export default Works; 
