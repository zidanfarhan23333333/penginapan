import React, { useState } from "react";
import { FaStar, FaToilet, FaUtensils, FaParking, FaWifi, FaChair } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5"; // Icon untuk tombol silang
import hotelferi from "../../assets/rumahferi.jpg";
import gambarpantai from "../../assets/maldives.jpg";
// import kamar from "../../assets/hotel2.jpg";
// import hotel2 from "../../assets/hotel1.jpg";
import gambarpantai3 from "../../assets/maldives2.jpg";

const AccommodationDetail = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl flex flex-col px-4">
        <div className="flex gap-1 mb-4 w-full h-full object-cover">
          <div className="w-1/2">
            <img src={hotelferi} alt="Hotel Feri" className="w-full h-full object-cover" />
          </div>
          <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-1">
            <img src={gambarpantai} alt="Gambar 2" className="w-full h-full object-cover" />
            <img src={gambarpantai} alt="Gambar 3" className="w-full h-full object-cover" />
            <img src={gambarpantai3} alt="Gambar 4" className="w-full h-full object-cover" />
            <img src={gambarpantai} alt="Gambar 5" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="container w-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-col">
                <div className="flex gap-1 mb-2">
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <FaStar className="w-5 h-5 text-yellow-500" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">Rumah Ferry</h2>
                <p className="text-sm text-gray-600">Rating: 5.0/5.0</p>
                <p className="text-sm text-gray-600">Jl. Raya Kalegen, Bandongang</p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <p className="text-2xl font-semibold mb-2">Rp100rb/malam</p>
                <div
                  className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer text-center hover:bg-blue-500 mt-2"
                  onClick={togglePopup}
                >
                  Pesan Sekarang
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-8 border-gray-300" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <FaParking className="text-lg" />
              <p>Parking Area</p>
            </div>
            <div className="flex items-center gap-2">
              <FaWifi className="text-lg" />
              <p>WiFi</p>
            </div>
            <div className="flex items-center gap-2">
              <FaUtensils className="text-lg" />
              <p>Free Breakfast</p>
            </div>
            <div className="flex items-center gap-2">
              <FaChair className="text-lg" />
              <p>Ruang Tamu</p>
            </div>
            <div className="flex items-center gap-2">
              <FaParking className="text-lg" />
              <p>Parking Area</p>
            </div>
            <div className="flex items-center gap-2">
              <FaToilet className="text-lg" />
              <p>Kamar Mandi</p>
            </div>
          </div>
          <hr className="mt-8 border-gray-300" />
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-8 mt-8">
          <div className="sm:w-1/2 sm:pr-4">
            <iframe
              className="w-full h-96 rounded-lg"
              src="https://maps.google.com/maps?width=100&amp;height=100&amp;hl=en&amp;q=balai%20desa%20kalegen+(Rumah%20Ferry)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Rumah Ferry Location"
            ></iframe>
          </div>
          <div className="flex flex-col sm:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Daftar Lokasi Terdekat</h2>
            <ul>
              <li className="text-base">Lokasi 1</li>
              <li className="text-base">Lokasi 2</li>
              <li className="text-base">Lokasi 3</li>
            </ul>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-lg p-8 rounded-lg relative">
            <IoClose
              className="absolute top-2 right-2 w-6 h-6 cursor-pointer"
              onClick={togglePopup}
            />
            <h2 className="text-2xl font-semibold mb-4">Form Pemesanan</h2>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default AccommodationDetail;
