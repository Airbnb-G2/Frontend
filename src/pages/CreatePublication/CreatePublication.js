import React from 'react';
import { Divider, Typography } from '@mui/material';
import CreatePublicationForm from './CreatePublicationForm';
import { createPublicationStyles } from './CreatePublicationStyles';

const user = {
  role: 'guest',
  id: 4,
};

const CreatePublication = () => {
  const styles = createPublicationStyles();

  const { role, id } = user;

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
