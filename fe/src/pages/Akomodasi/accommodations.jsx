import React from "react";
import { Link } from "react-router-dom";

const Accommodation = () => {
  return (
    <div className="w-full overflow-x-hidden h-full m-0 p-0 flex flex-col">
      <section className="p-24 flex-1 flex justify-center">
        <div className="w-90 overflow-hidden">
          <h2 className="text-3xl mb-8 text-center">Akomodasi</h2>
          <div className="flex flex-wrap justify-around">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="bg-gray-200 border border-gray-400 m-4 p-8 w-1/4 rounded-lg text-center transition-transform transition-shadow hover:transform hover:shadow-lg"
              >
                <img
                  src="path/to/image.jpg"
                  alt="Hotel"
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Nama Hotel</h3>
                <p className="mb-4">Rating, dll.</p>
                <Link
                  to={`/detailAkomodasi/${i}`}
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Pesan Sekarang
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
