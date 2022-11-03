/* eslint-disable jsx-a11y/label-has-associated-control */
import { Typography } from '@mui/material';
import React from 'react';
import { useImageUploader } from '../../hooks/useImageUploader';
import { imageUploaderStyles } from './ImageUploaderStyles';

const ImageUploader = () => {
  const { uploadImage, imageUrls } = useImageUploader();
  const styles = imageUploaderStyles();

  return (
    <div className={styles.imageUploaderContainer}>
      <Typography> Seleccione las imagenes</Typography>
      <label htmlFor="file-upload" className={styles.button}>
        SUBIR IMAGENES
      </label>
      <input id="file-upload" type="file" multiple onChange={uploadImage} />
      {imageUrls.map(url => <img key="url" alt="hola" src={url} />)}
    </div>
  );
};

export default ImageUploader;
