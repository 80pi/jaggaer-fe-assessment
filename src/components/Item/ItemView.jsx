import React from "react";
import ItemImages from "./ItemImages";
import ItemDetailDescription from "./ItemDetailDescription";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ItemView = () => {
  return (
    <Box sx={{ display: "flex", margin: "2rem" }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <ItemImages />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <ItemDetailDescription />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemView;
