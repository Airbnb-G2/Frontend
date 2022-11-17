import { TextField } from '@mui/material';
import React from 'react';
import { searcherStyles } from './SearcherStyles';

const PriceRangeForm = ({ formState, handleInputChange }) => {
  const styles = searcherStyles();

  return (
    <>
      <TextField
        fullWidth
        name="minPrice"
        label="Mínimo"
        onChange={handleInputChange}
        size="small"
        color="white"
        type="number"
        InputProps={{
          className: styles.textField,
        }}
        InputLabelProps={{
          className: styles.textField,
        }}
      />
      <TextField
        fullWidth
        name="maxPrice"
        label="Máximo"
        type="number"
        onChange={handleInputChange}
        size="small"
        color="white"
        prefix="$"
        InputProps={{
          className: styles.textField,
        }}
        InputLabelProps={{
          className: styles.textField,
        }}
      />
    </>
  );
};

export default PriceRangeForm;
