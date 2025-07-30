import { useState, useRef } from "react";

const HorizontalGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sliderRef = useRef(null);

  const images = [
    {
      src: "https://storage.googleapis.com/a1aa/image/b2bdfcd8-a67d-4f2b-a95a-fdccf480103b.jpg",
      alt: "Bedroom with curtains and bed, warm lighting",
    },
    // {
    //   src: "https://storage.googleapis.com/a1aa/image/398050de-b262-4814-cfad-58a3d0ee6385.jpg",
    //   alt: "Ceiling air conditioner vent with white ceiling panels"
    // },
    {
      src: "https://storage.googleapis.com/a1aa/image/3fa9120b-c424-4cbc-0068-35487037bb7d.jpg",
      alt: "Chandelier in luxury room with shelves and decorative items",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/f981f905-de8a-4e3b-1cf8-bb1161df1e93.jpg",
      alt: "Display shelves with stools in a room with warm lighting",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/de37b98c-29aa-4dd3-2aeb-fafe3ed34f46.jpg",
      alt: "Restaurant interior with string lights and tables",
    },

    // {
    //   src: "https://storage.googleapis.com/a1aa/image/f56bb3f8-5bc7-48a6-8143-051750c0357d.jpg",
    //   alt: "Living room with blue sofa, air conditioner, and curtains"
    // },
    {
      src: "https://storage.googleapis.com/a1aa/image/b62ff1e0-9751-447d-bf3f-bf325bba8fe9.jpg",
      alt: "Office space with air conditioner and cubicles",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/e49ddf72-76eb-4b8c-31d6-ecc8c685c8fa.jpg",
      alt: "Empty office space with desks and black chairs",
    },

    {
      src: "https://storage.googleapis.com/a1aa/image/a0292f70-1371-408c-1f1e-1aeef64c9146.jpg",
      alt: "Chandelier and table set in luxury room with shelves",
    },

    // {
    //   src: "https://storage.googleapis.com/a1aa/image/cbe4e185-f8ab-4803-35d5-cde6040f6977.jpg",
    //   alt: "Office room with air conditioner, chairs, and TV on wall"
    // }
  ];

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className=" bg-gray-50 relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 p-9 text-[#0B1437]">
        <div className="w-full px-4  ">
          <h2 className="text-xl md:text-3xl font-semibold text-start text-[#0B1437] tracking-tight mb-8">
            OUR COMPLETED PROJECTS
          </h2>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Slider container with gap */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide px-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex space-x-6 py-2">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-[33vw] h-[50vh] min-w-[400px] transition-all duration-300 ease-in-out"
                  style={{ scrollSnapAlign: "start" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        hoveredIndex === index ? "scale-100" : "scale-[1.03]"
                      }`}
                    />
                  </div>

                  {/* Overlay content */}
                  <div
                    className={`absolute inset-0 bg-black/30 flex flex-col justify-end p-8 transition-all duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="transform transition-transform duration-500 ease-out ${hoveredIndex === index ? 'translate-y-0' : 'translate-y-8'}">
                      <h3 className="text-white text-xl font-normal mb-1 tracking-wide">
                        {image.alt.split(",")[0]}
                      </h3>
                      <p className="text-gray-300 text-sm font-light mb-6">
                        {image.alt.split(",")[1] || "Interior design"}
                      </p>
                      {/* <button className="text-white text-sm font-light tracking-wide border-b border-white/30 pb-1 hover:border-white/60 transition-all duration-300">
                        VIEW PROJECT →
                      </button> */}
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-all duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default HorizontalGallery;
