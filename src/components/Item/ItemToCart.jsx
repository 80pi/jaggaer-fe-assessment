import React, { useState } from "react";
import { Button, styled } from "@mui/material";
import add from "@icons/add.svg";
import ImageIcon from "../ImageIcon";
import useNotification from "../../store/useNotification";
import ItemAnimation from "./ItemAnimation";

const AddToCartButton = styled(Button)(() => ({
  backgroundColor: "#E45144",
  color: "#fff",
  marginTop: "-1rem",
  display: "flex",
  marginLeft: "2rem",
  position: "relative",
}));

const ItemToCart = () => {
  const [inputValue, setInputValue] = useState(1);
  const [show, setShow] = useState(false);
  const setNotification = useNotification((state) => state.setNotification);

  const handleAddToCartClick = () => {
    console.log("clilc", inputValue);
    setShow(true);
    setTimeout(() => {
      setNotification(parseInt(inputValue));
      setShow(false);
    }, 2000);
  };
  return (
    <>
      <input
        type="number"
        placeholder="PCE"
        value={inputValue}
        onChange={(e) => setInputValue(e?.target?.value)}
        style={{
          width: "3rem",
          display: "flex",
          justifyContent: "flex-start",
        }}
      />{" "}
      PCE
      <AddToCartButton
        id="watched-button"
        variant="contained"
        onClick={handleAddToCartClick}
      >
        <ImageIcon
          altText={"add-icon"}
          imgPath={add}
          extraStyles={{ color: "white" }}
        />
        <p style={{ margin: "0", marginTop: "0.2rem" }}>Add To Cart</p>
      </AddToCartButton>
      {show && <ItemAnimation />}
    </>
  );
};

export default ItemToCart;
