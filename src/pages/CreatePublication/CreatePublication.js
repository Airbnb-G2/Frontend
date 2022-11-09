import React, { useContext } from 'react';
import { Divider, Typography } from '@mui/material';
import CreatePublicationForm from './CreatePublicationForm';
import { createPublicationStyles } from './CreatePublicationStyles';
import { AuthContext } from '../../context/Auth';

const CreatePublication = () => {
  const { userInfo } = useContext(AuthContext);
  const { role, id } = userInfo;
  const styles = createPublicationStyles();

  return (
    <div className={styles.createPublicationContainer}>
      <Typography className={styles.title}>
        Creá tu publicación
      </Typography>
      <Divider sx={{ mt: 2, mb: 5 }} />
      <CreatePublicationForm />
    </div>
  );
};

export default CreatePublication;
