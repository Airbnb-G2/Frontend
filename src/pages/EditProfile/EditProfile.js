import React, { useContext } from 'react';
import { Divider, Typography } from '@mui/material';
import EditProfileForm from './EditProfileForm';
import { editProfileStyles } from './EditProfileStyles';
import { AuthContext } from '../../context/Auth';

const EditProfile = () => {
  const styles = editProfileStyles();

  return (
    <div className={styles.editProfileContainer}>
      <Typography className={styles.title}>Editar perfil</Typography>
      <Divider sx={{ mt: 2, mb: 5 }} />
      <EditProfileForm />
    </div>
  );
};

export default EditProfile;
