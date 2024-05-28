import React from "react";
import budur from "../../assets/budur.mp4";

const Index = () => {
  return (
    <div className="relative h-screen">
      <video 
        src={budur} 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative bg-black bg-opacity-20 h-full flex items-center">
        <div className="container mx-auto pt-20 flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center items-center max-w-screen-lg">
            <a href="/penginapan" className="flex flex-col items-center no-underline max-w-xs w-full">
              <div className="bg-white p-5 rounded-full shadow-lg">
                <FaHotel className="text-4xl text-blue-500" />
              </div>
              <span className="mt-3 text-white">Penginapan</span>
            </a>
            <a href="/kuliner" className="flex flex-col items-center no-underline max-w-xs w-full">
              <div className="bg-white p-5 rounded-full shadow-lg">
                <FaUtensils className="text-4xl text-blue-500" />
              </div>
              <span className="mt-3 text-white">Kuliner</span>
            </a>
            <a href="/transportasi" className="flex flex-col items-center no-underline max-w-xs w-full">
              <div className="bg-white p-5 rounded-full shadow-lg">
                <FaCar className="text-4xl text-blue-500" />
              </div>
              <span className="mt-3 text-white">Transportasi</span>
            </a>
            <a href="/paket-wisata" className="flex flex-col items-center no-underline max-w-xs w-full">
              <div className="bg-white p-5 rounded-full shadow-lg">
                <FaMapMarkedAlt className="text-4xl text-blue-500" />
              </div>
              <span className="mt-3 text-white">Paket Wisata</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default index;
