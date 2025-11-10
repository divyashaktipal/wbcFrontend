import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState, useRef, useEffect } from "react";
// import logo from "../assets/logo.png";
import {
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaClipboardList,
  FaPhoneAlt,
  FaInfoCircle,
  FaUserPlus,
  FaUsers, // ✅ NEW: Icon for Members
  FaCalendarAlt, // ✅ NEW: Icon for Events
} from "react-icons/fa";

const Navbar = () => {
  const { isAuthenticated, logout, user, isSeller } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const isSellerPage =
    location.pathname === "/become-seller" ||
    location.pathname.startsWith("/seller") ||
    location.pathname.startsWith("/seller-account");

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="py-2 z-50 bg-gradient-to-r from-[#ffffff] to-[#d4dfed] shadow-md">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="shrink-0">
              <img
                src="./wbc-logo.png"
                alt="WBC Logo"
                className="h-18 w-20 brightness-0 invert"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link
              to="/"
              className=" tracking-wide font-semibold text-black  transition-colors duration-300 hover:text-[#B24592] relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B24592] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>

            {/* {!isSeller() && !isSellerPage && (
              <Link
                to="/products"
                className="text-black font-semibold tracking-wide transition-colors duration-300 hover:text-[#B24592] relative group"
              >
                Products
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B24592] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
              </Link>
            )} */}

            <Link
              to="/members"
              className="text-black font-semibold tracking-wide transition-colors duration-300 hover:text-[#B24592] relative group"
            >
              Members
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B24592] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>

            <Link
              to="/about-us"
              className="text-black  font-semibold tracking-wide transition-colors duration-300 hover:text-[#B24592] relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B24592] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>

            <Link
              to="/upcoming-events"
              className="text-black  font-semibold tracking-wide transition-colors duration-300 hover:text-[#B24592] relative group"
            >
              Upcoming Events
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B24592] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>
          </div>

          {/* Desktop Icons & Auth */}
          <div className="hidden md:flex items-center space-x-6">
            {!isSeller() && !isSellerPage && (
              <Link
                to="/cart"
                className="relative flex items-center space-x-1 text-[#ffffff] hover:text-[#B24592] transition-colors duration-300"
              >
                <FaShoppingCart className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            )}

            {isAuthenticated() ? (
              <div
                className="relative group"
                ref={dropdownRef}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center space-x-2 text-white hover:bg-[#B24592] font-medium border border-transparent rounded-md px-4 py-2 transition-all duration-300 bg-[#6A0DAD] bg-opacity-80 hover:bg-opacity-100">
                  <FaUser className="text-lg" />
                  <span className="max-w-32 truncate">
                    {user?.name || user?.businessName || "User"}
                  </span>
                </button>

                {/* User Dropdown Menu */}
                <div
                  className={`absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50 transition-all duration-200 border ${
                    isDropdownOpen
                      ? "opacity-100 visible transform translate-y-0"
                      : "opacity-0 invisible transform -translate-y-2"
                  }`}
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-800 truncate">
                      {user?.name || user?.businessName || "User"}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user?.email || ""}
                    </p>
                    {isSeller() && (
                      <p className="text-xs text-purple-600 font-medium mt-1">
                        Seller Account
                      </p>
                    )}
                  </div>

                  {/* ✅ FIX: Only show Dashboard if user is a seller */}
                  {isSeller() && (
                    <Link
                      to="/seller-account"
                      className="flex items-center px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <FaClipboardList className="mr-3 text-gray-500" />
                      <span>Dashboard</span>
                    </Link>
                  )}

                  <Link
                    to="/my-profile"
                    className="flex items-center px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <FaUser className="mr-3 text-gray-500" />
                    <span>My Profile</span>
                  </Link>

                  <div className="border-t border-gray-100 mt-1">
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        handleLogout();
                      }}
                      className="flex items-center w-full px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 transition-all duration-300"
                    >
                      {/* ... (logout icon) ... */}
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Not Authenticated
              !isSellerPage && (
                <div
                  className="relative group"
                  ref={dropdownRef}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link to="/login">
                    <button className="text-black px-4 py-2 transition-all duration-300 font-semibold border border-white bg-transparent hover:bg-gradient-to-r hover:from-[#B24592] hover:to-[#F15F79] hover:text-white hover:shadow-lg">
                      <div className="flex items-center space-x-2">
                        <FaUser className="text-xl" />
                        <span>Login</span>
                      </div>
                    </button>
                  </Link>

                  <div
                    className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] py-2 z-50 transition-all duration-200 border ${
                      isDropdownOpen
                        ? "opacity-100 visible transform translate-y-0"
                        : "opacity-0 invisible transform -translate-y-2"
                    }`}
                  >
                    <Link
                      to="/signup"
                      className="flex items-center px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <FaUserPlus className="mr-3" />
                      <span>Sign Up</span>
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <FaUser className="mr-3" />
                      <span>Login</span>
                    </Link>
                  </div>
                </div>
              )
            )}

            {!isSellerPage && !isSeller() && (
              <Link
                to="/become-seller"
                className="text-white sm:px-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-[#6A0DAD] to-[#9B59B6] hover:from-[#B24592] hover:to-[#F15F79] hover:shadow-lg transition-all duration-300 md:h-11 items-center justify-center flex"
              >
                Become a member
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-purple-200 focus:outline-none transition-colors duration-300  "
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="space-y-2 px-2">
              {/* ... (Mobile auth section is fine) ... */}

              {/* ✅ FIX: Mobile menu links updated */}
              <Link
                to="/members"
                className="flex items-center px-3 py-2 rounded-md text-white hover:text-purple-300 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUsers className="mr-3" />
                <span>Members</span>
              </Link>
              <Link
                to="/upcoming-events"
                className="flex items-center px-3 py-2 rounded-md text-white hover:text-purple-300 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaCalendarAlt className="mr-3" />
                <span>Upcoming Events</span>
              </Link>

              {/* ... (rest of mobile menu) ... */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
