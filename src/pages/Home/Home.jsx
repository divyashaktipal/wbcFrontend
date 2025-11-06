import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHeart, FaShoppingCart, FaMinus, FaPlus } from "react-icons/fa";
// import { products } from "./products";
import ProductList from "../../components/ProductList";

const Home = () => {
  // State for product counts
 

  // Update count function
 
  return (
    <div className="mt-19 ">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col md:flex-row items-center  bg-gray-50">
        {/* Main Image */}
        <div className="w-full h-full md:absolute left-0 top-3">
          <img
            src="/Womens.jpg"
            alt="Living room interior with plant and rattan chair"
            className="w-full h-[50vh] md:h-[90vh] object-cover"
          />
        </div>

        {/* Content Card */}
        <div
          className="w-[90%] md:w-[40%] lg:w-[35%] bg-[#FFF9F0] p-6 md:p-8 lg:p-12 rounded-lg shadow-lg 
                      mx-4 md:mr-8 lg:mr-12 md:ml-auto -mt-8 md:mt-0 relative"
        >
          <div className="mb-3 md:mb-4">
            <span className="text-sm uppercase tracking-wider text-[#8B0000]">
              New Arrival
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold  mb-4 md:mb-6 text-[#8B0000]">
           Women Business
            <br />
            Circle
          </h1>
          <p className="text-[#771D1D] mb-6 md:mb-8 text-sm md:text-sm">
           The Women Business Circle (WBC) provides mentorship, networking, business resources, and a collaborative ecosystem through seminars and workshops to help women scale their ventures and achieve financial independence.
          </p>
          <div className="flex sm:space-x-20 md:space-x-5  justify-between items-center lg:space-x-5">
          <Link to="/seller-account">
            <button className="mt-3 bg-[#500653] text-white px-8 py-3 rounded hover:bg-[#660000]  transition-colors duration-300">
            Become a member
            </button>
          </Link>
          <Link to="/seller-account">
            <button className="mt-3 bg-[#500653]    text-white px-8 py-3 rounded hover:bg-[#660000] transition-colors duration-300">
              UPCOMING EVENTS
            </button>
          </Link>
          </div>
        </div>
      </section>

      {/* Browse The Range Section */}
   

      {/* Our Products Section */}
      <section className="py-16 md:py-24 mt-0 bg-amber-50">
       <ProductList/>
      </section>

      {/* Trusted Companies Section */}
      <section className="py-12 bg-gray-20 mt-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-center text-xl md:text-2xl text-[#8B0000] mb-8 md:mb-12">
            TRUSTED BY OVER 100+ SELLERS
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-70">
            {/* Company Logos */}
            <img
              src="./amazon-logo.webp"
              alt="Amazon"
              className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="./amazon-logo.webp"
              alt="Etsy"
              className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="./amazon-logo.webp"
              alt="Shopify"
              className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="./amazon-logo.webp"
              alt="eBay"
              className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
            />
            <img
              src="./amazon-logo.webp"
              alt="Alibaba"
              className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Gateway to Heritage Section */}
      <section className="py-16 md:py-24 bg-[#FFF9F0]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B0000] mb-6">
                Empowering India's Women, One Product at a Time
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-base md:text-lg">
                  We're building a digital marketplace where Indian household
                  women transform tradition into livelihood—selling homemade
                  pickles, textiles, jewelry, snacks, and more. By giving them a
                  platform to showcase their craft, we're not just supporting
                  small businesses—we're uplifting families, preserving
                  heritage, and creating a ripple of empowerment across
                  communities.
                </p>
                <p className="text-base md:text-lg font-bold">
                  No middlemen. No barriers. Just pure talent.
                </p>
                <p className="text-base md:text-lg ">
                  Every product tells a story of resilience, creativity, and
                  care. When you shop here, you support real women, real homes,
                  and real dreams.
                </p>
                <Link to="/about-us">
                  <button className="mt-6 bg-[#8B0000] text-white px-8 py-3 rounded hover:bg-[#660000] transition-colors duration-300">
                    Know More
                  </button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img
                  src="/whoWeAre.png"
                  alt="Indian Artisan at Work"
                  className="w-full rounded-lg shadow-xl"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-100 rounded-full opacity-50 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-100 rounded-full opacity-50 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
