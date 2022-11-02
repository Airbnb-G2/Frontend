import {
  Chip, CircularProgress, Paper, Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { publicationCardStyles } from './PublicationCardStyles';
import noImage from '../../assets/noImage.png';

const PublicationCard = ({ publication }) => {
  const styles = publicationCardStyles();
  const navigate = useNavigate();
  const {
    id,
    images,
    title,
    description,
    pricePerNight,
    city,
  } = publication ?? {};

  const handlePress = () => {
    navigate(`/publication/${id}`);
  };

  return (
    <button type="button" onClick={handlePress}>
      <Paper elevation={3} className={styles.cardPaper}>
        {!publication ? (
          <CircularProgress sx={{ mt: 5 }} color="primary" size={30} />
        ) : (
          <>
            <img alt={title} src={images[0] || noImage} className={styles.image} />
            <div className={styles.cardContent}>
              <Chip variant="outlined" label={city} color="primary" />
              <Typography variant="h5" align="left">{title}</Typography>
              <Typography className={styles.description}>{description}</Typography>
              <Typography color="primary" variant="h4" align="left">
                $ {pricePerNight} / Noche
              </Typography>
            </div>
          </>
        )}
      </Paper>
    </button>
  );
};

export default PublicationCard;
