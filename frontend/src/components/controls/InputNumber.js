import React from "react";
import { TextField } from "@mui/material";

const InputNumber = ({ name, label, value, error = null, onChange }) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      type="number"
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  );
};
export default InputNumber;
