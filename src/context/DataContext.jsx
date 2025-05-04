// src/context/ThemeContext.jsx
import React, { createContext, useContext, useEffect } from "react";
import mockData from "../assets/resources/data/data.json";
import useNotification from "../store/useNotification";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const setNotification = useNotification((state) => state.setNotification);
  const resetNotification = useNotification((state) => state.resetNotification);
  useEffect(() => {
    resetNotification();
    setNotification(mockData?.cart?.items);
  }, []);
  return (
    <DataContext.Provider value={{ mockData }}>{children}</DataContext.Provider>
  );
};

// ✅ Custom hook for easier consumption
export const useMockData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
