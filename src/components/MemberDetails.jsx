// src/components/MemberDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import {
  ArrowLeft,
  Briefcase,
  Sparkles,
  ShoppingCart,
  Star,
} from "lucide-react";

const MemberDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState("");
  //   const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchMemberprod = async () => {
      try {
        const response = await axiosInstance.get(`/showSellerProds/${id}`);
        setMember(response.data);
      } catch (error) {
        console.error("Failed to fetch member:", error);
      }
    };
    fetchMemberprod();
  }, [id]);

  //   const addToCart = (product) => {
  //     setCart((prevCart) => {
  //       const existingItem = prevCart.find((item) => item.id === product.id);
  //       if (existingItem) {
  //         return prevCart.map((item) =>
  //           item.id === product.id
  //             ? { ...item, quantity: item.quantity + 1 }
  //             : item
  //         );
  //       }
  //       return [...prevCart, { ...product, quantity: 1 }];
  //     });

  //     // Show success feedback
  //     // alert(${product.name} added to cart!);
  //   };

  if (!member)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-center text-gray-600 text-xl">Loading profile...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F0FF] via-white to-[#F8F0FF] p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-gray-200 text-gray-700 hover:text-white hover:bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 font-medium"
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/50 sticky top-8">
              <div className="text-center">
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mb-5 object-cover mx-auto shadow-lg border-4 border-white"
                />
                <h2 className="text-2xl font-bold text-gray-800">
                  {member.name}
                </h2>
                <div className="flex items-center justify-center gap-2 mt-2 text-gray-600">
                  <Briefcase size={16} />
                  <p className="text-sm">{member.jobTitle}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mt-3">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">
                      {member.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({member.reviews} reviews)
                  </span>
                </div>

                <p className="text-gray-500 text-sm mt-1">Age: {member.age}</p>
              </div>

              {/* Description */}
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Sparkles size={18} className="text-purple-600" />
                  About
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/50">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Sparkles size={20} className="text-purple-600" />
                Products & Services
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {member.products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    {/* Product Image */}
                    <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback if image doesn't load */}
                      <div className="hidden h-full items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
                        <div className="text-center">
                          <Sparkles
                            size={32}
                            className="text-purple-400 mx-auto mb-2"
                          />
                          <p className="text-purple-600 font-semibold text-sm">
                            {product.name}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Product Details - Simple Layout like the image */}
                    <div className="p-4">
                      {/* Product Name */}
                      <h4 className="font-bold text-gray-800 text-lg mb-1">
                        {product.name}
                      </h4>

                      {/* Product Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Price and Add to Cart Button */}
                      <div className="flex justify-between items-center">
                        {/* Price */}
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-gray-800">
                            ₹{product.price}
                          </span>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                          onClick={() => addToCart(product)}
                          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-sm"
                        >
                          <ShoppingCart size={16} />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
