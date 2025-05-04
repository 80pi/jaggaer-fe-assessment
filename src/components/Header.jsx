import React from "react";
import favorite from "@resources/icons/favorite.svg";
import cart from "@resources/icons/cart.svg";
import factsSoft from "@resources/icons/facts-soft.svg";
import ImageIcon from "./ImageIcon";
import "./Header.css";
import { useMockData } from "../context/DataContext";

const Header = () => {
  const { mockData } = useMockData();
  console.log(mockData);
  return (
    <div className="headerContainer">
      <h4 className="headerTitle">{mockData?.article?.title}</h4>
      <div className="headerIcons">
        <ImageIcon imgPath={favorite} altText={"favorite-icon"} />
        <ImageIcon imgPath={factsSoft} altText={"fact-soft-icon"} />
        <ImageIcon imgPath={cart} altText={"cart-icon"} />
      </div>
    </div>
  );
};

export default Header;
