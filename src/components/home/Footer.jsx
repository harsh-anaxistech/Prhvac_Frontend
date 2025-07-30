import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#00508D] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2  shadow-sm">
                <Link to="/">
                  <img src="/logo.svg" alt="Logo" className="h-12 w-auto" />
                </Link>{" "}
              </div>
            </div>
            <p className="text-white/80  text-sm leading-relaxed">
              M/S PR HVAC PRIVATE LIMITED, a leading HVAC dealer in Ahmedabad,
              is a renowned Dealer in the industry for providing top-notch
              Heating, Ventilation, and Air Conditioning (HVAC) solutions.
            </p>
            {/* <div className="flex space-x-4 pt-2">
              {["facebook-f", "twitter", "linkedin-in", "youtube"].map(
                (icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                    aria-label={icon.replace("-", " ")}
                  >
                    <i className={`fab fa-${icon} text-lg`}></i>
                  </a>
                )
              )}
            </div> */}
          </div>
          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-medium mb-4 pb-2  border-white/10">
              Quick Links
            </h3>
            <ul className="space-y-1">
              {[
                { label: "About Us", path: "/about-us" },
                { label: "Products", path: "/products" },
                { label: "Blogs", path: "/blogs" },
                { label: "Contact Us", path: "/contact" },
                { label: "Privacy Policy", path: "/privacy-policy" },
                { label: "Terms & Conditions", path: "/terms-conditions" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/70 text-sm hover:text-white hover:pl-2 transition-all duration-200 flex items-center group"
                    style={{ marginLeft: "-25px" }}
                  >
                    <span className="w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </span>
                    <span className="flex items-center">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Services Column */}

          <div>
            <h3 className="text-lg font-medium mb-4 pb-2  border-white/10">
              Our Services
            </h3>
            <ul className="space-y-1">
              {[
                "AC Installation",
                "Repair & Maintenance",
                "HVAC Systems",
                "Air Duct Cleaning",
                "Air Quality Testing",
                "Energy Upgrades",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/70 text-sm hover:text-white hover:pl-2 transition-all duration-200 flex items-center group"
                    style={{ marginLeft: "-25px" }}
                  >
                    <span className="w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </span>
                    <span className="flex items-center">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-medium mb-4 pb-2  border-white/10">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[#ffffff] text-[#00508D] mt-1 rounded-full p-5 inline-flex items-center justify-center w-10 h-10">
                  <i className="fas fa-phone text-lg"></i>
                </div>
                <div>
                  <p className="text-sm text-white/70">Phone</p>
                  <a href="tel:+919825098767">
                    <p className="font-medium text-sm hover:underline cursor-pointer">
                      +91 9825098767
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#ffffff] text-[#00508D] mt-1 rounded-full p-5 inline-flex items-center justify-center w-10 h-10">
                  <i className="fas fa-envelope text-lg"></i>
                </div>

                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <a href="mailto:director@prhvac.in">
                    <p className="font-medium text-sm hover:underline cursor-pointer">
                      director@prhvac.in
                    </p>
                  </a>{" "}
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-[#ffffff] text-[#00508D] mt-1 rounded-full p-5 inline-flex items-center justify-center w-10 h-10">
                  <i className="fas fa-map-marker-alt text-lg"></i>
                </div>

                <div>
                  <p className="text-sm text-white/70">Address</p>
                  <p className="font-medium text-sm">
                    UL 1&2, Suryarath, Sampada Owners Association, Ellisbridge,
                    Ahmedabad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} PR HVAC. All rights reserved.
          </p>
          <div className="flex text-white/60 flex-wrap gap-x-6 gap-y-2 justify-center">
            <p className="mb-2 sm:mb-0  text-sm ">
              Designed and Developed by{" "}
              <a
                href="https://anaxistech.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Anaxistech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
