import React from "react";
import { FaStar } from "react-icons/fa";
import hotelferi from "../../assets/rumahferi.jpg";

const AccommodationDetail = () => {
  return (
    <div className="relative h-auto ">
      <img 
        src={hotelferi} 
        alt="Hotel Feri"
        className="w-full h-full object-cover"
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-1">
          <FaStar className="w-5 h-5 mb-2 text-yellow-500" />
          <FaStar className="w-5 h-5 mb-2 text-yellow-500" />
          <FaStar className="w-5 h-5 mb-2 text-yellow-500" />
          <FaStar className="w-5 h-5 mb-2 text-yellow-500" />
          <FaStar className="w-5 h-5 mb-2 text-yellow-500" />
        </div>
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Rumah Ferry</h2> 
        </div>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>Fasilitas 1</div>
          <div>Fasilitas 2</div>
          <div>Fasilitas 3</div>
          <div>Fasilitas 4</div>
          <div>Fasilitas 5</div>
          <div>Fasilitas 6</div>
        </div>
      </div>
      <div className="mt-8 mx-8">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/2 sm:pr-4">
            <iframe className="w-full h-96 rounded-lg " src="https://maps.google.com/maps?width=100&amp;height=100&amp;hl=en&amp;q=balai%20desa%20kalegen+(Rumah%20Ferry)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe>
          </div>

          <div className="sm:w-1/2 p-8">
            <h2 className="text-xl font-semibold mb-4">Daftar Lokasi Terdekat</h2>
            <ul>
              <li className="text-base">Lokasi 1</li>
              <li className="text-base">Lokasi 2</li>
              <li className="text-base">Lokasi 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetail;
