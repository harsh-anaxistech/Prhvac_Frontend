import React, { useEffect, useState } from "react";
import Banner1 from "../../assets/HeroBanner_1.jpg";
import Banner2 from "../../assets/HeroBanner_2.jpg"; 
import Banner3 from "../../assets/HeroBanner_3.jpg"; 
import Banner4 from "../../assets/HeroBanner_4.jpg"; 

const images = [Banner1, Banner2, Banner3, Banner4];

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(timer); // Cleanup
  }, []);

  return (
    <div className="relative w-full herosection overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full  object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Text Overlay (only once) */}
      {/* <div className="absolute inset-0 flex items-center justify-center text-white p-6">
        <div className="text-center max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Cool Comfort, Trusted Service
          </h2>
          <p className="text-sm md:text-base">
            Discover reliable AC products and expert services tailored to keep
            your spaces perfectly cool all year round.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default HeroSection;
