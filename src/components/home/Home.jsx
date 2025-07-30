import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Products from "./Products";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonial";
import Blogs from "./Blogs";
import Projects from "./Projects";
import Clients from "./Clients";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Products />
      {/* <Projects /> */}
      <Blogs />
      <Clients />
      <WhyUs />
      <Testimonials />
    </>
  );
}

export default Home;
