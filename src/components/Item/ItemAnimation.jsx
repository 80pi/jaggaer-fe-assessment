import React from "react";
import Lottie from "react-lottie";
import animationCartAdding from "@icons/Lottie/addToCart.json";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 150,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ItemAnimation = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationCartAdding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Lottie options={defaultOptions} />
      </Box>
    </Modal>
  );
};

export default ItemAnimation;
