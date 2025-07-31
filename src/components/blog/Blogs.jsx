import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BgImage from "../../assets/Blogs-banner.jpg";
import API from "../../utils/api"; // Adjust the path to your api.jsx
import { slugify } from "../../utils/slugify"; // Adjust the path to your slugify utility
import he from "he"; 
const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6); // Display 3 posts per page

  // Fetch blog posts from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await API.get("/api/blogs");
        const mappedBlogs = response.data.blogs.map((blog) => ({
          id: blog._id,
          title: blog.title,
          description: blog.description,
          image: `https://prhvacapi.anaxistech.com/${blog.image}`,
          date: new Date(blog.createdAt).getDate().toString(),
          month: new Date(blog.createdAt).toLocaleString("en-US", {
            month: "short",
          }),
          comments: "0", // Assuming comments are not part of the initial API response
          content: blog.content || "<p>No content available.</p>",
          slug: slugify(blog.title), // Generate slug from title
          createdAt: blog.createdAt, // Keep createdAt for sorting
        }));

        // Sort blog posts by createdAt in descending order (newest first)
        const sortedBlogs = mappedBlogs.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setBlogPosts(sortedBlogs);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blog posts");
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

function getPlainTextFromHtml(html) {
  const decoded = he.decode(html);
  const div = document.createElement("div");
  div.innerHTML = decoded;
  return div.textContent || div.innerText || "";
}

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const renderPaginationButtons = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <nav className="mt-12">
        <ul className="flex justify-center items-center space-x-2">
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-3 text-sm font-medium rounded-md flex items-center justify-center w-10 h-10 ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-[#00508D] text-white hover:bg-[#003f6b] transition-colors duration-200"
              }`}
            >
              &lt;
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`p-3 text-sm font-medium rounded-md flex items-center justify-center w-10 h-10 ${
                  currentPage === number
                    ? "bg-[#00508D] text-white"
                    : "bg-white text-[#00508D] border border-[#00508D] hover:bg-gray-100"
                } transition-colors duration-200`}
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-3 text-sm font-medium rounded-md flex items-center justify-center w-10 h-10 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-[#00508D] text-white hover:bg-[#003f6b] transition-colors duration-200"
              }`}
            >
              &gt;
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-[#00508D] border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <section className="mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-7xl text-center">
        <p>{error}</p>
      </section>
    );
  }

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
            Blogs
          </h1>
        </div>
      </div>
      <section className="mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 max-w-7xl">
        <div className="w-full px-5"></div>
        {/* Blog Cards */}
        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="border border-slate-200 p-5 flex flex-col w-full bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-[#00508D] text-white text-xs font-semibold px-3 py-2 rounded-sm text-center leading-tight">
                  <span className="text-sm">{post.date}</span>
                  <br />
                  <span className="text-[10px] font-normal">{post.month}</span>
                </div>
                <h3 className="font-semibold text-slate-900 text-xl mb-4 leading-tight">
                  {post.title.length > 23
                    ? post.title.substring(0, 23) + "..."
                    : post.title}
                </h3>
              </div>

              <img
                src={post.image}
                alt={post.title}
                className="rounded-md mb-4 object-cover w-full h-[260px]"
                width={260}
                height={160}
              />
              <p className="text-slate-600 text-sm mb-6 line-clamp-3">
                {getPlainTextFromHtml(post.description).length > 120
                  ? getPlainTextFromHtml(post.description).substring(0, 120) +
                    "..."
                  : getPlainTextFromHtml(post.description)}
              </p>

              <Link
                to={`/blogs/${post.slug}/${post.id}`} // Use slug and id in the URL
                className="text-[#00508D] font-semibold text-xs flex items-center gap-2 hover:text-white hover:bg-[#00508D] mt-auto border border-[#00508D] px-4 py-2 w-fit transition-all duration-300"
              >
                READ MORE <i className="fas fa-arrow-right text-[10px]"></i>
              </Link>
            </article>
          ))}
        </div>
        {/* Pagination */}
        {blogPosts.length > postsPerPage && renderPaginationButtons()}
      </section>
    </>
  );
};

export default Blogs;
