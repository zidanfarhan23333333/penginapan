import React from "react";
import { useLocation } from "react-router-dom";

const CekPesanan = () => {
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
      <div className="w-full max-w-4xl bg-[#F2FAFD] p-5 rounded-lg shadow-md">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Pesanan Anda
          </h2>
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0">
              {foto_usaha.length > 0 && (
                <img
                  src={foto_usaha[0]}
                  alt="Gambar Usaha"
                  className="w-full h-auto rounded-md shadow-md"
                />
              )}
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold mb-2">{nama_usaha}</h2>
              <p className="text-sm text-gray-600 mb-1">{jenis_usaha}</p>
              <p className="text-sm text-gray-600 mb-1">{alamat_usaha}</p>
              <p className="text-sm text-gray-600 mb-1">{deskripsi_usaha}</p>
              <p className="text-sm text-gray-600 mb-1">Harga: Rp {harga}</p>
              <p className="text-sm text-gray-600 mb-1">
                Nama Pemesan: {formData.nama || ""}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Nomor Ponsel: {formData.nomorPonsel || ""}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Email: {formData.email || ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CekPesanan;
