import { Link } from "react-router-dom";
import ProductList from "../../components/ProductList";
import { Users, Briefcase, BarChart } from "lucide-react"; 
// import Navbar from "../../components/Navbar";
const Home = () => {
  return (
    <div >
      {/* Hero Section */}
      
 {/*  */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center bg-gray-50">
        <div className="w-full h-full md:absolute left-0 top-0">
          <img
            src="/Womens.jpg" // Assuming this is in your /public folder
            alt="Women Business Circle Members"
            className="w-full h-[50vh] md:h-[90vh] object-cover"
          />
           
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        </div>

        {/* Content Card */}
        <div className="relative w-[90%] md:w-[40%] lg:w-[35%] bg-white/10 backdrop-blur-xs border border-white/10 text-white p-6 md:p-8 lg:p-12 rounded-lg shadow-lg mx-4 md:mr-8 lg:mr-12 md:ml-auto -mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Women Business
            <br />
            Circle
          </h1>
          <p className="text-gray-200 mb-6 md:mb-8 text-base">
            The Women Business Circle (WBC) provides mentorship, networking,
            business resources, and a collaborative ecosystem to help women
            scale their ventures and achieve financial independence.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <Link to="/become-seller">
              <button className="w-full h-15 sm:w-auto mt-3 bg-gradient-to-r from-[#6A0DAD] to-[#9B59B6] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#B24592] hover:to-[#F15F79] transition-all duration-300 shadow-lg hover:shadow-xl">
                Become a Member
              </button>
            </Link>
            <Link to="/upcoming-events">
              <button className="w-full h-15 sm:w-auto mt-3 bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/50 transition-colors duration-300">
                Upcoming Events
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ NEW: Why Join Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#6A0DAD] mb-4">
              Why Join the Circle?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the tools, community, and support you need to thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 bg-gradient-to-br from-[#F8F0FF] to-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-[#6A0DAD] to-[#9B59B6] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Empowering Community
              </h3>
              <p className="text-gray-600">
                Connect with a network of inspiring, like-minded women
                entrepreneurs. Share, learn, and grow together.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="text-center p-8 bg-gradient-to-br from-[#F8F0FF] to-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-[#6A0DAD] to-[#9B59B6] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Business Resources
              </h3>
              <p className="text-gray-600">
                Gain access to exclusive workshops, mentorship programs, and
                tools designed to scale your venture.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="text-center p-8 bg-gradient-to-br from-[#F8F0FF] to-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-r from-[#6A0DAD] to-[#9B59B6] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BarChart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Grow Your Sales
              </h3>
              <p className="text-gray-600">
                Showcase your products on our marketplace, reaching a dedicated
                audience that wants to support women-led businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-16 md:py-24 bg-amber-50">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center mb-4">
            {/* ✅ UI THEME: Updated colors */}
            <div className="flex-grow border-t border-purple-300"></div>
            <h2 className="px-4 text-3xl md:text-4xl font-serif font-bold text-[#6A0DAD] whitespace-nowrap">
              Our Products
            </h2>
            <div className="flex-grow border-t border-purple-300"></div>
          </div>
        </div>
        <ProductList />
      </section>

      {/* Trusted Companies Section */}
      <section className="py-12 bg-white mt-0">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-center text-xl md:text-2xl text-[#6A0DAD] mb-8 md:mb-12">
            TRUSTED BY OVER 100+ SELLERS
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-70">
            {/* ... (logos) ... */}
          </div>
        </div>
      </section>

      {/* Gateway to Heritage Section */}
      <section className="py-16 md:py-24 bg-[#F8F0FF]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              {/* ✅ UI THEME: Updated colors */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A0DAD] mb-6">
                Empowering India's Women, One Product at a Time
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-base md:text-lg">
                  We're building a digital marketplace where Indian household
                  women transform tradition into livelihood—selling homemade
                  pickles, textiles, jewelry, snacks, and more.
                </p>
                <p className="text-base md:text-lg font-bold text-gray-800">
                  No middlemen. No barriers. Just pure talent.
                </p>
                <p className="text-base md:text-lg ">
                  Every product tells a story of resilience, creativity, and
                  care. When you shop here, you support real women, real homes,
                  and real dreams.
                </p>
                <Link to="/members">
                  <button className="mt-6 bg-gradient-to-r from-[#6A0DAD] to-[#9B59B6] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#B24592] hover:to-[#F15F79] transition-all duration-300 shadow-lg hover:shadow-xl">
                    Meet Our Members
                  </button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img
                  src="/Bbc.jpg"
                  alt="Indian Artisan at Work"
                  className="w-90 h-90 rounded-lg shadow-xl "
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-100 rounded-full opacity-50 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full opacity-50 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;