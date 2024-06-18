import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Mobil = () => {
  const [mobil, setMobil] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMobil = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/mobil");
        console.log("API Response:", response);
        setMobil(response.data.data);
      } catch (error) {
        console.error("API Error:", error);
        setError(error.message);
      }
    };

    fetchMobil();
  }, []);

  const deleteMobil = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/mobil/${id}`);
      setMobil(mobil.filter((item) => item.mobil_id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-[#F2FAFD] text-black pt-16">
      <div className="relative w-full max-w-7xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Check the <span className="text-blue-500">Car</span> just for you!!!
          </h2>
          <p className="text-gray-600">
            Get the latest and greatest car deals here. Whether you're looking
            for a new ride or just browsing, find your perfect match.
          </p>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mobil.length === 0 ? (
            <p className="text-center text-gray-600">No cars found.</p>
          ) : (
            mobil.map((item) => (
              <div
                key={item.mobil_id}
                className="card bg-white rounded-lg shadow-md w-full flex flex-col"
              >
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.foto_mobil})` }}
                ></div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.nama_mobil}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.deskripsi_mobil}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">{item.merek}</p>
                  <p className="text-sm text-gray-600 mb-2">{item.tipe}</p>
                  <p className="text-sm text-gray-600 mb-2">{item.warna}</p>
                  <p className="text-sm text-red-600 mb-4">{item.harga}</p>
                  <div className="mt-auto">
                    <Link
                      to={`/mobil/detail/${item.mobil_id}`}
                      className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center font-semibold text-sm"
                    >
                      View
                    </Link>
                    <div className="flex mt-2 gap-2">
                      <Link
                        to={`/mobil/update/${item.mobil_id}`}
                        className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md text-center font-semibold text-sm"
                      >
                        Edit
                      </Link>
                      <button
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-center font-semibold text-sm"
                        onClick={() => deleteMobil(item.mobil_id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Mobil;
