import React from 'react'
import p7 from "../assets/products/product_7img.jpg"
import p8 from "../assets/products/product_8img.jpg"
function About() {
  return (
    <>
      <section className="text-gray-600 body-font bg-[#A09E9F]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Left Side (Text Content) */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Zoci jewellery
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Zoci Showrooms in Mumbai epitomize luxury and elegance, offering an exquisite array of finely crafted jewellery pieces. Located in the bustling heart of the city, these showrooms are a haven for jewellery enthusiasts and connoisseurs alike. Zoci is renowned for its impeccable craftsmanship, showcasing a diverse collection that ranges from timeless classics to contemporary designs. Each piece at Zoci is a testament to the brand's commitment to quality and innovation, blending traditional artistry with modern aesthetics. With a focus on customer satisfaction, Zoci Showrooms provide a personalized shopping experience, ensuring that every visit is memorable and every purchase is cherished
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg ">
                Read More
              </button>

            </div>
          </div>

          {/* Right Side (Image Content) */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={p7}
            />
          </div>
        </div>
      </section>
      <hr />
      <section className="text-gray-600 body-font bg-[#A09E9F]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* Left Side (Image) */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={p8}
            />
          </div>

          {/* Right Side (Text Content) */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Zoci jewellery
              
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              Zoci Showrooms in Mumbai epitomize luxury and elegance, offering an exquisite array of finely crafted jewellery pieces. Located in the bustling heart of the city, these showrooms are a haven for jewellery enthusiasts and connoisseurs alike. Zoci is renowned for its impeccable craftsmanship, showcasing a diverse collection that ranges from timeless classics to contemporary designs. Each piece at Zoci is a testament to the brand's commitment to quality and innovation, blending traditional artistry with modern aesthetics. With a focus on customer satisfaction, Zoci Showrooms provide a personalized shopping experience, ensuring that every visit is memorable and every purchase is cherished
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-2xl text-lg">
                Read More
              </button>

            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default About