import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateProduct() {
  const { id } = useParams(); // Get product ID from the URL
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(true);

  const API_BASE_URL = "https://fakestoreapi.com/products";

  // Fetch the product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        console.log(response)
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
     const response= await axios.put(`${API_BASE_URL}/${id}`, product);
console.log(response)
      alert("Product updated successfully!");
      // navigate("/"); // Redirect back to the product table
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
    }
  };
// console.log(product.title)
  if (loading) return <p className="text-center text-white">Loading product details...</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 mb-6"
      >
        Back
      </button>
      <h1 className="text-3xl font-bold text-white mb-6">Update Product</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white p-6 rounded shadow max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#000]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#000]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#000]"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#000]"
            rows="4"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Image URL</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            className="w-full py-2 px-4 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#000]"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}

export default UpdateProduct;
