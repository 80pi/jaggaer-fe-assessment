import React from "react";
import Header from "../components/Header";
import ItemContainer from "./ItemContainer";

export const AppContainer = () => {
  return (
    <div style={{ margin: "-0.45rem" }}>
      <Header />
      <ItemContainer />
    </div>
  );
};
