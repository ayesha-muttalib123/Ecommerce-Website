import React from "react";
import BlogCard from "./BlogCard";
import BlogSidebar from "./BlogSidebar";
import Footer from "../Footer/Footer";
import SectionHeader from "../SectionHeader";

const BlogPage = () => {
  return (
<div>
  
<SectionHeader
    title="Blog Page"
    breadcrumb="Home . Pages"
    breadcrumbHighlight="Blog Page"
    backgroundColor="bg-[#F6F5FF]" // background color as class name
    textColor="text-gray-800" // text color as class name
  />
<div className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Blog Cards Section */}
        <div className="w-full lg:w-2/3">
          <BlogCard />
          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            <button className="px-4 py-2 bg-pink-600 text-white rounded-full">
              1
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full">
              2
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full">
              →
            </button>
          </div>
        </div>

        {/* Sidebar Section */}
        <BlogSidebar />
      </div>
    </div>
    <Footer/>
</div>
  );
};

export default BlogPage;
