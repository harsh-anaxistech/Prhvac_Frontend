import about1 from "../../assets/about-1.jpg";
import about2 from "../../assets/about-2.jpg";
import about3 from "../../assets/about-3.jpg";
import about4 from "../../assets/about-4.jpg"; // Added new import
import about5 from "../../assets/about-5.jpg"; // Added new import
import BgImage from "../../assets/About-banner.jpg";

import {
  FaTools,
  FaAward,
  FaShieldAlt,
  FaUserTie,
} from "react-icons/fa";

const AboutSection = () => {
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
            About Us
          </h1>
        </div>
      </div>
      <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* 5-Image Grid - Square Layout */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-3 grid-rows-2 gap-2">
                {/* Large top-left image */}
                <div className="col-span-2 row-span-1 aspect-[2/1]">
                  <img
                    className="w-full h-full object-cover"
                    src={about1}
                    alt="Technician working"
                  />
                </div>

                {/* Top-right image */}
                <div className="col-span-1 row-span-1 aspect-square">
                  <img
                    className="w-full h-full object-cover"
                    src={about2}
                    alt="Cooling system"
                  />
                </div>

                {/* Bottom-left image */}
                <div className="col-span-1 row-span-1 aspect-square">
                  <img
                    className="w-full h-full object-cover"
                    src={about3}
                    alt="Team meeting"
                  />
                </div>

                {/* Bottom-center image */}
                <div className="col-span-1 row-span-1 aspect-square">
                  <img
                    className="w-full h-full object-cover"
                    src={about4}
                    alt="Service call"
                  />
                </div>

                {/* Bottom-right image */}
                <div className="col-span-1 row-span-1 aspect-square">
                  <img
                    className="w-full h-full object-cover"
                    src={about5}
                    alt="Installation"
                  />
                </div>
              </div>

              {/* Stats bar */}
              <div className="mt-8 bg-white p-6 flex justify-between border border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00508D]">40+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00508D]">100%</div>
                  <div className="text-gray-600">Satisfaction Guaranteed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00508D]">30K+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <p className="text-sm text-[#00508D] tracking-wider font-semibold gap-1 mb-2">
                {" "}
                <i className="fas fa-snowflake animate-spin-slow mr-1"></i>ABOUT
                OUR COMPANY
              </p>

              <p className="mb-2 text-gray-600 text-justify  leading-relaxed">
M/S PR HVAC PRIVATE LIMITED, founded by Mr. Dinesh Parekh and Mr. Chandrakant Parekh in 1981, has grown significantly under their visionary leadership in the air conditioning industry.    </p>
              <p className="mb-2 text-gray-600 text-justify  leading-relaxed">
Today, the second generation of the Parekh family is carrying forward this legacy and driving the business to new heights. The three siblings, Mr. Dharmesh Parekh, Mr. Shreyans Parekh, and Mr. Malav Parekh are leading the company into the future. </p>
              <p className="mb-2 text-gray-600 text-justify  leading-relaxed">
With their collective expertise and experience in the industry, they are committed to continuing the company's tradition of excellence and innovation while also exploring new opportunities for growth and expansion.
</p>
           

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaTools className="text-[#00508D] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Advanced Equipment
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Latest tools for precise diagnostics
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaShieldAlt className="text-[#00508D] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Warranty Protection
                    </h3>
                    <p className="text-gray-600 text-sm">
                      All services come with warranty
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaAward className="text-[#00508D] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Certified Experts
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Industry certified professionals
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaUserTie className="text-[#00508D] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Professional Staff
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Polite and skilled staff
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
