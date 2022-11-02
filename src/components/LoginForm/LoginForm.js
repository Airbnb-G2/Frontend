import React, { useState, useContext } from 'react';
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
import { AuthContext } from '../../context/Auth';
import { dbPost } from '../../utils/db';

const LoginForm = ({ open, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);

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
      setOpen(false); // Cierra el modal pero deberia estar dentro de login para que se haga cuando success
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

export default LoginForm;
