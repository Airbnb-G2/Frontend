import React, { useState } from 'react';
import {
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
  Link,
  Dialog,
  DialogContent,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { registerFormStyles } from './RegisterFormStyles';
import { dbPost } from '../../utils/db';

const RegisterForm = ({ onChangeForm }) => {
  const styles = registerFormStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formValidation = Yup.object().shape({
    name: Yup.string().required('Ingrese su nombre'),
    lastName: Yup.string().required('Ingrese su apellido'),
    mail: Yup.string().email('Email inválido').required('Ingrese un correo electrónico'),
    password: Yup.string().required('Ingrese una contraseña'),
    confirmPassword: Yup.string().required('Repita la contraseña'),
  });

  const signupForm = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      mail: '',
      password: '',
      confirmPassword: '',
      host: false,
    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      console.log(values);
      dbPost('auth/signup', values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err.data));
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className={styles.inputsContainer}>
        <div className={styles.doubleInputsContainer}>
          <TextField
            id="name"
            label="Nombre"
            variant="outlined"
            placeholder="Ingrese su nombre"
            value={signupForm.values.name}
            onChange={signupForm.handleChange}
            error={!!signupForm.errors.name}
            helperText={signupForm.errors.name}
            fullWidth
          />
          <TextField
            id="lastName"
            label="Apellido"
            variant="outlined"
            placeholder="Ingrese su apellido"
            value={signupForm.values.lastName}
            onChange={signupForm.handleChange}
            error={!!signupForm.errors.lastName}
            helperText={signupForm.errors.lastName}
            fullWidth
          />
        </div>
        <TextField
          id="mail"
          label="Correo electrónico"
          variant="outlined"
          placeholder="Ingrese su correo electrónico"
          value={signupForm.values.mail}
          onChange={signupForm.handleChange}
          error={!!signupForm.errors.mail}
          helperText={signupForm.errors.mail}
          fullWidth
        />
        <TextField
          id="password"
          label="Contraseña"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          placeholder="Ingrese una contraseña"
          value={signupForm.values.password}
          onChange={signupForm.handleChange}
          error={!!signupForm.errors.password}
          helperText={signupForm.errors.password}
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
          fullWidth
        />
        <TextField
          id="confirmPassword"
          label="Confirme su contraseña"
          variant="outlined"
          type={showConfirmPassword ? 'text' : 'password'}
          placeholder="Repita la contraseña"
          value={signupForm.values.confirmPassword}
          onChange={signupForm.handleChange}
          error={!!signupForm.errors.confirmPassword}
          helperText={signupForm.errors.confirmPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth
        />
        <FormControlLabel
          control={(
            <Checkbox
              name="host"
              value={signupForm.values.host}
              onChange={signupForm.handleChange}
              error={!!signupForm.errors.host}
              helperText={signupForm.errors.host}
            />
          )}
          label="Registrarse como anfitrión"
        />
      </div>
      <div className={styles.submitButtonContainer}>
        <Button variant="contained" fullWidth onClick={signupForm.submitForm}>
          Registrarse
        </Button>
        <div className={styles.registerPhraseContainer}>
          <Typography variant="body2" align="center">
            Ya tienes una cuenta?
          </Typography>
          <Button variant="text" onClick={onChangeForm} sx={{ p: 0 }}>
            Iniciar sesión
          </Button>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
