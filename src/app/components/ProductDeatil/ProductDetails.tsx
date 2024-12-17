// pages/product.tsx
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import SectionHeader from "../SectionHeader";
import Footer from "../Footer/Footer";
import { FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import ProductDetailsTabs from "./ProductDetailsTabs";


const ProductPage = () => {
  const relatedProducts = [
    { id: 1, image: "/product5.png", name: "Men's Fashion Wear", price: "$43.00", rating: 4 },
    { id: 2, image: "/product6.png", name: "Women’s Fashion", price: "$67.00", rating: 5 },
    { id: 3, image: "/product7.png", name: "Wolx Dummy Fashion", price: "$67.00", rating: 3 },
    { id: 4, image: "/product8.png", name: "Top Wall Digital Clock", price: "$51.00", rating: 4 },
  ];

  return (
    <div className="bg-gray-50">
   <SectionHeader
        title="Product Details"
        breadcrumb="Home . Pages"
        breadcrumbHighlight="Product Details"
        backgroundColor="bg-[#F6F5FF]" // background color as class name
        textColor="text-gray-800" // text color as class name
      />
    
    



      {/* Product Section */}
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-2 gap-8 mt-8">
        {/* Product Images */}
        <div className="grid grid-cols-2 gap-4">
          <img src="/product3.png" alt="Bag" className="w-full h-full rounded" />
          <div className="grid grid-rows-3 gap-4">
            <img src="/product1.png" alt="Small 1" className="rounded" />
            <img src="/product2.png" alt="Small 2" className="rounded" />
            <img src="/product4.png" alt="Small 3" className="rounded" />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-2 justify-center">
      <h1 className="text-2xl font-semibold mb-2">Playwood Arm Chair</h1>
      <p className="text-gray-500 mb-4">Category: <span className="text-gray-900">Furniture</span></p>
      <div className="flex items-center mb-4">
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaRegStar className="text-gray-300" />
        <span className="ml-2 text-gray-500 font-serif font-bold text-xl">(22)</span>
      </div>
     <div className="flex gap-3">
     <p className="text-lg font-bold text-pink-600 mb-4">$32.00</p>
     <p className="text-lg font-bold text-gray-600 line-through mb-4">$67.00</p>
     </div>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.
      </p>

      {/* Color Selection */}
      <div className="flex items-center mb-6">
        <p className="text-gray-600 mr-4">Color:</p>
        <div className="flex">
          <button className="w-6 h-6 rounded-full bg-gray-700 mr-2"></button>
          <button className="w-6 h-6 rounded-full bg-blue-700 mr-2"></button>
          <button className="w-6 h-6 rounded-full bg-green-700"></button>
        </div>
      </div>

      {/* Add to Cart Button */}
     <div className="flex items-center">
     <button className=" text-black px-4 py-2 rounded hover:bg-pink-700">
        Add to Cart
      </button>
      <CiHeart size={30} />
     </div>

      {/* Categories */}
      <div className="mt-6">
        <p className="text-gray-500">Categories: <span className="text-gray-900">Furniture</span></p>
        <p className="text-gray-500">Tags: <span className="text-gray-900">Modern, Chair, Playwood</span></p>
      </div>

      {/* Share Section */}
      {/* Share Section */}
<div className="mt-6 flex gap-4">
  <p className="text-gray-600">Share:</p>
  <button className="text-blue-500">
    <FaFacebook size={20} />
  </button>
  <button className="text-pink-500">
    <FaPinterest size={20} />
  </button>
  <button className="text-blue-500">
    <FaTwitter size={20} />
  </button>

</div>

    </div>
    </div>

      {/* Description Section */}
   
   <div>
    <ProductDetailsTabs/>
   </div>

      {/* Related Products */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-4 gap-4">
          {relatedProducts.map((product) => (
            <div key={product.id} className="text-center p-4 bg-white rounded shadow">
              <img src={product.image} alt={product.name} className="w-full mb-2 rounded" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-pink-600 font-bold">{product.price}</p>
              {/* Rating */}
              <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }, (_, index) => (
                  index < product.rating ? (
                    <FaStar key={index} className="text-yellow-400" />
                  ) : (
                    <FaRegStar key={index} className="text-gray-300" />
                  )
                ))}
              </div>
              <button className="mt-2 text-pink-600 border border-pink-600 px-2 py-1 rounded hover:bg-pink-600 hover:text-white">
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductPage;
