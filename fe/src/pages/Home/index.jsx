import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { FaHotel, FaUtensils, FaHatCowboy, FaCarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import landing from "../../assets/landing.jpg";
import card from "../../assets/card.png";
import pantai from "../../assets/pantai.png";
import MbakMbak from "../../assets/MbakMbak.jpg";
import travel from "../../assets/travel.jpg";
import axios from "axios";

const UsahaList = ({ jenisUsaha }) => {
  const [usaha, setUsaha] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsaha = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/usaha");
        setUsaha(response.data.data.slice(0, 2));
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsaha();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {error && <p className="text-red-500">{error}</p>}
      {usaha.length === 0 ? (
        <p className="text-center text-gray-600">No usaha found.</p>
      ) : (
        usaha.map((item) => (
          <div
            key={item.usaha_id}
            className="card bg-white rounded-lg shadow-md w-full sm:w-56 md:w-72"
            style={{ maxWidth: "100%" }}
          >
            <img
              src={item.foto_usaha[0]}
              alt={item.nama_usaha}
              className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-t-lg"
            />
            <div className="card-content p-2 sm:p-3 md:p-4">
              <h1 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">
                {item.nama_usaha}
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-1 sm:mb-2">
                {item.deskripsi_usaha}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-1 sm:mb-2">
                {item.fasilitas}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-red-600 mb-1 sm:mb-2">
                {item.harga}
              </p>
              <Link
                to={`/detailAkomodasi/${item.usaha_id}`}
                className="card-button block bg-blue-500 hover:bg-blue-600 text-white py-1 sm:py-2 px-2 sm:px-4 rounded-md text-center font-semibold text-xs sm:text-sm md:text-base"
                style={{ width: "100%" }}
              >
                Book Now
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const Index = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={travel}
        alt="travel.jpg"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0" />
    </div>
  );
};

const setJenisUsaha = (jenisUsaha) => {
  localStorage.setItem("jenis_usaha", jenisUsaha);
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
        <div className="absolute top-2/3 transform -translate-y-1/2 flex justify-center space-x-8 w-full max-w-2xl mt-20">
          <div className="text-center">
            <Link
              to="/jenis-usaha"
              onClick={() => setJenisUsaha("Hotel")}
              className="text-center flex items-center flex-col w-full justify-center"
            >
              <FaHotel size={40} className="text-blue-500" />
              <p className="flex w-full justify-center items-center">Hotel</p>
            </Link>
          </div>
          <div className="text-center">
            <Link
              to="/jenis-usaha"
              onClick={() => setJenisUsaha("Restaurant")}
              className="text-center flex items-center flex-col w-full justify-center"
            >
              <FaUtensils size={40} className="text-blue-500" />
              <p className="flex w-full justify-center items-center">
                Restaurant
              </p>
            </Link>
          </div>
          <div className="text-center">
            <Link
              to="/jenis-usaha"
              onClick={() => setJenisUsaha("Wisata")}
              className="text-center flex items-center flex-col w-full justify-center"
            >
              <FaHatCowboy size={40} className="text-blue-500" />
              <p className="flex w-full justify-center items-center">
                Destination
              </p>
            </Link>
          </div>
          <div className="text-center">
            <Link
              to="/jenis-usaha"
              onClick={() => setJenisUsaha("Mobil")}
              className="text-center flex items-center flex-col w-full justify-center"
            >
              <FaCarAlt size={40} className="text-blue-500" />
              <p className="flex w-full justify-center items-center">
                Rent Car
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 md:mt-4 mt-4">
        <div className="package-card relative mb-4 md:mb-0">
          <img src={card} alt="Full Package" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-blue-500 bg-opacity-50">
            <div className="package-info text-white text-left mx-4 my-auto">
              <h2 className="text-2xl font-medium mb-2">Full Package</h2>
              <p className="text-sm">
                Offering everything you need for a perfect vacation. Book now
                and indulge in the best of what we offer!
              </p>
              <Link
                to={`/detailAkomodasi/5208e8e0-cb92-4a23-b767-c43c1f557b46`}
                className="bg-white mt-3 block w-full text-center text-blue-500 py-2 px-4 rounded-lg text-sm font-semibold"
              >
                See
              </Link>
            </div>
          </div>
        </div>

        <div className="package-card relative mb-4 md:mb-0">
          <img src={card} alt="Half Package" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-blue-500 bg-opacity-50">
            <div className="package-info text-white text-left mx-4 my-auto">
              <h2 className="text-2xl font-bold mb-2">Half Package</h2>
              <p className="text-sm">
                Perfect for those seeking a balanced blend of relaxation and
                adventure. Reserve for a memorable retreat!
              </p>
              <Link
                to={`/detailAkomodasi/1ea5c2f1-68ea-4d6f-a99f-7b61f9cbb361`}
                className="bg-white mt-3 block w-full text-center text-blue-500 py-2 px-4 rounded-lg text-sm font-semibold"
              >
                See
              </Link>
            </div>
          </div>
        </div>

        <div className="package-card relative mb-4 md:mb-0">
          <img src={pantai} alt="Small Package" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center bg-blue-500 bg-opacity-50">
            <div className="package-info text-white text-left mx-4 my-auto">
              <h2 className="text-2xl font-medium mb-2">Small Package</h2>
              <p className="text-sm">
                Take a quick break from the routine with our Small Package,
                ideal for a short yet rejuvenating getaway.
              </p>
              <Link
                to={`/detailAkomodasi/1242abd7-8365-4e78-b8be-b7cd48606cd2`}
                className="bg-white mt-3 block w-full text-center text-blue-500 py-2 px-4 rounded-lg text-sm font-semibold"
              >
                See
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-4 ml-2 mr-2 p-4">
        <img
          src={MbakMbak}
          alt="MbakMbak.jpg"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 flex flex-col md:flex-row items-center bg-opacity-75 ">
          <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-10 text-center md:text-left mt-14 md:mt-32">
            <h1 className="text-blue-800 text-3xl sm:text-4xl md:text-6xl font-medium">
              Check The{" "}
              <span className="font-bold text-blue-900">Best Deal</span>
            </h1>
            <p className="mt-4 max-w-md mx-auto md:mx-0 text-black text-sm sm:text-base md:text-lg">
              Book now and experience the magic of a dream vacation From
              breathtaking
              <br />
              landscapes to romantic dinners, every moment will be special
              <br />
              Let’s make this journey one to remember forever.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-10 text-center md:text-left mt-4 md:mt-0">
            <UsahaList jenisUsaha={localStorage.getItem("jenis_usaha")} />
          </div>
          <Link
            to="/accommodations"
            className="rounded-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 text-center font-semibold text-sm absolute bottom-10 left-1/2 transform -translate-x-1/2 mb-7"
            style={{ zIndex: 10 }}
          >
            Explore Packages
          </Link>
        </div>
      </div>

      <footer className="bg-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <h5 className="text-lg font-semibold text-blue-800 mb-4">
              Borobudur Society
            </h5>
            <p className="text-sm text-gray-700 mb-2">Whatsapp: 081294</p>
            <p className="text-sm text-gray-700 mb-2">
              Email: Borobudursociety@mail
            </p>
            <p className="text-sm text-gray-700 mb-2">
              Pusat panggilan (khusus Indonesia): 0842982
            </p>
          </div>
          <div className="col-span-1">
            <h5 className="text-lg font-semibold text-blue-800 mb-4">
              Perusahaan
            </h5>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-sm"
                >
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-sm"
                >
                  Karir
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-sm"
                >
                  Korporasi
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h5 className="text-lg font-semibold text-blue-800 mb-4">
              Dukungan
            </h5>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-sm"
                >
                  Pusat Bantuan
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-sm"
                >
                  Kebijakan Privasi
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 text-sm"
                >
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <h5 className="text-lg font-semibold text-blue-800 mb-4">
              Copyright 2024
            </h5>
            <p className="text-sm text-gray-700">
              Borobudur Society, Indonesia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
