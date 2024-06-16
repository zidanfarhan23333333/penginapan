import React, { createContext, useState } from "react";

// Create the context
export const AccommodationContext = createContext();

// Create the provider component
export const AccommodationProvider = ({ children }) => {
  const [accommodationDetail, setAccommodationDetail] = useState({});

  return (
    <AccommodationContext.Provider
      value={{ accommodationDetail, setAccommodationDetail }}
    >
      {children}
    </AccommodationContext.Provider>
  );
};

export default AccommodationContext;
