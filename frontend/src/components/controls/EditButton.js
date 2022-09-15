import React from "react";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

const EditButton = ({ rowId, editRow }) => {
  const dispatch = useDispatch();
  return (
    <IconButton
      aria-label="delete"
      size="large"
      onClick={() => dispatch(editRow(rowId))}
    >
      <EditIcon />
    </IconButton>
  );
};

export default EditButton;
