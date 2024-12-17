import Footer from "../Footer/Footer";
import ProductCard from "./page";
import Sidebar from "./Sidebar";

const products = [
  { image: "/images/product1.jpg", name: "Product 1", rating: 4, price: 199 },
  { image: "/images/product2.jpg", name: "Product 2", rating: 5, price: 299 },
  { image: "/images/product3.jpg", name: "Product 3", rating: 3, price: 99 },
];

const ShopLeft: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[#F6F5FF] py-10 text-left pl-[6%]">
        <h1 className="text-4xl font-bold text-gray-800">Shop Left Sidebar</h1>
        <p className="mt-2 text-sm text-gray-600">
          Home . Pages . <span className="text-[#FB2E86]">Shop Left Sidebar</span>
        </p>
      </div>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row p-8 space-y-6 lg:space-y-0">
        {/* Sidebar on large screens and above, hidden on mobile */}
        <div className="lg:w-1/4 w-full lg:block">
          <Sidebar />
        </div>

        {/* Product Cards */}
        <div className="lg:w-3/4 w-full lg:grid lg:grid-cols-3 lg:gap-6">
          <ProductCard />
        </div>
      </main>

      {/* Footer container */}
      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default ShopLeft;
