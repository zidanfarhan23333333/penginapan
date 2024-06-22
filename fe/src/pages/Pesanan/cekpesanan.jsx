import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const CekPesanan = () => {
  const [user_id, setUser_id] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesanan, setPesanan] = useState([]);

  useEffect(() => {
    const userCookie = Cookies.get("userData");

    if (userCookie) {
      const userDataObj = JSON.parse(userCookie);
      setUser_id(userDataObj.user_id);
    }
  }, []);

  useEffect(() => {
    if (user_id) {
      fetchPesanan();
      getUserDetail();
    }
  }, [user_id]);

  const fetchPesanan = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/pesanan/${user_id}/${user_id}`
      );
      const data = Array.isArray(response.data.data) ? response.data.data : [];
      setPesanan(data);
    } catch (error) {
      console.log(error.message);
      setPesanan([]);
    }
  };

  const getUserDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/auth/${user_id}`
      );
      setNama(response.data.data.name);
      setEmail(response.data.data.email);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/pesanan/${id}`
      );

      if (response.status === 200) {
        setPesanan(pesanan.filter((item) => item.id !== id));
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-start justify-center bg-[#F2FAFD] text-black pt-16">
      <div className="relative w-full max-w-7xl p-8">
        <div className="flex justify-between items-left mb-4">
          <div className="text-2xl font-bold">Pesanan anda</div>
          <Link
            to="/accommodations"
            className="bg-blue-500 text-white rounded-full py-2 px-4 font-bold"
          >
            Booking now
          </Link>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
          {pesanan.length === 0 ? (
            <div className="text-center text-gray-600">Tidak ada pesanan</div>
          ) : (
            pesanan.map((item, index) => (
              <div
                className="flex flex-wrap items-center justify-center mb-4"
                key={index}
              >
                <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
                  {item.foto_usaha && item.foto_usaha.length > 0 && (
                    <img
                      src={item.foto_usaha[0]}
                      alt="Gambar Usaha"
                      className="w-full h-auto rounded-md shadow-md"
                    />
                  )}
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl font-medium mb-2">
                    {item.nama_usaha}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1">
                    {item.jenis_usaha}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    {item.alamat_usaha}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Nama Pemesan: {nama}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Nomor Ponsel: {item.no_telp}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">Email: {email}</p>
                </div>
                <div className="mt-auto">
                  <Link
                    to={`/view/${item.pesanan_id}`}
                    className="block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-center font-semibold text-sm"
                  >
                    Lihat
                  </Link>
                  <button
                    onClick={() => handleDelete(item.pesanan_id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-center font-semibold text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CekPesanan;
