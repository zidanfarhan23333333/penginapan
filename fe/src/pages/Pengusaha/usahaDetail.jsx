import React, { useEffect, useState } from "react";
import axios from "axios";

const UsahaList = () => {
  const [usaha, setUsaha] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/usaha")
      .then((response) => {
        setUsaha(response.data.data);
      })
      .catch((error) => {
        setError(error);
        console.error("There was an error fetching the usaha!", error);
      });
  }, []);

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      {usaha.map((item) => (
        <div key={item.usaha_id}>
          <h2>{item.nama_usaha}</h2>
          <p>{item.deskripsi_usaha}</p>
          <p>{item.jenis_usaha}</p>
          <p>{item.alamat_usaha}</p>
          <p>{item.harga}</p>
        </div>
      ))}
    </div>
  );
};

export default UsahaList;
