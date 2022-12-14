import React, { useState, useContext } from 'react';
import {
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { LoadingButton } from '@mui/lab/index';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../context/Auth';
import { loginFormStyles } from './LoginFormStyles';

const LoginForm = ({ onChangeForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { authState, login } = useContext(AuthContext);
  const styles = loginFormStyles();

  const formValidation = Yup.object().shape({
    mail: Yup.string().required('Ingrese su correo electrónico'),
    password: Yup.string().required('Ingrese su contraseña'),
  });

  const loginForm = useFormik({
    initialValues: {
      mail: '',
      password: '',
    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      login(values.mail, values.password);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className={styles.inputsContainer}>
        <TextField
          id="mail"
          name="mail"
          label="Correo electrónico"
          variant="outlined"
          placeholder="Ingrese su correo electrónico"
          value={loginForm.values.mail}
          onChange={loginForm.handleChange}
          error={!!loginForm.errors.mail}
          helperText={loginForm.errors.mail}
        />
        <TextField
          id="password"
          name="password"
          label="Contraseña"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          placeholder="Ingrese su contraseña"
          value={loginForm.values.password}
          onChange={loginForm.handleChange}
          error={!!loginForm.errors.password}
          helperText={loginForm.errors.password}
        />
      </div>
      <div className={styles.submitButtonContainer}>
        <LoadingButton
          variant="contained"
          fullWidth
          onClick={loginForm.submitForm}
          loading={authState.isLoginPending}
        >
          INGRESAR
        </LoadingButton>
        <div className={styles.registerPhraseContainer}>
          <Typography variant="body2" align="center">
            No tenés cuenta todavía?
          </Typography>
          <Button variant="text" onClick={onChangeForm} sx={{ p: 0 }}>
            Registrate
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
