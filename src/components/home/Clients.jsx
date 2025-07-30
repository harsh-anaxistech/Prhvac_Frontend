import React from "react";

// Import all 47 logos
import logo1 from "../../assets/logo/logo1.png";
import logo2 from "../../assets/logo/logo2.png";
import logo3 from "../../assets/logo/logo3.png";
import logo4 from "../../assets/logo/logo4.png";
import logo5 from "../../assets/logo/logo5.png";
import logo6 from "../../assets/logo/logo6.png";
import logo7 from "../../assets/logo/logo7.png";
import logo8 from "../../assets/logo/logo8.png";
import logo9 from "../../assets/logo/logo9.png";
import logo10 from "../../assets/logo/logo10.png";
import logo11 from "../../assets/logo/logo11.png";
import logo12 from "../../assets/logo/logo12.png";
import logo13 from "../../assets/logo/logo13.png";
import logo14 from "../../assets/logo/logo14.png";
import logo15 from "../../assets/logo/logo15.png";
import logo16 from "../../assets/logo/logo16.png";
import logo17 from "../../assets/logo/logo17.png";
import logo18 from "../../assets/logo/logo18.png";
import logo19 from "../../assets/logo/logo19.png";
import logo20 from "../../assets/logo/logo20.png";
import logo21 from "../../assets/logo/logo21.png";
import logo22 from "../../assets/logo/logo22.png";
import logo23 from "../../assets/logo/logo23.png";
import logo24 from "../../assets/logo/logo24.png";
import logo25 from "../../assets/logo/logo25.png";
import logo26 from "../../assets/logo/logo26.png";
import logo27 from "../../assets/logo/logo27.png";
import logo28 from "../../assets/logo/logo28.png";
import logo29 from "../../assets/logo/logo29.png";
import logo30 from "../../assets/logo/logo30.png";
import logo31 from "../../assets/logo/logo31.png";
import logo32 from "../../assets/logo/logo32.png";
import logo33 from "../../assets/logo/logo33.png";
import logo34 from "../../assets/logo/logo34.png";
import logo35 from "../../assets/logo/logo35.png";
import logo36 from "../../assets/logo/logo36.png";
import logo37 from "../../assets/logo/logo37.png";
import logo38 from "../../assets/logo/logo38.png";
import logo39 from "../../assets/logo/logo39.png";
import logo40 from "../../assets/logo/logo40.png";
import logo41 from "../../assets/logo/logo41.png";
import logo42 from "../../assets/logo/logo42.png";
import logo43 from "../../assets/logo/logo43.png";
import logo44 from "../../assets/logo/logo44.png";
import logo45 from "../../assets/logo/logo45.png";
import logo46 from "../../assets/logo/logo46.png";
import logo47 from "../../assets/logo/logo47.png";

const Clients = () => {
  // Create an array of logo imports
  const clientLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
    logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30,
    logo31, logo32, logo33, logo34, logo35, logo36, logo37, logo38, logo39, logo40,
    logo41, logo42, logo43, logo44, logo45, logo46, logo47,
  ];

  return (
    <section className="py-10  relative overflow-hidden">
      {/* Logo marquee with colored backdrop */}
      <div className="relative rounded-xl mx-6">
        {/* Single continuous marquee */}
        <div className="flex overflow-hidden">
          {/* Duplicate the array to create a seamless loop */}
          <div className="flex items-center animate-scroll px-4">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div
                key={`logo-${index}`} // Using index as key for the duplicated array
                className="mx-6 flex-shrink-0 transition-all duration-500 hover:scale-110"
              >
                <img
                  src={logo} // Use the imported logo directly
                  alt={`Partner logo ${index + 1}`}
                  className="h-16 w-auto object-contain max-w-[180px] opacity-90 hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Clients;