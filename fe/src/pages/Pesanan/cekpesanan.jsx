import React from "react";

const cekpesanan = () => {
  return (
    <div className="flex min-h-screen items-center justify-center text-black">

      <div style={{width: 1700, height: 2076, position: 'relative', background: '#F2FAFD'}}>
      <div style={{width: 1330, height: 1477, left: 55, top: 212, position: 'absolute', background: 'white', borderRadius: 10}} />
      <div style={{width: 1330, height: 93, left: 55, top: 99, position: 'absolute', background: 'white', borderRadius: 10}} />      
      <div style={{left: 99, top: 134, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word'}}>Pesanan anda</div>
    </div>
    </div>
  );
}; 

export default cekpesanan;
