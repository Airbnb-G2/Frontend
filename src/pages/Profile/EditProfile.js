/* eslint-disable react/destructuring-assignment */
import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Grid, Snackbar, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/material/index';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { dbGet, dbPut } from '../../utils/db';
import { AuthContext } from '../../context/Auth';
import { profileStyles } from './ProfileStyles';
import { useForm } from '../../hooks/useForm';
import ImageUploader from '../../components/ImageUploader/ImageUploader';

const EditProfile = (props) => {
  const styles = profileStyles();

  const { state } = useLocation();
  const { country, firstname, id, lastname, mail, phone } = state.user;

  const [images, setImages] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const { formState, handleInputChange, multipleHandleSelectChange } = useForm({
    firstname,
    lastname,
    country,
    mail,
    phone,
  });

  const formStateTitles = {
    firstname: { title: 'Nombre' },
    lastname: { title: 'Apellido' },
    country: { title: 'País' },
    mail: { title: 'Mail' },
    phone: { title: 'Teléfono' },
    profile_url: { title: 'Foto de perfil' },
  };

  const handleSubmit = () => {
    dbPut(`user/${id}`, {
      ...formState,
      profile_url: images.length > 0 ? images[0] : null,
    })
      .then((res) => {
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate(-1);
        }, 2500);
      })
      .catch(({ data }) => console.error(data));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Typography variant="h4" sx={{ mt: 4 }}>
        Editar perfil
      </Typography>
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 4,
          width: '100%',
        }}
      >
        {Object.keys(formState).map((formItem, idx) => (
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '30%',
              pt: 3,
            }}
          >
            <TextField
              fullWidth
              value={formState[formItem]}
              name={formItem}
              variant="outlined"
              placeholder={formStateTitles[formItem].title}
              onChange={handleInputChange}
            />
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '30%',
            pt: 3,
          }}
        >
          <ImageUploader onChange={setImages} title="Imagen de perfil" />
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            columnGap: 8,
            width: '30%',
            pt: 3,
          }}
        >
          <Button color="secondary" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Guardar
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={1500}
        message="El usuario se ha actualizado correctamente"
        severity="success"
      />
    </Box>
  );
};

export default EditProfile;
