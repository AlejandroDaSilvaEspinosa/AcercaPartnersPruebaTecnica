import React from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const DeleteButton = ({ rowId, deleteRow }) => {
  const dispatch = useDispatch();
  return (
    <IconButton
      aria-label="delete"
      size="large"
      onClick={() => dispatch(deleteRow(rowId))}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
