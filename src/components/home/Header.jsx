import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Utility function to create SEO-friendly slugs (same as Products.jsx)
const createSlug = (str) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProductsDropdownOpen(false);
  };

  const getPath = (item) =>
    item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

  const navItems = [
    "Home",
    "About Us",
    "Services",
    "Products",
    // "Projects",
    "Clients",
    "Blogs",
  ];

  const productCategories = [
    "Air Conditioners",
    "Air Purifiers",
    "Humidifiers",
    "Dehumidifiers",
    "Filters",
  ];

  const handleProductCategoryClick = (category) => {
    setIsProductsDropdownOpen(false);
    setIsMenuOpen(false);
    navigate(`/products/category/${createSlug(category)}`);
  };

  return (
    <header className="top-0 z-50">
      {/* Top red bar */}
      <div className="bg-[#BB0716] text-white text-sm flex justify-center md:justify-start items-center px-4 sm:px-6 md:px-10 h-8">
        <p>Your Trusted Partner in Air Solutions</p>
        {/* <div className="flex space-x-4 text-sm">
          <a className="hover:text-gray-200" href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="hover:text-gray-200" href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="hover:text-gray-200" href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="hover:text-gray-200" href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div> */}
      </div>

      {/* Middle white bar */}
      <div className="bg-white flex flex-col md:flex-row md:items-center justify-between px-4 sm:px-6 md:px-10 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <img src="/logo.svg" alt="Logo" className="h-14 w-auto" />
          </Link>{" "}
          <button
            className="md:hidden text-[#00508D] text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>

        <div className="hidden md:flex flex-col sm:flex-row sm:space-x-10 text-[#00508D] text-xs sm:text-sm">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <i className="fas fa-envelope text-lg"></i>
            <div>
              <p className="font-semibold">Mail Us Today</p>
              <a href="mailto:Prhvacpvtltd@gmail.com">
                <p className="text-gray-400 text-xs hover:underline cursor-pointer">
                  Prhvacpvtltd@gmail.com
                </p>
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <i className="fas fa-map-marker-alt text-lg"></i>
            <div>
              <p className="font-semibold">Company Location</p>
              <p className="text-gray-400 text-xs">
                UL 1&2, Suryarath, Sampada Owners Association, Ellisbridge,
                Ahmedabad.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fas fa-phone text-lg"></i>
            <div>
              <a href="tel:+919825098767">
                <p className="font-semibold hover:underline cursor-pointer">
                  +91 9825098767
                </p>
              </a>{" "}
              <p className=" text-gray-400 text-xs">Call us for more details</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sliding menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-[#00508D] transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="flex flex-col p-4">
          <button
            className="self-end text-2xl mb-4"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
          <ul className="flex flex-col space-y-4 text-sm font-normal">
            {navItems.map((item) => {
              const path = getPath(item);
              const isActive = location.pathname === path;
              return (
                <li key={item} className="relative">
                  <Link
                    to={path}
                    className={`flex items-center space-x-1 font-semibold px-4 py-2 rounded-full ${
                      isActive
                        ? "text-[#00508D] bg-white"
                        : "text-[#00508D] hover:text-white hover:bg-[#00508D]"
                    }`}
                    onClick={
                      item === "Products"
                        ? () =>
                            setIsProductsDropdownOpen(!isProductsDropdownOpen)
                        : toggleMenu
                    }
                  >
                    <span>{item}</span>
                    {/* {item === "Products" && (
                      <i className="fas fa-caret-down"></i>
                    )} */}
                  </Link>
                  {/* {item === "Products" && isProductsDropdownOpen && (
                    <ul className="ml-4 bg-white shadow-lg rounded-md py-2">
                      {productCategories.map((category) => (
                        <li key={category}>
                          <button
                            onClick={() => handleProductCategoryClick(category)}
                            className="block w-full text-left px-4 py-2 text-sm text-[#00508D] hover:bg-[#00508D] hover:text-white"
                          >
                            {category}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )} */}
                </li>
              );
            })}
            <li>
              <Link
                to="/contact"
                className="bg-[#BB0716] text-white px-6 py-3 text-sm flex items-center justify-center"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom nav bar (desktop) */}
      <nav className="bg-[#00508D] text-white hidden md:flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 h-14 relative">
        <ul className="flex flex-wrap items-center space-x-4 text-sm font-normal">
          {navItems.map((item) => {
            const path = getPath(item);
            const isActive = location.pathname === path;
            return (
              <li key={item} className="relative group">
                <Link
                  to={path}
                  className={`flex items-center space-x-1 font-semibold px-4 py-1 rounded-full ${
                    isActive
                      ? "text-[#00508D] bg-white"
                      : "text-white hover:text-[#00508D] hover:bg-white"
                  }`}
                >
                  <span>{item}</span>
                  {/* {item === "Products" && <i className="fas fa-caret-down"></i>} */}
                </Link>
                {/* {item === "Products" && (
                  <ul className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md text-[#00508D] hidden group-hover:block z-50 py-2">
                    {productCategories.map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => handleProductCategoryClick(category)}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-[#00508D] hover:text-white transition-colors duration-200"
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                )} */}
              </li>
            );
          })}
        </ul>
        <Link
          to="/contact"
          className="bg-[#BB0716] text-white px-4 py-3 text-sm flex items-center justify-center h-10"
        >
          Contact Us
        </Link>
      </nav>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

export default Header;
