/* eslint-disable consistent-return */
import {
  getDownloadURL, ref, uploadBytes,
} from 'firebase/storage';
import { useState } from 'react';
import { storage } from '../firebase';

export const useImageUploader = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const uploadFile = fileList => {
    Object.values(fileList).forEach(file => {
      if (!file) return;
      const imageRef = ref(storage, `/publications/images/${file.name}`);
      uploadBytes(imageRef, file).then(snapshot => {
        getDownloadURL(snapshot.ref).then(url => {
          setImageUrls(prev => [...prev, url]);
        });
      });
    });
  };

  const uploadImage = event => {
    uploadFile(event.target.files);
  };

  return {
    uploadImage,
    imageUrls,
  };
};
