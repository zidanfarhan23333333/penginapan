import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaToilet,
  FaUtensils,
  FaParking,
  FaWifi,
  FaChair,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useParams } from "react-router-dom";

const UsahaDetail = () => {
  const { id } = useParams();
  const [nama_usaha, setNamaUsaha] = useState("");
  const [deskripsi_usaha, setDeskripsiUsaha] = useState("");
  const [jenis_usaha, setJenisUsaha] = useState("");
  const [alamat_usaha, setAlamatUsaha] = useState("");
  const [fasilitas, setFasilitas] = useState([]);
  const [harga, setHarga] = useState("");
  const [foto_usaha, setFotoUsaha] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const fetchUsaha = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/usaha/${id}`
        );
        const data = response.data.data;
        setNamaUsaha(data.nama_usaha);
        setDeskripsiUsaha(data.deskripsi_usaha);
        setJenisUsaha(data.jenis_usaha);
        setAlamatUsaha(data.alamat_usaha);
        setFasilitas(data.fasilitas);
        setHarga(data.harga);
        setFotoUsaha(data.foto_usaha || []);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUsaha();
  }, [id]);

  return (
    <div className="flex justify-center bg-[#F2FAFD] mb-25 mt-20">
      <div className="w-full max-w-7xl flex flex-col px-4">
        <div className="flex gap-1 mb-4 w-full h-full object-cover">
          {foto_usaha.length > 0 && (
            <div className="w-1/2">
              <img
                src={foto_usaha[0]} // Display the first photo separately
                alt="Gambar 1"
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-1">
            {foto_usaha.slice(1).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Gambar ${index + 2}`}
                className="w-full h-full object-cover"
              />
            ))}
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
                <h2 className="text-2xl font-semibold mb-2">{nama_usaha}</h2>
                <p className="text-sm text-gray-600">{jenis_usaha}</p>
                <p className="text-sm text-gray-600">{alamat_usaha}</p>
                <p className="text-sm text-gray-600">{deskripsi_usaha}</p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <p className="text-2xl font-semibold mb-2">Rp {harga}/malam</p>
                <div
                  className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer text-center font-semibold hover:bg-blue-500 mt-2"
                  onClick={togglePopup}
                >
                  Pesan Sekarang
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-8 border-gray-300" />
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Fasilitas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {fasilitas.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {renderIcon(item)}
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <hr className="mt-8 border-gray-300" />
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Route</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              <div className="sm:w-1/2 sm:pr-4">
                <iframe
                  className="w-full h-96 rounded-lg"
                  src="https://maps.google.com/maps?width=100&amp;height=100&amp;hl=en&amp;q=balai%20desa%20kalegen+(Rumah%20Ferry)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Rumah Ferry Location"
                ></iframe>
              </div>
              <div className="flex flex-col sm:w-1/2">
                <h2 className="text-xl font-semibold mb-4">
                  Daftar Lokasi Terdekat
                </h2>
                <ul>
                  <li className="text-base">{nama_usaha}</li>
                  <li className="text-base">Borobudur</li>
                  <li className="text-base">Restaurant</li>
                </ul>
              </div>
            </div>
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
            {/* Add form content here */}
          </div>
        </div>
      )}
    </div>
  );
};

const renderIcon = (item) => {
  switch (item.icon) {
    case "FaWifi":
      return <FaWifi className="text-lg" />;
    case "FaToilet":
      return <FaToilet className="text-lg" />;
    case "FaUtensils":
      return <FaUtensils className="text-lg" />;
    case "FaParking":
      return <FaParking className="text-lg" />;
    case "FaChair":
      return <FaChair className="text-lg" />;
    default:
      return null;
  }
};

export default UsahaDetail;
