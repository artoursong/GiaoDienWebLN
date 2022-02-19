import { useState, createContext, useContext } from "react";

const TruyenContext = createContext();

const TruyenProvider = ({ children }) => {
  const [truyen, setTruyen] = useState(null);

  const value = [truyen, setTruyen];

  return (
    <TruyenContext.Provider value={value}>{children}</TruyenContext.Provider>
  );
};

const useTruyen = () => {
  const context = useContext(TruyenContext);

  if (context === null) {
    throw Error("TruyenContext error");
  }

  return context;
};

export { TruyenProvider, useTruyen };
