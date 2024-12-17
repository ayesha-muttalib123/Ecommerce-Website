import React from "react";
import { FaPenNib, FaCalendarAlt } from "react-icons/fa"; // Import icons for styling
import Link from "next/link"; // Import Link component for routing

const BlogCard = () => {
  const blogs = [
    {
      id: 1,
      image: "/blog1.png",
      title: "Surf Auxion",
      date: "Aug 09 2020",
      description:
        "Mauris at orci non vulputate diam tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      id: 2,
      image: "/blog2.png",
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      date: "Aug 09 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
    {
      id: 3,
      image: "/blog3.png",
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
      date: "Aug 09 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    },
  ];

  return (
    <div className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-6">
      {blogs.map((blog, index) => (
        <Link href={`/blog/${blog.id}`} key={index}> {/* Linking to dynamic route */}
          <a>
            <div className="flex flex-col items-start bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Blog Image */}
              <div className="w-full">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="w-full p-6">
                {/* Title and Date Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4">
                  {/* Title with Background and Pen Icon */}
                  <div className="flex items-center gap-2 mb-2 sm:mb-0">
                    <FaPenNib className="text-pink-600" />
                    <h2 className="text-xl font-bold bg-[#FFE7F9] px-4 py-1 rounded-full text-gray-800 hover:text-pink-600 cursor-pointer">
                      {blog.title}
                    </h2>
                  </div>

                  {/* Date with Icon and Background */}
                  <div className="flex items-center gap-2 text-sm">
                    <FaCalendarAlt className="text-orange-500" />
                    <span className="bg-[#FFECE2] px-4 py-1 rounded-full">{blog.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {blog.description}
                </p>

                {/* Read More Button */}
                <button className="text-pink-600 font-semibold hover:underline">
                  Read More
                </button>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
