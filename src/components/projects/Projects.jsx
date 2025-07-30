import { useState } from "react";
import BgImage from "../../assets/Projects-banner.jpg";

const ProjectsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      src: "https://storage.googleapis.com/a1aa/image/b2bdfcd8-a67d-4f2b-a95a-fdccf480103b.jpg",
      alt: "Bedroom with curtains and bed, warm lighting",
      category: "Residential",
      title: "Luxury Bedroom Design",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/3fa9120b-c424-4cbc-0068-35487037bb7d.jpg",
      alt: "Chandelier in luxury room with shelves and decorative items",
      category: "Commercial",
      title: "Hotel Lobby Lighting",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/f981f905-de8a-4e3b-1cf8-bb1161df1e93.jpg",
      alt: "Display shelves with stools in a room with warm lighting",
      category: "Retail",
      title: "Boutique Showroom",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/de37b98c-29aa-4dd3-2aeb-fafe3ed34f46.jpg",
      alt: "Restaurant interior with string lights and tables",
      category: "Hospitality",
      title: "Fine Dining Restaurant",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/b62ff1e0-9751-447d-bf3f-bf325bba8fe9.jpg",
      alt: "Office space with air conditioner and cubicles",
      category: "Corporate",
      title: "Modern Office Space",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/a0292f70-1371-408c-1f1e-1aeef64c9146.jpg",
      alt: "Chandelier and table set in luxury room with shelves",
      category: "Residential",
      title: "Penthouse Dining Area",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/e49ddf72-76eb-4b8c-31d6-ecc8c685c8fa.jpg",
      alt: "Bedroom with curtains and bed, warm lighting",
      category: "Corporate",
      title: "Modern Office Space",
    },
    {
      src: "https://storage.googleapis.com/a1aa/image/cbe4e185-f8ab-4803-35d5-cde6040f6977.jpg",
      alt: "Bedroom with curtains and bed, warm lighting",
      category: "Corporate",
      title: "Modern Office Space",
    },
  ];
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
            Projects
          </h1>
        </div>
      </div>
      <div className="min-h-screen bg-gray-50">
        {/* Projects Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden cursor-pointer transition-all duration-500"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="aspect-w-4 aspect-h-3 w-full">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="transform transition-transform duration-500 ease-out translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-light text-gray-300">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-medium text-white mt-1 mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100"></div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
