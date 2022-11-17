import { MenuItem, OutlinedInput } from '@mui/material';
import React from 'react';
import { PUBLICATION_TYPES } from '../../constants';
import CustomSelect from '../CustomSelect/CustomSelect';
import { searcherStyles } from './SearcherStyles';

const PublicationTypeForm = ({ formState, handleInputChange }) => {
  const styles = searcherStyles();

  return (
    <CustomSelect
      name="publicationType"
      value={formState.publicationType}
      label="Tipo de propiedad"
      onChange={handleInputChange}
      size="small"
      color="white"
      className={styles.selector}
    >
      {PUBLICATION_TYPES.map((publicationType) => (
        <MenuItem key={publicationType} value={publicationType}>
          {publicationType}
        </MenuItem>
      ))}
    </CustomSelect>
  );
};

export default PublicationTypeForm;
