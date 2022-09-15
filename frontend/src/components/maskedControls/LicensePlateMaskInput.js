import React from "react";
import { IMaskInput } from "react-imask";

const LicensePlateMaskInput = React.forwardRef((props, ref) => {
  const { onChange, ...other } = props;
  //Regex to check if the license plate is 3 letters capital and 4 numbers

  return (
    <IMaskInput
      {...other}
      mask="0000-aaa"
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

export default LicensePlateMaskInput;
