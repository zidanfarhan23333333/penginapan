import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaImage, FaSave } from "react-icons/fa";
import BackButton from "../../components/atoms/backButton/backButton";
import { useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase";

const UpdateUsaha = () => {
  const { id } = useParams();
  const [pengusaha_id, setPengusahaId] = useState();
  const [nama_usaha, setNamaUsaha] = useState("");
  const [deskripsi_usaha, setDeskripsiUsaha] = useState("");
  const [jenis_usaha, setJenisUsaha] = useState("");
  const [alamat_usaha, setAlamatUsaha] = useState("");
  const [fasilitas, setFasilitas] = useState("");
  const [harga, setHarga] = useState("");
  const [foto_usaha, setFotoUsaha] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsaha = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/usaha/${id}`
        );
        const data = response.data.data;
        setPengusahaId(data.pengusaha_id);
        setNamaUsaha(data.nama_usaha);
        setDeskripsiUsaha(data.deskripsi_usaha);
        setJenisUsaha(data.jenis_usaha);
        setAlamatUsaha(data.alamat_usaha);
        setFasilitas(data.fasilitas);
        setHarga(data.harga);
        setImagePreview(data.foto_usaha);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsaha();
  }, [id]);

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
    setImagePreview(URL.createObjectURL(file));

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

  const handleUpdate = async () => {
    if (progress < 100 && foto_usaha) {
      setError("Image upload is not complete. Please wait.");
      return;
    }

    try {
      const payload = {
        pengusaha_id,
        jenis_usaha,
        nama_usaha,
        deskripsi_usaha,
        alamat_usaha,
        fasilitas,
        foto_usaha: imageUrl,
        harga,
      };

      const response = await axios.put(
        `http://localhost:4000/api/usaha/${id}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.status_code === 200) {
        console.log("Usaha updated successfully:", response.data);
        navigate("/usaha");
      } else {
        setError("Failed to update usaha");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      } else if (error.request) {
        console.error("No response received from server:", error.request);
        setError("No response received from server.");
      } else {
        console.error("Other error:", error.message);
        setError("An error occurred.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center pt-20">
      <div className="w-3/5 flex flex-col justify-center p-8 rounded shadow-lg bg-white">
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <h2 className="text-xl font-bold">Edit Usaha</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <img
              src={imagePreview || "/placeholder.jpg"}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 grid grid-rows-2 gap-4">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <img
                  key={index}
                  src={imagePreview || "/placeholder.jpg"}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ))}
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <input
            type="text"
            name="nama_usaha"
            value={nama_usaha}
            onChange={(e) => setNamaUsaha(e.target.value)}
            placeholder="Nama Usaha"
            className="border-2 border-gray-300 rounded p-2 w-full"
            required
          />
          <input
            type="text"
            name="jenis_usaha"
            value={jenis_usaha}
            onChange={(e) => setJenisUsaha(e.target.value)}
            placeholder="Jenis Usaha"
            className="border-2 border-gray-300 rounded p-2 w-full"
            required
          />
          <textarea
            name="deskripsi_usaha"
            value={deskripsi_usaha}
            onChange={(e) => setDeskripsiUsaha(e.target.value)}
            placeholder="Deskripsi Usaha"
            className="border-2 border-gray-300 rounded p-2 w-full h-24 col-span-2"
            required
          />
          <input
            type="text"
            name="fasilitas"
            value={fasilitas}
            onChange={(e) => setFasilitas(e.target.value)}
            placeholder="Fasilitas"
            className="border-2 border-gray-300 rounded p-2 w-full"
            required
          />
          <input
            type="text"
            name="alamat_usaha"
            value={alamat_usaha}
            onChange={(e) => setAlamatUsaha(e.target.value)}
            placeholder="Alamat Usaha"
            className="border-2 border-gray-300 rounded p-2 w-full"
            required
          />
          <input
            type="file"
            name="foto_usaha"
            onChange={handleImageChange}
            className="border-2 border-gray-300 rounded p-2 w-full col-span-2"
          />
          <input
            type="text"
            name="harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            placeholder="Harga"
            className="border-2 border-gray-300 rounded p-2 w-full"
            required
          />
        </div>
        <div className="mt-4 flex justify-end">
          <BackButton path={"/usaha"} />
          <button
            onClick={handleUpdate}
            className={`ml-4 p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 ${
              !nama_usaha ||
              !jenis_usaha ||
              !deskripsi_usaha ||
              !alamat_usaha ||
              !fasilitas ||
              !harga
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={
              !nama_usaha ||
              !jenis_usaha ||
              !deskripsi_usaha ||
              !alamat_usaha ||
              !fasilitas ||
              !harga
            }
          >
            <FaSave />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUsaha;
