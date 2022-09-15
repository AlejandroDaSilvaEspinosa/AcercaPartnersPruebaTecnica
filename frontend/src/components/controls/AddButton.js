import React from "react";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const AddButton = ({ addRow }) => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="contained"
      startIcon={<AddIcon />}
      onClick={() => dispatch(addRow())}
    >
      Añadir
    </Button>
  );
};

export default AddButton;
