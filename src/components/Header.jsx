import React from "react";
import favorite from "@icons/favorite.svg";
import cart from "@icons/cart.svg";
import factsSoft from "@icons/facts-soft.svg";
import ImageIcon from "./ImageIcon";
import "./Header.css";
import { useMockData } from "../context/DataContext";
import Badge from "@mui/material/Badge";
import useNotification from "../store/useNotification";
import ItemToCart from "./Item/ItemToCart";

const Header = () => {
  const { mockData } = useMockData();
  const notificaiton = useNotification((state) => state.notificaiton);
  return (
    <div className="headerContainer headerSticky">
      <h4 className="headerTitle">{mockData?.article?.title}</h4>
      <div className="headerIcons">
        <ImageIcon imgPath={favorite} altText={"favorite-icon"} />
        <ImageIcon imgPath={factsSoft} altText={"fact-soft-icon"} />
        <Badge badgeContent={notificaiton} color="error">
          <ImageIcon imgPath={cart} altText={"cart-icon"} />
        </Badge>
      </div>
    </div>
  );
};

export default Header;
