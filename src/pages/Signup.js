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
} from '@mui/material';

const Register = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Register
      </Button>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent width="100%" sx={{ p: 6 }}>
          <Stack spacing={6} alignItems="center" width="100%">
            <Stack spacing={2} width="100%" alignItems="center">
              <Typography variant="h4">Registro</Typography>
              <Divider width="100%" />
            </Stack>
            <Stack spacing={1} width="100%" alignItems="flex-start">
              <Stack direction="row" spacing={1}>
                <TextField
                  id="name"
                  label="Nombre"
                  variant="outlined"
                  placeholder="Ingrese su nombre"
                  fullWidth
                />
                <TextField
                  id="lastName"
                  label="Apellido"
                  variant="outlined"
                  placeholder="Ingrese su apellido"
                  fullWidth
                />
              </Stack>
              <TextField
                id="email"
                label="Correo electrónico"
                variant="outlined"
                placeholder="Ingrese su correo electrónico"
                fullWidth
              />
              <TextField
                id="password"
                label="Contraseña"
                variant="outlined"
                placeholder="Ingrese una contraseña"
                fullWidth
              />
              <TextField
                id="confirmPassword"
                label="Confirme su contraseña"
                variant="outlined"
                placeholder="Repita la contraseña"
                fullWidth
              />
              <FormControlLabel
                control={<Checkbox name="host" />}
                label="Registrarse como anfitrión"
              />
            </Stack>
            <Stack spacing={2} width="100%" alignItems="center" mb={5}>
              <Button variant="contained" sx={{ width: '50%' }}>
                Registrarse
              </Button>
              <Typography variant="body2">
                Ya tienes una cuenta?{' '}
                <Link variant="subtitle2" href="/login" underline="hover">
                  Iniciar sesión
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Register;
