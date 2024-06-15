import React from "react";
import { Link } from "react-router-dom";

const cekpesanan = () => {
  return (
    <div className="flex min-h-screen items-center justify-center text-black">

      <div style={{width: 1700, height: 1276, position: 'relative', background: '#F2FAFD'}}>
      <div style={{width: 1520, height: 1077, left: 55, top: 212, position: 'absolute', background: 'white', borderRadius: 10}} />
      <div style={{width: 1520, height: 93, left: 55, top: 99, position: 'absolute', background: 'white', borderRadius: 10, fontSize: 32, fontFamily: 'Inter', fontWeight: '700', lineHeight: 3,}}>Pesanan anda</div>
      <Link
          to="/accommodations"
          className="rounded-full bg-blue-500 text-white py-2 px-4 font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-blue-600 transition duration-300"
          style={{ zIndex: 10 }}
        >Booking
        </Link>
        <li>
            <Link to="/accommodations">Akomodasi</Link>
          </li>
    </div>
    </div>
  );
}; 

export default cekpesanan;
