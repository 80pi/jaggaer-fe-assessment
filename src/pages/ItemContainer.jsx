import React from "react";
import ItemView from "../components/Item/ItemView";
import ItemDescriptionContainer from "./ItemDescriptionContainer";
import { Box } from "@mui/material";

const ItemContainer = () => {
  return (
    // <div style={{ marginTop: "6rem" }}>
    <Box sx={{ flexGrow: 1, marginTop: "6rem", width: "100%" }}>
      <ItemView />
      <ItemDescriptionContainer />
    </Box>
    // </div>
  );
};

export default ItemContainer;
