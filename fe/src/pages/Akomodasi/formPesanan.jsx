import React, { useState } from "react";

const formPesanan = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nomorPonsel: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
};

export default formPesanan;
