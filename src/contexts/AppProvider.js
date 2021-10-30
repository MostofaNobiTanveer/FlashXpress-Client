import React, { createContext, useContext } from "react";
import useFirebase from "../hooks/useFirebase";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const authContext = useFirebase();
  return (
    <AppContext.Provider value={authContext}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
