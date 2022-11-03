/* eslint-disable array-callback-return */
import {
  getDownloadURL, listAll, ref, uploadBytes,
} from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { storage } from '../../firebase';
import { useImageUploader } from '../../hooks/useImageUploader';

const ImageUploader = () => {
  // const {
  //   uploadFile,
  //   progress,
  //   imageUrl,
  //   uploadingError,
  // } = useImageUploader();

  // const [images, setImages] = useState([]);

  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, 'images/');
  const uploadFile = images => {
    Object.values(images).forEach(imageUpload => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then(snapshot => {
        getDownloadURL(snapshot.ref).then(url => {
          setImageUrls(prev => [...prev, url]);
        });
      });
    });
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={event => {
          uploadFile(event.target.files);
        }}
      />
      {imageUrls.map(url => <img key="url" alt="hola" src={url} />)}
    </div>
  );
};

export default ImageUploader;
