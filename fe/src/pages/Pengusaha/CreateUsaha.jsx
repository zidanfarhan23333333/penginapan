import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSave } from "react-icons/fa";
import BackButton from "../../components/atoms/backButton/backButton";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const CreateUsaha = () => {
  const [user, setUser] = useState();
  const [pengusaha_id, setPengusahaId] = useState("");
  const [nama_usaha, setNamaUsaha] = useState("");
  const [deskripsi_usaha, setDeskripsiUsaha] = useState("");
  const [jenis_usaha, setJenisUsaha] = useState("");
  const [alamat_usaha, setAlamatUsaha] = useState("");
  const [fasilitas, setFasilitas] = useState("");
  const [harga, setHarga] = useState("");
  const [foto_usaha, setFotoUsaha] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const userCookie = Cookies.get("userData");

    if (userCookie) {
      const userDataObj = JSON.parse(userCookie);
      setUser(userDataObj);
      setPengusahaId(userDataObj.user_id);
    }
  }, []);

  const handleCreate = async () => {
    if (
      !pengusaha_id ||
      !nama_usaha ||
      !deskripsi_usaha ||
      !jenis_usaha ||
      !alamat_usaha ||
      !foto_usaha ||
      !fasilitas ||
      !harga
    ) {
      setError("Field are required");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/api/usaha",
        pengusaha_id,
        nama_usaha,
        deskripsi_usaha,
        jenis_usaha,
        alamat_usaha,
        foto_usaha,
        harga,
        fasilitas
      );
      if (response.status === 200) {
        console.log("Usaha created successfully:", response.data);
        navigate("/usaha");
      } else {
        console.log("Failed to create usaha");
      }
    } catch (error) {
      console.error("There was an error creating the usaha!", error);
      setError("Failed to create usaha");
    }
  };

  return (
    <div className="flex items-center justify-center pt-20">
      <div className="min-h-screen w-full flex flex-col justify-center p-8 rounded shadow-lg gap-10">
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex items-center justify-center flex-col gap-2">
          <input
            type="text"
            name="nama_usaha"
            value={nama_usaha}
            onChange={(e) => setNamaUsaha(e.target.value)}
            placeholder="Nama Usaha"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            required
          />
          <textarea
            name="deskripsi_usaha"
            value={deskripsi_usaha}
            onChange={(e) => setDeskripsiUsaha(e.target.value)}
            placeholder="Deskripsi Usaha"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full h-[150px]"
            required
          />
          <input
            type="text"
            name="jenis_usaha"
            value={jenis_usaha}
            onChange={(e) => setJenisUsaha(e.target.value)}
            placeholder="Jenis Usaha"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            required
          />
          <input
            type="text"
            name="alamat_usaha"
            value={alamat_usaha}
            onChange={(e) => setAlamatUsaha(e.target.value)}
            placeholder="Alamat Usaha"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            required
          />
          <input
            type="text" // iki type e ganti file mngko
            name="foto_usaha"
            value={foto_usaha}
            onChange={(e) => setFotoUsaha(e.target.value)}
            placeholder="Foto Usaha URL"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            required
          />
          <input
            type="text"
            name="harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            placeholder="Harga"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            required
          />
          <input
            type="text"
            name="fasilitas"
            value={fasilitas}
            onChange={(e) => setFasilitas(e.target.value)}
            placeholder="Fasilitas"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            required
          />
          <div className="flex gap-4">
            <BackButton path={"/"} />
            <button
              onClick={handleCreate}
              className="bg-gray-500 p-2 rounded mb-4 flex justify-center items-center gap-2"
            >
              <FaSave />
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUsaha;
