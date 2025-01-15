import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import p1 from "../assets/products/product_5img.jpg";
import p2 from "../assets/products/product_6img.jpg";
import p3 from "../assets/products/product_7img.jpg";
import p4 from "../assets/products/product_8img.jpg";

const products = [
  {
    id: 1,
    name: "The Catalyzer",
    category: "CATEGORY",
    price: 16.0,
    sold: 0,
    available: 0,
    description: "This is a detailed description of The Catalyzer.",
    image: p1,
  },
  {
    id: 2,
    name: "The Innovator",
    category: "CATEGORY",
    price: 20.0,
    sold: 5,
    available: 10,
    description: "This is a detailed description of The Innovator.",
    image: p2,
  },
  {
    id: 3,
    name: "The Explorer",
    category: "CATEGORY",
    price: 12.0,
    sold: 3,
    available: 7,
    description: "This is a detailed description of The Explorer.",
    image: p3,
  },
  {
    id: 4,
    name: "The Dreamer",
    category: "CATEGORY",
    price: 25.0,
    sold: 2,
    available: 5,
    description: "This is a detailed description of The Dreamer.",
    image: p4,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mx-auto py-10 px-5">
      <button
        onClick={() => navigate(-1)}
        className="mb-5 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go Back
      </button>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <img
          src={product.image}
          alt={product.name}
          className="w-full lg:w-1/2 rounded-lg mb-5 lg:mb-0"
        />
        <div className="lg:ml-10">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-lg mt-2">{product.description}</p>
          <p className="text-xl font-semibold mt-5">
            Price: $ {product.price.toFixed(2)}
          </p>
          <p className="mt-3">
            <span className="font-bold">Sold:</span> {product.sold}
          </p>
          <p>
            <span className="font-bold">Available:</span> {product.available}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
