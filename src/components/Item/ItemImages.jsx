import React from "react";
import packageImg from "@icons/package.svg";
import "../Header.css";

const ItemImages = () => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
      >
        <div style={{ border: "2px solid black" }}>
          <img src={packageImg} alt="image" className="itemImageStyle" />
        </div>
        <div style={{ border: "2px solid black", marginTop: "1rem" }}>
          <img src={packageImg} alt="image" className="itemImageStyle" />
        </div>
      </div>
      <div
        style={{
          border: "2px solid black",
          marginTop: "1rem",
          marginLeft: "1rem",
          width: "25rem",
          height: "21rem",
        }}
      >
        <img
          src={packageImg}
          alt="image"
          style={{ width: "16rem", height: "16rem", margin: "3rem" }}
        />
      </div>
    </>
  );
};

export default ItemImages;
