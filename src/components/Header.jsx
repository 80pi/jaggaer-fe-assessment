import React from "react";
import favorite from "@icons/favorite.svg";
import cart from "@icons/cart.svg";
import factsSoft from "@icons/facts-soft.svg";
import ImageIcon from "./ImageIcon";
import "./Header.css";
import { useMockData } from "../context/DataContext";
import Badge from "@mui/material/Badge";

const Header = () => {
  const { mockData } = useMockData();
  console.log(mockData);
  return (
    <div className="headerContainer headerSticky">
      <h4 className="headerTitle">{mockData?.article?.title}</h4>
      <div className="headerIcons">
        <ImageIcon imgPath={favorite} altText={"favorite-icon"} />
        <ImageIcon imgPath={factsSoft} altText={"fact-soft-icon"} />
        <Badge badgeContent={mockData?.cart?.items} color="error">
          <ImageIcon imgPath={cart} altText={"cart-icon"} />
        </Badge>
      </div>
    </div>
  );
};

export default Header;
