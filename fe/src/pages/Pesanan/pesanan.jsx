import React from "react";
import { Link, useLocation } from "react-router-dom";

const Pesanan = () => {
  const location = useLocation();
  const {
    nama_usaha,
    deskripsi_usaha,
    jenis_usaha,
    alamat_usaha,
    harga,
    formData = {},
    foto_usaha = [],
  } = location.state || {};

  return (
    <div className="flex min-h-screen items-center justify-center text-black bg-gray-100">
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          height: "auto",
          position: "relative",
          padding: 20,
        }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Pesanan Anda
        </h2>
        <div
          className="flex flex-wrap items-center justify-center bg-white rounded-lg shadow-lg p-6"
          style={{
            background: "white",
            borderRadius: 10,
            padding: 20,
          }}
        >
          <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
            {foto_usaha.length > 0 && (
              <img
                src={foto_usaha[0]}
                alt="Gambar Usaha"
                className="w-full h-auto rounded-md"
              />
            )}
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2">{nama_usaha}</h2>
            <p className="text-sm text-gray-600">{jenis_usaha}</p>
            <p className="text-sm text-gray-600">{alamat_usaha}</p>
            <p className="text-sm text-gray-600">{deskripsi_usaha}</p>
            <p className="text-sm text-gray-600">Harga: Rp {harga}</p>
            <p className="text-sm text-gray-600">
              Nama Pemesan: {formData.nama || ""}
            </p>
            <p className="text-sm text-gray-600">
              Nomor Ponsel: {formData.nomorPonsel || ""}
            </p>
            <p className="text-sm text-gray-600">
              Email: {formData.email || ""}
            </p>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <Link
            to="/accommodations"
            className="rounded-full bg-blue-500 text-white py-2 px-4 font-bold hover:bg-blue-600 transition duration-300"
            style={{ zIndex: 10 }}
          >
            + Booking
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pesanan;
