import React, { useState } from "react";
import budur from "../../assets/budur.mp4";
import { BiSearch } from "react-icons/bi";
import borabora from "../../assets/borabora.jpg";
import maldives2 from "../../assets/maldives2.jpg";
import keywest from "../../assets/keywest.jpg";
import landing from "../../assets/landing.jpg";
import { FaHotel, FaUtensils, FaHooli } from "react-icons/fa";

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
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const Card = ({ place, index }) => (
    <div
      className={`card ${selectedCard === index ? "active" : ""} ${
        hoveredCard === index ? "hover" : ""
      }`}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => handleCardClick(index)}
    >
      <div className="p-2 flex flex-col">
        <div className="rounded-md overflow-hidden">
          <img src={place.image} alt="" className="w-full h-72 object-cover" />
        </div>
        <h5 className="text-lg md:text-xl font-medium mt-1.5">{place.name}</h5>
        <p className="text-slate-500 text-sm mt-1.5">{place.description}</p>
        <a
          href="#"
          className="text-center bg-blue-400 text-blue-700 py-1.5 rounded-md font-semibold mt-2.5 hover:bg-blue-300 focus:scale-95 transition-colors duration-200 ease-out"
        >
          Explore
        </a>
      </div>
    </div>
  );

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
        <div className="absolute bottom-10 flex justify-center space-x-4 mb-17">
          <a
            href="/penginapan"
            className="flex flex-col items-center no-underline transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
              <FaHotel className="text-4xl text-blue-500" />
            </div>
            <span className="mt-3 text-white">Penginapan</span>
          </a>
          <a
            href="/kuliner"
            className="flex flex-col items-center no-underline transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
              <FaUtensils className="text-4xl text-blue-500" />
            </div>
            <span className="mt-3 text-white">Kuliner</span>
          </a>
          <a
            href="/destinasi"
            className="flex flex-col items-center no-underline transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
              <FaUtensils className="text-4xl text-blue-500" />
            </div>
            <span className="mt-3 text-white">Destinasi</span>
          </a>
          <a
            href="/aktivitas"
            className="flex flex-col items-center no-underline transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white p-3 rounded-full shadow-lg flex items-center justify-center">
              <FaHooli className="text-4xl text-blue-500" />
            </div>
            <span className="mt-3 text-white">Aktivitas</span>
          </a>
        </div>
      </div>
      <div className="relative h-screen">
        <div className="flex items-center justify-center min-h-screen container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-7 mt-2 z-20 cursor-pointer">
            {[
              {
                image: maldives2,
                name: "Borobudur Candirejo",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est, provident quam ad maiores, fuga, aspernatur modi ducimus deleniti incidunt dolor. Molestias maiores, at sit delectus placeat praesentium quas doloremque?",
              },
              {
                image: keywest,
                name: "Tuksongo",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est, provident quam ad maiores, fuga, aspernatur modi ducimus deleniti incidunt dolor. Molestias maiores, at sit delectus placeat praesentium quas doloremque?",
              },
              {
                image: borabora,
                name: "Saka 7",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est, provident quam ad maiores, fuga, aspernatur modi ducimus deleniti incidunt dolor. Molestias maiores, at sit delectus placeat praesentium quas doloremque?",
              },
            ].map((place, index) => (
              <Card key={index} place={place} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
