// import React, { useState, useEffect } from "react";
// import {
//   FaStar,
//   FaToilet,
//   FaUtensils,
//   FaParking,
//   FaWifi,
//   FaChair,
// } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
// import axios from "axios";
// import { useParams, useNavigate, Link } from "react-router-dom";

// const UsahaDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [nama_usaha, setNamaUsaha] = useState("");
//   const [deskripsi_usaha, setDeskripsiUsaha] = useState("");
//   const [jenis_usaha, setJenisUsaha] = useState("");
//   const [alamat_usaha, setAlamatUsaha] = useState("");
//   const [fasilitas, setFasilitas] = useState([]);
//   const [harga, setHarga] = useState("");
//   const [foto_usaha, setFotoUsaha] = useState([]);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const [formData, setFormData] = useState({
//     nama: "",
//     nomorPonsel: "",
//     email: "",
//   });

//   useEffect(() => {
//     const fetchUsaha = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:4000/api/usaha/${id}`
//         );
//         const data = response.data.data;
//         setNamaUsaha(data.nama_usaha);
//         setDeskripsiUsaha(data.deskripsi_usaha);
//         setJenisUsaha(data.jenis_usaha);
//         setAlamatUsaha(data.alamat_usaha);
//         setFasilitas(data.fasilitas);
//         setHarga(data.harga);
//         setFotoUsaha(data.foto_usaha || []); // Pastikan foto_usaha berupa array
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     fetchUsaha();
//   }, [id]);

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { nama, nomorPonsel, email } = formData;
//     if (!nama || !nomorPonsel || !email) {
//       alert("Semua bidang harus diisi!");
//       return;
//     }
//     handleBooking();
//   };

//   const handleBooking = () => {
//     navigate("/cekpesanan", {
//       state: {
//         nama_usaha,
//         deskripsi_usaha,
//         jenis_usaha,
//         alamat_usaha,
//         harga,
//         formData,
//         foto_usaha,
//       },
//     });
//   };

//   return (
//     <div className="relative">
//       <div
//         className={`flex justify-center bg-[#F2FAFD] mb-25 mt-20 transition-all duration-300 ${
//           isPopupOpen ? "blur-sm" : ""
//         }`}
//       >
//         <div className="w-full max-w-7xl flex flex-col px-4">
//           <div className="flex gap-1 mb-4 w-full h-full object-cover">
//             {foto_usaha.length > 0 && (
//               <div className="w-1/2">
//                 <img
//                   src={foto_usaha[0]} // Memastikan foto pertama muncul di sini
//                   alt="Gambar 1"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             )}
//             <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-1">
//               {foto_usaha.slice(1).map((photo, index) => (
//                 <img
//                   key={photo} // Menggunakan URL gambar sebagai kunci
//                   src={photo}
//                   alt={`Gambar ${index + 2}`}
//                   className="w-full h-full object-cover"
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="flex flex-col">
//             <div className="container w-full flex flex-col justify-center">
//               <div className="flex flex-col md:flex-row justify-between gap-4">
//                 <div className="flex flex-col">
//                   <div className="flex gap-1 mb-2">
//                     <FaStar className="w-5 h-5 text-yellow-500" />
//                     <FaStar className="w-5 h-5 text-yellow-500" />
//                     <FaStar className="w-5 h-5 text-yellow-500" />
//                     <FaStar className="w-5 h-5 text-yellow-500" />
//                     <FaStar className="w-5 h-5 text-yellow-500" />
//                   </div>
//                   <h2 className="text-2xl font-semibold mb-2">{nama_usaha}</h2>
//                   <p className="text-sm text-gray-600">{jenis_usaha}</p>
//                   <p className="text-sm text-gray-600">{alamat_usaha}</p>
//                   <p className="text-sm text-gray-600">{deskripsi_usaha}</p>
//                   <p className="text-sm text-gray-600">Harga: Rp {harga}</p>
//                   <p className="text-sm text-gray-600">
//                     Nama Pemesan: {formData.nama || ""}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Nomor Ponsel: {formData.nomorPonsel || ""}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Email: {formData.email || ""}
//                   </p>
//                 </div>
//                 <div className="flex flex-col md:w-1/3 md:items-end">
//                   <button
//                     className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4 md:mb-0"
//                     onClick={togglePopup}
//                   >
//                     Pesan Sekarang
//                   </button>
//                   <Link
//                     to="/cekpesanan"
//                     state={{ formData }}
//                     className="bg-gray-600 text-white px-4 py-2 rounded-md"
//                   >
//                     Cek Pesanan
//                   </Link>
//                 </div>
//               </div>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//                 {fasilitas.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
//                   >
//                     {renderIcon(item)}
//                     <p className="text-sm mt-2">{item.name}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isPopupOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white w-full max-w-lg p-8 rounded-lg relative z-50">
//             <IoClose
//               className="absolute top-2 right-2 w-6 h-6 cursor-pointer"
//               onClick={togglePopup}
//             />
//             <h2 className="text-2xl font-semibold mb-4">Informasi Anda</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="nama" className="block mb-2">
//                   Nama
//                 </label>
//                 <input
//                   type="text"
//                   id="nama"
//                   name="nama"
//                   value={formData.nama}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="nomorPonsel" className="block mb-2">
//                   Nomor Ponsel
//                 </label>
//                 <input
//                   type="text"
//                   id="nomorPonsel"
//                   name="nomorPonsel"
//                   value={formData.nomorPonsel}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block mb-2">
//                   Alamat Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-3 py-2 border rounded-md"
//                 />
//               </div>
//               <h3 className="text-xl font-semibold mb-4">Detail Package</h3>
//               <p className="mb-4">
//                 Book now and experience the magic of a dream vacation. From
//                 breathtaking landscapes to romantic dinners, every moment will
//                 be special.
//               </p>
//               <div className="mt-4 p-4 bg-gray-100 rounded-md mb-5">
//                 <h4 className="text-lg font-semibold">Total Harga</h4>
//                 <p className="text-lg font-light">Rp {harga}</p>
//               </div>
//               <button
//                 type="submit"
//                 className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-center font-semibold hover:bg-blue-500"
//               >
//                 Book Now
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const renderIcon = (item) => {
//   switch (item.icon) {
//     case "FaWifi":
//       return <FaWifi className="text-lg" />;
//     case "FaToilet":
//       return <FaToilet className="text-lg" />;
//     case "FaUtensils":
//       return <FaUtensils className="text-lg" />;
//     case "FaParking":
//       return <FaParking className="text-lg" />;
//     case "FaChair":
//       return <FaChair className="text-lg" />;
//     default:
//       return null;
//   }
// };

// export default UsahaDetail;
// ================================================================
import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaToilet,
  FaUtensils,
  FaParking,
  FaWifi,
  FaChair,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

const UsahaDetail = () => {
  const { id } = useParams();
  const [nama_usaha, setNamaUsaha] = useState("");
  const [deskripsi_usaha, setDeskripsiUsaha] = useState("");
  const [jenis_usaha, setJenisUsaha] = useState("");
  const [alamat_usaha, setAlamatUsaha] = useState("");
  const [harga, setHarga] = useState("");
  const [foto_usaha, setFotoUsaha] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [fasilitas, setFasilitas] = useState([]);
  const [user_id, setUser_id] = useState("");
  const [no_telp, setNoTelp] = useState("");

  const navigate = useNavigate();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const userCookie = Cookies.get("userData");

    if (userCookie) {
      const userDataObj = JSON.parse(userCookie);
      setUser_id(userDataObj.user_id);
    }
  }, []);

  const handleBooking = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/pesanan", {
        user_id,
        usaha_id: id,
        no_telp,
        nama_usaha,
        jenis_usaha,
        alamat_usaha,
        foto_usaha,
      });

      if (response.data.status_code === 200) {
        navigate("/cekpesanan");
        console.log(response.data.data);
      } else {
        console.log("create community failed");
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else if (error.request) {
        console.log("No response received from server:", error.request);
      } else {
        console.log("Request error:", error.message);
      }
    }
  };

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
        setHarga(data.harga);
        setFotoUsaha(data.foto_usaha || []);
        setFasilitas(data.fasilitas || []);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchUsaha();
  }, [id]);

  return (
    <div className="flex justify-center bg-[#F2FAFD] pb-8">
      <div className="w-full max-w-7xl flex flex-col px-4">
        <div className="flex gap-1 mb-4 w-full h-full object-cover pt-20">
          {foto_usaha.length > 0 && (
            <div className="w-1/2 rounded-md">
              <img
                src={foto_usaha[0]} // Display the first photo separately
                alt="Gambar 1"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          )}
          <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-1">
            {foto_usaha.slice(1).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Gambar ${index + 2}`}
                className="w-full h-full object-cover rounded-md"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="container w-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-col">
                <div className="flex gap-1 mb-2">
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <FaStar className="w-5 h-5 text-yellow-500" />
                  <FaStar className="w-5 h-5 text-gray-500" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">{nama_usaha}</h2>
                <p className="text-sm text-gray-600">{jenis_usaha}</p>
                <p className="text-sm text-gray-600">{alamat_usaha}</p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <p className="text-2xl font-semibold mb-2">Rp {harga}/malam</p>
                <div
                  className="bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer text-center font-semibold hover:bg-blue-500 mt-2"
                  onClick={togglePopup}
                >
                  Pesan Sekarang
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-8 border-gray-300" />
          <div>
            <h2 className="text-xl font-semibold my-2">Fasilitas</h2>
            <p className="text-sm">{fasilitas}</p>
            <p className="text-sm">{deskripsi_usaha}</p>
          </div>
          <hr className="mt-8 border-gray-300" />
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Route</h3>
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              <div className="sm:w-1/2 sm:pr-4">
                <iframe
                  className="w-full h-96 rounded-lg"
                  src="https://maps.google.com/maps?width=100&amp;height=100&amp;hl=en&amp;q=balai%20desa%20kalegen+(Rumah%20Ferry)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Rumah Ferry Location"
                ></iframe>
              </div>
              <div className="flex flex-col sm:w-1/2">
                <h2 className="text-xl font-semibold mb-4">
                  Daftar Lokasi Terdekat
                </h2>
                <ul>
                  <li className="text-base">{nama_usaha}</li>
                  <li className="text-base">Candi Borobudur</li>
                  <li className="text-base">Candi Mendut</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-lg p-8 rounded-lg relative z-50">
            <IoClose
              className="absolute top-2 right-2 w-6 h-6 cursor-pointer"
              onClick={togglePopup}
            />
            <h2 className="text-2xl font-semibold mb-4">Informasi Anda</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="nomorPonsel" className="block mb-2">
                  Nomor Ponsel
                </label>
                <input
                  type="text"
                  id="nomorPonsel"
                  name="nomorPonsel"
                  value={no_telp}
                  onChange={(e) => setNoTelp(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Detail Package</h3>
              <p className="mb-4">{fasilitas}</p>
              <p className="mb-4">{deskripsi_usaha}</p>
              <div className="mt-4 p-4 bg-gray-100 rounded-md mb-5">
                <h4 className="text-lg font-semibold">Total Harga</h4>
                <p className="text-lg font-light">Rp {harga}</p>
              </div>
              <button
                type="submit"
                onClick={handleBooking}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-center font-semibold hover:bg-blue-500"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsahaDetail;
