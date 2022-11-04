import {
  Checkbox,
  Divider, FormControl, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import {
  AMENITIES, CITIES, COUNTRIES, PROVINCES,
} from '../../constants';
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
  const { formState, handleInputChange, multipleHandleSelectChange } = useForm({
    title: '',
    country: '',
    province: '',
    city: '',
    address: '',
    amenities: [],
    pricePerNight: '',
    description: '',
  });

  return (
    <div className={styles.createPublicationContainer}>
      <Typography className={styles.title}>
        Creá tu publicación
      </Typography>
      <Divider sx={{ my: 2 }} />
      <div className={styles.formContainer}>
        <TextField
          fullWidth
          name="title"
          label="Título"
          variant="outlined"
          placeholder="Ingrese un título"
          onChange={handleInputChange}
        />
        <div className={styles.multipleInputs}>
          <CustomSelect
            name="country"
            value={formState.country}
            label="País"
            onChange={handleInputChange}
          >
            {COUNTRIES.map(country => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </CustomSelect>
          <CustomSelect
            name="province"
            value={formState.province}
            label="Provincia"
            onChange={handleInputChange}
          >
            {PROVINCES[formState.country]?.map(province => (
              <MenuItem key={province} value={province}>
                {province}
              </MenuItem>
            ))}
          </CustomSelect>
        </div>
        <div className={styles.multipleInputs}>
          <CustomSelect
            name="city"
            value={formState.city}
            label="Ciudad"
            placeholder="Seleccione una ciudad"
            onChange={handleInputChange}
            input={<OutlinedInput label="Ciudad" />}
          >
            {CITIES[formState.province]?.map(city => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </CustomSelect>
          <TextField
            fullWidth
            name="address"
            label="Dirección"
            variant="outlined"
            placeholder="Ingrese la dirección"
          />
        </div>
        <div className={styles.multipleInputs}>
          <CustomSelect
            name="amenities"
            multiple
            label="Amenities"
            placeholder="Seleccione los amenities"
            input={<OutlinedInput label="Amenities" />}
            onChange={multipleHandleSelectChange}
            value={formState.amenities}
            renderValue={selected => selected.join(', ')}
          >
            {AMENITIES.map(amenity => (
              <MenuItem key={amenity} value={amenity}>
                <Checkbox checked={formState.amenities.indexOf(amenity) > -1} />
                {amenity}
              </MenuItem>
            ))}
          </CustomSelect>
          <TextField
            fullWidth
            name="pricePerNight"
            label="Precio por noche"
            variant="outlined"
            type="number"
            value={formState.pricePerNight}
            placeholder="Ingrese una cantidad"
            onChange={handleInputChange}
            InputProps={{
              startAdornment: <Typography sx={{ mr: 1 }}>$ARS</Typography>,
            }}
          />
        </div>
        <TextField
          fullWidth
          name="description"
          label="Descripción"
          variant="outlined"
          value={formState.description}
          placeholder="Ingrese la descripción"
          multiline
          maxRows={4}
          onChange={handleInputChange}
        />
        <ImageUploader onChange={setImages} />
      </div>
    </div>
  );
};

export default CreatePublication;
