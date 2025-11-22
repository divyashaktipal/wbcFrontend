import { Link } from "react-router-dom";

export default function GatewayToHeritage() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2  md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A0DAD] mb-6">
            Empowering India's Women, One Product at a Time
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Every jar of pickle, every handmade toy, every crafted bag carries
            the heart of a woman entrepreneur.
          </p>
          <p className="text-lg text-gray-700 mb-4 font-semibold">
            When you shop here, you support dreams — not corporations.
          </p>
          <Link to="/about-us">
            <button className="mt-6 bg-gradient-to-r from-[#6A0DAD] to-[#9B59B6] text-white px-8 py-3 rounded font-semibold hover:from-[#B24592] hover:to-[#F15F79] transition-all duration-300 shadow-lg hover:shadow-xl">
              Know More
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/WBC.jpg"
              alt="WBC Group Photo"
              className="w-full h-90 rounded-lg shadow-xl object-cover transition-transform duration-500 ease-out hover:scale-105"
            />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-100 rounded-full opacity-50 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full opacity-50 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
