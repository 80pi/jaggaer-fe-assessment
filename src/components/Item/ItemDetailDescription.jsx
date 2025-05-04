import React, { useState } from "react";
import { useMockData } from "../../context/DataContext";
import "../Header.css";
import discount from "@icons/discount.svg";
import { Rating } from "@mui/material";
import { Button, styled } from "@mui/material";
import ImageIcon from "../ImageIcon";
import add from "@icons/add.svg";

const AddToCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#E45144",
  color: "#fff",
  marginTop: "-1rem",
  display: "flex",
  marginLeft: "2rem",
}));

const ItemDetailDescription = () => {
  const { mockData } = useMockData();
  const {
    title,
    supplier_name,
    supplier_link,
    price,
    transport_costs,
    currency,
    stars,
  } = mockData.article;
  const [inputValue, setInputValue] = useState(1);
  return (
    <div
      style={{ marginLeft: "2rem", display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{title}</p>
        <p style={{ marginTop: "-1rem" }}>
          <span className="itemSubHeading">by </span>
          <a
            className="aStyle"
            href={supplier_link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            {supplier_name}
          </a>
        </p>
        <Rating name="read-only" value={stars} readOnly />
        <p style={{ marginBottom: "0" }}>
          {price.toLocaleString("en-US")} {currency}
          <span className="itemSubHeading">
            +{transport_costs}
            {currency} shipping{" "}
            <img
              src={discount}
              alt={"discount-icon"}
              style={{ width: "1rem", height: "1rem" }}
            />
          </span>
        </p>
        <p className="itemSubHeading ulItem">all prices incl. 10 % taxes</p>
      </div>
      <div style={{ marginTop: "52%", display: "flex", width: "23rem" }}>
        <input
          type="number"
          placeholder="PCE"
          value={inputValue}
          style={{
            width: "3rem",
            display: "flex",
            justifyContent: "flex-start",
          }}
        />{" "}
        PCE
        <AddToCartButton variant="contained">
          <ImageIcon
            altText={"add-icon"}
            imgPath={add}
            extraStyles={{ color: "white" }}
          />
          Add To CArt
        </AddToCartButton>
      </div>
    </div>
  );
};

export default ItemDetailDescription;
