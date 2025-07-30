import React from "react";
import {
  FaSnowflake,
  FaArrowRight,
  FaTools,
  FaFan,
  FaWind,
  FaTint,
  FaLeaf,
  FaThermometerHalf,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    id: "01",
    title: "AC Installation Services",
    description:
      "Expert air conditioner installation for homes and commercial spaces. We ensure energy-efficient setup, proper sizing, and optimized cooling performance.",
    icon: <FaThermometerHalf />,
    accent: "#FF6B6B",
  },
  {
    id: "02",
    title: "AC Repair & Maintenance",
    description:
      "Fast and affordable air conditioning repair services. From unusual noises to poor cooling, our technicians diagnose and fix issues to restore comfort quickly.",
    icon: <FaTools />,
    accent: "#4ECDC4",
  },
  {
    id: "03",
    title: "HVAC System Services",
    description:
      "Complete HVAC solutions including installation, repair, and regular maintenance to keep your heating and cooling systems running smoothly all year long.",
    icon: <FaFan />,
    accent: "#FFD166",
  },
  {
    id: "04",
    title: "Air Duct Cleaning & Sealing",
    description:
      "Improve indoor air quality with professional duct cleaning services. We remove dust, mold, and allergens, and seal leaks to enhance airflow and system efficiency.",
    icon: <FaWind />,
    accent: "#06D6A0",
  },
  {
    id: "05",
    title: "Indoor Air Quality Testing",
    description:
      "Ensure a healthier living environment with detailed indoor air quality testing. Identify pollutants, allergens, and humidity imbalances in your space.",
    icon: <FaTint />,
    accent: "#A78BFA",
  },
  {
    id: "06",
    title: "Energy-Efficient AC Upgrades",
    description:
      "Upgrade to energy-saving air conditioning systems. Lower your electricity bills and reduce your carbon footprint with our eco-friendly AC solutions.",
    icon: <FaLeaf />,
    accent: "#68D391",
  },
];

const Service = () => {
  return (
<section className="px-2 md:px-6 py-12 text-[#0B1437] bg-gray-50">
  <div className="px-2 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
        {/* <div className="text-center mb-12">
          <div className="inline-flex items-center mb-4 px-4 py-1.5 rounded-full bg-[#00508D] bg-opacity-10">
            <FaSnowflake className="text-[#00508D] mr-2 animate-spin-slow" />
            <p className="text-sm text-[#00508D] tracking-wider font-semibold">
              OUR BEST SERVICES
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Comfort Delivered – HVAC System Care
          </h2>
        </div> */}
        <div className="w-full px-4  ">
          <h2 className="text-xl md:text-3xl   font-semibold text-start text-[#0B1437] tracking-tight mb-8">
            TAILORED AIR CONDITIONING SOLUTIONS
          </h2>
        </div>

        {/* Services Grid - Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="relative group overflow-hidden">
              {/* Decorative accent */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: service.accent }}
              ></div>

              {/* Card Content */}
              <div className="h-full bg-white border border-gray-100  shadow-sm group-hover:shadow-md transition-all duration-300 pt-8 px-6 pb-6 flex flex-col">
                {/* Icon with gradient background */}
                <div className="mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${service.accent} 0%, #00508D 100%)`,
                    }}
                  >
                    {service.icon}
                  </div>
                  {/* <span className="text-xs font-semibold tracking-wider text-gray-400">
                    SERVICE {service.id}
                  </span> */}
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-justify mb-6 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Read More Button */}
                <div className="mt-auto">

                            <Link to="/services" className="group">
                  <button className="flex items-center text-[#00508D] font-medium text-sm group-hover:text-[#003366] transition-colors duration-300">
                    Read more
                    <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#00508D] bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300">
                      <FaArrowRight className="text-xs" />
                    </span>
                  </button>


          </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <Link to="/services" className="group">
            <button className="group border border-[#00508D] text-[#00508D] text-xs font-bold uppercase tracking-wider px-6 py-3 flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-[#003366] hover:text-white">
              Explore All Services
            </button>


          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service;
