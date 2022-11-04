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
      {!imageUrls.length ? <Typography> Seleccione las imagenes</Typography>
        : (
          <div className={styles.imagesContainer}>
            {imageUrls.map(url => <img className={styles.image} key="url" alt="publicationImage" src={url} />)}
          </div>
        ) }
      <label htmlFor="file-upload" className={styles.button}>
        SUBIR IMAGENES
      </label>
      <input id="file-upload" type="file" multiple onChange={uploadImage} />
    </div>
  );
};

export default ImageUploader;
