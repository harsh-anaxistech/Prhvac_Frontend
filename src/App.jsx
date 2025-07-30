import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";

import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import AboutUs from "./components/aboutus/AboutUs";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Clients from "./components/clients/Clients";
import Blogs from "./components/blog/Blogs";
import BlogDetails from "./components/blog/BlogsDetails";
import ContactUs from "./components/contact/ContactUs";
import PrivacyPolicy from "./components/policy/Policy";
import TermsConditions from "./components/terms/Terms";
import "./App.css";

// Component to handle scrolling and dynamic title
const RouteEffects = () => {
  const location = useLocation();

  const titleMap = {
    "/": "PR HVAC",
    "/products": "Products | PR HVAC",
    "/about-us": "About Us | PR HVAC",
    "/services": "Services | PR HVAC",
    "/projects": "Projects | PR HVAC",
    "/clients": "Clients | PR HVAC",
    "/blogs": "Blogs | PR HVAC",
    "/contact": "Contact Us | PR HVAC",
    "/privacy-policy": "Privacy Policy | PR HVAC",
    "/terms-conditions": "Terms & Conditions | PR HVAC",
  };

  useEffect(() => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Set title based on path
    const currentPath = location.pathname;

    if (currentPath.startsWith("/blogs/") && currentPath !== "/blogs") {
      document.title = "Blogs | PR HVAC"; // fallback if not dynamic
    } else {
      document.title = titleMap[currentPath] || "PR HVAC";
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/brand/:brand" element={<Products />} />
        <Route path="/products/category/:category" element={<Products />} />
        <Route
          path="/products/category/:category/brand/:brand"
          element={<Products />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/clients" element={<Clients />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
