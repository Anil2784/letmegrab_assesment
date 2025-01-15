// App.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional: Navigation styles
import "swiper/css/pagination"; // Optional: Pagination styles
import Slider1 from "../assets/products/carousel-1.jpeg";
import Slider2 from "../assets/products/carousel-2.jpeg";
import Slider3 from "../assets/products/carousel-3.jpeg";
import Slider4 from "../assets/products/carousel-4.jpeg";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Include Autoplay module

const App = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Include the necessary modules
      navigation={true} // Enable navigation buttons
      pagination={{ clickable: true }} // Enable pagination
      autoplay={{
        delay: 3000, // Auto-slide delay (in milliseconds)
        disableOnInteraction: false, // Keep autoplay even after user interaction
      }}
      spaceBetween={10} // Space between slides
      slidesPerView={1} // Number of slides per view
      loop={true} // Enable infinite looping
      className="w-full h-screen" // Full-screen Swiper
    >
      <SwiperSlide>
        <img
          src={Slider1}
          alt="Slide 1"
          className="w-full h-full object-cover" // Make image cover the entire slide
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Slider2}
          alt="Slide 2"
          className="w-full h-full object-cover" // Make image cover the entire slide
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Slider3}
          alt="Slide 3"
          className="w-full h-full object-cover" // Make image cover the entire slide
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Slider4}
          alt="Slide 4"
          className="w-full h-full object-cover" // Make image cover the entire slide
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default App;
