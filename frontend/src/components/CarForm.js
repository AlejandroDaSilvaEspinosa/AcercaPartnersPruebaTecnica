import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "./controls";
import useForm from "../hooks/useForm";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { getRowSelected, addUpdateCar } from "../store/slices/CarInventory";
import MaskedControls from "./maskedControls";
import Form from "./Form";

export default function CarForm() {
  const initialFormValues = useSelector(getRowSelected);

  const dispatch = useDispatch();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("chassisNumber" in fieldValues) {
      if (fieldValues.chassisNumber) {
        fieldValues.chassisNumber = fieldValues.chassisNumber
          .replace(/-/g, "")
          .toUpperCase();
      }
      temp.chassisNumber =
        fieldValues.chassisNumber.length !== 17 ||
        !/^[a-zA-Z0-9]+$/.test(fieldValues.code)
          ? "The chassis number must be 17 digits composed by numbers and letters."
          : "";
    }
    if ("orderNumber" in fieldValues)
      temp.orderNumber =
        fieldValues.orderNumber === 0 ||
        !/^[0-9]+$/.test(fieldValues.orderNumber)
          ? "This field is required and must be only composed by numbers."
          : "";

    if ("model" in fieldValues) {
      temp.model =
        fieldValues.model.length !== 0 ? "" : "This field is required.";
    }
    if ("deliveryDate" in fieldValues) {
      temp.deliveryDate = !fieldValues.deliveryDate
        ? "This field is required."
        : "";
    }
    if ("licensePlate" in fieldValues) {
      if (fieldValues.licensePlate) {
        fieldValues.licensePlate = fieldValues.licensePlate
          .replace(/-/g, "")
          .toUpperCase();
      }
      temp.licensePlate =
        fieldValues.licensePlate.length !== 7 ||
        !/^[0-9]{4}[a-zA-Z]{3}$/.test(fieldValues.licensePlate)
          ? "The license plate must be 7 digits composed by 4 numbers and 3 letters."
          : "";
    }

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFormValues,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addUpdateCar({ ...values }));
      resetForm();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Stack spacing={3} width={"100%"}>
          <Controls.InputNumber
            name="orderNumber"
            label="Número de Pedido"
            value={values.orderNumber}
            onChange={handleInputChange}
            error={errors.orderNumber}
          />
          <Controls.Input
            label="Número de Bastidor"
            name="chassisNumber"
            value={values.chassisNumber}
            onChange={handleInputChange}
            error={errors.chassisNumber}
            inputComponent={MaskedControls.ChassisMaskInput}
          />
          <Controls.Input
            label="Modelo"
            name="model"
            value={values.model}
            onChange={handleInputChange}
            error={errors.model}
          />
          <Controls.Input
            label="Matrícula"
            name="licensePlate"
            value={values.licensePlate}
            onChange={handleInputChange}
            error={errors.licensePlate}
            inputComponent={MaskedControls.LicensePlateMaskInput}
          />
          <Controls.DatePicker
            label="Fecha de entrega"
            name="deliveryDate"
            value={values.deliveryDate}
            onChange={handleInputChange}
          />

          <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
            <Button onClick={resetForm} variant="outlined">
              Resetear
            </Button>
            <Button type="submit" variant="contained">
              Guardar
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Form>
  );
}
