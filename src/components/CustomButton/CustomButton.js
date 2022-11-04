import React from 'react';
import { Button } from '@mui/material';
import { customButtonStyles } from './CustomButtonStyles';

const CustomButton = ({ children, ...props }) => {
  const styles = customButtonStyles();
  return (
    <Button {...props} className={styles.customButton}>{children}</Button>
  );
};
export default CustomButton;
