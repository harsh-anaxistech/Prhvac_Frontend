import React from 'react';
import BgImage from "../../assets/Clients-banner.jpg";

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


const ClientSection = () => {
  // Create an array of logo imports
  const clientLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
    logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30,
    logo31, logo32, logo33, logo34, logo35, logo36, logo37, logo38, logo39, logo40,
    logo41, logo42, logo43, logo44, logo45, logo46, logo47,
  ];

  return (
    <>
      {/* Breadcrumb Hero Section */}
      <div
        className="relative w-full h-[300px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(102, 163, 210, 0.6), rgba(102, 163, 210, 0.4)), url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Clients
          </h1>
        </div>
      </div>
      <section id="clients" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {clientLogos.map((logo, index) => (
              <div
                key={index} // Using index as key since the logos are now imported locally
                className="flex items-center justify-center p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <img
                  src={logo} // Use the imported logo directly
                  alt={`Client logo ${index + 1}`}
                  className="max-h-16 w-full object-contain hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientSection;