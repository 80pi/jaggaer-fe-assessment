// src/context/ThemeContext.jsx
import React, { createContext, useContext, useState } from "react";
import mockData from "../assets/resources/data/data.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
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
