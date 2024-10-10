import React, { useRef, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let angle = 0;

    const rotateCarousel = () => {
      angle += 3; // Rotate by 3 degrees
      carousel.style.transform = `rotate(${angle}deg)`; // Use rotate() for 2D rotation
    };

    const intervalId = setInterval(rotateCarousel, 100); // Rotate every 100ms for a smoother motion

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item"
            style={{
              transform: `rotate(${index * (360 / images.length)}deg) translateY(-150px)`,
            }}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
