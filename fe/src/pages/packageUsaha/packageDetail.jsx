import React from "react";
import { FaHotel, FaUtensils, FaHooli, FaCarAlt } from "react-icons/fa";

const PackageDetail = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Full Package Details</h1>
      <div className="flex space-x-4">
        <div className="package-card p-4 border rounded shadow">
          <FaHotel size={40} className="text-blue-500 mb-2" />
          <h2 className="text-xl font-semibold">Hotel</h2>
          <p className="text-sm">
            Description of the hotel included in the full package.
          </p>
        </div>
        <div className="package-card p-4 border rounded shadow">
          <FaUtensils size={40} className="text-blue-500 mb-2" />
          <h2 className="text-xl font-semibold">Restaurant</h2>
          <p className="text-sm">
            Description of the restaurant included in the full package.
          </p>
        </div>
        <div className="package-card p-4 border rounded shadow">
          <FaHooli size={40} className="text-blue-500 mb-2" />
          <h2 className="text-xl font-semibold">Destination</h2>
          <p className="text-sm">
            Description of the destination included in the full package.
          </p>
        </div>
        <div className="package-card p-4 border rounded shadow">
          <FaCarAlt size={40} className="text-blue-500 mb-2" />
          <h2 className="text-xl font-semibold">Car Rental</h2>
          <p className="text-sm">
            Description of the car rental included in the full package.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
