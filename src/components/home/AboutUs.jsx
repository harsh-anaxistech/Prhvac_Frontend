import React from "react";
import { FaArrowRight, FaPhoneAlt, FaSnowflake } from "react-icons/fa";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
// Local images
import About1 from "../../assets/About1.jpg";
import About2 from "../../assets/About2.jpg";
import About3 from "../../assets/About3.jpg";
import About4 from "../../assets/About4.jpg";


const AboutUs = () => {
  const gridImages = [About1, About2, About3, About4];

  const stats = [
    { value: "40+", label: "Years of Excellence" },
    { value: "100", label: "Satisfaction ", suffix: "%" },
    { value: "30000+", label: "Units Installed" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14  bg-white text-gray-700">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Image Grid */}
        <div className="w-full max-w-xl">
          <div className="grid grid-cols-6 grid-rows-5 gap-2 h-[500px]">
            <div className="col-span-4 row-span-3 bg-gray-100 overflow-hidden border border-gray-200">
              <img
                src={gridImages[0]}
                alt="HVAC Service"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="col-span-2 row-span-2 bg-gray-100 overflow-hidden border border-gray-200">
              <img
                src={gridImages[1]}
                alt="AC Installation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="col-span-2 row-span-3 bg-gray-100 overflow-hidden border border-gray-200">
              <img
                src={gridImages[2]}
                alt="Technician Working"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="col-span-4 row-span-2 bg-gray-100 overflow-hidden border border-gray-200">
              <img
                src={gridImages[3]}
                alt="Customer Service"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-xl w-full flex flex-col gap-6">
          <div className="w-full">
            <h2 className="text-3xl font-semibold text-start text-[#0B1437] tracking-tight">
              ABOUT US
            </h2>
          </div>

          <div className="text-start">
            <div className="inline-flex items-center px-4 py-1.5 rounded-2 bg-gray-50">
              <FaSnowflake className="text-[#00508D] mr-2 animate-spin-slow" />
              <p className="text-sm text-[#00508D] tracking-wider font-semibold">
                Welcome to PR HVAC PRIVATE LIMITED
              </p>
            </div>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed   text-sm text-justify">
            <p>
M/S PR HVAC PRIVATE LIMITED, a leading HVAC dealer in Ahmedabad, is a renowned Dealer in the industry for providing top-notch Heating, Ventilation, and Air Conditioning (HVAC) solutions. With over 40 years of experience and expertise in the field, PR HVAC PRIVATE LIMITED has established itself as a trusted name in the market.
            </p>
            <p>The company offers a wide range of HVAC products and services that cater to both residential and commercial needs. </p>
          </div>

          {/* Countable Stats */}
          <div className="container mx-auto">
            <div className="grid grid-cols-3 divide-x divide-gray-200 border-y border-gray-200 py-4 ">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative py-4 group transition-all duration-300 "
                >
                  {/* Content */}
                  <div className="px-4 text-center">
                    <CountUp
                      end={parseInt(stat.value)}
                      duration={2.5}
                      suffix={
                        stat.suffix || (stat.value.includes("+") ? "+" : "")
                      }
                      className="block text-3xl font-light text-gray-900"
                    />
                    <p className="text-gray-500 uppercase text-xs font-medium tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Read More + Contact */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
            <Link to="/about-us" className="group">
              <button className="bg-[#00508D] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 flex items-center gap-2 hover:bg-[#003366] transition-colors">
                READ MORE{" "}
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            {/* <div className="flex items-center gap-4">
              <div className="bg-[#00508D] text-white rounded-full w-12 h-12 flex items-center justify-center text-lg hover:bg-[#003366] transition-colors">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-xs text-[#00508D]">
                  Call for immediate service
                </p>
                <p className="font-semibold text-slate-900">+91 792646 2066</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
