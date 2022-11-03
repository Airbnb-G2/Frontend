import React, { useState } from 'react';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import { useForm } from '../../hooks/useForm';
import { createPublicationStyles } from './CreatePublicationStyles';

const user = {
  role: 'guest',
  id: 4,
};

const CreatePublication = () => {
  const styles = createPublicationStyles();
  const [amenities, setAmenities] = useState([]);
  const [images, setImages] = useState([]);

  const { role, id } = user;
  const { formState, handleInputChange } = useForm({
    title: '',
    country: '',
    city: '',
    address: '',
    pricePerNight: '',
    description: '',
  });

  return (
    <div>
      <ImageUploader onChange={setImages} />
    </div>
  );
};

export default CreatePublication;
