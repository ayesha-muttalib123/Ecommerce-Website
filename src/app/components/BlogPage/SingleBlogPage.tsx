'use client'; // Marking this component as a client component

import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";
import BlogSidebar from "./BlogSidebar";

const SingleBlogPage: React.FC = () => {
  // const router = useRouter();
  // const { id } = router.query; // Access the dynamic parameter

  // You could fetch the blog data here using the id (from an API or local data)
  const blog = {
    // id: id,
    image: "/blog1.png",
    title: "Surf Auxion",
    date: "Aug 09 2020",
    description:
      "Mauris at orci non vulputate diam tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at. Mauris at orci non vulputate diam tincidunt nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Blog Image */}
      <div className="w-full mb-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-md"
        />
      </div>

      {/* Blog Title and Date */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <FaPenNib className="text-pink-600" />
          <h2 className="text-3xl font-bold text-gray-800">{blog.title}</h2>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <FaCalendarAlt className="text-orange-500" />
          <span className="bg-[#FFECE2] px-4 py-1 rounded-full">{blog.date}</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="text-gray-600 leading-relaxed mb-6">
        <p>{blog.content}</p>
      </div>

      {/* Sidebar */}
      <div className="lg:w-1/4 mt-8 lg:mt-0">
        <BlogSidebar />
      </div>
    </div>
  );
};

export default SingleBlogPage;
