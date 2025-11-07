import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import { User, Briefcase, ShoppingBag } from "lucide-react";

// Mock Data for Members
const mockMembers = [
  {
    _id: "1",
    name: "Aaradhya Sharma",
    businessName: "Aaradhya's Kitchen",
    businessType: "Food & Beverages",
    businessDescription:
      "Delicious homemade pickles and spices, prepared with traditional recipes and fresh ingredients.",
  },
  {
    _id: "2",
    name: "Bhavna Patel",
    businessName: "Bhavna's Creations",
    businessType: "Handicrafts",
    businessDescription:
      "Beautiful hand-stitched textiles and home decor items, perfect for adding a touch of elegance.",
  },
  {
    _id: "3",
    name: "Chhaya Verma",
    businessName: "Chhaya's Glow",
    businessType: "Beauty & Wellness",
    businessDescription:
      "Organic, handmade soaps and wellness products that nourish your skin and soul.",
  },
  {
    _id: "4",
    name: "Divya Singh",
    businessName: "Divya's Designs",
    businessType: "Fashion",
    businessDescription:
      "Custom-designed kurtas and sarees that blend modern style with traditional fabrics.",
  },
  {
    _id: "5",
    name: "Esha Mehra",
    businessName: "Esha's Edibles",
    businessType: "Food & Beverages",
    businessDescription:
      "Freshly baked cakes, cookies, and snacks for every occasion. Made with love.",
  },
  {
    _id: "6",
    name: "Falguni Gupta",
    businessName: "Falguni's Fine Arts",
    businessType: "Home & Living",
    businessDescription:
      "Hand-painted ceramics and wall art to brighten up your living space.",
  },
];

// This is the glassmorphism card component
const MemberCard = ({ member }) => (
  <div className="w-full max-w-sm rounded-2xl p-6 shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl bg-white/30 backdrop-blur-lg border border-white/20">
    <div className="flex flex-col items-center">
      <img
        className="w-24 h-24 mb-4 rounded-full shadow-lg border-2 border-white/50"
        src={`https://placehold.co/150x150/f8f0ff/6A0DAD?text=${member.name
          .charAt(0)
          .toUpperCase()}`}
        alt={`${member.name} profile`}
      />
      <h3 className="mb-1 text-2xl font-bold text-gray-900">{member.name}</h3>
      <span className="text-sm text-gray-700 font-medium">
        {member.businessName}
      </span>
      <div className="mt-4 w-full border-t border-white/30 pt-4 space-y-3">
        <div className="flex items-start">
          <Briefcase className="w-5 h-5 text-purple-800 mr-3 shrink-0" />
          <span className="text-sm text-gray-800">
            <span className="font-semibold">Services:</span>{" "}
            {member.businessType}
          </span>
        </div>
        <div className="flex items-start">
          <ShoppingBag className="w-5 h-5 text-purple-800 mr-3 shrink-0" />
          <span className="text-sm text-gray-800">
            <span className="font-semibold">About:</span>{" "}
            {member.businessDescription}
          </span>
        </div>
      </div>
    </div>
  </div>
);

const MembersPage = () => {
  // ✅ FIX: Initialized state with mock data and set loading to false
  const [members, setMembers] = useState(mockMembers);
  const [loading, setLoading] = useState(false);

  /*
  // ✅ FIX: Commented out the API fetch
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axiosInstance.get("/seller/all-public");
        setMembers(response.data.sellers || []);
      } catch (error) {
        console.error("Failed to fetch members:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);
  */

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F0FF] to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6A0DAD] mb-4">
            Our Members
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the talented and inspiring women entrepreneurs who form the
            heart of our community.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-purple-700">Loading members...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <MemberCard key={member._id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MembersPage;