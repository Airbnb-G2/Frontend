import React, { useContext, useEffect, useState } from 'react';
import { Button, MenuItem, Snackbar, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import { dbGet, dbPut } from '../../utils/db';
import { COUNTRIES } from '../../constants';
import { useForm } from '../../hooks/useForm';
import { editProfileStyles } from './EditProfileStyles';
import { AuthContext } from '../../context/Auth';

const EditProfileForm = () => {
  const { userInfo } = useContext(AuthContext);
  const { id: userId } = userInfo;
  const [user, setUser] = useState(userInfo);
  const { country, firstname, lastname, mail, phone, profile_url } = user;
  const [profileImage, setProfileImage] = useState(profile_url);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const styles = editProfileStyles();

  const fetchUserData = async () => {
    dbGet(`user/${userId}`)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const { formState, handleInputChange } = useForm({
    country: country || '',
    firstname,
    lastname,
    mail,
    phone: phone || ''
  });

  const handleSubmit = () => {
    const body = { ...formState, profile_url: profileImage[0] };
    dbPut(`user/${userId}`, body)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify({ ...user, ...body }));
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
    <div className={styles.formContainer}>
      <div className={styles.multipleInputs}>
        <TextField
          fullWidth
          name="firstname"
          label="Nombre"
          variant="outlined"
          placeholder={firstname}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          name="lastname"
          label="Apellido"
          variant="outlined"
          placeholder={lastname}
          onChange={handleInputChange}
        />
      </div>
      <TextField
        fullWidth
        name="mail"
        label="Mail"
        variant="outlined"
        placeholder={mail}
        onChange={handleInputChange}
      />
      <div className={styles.multipleInputs}>
        <CustomSelect
          name="country"
          value={formState.country}
          label="País"
          onChange={handleInputChange}
        >
          {COUNTRIES.map((_country) => (
            <MenuItem key={_country} value={_country}>
              {_country}
            </MenuItem>
          ))}
        </CustomSelect>
        <TextField
          fullWidth
          name="phone"
          label="Número de télefono"
          variant="outlined"
          placeholder={phone || '+54 11 12345678'}
          type="tel"
          onChange={handleInputChange}
        />
      </div>
      <ImageUploader
        onChange={setProfileImage}
        title=" "
        buttonLabel="Subir imagen de perfil"
      />
      <div className={styles.buttonsContainer}>
        <Button size="large" onClick={handleCancel} fullWidth>
          Cancelar
        </Button>
        <Button
          size="large"
          onClick={handleSubmit}
          fullWidth
          variant="contained"
        >
          Guardar
        </Button>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={1500}
        message="El perfil se actualizo correctamente"
        severity="success"
      />
    </div>
  );
};

export default EditProfileForm;
