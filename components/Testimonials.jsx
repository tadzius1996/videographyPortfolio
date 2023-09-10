import React from 'react';
import { MdOutlineReviews } from 'react-icons/md';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Testimonials() {
  const testimonials = [
    {
      id: 1,
      
      altText: 'Testimonial 1',
      content: 'This is the first testimonial.',
    },
    {
      id: 2,
      
      altText: 'Testimonial 2',
      content: 'This is the second testimonial.',
    },
    {
      id: 3,
      
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

      
    </div>
  );
}

export default Testimonials;
