import React from "react";
import { useNavigate } from "react-router-dom";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import p1 from "../assets/products/product_5img.jpg";
import p2 from "../assets/products/product_6img.jpg";
import p3 from "../assets/products/product_7img.jpg";
import p4 from "../assets/products/product_8img.jpg";

const ProductCard = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "The Catalyzer",
      category: "CATEGORY",
      price: 16.0,
      sold: 0,
      available: 0,
      image: p1,
    },
    {
      id: 2,
      name: "The Innovator",
      category: "CATEGORY",
      price: 20.0,
      sold: 5,
      available: 10,
      image: p2,
    },
    {
      id: 3,
      name: "The Explorer",
      category: "CATEGORY",
      price: 12.0,
      sold: 3,
      available: 7,
      image: p3,
    },
    {
      id: 4,
      name: "The Dreamer",
      category: "CATEGORY",
      price: 25.0,
      sold: 2,
      available: 5,
      image: p4,
    },
  ];

  return (
    <section className="text-gray-600 body-font bg-[#EFE6DC]">
      <div className="container px-2 py-20 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-[#214344] relative h-[400px] w-full rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="absolute top-2 right-2 text-white z-10 flex flex-col items-center space-y-2">
              <FiHeart
                size={30}
                className="cursor-pointer hover:text-yellow-300 transition bg-[#214344] p-1 rounded-2xl"
              />
              <FiShoppingBag
                size={24}
                className="cursor-pointer hover:text-yellow-300 transition"
              />
            </div>
            <a className="block relative h-64 sm:h-72 md:h-76 rounded overflow-hidden group w-full">
              <img
                alt={product.name}
                className="object-cover object-center w-full h-full block group-hover:scale-95 transition-transform duration-300 rounded-2xl"
                src={product.image}
              />
            </a>
            <div className="mt-4 bg-[#214344] group-hover:text-white transition duration-300 rounded-2xl w-full">
              <h3 className="text-[#fff] text-xs tracking-widest title-font mb-1 mx-2">
                {product.category}
              </h3>
              <h2 className="text-[#fff] title-font text-lg font-medium mx-2">
                {product.name}
              </h2>
              <p className="mt-1 text-[#fff] mx-2">
                $ <span className="text-[#F1D5A1]">{product.price.toFixed(2)}</span>
              </p>
              <div className="flex px-3 py-1 justify-between">
                <p className="text-[#F1D5A1]">
                  Sold: <span className="text-[#fff]">{product.sold}</span>
                </p>
                <p className="text-[#F1D5A1]">
                  Available: <span className="text-[#fff]">{product.available}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
