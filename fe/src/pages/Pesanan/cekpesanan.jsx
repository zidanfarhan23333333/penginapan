import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <div className="flex min-h-screen items-start justify-center bg-[#F2FAFD] text-black pt-16">
      <div className="relative w-full max-w-7xl p-8">
        <div className="flex justify-between items-left mb-4">
          <div className="text-2xl font-bold">Pesanan anda</div>
          <Link
            to="/accommodations"
            className="bg-blue-500 text-white rounded-full py-2 px-4 font-bold"
          >
            Booking
          </Link>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md">
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
            {/* <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.foto_usaha[0]})` }}
                ></div> */}
              <h2 className="text-2xl font-medium mb-2">contoh{nama_usaha}</h2>
              <p className="text-sm text-gray-600 mb-1">contoh{jenis_usaha}</p>
              <p className="text-sm text-gray-600 mb-1">contoh{alamat_usaha}</p>
              {/* <p className="text-sm text-gray-600 mb-1">contoh{deskripsi_usaha}</p> */}
              <p className="text-sm text-gray-600 mb-1">
                Nama Pemesan: {formData.nama || ""}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Nomor Ponsel: {formData.nomorPonsel || ""}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Email: {formData.email || ""}
              </p>
              <p className="text-sm text-gray-600 mb-1">Harga: Rp {harga}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default CekPesanan;
