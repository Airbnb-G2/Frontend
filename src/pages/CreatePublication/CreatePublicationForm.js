import React, { useContext, useState } from 'react';
import {
  Button,
  Checkbox,
  MenuItem,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomSelect from '../../components/CustomSelect/CustomSelect';
import ImageUploader from '../../components/ImageUploader/ImageUploader';
import { dbPost } from '../../utils/db';
import {
  AMENITIES, CITIES, COUNTRIES, PROVINCES,
} from '../../constants';
import { useForm } from '../../hooks/useForm';
import { createPublicationStyles } from './CreatePublicationStyles';
import { AuthContext } from '../../context/Auth';

const CreatePublicationForm = () => {
  const { userInfo } = useContext(AuthContext);
  const { id: userId } = userInfo;

  const styles = createPublicationStyles();
  const [images, setImages] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const { formState, handleInputChange, multipleHandleSelectChange } = useForm({
    hostId: userId,
    title: '',
    country: '',
    province: '',
    city: '',
    address: '',
    amenities: [],
    pricePerNight: '',
    description: '',
  });

  const handleSubmit = () => {
    dbPost('rental', { ...formState, images })
      .then((res) => {
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate(-1);
        }, 1500);
      })
      .catch(({ data }) => console.error(data));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
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
      <div className={styles.buttonsContainer}>
        <Button onClick={handleCancel}>Cancelar</Button>
        <Button onClick={handleSubmit} variant="contained">Crear</Button>
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={1500}
        message="La publicación se creo correctamente!"
        severity="success"
      />
    </div>
  );
};

export default CreatePublicationForm;
