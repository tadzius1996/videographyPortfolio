import React from 'react';
import { MdOutlineReviews } from 'react-icons/md';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import capture1 from '../public/captureone.PNG';
import capture2 from '../public/capturetwo.PNG';
import capture3 from '../public/capturethree.PNG';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      imageSrc: capture1,
      altText: 'Testimonial 1',
      content: 'This is the first testimonial.',
    },
    {
      id: 2,
      imageSrc: capture2,
      altText: 'Testimonial 2',
      content: 'This is the second testimonial.',
    },
    {
      id: 3,
      imageSrc: capture3,
      altText: 'Testimonial 3',
      content: 'This is the third testimonial.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Display one testimonial at a time
    slidesToScroll: 1,
    prevArrow: <div className="slick-prev">Previous</div>, // Add previous arrow
    nextArrow: <div className="slick-next">Next</div>, // Add next arrow
  };

  return (
    <div className='mt-20'>
      <MdOutlineReviews className='w-14 h-auto m-auto' />
      <h1 className='text-center text-5xl tracking-widest'>REVIEWS</h1>
      <Slider {...settings} className='mt-10'>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='px-3 group'>
            <Image
              src={testimonial.imageSrc}
              alt={testimonial.altText}
              className='m-auto'
              width={1000}
              height={700}
            />
       
          </div>
        ))}
      </Slider>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className='mt-[2rem]'
      >
        <path
          fill="black"
          fillOpacity="1"
          d="M0,192L30,181.3C60,171,120,149,180,128C240,107,300,85,360,90.7C420,96,480,128,540,165.3C600,203,660,245,720,224C780,203,840,117,900,122.7C960,128,1020,224,1080,266.7C1140,309,1200,299,1260,261.3C1320,224,1380,160,1410,128L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Testimonials;
