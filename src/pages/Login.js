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
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { dbPost } from '../utils/db';

const Login = () => {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
      console.log(values);
      dbPost('auth/login', values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err.data));
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Login
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open} fullWidth maxWidth="sm">
        <DialogContent width="100%" sx={{ p: 6 }}>
          <Stack spacing={6} alignItems="center" width="100%">
            <Stack spacing={2} width="100%" alignItems="center">
              <Typography variant="h4">Iniciar sesión</Typography>
              <Divider width="100%" />
            </Stack>
            <Stack spacing={1} width="100%">
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
                fullWidth
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
                fullWidth
              />
            </Stack>
            <Stack spacing={2} width="100%" alignItems="center" mb={5}>
              <Button
                variant="contained"
                sx={{ width: '50%' }}
                onClick={loginForm.submitForm}
                /*    */
              >
                INGRESAR
              </Button>
              <Typography variant="body2">
                No tenés cuenta todavía?{' '}
                <Link variant="subtitle2" href="/signup" underline="hover">
                  Registrate
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
