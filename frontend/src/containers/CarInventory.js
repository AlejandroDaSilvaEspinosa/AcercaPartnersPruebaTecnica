import React from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { getPostError, addRow, resetError } from "../store/slices/CarInventory";
import CarInventoryGrid from "../components/CarInventoryGrid";
import CarForm from "../components/CarForm";
import Modal from "../components/Modal";
import AddButton from "../components/controls/AddButton";
import { Alert, Stack } from "@mui/material";

const CarInventory = () => {
  const error = useSelector(getPostError);
  const dispatch = useDispatch();
  const handleErrorClose = () => {
    dispatch(resetError());
  };

  return (
    <>
      <Stack sx={{ width: "100%", height: "100%" }} spacing={2}>
        <CarInventoryGrid />
        <Box
          //margin
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
          sx={{ height: "fit-content", width: "100%" }}
        >
          <AddButton addRow={addRow}>Añadir</AddButton>
        </Box>
        {error ? (
          <Alert variant="outlined" severity="error" onClose={handleErrorClose}>
            {error}
          </Alert>
        ) : (
          ""
        )}
      </Stack>

      <Modal>
        <CarForm></CarForm>
      </Modal>
    </>
  );
};

export default CarInventory;
