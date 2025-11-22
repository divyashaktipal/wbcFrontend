import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-10 bg-gradient-to-r from-yellow-50 to-orange-50 text-black text-center">
      <div className="max-w-4xl mx-auto px-4">
        <Heart className="w-16 h-16 mx-auto mb-6 text-[#E8B931]" />
        <h2 className="text-5xl font-bold mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl mb-10 text-black/80">
          Join a community that believes in your dreams and supports your growth
          every step of the way.
        </p>
        <Link to="/become-seller">
          <button className="bg-[#E8B931] text-[#2A5C4F] px-8 py-2 rounded  font-bold text-lg hover:bg-[#D4A621] transition-all duration-300 shadow-xl hover:shadow-2xl">
            Become a Member Today
          </button>
        </Link>
      </div>
    </section>
  );
}
