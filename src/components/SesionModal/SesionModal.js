import {
  Dialog, DialogContent, Divider, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';
import { sesionModalStyles } from './SesionModalStyles';

const SesionModal = ({ open, onClose }) => {
  const styles = sesionModalStyles();
  const [registerForm, setRegisterForm] = useState(false);

  const changeForm = () => {
    setRegisterForm(!registerForm);
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogContent className={styles.modalContainer}>
        <div className={styles.titleContainer}>
          <Typography variant="h3">{registerForm ? 'Registro' : 'Iniciar sesión'}</Typography>
          <Divider width="100%" />
        </div>
        {registerForm ? <RegisterForm onChangeForm={changeForm} />
          : <LoginForm onChangeForm={changeForm} />}
      </DialogContent>
    </Dialog>
  );
};

export default SesionModal;
