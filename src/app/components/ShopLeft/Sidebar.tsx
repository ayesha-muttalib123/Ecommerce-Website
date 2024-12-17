"use client"; // This makes the component a Client Component

import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Import star icon

const Sidebar: React.FC = () => {
  // State to track selected items
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Function to toggle selection of an item
  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Function to render stars based on the rating value (up to 5 stars)
  const renderStars = (rating: string) => {
    const count = Math.min(parseInt(rating.replace(/\D/g, "")), 5); // Extract the number and cap at 5
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: count }, (_, index) => (
          <FaStar key={index} className="text-yellow-400" />
        ))}
        {/* Fill empty stars to always show 5 stars */}
        {Array.from({ length: 5 - count }, (_, index) => (
          <FaStar key={count + index} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <aside className="w-1/4 p-4  pl-[5%]">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Product Brand Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Product Brand</h3>
        <ul className="space-y-2">
          {[
            "Coaster Furniture",
            "Fusion Dot High Fashion",
            "Unique Furniture Restor",
            "Dream Furniture Flipping",
            "Young Repurposed",
            "Green DIY Furniture",
          ].map((brand) => (
            <li key={brand} className="flex items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(brand)}
                  onChange={() => toggleItem(brand)}
                  className={`appearance-none w-6 h-6 cursor-pointer mr-2 rounded-md ${
                    selectedItems.includes(brand)
                      ? "bg-pink-800 border-transparent"
                      : "bg-pink-300 border-pink-600"
                  }`}
                />
                {/* Centered tick */}
                {selectedItems.includes(brand) && (
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    ✓
                  </span>
                )}
              </div>
              {brand}
            </li>
          ))}
        </ul>
      </div>

      {/* Discount Offer Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Discount Offer</h3>
        <ul className="space-y-2">
          {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
            (offer) => (
              <li key={offer} className="flex items-center">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(offer)}
                    onChange={() => toggleItem(offer)}
                    className={`appearance-none w-6 h-6 cursor-pointer mr-2 rounded-md ${
                      selectedItems.includes(offer)
                        ? "bg-pink-800 border-transparent"
                        : "bg-pink-300 border-pink-600"
                    }`}
                  />
                  {/* Centered tick */}
                  {selectedItems.includes(offer) && (
                    <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                      ✓
                    </span>
                  )}
                </div>
                {offer}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Rating Item Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Rating Item</h3>
        <ul className="space-y-2">
          {["(2341)", "(1726)", "(258)", "(25)"].map((rating) => (
            <li key={rating} className="flex items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(rating)}
                  onChange={() => toggleItem(rating)}
                  className={`appearance-none w-6 h-6 cursor-pointer mr-2 rounded-md ${
                    selectedItems.includes(rating)
                      ? "bg-yellow-800 border-transparent"
                      : "bg-yellow-300 border-yellow-600"
                  }`}
                />
                {/* Centered tick */}
                {selectedItems.includes(rating) && (
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    ✓
                  </span>
                )}
              </div>
              {/* Render stars for rating, capped to 5 stars */}
              {renderStars(rating)}
            </li>
          ))}
        </ul>
      </div>

      {/* Categories Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categories</h3>
        <ul className="space-y-2">
          {[
            "Prestashop",
            "Magento",
            "Bigcommerce",
            "osCommerce",
            "3dcart",
            "Bags",
            "Accessories",
            "Jewellery",
            "Watches",
          ].map((category) => (
            <li key={category} className="flex items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(category)}
                  onChange={() => toggleItem(category)}
                  className={`appearance-none w-6 h-6 cursor-pointer mr-2 rounded-md ${
                    selectedItems.includes(category)
                      ? "bg-purple-800 border-transparent"
                      : "bg-purple-300 border-purple-600"
                  }`}
                />
                {/* Centered tick */}
                {selectedItems.includes(category) && (
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    ✓
                  </span>
                )}
              </div>
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter Section */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Price Filter</h3>
        <ul className="space-y-2">
          {[
            "$0.00 - $150.00",
            "$150.00 - $350.00",
            "$150.00 - $504.00",
            "$450.00 +",
            "$10.00 - $20000",
          ].map((price) => (
            <li key={price} className="flex items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(price)}
                  onChange={() => toggleItem(price)}
                  className={`appearance-none w-6 h-6 cursor-pointer mr-2 rounded-md ${
                    selectedItems.includes(price)
                      ? "bg-purple-800 border-transparent"
                      : "bg-purple-300 border-purple-600"
                  }`}
                />
                {/* Centered tick */}
                {selectedItems.includes(price) && (
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xl">
                    ✓
                  </span>
                )}
              </div>
              {price}
            </li>
          ))}
        </ul>
        <div>
        <div className="mb-6">
  <h3 className="font-semibold mb-2">Price Filter</h3>
  <input type="range" min="0" max="1000" className="w-full" />
</div>

<div className="mb-6 flex flex-col gap-5">
  <h3 className="font-semibold mb-2">Find by Color</h3>
  <div className="flex flex-col gap-2">
    <div className="flex gap-2">
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
        <span className="text-sm text-gray-700">Red</span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
        <span className="text-sm text-gray-700">Blue</span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 bg-amber-700 rounded-full"></div>
        <span className="text-sm text-gray-700">Brown</span>
      </div>
    </div>

    <div className="flex gap-2">
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 bg-[#33D221] rounded-full"></div>
        <span className="text-sm text-gray-700">Green</span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 bg-[#E248FF] rounded-full"></div>
        <span className="text-sm text-gray-700">Purple</span>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-6 h-6 bg-[#26CBFF] rounded-full"></div>
        <span className="text-sm text-gray-700">Sky</span>
      </div>
    </div>
  </div>
</div>
</div>


      </div>
    </aside>
  );
};

export default Sidebar;
