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
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsaha();
  }, [id]);

  return (
    <div className="pt-28">
      <h2 className="text-lg font-semibold">Detail Usaha</h2>

      <div className="grid grid-cols-2 gap-4 ">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold">nama usaha: {nama_usaha}</h2>
          <p className="text-gray-600">deskripsi: {deskripsi_usaha}</p>
          <p className="text-gray-600">jenis usaha: {jenis_usaha}</p>
          <p className="text-gray-600">alamat: {alamat_usaha}</p>
          <p className="text-gray-600">fasilitas: {fasilitas}</p>
          <p className="text-gray-600">harga: {harga}</p>
          <p className="text-gray-600">foto: {foto_usaha}</p>
        </div>
      </div>
    </div>
  );
};

export default UsahaDetail;
