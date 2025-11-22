import { useState, useEffect, useMemo } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import { useAuth } from "../../contexts/AuthContext";

const Billing = () => {
  const { productId } = useParams();
  const [searchParams] = useSearchParams();
  const sellerPhone = searchParams.get("sellerPhone");
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  // Product state
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/products/${productId}`);
        setProduct(res.data.product);
      } catch (err) {
        console.error("Error fetching product", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);


  // console.log("Authenticated:", isAuthenticated);

  // Pre-fill form with user data if available
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
      }));
    }
  }, [user]);

  // Billing form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- PRICE CALCULATIONS --- //
  const taxRate = 8; // %

  const { price, taxAmount, totalAmount } = useMemo(() => {
    const priceNum = Number(product?.price) || 0;
    const tax = (priceNum * taxRate) / 100;
    return {
      price: priceNum.toLocaleString("en-IN"),
      taxAmount: Math.round(tax).toLocaleString("en-IN"),
      totalAmount: Math.round(priceNum + tax).toLocaleString("en-IN"),
    };
  }, [product]);

  // Redirect to WhatsApp
  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();

    // Additional validation
    if (!sellerPhone) {
      alert("Seller contact information not available");
      return;
    }

    const { fullName, email, phone, address, city, state, pincode } = formData;

    const message = `
🛍️ *NEW ORDER REQUEST*

*Product Details:*
• Product: ${product.name}
• Price: ₹${product.price}
• Tax (${taxRate}%): ₹${taxAmount}
• *Total Amount: ₹${totalAmount}*

*Customer Details:*
• Name: ${fullName}
• Email: ${email}
• Phone: ${phone}
• Address: ${address}, ${city}, ${state} - ${pincode}

Please confirm the order availability and provide payment details.
Thank you! 👍
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/91${sellerPhone}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Optional: Show confirmation message
    // alert("You're being redirected to WhatsApp to complete your order!");
  };

  // Loading state
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-gray-200 h-96 rounded-lg"></div>
            <div className="bg-gray-200 h-64 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-red-800 mb-2">Error</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

 

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-purple-600 hover:text-purple-800 font-medium"
        >
          ← Back to Product
        </button>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Billing Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Billing Details
            </h2>

            <form
              onSubmit={handleWhatsAppRedirect}
              id="billing-form"
              className="space-y-6"
            >
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { id: "fullName", label: "Full Name", type: "text" },
                    { id: "email", label: "Email", type: "email" },
                    { id: "phone", label: "Phone Number", type: "tel" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label} *
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        required
                        value={formData[field.id]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping */}
              <div className="space-y-4 pt-6 border-t">
                <h3 className="text-lg font-medium text-gray-900">
                  Shipping Address
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="Enter your complete address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: "city", label: "City" },
                    { id: "state", label: "State" },
                    { id: "pincode", label: "Pincode", type: "text" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {field.label} *
                      </label>
                      <input
                        type={field.type || "text"}
                        id={field.id}
                        name={field.id}
                        required
                        value={formData[field.id]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            {/* Product Info */}
            {product.image && (
              <div className="flex items-center gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-medium text-gray-900 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">Qty: 1</p>
                </div>
              </div>
            )}

            <div className="space-y-3 text-gray-600 border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{price}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between">
                <span>Tax ({taxRate}%)</span>
                <span>₹{taxAmount}</span>
              </div>

              <div className="border-t pt-3 flex justify-between text-lg font-semibold text-gray-900">
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>

            <button
              type="submit"
              form="billing-form"
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Continue to WhatsApp
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
              You'll be redirected to WhatsApp to confirm your order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
