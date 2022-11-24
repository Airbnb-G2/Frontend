/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useImageUploader } from '../../hooks/useImageUploader';
import { imageUploaderStyles } from './ImageUploaderStyles';

const ImageUploader = ({ onChange, title, multiple = false, buttonLabel }) => {
  const { uploadImage, imageUrls } = useImageUploader(multiple);
  useEffect(() => {
    onChange(imageUrls);
  }, [imageUrls]);

  const styles = imageUploaderStyles();

  return (
    <div className={styles.imageUploaderContainer}>
      {!imageUrls.length ? (
        <Typography> {title || 'Seleccione las imagenes'}</Typography>
      ) : (
        <div className={styles.imagesContainer}>
          {imageUrls.map((url, index) => (
            <img
              className={styles.image}
              key={`${url} + ${index}`}
              alt="publicationImage"
              src={url}
            />
          ))}
        </div>
      )}
      <label htmlFor="file-upload" className={styles.button}>
        {buttonLabel || 'SUBIR IMAGENES'}
      </label>
      <input
        id="file-upload"
        type="file"
        multiple={multiple}
        onChange={uploadImage}
      />
    </div>
  );
};

export default ImageUploader;
