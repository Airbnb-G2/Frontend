import { FormControl, InputLabel, OutlinedInput, Select } from "@mui/material";
import React from "react";

const CustomSelect = ({ label, children, halfwidth, ...props }) => (
  <FormControl fullWidth>
    <InputLabel {...props}>{label}</InputLabel>
    <Select
      {...props}
      label={label}
      MenuProps={{
        disableScrollLock: true,
      }}
      input={<OutlinedInput label={label} />}
    >
      {children}
    </Select>
  </FormControl>
);

export default CustomSelect;
