import React, { useState, useEffect, useRef } from "react";
import API from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// We no longer need 'Link' from react-router-dom for external redirects here
import { Link } from "react-router-dom";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);

  // Determine cards per page based on screen size
  const isMobile = window.innerWidth < 640; // Tailwind's 'sm' breakpoint
  const cardsPerPage = isMobile ? 1 : 4;
  const totalPages = Math.ceil(products.length / cardsPerPage);

  const BASE_URL = process.env.REACT_APP_API_URL || "";

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
          const sortedProducts = fetchedProducts.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setProducts(sortedProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error(
          error.response?.data?.message || "Failed to fetch products"
        );
        setError("Failed to load products. Please try again later.");
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const scrollToPage = (pageIndex) => {
    const container = containerRef.current;
    if (container) {
      const firstCard = container.querySelector(".product-card");
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + (isMobile ? 0 : 24); // Add px-3 (24px) for desktop if relevant
        const scrollAmount = cardWidth * cardsPerPage * pageIndex;
        container.scrollTo({ left: scrollAmount, behavior: "smooth" });
        setCurrentPage(pageIndex);
      }
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const firstCard = container.querySelector(".product-card");
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + (isMobile ? 0 : 24); // Add px-3 (24px) for desktop if relevant
        const pageIndex = Math.round(
          container.scrollLeft / (cardWidth * cardsPerPage)
        );
        setCurrentPage(pageIndex);
      }
    }
  };

  const scrollLeft = () => {
    if (currentPage > 0) {
      scrollToPage(currentPage - 1);
    }
  };

  const scrollRight = () => {
    if (currentPage < totalPages - 1) {
      scrollToPage(currentPage + 1);
    }
  };

  // New function to handle external link redirection
  const handleReadMoreClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer"); // Opens in a new tab securely
    } else {
      toast.info("No external link provided for this product.");
    }
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-2 py-9 text-[#0B1437] bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-3xl font-semibold text-start text-[#0B1437] tracking-tight mb-8">
            OUR PRODUCTS
          </h2>
        </div>

        {/* Carousel Wrapper with Arrows */}
        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={scrollLeft}
            disabled={currentPage === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-16 h-16 flex items-center justify-center rounded-full ${
              currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-gray-800 bg-white rounded-full p-2 shadow-md"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Horizontal Scroll Container */}
          <div
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
            ref={containerRef}
            onScroll={handleScroll}
            style={{ scrollSnapType: "x mandatory" }}
          >
            {isLoading ? (
              <div className="w-full text-center">
                <div className="flex justify-center items-center h-screen">
                  <div className="w-12 h-12 border-4 border-[#00508D] border-dashed rounded-full animate-spin"></div>
                </div>
              </div>
            ) : error ? (
              <div className="w-full text-center text-red-500">{error}</div>
            ) : products.length === 0 ? (
              <div className="w-full text-center text-gray-500">
                No products found.
              </div>
            ) : (
              products.map((product, index) => (
                <div
                  key={product._id || index}
                  className={`product-card flex-shrink-0 px-3 snap-start ${
                    isMobile ? "w-full" : "w-1/4" // 100% for mobile (1 card), 25% for desktop (4 cards)
                  }`}
                >
                  <div className="bg-white overflow-hidden border border-gray-100">
                    <div className="w-full h-[250px] bg-gray-100">
                      <img
                        src={`${BASE_URL}/${product.image}`}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "/path/to/fallback-image.jpg"; // Provide a valid fallback image path
                        }}
                      />
                    </div>
                    <div className="px-5 py-4 text-start">
                        <h3 className="text-lg font-light tracking-wide">
                          {product.brand}
                        </h3>
                      <p className="text-sm text-gray-500 mt-1 font-light">
                        {product.title}
                      </p>
                      <div className="border-t border-gray-100 my-2"></div>
                      <button
                        onClick={() => handleReadMoreClick(product.brandUrl)}
                        className="text-xs uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
                      >
                        View More →
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={scrollRight}
            disabled={currentPage === totalPages - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full ${
              currentPage === totalPages - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-gray-800 bg-white rounded-full p-2 shadow-md"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <style jsx>{`
          .hide-scrollbar {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      <div className="flex items-center justify-center mb-8">
        <Link to="/products" className="group">
          <button className="group border border-[#00508D] text-[#00508D] text-xs font-bold uppercase tracking-wider px-6 py-3 flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-[#003366] hover:text-white">
            Explore All Products
          </button>
        </Link>
      </div>

      <ToastContainer />
    </>
  );
};

export default Products;
