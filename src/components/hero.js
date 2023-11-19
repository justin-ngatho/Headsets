import React, {useEffect, useState} from "react";

export default function Hero ()
 {

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselData = [
    {
      id: 1,
      imageUrl: "./images/hero5.jpg",
      caption: 'Image 1',
    },
    {
      id: 2,
      imageUrl: './images/hero2.jpg',
      caption: 'Image 2',
    },
    {
      id: 3,
      imageUrl: './images/hero4.jpg',
      caption: 'Image 3',
    },
  ];

  const totalSlides = carouselData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    }, 3000); // Set the autoplay interval (in milliseconds), here it's set to 3 seconds (3000ms)

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [totalSlides]);

  return (
    <div id="autoplayCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {carouselData.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="img-container">
            <img src={slide.imageUrl} className="d-block w-100" alt={slide.caption} />
            </div>
            
            <div className="carousel-caption d-none d-md-block">
              <h5>{slide.caption}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
