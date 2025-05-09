import React from "react";
import { useMockData } from "../../context/DataContext";
import "../Header.css";
import discount from "@icons/discount.svg";
import { Rating } from "@mui/material";
import ItemToCart from "./ItemToCart";
import { Box } from "@mui/material";

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

  return (
    // <div
    //   style={{ marginLeft: "4rem", display: "flex", flexDirection: "column" }}
    // >
    <Box sx={{ flexGrow: 1, marginLeft: "4rem" }}>
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
      <div style={{ marginTop: "10%", display: "flex", width: "23rem" }}>
        <ItemToCart />
      </div>
    </Box>
    // </div>
  );
};

export default ItemDetailDescription;
