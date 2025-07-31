import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/api"; // Adjust the path to your api.jsx
import { slugify } from "../../utils/slugify"; // Adjust the path to your slugify utility
import he from "he";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the latest 3 blog posts from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await API.get("/api/blogs");

        // Sort the blogs by createdAt in descending order (newest first)
        const sortedBlogs = response.data.blogs.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });

        const mappedBlogs = sortedBlogs
          .slice(0, 3) // Limit to latest 3 posts AFTER sorting
          .map((blog) => ({
            id: blog._id,
            title: blog.title,
            description: blog.description,
            image: `https://prhvacapi.anaxistech.com/${blog.image}`,
            date: new Date(blog.createdAt).getDate().toString(),
            month: new Date(blog.createdAt).toLocaleString("en-US", {
              month: "short",
            }),
            comments: "0", // Assuming comments are not part of the initial fetch or need a separate call
            slug: blog.slug || slugify(blog.title), // Fallback to custom slugify
          }));
        setBlogPosts(mappedBlogs);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch blog posts");
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []); // Empty dependency array means this runs once on mount
  function getPlainTextFromHtml(html) {
    const decoded = he.decode(html);
    const div = document.createElement("div");
    div.innerHTML = decoded;
    return div.textContent || div.innerText || "";
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-[#00508D] border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <section className="mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 max-w-7xl text-center">
        <p>{error}</p>
      </section>
    );
  }

  return (
    <div className="bg-gray-50">
      <section className="mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 max-w-7xl">
        <div className="w-full px-5">
          <h2 className="text-xl md:text-3xl font-semibold text-start text-[#0B1437] tracking-tight mb-6">
            LATEST ARTICLES & BLOGS
          </h2>
        </div>
        {/* Blog Cards */}
        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="border border-slate-200 p-4 flex flex-col w-full"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="bg-[#00508D] text-white text-xs font-semibold px-2 py-1 rounded-sm text-center leading-tight">
                  <span>{post.date}</span>
                  <br />
                  <span className="text-[10px] font-normal">{post.month}</span>
                </div>
                <h3 className="font-semibold text-slate-900 text-lg    leading-tight">
                  {post.title.length > 25
                    ? post.title.substring(0, 25) + "..."
                    : post.title}
                </h3>
              </div>

              <img
                src={post.image}
                alt={post.title}
                className="rounded-md mb-4 mt-3 object-cover w-full h-[260px]"
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
                to={`/blogs/${post.slug}/${post.id}`} // Use slug and id
                className="text-[#00508D] font-semibold text-xs  flex items-center gap-1 hover:text-white hover:bg-[#00508D] mt-1 border border-[#00508D] px-3 py-1 rounded-none w-fit transition-all duration-300"
              >
                READ MORE <i className="fas fa-arrow-right text-[10px]"></i>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
