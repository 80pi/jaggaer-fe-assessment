import React from "react";
import ItemImages from "./ItemImages";
import ItemDetailDescription from "./ItemDetailDescription";

const ItemView = () => {
  return (
    <div
      style={{
        display: "flex",
        margin: "2rem",
      }}
    >
      <ItemImages />
      <ItemDetailDescription />
    </div>
  );
};

export default ItemView;
