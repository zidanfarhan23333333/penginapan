import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FaSave } from "react-icons/fa";
import BackButton from "../../components/atoms/backButton/backButton";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";

const CreateUsaha = () => {
  const [pengusaha_id, setPengusahaId] = useState();
  const [nama_usaha, setNamaUsaha] = useState();
  const [deskripsi_usaha, setDeskripsiUsaha] = useState();
  const [jenis_usaha, setJenisUsaha] = useState();
  const [alamat_usaha, setAlamatUsaha] = useState();
  const [fasilitas, setFasilitas] = useState();
  const [harga, setHarga] = useState();
  const [foto_usaha, setFotoUsaha] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const userCookie = Cookies.get("userData");

    if (userCookie) {
      const userDataObj = JSON.parse(userCookie);
      setPengusahaId(userDataObj.user_id);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setError("No file selected");
      return;
    }

    const validExtensions = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/svg+xml",
    ];

    if (!validExtensions.includes(file.type)) {
      setError(
        "Invalid file type. Please select a valid image file (JPEG, PNG, GIF, SVG)."
      );
      return;
    }

    setError("");
    setFotoUsaha(file);

    const imageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(imageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error("Upload image gagal:", error);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setImageUrl(downloadURL);
          setProgress(100);
        } catch (error) {
          console.error("Error getting download URL:", error);
        }
      }
    );
  };
  const countWords = (str) => {
    return str.trim().split(/\s+/).length;
  };

  const handleCreate = async () => {
    const wordCount = countWords(deskripsi_usaha);
    if (wordCount > 50) {
      setError("Deskripsi Usaha tidak boleh lebih dari 50 kata!!.");
      return;
    }

    if (progress < 100) {
      setError("Upload image belum selesai");
    }

    try {
      const payload = {
        pengusaha_id,
        nama_usaha,
        deskripsi_usaha,
        jenis_usaha,
        alamat_usaha,
        foto_usaha: imageUrl,
        harga,
        fasilitas,
      };

      console.log({ payload });

      const response = await axios.post(
        "http://localhost:4000/api/usaha",
        payload
      );
      if (response.data.status_code === 200) {
        console.log("Usaha created successfully:", response.data);
        navigate("/usaha");
      } else {
        console.log("Failed to create usaha");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        console.error("No response received from server:", error.request);
      } else {
        console.error("Other error:", error.message);
      }
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
          {progress > 0 && (
            <p className="text-black">Uploading {progress.toFixed(2)}%</p>
          )}
          <input
            type="file"
            name="foto_usaha"
            onChange={handleImageChange}
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
            <BackButton path={"/usaha"} />
            <button
              onClick={handleCreate}
              className={`p-4 rounded-xl mb-4 flex justify-center items-center gap-2 text-white bg-third-bg hover:bg-third-hover transition-colors duration-300`}
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
