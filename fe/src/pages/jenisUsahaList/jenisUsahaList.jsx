import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const JenisUsahaList = () => {
  const [usaha, setUsaha] = useState([]);
  const [error, setError] = useState(null);

  const jenis_usaha = localStorage.getItem("jenis_usaha");

  useEffect(() => {
    const fetchUsaha = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/usaha/jenis_usaha",
          {
            jenis_usaha,
          }
        );
        setUsaha(response.data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsaha();
  }, [jenis_usaha]);

  return (
    <div className="flex min-h-screen items-start justify-center bg-[#F2FAFD] text-black pt-16">
      <div className="relative w-full max-w-7xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Check the <span className="text-blue-500 ">Best deal</span> just for
            you!!!
          </h2>
          <p className="text-gray-600">
            Book now and experience the magic of a dream vacation. From
            breathtaking landscapes to romantic dinners, every moment will be
            special. Let's make this journey one to remember forever.
          </p>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usaha.length === 0 ? (
            <p className="text-center text-gray-600">No usaha found.</p>
          ) : (
            usaha.map((item) => (
              <div
                key={item.usaha_id}
                className="card bg-white rounded-lg shadow-md w-full flex flex-col"
              >
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.foto_usaha[0]})` }}
                ></div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.nama_usaha}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.deskripsi_usaha}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.jenis_usaha}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.alamat_usaha}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">{item.fasilitas}</p>
                  <p className="text-sm text-red-600 mb-4">{item.harga}</p>
                  <div className="mt-auto">
                    <Link
                      to={`/detailAkomodasi/${item.usaha_id}`}
                      className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center font-semibold text-sm"
                    >
                      Lihat
                    </Link>
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

export default JenisUsahaList;
