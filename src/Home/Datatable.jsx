import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Datatable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [loggedInUser, setLoggedInUser] = useState(false);

  const API_BASE_URL = "https://fakestoreapi.com/products";
  const navigate = useNavigate();

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_BASE_URL);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  // Handle search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Handle sorting
  const handleSort = (event) => {
    const value = event.target.value;
    if (!value) {
      setSortConfig({ key: "", direction: "" });
      return;
    }
    const [key, direction] = value.split("-");
    setSortConfig({ key, direction });
  };

  // Memoized sorted and filtered products
  const sortedProducts = React.useMemo(() => {
    let sorted = [...products];
    if (sortConfig.key) {
      sorted.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sorted.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
  }, [products, sortConfig, searchTerm]);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Function to truncate titles
  const truncateTitle = (title = "") => {
    const words = title.split(" ");
    if (words.length > 7) {
      return words.slice(0, 7).join(" ") + "...";
    }
    return title;
  };

  // Delete a product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      alert(`Product with ID ${id} has been deleted`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete the product.");
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(true);
    }
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-white mb-6">Data Table</h1>

      {/* Search and Sorting */}
      <div className="mb-4 flex justify-between">
        <div className="mr-4">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={handleSearch}
            className="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
        <div className="flex-none">
          <select
            onChange={handleSort}
            className="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Sort by</option>
            <option value="title-asc">Title (A-Z)</option>
            <option value="title-desc">Title (Z-A)</option>
            <option value="category-asc">Category (A-Z)</option>
            <option value="category-desc">Category (Z-A)</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      {sortedProducts.length === 0 ? (
        <p className="text-center text-red-500">No products available</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-600 bg-black text-white">
            <thead>
              <tr>
                <th className="border border-gray-600 px-4 py-2">ID</th>
                <th className="border border-gray-600 px-4 py-2">Title</th>
                <th className="border border-gray-600 px-4 py-2">Category</th>
                <th className="border border-gray-600 px-4 py-2">Price</th>
                {loggedInUser && (
                  <th className="border border-gray-600 px-4 py-2">Actions</th>
                )}
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-800 text-center align-middle"
                >
                  <td className="border border-gray-600 px-4 py-2">{product.id}</td>
                  <td className="border border-gray-600 px-4 py-2">
                    {truncateTitle(product.title)}
                  </td>
                  <td className="border border-gray-600 px-4 py-2">{product.category}</td>
                  <td className="border border-gray-600 px-4 py-2">${product.price}</td>
                  {loggedInUser && (
                    <td className="border border-gray-600 px-4 py-2 space-y-1">
                      <button
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 mr-2"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => navigate(`/updateproduct/${product.id}`)}
                        className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 mr-2"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`py-2 px-4 rounded ${
            currentPage === 1
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
        >
          Previous
        </button>
        <span className="text-white">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`py-2 px-4 rounded ${
            currentPage === totalPages
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Datatable;
