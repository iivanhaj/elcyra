import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SolarEvents = () => {
  // Sample data for solar events
  const solarEvents = [
    { date: '2024-05-10', event: 'Solar Eclipse' },
    { date: '2024-06-21', event: 'Summer Solstice' },
    { date: '2024-09-23', event: 'Autumn Equinox' },
    // Add more solar events here
  ];

  // State to manage the current slide index
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Settings for the carousel
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlideIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // On smaller screens, show 1 card at a time
        },
      },
    ],
  };

  return (
    <>

<div className='text-5xl font-semibold text-[#faebd7] flex justify-center py-6 font-serif'>
            Upcoming Solar Events
        </div>
    <div className="w-full">
      <Slider {...settings}>
        {solarEvents.map((event, index) => (
          <div key={index} className={index === currentSlideIndex ? 'active-slide' : ''}>
            <div className="p-4">
              <div className="bg-blue-200 rounded-lg shadow-lg">
                <div className="p-6">
                  <h5 className="text-lg font-semibold mb-2">{event.event}</h5>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default SolarEvents;