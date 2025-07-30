import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

// Import images from your assets folder
import bhaktiGandhiImage from "../../assets/2.png"; // Adjust path as per your project structure
import srmAirConditioningImage from "../../assets/1.png"; // Adjust path as per your project structure
import mufizSaiyedImage from "../../assets/3.png"; // Adjust path as per your project structure

const testimonialsData = [
  {
    id: 1,
    name: "Bhakti Gandhi",
    text: "Product quality is excellent, and the after-sales service is truly commendable. They stand by their products!",
    rating: 5,
    image: bhaktiGandhiImage,
  },
  {
    id: 2,
    name: "SRM Air Conditioning",
    text: "Outstanding service provided by the team. They are highly efficient and reliable. Definitely recommend!",
    rating: 5,
    image: srmAirConditioningImage,
  },
  {
    id: 3,
    name: "Mufiz Saiyed",
    text: "Simply great! The experience was smooth from start to finish. Very satisfied with their professionalism.",
    rating: 5,
    image: mufizSaiyedImage,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  // Using an array of refs to assign to each mapped item
  const cardRefs = useRef([]); 
  // Ensure the array has a ref for each item
  cardRefs.current = testimonialsData.map(
    (_, i) => cardRefs.current[i] ?? React.createRef()
  );

  // useCallback to memoize handleScroll and prevent re-creation on every render
  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current && cardRefs.current.every(ref => ref.current)) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const containerCenter = scrollLeft + containerWidth / 2;

      let closestCardIndex = 0;
      let minDistance = Infinity;

      testimonialsData.forEach((_, index) => {
        const cardElement = cardRefs.current[index].current;
        if (cardElement) {
          // Calculate the center of the current card relative to the scroll container's content
          const cardCenterRelativeToContainer = cardElement.offsetLeft + cardElement.offsetWidth / 2;
          
          // Distance from the card's center to the center of the scroll container's visible area
          const distance = Math.abs(cardCenterRelativeToContainer - containerCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestCardIndex = index;
          }
        }
      });
      
      if (closestCardIndex !== activeIndex) {
        setActiveIndex(closestCardIndex);
      }
    }
  }, [activeIndex]); // Only re-create if activeIndex changes

  // Effect for attaching/detaching scroll event listener
  useEffect(() => {
    const currentContainer = scrollContainerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("scroll", handleScroll);
      // Call handleScroll once on mount to set initial active index
      handleScroll();
      return () => {
        currentContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]); // Depend on handleScroll memoized function

  // Function to scroll to a specific card when a dot is clicked
  const scrollToCard = (index) => {
    if (scrollContainerRef.current && cardRefs.current[index] && cardRefs.current[index].current) {
      const cardElement = cardRefs.current[index].current;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      
      // Calculate scrollLeft to center the card
      const scrollLeft = cardElement.offsetLeft - (containerWidth / 2) + (cardElement.offsetWidth / 2);
      
      scrollContainerRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
      // Update activeIndex immediately for responsiveness
      setActiveIndex(index); 
    }
  };

  return (
    <section className="py-10 px-2 md:px-6 ">
      <div className="max-w-7xl px-2 md:px-6 mx-auto">
        <div className="w-full px-6">
          <h2 className="text-xl md:text-3xl font-semibold text-start text-[#0B1437] tracking-tight mb-8">
            TESTIMONIALS
          </h2>
        </div>

        {/* Horizontal Scroller for mobile, Grid for desktop */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 md:grid md:grid-cols-3 gap-6 pb-4
                     -mx-4 md:mx-0 px-4 md:px-0"
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={cardRefs.current[index]}
              className="bg-white border border-gray-200 p-6 rounded-lg flex-none h-64 flex flex-col justify-between 
                         flex-shrink-0 w-[calc(100vw-3rem)] mx-3 snap-center md:w-auto md:mx-0" 
            >
              {/* Rating */}
              <div className="flex text-[#00508D] text-sm mb-3">
                {[...Array(5)].map((_, i) =>
                  i < testimonial.rating ? (
                    <FaStar key={i} />
                  ) : (
                    <FaRegStar key={i} />
                  )
                )}
              </div>

              {/* Text */}
              <p className="text-gray-700 text-sm mb-4 flex-grow">
                {testimonial.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full border border-[#00508D] object-cover"
                />
                <div>
                  <p className="text-[#00508D] font-medium text-sm">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots for mobile view */}
        <div className="md:hidden flex justify-center mt-6">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === activeIndex ? "bg-[#00508D]" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;