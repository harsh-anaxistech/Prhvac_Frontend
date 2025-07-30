import React from "react";
import {  FiCheckCircle } from "react-icons/fi";
import BgImage from "../../assets/Service-banner.jpg";
import CTA from "../../assets/CTA.jpg";
import { Link } from "react-router-dom";

import service1 from "../../assets/Service1.jpg";
import service2 from "../../assets/Service2.jpg";
import service3 from "../../assets/Service3.jpg";
import service4 from "../../assets/Service4.jpg";
import service5 from "../../assets/Service5.jpg";
import service6 from "../../assets/Service6.jpg";

const services = [
  {
    id: "01",
    title: "AC Installation Services",
    image: service1,
    description:
      "Expert air conditioner installation for homes and commercial spaces. We ensure energy-efficient setup, proper sizing, and optimized cooling performance.",
    features: [
      "Proper sizing assessment",
      "Energy-efficient setup",
      "Professional installation",
    ],
  },
  {
    id: "02",
    title: "AC Repair & Maintenance",
    image: service2,
    description:
      "Fast and affordable air conditioning repair services. From unusual noises to poor cooling, our technicians diagnose and fix issues to restore comfort quickly.",
    features: [
      "Satisfaction Guaranteed",
      "Diagnostic testing",
      "Preventive maintenance",
    ],
  },
  {
    id: "03",
    title: "HVAC System Services",
    image: service3,
    description:
      "Complete HVAC solutions including installation, repair, and regular maintenance to keep your heating and cooling systems running smoothly all year long.",
    features: [
      "Full system inspection",
      "Seasonal maintenance",
      "Performance optimization",
    ],
  },
  {
    id: "04",
    title: "Air Duct Cleaning & Sealing",
    image: service4,
    description:
      "Improve indoor air quality with professional duct cleaning services. We remove dust, mold, and allergens, and seal leaks to enhance airflow and system efficiency.",
    features: ["Mold inspection", "Allergen removal", "Duct sealing"],
  },
  {
    id: "05",
    title: "Indoor Air Quality Testing",
    image: service5,
    description:
      "Ensure a healthier living environment with detailed indoor air quality testing. Identify pollutants, allergens, and humidity imbalances in your space.",
    features: ["Pollutant detection", "Humidity analysis", "Custom solutions"],
  },
  {
    id: "06",
    title: "Energy-Efficient AC Upgrades",
    image: service6,
    description:
      "Upgrade to energy-saving air conditioning systems. Lower your electricity bills and reduce your carbon footprint with our eco-friendly AC solutions.",
    features: ["Energy audits", "Smart system upgrades", "Rebate assistance"],
  },
];



const Services = () => {
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
            Services
          </h1>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 lg:py-16">
        <div className="container mx-auto px-6">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white cursor-pointer  overflow-hidden  hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-justify md:h-[130px]">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <FiCheckCircle className="text-[#00508D] mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-20 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${CTA})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium HVAC Services You Can Trust
            </h2>
            <p className="text-base md:text-lg text-blue-100 mb-6">
              Fast response. Expert technicians. Satisfaction guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
<a href="tel:+919825098767">
  <button className="bg-white text-[#00508D] hover:bg-blue-100 px-6 py-3 rounded-full font-semibold shadow-md transition duration-300">
    Call Now: +91 9825098767
  </button>
</a>

<Link to="/contact">
  <button className="border-2 border-white text-white hover:bg-white hover:text-[#00508D] px-6 py-3 rounded-full font-semibold transition duration-300">
    Contact Us
  </button>
</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
