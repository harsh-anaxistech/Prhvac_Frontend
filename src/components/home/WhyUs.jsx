import React from "react";
import { FiCheckCircle } from "react-icons/fi";

// Import icons from assets
import expertiseIcon from "../../assets/quality.png";
import productsIcon from "../../assets/digital.png";
import pricingIcon from "../../assets/reward.png";
import serviceIcon from "../../assets/customer-care.png";
import installationIcon from "../../assets//installation.png";
import energyIcon from "../../assets/energy-control.png";
import satisfactionIcon from "../../assets/customer-experience.png";

const WhyUs = () => {
  const features = [
    {
      title: "Expertise and Experience",
      icon: expertiseIcon,
      list: ["Our team of experienced technicians and engineers provides top-quality AC solutions with years of industry expertise."],
    },
    {
      title: "Wide Range of Products",
      icon: productsIcon,
      list: ["We offer split AC, window AC, and commercial AC systems from leading industry brands."],
    },
    {
      title: "Competitive Prices",
      icon: pricingIcon,
      list: ["We provide competitive pricing for AC products and services without compromising quality."],
    },
    {
      title: "Professional Installation",
      icon: installationIcon,
      list: ["Our technicians ensure correct installation for maximum efficiency and longevity of your AC system."],
    },
    {
      title: "After-Sales Service",
      icon: serviceIcon,
      list: ["Our team is available 24/7 to address any issues, ensuring complete customer satisfaction."],
    },

    {
      title: "Energy Efficiency",
      icon: energyIcon,
      list: ["Our energy-efficient AC products help save on electricity bills and reduce your carbon footprint."],
    },
    {
      title: "Customer Satisfaction",
      icon: satisfactionIcon,
      list: ["We strive to provide the best experience from consultation to installation and after-sales service."],
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="w-full px-4">
          <h2 className="text-xl md:text-3xl font-semibold text-start text-[#0B1437] tracking-tight mb-8">
            WHY CHOOSE US ?
          </h2>
        </div>
        {/* Top Row: 4 Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          {features.slice(0, 4).map((feature, index) => (
            <div
              key={index}
              className="relative h-48 w-full cursor-pointer group perspective-1000"
            >
              {/* Front Card */}
              <div className="absolute inset-0 transition-transform duration-500 transform group-hover:-rotate-y-180 backface-hidden bg-white border border-[#00508D] p-6 flex flex-col items-center justify-center">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-lg font-medium text-[#00508D] text-center">
                  {feature.title}
                </h3>
              </div>
              {/* Back Card */}
              <div className="absolute inset-0 transition-transform duration-500 transform rotate-y-180 backface-hidden bg-[#00508D] p-6  shadow flex items-center justify-center">
                <ul className="space-y-1 text-sm text-white">
                  {feature.list.map((item, i) => (
                    <li key={i} className="flex">
                      <FiCheckCircle className="text-white mr-2 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom Row: 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.slice(4).map((feature, index) => (
            <div
              key={index}
              className="relative h-48 w-full cursor-pointer group perspective-1000"
            >
              {/* Front Card */}
              <div className="absolute inset-0 transition-transform duration-500 transform group-hover:-rotate-y-180 backface-hidden bg-white border border-[#00508D] p-6 flex flex-col items-center justify-center">
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-lg font-medium in text-[#00508D] text-center">
                  {feature.title}
                </h3>
              </div>
              {/* Back Card */}
              {/* Back Card */}
              <div className="absolute inset-0 transition-transform duration-500 transform rotate-y-180 backface-hidden bg-[#00508D] p-6  shadow flex items-center justify-center">
                <ul className="space-y-1 text-sm text-white">
                  {feature.list.map((item, i) => (
                    <li key={i} className="flex">
                      <FiCheckCircle className="text-white mr-2 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Additional CSS */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .rotate-y-180 {
          transform: rotateY(0deg);
        }
        .group-hover\\:-rotate-y-180 {
          transform: rotateY(0deg);
        }
        .group:hover .group-hover\\:-rotate-y-180 {
          transform: rotateY(-180deg);
        }
      `}</style>
    </section>
  );
};

export default WhyUs;