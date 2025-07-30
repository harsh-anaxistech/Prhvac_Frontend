import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BgImage from "../../assets/Blogs-banner.jpg";
import API from "../../utils/api"; // Adjust the path to your api.jsx
import { slugify } from "../../utils/slugify"; // Adjust the path to your slugify utility

const BlogDetail = () => {
  const { slug, id } = useParams(); // Extract both slug and id
  const [post, setPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredBlogPosts, setFilteredBlogPosts] = useState([]); // New state for filtered posts
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog post and recent posts
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        // Fetch the specific blog post by id
        const postResponse = await API.get(`/api/blogs/${id}`);
        const blog = postResponse.data.blog || postResponse.data;
        setPost({
          id: blog._id,
          title: blog.title,
          description: blog.description,
          image: `https://prhvacapi.anaxistech.com/${blog.image}`,
          date: new Date(blog.createdAt).getDate().toString(),
          month: new Date(blog.createdAt).toLocaleString("en-US", {
            month: "short",
          }),
          // comments: "0",
          content: blog.content || "<p>No content available.</p>",
          slug: slugify(blog.title),
        });

        // Fetch all blogs for recent posts, then sort and slice
        const blogsResponse = await API.get("/api/blogs");

        // Sort blog posts by createdAt in descending order (newest first)
        const sortedAndFilteredBlogs = blogsResponse.data.blogs
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort newest first
          .filter((b) => b._id !== id) // Exclude the current blog post
          .slice(0, 3) // Take only the first 3 recent posts
          .map((blog) => ({
            id: blog._id,
            title: blog.title,
            description: blog.description,
            image: `https://prhvacapi.anaxistech.com/${blog.image}`,
            date: new Date(blog.createdAt).getDate().toString(),
            month: new Date(blog.createdAt).toLocaleString("en-US", {
              month: "short",
            }),
            comments: "0",
            content: blog.content || "<p>No content available.</p>",
            slug: slugify(blog.title),
          }));
        setBlogPosts(sortedAndFilteredBlogs);
        setFilteredBlogPosts(sortedAndFilteredBlogs); // Initialize filtered posts with all posts
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog data:", err); // Log the error for debugging
        setError("Failed to fetch blog data");
        setLoading(false);
      }
    };
    fetchBlogData();
  }, [id]); // Depend on 'id' so it refetches when the blog post changes

  // Search functionality handler
  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = blogPosts.filter((blog) =>
      blog.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredBlogPosts(filtered);
  }, [searchQuery, blogPosts]); // Re-filter when search query or blogPosts change

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-[#00508D] border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <section className="mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 max-w-7xl min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-center text-[#0B1437] mb-6">
          Blog Not Found
        </h2>
        <Link
          to="/blogs"
          className="mt-4 inline-block px-6 py-3 bg-[#00508D] text-white rounded-full hover:bg-[#003a66] transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          Back to Blogs
        </Link>
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

      {/* Main Content */}
      <section className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Article Content */}
          <article className="flex-1">
            {/* Featured Image */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              {/* Date and Month on top left */}
              <div className="absolute top-8 left-8 text-white bg-black bg-opacity-50 px-3 py-1 rounded-md">
                <span className="text-xl font-bold">{post.date}</span>
                <br />
                <span className="text-sm">{post.month}</span>
              </div>
              {/* Title on bottom */}
              <div className="absolute bottom-8 left-8 text-white">
                <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
              </div>
            </div>
            {/* Content */}
            <div
              className="prose prose-lg max-w-none text-gray-700 mt-5"
              dangerouslySetInnerHTML={{ __html: post.description }} // Use dangeroulsySetInnerHTML for description
            ></div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8 flex flex-col">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 order-1 lg:order-none">
              <h3 className="text-xl font-bold text-[#0B1437] mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by title..."
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00508D] focus:border-[#00508D] outline-none transition"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-3 top-3 text-gray-400 hover:text-[#00508D]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 order-2 lg:order-none">
              <h3 className="text-xl font-bold text-[#0B1437] mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-4">
                {filteredBlogPosts.length > 0 ? (
                  filteredBlogPosts.map((recentPost) => (
                    <li key={recentPost.id}>
                      <Link
                        to={`/blogs/${recentPost.slug}/${recentPost.id}`} // Use slug and id
                        className="flex gap-3 group"
                      >
                        <img
                          src={recentPost.image}
                          alt={recentPost.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-medium text-[#0B1437] group-hover:text-[#00508D] transition-colors line-clamp-2">
                            {recentPost.title}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {recentPost.date} {recentPost.month}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-500">No recent posts found.</p>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
