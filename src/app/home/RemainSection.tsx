"use client";
import Image from "next/image";

const features = [
  { image: "/aboutlogo1.png", title: "Free Delivery", description: "On all orders above $50." },
  { image: "/aboutlogo2.png", title: "100% Cash Back", description: "Guaranteed refunds." },
  { image: "/aboutlogo3.png", title: "Quality Product", description: "High-quality materials." },
  { image: "/aboutlogo4.png", title: "24/7 Support", description: "Contact us anytime." },
];

export default function RemainSection() {
  return (
    <section className="container mx-auto py-10 px-4">
      <h3 className="text-center text-3xl font-bold mb-8">What Shopex Offer!</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center p-4 shadow-md hover:scale-105 transition rounded-lg"
          >
            <Image src={feature.image} alt={feature.title} width={50} height={50} className="mx-auto mb-4" />
            <h4 className="text-lg font-semibold">{feature.title}</h4>
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
