import { Link } from "react-router-dom";
import { Users, Briefcase, BarChart } from "lucide-react";

export default function WhyJoinUsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F8F0FF]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6A0DAD] mb-4">
          Why Join the Circle?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          We empower women to become financially independent through
          collaboration and creativity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<Users />}
            title="Empowering Community"
            text="Be part of a supportive sisterhood that uplifts and celebrates women entrepreneurs."
          />
          <Feature
            icon={<Briefcase />}
            title="Business Resources"
            text="Access mentorship, workshops, and digital tools to grow your business."
          />
          <Feature
            icon={<BarChart />}
            title="Growth Opportunities"
            text="Showcase your products and services to reach customers who believe in your story."
          />
        </div>
      </div>
    </section>
  );
}
const Feature = ({ icon, title, text }) => (
  <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-16 h-16 bg-gradient-to-r from-[#6A0DAD] to-[#9B59B6] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);
