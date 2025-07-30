import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../utils/api";
import BgImage from "../../assets/Products-banner.jpg";
import MitsubishiLogo from "../../assets/Mitsubishi.svg";
import DaikinLogo from "../../assets/Daikin.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import filter from "../../assets/filter.svg"; // Adjust the path to your filter icon
// Utility function to create SEO-friendly slugs
const createSlug = (str) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

// Utility function to decode slug to match database format
const decodeSlug = (slug) => {
  if (!slug) return null;
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Products = () => {
  const { category, brand } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = process.env.REACT_APP_API_URL || "";

  useEffect(() => {
    // Sync state with URL parameters
    const decodedCategory = category ? decodeSlug(category) : null;
    const decodedBrand = brand ? decodeSlug(brand) : null;
    setSelectedCategory(decodedCategory);
    setSelectedBrand(decodedBrand);
    // Debug: Log URL parameters and state
    console.log("URL Params:", { category, brand });
    console.log("State:", { selectedCategory: decodedCategory, selectedBrand: decodedBrand });
  }, [category, brand]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await API.get("/api/products");
        const fetchedProducts = response.data.products || [];
        if (!Array.isArray(fetchedProducts)) {
          console.error("Fetched products is not an array:", fetchedProducts);
          toast.error("Invalid data format from server");
          setProducts([]);
        } else {
          setProducts(fetchedProducts);
          // Debug: Log unique brands and categories
          console.log(
            "Unique Brands:",
            [...new Set(fetchedProducts.map((p) => p.brand))].filter(Boolean)
          );
          console.log(
            "Unique Categories:",
            [...new Set(fetchedProducts.map((p) => p.category))].filter(Boolean)
          );
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error(error.response?.data?.message || "Failed to fetch products");
        setError("Failed to load products. Please try again later.");
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
    // Debug: Log filtering result for each product
    console.log("Filtering Product:", {
      title: product.title,
      brand: product.brand,
      category: product.category,
      matchesCategory,
      matchesBrand,
    });
    return matchesCategory && matchesBrand;
  });

  const productCategories = [
    "All",
    ...new Set(products.map((product) => product.category).filter(Boolean)),
  ];

  const brands = [
    { name: "Mitsubishi", logo: MitsubishiLogo },
    { name: "Daikin", logo: DaikinLogo },
  ];

  const handleCategoryClick = (category) => {
    const newCategory = category === "All" ? null : category;
    // Construct URL
    let newUrl = "/products";
    if (newCategory && selectedBrand) {
      newUrl += `/category/${createSlug(newCategory)}/brand/${createSlug(selectedBrand)}`;
    } else if (newCategory) {
      newUrl += `/category/${createSlug(newCategory)}`;
    } else if (selectedBrand) {
      newUrl += `/brand/${createSlug(selectedBrand)}`;
    }
    navigate(newUrl);
    setSelectedCategory(newCategory);
    setIsDropdownOpen(false);
    // Debug: Log filter state
    console.log("Category Click:", { newCategory, selectedBrand, newUrl });
  };

  const handleBrandClick = (brand) => {
    const newBrand = brand === selectedBrand ? null : brand;
    // Construct URL
    let newUrl = "/products";
    if (selectedCategory && newBrand) {
      newUrl += `/category/${createSlug(selectedCategory)}/brand/${createSlug(newBrand)}`;
    } else if (newBrand) {
      newUrl += `/brand/${createSlug(newBrand)}`;
    } else if (selectedCategory) {
      newUrl += `/category/${createSlug(selectedCategory)}`;
    }
    navigate(newUrl);
    setSelectedBrand(newBrand);
    // Debug: Log filter state
    console.log("Brand Click:", { selectedCategory, newBrand, newUrl });
  };

const handleViewMoreClick = (url) => {
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer"); // Opens in a new tab securely
  } else {
    toast.info("No external link provided for this product.");
  }
};

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
            Products
          </h1>
        </div>
      </div>

      {/* Filter and Brand Section */}
      <div className="p-5 bg-white border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand Selector - Premium Carousel */}
        <div className="w-full overflow-hidden relative">
<div className="flex flex-wrap justify-center md:justify-start md:space-x-8 px-4 gap-8 md:gap-0 items-center py-1 ">
  {brands.map((brand) => (
    <button
      key={brand.name}
      onClick={() => handleBrandClick(brand.name)}
      className={`shrink-0 transition-all duration-200 ${
        selectedBrand === brand.name
          ? "scale-110 opacity-100"
          : "opacity-60 hover:opacity-80"
      }`}
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="w-20 h-10 object-contain"
      />
    </button>
  ))}
</div>

        </div>

        {/* Filter - Dropdown */}
        <div className="relative shrink-0">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-full bg-gray-50 hover:bg-gray-100 transition-all"
          >
               <img
                  src={filter}
                  className="w-4 h-4 object-contain"
                />
            <span>Categories</span>

          </button>

          {/* Elegant Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-md py-1 z-10">
              {productCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full px-4 py-2.5 text-left text-sm flex items-center transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

          

      {/* Product Grid */}
      <div className="px-4 md:px-8 py-10">
        {isLoading ? (
          <div className="text-center">
    <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-[#00508D] border-dashed rounded-full animate-spin"></div>
    </div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500">
            No products found for the selected filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 group"
              >
                {/* Image container with subtle zoom effect */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={`${BASE_URL}/${product.image}`}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content with minimalist styling */}
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-light tracking-wide">
                      {product.brand}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 font-light">
                    {product.title}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-2"></div>

                  {/* Minimalist CTA */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => handleViewMoreClick(product.brandUrl)}
                      className="text-xs uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
                    >
                      View More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;