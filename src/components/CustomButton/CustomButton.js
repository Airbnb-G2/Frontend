import React from 'react';
import { Button } from '@mui/material';
import { customButtonStyles } from './CustomButtonStyles';

const CustomButton = ({ children }) => {
  const styles = customButtonStyles();
  return (
    <Button className={styles.customButton}>{children}</Button>
  );
};
export default CustomButton;
