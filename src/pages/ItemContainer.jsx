import React from "react";
import ItemView from "../components/Item/ItemView";
import ItemDescriptionContainer from "./ItemDescriptionContainer";

const ItemContainer = () => {
  return (
    <div style={{ marginTop: "6rem" }}>
      <ItemView />
      <ItemDescriptionContainer />
    </div>
  );
};

export default ItemContainer;
