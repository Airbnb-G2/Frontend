import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
} from '@mui/material';
import React from 'react';

const CustomSelect = ({
  label,
  children,
  halfwidth,
  ...props
}) => (
  <FormControl fullWidth>
    <InputLabel>{label}</InputLabel>
    <Select
      {...props}
      label={label}
      input={<OutlinedInput label={label} />}
    >
      {children}
    </Select>
  </FormControl>
);

export default CustomSelect;
