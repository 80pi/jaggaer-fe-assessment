import React, { useState } from "react";
import {
  Box,
  Button,
  styled,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import add from "@icons/add.svg";
import ImageIcon from "../ImageIcon";
import useNotification from "../../store/useNotification";
import ItemAnimation from "./ItemAnimation";

const ItemToCart = () => {
  const [inputValue, setInputValue] = useState(1);
  const [show, setShow] = useState(false);
  const setNotification = useNotification((state) => state.setNotification);

  const AddToCartButton = styled(Button)(() => ({
    backgroundColor: "#E45144",
    color: "#fff",
    marginLeft: "2rem",
  }));

  const handleAddToCartClick = () => {
    console.log("clilc", inputValue);
    setShow(true);
    setTimeout(() => {
      setNotification(parseInt(inputValue));
      setShow(false);
    }, 2000);
  };
  return (
    <Box component="form">
      <Grid container spacing={7}>
        <Grid size={{ xs: 2, md: 4 }}>
          <TextField
            type="number"
            label="PCE"
            id="outlined-size-small"
            defaultValue={inputValue}
            size="small"
            onChange={(e) => setInputValue(e?.target?.value)}
            sx={{ width: "5rem" }}
          />
        </Grid>
        <Grid size={{ xs: 10, md: 8 }}>
          <AddToCartButton variant="contained" onClick={handleAddToCartClick}>
            <ImageIcon
              altText={"add-icon"}
              imgPath={add}
              extraStyles={{ color: "white" }}
            />
            <Typography variant="caption">Add to cart</Typography>
          </AddToCartButton>
          {show && <ItemAnimation />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemToCart;
