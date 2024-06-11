import axios from "axios";
import { useState, useEffect } from "react";

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

  return (
    <div className="min-h-screen pt-28 px-4">
      <h1 className="text-3xl font-bold mb-6">Usaha List</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 gap-4">
        {usaha.length === 0 ? (
          <p className="text-gray-600">No usaha found.</p>
        ) : (
          usaha.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold">nama usaha: {item.nama_usaha}</h2>
              <p className="text-gray-600">deskripsi: {item.deskripsi_usaha}</p>
              <p className="text-gray-600">jenis usaha: {item.jenis_usaha}</p>
              <p className="text-gray-600">alamat: {item.alamat_usaha}</p>
              <p className="text-gray-600">fasilitas: {item.fasilitas}</p>
              <p className="text-gray-600">harga: {item.harga}</p>
              <p className="text-gray-600">foto: {item.foto_usaha}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UsahaList;
