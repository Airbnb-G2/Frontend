import { MenuItem, OutlinedInput } from '@mui/material';
import React from 'react';
import { CITIES, COUNTRIES, PROVINCES } from '../../constants';
import CustomSelect from '../CustomSelect/CustomSelect';
import { searcherStyles } from './SearcherStyles';

const UbicationForm = ({ formState, handleInputChange }) => {
  const styles = searcherStyles();

  return (
    <>
      <CustomSelect
        name="country"
        value={formState.country}
        label="País"
        onChange={handleInputChange}
        size="small"
        color="white"
        className={styles.selector}
      >
        {COUNTRIES.map((country) => (
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
        size="small"
        color="white"
        className={styles.selector}
      >
        {PROVINCES[formState.country]?.map((province) => (
          <MenuItem key={province} value={province}>
            {province}
          </MenuItem>
        ))}
      </CustomSelect>
      <CustomSelect
        name="city"
        value={formState.city}
        label="Ciudad"
        placeholder="Seleccione una ciudad"
        onChange={handleInputChange}
        input={<OutlinedInput label="Ciudad" />}
        size="small"
        color="white"
        className={styles.selector}
      >
        {CITIES[formState.province]?.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </CustomSelect>
    </>
  );
};

export default UbicationForm;
