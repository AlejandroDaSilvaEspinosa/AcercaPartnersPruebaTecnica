import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModalOpen,
  closeModal,
  editRow,
} from "../store/slices/CarInventory";
import { Modal as ModalMUI } from "@mui/material";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#282c34",
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
};

const Modal = ({ children }) => {
  const open = useSelector(selectModalOpen);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <ModalMUI open={open} onClose={handleClose}>
      <Box sx={style}>{children}</Box>
    </ModalMUI>
  );
};
export default Modal;
