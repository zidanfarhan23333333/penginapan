import React, { useState } from "react";
import axios from "axios";
import { FaSave } from "react-icons/fa";
import BackButton from "../../components/atoms/backButton/backButton";

const CreateUsaha = () => {
  const [formData, setFormData] = useState({
    pengusaha_id: "",
    nama_usaha: "",
    deskripsi_usaha: "",
    jenis_usaha: "",
    alamat_usaha: "",
    foto_usaha: "",
    harga: "",
    fasilitas: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreate = async () => {
    try { 
      const response = await axios.post(
        "http://localhost:4000/api/usaha",
        formData
      );
      if (response.status === 200) {
        console.log("Usaha created successfully:", response.data);
        // Redirect or handle success
      } else {
        console.log("Failed to create usaha");
      }
    } catch (error) {
      console.error("There was an error creating the usaha!", error);
      setError("Failed to create usaha");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="min-h-screen w-full flex flex-col justify-center p-8 rounded shadow-lg gap-10">
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex items-center justify-center flex-col gap-2">
          <input
            type="text"
            name="pengusaha_id"
            value={formData.pengusaha_id}
            onChange={handleChange}
            placeholder="Pengusaha ID"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            required
          />
          <input
            type="text"
            name="nama_usaha"
            value={formData.nama_usaha}
            onChange={handleChange}
            placeholder="Nama Usaha"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            required
          />
          <textarea
            name="deskripsi_usaha"
            value={formData.deskripsi_usaha}
            onChange={handleChange}
            placeholder="Deskripsi Usaha"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full h-[150px]"
            required
          />
          <input
            type="text"
            name="jenis_usaha"
            value={formData.jenis_usaha}
            onChange={handleChange}
            placeholder="Jenis Usaha"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            required
          />
          <input
            type="text"
            name="alamat_usaha"
            value={formData.alamat_usaha}
            onChange={handleChange}
            placeholder="Alamat Usaha"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            required
          />
          <input
            type="text"
            name="foto_usaha"
            value={formData.foto_usaha}
            onChange={handleChange}
            placeholder="Foto Usaha URL"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            required
          />
          <input
            type="text"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
            placeholder="Harga"
            className="border-2 border-gray-300 rounded p-4 mb-4 w-full"
            required
          />
          <input
            type="text"
            name="fasilitas"
            value={formData.fasilitas}
            onChange={handleChange}
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
