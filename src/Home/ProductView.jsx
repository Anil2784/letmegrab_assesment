import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const API_BASE_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center text-white">Loading product details...</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 mb-6"
      >
        Back
      </button>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row bg-black text-white p-6 rounded shadow">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-96 object-contain rounded-lg shadow"
          />
        </div>

        {/* Product Information */}
        <div className="md:w-1/2 md:ml-8 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="mb-4 text-gray-300">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="mb-4 text-gray-300">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="mb-4 text-gray-300">
            <strong>Description:</strong> {product.description}
          </p>

          <button
            onClick={() => navigate(`/update-product/${product.id}`)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
