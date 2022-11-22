import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { Button, Chip, CircularProgress, Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { dbGet } from '../../utils/db';
import { publicationStyles } from './PublicationStyles';
import ReservationModal from '../../components/ReservationModal/ReservationModal';
import { AuthContext } from '../../context/Auth';
import SesionModal from '../../components/SesionModal/SesionModal';
import { getDatesInRange } from '../../utils/utils';

const Publication = () => {
  const styles = publicationStyles();
  const [loading, setLoading] = useState(false);
  const { publicationId } = useParams();
  const [publication, setPublication] = useState({});
  const [handleOpenModal, setOpenReservationModal] = useState(false);
  const { userInfo } = useContext(AuthContext);
  const [disabledDates, setDisabledDates] = useState();
  const { id: userId } = userInfo;

  const {
    title,
    images,
    pricePerNight,
    address,
    city,
    province,
    country,
    amenities,
    description,
    hostId,
    reservations,
  } = publication || {};

  const getPublication = () => {
    setLoading(true);

    dbGet(`rental/${publicationId}`)
      .then(({ rental }) => {
        setPublication(rental);
        setLoading(false);
      })
      .catch(({ data }) => console.error(data));
  };

  const getDisabledDates = () => {
    let dates = [];

    if (!reservations?.length) return;

    reservations.forEach(({ fromDate, toDate }) => {
      dates = dates.concat(getDatesInRange(fromDate, toDate));
    });
    setDisabledDates([...new Set(dates.flat())]);
  };

  const handleReservation = () => {
    setOpenReservationModal(true);
  };

  const handleCloseModal = () => {
    setOpenReservationModal(false);
  };

  useEffect(() => {
    getPublication();
  }, []);

  useEffect(() => {
    getDisabledDates();
  }, [reservations]);

  return (
    <div className={styles.publicationContainer}>
      {loading ? (
        <CircularProgress size={40} className={styles.loader} />
      ) : (
        <>
          <Typography className={styles.title}>{title}</Typography>
          <div className={styles.columnsContainer}>
            <Carousel className={styles.carouselContainer}>
              {images?.map((image, index) => (
                <img
                  className={styles.image}
                  key={index}
                  src={image}
                  alt={image}
                />
              ))}
            </Carousel>

            <div className={styles.rightColumn}>
              <div className={styles.priceContainer}>
                <Typography className={styles.pricePerNight}>
                  $ARS {pricePerNight}
                </Typography>
                {userId !== hostId && (
                  <Button
                    onClick={handleReservation}
                    variant="contained"
                    color="primary"
                  >
                    Reservar
                  </Button>
                )}
              </div>
              <Typography className={styles.location}>
                <LocationOn color="primary" />
                {address && `${address}, `}
                {city && `${city}, `}
                {province && `${province}, `}
                {country}
              </Typography>
              <div className={styles.amenitiesContainer}>
                {amenities?.map((amenitie) => (
                  <Chip
                    key={amenitie}
                    variant="outlined"
                    label={amenitie}
                    color="primary"
                  />
                ))}
              </div>
              <div className={styles.descriptionTitle}>Descripción</div>
              <div className={styles.descriptionContainer}>{description} </div>
            </div>
          </div>
          {!userId ? (
            <SesionModal open={handleOpenModal} onClose={handleCloseModal} />
          ) : (
            <ReservationModal
              open={handleOpenModal}
              onClose={handleCloseModal}
              disabledDates={disabledDates}
              publicationId={publicationId}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Publication;
