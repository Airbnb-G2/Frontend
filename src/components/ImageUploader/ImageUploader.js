import React from 'react';
import { useImageUploader } from '../../hooks/useImageUploader';
import { imageUploaderStyles } from './ImageUploaderStyles';

const ImageUploader = () => {
  const { uploadImage, imageUrls } = useImageUploader();
  const styles = imageUploaderStyles();

  return (
    <div className={styles.imageUploaderContainer}>
      <input type="file" multiple onChange={uploadImage} />
      {imageUrls.map(url => <img key="url" alt="hola" src={url} />)}
    </div>
  );
};

export default ImageUploader;
