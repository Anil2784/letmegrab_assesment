import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/products/logo.jpeg"; // Assuming this is your logo file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); // State to track logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is logged in (retrieve from localStorage)
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) setIsShopOpen(false); // Close shop dropdown when menu closes
  };

  const toggleShop = () => {
    setIsShopOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-black text-white flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* Right Buttons */}
        <div className="flex items-center space-x-4">
          {loggedInUser ? (
            <>
              {/* Display the logged-in username */}
              <span className="text-sm text-gray-300">Hello, {loggedInUser}</span>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login and Signup Buttons */}
              <button className="px-2 py-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <Link to="/login">Login</Link>
              </button>
              <button className="px-2 py-1 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <Link to="/signup">Signup</Link>
              </button>
            </>
          )}
          <HiMenu
            size={24}
            className="cursor-pointer hover:text-gray-300"
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed top-[60px] left-0 z-50 h-[320px] w-[200px] bg-black text-white shadow-lg flex flex-col items-center py-6 gap-3">
          <button
            className="absolute top-2 right-2 text-gray-300 font-bold"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            X
          </button>
          <div className="flex flex-col items-center gap-3">
            <Link to="/" className="text-sm font-medium hover:text-gray-300 transition">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-gray-300 transition">
              About
            </Link>
            <div>
              <div
                className="flex items-center justify-between text-sm font-medium cursor-pointer hover:text-gray-300 transition"
                onClick={toggleShop}
                aria-label="Toggle Shop Dropdown"
              >
                <span>Shop</span>
                {isShopOpen ? (
                  <IoIosArrowUp size={16} />
                ) : (
                  <IoIosArrowDown size={16} />
                )}
              </div>
              {isShopOpen && (
                <div className="mt-2 flex flex-col items-start gap-3">
                  <Link to="/pendents" className="text-xs font-medium hover:text-gray-300 transition">
                    Pendants
                  </Link>
                  <Link to="/braslet" className="text-xs font-medium hover:text-gray-300 transition">
                    Bracelets
                  </Link>
                  <Link to="/rings" className="text-xs font-medium hover:text-gray-300 transition">
                    Rings
                  </Link>
                  <Link to="/neacles" className="text-xs font-medium hover:text-gray-300 transition">
                    Necklaces
                  </Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="text-sm font-medium hover:text-gray-300 transition">
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-auto">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
