import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const getUserDataFromCookie = () => {
      const cookieData = document.cookie
        .split("; ")
        .find((row) => row.startsWith("userData="));

      if (cookieData) {
        const userDataString = cookieData.split("=")[1];
        try {
          const userData = JSON.parse(decodeURIComponent(userDataString));
          return userData;
        } catch (error) {
          console.error("Error parsing JSON from cookie:", error);
          return null;
        }
      } else {
        return null;
      }
    };

    const userData = getUserDataFromCookie();
    setUser(userData);
  }, []);

  const handleLogout = () => {
    const now = new Date();
    const expiresDate = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const expiresUTC = expiresDate.toUTCString();

    document.cookie = `userData=; expires=${expiresUTC}; path=/;`;
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
    window.location.reload();
  };

  const role = localStorage.getItem("role");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="fixed font-poppins top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="flex justify-between items-center h-20 px-2 md:px-6">
        <div>
          <h1 className="cursor-pointer text-2xl mt-1 ml-2">
            <Link to="/">
              Borobudur <span className="text-blue-500 ">Society</span>
            </Link>
          </h1>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/accommodations">Akomodasi</Link>
          </li>
          <li>
            <Link to="/cekpesanan">Cek Pesanan</Link>
          </li>

          {role === "pengusaha" && (
            <li>
              <Link to="/usaha">Usaha Anda</Link>
            </li>
          )}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <BsPerson size={20} />
              {user ? (
                <span>{user.name}</span>
              ) : (
                <span className="text-white block w-full text-center px-4 py-2 bg-blue-800 hover:bg-blue-600 rounded-xl">
                  Login
                </span>
              )}
            </div>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
                {user ? (
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Menu hamburger */}
        <div className="md:hidden">
          <HiOutlineMenuAlt4
            size={24}
            className="cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="fixed top-20 left-0 right-0 bg-gray-100 py-7">
            <div className="flex flex-col items-center space-y-4">
              <Link to="/accommodations" className="text-xl">
                Akomodasi
              </Link>
              <Link to="/cekpesanan" className="text-xl">
                Cek Pesanan
              </Link>

              {role === "pengusaha" && (
                <Link to="/usaha" className="text-xl">
                  Usaha Anda
                </Link>
              )}

              <div className="flex items-center space-x-4">
                {user ? (
                  <button onClick={handleLogout} className="text-xl">
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="text-xl"
                  >
                    Login
                  </button>
                )}

                <div className="flex justify-between w-24">
                  <FaFacebook className="text-3xl" />
                  <FaTwitter className="text-3xl" />
                  <FaYoutube className="text-3xl" />
                  <FaInstagram className="text-3xl" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
