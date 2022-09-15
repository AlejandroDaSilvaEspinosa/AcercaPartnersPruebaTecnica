import React from "react";
import {
  InputLabel,
  FormControl,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";

const Input = ({
  name,
  label,
  value,
  error = null,
  onChange,
  inputComponent = null,
}) => {
  value = value ? value : "";
  const hasError = error ? true : false;
  return (
    <FormControl>
      <InputLabel error={hasError}>{label}</InputLabel>
      <OutlinedInput
        label={label}
        error={hasError}
        value={value}
        name={name}
        onChange={onChange}
        inputComponent={inputComponent}
      />
      {hasError ? (
        <FormHelperText error id="component-error-text">
          {error}
        </FormHelperText>
      ) : (
        ""
      )}
    </FormControl>
  );
};

export default Input;
