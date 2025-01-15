import React from "react";
import logo from "../assets/products/logo.jpeg";
function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Logo Section */}
        <div className="text-center lg:text-left">
          
          <img  className="text-2xl font-bold mb-4" src={logo} alt="" />
        </div>

        {/* Let Us Help You */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Let Us Help You</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Your Account</li>
            <li className="hover:text-gray-400 cursor-pointer">Shipping Rates</li>
            <li className="hover:text-gray-400 cursor-pointer">Returns & Refunds</li>
            <li className="hover:text-gray-400 cursor-pointer">FAQ</li>
            <li className="hover:text-gray-400 cursor-pointer">Support</li>
          </ul>
        </div>

        {/* The Collection */}
        <div>
          <h2 className="text-lg font-semibold mb-4">The Collection</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">New Arrivals</li>
            <li className="hover:text-gray-400 cursor-pointer">Best Sellers</li>
            <li className="hover:text-gray-400 cursor-pointer">Seasonal Picks</li>
            <li className="hover:text-gray-400 cursor-pointer">Exclusive Deals</li>
            <li className="hover:text-gray-400 cursor-pointer">Trending Now</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Details</h2>
          <ul className="space-y-2">
            <li>Phone: +1 (555) 123-4567</li>
            <li>Email: contact@applerocket.com</li>
            <li>Address: 123 AppleRocket Street</li>
            <li>City: New York, NY</li>
            <li>Working Hours: 9am - 5pm (Mon-Fri)</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-sm">
        <p>© 2025 AppleRocket. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
