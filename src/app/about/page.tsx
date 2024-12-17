import Image from "next/image";
import Footer from "../components/Footer/Footer";
import SectionHeader from "../components/SectionHeader";

export default function AboutUs() {
  return (
    <div>
      <SectionHeader
        title="About Us"
        breadcrumb="Home . Pages"
        breadcrumbHighlight="About Us"
        backgroundColor="bg-[#F6F5FF]" // background color as class name
        textColor="text-gray-800" // text color as class name
      />

      <div className="font-sans text-gray-800">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image
              src="/About1.png" // Replace with your image path
              width={500}
              height={400}
              alt="Hero"
              className="rounded-md"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Know About Our E-Commerce Business History
              </h2>
              <p className="text-gray-600 mb-6">
                Our success and company history. With years of experience and a focus on providing excellent service, we deliver outstanding e-commerce solutions.
              </p>
              <button className="bg-pink-600 text-white py-2 px-6 rounded hover:bg-pink-700">
                Explore
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 px-6">
          <h3 className="text-center text-2xl font-bold mb-8">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-4 shadow-md rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gray-100 py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">Our Client Say!</h3>
            <blockquote className="italic text-gray-700 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat neque euismod mauris pretium."
            </blockquote>
            <div className="flex justify-center items-center gap-4">
              <Image
                src="/about2.png" // Replace with your image path
                width={50}
                height={50}
                className="rounded-full"
                alt="Client"
              />
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">CEO, Company</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

const features = [
  {
    image: "/aboutlogo1.png",
    title: "Free Delivery",
    description: "Enjoy free delivery on all orders above $50.",
  },
  {
    image: "/aboutlogo2.png",
    title: "100% Cash Back",
    description: "Guaranteed refunds if not satisfied.",
  },
  {
    image: "/aboutlogo3.png",
    title: "Quality Product",
    description: "We provide high-quality products for all needs.",
  },
  {
    image: "/aboutlogo4.png",
    title: "24/7 Support",
    description: "Contact our team anytime for assistance.",
  },
];
