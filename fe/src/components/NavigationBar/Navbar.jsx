import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center h-20 px-4">
      <div>
        <h1>BOROBUDUR.</h1>
      </div>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destinasi</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>

      <div className="hidden md:flex items-center space-x-4">
        <BiSearch size={20} />
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <BsPerson size={20} />
            {user ? <span>{user.name}</span> : <span>Login</span>}
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
      <div className="md:hidden cursor-pointer">
        <HiOutlineMenuAlt4 size={20} onClick={toggleMobileMenu} />
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-20 w-full bg-gray-100/90 py-7 flex flex-col">
          <ul>
            <li className="border-b">Home</li>
            <li className="border-b">Destinasi</li>
            <li className="border-b">Travel</li>
            <li className="border-b">View</li>
            <li className="border-b">Book</li>
          </ul>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            {user ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
