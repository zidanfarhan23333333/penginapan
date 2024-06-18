import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UsahaList = () => {
  const [usaha, setUsaha] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsaha = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/usaha");
        setUsaha(response.data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsaha();
  }, []);

  const deleteUsaha = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/usaha/${id}`);
      setUsaha(usaha.filter((item) => item.usaha_id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-[#F2FAFD] text-black pt-16">
      <div className="relative w-full max-w-7xl p-8">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold">Usaha List</div>
          <Link
            to="/usaha/create-usaha"
            className="bg-blue-500 text-white rounded-full py-2 px-4 font-bold"
          >
            Buat Usaha
          </Link>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {usaha.length === 0 ? (
            <p>No usaha found.</p>
          ) : (
            usaha.map((item) => (
              <div
                key={item.usaha_id}
                className="card bg-white rounded-lg shadow-md w-full"
              >
                <div
                  className="w-full h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${item.foto_usaha})` }}
                ></div>
                <div className="p-6">
                  <h1 className="text-xl font-semibold text-gray-800 mb-3">
                    {item.nama_usaha}
                  </h1>
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
                  <p className="text-sm text-gray-600 mb-4">{item.harga}</p>
                  <div className="flex gap-2">
                    <Link
                      to={`/usaha/${item.usaha_id}`}
                      className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center font-semibold text-sm"
                    >
                      Detail
                    </Link>
                    <Link
                      to={`/usaha/UpdateUsaha/${item.usaha_id}`}
                      className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md text-center font-semibold text-sm"
                    >
                      Edit
                    </Link>
                    <button
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-center font-semibold text-sm"
                      onClick={() => deleteUsaha(item.usaha_id)}
                    >
                      Delete
                    </button>
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

export default UsahaList;
