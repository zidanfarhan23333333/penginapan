import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaHotel, FaUtensils, FaHooli, FaCarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import landing from "../../assets/landing.jpg";
import card from "../../assets/card.png";
import pantai from "../../assets/pantai.png";
import MbakMbak from "../../assets/MbakMbak.jpg";
import grid1 from "../../assets/grid1.png";
import grid2 from "../../assets/grid2.png";

const Index = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={landing}
        alt="landing.jpg"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0" />
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsValid(value.length <= 3);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      console.log("Searching for:", searchTerm);
    }
  };

  return (
    <div className="relative h-screen">
      <Index />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="absolute top-1/3 text-center text-black">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3">
            Your Partner <span className="text-blue-500">Vacation</span> is Here
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-normal mb-3">
            Let's <span className="text-blue-500">Booking</span> Now
          </h2>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 w-full max-w-2xl p-4 bg-opacity-70 rounded-xl shadow-lg mt-20">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center space-x-4 w-full"
          >
            <BiSearch size={24} />
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              className={`border p-4 w-full text-medium ${
                isValid ? "border-gray-300" : "border-red-500"
              } rounded-lg`}
              placeholder="Search..."
            />
            <button
              type="submit"
              className="p-4 bg-blue-500 text-white text-lg rounded-lg"
            >
              Search
            </button>
          </form>
          {!isValid && (
            <span className="text-red-500 text-lg">
              Maximum of 3 characters allowed
            </span>
          )}
        </div>
        <div className="absolute top-2/3 transform translate-y-1/2 flex justify-center space-x-4 w-full max-w-2xl mt-4 ">
          <Link
            to="/hotel"
            className="text-center flex items-center flex-col w-full justify-center"
          >
            <FaHotel size={40} className="text-blue-500" />
            <p className="flex w-full justify-center items-center">Hotel</p>
          </Link>
          <div className="text-center flex items-center flex-col w-full justify-center">
            <FaUtensils size={40} className="text-blue-500" />
            <p className="flex w-full justify-center items-center">
              Restaurant
            </p>
          </div>
          <div className="text-center flex items-center flex-col w-full justify-center">
            <FaHooli size={40} className="text-blue-500" />
            <p className="flex w-full justify-center items-center">
              Destination
            </p>
          </div>
          <div className="text-center flex items-center flex-col w-full justify-center">
            <FaCarAlt size={40} className="text-blue-500" />
            <p className="flex w-full justify-center items-center">Rent Car</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <div className="package-card relative mb-4 mr-4 ml-4 mt-4">
          <img src={card} alt="Full Package" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
            <div className="package-info text-left ml-4">
              <h2 className="text-white text-2xl font-medium mb-2">
                Full Package
              </h2>
              <p className="text-white text-sm">
                Offering everything you need for a perfect vacation. Book now
                and indulge in the best of what we offer!
              </p>
              <button className="bg-blue-500 mt-3" style={{ width: "150px" }}>
                see
              </button>
            </div>
          </div>
        </div>

        <div className="package-card relative mb-4 mr-4 ml-4 mt-4">
          <img src={card} alt="Half Package" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
            <div className="package-info text-left ml-4">
              <h2 className="text-white text-2xl font-bold mb-2">
                Half Package
              </h2>
              <p className="text-white text-sm font-medium">
                Perfect for those seeking a balanced blend of relaxation and
                adventure. Reserve for a memorable retreat!
              </p>
              <button className="bg-blue-500 mt-3" style={{ width: "150px" }}>
                see
              </button>
            </div>
          </div>
        </div>

        <div className="package-card relative mb-4 mr-4 ml-4 mt-4">
          <img src={pantai} alt="Small Package" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
            <div className="package-info text-left ml-4">
              <h2 className="text-white text-2xl font-medium mb-2">
                Small Package
              </h2>
              <p className="text-white text-sm">
                Take a quick break from the routine with our Small Package,
                ideal for a short yet rejuvenating getaway.
              </p>
              <button className="bg-white mt-3" style={{ width: "150px" }}>
                see
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-screen mt-4 ml-2 mr-2 p-4">
        <img
          src={MbakMbak}
          alt="MbakMbak.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <div className="w-1/2 h-full flex flex-col justify-center pl-10">
            <h1 className="text-blue-800 text-6xl font-medium">
              Check The{" "}
              <span className="font-bold text-blue-900">Best Deal</span>
            </h1>
            <h1 className="text-blue-800 text-6xl font-medium">
              Just For You!!!!
            </h1>
            <p className="mt-4 max-w">
              Book now and experience the magic of a dream vacation
              <br />. From breathtaking landscapes to romantic dinners, every
              moment will be special.
              <br />
              Let’s make this journey one to remember forever.
            </p>
          </div>
          <Link
            to="/accommodations"
            className="rounded-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 text-center font-semibold text-sm absolute bottom-20 left-1/2 transform -translate-x-1/2 mb- max-w-xs mb-7"
            style={{ zIndex: 10 }}
          >
            Explore Packages
          </Link>

          <div className="w-1/2 h-full flex justify-center items-center pr-10 gap-2">
            <div className="card bg-white rounded-lg shadow-md w-80">
              <img
                src={grid2}
                alt=""
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="card-content p-6">
                <h1 className="text-xl font-semibold text-gray-800 mb-3">
                  Borobudur
                </h1>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
                  doloremque? Labore est amet odit? Alias.
                </p>
                <Link
                  to=""
                  className="card-button block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center font-semibold text-sm"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="card bg-white rounded-lg shadow-md w-80">
              <img
                src={grid1}
                alt=""
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="card-content p-6">
                <h1 className="text-xl font-semibold text-gray-800 mb-3">
                  Bali
                </h1>
                <p className="text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
                  doloremque? Labore est amet odit? Alias.
                </p>
                <Link
                  to=""
                  className="card-button block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center font-semibold text-sm"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
