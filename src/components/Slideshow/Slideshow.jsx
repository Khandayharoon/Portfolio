// components/Slideshow.jsx
import React, { useState, useEffect } from "react";

const Slideshow = () => {
  // Dynamically generate image paths from /div-images/1.jpg to /div-images/42.jpg
  const images = Array.from(
    { length: 42 },
    (_, index) => `/div-images/${index + 1}.jpg`
  );

  const [currentImage, setCurrentImage] = useState(0);

  // Change the image every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="w-full h-full rounded-lg bg-cover bg-center shadow-lg transition-all ease-in-out duration-700"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    ></div>
  );
};

export default Slideshow;
