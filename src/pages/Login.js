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
} from '@mui/material';

const Login = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Login
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
              <Typography variant="h4">Iniciar sesión</Typography>
              <Divider width="100%" />
            </Stack>
            <Stack spacing={1} width="100%">
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
                placeholder="Ingrese su contraseña"
                fullWidth
              />
            </Stack>
            <Stack spacing={2} width="100%" alignItems="center" mb={5}>
              <Button variant="contained" sx={{ width: '50%' }}>
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
