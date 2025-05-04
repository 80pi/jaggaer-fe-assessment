import React from "react";
import packageImg from "@icons/package.svg";
import "../Header.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useMediaQuery } from "react-responsive";

const ItemImages = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ mamarginTop: "1rem", marginLeft: "1rem" }}
    >
      {!isSmallScreen && (
        <Box sx={{ width: "50%" }}>
          <Stack spacing={2}>
            <Item>
              <img src={packageImg} alt="image" className="itemImageStyle" />
            </Item>
            <Item>
              <img src={packageImg} alt="image" className="itemImageStyle" />
            </Item>
          </Stack>
        </Box>
      )}
      <Box sx={{ flexGrow: 1 }}>
        <Item>
          <img
            src={packageImg}
            alt="image"
            style={{ width: "16rem", height: "16rem", margin: "3rem" }}
          />
        </Item>
      </Box>
    </Stack>
  );
};

export default ItemImages;
