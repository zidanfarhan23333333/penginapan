import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UsahaDetail = () => {
  const { id } = useParams();
  const [nama_usaha, setNamaUsaha] = useState();
  const [deskripsi_usaha, setDeskripsiUsaha] = useState();
  const [jenis_usaha, setJenisUsaha] = useState();
  const [alamat_usaha, setAlamatUsaha] = useState();
  const [fasilitas, setFasilitas] = useState();
  const [harga, setHarga] = useState();
  const [foto_usaha, setFotoUsaha] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsaha = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/usaha/${id}`
        );
        const data = response.data.data;
        setNamaUsaha(data.nama_usaha);
        setDeskripsiUsaha(data.deskripsi_usaha);
        setJenisUsaha(data.jenis_usaha);
        setAlamatUsaha(data.alamat_usaha);
        setFasilitas(data.fasilitas);
        setHarga(data.harga);
        setFotoUsaha(data.foto_usaha);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsaha();
  }, [id]);

  return (
    <div className="flex justify-center bg-[#F2FAFD] mb-25 mt-20">
      <div className="w-full max-w-7xl flex flex-col px-4">
        <div className="flex gap-1 mb-4 w-full h-full object-cover">
          <div className="w-1/2">
          {foto_usaha && (
            <div>
              <img src={foto_usaha} alt="Foto Usaha" className="w-full h-full object-cover" />
            </div>
          )}
          {/* {foto_usaha && (
            <div>
              <img src={foto_usaha} alt="Foto Usaha" className="w-full h-full object-cover" />
            </div>
          )}
          {foto_usaha && (
            <div>
              <img src={foto_usaha} alt="Foto Usaha" className="w-full h-full object-cover" />
            </div>
          )}
          {foto_usaha && (
            <div>
              <img src={foto_usaha} alt="Foto Usaha" className="w-full h-full object-cover" />
            </div>
          )} */}
          <div className="flex flex-col">
          <div className="container w-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-2">Nama usaha : {nama_usaha}</h2>
          
          <p className="text-gray-600">Jenis usaha : {jenis_usaha}</p>
          <p className="text-gray-600">Alamat : {alamat_usaha}</p>
          <p className="text-gray-600">Fasilitas: {fasilitas}</p>
          <p className="text-gray-600">Harga: {harga}</p>
          <p className="text-sm text-gray-600">{deskripsi_usaha}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default UsahaDetail;
