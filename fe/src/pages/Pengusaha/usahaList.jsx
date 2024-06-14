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
    <div className="min-h-screen pt-28 px-4">
      <div className="flex w-full justify-between">
        <div className="text-3xl font-bold mb-6">Usaha List</div>
        <Link
          to="/usaha/create-usaha"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 cursor-pointer items-center justify-center rounded"
        >
          Buat Usaha
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 gap-4">
        {usaha.length === 0 ? (
          <p className="text-gray-600">No usaha found.</p>
        ) : (
          usaha.map((item) => (
            <Link
              to={`/usaha/${item.usaha_id}`}
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <h2 className="text-lg font-semibold">
                nama usaha: {item.nama_usaha}
              </h2>
              <p className="text-gray-600">deskripsi: {item.deskripsi_usaha}</p>
              <p className="text-gray-600">jenis usaha: {item.jenis_usaha}</p>
              <p className="text-gray-600">alamat: {item.alamat_usaha}</p>
              <p className="text-gray-600">fasilitas: {item.fasilitas}</p>
              <p className="text-gray-600">harga: {item.harga}</p>
              <p className="text-gray-600">foto: {item.foto_usaha}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default UsahaList;
