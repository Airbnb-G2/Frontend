/* eslint-disable no-unused-expressions */
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import PriceRangeForm from './PriceRangeForm';
import PublicationTypeForm from './PublicationTypeForm';
import UbicationForm from './UbicationForm';
import { searcherStyles } from './SearcherStyles';

const SEARCH_TYPES = {
  UBICATION: 'ubication',
  PRICE_RANGE: 'priceRange',
  PUBLICATION_TYPE: 'type',
};

const BUTTONS = [
  {
    value: SEARCH_TYPES.UBICATION,
    label: 'Ubicación',
  },
  {
    value: SEARCH_TYPES.PRICE_RANGE,
    label: 'Rango de precio',
  },
  {
    value: SEARCH_TYPES.PUBLICATION_TYPE,
    label: 'Tipo de publicación',
  },
];

const Searcher = () => {
  const styles = searcherStyles();
  const [searchType, setSearchType] = useState(SEARCH_TYPES.UBICATION);
  const navigate = useNavigate();

  const { formState, handleInputChange, resetFormState } = useForm({
    country: '',
    province: '',
    city: '',
    pricePerNight: '',
    minPrice: '',
    maxPrice: '',
    type: '',
  });

  const toggleButton = (event, typeSelected) => {
    resetFormState();
    setSearchType(typeSelected);
  };

  const getSearchQuery = () =>
    Object.entries(formState).reduce(
      (search, [key, value]) => (value ? `${search}${key}=${value}&` : search),
      '?',
    );

  const onSubmit = () => {
    const query = getSearchQuery();
    navigate(query);
  };

  return (
    <div className={styles.searcherContainer}>
      <div className={styles.leftColumn}>
        <ToggleButtonGroup
          value={searchType}
          exclusive
          onChange={toggleButton}
          className={styles.buttonsContainer}
          defaultChecked
        >
          {BUTTONS.map(({ value, label }) => (
            <ToggleButton key={value} variant="searchTypeButton" value={value}>
              {label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <div className={styles.inputsContainer}>
          {searchType === SEARCH_TYPES.UBICATION && (
            <UbicationForm
              formState={formState}
              handleInputChange={handleInputChange}
            />
          )}
          {searchType === SEARCH_TYPES.PRICE_RANGE && (
            <PriceRangeForm
              formState={formState}
              handleInputChange={handleInputChange}
            />
          )}
          {searchType === SEARCH_TYPES.PUBLICATION_TYPE && (
            <PublicationTypeForm
              formState={formState}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
      </div>
      <div className={styles.rightColumn}>
        <Button onClick={onSubmit} variant="searchButton">
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default Searcher;
