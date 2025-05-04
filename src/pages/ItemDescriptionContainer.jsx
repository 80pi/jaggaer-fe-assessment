import React from "react";
import ItemDetail from "../components/Item/ItemDetail";
import ItemPricingAndShipping from "../components/Item/ItemPricingAndShipping";
import { useMockData } from "../context/DataContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ItemDescriptionContainer = () => {
  const { mockData } = useMockData();
  return (
    <div
      style={{
        backgroundColor: "#EFEFEF",
        padding: "1.4rem",
        margin: "0.3rem",
      }}
    >
      <h5 style={{ color: "#ea9189" }}>DESCRIPTION</h5>
      <p>{mockData?.article?.description_short}</p>
      <p>{mockData?.article?.description_long}</p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <ItemDetail />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <ItemPricingAndShipping />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ItemDescriptionContainer;
