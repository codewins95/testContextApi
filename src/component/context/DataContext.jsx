import React, { createContext } from "react";

export const contextData = createContext();

const DataContext = ({ children }) => {
  const email = "manishdummy@gmail.com";
  const mobile = "6200027897"
  
  return (
    <contextData.Provider value={{email,mobile}}>
      {children}
    </contextData.Provider>
  );
};

export default DataContext;
