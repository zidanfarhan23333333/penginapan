import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-1 lg:col-span-2">
          <h5 className="text-lg font-semibold text-blue-800 mb-4">
            Borobudur Society
          </h5>
          <p className="text-sm text-gray-700 mb-2">Whatsapp: 081294</p>
          <p className="text-sm text-gray-700 mb-2">
            Email: Borobudursociety@mail
          </p>
          <p className="text-sm text-gray-700 mb-2">
            Pusat panggilan (khusus Indonesia): 0842982
          </p>
        </div>
        <div className="col-span-1">
          <h5 className="text-lg font-semibold text-blue-800 mb-4">
            Perusahaan
          </h5>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Blog
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Karir
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Korporasi
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h5 className="text-lg font-semibold text-blue-800 mb-4">Dukungan</h5>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Pusat Bantuan
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Kebijakan Privasi
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">
                Syarat & Ketentuan
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <h5 className="text-lg font-semibold text-blue-800 mb-4">
            Copyright 2024
          </h5>
          <p className="text-sm text-gray-700">Borobudur Society, Indonesia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
