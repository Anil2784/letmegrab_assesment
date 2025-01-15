import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="bg-[#EEE6DF] min-h-screen flex justify-center items-center ">
      <div className="container max-w-xl bg-white rounded-lg shadow-lg p-8 h-[400px] w-[400px]">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Need Our Help?
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Fill out the form below, and we'll get back to you shortly.
          </p>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="text-center text-green-500 text-lg font-medium">
            Thank you! Your form has been submitted.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
                className="mt-1 w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-24 justify-center bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-300 focus:outline-none transition"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
