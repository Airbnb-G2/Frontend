/* eslint-disable consistent-return */
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useRef } from 'react';
import { storage } from '../firebase';

export const useImageUploader = () => {
  const progress = useRef(0);
  const imageURL = useRef();

  const calculateProgress = ({ bytesTransferred, totalBytes }) => {
    progress.current = (Math.round((bytesTransferred / totalBytes) * 100));
  };

  const getImageURL = uploadTask => {
    getDownloadURL(uploadTask.snapshot.ref).then(url => {
      imageURL.current = url;
    });
  };

  const uploadFile = file => {
    if (!file) return;
    const storageRef = ref(storage, `/publications/images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      snapshop => calculateProgress(snapshop),
      error => console.error(error),
      getImageURL(uploadTask),
    );

    return imageURL.current;
  };

  return {
    uploadFile,
    progress: progress.current,
  };
};
